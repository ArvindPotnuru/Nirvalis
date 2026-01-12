# Quick Waitlist Setup Guide

## Option 1: Formspree (Recommended for Quick Start) ⭐

### Setup Steps:
1. Go to https://formspree.io and sign up (free)
2. Create a new form
3. Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
4. Add to your `.env.local` file:
   ```
   REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
5. Restart your dev server
6. Test the form!

**Pros**: 
- Free tier: 50 submissions/month
- No backend needed
- Works immediately
- Email notifications

**Cons**: 
- Limited customization
- Need to upgrade for more submissions

---

## Option 2: Resend (Recommended for Production) ⭐

### Setup Steps:
1. Sign up at https://resend.com (free tier: 3,000 emails/month)
2. Get your API key from dashboard
3. Create a Vercel serverless function (or use their API directly)
4. Add to environment variables in Vercel dashboard

**Pros**:
- Modern, developer-friendly
- Great free tier
- Professional emails
- Can send confirmation emails

**Cons**:
- Requires backend setup (Vercel serverless function)

---

## Option 3: ConvertKit (Best for Marketing)

### Setup Steps:
1. Sign up at https://convertkit.com (free: up to 1,000 subscribers)
2. Create a form in ConvertKit
3. Get your form ID and API key
4. Use ConvertKit API or embed code

**Pros**:
- Email automation
- Sequences and tagging
- Great analytics
- Lead nurturing

**Cons**:
- More complex setup
- Can get expensive

---

## Current Implementation

The waitlist form is already set up in `src/App.js` and supports:
- ✅ Loading states
- ✅ Success/error messages
- ✅ Form validation
- ✅ Privacy notice
- ✅ Disabled states during submission

### To Activate:

1. **Choose a service** (Formspree recommended for quick start)
2. **Get your API key/endpoint**
3. **Add to environment variables**:
   - Create `.env.local` file in project root
   - Add: `REACT_APP_FORMSPREE_ENDPOINT=your_endpoint_here`
4. **Restart dev server**: `npm start`
5. **Test the form!**

### Environment Variables

Copy `domain.env.example` to `.env.local` and fill in your service details.

---

## Testing

The form currently works in "development mode" (logs to console). To test with a real service:

1. Set up Formspree (5 minutes)
2. Add endpoint to `.env.local`
3. Test submission
4. Check your email/Formspree dashboard

---

## Next Steps After Setup

1. ✅ Set up email service
2. ⏳ Add confirmation email (double opt-in)
3. ⏳ Set up analytics tracking
4. ⏳ Add waitlist count display
5. ⏳ Create welcome email sequence
6. ⏳ Test on mobile devices


