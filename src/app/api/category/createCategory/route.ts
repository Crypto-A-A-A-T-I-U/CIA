import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const { name, description } = await req.json()

      const categoryExists = await prisma.category.findFirst({
        where: {
          name,
        },
      })

      if (categoryExists) {
        return NextResponse.json({
          error: 'Category already exists',
          status: 409,
        })
      }

      const newCategory = await prisma.category.create({
        data: {
          name,
          description,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
      })

      return NextResponse.json(newCategory, { status: 201 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when creating a new category',
        status: 500,
      })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405 })
  }
}
