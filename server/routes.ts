import type { Express } from "express";
import { createServer, type Server } from "http";
import fs from 'fs/promises';
import path from 'path';

export function registerRoutes(app: Express): Server {
  app.get('/api/product', async (_req, res) => {
    try {
      const data = await fs.readFile(
        path.resolve(process.cwd(), 'stackline_frontend_assessment_data_2021.json'),
        'utf-8'
      );
      res.json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ message: 'Failed to load product data' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
