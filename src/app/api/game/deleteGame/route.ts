import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function DELETE(req: NextRequest) {
  if (req.method === 'DELETE') {
    try {
      const gameId = req.nextUrl.searchParams.get('id')

      const gameExists = await prisma.game.findUnique({
        where: {
          id: Number(gameId),
        },
      })

      if (!gameExists) {
        return NextResponse.json({
          error: 'Game not found',
          status: 404,
        })
      }

      await prisma.game.delete({
        where: {
          id: Number(gameId),
        },
      })

      return NextResponse.json({
        message: 'Game deleted successfully',
        status: 204,
      })
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
