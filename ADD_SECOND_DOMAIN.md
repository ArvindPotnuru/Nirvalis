# Adding nirvalis.health to Your Vercel App

## Quick Steps

### Step 1: Add Domain in Vercel Dashboard

1. Go to: https://vercel.com/arvindpotnuru-8354s-projects/nirvalis/settings/domains
2. Click **"Add Domain"**
3. Enter: `nirvalis.health`
4. Click **"Add"**
5. **Copy the DNS record** Vercel shows you

Vercel will display DNS records (CNAME or A record) - same process as nirvalis.org

### Step 2: Configure DNS for nirvalis.health

**If nirvalis.health is registered on Cloudflare:**
1. Go to: https://dash.cloudflare.com
2. Select **nirvalis.health** domain
3. Click **DNS** in left sidebar
4. Click **"Add record"**
5. Use the DNS record Vercel provided:
   - **Type**: CNAME or A (what Vercel shows)
   - **Name**: `@` (or leave blank for root domain)
   - **Target/Value**: What Vercel shows
   - **Proxy**: GRAY cloud (DNS only) for root domain
   - Click **"Save"**

**If nirvalis.health is registered elsewhere:**
1. Log into your domain registrar
2. Go to DNS management
3. Add the DNS record Vercel provided
4. Wait for propagation

### Step 3: Wait for DNS Propagation

- Usually 5-30 minutes
- Check Vercel dashboard - will show "Valid Configuration" when ready
- Test: https://nirvalis.health

---

## Result

After setup, both domains will work:
- ✅ https://nirvalis.org → Your Vercel app
- ✅ https://nirvalis.health → Your Vercel app (same app!)

Both domains point to the **same deployment** - no duplicate content issues.

---

## Optional: Set Primary Domain

You can set one as the primary domain in Vercel:
1. Go to Settings → Domains
2. Click the three dots next to a domain
3. Select "Set as Primary Domain"

This affects which domain shows in Vercel dashboard, but both will work.

---

## Optional: Add www Subdomains

You can also add:
- `www.nirvalis.org`
- `www.nirvalis.health`

Same process - add in Vercel, then add CNAME records in DNS pointing to Vercel.

---

## Important Notes

1. **Same App**: Both domains serve the same Vercel app - no code changes needed
2. **SSL Certificates**: Vercel automatically provisions SSL for both domains
3. **DNS Propagation**: Each domain propagates independently
4. **No Conflicts**: Having multiple domains is perfectly fine and common

---

## Quick Checklist

- [ ] Domain added in Vercel dashboard
- [ ] DNS record added in domain registrar (Cloudflare or elsewhere)
- [ ] Proxy turned OFF (gray cloud) if using Cloudflare
- [ ] Waited 5-30 minutes for DNS propagation
- [ ] Tested https://nirvalis.health

---

## Need Help?

If you run into issues:
1. Check Vercel dashboard for DNS record requirements
2. Verify DNS records match exactly
3. Ensure proxy is OFF for root domains on Cloudflare
4. Wait a bit longer - DNS can take time


