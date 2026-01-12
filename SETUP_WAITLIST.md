# Setup Waitlist - Step by Step

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Formspree Endpoint

1. Go to: **https://formspree.io**
2. Click **"Sign Up"** (free)
3. After signing up, click **"New Form"**
4. Name it: `Nirvalis Waitlist`
5. Click **"Create Form"**
6. **Copy your form endpoint** - it looks like:
   ```
   https://formspree.io/f/abc123xyz
   ```

### Step 2: Configure Local Development

Create a file called `.env.local` in your project root:

```bash
# In terminal, run:
cd /Users/upotnar/workspace/Nirvalis
touch .env.local
```

Then open `.env.local` and add:

```
REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

(Replace `YOUR_FORM_ID` with the actual ID from Formspree)

**Restart your dev server** after adding this:
```bash
npm start
```

### Step 3: Configure Production (Vercel)

1. Go to: **https://vercel.com/arvindpotnuru-8354s-projects/nirvalis/settings/environment-variables**

2. Click **"Add New"**

3. Add:
   - **Key**: `REACT_APP_FORMSPREE_ENDPOINT`
   - **Value**: `https://formspree.io/f/YOUR_FORM_ID` (same as above)
   - **Environments**: Check all (Production, Preview, Development)

4. Click **"Save"**

5. **Redeploy** your app:
   ```bash
   npx vercel --prod
   ```

### Step 4: Test It!

1. Go to your website
2. Scroll to waitlist section
3. Enter an email
4. Click "Join the Waitlist"
5. You should see: "Thank you for joining the waitlist! We'll be in touch soon."
6. Check your email - Formspree will notify you!

---

## ✅ What You Get

- ✅ **Email notifications** when someone signs up
- ✅ **All emails stored** in Formspree dashboard
- ✅ **Export to CSV** - download all signups
- ✅ **Free tier**: 50 submissions/month

---

## 🔧 Troubleshooting

**Form not working locally?**
- Make sure `.env.local` exists in project root
- Check the endpoint URL is correct
- Restart dev server: `npm start`

**Form not working in production?**
- Check environment variable is added in Vercel
- Make sure it's set for "Production" environment
- Redeploy after adding: `npx vercel --prod`

**Not receiving emails?**
- Check Formspree dashboard - submissions appear there
- Verify your email in Formspree settings
- Check spam folder

---

## 📋 Quick Checklist

- [ ] Sign up for Formspree
- [ ] Create form and copy endpoint
- [ ] Create `.env.local` file with endpoint
- [ ] Add environment variable in Vercel
- [ ] Test locally
- [ ] Deploy to production
- [ ] Test on live site

---

## 🎯 Next Steps (Optional)

Once basic setup works:
1. Set up confirmation emails
2. Add waitlist count display
3. Create welcome email sequence
4. Add analytics tracking

---

## Need Help?

- Formspree Help: https://help.formspree.io
- Vercel Env Vars: https://vercel.com/docs/concepts/projects/environment-variables


