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

### Installation

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

The application will be available at `http://localhost:5000`.

**Note**: Don't use VS Code's Live Server for this project as it requires both a frontend and backend server to run properly.

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
- Express (backend)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Run production server
