// src/pages/api/cords.js

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.resolve('./data/gps_data.json');
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: 'File not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
