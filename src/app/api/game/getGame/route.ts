import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      const gameId = req.nextUrl.searchParams.get('id')

      const gameExists = await prisma.game.findUnique({
        where: {
          id: Number(gameId),
        },
        select: {
          id: true,
          sport: true,
          gender: true,
          date: true,
          teams: {
            select: {
              id: true,
              name: true,
              points: true,
            },
          },
          location: true,
          status: true,
        },
      })

      if (!gameExists) {
        return NextResponse.json({
          error: 'Game not found',
          status: 404,
        })
      }

      return NextResponse.json(gameExists, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when fetching game by ID',
        status: 500,
      })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405 })
  }
}
