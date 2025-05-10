{/* <nav class="nav-links">
  <a href="#" onclick="filterProducts('all')">Shop All</a>
  <a href="#" onclick="filterProducts('bestseller')">Bestsellers</a>
  <a href="#" onclick="filterProducts('skincare')">Skincare</a>
  <a href="#" onclick="filterProducts('lipcare')">Lip Care</a>
  <a href="#" onclick="filterProducts('offers')">Offers</a>
</nav>

<script>
  function filterProducts(category) {
    alert("You clicked: " + category);
    // You can replace this with actual filtering or navigation code
  }
</script> */}

// script.js
function filterProducts(category) {
  console.log("Selected category:", category);

  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    card.style.display = "none";
  });

  const matchingCards = document.querySelectorAll(`.product-card.${category}`);
  matchingCards.forEach(card => {
    card.style.display = "block";
  });
}
