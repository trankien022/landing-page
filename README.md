# Writing9 Landing Page Clone

A high-fidelity clone of the Writing9.com landing page built with Next.js 15, TypeScript, and Tailwind CSS v4. This project demonstrates modern web development practices with a focus on performance, accessibility, and user experience.

## 🚀 Features

- **High-Fidelity Design**: 90-100% visual match with the original Writing9 website
- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS v4
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Performance Optimized**: Fast loading times with Next.js optimizations
- **SEO Ready**: Comprehensive metadata and OpenGraph tags
- **Accessibility**: WCAG 2.1 AA compliant with proper focus management
- **Lead Capture**: Functional contact form with webhook integration
- **Smooth Animations**: Framer Motion for enhanced user experience

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font Loading**: Next.js Font Optimization
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts          # Lead capture API endpoint
│   ├── layout.tsx                # Root layout with SEO
│   ├── page.tsx                  # Main landing page
│   └── globals.css               # Global styles
├── components/
│   ├── ui/
│   │   ├── Button.tsx            # Reusable button component
│   │   └── Input.tsx             # Form input components
│   ├── Header.tsx                # Site header with navigation
│   ├── Footer.tsx                # Site footer
│   ├── Pricing.tsx               # Pricing section
│   ├── FAQ.tsx                   # FAQ accordion
│   ├── TestimonialCard.tsx       # Testimonial component
│   └── LeadForm.tsx              # Contact form
├── sections/
│   ├── Hero.tsx                  # Hero section
│   ├── Stats.tsx                 # Statistics section
│   ├── Features.tsx              # Features comparison
│   ├── HowItWorks.tsx            # Process explanation
│   ├── Testimonials.tsx          # Customer testimonials
│   └── CTA.tsx                   # Call-to-action section
├── content/
│   └── site.ts                   # Centralized content management
└── lib/
    └── utils.ts                  # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd landing
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Add your webhook URL:

```env
LEAD_WEBHOOK_URL=https://your-webhook-url.com/endpoint
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Build and Deployment

### Local Build

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

3. Set environment variables in Vercel dashboard:
   - `LEAD_WEBHOOK_URL`: Your webhook endpoint URL

### Custom Domain Setup

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains" section
3. Add your custom domain
4. Configure DNS records as instructed by Vercel

## 📧 Lead Capture Configuration

The lead capture form sends data to a webhook URL specified in the `LEAD_WEBHOOK_URL` environment variable.

### Webhook Payload Format

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "I'm interested in improving my IELTS writing score.",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "source": "Writing9 Landing Page",
  "userAgent": "Mozilla/5.0...",
  "ip": "192.168.1.1"
}
```

### Anti-Spam Features

- Honeypot field to catch bots
- Email validation
- Rate limiting (implement on webhook side)
- User agent and IP tracking

## 🎨 Content Management

All content is centralized in `src/content/site.ts` for easy updates:

- Site metadata and SEO
- Navigation items
- Hero section content
- Features and benefits
- Testimonials
- Pricing plans
- FAQ items
- Footer links

## 🔍 SEO Features

- Comprehensive metadata
- OpenGraph and Twitter Card tags
- Structured data markup
- Optimized images with Next.js Image component
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## ♿ Accessibility Features

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper ARIA labels
- Focus management
- Color contrast compliance
- Alternative text for images

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid system
- Touch-friendly interactions
- Optimized typography scaling

## 🚀 Performance Optimizations

- Next.js App Router for optimal performance
- Image optimization with next/image
- Font optimization with next/font
- Code splitting and lazy loading
- Efficient CSS with Tailwind CSS
- Minimal JavaScript bundle size

## 🧪 Testing

Run the development server and test:

1. **Form Functionality**: Submit the contact form
2. **Responsive Design**: Test on different screen sizes
3. **Navigation**: Test smooth scrolling and menu interactions
4. **Performance**: Check loading times and Core Web Vitals
5. **Accessibility**: Test with screen readers and keyboard navigation

## 📊 Lighthouse Scores

Target scores (mobile):

- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for demonstration purposes. Please respect the original Writing9 brand and content.

## 🔗 Links

- [Original Website](https://writing9.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

## 📞 Support

For questions or issues, please open an issue in the repository or contact the development team.
