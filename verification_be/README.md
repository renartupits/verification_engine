# 🛡️ Verification Tool Backend

The **verification_be** is the backend component of our verification engine, designed to provide a simple API for managing verification checks. Built with **Node.js**, **TypeScript**, and **Express**, this application exposes endpoints for retrieving a list of checks and submitting results.

## 🚀 Features
- Designed as a RESTful API.
- Two main endpoints for fetching and submitting verification checks.
- Basic validation for submitted check results.

## 🛠️ Getting Started

### Prerequisites

Before running the app, make sure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **Npm** package manager (or **yarn** if you prefer)
- **Docker** (optional but recommended for containerized environments)

### Installation

1. **Clone the repo**:

   ```bash
   git clone https://github.com/renartupits/verification_engine.git
   cd verification_engine/verification_be
   ```

2. **Install dependencies**:

   ```bash
   npm install
   npm run build
   ```

### Running the App

There are two ways to get the app up and running:

1. **With Npm (local development)**:

   ```bash
   npm run dev
   ```

   This will start the app on [http://localhost:3000](http://localhost:3000).

2. **With Docker Compose**:
   If you'd prefer to run the app inside a Docker container, simply run:

   ```bash
   docker-compose up --build
   ```

   This will build and run the app inside a container. The app should still be accessible at [http://localhost:3000](http://localhost:3000).

### Running Tests

To run the test suite, use the following command:

```bash
npm run test
   ```

This will run the unit tests and give you feedback on the current state of the app.

## 📀 API Endpoints
### 1. Get List of Checks

- **Endpoint:** `GET /verification/checks/list`
- **Description:** Retrieves a list of check items.
- **Response:** Returns a hardcoded list of check items in JSON format.

**Example Response:**
```json
[
    {
        "checkId": "aaa",
        "description": "Check item 1"
    },
    {
        "checkId": "bbb",
        "description": "Check item 2"
    }
]
```
### 2. Submit checks

- **Endpoint:** `POST /verification/checks/submit`
- **Description:** Submit checks.
- **Response:** Returns boolean with check validation response

**Example Request:**
```json
{
  "results": [
    {
      "checkId": "check-1",
      "result": "yes"
    },
    {
      "checkId": "check-2",
      "result": "yes"
    },
    {
      "checkId": "check-3",
      "result": "yes"
    }
  ]
}
```

**Example Response:**
```json
{
  "success": "true"
}
```

## 📦 Project Structure

The project structure is organized to maintain scalability and separation of concerns. Here’s a quick overview:

```
/src
    /controller       # Contains the logic for handling requests and responses
    /interfaces       # TypeScript interfaces for type safety and structure
    /middlewares      # Custom middleware functions for request handling
    /router           # Defines the API routes
    /service          # Contains business logic and interacts with data sources
    /tests            # Unit tests for various components
```
