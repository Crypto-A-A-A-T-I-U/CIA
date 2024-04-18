import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
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

      const gameExists = await prisma.game.findFirst({
        where: {
          sport,
        },
      })

      if (gameExists) {
        return NextResponse.json({
          error: 'Game already exists',
          status: 409,
        })
      }

      const newGame = await prisma.game.create({
        data: {
          sport,
          gender,
          date,
          location,
          status,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
      })

      return NextResponse.json(newGame, { status: 201 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when creating a new game',
        status: 500,
      })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405 })
  }
}
