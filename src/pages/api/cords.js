// src/pages/api/cords.js

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  console.log('API endpoint hit'); // Verifica si el endpoint está siendo alcanzado
  const filePath = path.resolve('./data/gps_data.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    console.log('Data:', data); // Verifica los datos leídos del archivo
    res.status(200).json(data);
  } else {
    console.log('File not found');
    res.status(200).json({ lat: '0', lon: '0' });
  }
}
