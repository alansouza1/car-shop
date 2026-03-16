# Car Shop API

This project is a REST API developed using **TypeScript**.

The project applies Object-Oriented Programming (**OOP**) principles to build a CRUD API for managing a vehicle dealership. It uses **MongoDB** as the database.

## 🚀 Features
- **CRUD for Vehicles:** Create, Read, Update, and Delete vehicle records.
- **POO Principles:** Designed with Inheritance, Polymorphism, Abstraction, and Encapsulation.
- **MSC Architecture:** Clean separation of concerns into Model, Service, and Controller layers.
- **Data Validation:** Schema validation and type safety using **Zod**.
- **Unit Testing:** Comprehensive test coverage for all architecture layers.
- **Interactive Documentation:** Explore endpoints using **Swagger UI**.

## 🛠 Tech Stack
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **ODM:** [Mongoose](https://mongoosejs.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Documentation:** [Swagger](https://swagger.io/)
- **Testing:** [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), [Sinon](https://sinonjs.org/)
- **Containerization:** [Docker](https://www.docker.com/)

## 📖 API Documentation
The API documentation is generated using Swagger. Once the server is running, you can explore the available endpoints and try them out at:
[http://localhost:3001/api-docs](http://localhost:3001/api-docs)

# Running the Project

### Prerequisites:
- Node.js 16
- Docker
- Docker Compose

After cloning the repository, install the dependencies with:
```
npm install
```
Start Docker using the command:
```
docker-compose up -d
```
To run the unit tests, use:
```
docker exec -it car_shop npm run test:dev
```
Finally, start the back-end server with:
```
docker exec -it car_shop npm run dev
```