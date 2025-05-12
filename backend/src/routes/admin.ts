import express from 'express'
import { PrismaClient } from '../generated/prisma' // Убедитесь, что путь правильный

const router = express.Router()
const prisma = new PrismaClient()

// Эндпоинт для получения списка пользователей админ-панели
router.get('/adminpanel/users', async (req, res) => {
  try {
    // Получаем список пользователей из таблицы public.users (или profiles, в зависимости от вашей схемы)
    // Предполагаем, что модель для пользователей админ-панели называется public_users в schema.prisma
    const users = await prisma.public_users.findMany()
    res.json(users)
  } catch (error) {
    console.error('Ошибка при получении списка пользователей:', error)
    res
      .status(500)
      .json({ message: 'Ошибка сервера при получении пользователей' })
  }
})

// Здесь могут быть добавлены другие маршруты админ-панели

export default router
