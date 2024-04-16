import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      const id = req.nextUrl.searchParams.get('id')

      const atleticaExists = await prisma.atletica.findUnique({
        where: {
          id: Number(id),
        },
        select: {
          id: true,
          name: true,
          points: true,
        },
      })

      if (!atleticaExists) {
        return NextResponse.json({
          error: 'Atlética not found',
          status: 404,
        })
      }

      return NextResponse.json(atleticaExists, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when fetching atlética by ID',
        status: 500,
      })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405 })
  }
}
