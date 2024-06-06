# My Eco Web Project

My Eco Web Project is a full-stack web application built with Node.js, Express, PostgreSQL, Prisma, and React. This project serves as a base template for developing new web applications with the same technology stack.

## Prerequisites

- Node.js (>= 14.x)
- pnpm (>= 6.x)
- PostgreSQL (>= 12.x)

## Project Structure

my-eco-web-project/
├── frontend/
│ ├── public/
│ ├── src/
│ ├── index.html
│ ├── package.json
│ ├── tsconfig.json
│ └── vite.config.ts
├── backend/
│ ├── prisma/
│ │ ├── schema.prisma
│ ├── src/
│ │ ├── middlewares/
│ │ └── index.ts
│ ├── tests/
│ ├── .env
│ ├── .eslintrc.js
│ ├── .prettierrc
│ ├── jest.config.js
│ ├── nodemon.json
│ ├── package.json
│ ├── pnpm-lock.yaml
│ ├── tsconfig.json
├── .gitignore
├── README.md
└── render.yaml


## Getting Started

### Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/my-eco-web-project.git
   cd my-eco-web-project
   ```

2. **Install dependencies**

   ```sh
   pnpm install
   ```

### Backend

1. **Configure the environment**

   Create a `.env` file in the `backend` directory with the following content:

   ```dotenv
   DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydb"
   ```

2. **Generate Prisma client and run migrations**

   ```sh
   cd backend
   npx prisma generate
   npx prisma migrate dev --name init
   ```

3. **Start the backend server**

   ```sh
   pnpm start
   ```

### Frontend

1. **Start the frontend development server**

   ```sh
   cd frontend
   pnpm start
   ```

## Running Tests

To run tests, use the following command in the `backend` directory:

```sh
pnpm test
```

## Deployment

This project is configured for deployment on Render. The `render.yaml` file at the root of the project defines the services and database.

1. **Deploy to Render**

   - Connect your Render account to your GitHub repository.
   - Render will automatically detect the `render.yaml` file and set up the services.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License.
