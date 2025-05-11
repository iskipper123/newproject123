import express from 'express'
import publicRoutes from './routes/public'
import adminRoutes from './routes/admin' // Import admin routes

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/', publicRoutes)
app.use('/adminpanel', adminRoutes) // Use admin routes with /adminpanel prefix

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`)
})
