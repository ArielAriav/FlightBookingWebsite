# ✈️ Flight Booking WebApp

A complete flight booking system including a frontend UI, backend API, and database – all containerized using Docker.

---

## 🧱 System Architecture

This project consists of the following services:

- **Frontend**: A React app built with Vite  
- **Backend**: A Node.js server using Express  
- **Database**: PostgreSQL (with persistent volume)

---

## 🚀 Getting Started

> Requirements: [Docker Desktop](https://www.docker.com/products/docker-desktop/) must be installed and running.

### 1. Clone the repository

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

---

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

---

## ✅ Test Coverage Summary

- **Backend**
  - Booking creation, retrieval, and deletion
  - Status code and error handling checks

- **Frontend**
  - Displaying flight and booking data
  - User interaction and form validation
  - Routing behavior

---

## ⚙️ Technologies Used

- Node.js 20  
- Express.js  
- React + Vite  
- PostgreSQL 16  
- Docker Compose (v3.9)

---

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
├── start-dev.bat
└── README.md
```

---

## 🧪 Running Cypress End-to-End Tests

This project includes end-to-end tests using [Cypress](https://www.cypress.io/) to ensure that the main user flows (searching for a flight, booking, and viewing bookings) work correctly.

### 📁 Test File Location

All Cypress test files are located inside:

```
frontend/cypress/e2e/
```

The main test file is:
```
full-flow.cy.js
```

### ▶️ How to Run the Tests

1. **Start the application**  
   First, make sure the application is up and running locally:

   ```bash
   docker compose up
   ```

2. **Open a new terminal and navigate to the frontend folder**:

   ```bash
   cd frontend
   ```

3. **Install Cypress (if you haven’t yet)**:

   ```bash
   npm install
   ```

4. **Launch the Cypress Test Runner**:

   ```bash
   npx cypress open
   ```

5. **In the Cypress UI**, click on the file named `full-flow.cy.js` to start the test.

> ✅ **Note**: Cypress tests expect the frontend to be running on `http://localhost:5173`. Make sure this is consistent with your development environment.

---

## 🖥️ Running the App Locally (Without Docker)

For development purposes, you can start the application locally without Docker by using the provided batch script.

### ▶️ `start-dev.bat`

This script automates the startup of both the backend and frontend servers.

### 📁 Location

The script is located in the project root:

```
start-dev.bat
```

### ⚙️ What it Does

- Opens two terminal windows:
  1. One for starting the backend Express server (`cd backend && npm start`)
  2. One for starting the frontend React app (`cd frontend && npm run dev`)

### 🏃‍♀️ How to Run It

1. Double-click `start-dev.bat` in Windows Explorer  
   **OR**
2. Run from the terminal:

   ```bash
   ./start-dev.bat
   ```

> 💡 Useful for development and debugging outside the Docker environment.

---

## 👩‍💻 Author

Final Project – Introduction to DevOps  
SCE College of Engineering