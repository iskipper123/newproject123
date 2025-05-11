import express, { Request, Response, NextFunction } from 'express'
import rateLimit from 'express-rate-limit'
import jwt from 'jsonwebtoken' // Will use jsonwebtoken for basic token check (Supabase JWT verification is more complex)

const router = express.Router()

// Rate Limiting Middleware
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max 100 requests per 15 minutes
  message: 'Too many requests from this IP, please try again after 15 minutes',
})

// Apply rate limiting to all requests in this router
router.use(apiLimiter)

// Simple JWT Verification Middleware (Placeholder)
const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    res.sendStatus(401) // if there isn't any token
    return // Explicitly return after sending response
  }

  // In a real app, you would verify the token with Supabase secret
  // jwt.verify(token, process.env.SUPABASE_JWT_SECRET as string, (err, user) => {
  //   if (err) {
  //     res.sendStatus(403); // invalid token
  //     return; // Explicitly return after sending response
  //   }
  //   req.user = user; // Attach user information to the request
  //   next();
  // });

  // For this basic structure, just check for token presence
  next() // Proceed if token is present (basic check)
}

// Admin Login Route (Rate limiting applied, but NOT JWT verification)
router.post('/login', (req: Request, res: Response) => {
  // Basic login logic placeholder - In a real app, use Supabase auth.signInWithPassword
  const { email, password } = req.body

  // Placeholder for Supabase authentication
  if (email === 'admin@example.com' && password === 'password') {
    // In a real app, generate JWT using Supabase or a library
    const mockToken = 'mock-jwt-token' // Replace with actual JWT generation
    res.json({ token: mockToken })
  } else {
    res.status(401).json({ message: 'Invalid credentials' })
  }
})

// Protected Admin Panel Routes (JWT verification and Rate limiting applied)
// Apply verifyToken middleware directly to each protected route
router.get('/dashboard', verifyToken, (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Admin Dashboard!', data: {} })
})

router.get('/cms', verifyToken, (req: Request, res: Response) => {
  res.json({ message: 'CMS Management', data: {} })
})

router.get('/analytics', verifyToken, (req: Request, res: Response) => {
  res.json({ message: 'Analytics Data', data: {} })
})

router.get('/users', verifyToken, (req: Request, res: Response) => {
  res.json({ message: 'User List', data: {} })
})

router.get('/logs', verifyToken, (req: Request, res: Response) => {
  res.json({ message: 'Activity Logs', data: {} })
})

router.get('/files', verifyToken, (req: Request, res: Response) => {
  res.json({ message: 'File Management', data: {} })
})

router.get('/forms', verifyToken, (req: Request, res: Response) => {
  res.json({ message: 'Form Management', data: {} })
})

export default router
