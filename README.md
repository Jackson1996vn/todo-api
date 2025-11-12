# Todo API

A RESTful Todo API built with NestJS framework, featuring full CRUD operations and mock data storage.

## Features

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ RESTful API endpoints
- ✅ Mock data storage
- ✅ Error handling with proper HTTP status codes
- ✅ TypeScript support
- ✅ DTOs for data validation

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todos` | Get all todos |
| GET | `/todos/:id` | Get a specific todo by ID |
| POST | `/todos` | Create a new todo |
| PUT | `/todos/:id` | Update an existing todo |
| DELETE | `/todos/:id` | Delete a todo |

## Project Setup

```bash
$ npm install
```

## Running the Application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Usage Examples

### Get all todos
```bash
GET http://localhost:3000/todos
```

### Get a specific todo
```bash
GET http://localhost:3000/todos/1
```

### Create a new todo
```bash
POST http://localhost:3000/todos
Content-Type: application/json

{
  "title": "New Task",
  "description": "Task description",
  "completed": false
}
```

### Update a todo
```bash
PUT http://localhost:3000/todos/1
Content-Type: application/json

{
  "completed": true
}
```

### Delete a todo
```bash
DELETE http://localhost:3000/todos/1
```

## Run Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Technology Stack

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Express](https://expressjs.com/) - Web framework for Node.js

## License

This project is [MIT licensed](LICENSE).
