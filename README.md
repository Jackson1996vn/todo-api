# Todo API

A RESTful Todo API built with NestJS framework, featuring full CRUD operations, mock data storage, and automated CI/CD pipeline.

## Features

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ RESTful API endpoints
- ✅ Mock data storage
- ✅ Error handling with proper HTTP status codes
- ✅ TypeScript support
- ✅ DTOs for data validation
- ✅ GitHub Actions CI/CD pipeline
- ✅ Automated testing and deployment
- ✅ Ready for free cloud deployment (Render, Railway, Fly.io)

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

## Todo Object Structure

```json
{
  "id": 1,
  "title": "Learn NestJS",
  "description": "Study NestJS framework and build APIs",
  "completed": false,
  "participants": ["Alice", "Bob"],
  "createdAt": "2025-11-10T00:00:00.000Z",
  "updatedAt": "2025-11-10T00:00:00.000Z"
}
```

### Fields
- `id` (number): Unique identifier
- `title` (string): Todo title (required)
- `description` (string, optional): Detailed description
- `completed` (boolean): Completion status
- `participants` (string[]): Array of people working on this todo
- `createdAt` (Date): Creation timestamp
- `updatedAt` (Date): Last update timestamp

## API Usage Examples

### Get all todos
```bash
GET http://localhost:3000/todos
```

Response:
```json
[
  {
    "id": 1,
    "title": "Learn NestJS",
    "description": "Study NestJS framework and build APIs",
    "completed": false,
    "participants": ["Alice", "Bob"],
    "createdAt": "2025-11-10T00:00:00.000Z",
    "updatedAt": "2025-11-10T00:00:00.000Z"
  }
]
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
  "completed": false,
  "participants": ["John", "Jane"]
}
```

### Update a todo
```bash
PUT http://localhost:3000/todos/1
Content-Type: application/json

{
  "completed": true,
  "participants": ["John", "Jane", "Alice"]
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
- [Jest](https://jestjs.io/) - Testing framework
- [GitHub Actions](https://github.com/features/actions) - CI/CD automation

## 🚀 CI/CD Pipeline

This project includes an automated CI/CD pipeline using GitHub Actions:

### Workflow Triggers
- ✅ Automatically runs on every push to `main` branch

### Build & Test Job
1. Checks out code from repository
2. Sets up Node.js environment (v20)
3. Installs dependencies with `npm ci`
4. Runs unit tests with `npm test`
5. Builds the application

### Deploy Job
- Automatically deploys to Render after successful tests
- Requires Render API credentials in GitHub Secrets

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## 📦 Quick Deploy

### Deploy to Render (Free)
1. Fork/clone this repository
2. Sign up at [render.com](https://render.com)
3. Create a new Web Service from your GitHub repo
4. Render will auto-deploy using `render.yaml`

### Deploy to Railway (Free)
1. Sign up at [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select this repository
4. Railway will auto-detect and deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for more options and detailed setup instructions.

## License

This project is [MIT licensed](LICENSE).
