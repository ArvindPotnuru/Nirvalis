# Deployment & Domain Guide for Nirvalis

## Domain Registration Options

### ✅ Domain Availability Status

**nirvalis.com** is currently **AVAILABLE** for registration!

We recommend registering it immediately as domain availability can change quickly. You can also check alternative TLDs like `.io`, `.net`, `.org`, and `.health` for brand protection.

See `DOMAIN_CONFIG.md` for detailed domain availability information and registration checklist.

### Recommended Domain Registrars:

#### ⭐ **Cloudflare Registrar** (BEST VALUE - Recommended)
- **At-cost pricing** - No markup, pay exactly what registry charges
- **Free WHOIS privacy** - Included with all domains
- **Transparent pricing** - Same price for first year and renewal (~$9.77/year)
- **Security features** - Free DNSSEC, DDoS protection
- **No upsells** - Clean, simple interface
- **Best for**: Developers, tech startups, anyone who wants lowest cost
- **Link**: https://www.cloudflare.com/products/registrar/

#### ⭐ **Namecheap** (BEST FOR BEGINNERS)
- **User-friendly interface** - Very easy to use
- **Free WHOIS privacy** - Included
- **Good customer support** - 24/7 live chat
- **Transparent pricing** - Clear renewal rates (~$13.98/year)
- **No aggressive upsells** - Clean checkout
- **Best for**: Beginners, non-technical users, startups
- **Link**: https://www.namecheap.com/

#### **Porkbun** (Great Value Alternative)
- **Very low prices** - Often cheaper than competitors (~$9.43/year)
- **Free WHOIS privacy** - Included
- **Modern interface** - Clean and simple
- **Best for**: Budget-conscious users
- **Link**: https://porkbun.com/

#### **Hover** (Simple & Clean)
- **No upsells** - Simple approach
- **Free WHOIS privacy** - Included
- **Transparent pricing** (~$12.99/year)
- **Best for**: Users who want simplicity

#### ⚠️ **GoDaddy** (Not Recommended)
- **Expensive renewals** - Big price jump after first year ($17.99/year)
- **WHOIS privacy costs extra** - Not included (~$9.99/year)
- **Aggressive upsells** - Many add-ons pushed
- **Only consider if**: You need their specific hosting/services

**See `DOMAIN_REGISTRAR_COMPARISON.md` for detailed comparison.**

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

