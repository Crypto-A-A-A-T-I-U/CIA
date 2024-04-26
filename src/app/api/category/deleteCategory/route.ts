import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function DELETE(req: NextRequest) {
  if (req.method === 'DELETE') {
    try {
      const id = req.nextUrl.searchParams.get('id')

      const ddcategoryExists = await prisma.category.findUnique({
        where: {
          id: Number(id),
        },
      })

      if (!ddcategoryExists) {
        return NextResponse.json({
          error: 'Category not found',
          status: 404,
        })
      }

      await prisma.category.delete({
        where: {
          id: Number(id),
        },
      })

      return NextResponse.json({
        message: 'Category deleted successfully',
        status: 204,
      })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when removing category by ID',
        status: 500,
      })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405 })
  }
}
