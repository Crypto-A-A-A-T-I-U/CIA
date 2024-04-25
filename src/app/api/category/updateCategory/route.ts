import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function PATCH(req: NextRequest) {
  if (req.method === 'PATCH') {
    try {
      const id = req.nextUrl.searchParams.get('id')
      const { name, description } = await req.json()

      const categoryExists = await prisma.category.findUnique({
        where: {
          id: Number(id),
        },
      })

      if (!categoryExists) {
        return NextResponse.json({
          error: 'Category not found',
          status: 404,
        })
      }

      const updatedCategory = await prisma.category.update({
        where: {
          id: Number(id),
        },
        data: {
          ...categoryExists,
          name,
          description,
          updatedAt: new Date(Date.now()),
        },
      })

      return NextResponse.json(updatedCategory, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when updating the category',
        status: 500,
      })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405 })
  }
}
