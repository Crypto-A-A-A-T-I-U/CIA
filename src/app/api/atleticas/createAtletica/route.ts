import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '../../lib/prisma'

const createAtleticaSchema = z.object({
  name: z.string(),
  description: z.string(),
})

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const { name, description } = createAtleticaSchema.parse(await req.json())

      const atleticaExists = await prisma.atletica.findFirst({
        where: {
          name,
        },
      })

      if (atleticaExists) {
        return NextResponse.json({
          error: 'Atletica already exists',
          status: 409,
        })
      }

      const newAtletica = await prisma.atletica.create({
        data: {
          name,
          description,
        },
      })

      return NextResponse.json(newAtletica, { status: 201 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        error: 'Error when creating a new atlética',
        status: 405,
      })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405 })
  }
}
