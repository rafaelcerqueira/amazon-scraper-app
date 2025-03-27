document.getElementById("searchButton").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value;
  if (!keyword) {
      alert("Please enter a keyword.");
      return;
  }

  try {
      const response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);

      if (!response.ok) throw new Error("Failed to fetch results.");
      const products = await response.json();

      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = ""; // Limpar resultados anteriores
      products.forEach(product => {
          const productDiv = document.createElement("div");
          productDiv.style.marginBottom = "20px";
          productDiv.innerHTML = `
              <h3>${product.title}</h3>
              <p>Rating: ${product.rating || "N/A"}</p>
              <p>Reviews: ${product.reviews || "N/A"}</p>
              <img src="${product.image}" alt="${product.title}" style="max-width: 100px;">
          `;
          resultsDiv.appendChild(productDiv);
      });
  } catch (error) {
      console.error(error);
      alert("An error occurred while fetching data.");
  }
});
