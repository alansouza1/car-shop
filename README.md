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

### 1. Setup & Start
Clone the repository and start the entire environment:
```bash
docker-compose up -d --build
```

### 2. Access the Application
- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:3001](http://localhost:3001)

### 3. Run Backend Tests
To execute the backend unit tests:
```bash
docker exec car_shop npm run test:dev
```

### 4. Code Quality
Check for linting errors in the backend:
```bash
docker exec car_shop npm run lint
```
