# Waitlist Setup - Quick Start Guide

## Current Status

✅ **Form is ready** - The waitlist form is already implemented in your app
✅ **UI is complete** - Loading states, success/error messages, validation
⏳ **Email service needed** - Just need to connect an email service

---

## Recommended: Formspree (Easiest - 5 minutes)

### Step 1: Create Formspree Account

1. Go to: https://formspree.io
2. Click **"Sign Up"** (free account)
3. Sign up with email or Google

### Step 2: Create a Form

1. After signing up, click **"New Form"**
2. Form name: `Nirvalis Waitlist`
3. Click **"Create Form"**
4. You'll see your form endpoint - it looks like:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
5. **Copy this URL** - you'll need it in the next step

### Step 3: Configure Your App

**For Local Development:**

1. Create `.env.local` file in your project root:
   ```bash
   # In /Users/upotnar/workspace/Nirvalis/
   touch .env.local
   ```

2. Add your Formspree endpoint:
   ```
   REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
   (Replace `YOUR_FORM_ID` with your actual form ID)

3. Restart your dev server:
   ```bash
   npm start
   ```

**For Production (Vercel):**

1. Go to: https://vercel.com/arvindpotnuru-8354s-projects/nirvalis/settings/environment-variables
2. Click **"Add New"**
3. Add:
   - **Key**: `REACT_APP_FORMSPREE_ENDPOINT`
   - **Value**: `https://formspree.io/f/YOUR_FORM_ID`
   - **Environment**: Select all (Production, Preview, Development)
4. Click **"Save"**
5. Redeploy your app (or it will auto-deploy on next push)

### Step 4: Test It!

1. Go to your website
2. Scroll to the waitlist section
3. Enter an email address
4. Click "Join the Waitlist"
5. You should see a success message
6. Check your email - Formspree will send you a notification!

---

## Alternative Options

### Option 2: Resend (More Professional)

**Pros**: Better for production, can send confirmation emails
**Cons**: Requires Vercel serverless function setup

See `WAITLIST_GUIDE.md` for detailed instructions.

### Option 3: ConvertKit (Best for Marketing)

**Pros**: Email automation, sequences, analytics
**Cons**: More complex setup

See `WAITLIST_GUIDE.md` for detailed instructions.

---

## What Happens After Setup?

1. ✅ **Emails collected** - Formspree stores all submissions
2. ✅ **Email notifications** - You get notified when someone signs up
3. ✅ **Export data** - Download CSV of all signups
4. ✅ **Analytics** - See how many people signed up

---

## Next Steps (Optional Enhancements)

1. **Confirmation emails** - Send welcome email to signups
2. **Waitlist count** - Show "Join 1,234 others" on your site
3. **Analytics** - Track conversion rates
4. **Email sequences** - Automated follow-up emails

---

## Troubleshooting

**Form not working?**
- Check `.env.local` file exists and has correct endpoint
- Restart dev server after adding environment variable
- Check browser console for errors

**Not receiving emails?**
- Check Formspree dashboard for submissions
- Verify email in Formspree settings
- Check spam folder

**Production not working?**
- Make sure environment variable is added in Vercel
- Redeploy after adding environment variable
- Check Vercel logs for errors

---

## Quick Checklist

- [ ] Sign up for Formspree
- [ ] Create form and get endpoint
- [ ] Add to `.env.local` for local development
- [ ] Add to Vercel environment variables for production
- [ ] Test locally
- [ ] Deploy to production
- [ ] Test on live site

---

## Need Help?

- Formspree Docs: https://help.formspree.io
- Vercel Environment Variables: https://vercel.com/docs/concepts/projects/environment-variables
- See `WAITLIST_GUIDE.md` for more detailed options


