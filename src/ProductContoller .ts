import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

async function register(req: Request, res: Response) {
  try {
    const user = await prisma.product.create({
      data: {
        title: req.body.title,
        price: req.body.price,
      },
    })

    return res.status(201).send({ msg: 'Produto Cadastrado!!!!', user })
  } catch (error) {
    return res.status(400).send({ msg: 'ERRO!!!' })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await prisma.product.findMany({})

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).json({ msg: 'ERRO!!' })
  }
}

async function getByName(req: Request, res: Response) {
  try {
    const data = await prisma.user.findFirst({
      where: {
        name: req.body.name,
      },
      select: {
        name: true,
        email: true,
        description: true,
      },
    })

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).json({ msg: 'ERRO!!' })
  }
}

async function deleteOne(req: Request, res: Response) {
  try {
    const data = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    })

    return res.status(200).send({ msg: 'Deletado', data })
  } catch (error) {
    return res.status(400).json({ msg: 'ERRO!!' })
  }
}

async function update(req: Request, res: Response) {
  try {
    await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        email: req.body.email,
        description: req.body.description,
      },
    })

    return res.status(200).send({ msg: 'Tudo Editado!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'Deu ERRO!!!' })
  }
}

export default { register, update, deleteOne, getAll, getByName }
