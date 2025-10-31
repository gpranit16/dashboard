# SmartFoot Dashboard (Next.js 14)

A modern, animated analytics dashboard for a piezoelectric energy-harvesting system built with Next.js 14, TypeScript, Clerk authentication, TailwindCSS, Recharts, and Framer Motion.

## 🚀 Features

- **Clerk Authentication**: Secure sign-up, sign-in, and user management
- **Live Dashboard**: Auto-refreshing simulated data every 5 seconds
- **Beautiful UI**: Dark theme with gradient accents (emerald/purple/neon blue)
- **Animated Charts**: Line and bar charts with Recharts
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Works on desktop, tablet, and mobile

## 📁 Project Structure

```
next-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with ClerkProvider
│   │   ├── page.tsx             # Home page
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Dashboard route
│   │   └── globals.css          # Global styles
│   └── components/
│       └── DashboardPage.tsx    # Main dashboard component
├── middleware.ts                # Clerk middleware
├── .env.local                   # Environment variables
└── package.json
```

## 🛠️ Installation

1. **Navigate to the next-app directory:**

```cmd
cd next-app
```

2. **Install dependencies:**

```cmd
npm install
```

3. **Configure Clerk environment variables:**

Edit `.env.local` and add your Clerk API keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

You can get these keys from your [Clerk Dashboard](https://dashboard.clerk.com/).

## 🏃 Running Locally

Start the development server:

```cmd
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Dashboard Features

### Visual Sections

- **Top Navbar**: App logo "SmartFoot" + user avatar + logout
- **Hero Header**: Animated gradient text with pulse effect
- **Key Stats Cards**: 
  - Total Energy (Joules)
  - Steps Count
  - Avg Power (mW)
  - Active Tiles (Battery %)
- **Live Charts**:
  - Line Chart: Energy Generated Over Time
  - Bar Chart: Foot Traffic per Minute
- **System Status Panel**:
  - Battery % indicator
  - Connection status with LED indicator
  - Tile performance list with energy output bars
- **Footer**: Copyright and branding

### Data Simulation

The dashboard uses dummy data that updates every 5 seconds:
- Energy: 0–500 J
- Steps: 0–1000
- Avg Power: 10–200 mW
- Battery: 60–100%
- 5 Tiles with random energy outputs

## 🚢 Deployment on Vercel

1. **Push to GitHub:**

```cmd
git add .
git commit -m "Add SmartFoot Next.js dashboard"
git push
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com/)
   - Import your repository
   - Set the root directory to `next-app`
   - Add environment variables:
     - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
     - `CLERK_SECRET_KEY`
   - Click "Deploy"

3. **Configure Clerk:**
   - Add your Vercel production URL to Clerk's allowed origins
   - Update redirect URLs in Clerk dashboard

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Authentication**: Clerk
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📝 Notes

- This is a standalone Next.js app created in the `next-app/` folder
- The existing Vite project in the parent directory remains untouched
- Replace simulated data with real API endpoints for production use
- All TypeScript errors will resolve after running `npm install`

## 🤝 Support

For issues or questions, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

**Powered by Piezoelectric Innovation | © 2025 SmartFoot Labs**
