import { sum } from 'drizzle-orm';
import db from 'lib/db';
import { views } from 'lib/db/schema';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [totalViews] = await db.select({ total: sum(views.count) }).from(views);

    return NextResponse.json({ total: totalViews?.total ?? undefined });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
