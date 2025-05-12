import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express'
import { PrismaClient } from '../generated/prisma' // Убедитесь, что путь правильный

const router = express.Router()
const prisma = new PrismaClient()

// Хелпер для обработки запросов к страницам по slug
const getPageBySlug = async (slug: string, res: express.Response) => {
  try {
    const page = await prisma.pages.findUnique({
      where: { slug: slug },
    })
    if (page) {
      res.json(page)
    } else {
      res.status(404).json({ message: 'Страница не найдена' })
    }
  } catch (error) {
    console.error(`Ошибка при получении страницы ${slug}:`, error)
    res.status(500).json({ message: 'Ошибка сервера при получении страницы' })
  }
}

router.get('/api/home', async (req, res) => {
  await getPageBySlug('home', res) // Предполагаем, что slug для главной страницы - 'home'
})

router.get('/api/services', async (req, res) => {
  await getPageBySlug('services', res) // Предполагаем, что slug для услуг - 'services'
})

router.get('/api/portfolio', async (req, res) => {
  try {
    const portfolioItems = await prisma.portfolio_items.findMany()
    res.json(portfolioItems)
  } catch (error) {
    console.error('Ошибка при получении элементов портфолио:', error)
    res.status(500).json({ message: 'Ошибка сервера при получении портфолио' })
  }
})

router.get('/api/pricing', async (req, res) => {
  await getPageBySlug('pricing', res) // Предполагаем, что slug для цен - 'pricing'
})

router.get('/api/blog', async (req, res) => {
  try {
    const blogPosts = await prisma.blog_posts.findMany()
    res.json(blogPosts)
  } catch (error) {
    console.error('Ошибка при получении записей блога:', error)
    res.status(500).json({ message: 'Ошибка сервера при получении блога' })
  }
})

router.get('/api/contact', async (req, res) => {
  await getPageBySlug('contact', res) // Предполагаем, что slug для контактов - 'contact'
})

router.get('/api/estimation', async (req, res) => {
  await getPageBySlug('estimation', res) // Предполагаем, что slug для оценки стоимости - 'estimation'
})

interface EstimationFormBody {
  name: string
  email: string
  description: string
}

// Новый маршрут для обработки формы оценки стоимости
router.post('/api/forms/estimation', (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, description } = req.body as EstimationFormBody

  // Базовая валидация данных
  if (!name || !email || !description) {
    return res.status(400).json({ message: 'Пожалуйста, заполните все поля.' })
  }

  // Базовая валидация email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ message: 'Пожалуйста, введите корректный email.' })
  }

  try {
    const newForm = await prisma.forms.create({
      data: {
        type: 'cost_estimate',
        data: {
          name,
          email,
          description,
        },
      },
    })
    res
      .status(201)
      .json({ message: 'Данные формы успешно сохранены.', form: newForm })
  } catch (error) {
    console.error('Ошибка при сохранении данных формы:', error)
    res
      .status(500)
      .json({ message: 'Ошибка сервера при сохранении данных формы.' })
  }
}) as RequestHandler)

export default router
