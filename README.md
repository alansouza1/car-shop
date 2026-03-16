# Car Shop API

This project is a REST API developed using **TypeScript**.

The project applies Object-Oriented Programming (**OOP**) principles to build a CRUD API for managing a vehicle dealership. It uses **MongoDB** as the database.

The project follows the **MSC** (Model, Service, Controller) architecture.

The endpoints interact with the database using the **Mongoose** ODM.

Unit tests were implemented for all three layers using **Mocha**, **Chai**, and **Sinon**.

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