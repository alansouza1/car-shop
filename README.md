# Car Shop API

This project is a REST API developed using **TypeScript**, focusing on **SOLID** principles and clean architecture.

The project applies Object-Oriented Programming (**OOP**) principles to build a CRUD API for managing a vehicle dealership. It uses **MongoDB** as the database and follows the **MSC** (Model, Service, Controller) architecture.

## 🚀 Features
- **CRUD for Vehicles:** Create, Read, Update, and Delete vehicle records.
- **POO Principles:** Designed with Inheritance, Polymorphism, Abstraction, and Encapsulation.
- **Generic Base Classes:** Optimized controller layer using `BaseController<T>` for consistent CRUD behavior.
- **MSC Architecture:** Clean separation of concerns into Model, Service, and Controller layers.
- **Data Validation:** Strict schema validation and type safety using **Zod**.
- **Unit Testing:** 100% test coverage for all architecture layers using the TDD approach.
- **Interactive Documentation:** Explore and test endpoints live via **Swagger UI**.

## 🛠 Tech Stack
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **ODM:** [Mongoose](https://mongoosejs.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Documentation:** [Swagger](https://swagger.io/)
- **Testing:** [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), [Sinon](https://sinonjs.org/)
- **Containerization:** [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

## 📖 API Documentation
The API documentation is generated using Swagger. Once the server is running, you can explore the available endpoints and try them out at:
👉 [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

# 🏁 Getting Started

### Prerequisites:
- Docker and Docker Compose installed.

### 1. Setup & Start
Clone the repository and start the environment. The server will boot up automatically once the database is healthy.
```bash
docker-compose up -d
```

### 2. Verify Connection
The API will be available at `http://localhost:3001`. You can test the health of the service by listing cars:
```bash
curl http://localhost:3001/cars
```

### 3. Run Tests
To execute the unit tests inside the container, run:
```bash
docker exec car_shop npm run test:dev
```

### 4. Code Quality
Check for linting errors:
```bash
docker exec car_shop npm run lint
```
