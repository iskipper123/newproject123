import express from 'express'

const router = express.Router()

router.get('/api/home', (req, res) => {
  res.json({
    title: 'Главная страница API',
    content: 'Данные для главной страницы.',
  })
})

router.get('/api/services', (req, res) => {
  res.json({ title: 'Услуги API', content: 'Данные для страницы услуг.' })
})

router.get('/api/portfolio', (req, res) => {
  res.json({
    title: 'Портфолио API',
    content: 'Данные для страницы портфолио.',
  })
})

router.get('/api/pricing', (req, res) => {
  res.json({ title: 'Цены API', content: 'Данные для страницы цен.' })
})

router.get('/api/blog', (req, res) => {
  res.json({ title: 'Блог API', content: 'Данные для страницы блога.' })
})

router.get('/api/contact', (req, res) => {
  res.json({ title: 'Контакты API', content: 'Данные для страницы контактов.' })
})

router.get('/api/estimation', (req, res) => {
  res.json({
    title: 'Оценка стоимости API',
    content: 'Данные для страницы оценки стоимости.',
  })
})

export default router
