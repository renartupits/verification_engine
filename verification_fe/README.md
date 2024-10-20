# 🛡️ Verification Tool Frontend

This repository contains the frontend component of our Verification Engine, designed to handle the process of completing verification checks. The application interacts with the backend API to fetch a list of verification check items, each requiring a “Yes” or “No” answer.

Initially, only the first item in the list is enabled for user interaction, with other items remaining disabled. As each check is answered, the next item in the sequence becomes enabled. Upon completing the checks, the data is submitted back to the backend API, which processes the results and returns a final decision. The application then displays a result screen based on the outcome returned by the API.

## 🚀 Features

- Built with **React** and **TypeScript** for a robust and scalable frontend.
- Follows **Airbnb ESLint rules** to keep the codebase clean and consistent.
- You can run the app locally with `yarn` or fire it up using **Docker** (Docker-compose included).
- Some **unit tests** are in place to ensure things don’t break when you least expect it.

## 🛠️ Getting Started

### Prerequisites

Before running the app, make sure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **Yarn** package manager (or **npm** if you prefer)
- **Docker** (optional but recommended for containerized environments)

### Installation

1. **Clone the repo**:

   ```bash
   git clone https://github.com/renartupits/verification_engine.git
   cd verification_engine/verification_fe
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

### Running the App

There are two ways to get the app up and running:

1. **With Yarn (local development)**:

   ```bash
   yarn dev
   ```

   This will start the app on [http://localhost:5173](http://localhost:5173).

2. **With Docker Compose**:
   If you'd prefer to run the app inside a Docker container, simply run:

   ```bash
   docker-compose up
   ```

   This will build and run the app inside a container. The app should still be accessible at [http://localhost:5173](http://localhost:5173).

### Running Tests

To run the test suite, use the following command:

```bash
yarn test
   ```

This will run the unit tests and give you feedback on the current state of the app.

## 🔧 Development Tools

- **ESLint** is configured to use Airbnb’s strict style guide. To run the linter manually:

  ```bash
  yarn lint
   ```

- **Prettier** is also integrated for code formatting, ensuring the code stays nice and tidy.

## 📦 Project Structure

The project structure is organized to maintain scalability and separation of concerns. Here’s a quick overview:

```
/src
/api          # Fetcher client and service functions
/assets       # Shared assets, icons
/components   # Reusable UI components
/pages        # Main page-level components
/listeners    # Custom React hooks
/tests        # Unit tests
```
