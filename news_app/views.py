import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import GetNewsRequestSerializer
from datetime import datetime, timedelta
from retrying import retry

NEWS_API_KEY = '5c032e0e2434443c996196fb548fb5ab'
NEWS_API_URL = 'https://newsapi.org/v2/everything'

@api_view(['GET'])
def get_news(request):

    serializer = GetNewsRequestSerializer(data=request.query_params)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    q = serializer.validated_data['q']
    language = serializer.validated_data['language']

    end_date = datetime.now()
    start_date = end_date - timedelta(days=7)

    params = {
        'q': q,
        'from': start_date.strftime('%Y-%m-%d'),
        'sortBy': 'publishedAt',
        'language': language,
        'apiKey': NEWS_API_KEY
    }

    @retry(stop_max_attempt_number=3, wait_fixed=2000)  # Retry 3 times with a 2 seconds interval
    def make_api_request():
        response = requests.get(NEWS_API_URL, params=params)
        response.raise_for_status()
        return response.json()

    try:
        response = make_api_request()
        return Response(response['articles'])

    except requests.exceptions.RequestException:
        return Response({'error': 'Failed to fetch data from News API'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
