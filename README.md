# Stackline Product Analytics Dashboard

A comprehensive product analytics dashboard built with React, Redux, and TypeScript, featuring data visualization and sales analytics.

## Features

- Product information display
- Sales data visualization using Recharts
- Sortable data table with sales metrics
- Redux state management
- TypeScript for type safety
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation and Running the Project

1. Clone the repository
```bash
git clone <your-repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

**Important Notes**: 
- Do not use VS Code's Live Server for this project. The application requires both a frontend and backend server to run properly.
- The project uses Vite as the development server, which serves static assets from the `client/public` directory.
- All static files (like images) should be placed in the `client/public` directory.
- The development server must be started using `npm run dev` to ensure both frontend and backend are running.

## Project Structure

```
/client
  /public          # Static assets
  /src
    /components    # React components
    /store         # Redux store and slices
    /pages         # Page components
/server            # Backend server code
```

## Technologies Used

- React
- Redux Toolkit
- TypeScript
- Vite
- Tailwind CSS
- Recharts (for data visualization)


## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Run production server
  
