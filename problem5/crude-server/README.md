# Express TypeScript CRUD API

This is a simple backend application built with ExpressJS and TypeScript that allows CRUD operations with data.

## Project Directory Structure
crude-server/
├── src/
│   ├── controllers/
│   │   └── resourceController.ts
│   ├── models/
│   │   └── resource.ts
│   ├── routes/
│   │   └── resourceRoutes.ts
│   ├── app.ts
│   └── config.ts
└── package.json


## Installation

1. Clone the project to your local machine:
    ```bash
    git clone https://github.com/<username>/crud-server.git
    cd crud-server
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up MongoDB:
   - Run the MongoDB server locally or use MongoDB Atlas.

4. Start the application:
    ```bash
    npm run dev
    ```

## Usage

- **Create Resource**: `POST /api/resources`
    - Body: `{ "name": "Name", "description": "Description" }`

- **List Resources**: `GET /api/resources`
    - Can include query parameters for filtering.

- **Get Resource Details**: `GET /api/resources/:id`

- **Update Resource**: `PUT /api/resources/:id`
    - Body: `{ "name": "New Name", "description": "New Description" }`

- **Delete Resource**: `DELETE /api/resources/:id`