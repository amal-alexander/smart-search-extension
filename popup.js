document.addEventListener("DOMContentLoaded", () => {
  // Load previous search query
  chrome.storage.local.get("keyword", (data) => {
    if (data.keyword) {
      document.getElementById("searchInput").value = data.keyword;
    }
  });

  // When user clicks "Fetch 100 Results"
  document.getElementById("fetchBtn").addEventListener("click", () => {
    const keyword = document.getElementById("searchInput").value.trim();
    if (!keyword) return;

    // Save the keyword
    chrome.storage.local.set({ keyword });

    // Open Google Search in new tab
    chrome.tabs.create({
      url: `https://www.google.com/search?q=${encodeURIComponent(keyword)}&num=100`
    });
  });

  // When user clicks "Analyze with AI"
  document.getElementById("analyzeBtn").addEventListener("click", async () => {
    const question = document.getElementById("question").value.trim();
    if (!question) return;

    document.getElementById("answer").innerText = "Thinking with AI...";

    chrome.storage.local.get("keyword", async (data) => {
      const keyword = data.keyword;
      if (!keyword) {
        document.getElementById("answer").innerText = "Please enter a search query first.";
        return;
      }

      try {
        const aiAnswer = await askAI(keyword, question);
        document.getElementById("answer").innerText = aiAnswer;
      } catch (err) {
        console.error(err);
        document.getElementById("answer").innerText = "Error: " + err.message;
      }
    });
  });
});

async function askAI(keyword, question) {
  const messages = [
    {
      role: "system",
      content: "You are an intelligent assistant that simulates analyzing the top 100 Google search results for any query. You answer follow-up questions based on general SEO and search behavior knowledge."
    },
    {
      role: "user",
      content: `The user searched for: "${keyword}". They are now asking: "${question}". Based on what typical top 100 search results might contain for this query, provide a thoughtful and realistic answer. Do not suggest how to search — answer directly as if you analyzed those results.`
    }
  ];


  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`, // from config.js
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages,
      temperature: 0.5
    })
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error?.message || "Unknown AI error");
  }

  return data.choices?.[0]?.message?.content || "No AI response.";
}
