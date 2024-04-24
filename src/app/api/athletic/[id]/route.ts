import { z, ZodError } from 'zod'
import prisma from '../../lib/prisma'

const updateAthleticRequestProps = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
})

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params

  const athleticOnDatabase = await prisma.athletic.findUnique({
    where: {
      id: parseInt(id),
    },
  })

  if (!athleticOnDatabase) {
    return Response.json(
      {
        message: 'Athletic not found',
      },
      { status: 404 },
    )
  }

  await prisma.athletic.delete({
    where: {
      id: parseInt(id),
    },
  })

  return Response.json({}, { status: 200 })
}

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params

  const athleticOnDatabase = await prisma.athletic.findUnique({
    where: {
      id: parseInt(id),
    },
  })

  if (!athleticOnDatabase) {
    return Response.json({ message: 'Athletic not found' }, { status: 404 })
  }

  Response.json({ athleticOnDatabase }, { status: 200 })
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params
  try {
    const { description, name } = updateAthleticRequestProps.parse(
      await req.json(),
    )

    const athleticOnDatabase = await prisma.athletic.findUnique({
      where: {
        id: parseInt(id),
      },
    })

    if (!athleticOnDatabase) {
      return Response.json({ message: 'Athletic not found' }, { status: 404 })
    }

    athleticOnDatabase.description =
      description ?? athleticOnDatabase.description
    athleticOnDatabase.name = name ?? athleticOnDatabase.name

    return Response.json({ athletic: athleticOnDatabase }, { status: 200 })
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json(
        { error: error.format(), message: 'Validation error' },
        { status: 400 },
      )
    }
    console.log(error)
    return Response.json({}, { status: 500 })
  }
}
