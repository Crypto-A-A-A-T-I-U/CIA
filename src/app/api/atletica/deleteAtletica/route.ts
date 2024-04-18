import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function DELETE(req: NextRequest) {
  if (req.method === 'DELETE') {
    try {
      const id = req.nextUrl.searchParams.get('id')

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

      await prisma.atletica.delete({
        where: {
          id: Number(id),
        },
      })

      return NextResponse.json({
        message: 'Atlética deleted successfully',
        status: 204,
      })
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
