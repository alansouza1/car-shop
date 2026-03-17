# Car Shop API & Frontend

This project is a full-stack application for managing a vehicle dealership, built with **TypeScript**, **Node.js**, **Express**, **MongoDB**, and **React**.

## 🏗 Project Structure
- **/backend**: REST API following MSC architecture, built with Mongoose and Zod.
- **/frontend**: Modern React dashboard with a dark-themed UI, built with Vite.

## 🚀 Features
- **Full CRUD for Vehicles:** Manage inventory through a professional UI or directly via API.
- **POO Principles:** Backend designed with Inheritance, Polymorphism, and Abstraction.
- **Data Validation:** Strict schema validation using **Zod** on both sides.
- **Interactive Documentation:** Explore and test the API live via **Swagger UI**.
- **Dockerized Environment:** One-command setup for the entire stack.

## 🛠 Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose, Zod, Swagger, Mocha/Chai/Sinon.
- **Frontend:** React 18, Vite, TypeScript, Vanilla CSS.
- **DevOps:** Docker, Docker Compose.

## 📖 API Documentation
Once the server is running, explore the endpoints at:
👉 [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

# 🏁 Getting Started

### Prerequisites:
- Docker and Docker Compose installed.
- Node.js (only for using convenience scripts).

### 1. Setup & Start
Clone the repository and start the entire environment using the root convenience script:
```bash
npm run dev
```

### 2. Access the Application
- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:3001](http://localhost:3001)

### 3. Management Commands
You can manage the project using these root-level commands:
- `npm run stop`: Stop all containers.
- `npm run logs`: View live logs for all services.
- `npm run backend:test`: Execute backend unit tests.
- `npm run backend:lint`: Check for linting errors in the backend.
