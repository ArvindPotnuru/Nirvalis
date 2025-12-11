# Deployment & Domain Guide for Nirvalis

## Domain Registration Options

### Recommended Domain Registrars:

1. **Namecheap** (https://www.namecheap.com/)
   - User-friendly interface
   - Free WHOIS privacy protection
   - Good customer support
   - Price: ~$10-15/year for .com domains

2. **Google Domains** (https://domains.google/)
   - Simple and clean interface
   - Integrated with Google services
   - Price: ~$12/year for .com domains

3. **Cloudflare Registrar** (https://www.cloudflare.com/products/registrar/)
   - At-cost pricing (no markup)
   - Free WHOIS privacy
   - Price: ~$8-10/year for .com domains

4. **GoDaddy** (https://www.godaddy.com/)
   - Popular and well-known
   - Often has promotional pricing
   - Price: ~$12-15/year for .com domains

## Hosting Options

### Option 1: Vercel (Recommended for React Apps)

**Pros:**
- Free tier available
- Automatic deployments from GitHub
- Built-in CDN
- Easy custom domain setup
- Great performance

**Steps:**
1. Build your project: `npm run build`
2. Install Vercel CLI: `npm i -g vercel`
3. Deploy: `vercel`
4. Connect your domain in Vercel dashboard
5. Update DNS records as instructed

**Pricing:** Free tier available, Pro starts at $20/month

### Option 2: Netlify

**Pros:**
- Free tier available
- Drag-and-drop deployment
- Automatic builds from Git
- Easy custom domain setup

**Steps:**
1. Build your project: `npm run build`
2. Go to https://app.netlify.com
3. Drag and drop your `build` folder
4. Or connect your GitHub repo for auto-deploy
5. Add custom domain in site settings

**Pricing:** Free tier available, Pro starts at $19/month

### Option 3: GitHub Pages

**Pros:**
- Free for public repositories
- Integrated with GitHub
- Simple setup

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Deploy: `npm run deploy`
4. Enable GitHub Pages in repository settings
5. Add custom domain in repository settings

**Pricing:** Free for public repos

### Option 4: AWS Amplify

**Pros:**
- Scalable infrastructure
- Free tier available
- Good for future growth

**Steps:**
1. Go to AWS Amplify Console
2. Connect your repository
3. Configure build settings
4. Add custom domain

**Pricing:** Free tier available, pay-as-you-go after

## Domain + Hosting Combined Options

### Option 5: Cloudflare Pages + Registrar

**Pros:**
- Free hosting
- At-cost domain pricing
- Excellent performance
- DDoS protection included

**Steps:**
1. Register domain at Cloudflare Registrar
2. Deploy site to Cloudflare Pages
3. Domain automatically configured

**Pricing:** Free hosting, domain at cost (~$8-10/year)

## Recommended Setup

For a simple, cost-effective solution:

1. **Register domain** at Cloudflare Registrar (~$8-10/year)
2. **Host on Vercel** (free tier)
3. **Connect domain** in Vercel dashboard
4. **Update DNS** records (usually automatic)

Total cost: **~$8-10/year** (just the domain)

## DNS Configuration

After purchasing your domain, you'll need to:

1. **Point to your hosting provider:**
   - For Vercel: Add A/CNAME records as shown in Vercel dashboard
   - For Netlify: Add CNAME record pointing to your Netlify site
   - For Cloudflare Pages: Automatic if using Cloudflare Registrar

2. **Wait for propagation:** DNS changes can take 24-48 hours to propagate globally

## SSL Certificate

Most modern hosting providers (Vercel, Netlify, Cloudflare) automatically provide:
- Free SSL certificates
- HTTPS enabled by default
- Automatic certificate renewal

No additional setup needed!

## Next Steps

1. Choose your domain registrar
2. Search for and purchase your domain (e.g., `nirvalis.com`)
3. Choose your hosting provider
4. Deploy your site
5. Connect your domain
6. Wait for DNS propagation
7. Your site will be live!

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Cloudflare Docs: https://developers.cloudflare.com/pages

