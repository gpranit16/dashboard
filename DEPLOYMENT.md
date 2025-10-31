# Deployment Guide - SmartFoot Dashboard

## Quick Deploy to Vercel

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository: `gpranit16/dashboard`

2. **Configure Project**
   - Root Directory: `next-app`
   - Framework Preset: Next.js
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

3. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c3R1bm5pbmctYnVsbGRvZy0xMS5jbGVyay5hY2NvdW50cy5kZXYk
   CLERK_SECRET_KEY=sk_test_ZWyGhj6PPjsRwDSr0i9q23DVTuIeRcnzkRgUPZr19U
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at: `https://your-project.vercel.app`

5. **Update Clerk Settings**
   - Go to [Clerk Dashboard](https://dashboard.clerk.com)
   - Add your Vercel URL to allowed origins
   - Update redirect URLs if needed

## Deploy to Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select `gpranit16/dashboard`

2. **Configure Build**
   - Base directory: `next-app`
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Add Environment Variables**
   Go to Site settings → Environment variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c3R1bm5pbmctYnVsbGRvZy0xMS5jbGVyay5hY2NvdW50cy5kZXYk
   CLERK_SECRET_KEY=sk_test_ZWyGhj6PPjsRwDSr0i9q23DVTuIeRcnzkRgUPZr19U
   ```

4. **Deploy**
   - Click "Deploy site"
   - Wait for build completion
   - Site will be live at: `https://your-site.netlify.app`

## Key Configuration Changes

✅ **Routing Configuration**: Changed to `routing="path"` to ensure all routes work on single domain
✅ **Clerk Integration**: Properly configured with path-based routing
✅ **Environment Variables**: Added `.env.example` for reference
✅ **Image Domains**: Configured Next.js to allow Clerk profile images

## Testing Deployment

After deployment:
1. Visit your deployed URL
2. Click "Sign Up" - should stay on same domain
3. Create an account
4. Should redirect to `/dashboard` on same domain
5. Test theme toggle
6. Test logout and sign-in

## Troubleshooting

If you see CORS errors:
- Make sure Clerk has your deployment URL in allowed origins
- Check that environment variables are set correctly
- Clear browser cache and try again

If routes don't work:
- Ensure root directory is set to `next-app`
- Verify middleware.ts is in the correct location
- Check Vercel/Netlify build logs for errors
