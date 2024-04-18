import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function PATCH(req: NextRequest) {
  if (req.method === 'PATCH') {
    try {
      const gameId = req.nextUrl.searchParams.get('id')
      const { sport, gender, date, location, status } = await req.json()

      if (!['Masculino', 'Feminino'].includes(gender)) {
        return NextResponse.json({
          error:
            'Invalid gender value. Expected one of: Agendado, Progresso, Concluido',
          status: 400,
        })
      }

      if (!['Agendado', 'Progresso', 'Concluido'].includes(status)) {
        return NextResponse.json({
          error:
            'Invalid status value. Expected one of: Agendado, Progresso, Concluido',
          status: 400,
        })
      }

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

      const oldGame = { ...gameExists }
      delete (oldGame as { id?: number }).id

      const updatedGame = await prisma.game.update({
        where: {
          id: Number(gameExists.id),
        },
        data: {
          ...oldGame,
          sport,
          gender,
          date,
          location,
          status,
          updatedAt: new Date(Date.now()),
        },
      })

      return NextResponse.json(updatedGame, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when updating the game',
        status: 500,
      })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405 })
  }
}
