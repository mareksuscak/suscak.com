import { eq, sql } from 'drizzle-orm';
import db from 'lib/db';
import { views } from 'lib/db/schema';
import { NextResponse } from 'next/server';

type Params = Promise<{ slug: string }>;

export async function POST(
  request: Request,
  { params }: { params: Params }
) {
  try {
    const { slug } = await params;

    const [newOrUpdatedViews] = await db
      .insert(views)
      .values({ slug })
      .onConflictDoUpdate({
        target: views.slug,
        set: { count: sql`${views.count} + 1` }
      })
      .returning();

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

    const [row] = await db
      .select({ count: views.count })
      .from(views)
      .where(eq(views.slug, slug))
      .limit(1);

    return NextResponse.json({ total: row?.count?.toString() });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
