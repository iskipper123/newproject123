import express from 'express'
import { PrismaClient } from '../generated/prisma'

const router = express.Router()
const prisma = new PrismaClient()

// Получить все записи блога
router.get('/', async (req, res) => {
  try {
    const blogPosts = await prisma.blog_posts.findMany()
    res.json(blogPosts)
  } catch (error) {
    console.error('Ошибка при получении записей блога:', error)
    res.status(500).json({ message: 'Ошибка сервера при получении блога' })
  }
})
// Получить одну запись блога по ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const blogPost = await prisma.blog_posts.findUnique({
      where: { id: id }, // Предполагаем, что ID - число
    })
    if (blogPost) {
      res.json(blogPost)
    } else {
      res.status(404).json({ message: 'Запись блога не найдена' })
    }
  } catch (error) {
    console.error(
      `Ошибка при получении записи блога с ID ${req.params.id}:`,
      error
    )
    res
      .status(500)
      .json({ message: 'Ошибка сервера при получении записи блога' })
  }
})

// Создать новую запись блога
router.post('/', async (req, res) => {
  try {
    const newBlogPost = await prisma.blog_posts.create({
      data: req.body,
    })
    res.status(201).json(newBlogPost)
  } catch (error) {
    console.error('Ошибка при создании записи блога:', error)
    res
      .status(500)
      .json({ message: 'Ошибка сервера при создании записи блога' })
  }
})

// Обновить запись блога по ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updatedBlogPost = await prisma.blog_posts.update({
      where: { id: id },
      data: req.body,
    })
    res.json(updatedBlogPost)
  } catch (error) {
    console.error(
      `Ошибка при обновлении записи блога с ID ${req.params.id}:`,
      error
    )
    res
      .status(500)
      .json({ message: 'Ошибка сервера при обновлении записи блога' })
  }
})

// Удалить запись блога по ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await prisma.blog_posts.delete({
      where: { id: id },
    })
    res.status(204).send() // No Content
  } catch (error) {
    console.error(
      `Ошибка при удалении записи блога с ID ${req.params.id}:`,
      error
    )
    res
      .status(500)
      .json({ message: 'Ошибка сервера при удалении записи блога' })
  }
})
export default router
