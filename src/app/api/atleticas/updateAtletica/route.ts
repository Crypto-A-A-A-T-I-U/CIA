import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function PATCH(req: NextRequest) {
  if (req.method === 'PATCH') {
    try {
      const id = req.nextUrl.searchParams.get('id')
      const { name, description, points } = await req.json()

      const atleticaExists = await prisma.atletica.findUnique({
        where: {
          id: Number(id),
        },
      })

      if (!atleticaExists) {
        return NextResponse.json({
          error: 'Atlética not found',
          status: 404,
        })
      }

      const updatedAtletica = await prisma.atletica.update({
        where: {
          id: Number(id),
        },
        data: {
          ...atleticaExists,
          name,
          description,
          points,
          updatedAt: new Date(Date.now()),
        },
      })

      return NextResponse.json(updatedAtletica, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when updating the atlética',
        status: 500,
      })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405 })
  }
}
