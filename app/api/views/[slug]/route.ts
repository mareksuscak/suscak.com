import prisma from 'lib/prisma';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

type Params = Promise<{ slug: string }>;

export async function POST(
  request: Request,
  { params }: { params: Params }
) {
  try {
    const { slug } = await params;

    const newOrUpdatedViews = await prisma.views.upsert({
      where: { slug },
      create: {
        slug
      },
      update: {
        count: {
          increment: 1
        }
      }
    });

    return NextResponse.json({
      total: newOrUpdatedViews.count.toString()
    });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}

export async function GET(
  request: Request,
  { params }: { params: Params }
) {
  try {
    const { slug } = await params;

    const views = await prisma.views.findUnique({
      where: {
        slug
      }
    });

    return NextResponse.json({ total: views?.count?.toString() });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
