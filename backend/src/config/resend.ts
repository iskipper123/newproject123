import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY

if (!resendApiKey) {
  throw new Error('Missing Resend API Key')
}

export const resend = new Resend(resendApiKey)
