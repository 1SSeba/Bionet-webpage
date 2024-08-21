// src/pages/api/get_gps_data.js
import fs from 'fs';
import path from 'path';

export async function handler(req, res) {
  const filePath = path.resolve('./data/gps_data.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    res.status(200).json(data);
  } else {
    res.status(200).json({ lat: '0', lon: '0' });
  }
}
