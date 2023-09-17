from rest_framework import serializers

class GetNewsRequestSerializer(serializers.Serializer):
    q = serializers.ChoiceField(
        choices=[
            'apple',
            'meta',
            'netflix',
            'google',
            'twitter',
            'tesla',
            '*'
        ],
        required=True
    )

    language = serializers.ChoiceField(choices=['en', 'ar'], default='en')
