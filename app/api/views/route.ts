import prisma from 'lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const totalViews = await prisma.views.aggregate({
      _sum: {
        count: true
      }
    });

    return NextResponse.json({ total: totalViews?._sum?.count?.toString() });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
