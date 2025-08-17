import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { fullName, email, message, website, phone, utmParams } = body;

    // Check for honeypot field (anti-spam)
    if (website) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get Google Sheets webhook URL from environment variables
    const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!googleSheetsWebhookUrl) {
      console.error(
        "GOOGLE_SHEETS_WEBHOOK_URL environment variable is not set"
      );
      return NextResponse.json(
        { error: "Service configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // Extract UTM parameters and other tracking data
    const referer = request.headers.get("referer") || "";
    const userAgent = request.headers.get("user-agent") || "";
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      request.headers.get("cf-connecting-ip") ||
      "unknown";

    // Prepare data for Google Sheets webhook
    const webhookData = {
      fullName,
      email,
      phone: phone || "",
      message,
      timestamp: new Date().toISOString(),
      ipAddress,
      userAgent,
      sourcePage: referer || "Direct",
      utmSource: utmParams?.utm_source || "",
      utmMedium: utmParams?.utm_medium || "",
      utmCampaign: utmParams?.utm_campaign || "",
    };

    // Send to Google Sheets webhook
    const webhookResponse = await fetch(googleSheetsWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookData),
    });

    if (!webhookResponse.ok) {
      console.error(
        "Google Sheets webhook failed:",
        webhookResponse.status,
        webhookResponse.statusText
      );
      return NextResponse.json(
        { error: "Failed to process your request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Thank you for your interest! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
