import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      const atleticasExists = await prisma.atletica.findMany({
        select: {
          id: true,
          name: true,
          points: true,
        },
      })

      if (!atleticasExists) {
        return NextResponse.json({
          error: 'No Atléticas found',
          status: 404,
        })
      }

      return NextResponse.json(atleticasExists, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when listing all',
        status: 405,
      })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405 })
  }
}
