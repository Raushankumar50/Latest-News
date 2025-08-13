export default async function handler(req, res) {
  const query = req.query.q || "latest";

  try {
    const apiKey = process.env.NEWS_API_KEY; // from Vercel env
    const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
