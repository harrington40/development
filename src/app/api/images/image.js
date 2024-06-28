// src/app/api/images/[imageName].js
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request, { params }) {
  const { imageName } = params;
  const imageDirectory = path.join(process.cwd(), 'src/app/data/images');
  const imagePath = path.join(imageDirectory, imageName);

  try {
    const imageBuffer = await fs.readFile(imagePath);
    return new Response(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
  } catch (error) {
    return new Response('Image not found', { status: 404 });
  }
}
