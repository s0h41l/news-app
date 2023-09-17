# News App

A multi-lingual news application that allows you to browse news articles from various sources. This project uses Django for the backend API and React for the frontend interface.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Python 3.x installed (for Django backend)
- Node.js and Yarn installed (for React frontend)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/s0h41l/news-app.git
   cd news-app
   ```

2. Setup & Run the Django backend

   ```
    # Navigate to the backend directory

    # Install Python dependencies

    pip install -r requirements.txt

    # Run Django migrations

    python manage.py migrate

    # Start the Django development server

    python manage.py runserver
   ```

3. Setup & Run the Frontend

   ````
   # Open new terminal and navigate to the frontend directory

   # Install frontend dependencies using Yarn

   yarn or npm install

   # Start the React development server

   yarn start or npm start```

   ````

4. Access the application:
   ```
   Django backend API: http://localhost:8000/api/news
   React frontend: http://localhost:3000
   ```
