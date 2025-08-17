import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, message, website } = body
    
    // Check for honeypot field (anti-spam)
    if (website) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Get webhook URL from environment variables
    const webhookUrl = process.env.LEAD_WEBHOOK_URL
    
    if (!webhookUrl) {
      console.error('LEAD_WEBHOOK_URL environment variable is not set')
      return NextResponse.json(
        { error: 'Service configuration error. Please try again later.' },
        { status: 500 }
      )
    }
    
    // Prepare data for webhook
    const webhookData = {
      name,
      email,
      phone: body.phone || '',
      message,
      timestamp: new Date().toISOString(),
      source: 'Writing9 Landing Page',
      userAgent: request.headers.get('user-agent') || '',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    }
    
    // Send to webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    })
    
    if (!webhookResponse.ok) {
      console.error('Webhook failed:', webhookResponse.status, webhookResponse.statusText)
      return NextResponse.json(
        { error: 'Failed to process your request. Please try again.' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        ok: true, 
        message: 'Thank you for your interest! We\'ll get back to you soon.' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Lead API error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
