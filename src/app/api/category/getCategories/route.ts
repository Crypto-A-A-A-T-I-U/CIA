import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      const categoryExists = await prisma.category.findMany({
        select: {
          id: true,
          name: true,
          description: true,
        },
      })

      if (categoryExists.length === 0) {
        return NextResponse.json({
          error: 'No categories found',
          status: 404,
        })
      }

      return NextResponse.json(categoryExists, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when listing all categories',
        status: 500,
      })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405 })
  }
}
