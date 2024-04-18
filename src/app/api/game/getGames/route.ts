import { GameStatus, Gender } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      const sportParam = req.nextUrl.searchParams.get('sport')
      const genderParam = req.nextUrl.searchParams.get('gender')
      const dateParam = req.nextUrl.searchParams.get('date')
      const locationParam = req.nextUrl.searchParams.get('location')
      const statusParam = req.nextUrl.searchParams.get('status')

      const filters = {
        sport: sportParam ? { equals: sportParam } : undefined,
        gender: genderParam ? { equals: genderParam } : undefined,
        date: dateParam ? { equals: new Date(dateParam) } : undefined,
        location: locationParam ? { equals: locationParam } : undefined,
        status: statusParam ? { equals: statusParam } : undefined,
      }

      const dgameExists = await prisma.game.findMany({
        where: {
          ...filters,
          gender: genderParam ? { equals: genderParam as Gender } : undefined,
          status: statusParam
            ? { equals: statusParam as GameStatus }
            : undefined,
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

      if (dgameExists.length === 0) {
        return NextResponse.json({
          error: 'No games found',
          status: 404,
        })
      }

      return NextResponse.json(dgameExists, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when listing all games',
        status: 500,
      })
    }
  }
}
