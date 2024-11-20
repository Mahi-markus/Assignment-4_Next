### Hotel Details App

This project consists of two parts:

Frontend - A Next.js app that displays hotel details.
Backend - A Node.js and Express.js API that serves hotel data.
Requirements
Before you begin, ensure you have the following installed on your machine:

Node.js (version 14.x or above)
npm (Node Package Manager)
Installation Instructions

## 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Mahi-markus/assignment-4_next.git
```

## 2. Set Up Backend API (Node.js & Express)

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the API server on port 3001:

```bash
npm run dev
The backend API will now be running on http://localhost:3001.
```

## 3. Set Up Frontend (Next.js)

Navigate to the root folder of the project:

```bash
cd ..
```

Install dependencies:

```bash
npm install
```

Start the Next.js app on port 3000:

```bash
npm run dev
```

```bash
The frontend will now be running on http://localhost:3000.
```

## 4. CORS Configuration

Ensure that your backend API allows cross-origin requests from the frontend by using CORS. The backend should have a CORS middleware setup (which you mentioned is already done).

```bash
const cors = require('cors');
app.use(cors());
```

## 5. Verify API Connection

Make sure the frontend can successfully fetch data from the backend API. The data will be displayed on hotel detail pages like this:

```bash
http://localhost:3000/hotel-details/{slug}/{identifier}

```

For example, you can test the following URL:

```bash
http://localhost:3000/hotel-details/luxury-beach/0a242a2e-812c-4a7a-a9e2-89f4411060b9
This should display the details for the hotel with the slug luxury-beach and identifier 0a242a2e-812c-4a7a-a9e2-89f4411060b9.
```

## Project Structure

Frontend (Next.js)
The frontend application is a simple Next.js app that displays hotel details fetched from the backend API.

/pages/hotel-details/[slug]/[identifier].js: The dynamic page that displays hotel information.
Backend (Node.js & Express)
The backend API is responsible for serving hotel data to the frontend.

/api/hotel/{slug}/{identifier}: The API endpoint that provides hotel data based on slug and identifier.
API Endpoints

1. GET /hotel/{slug}/{identifier}
   Fetches hotel details by slug and identifier.

Example url:

```bash
http://localhost:3000/hotel-details/luxury-beach/0a242a2e-812c-4a7a-a9e2-89f4411060b9

```

## for testing

1. jest has been used use

installation:

```bash
​npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom ts-jest @types/jest
```

2. Run the command:

```bash
npm test
```
