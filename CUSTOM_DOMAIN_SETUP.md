# Connecting nirvalis.org to Vercel - Step by Step Guide

## Overview

You have:
- ✅ Domain: `nirvalis.org` registered on Cloudflare
- ✅ App: Deployed on Vercel at `nirvalis.vercel.app`

Goal: Make `nirvalis.org` point to your Vercel app.

---

## Method 1: Vercel Dashboard (Recommended) ⭐

### Step 1: Add Domain in Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click on your **nirvalis** project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter: `nirvalis.org`
6. Click **Add**

### Step 2: Vercel Will Show DNS Instructions

Vercel will display DNS records you need to add. You'll see something like:

```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

OR

```
Type: A
Name: @
Value: 76.76.21.21
```

**Note:** Vercel may show different records. Use what they provide.

### Step 3: Configure DNS in Cloudflare

1. Go to https://dash.cloudflare.com
2. Select your domain: **nirvalis.org**
3. Click **DNS** in the left sidebar
4. Click **Add record**

#### Option A: If Vercel shows CNAME record
- **Type**: CNAME
- **Name**: `@` (or leave blank for root domain)
- **Target**: `cname.vercel-dns.com` (or what Vercel shows)
- **Proxy status**: 🟠 **DNS only** (turn off proxy - gray cloud)
- Click **Save**

#### Option B: If Vercel shows A record
- **Type**: A
- **Name**: `@` (or leave blank for root domain)
- **IPv4 address**: The IP address Vercel provides
- **Proxy status**: 🟠 **DNS only** (turn off proxy - gray cloud)
- Click **Save**

#### Option C: If Vercel shows both A and CNAME
- Add the CNAME record (preferred)
- Or add the A record if CNAME doesn't work

### Step 4: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours**
- Usually works within **5-30 minutes**
- Check status in Vercel dashboard (will show "Valid Configuration" when ready)

### Step 5: SSL Certificate (Automatic)

- Vercel automatically provisions SSL certificate
- HTTPS will be enabled automatically
- No action needed!

---

## Method 2: Using Vercel CLI

If you prefer command line:

```bash
# Add the domain
npx vercel domains add nirvalis.org

# This will show you the DNS records to add in Cloudflare
# Follow the same DNS configuration steps as Method 1
```

---

## Important: Cloudflare Proxy Settings

### ⚠️ For Root Domain (@):

**Turn OFF Cloudflare Proxy** (Gray Cloud):
- When adding the DNS record, make sure the cloud icon is **gray** (DNS only)
- **Not orange** (proxied)
- Root domains with Cloudflare proxy can cause issues with Vercel

### ✅ For Subdomains (www, etc.):

You can use either:
- **Gray cloud** (DNS only) - Recommended
- **Orange cloud** (Proxied) - Also works

---

## Adding www Subdomain (Optional but Recommended)

### Step 1: Add www in Vercel
1. In Vercel dashboard → Settings → Domains
2. Add: `www.nirvalis.org`
3. Vercel will automatically redirect to root domain

### Step 2: Add DNS Record in Cloudflare
- **Type**: CNAME
- **Name**: `www`
- **Target**: `cname.vercel-dns.com` (or what Vercel shows)
- **Proxy**: Gray cloud (DNS only)
- Click **Save**

---

## Troubleshooting

### Domain Not Working?

1. **Check DNS Records**:
   - Verify records are correct in Cloudflare
   - Make sure proxy is OFF (gray cloud) for root domain

2. **Check Vercel Status**:
   - Go to Vercel dashboard → Domains
   - Look for error messages
   - Status should show "Valid Configuration"

3. **Wait Longer**:
   - DNS can take up to 48 hours
   - Usually works within 30 minutes

4. **Test DNS Propagation**:
   ```bash
   # Check if DNS is resolving
   dig nirvalis.org
   nslookup nirvalis.org
   ```

5. **Clear Browser Cache**:
   - Try incognito/private window
   - Clear DNS cache on your computer

### Common Issues:

**Issue**: "Invalid Configuration" in Vercel
- **Solution**: Check DNS records match exactly what Vercel shows
- Make sure proxy is OFF for root domain

**Issue**: Site loads but shows Vercel default page
- **Solution**: Make sure domain is added to correct project in Vercel

**Issue**: SSL certificate not working
- **Solution**: Wait 5-10 minutes after DNS propagates, SSL is automatic

---

## Quick Checklist

- [ ] Domain added in Vercel dashboard
- [ ] DNS record added in Cloudflare (CNAME or A record)
- [ ] Proxy turned OFF (gray cloud) for root domain
- [ ] Waited 5-30 minutes for DNS propagation
- [ ] Checked Vercel dashboard shows "Valid Configuration"
- [ ] Tested https://nirvalis.org in browser

---

## Expected Result

After setup:
- ✅ `nirvalis.org` → Your Vercel app
- ✅ `www.nirvalis.org` → Your Vercel app (if configured)
- ✅ HTTPS enabled automatically
- ✅ SSL certificate valid

---

## Need Help?

- Vercel Docs: https://vercel.com/docs/concepts/projects/domains
- Cloudflare Docs: https://developers.cloudflare.com/dns/
- Vercel Support: https://vercel.com/support


