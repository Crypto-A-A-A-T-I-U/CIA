import { z, ZodError } from 'zod'

import prisma from '../lib/prisma'

const addAthleticRequestProps = z.object({
  name: z.string(),
  description: z.string(),
})

export type AddAthleticRequestProps = z.infer<typeof addAthleticRequestProps>

export async function POST(req: Request) {
  try {
    const { name, description } = addAthleticRequestProps.parse(
      await req.json(),
    )

    const athleticOnDatabase = await prisma.athletic.findUnique({
      where: {
        name,
      },
    })

    if (athleticOnDatabase) {
      return Response.json(
        {
          message: 'Athletic already exists',
        },
        { status: 409 },
      )
    }

    await prisma.athletic.create({
      data: {
        name,
        description,
      },
    })

    return Response.json({}, { status: 201 })
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json(
        {
          error: error.format(),
          message: 'Validation error',
        },
        { status: 400 },
      )
    }

    return Response.json({}, { status: 500 })
  }
}

export async function GET() {
  const athletics = await prisma.athletic.findMany()

  return Response.json({ athletics }, { status: 200 })
}
