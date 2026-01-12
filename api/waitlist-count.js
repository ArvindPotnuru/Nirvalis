// Vercel Serverless Function to get waitlist count
// This function can fetch from Formspree API or use a simple counter

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formspreeApiKey = process.env.FORMSPREE_API_KEY;
    const formspreeFormId = process.env.FORMSPREE_FORM_ID || 'xojqydrz';

    // If Formspree API key is available (Professional/Business plan)
    if (formspreeApiKey) {
      try {
        // Create Basic Auth header
        const authString = Buffer.from(':' + formspreeApiKey).toString('base64');
        
        const response = await fetch(
          `https://formspree.io/api/0/forms/${formspreeFormId}/submissions`,
          {
            headers: {
              'Authorization': `Basic ${authString}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const count = data.submissions?.length || 0;
          return res.status(200).json({ count });
        }
      } catch (error) {
        console.error('Formspree API error:', error);
        // Fall through to default count
      }
    }

    // Fallback: Return 0 (client-side will use localStorage for incrementing)
    // When Formspree API is available, this will return the real count
    return res.status(200).json({ count: 0 });
  } catch (error) {
    console.error('Error fetching waitlist count:', error);
    return res.status(500).json({ error: 'Failed to fetch count', count: 0 });
  }
}

