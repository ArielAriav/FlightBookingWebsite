# ✈️ Flight Booking WebApp

A complete flight booking system including a frontend UI, backend API, and database – all containerized using Docker.

## 🧱 System Architecture

This project consists of the following services:

- **Frontend**: A React app built with Vite
- **Backend**: A Node.js server using Express
- **Database**: PostgreSQL (with persistent volume)

## 🚀 Getting Started

> Requirements: [Docker Desktop](https://www.docker.com/products/docker-desktop/) must be installed and running.

### 1. Clone the repository (if needed)

```bash
git clone https://github.com/ArielAriav/FlightBookingWebsite.git
cd flight-booking-webapp
```

### 2. Start the system

```bash
docker compose up --build
```

### 3. Access the services

- Frontend: http://localhost:5173  
- Backend API: http://localhost:3000  
- PostgreSQL DB: exposed on port 5432 (used internally by backend)

## 🧪 Running Tests

### Backend (Express)

```bash
cd backend
npm install
npm test
```

### Frontend (React)

```bash
cd frontend
npm install
npm test
```

> Tests include basic API routes (GET/POST) and UI functionality.

## ✅ Test Coverage Summary

- **Backend**
  - Booking creation, retrieval, and deletion
  - Status code and error handling checks

- **Frontend**
  - Displaying flight and booking data
  - User interaction and form validation
  - Routing behavior

## ⚙️ Technologies Used

- Node.js 20
- Express.js
- React + Vite
- PostgreSQL 16
- Docker Compose (v3.9)

## 📁 Project Structure

```
flight-booking-webapp/
├── backend/
│   ├── index.js
│   ├── routes/
│   ├── tests/
├── frontend/
│   ├── src/
│   ├── app.test.jsx
├── docker-compose.yml
└── README.md
```

## 👩‍💻 Author

Final Project – Introduction to DevOps  
SCE College of Engineering