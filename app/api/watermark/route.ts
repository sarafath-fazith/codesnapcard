'use server'

import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function GET(req: NextRequest) {
  const imageUrl = req.nextUrl.searchParams.get('imageUrl');

  if (!imageUrl) {
    return new NextResponse('Missing image URL', { status: 400 });
  }

  try {
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      return new NextResponse('Failed to fetch image', { status: imageResponse.status });
    }

    const imageBuffer = await imageResponse.arrayBuffer();
    const watermarkResponse = await fetch('https://storage.googleapis.com/proud-of-you-426117.appspot.com/watermark.png');
    const watermarkBuffer = await watermarkResponse.arrayBuffer();

    const watermarkedImageBuffer = await sharp(imageBuffer)
      .composite([
        {
          input: watermarkBuffer,
          tile: true,
          blend: 'over',
        },
      ])
      .toBuffer();

    return new NextResponse(watermarkedImageBuffer, {
      headers: {
        'Content-Type': 'image/png',
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
