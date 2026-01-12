# Quick Setup: nirvalis.org → Vercel

## 🚀 Fastest Method (5 minutes)

### Step 1: Add Domain in Vercel (2 minutes)

1. Open: https://vercel.com/arvindpotnuru-8354s-projects/nirvalis/settings/domains
2. Click **"Add Domain"**
3. Type: `nirvalis.org`
4. Click **"Add"**
5. **Copy the DNS record** Vercel shows you (you'll need it in Step 2)

**Vercel will show something like:**
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

### Step 2: Add DNS Record in Cloudflare (2 minutes)

1. Open: https://dash.cloudflare.com
2. Click on **nirvalis.org** domain
3. Click **DNS** in left sidebar
4. Click **"Add record"**

**Fill in the form:**
- **Type**: Use what Vercel showed (CNAME or A)
- **Name**: `@` (or leave blank for root domain)
- **Target/Value**: Paste what Vercel showed
- **Proxy status**: Click the cloud icon to make it **GRAY** (DNS only, not orange!)
- Click **"Save"**

### Step 3: Wait (1-30 minutes)

- Check Vercel dashboard - it will show "Valid Configuration" when ready
- Usually works in 5-10 minutes
- Test: https://nirvalis.org

---

## ⚠️ Important: Cloudflare Proxy

**For root domain (@), you MUST turn OFF the proxy:**
- Cloud icon should be **GRAY** (DNS only)
- **NOT orange** (proxied)

This is critical for Vercel to work properly!

---

## ✅ Done!

Once DNS propagates:
- ✅ https://nirvalis.org → Your app
- ✅ SSL certificate automatic
- ✅ HTTPS enabled

---

## Need Help?

See `CUSTOM_DOMAIN_SETUP.md` for detailed troubleshooting.


