// src/app/api/counties/route.js
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  const jsonDirectory = path.join(process.cwd(), 'src/app/data');
  const fileContents = await fs.readFile(path.join(jsonDirectory, 'counties.json'), 'utf8');
  const data = JSON.parse(fileContents);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
