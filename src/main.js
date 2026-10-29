import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
  <main class="min-h-screen bg-amber-50 flex flex-col justify-start items-center px-6 text-center">

    <!-- Navigation -->
    <div class ="md:w-full mt-2 max-w-6xl flex bg-amber-100 sm:rounded-3xl md:mt-1 py-6 px-12 justify-around">
    <button class=" md:hidden text-2xl" id="menuBtn">&#9776;</button>
    <nav >
    <ul class=" hidden flex-col md:flex md:flex-row gap-4 md:gap-26 items-center w-full md:w-auto 
      text-2xl" id="menu">
    <li>Home</li>
    <li><a href="#menu-search">Menu</a></li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Visit Us</li>
    </ul>
    </nav>
    </div>
    

    <!-- Brand name -->
    <div class="flex flex-col items-center mt-4 p-1.5 bg-amber-200 rounded-2xl">
      <h1 class="text-3xl font-bold text-black p-4">
        The Warm Table
      </h1>
    </div>

  <!---hero section-->
  <div class="w-full max-w-6xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

  <!---left side=-->

  <div class="flex flex-col lg:col-span-5 justify-center text-center lg:text-left">
  <span  class="font-semibold text-amber-700 mb-3 text-sm uppercase tracking-wider">Baking comfort daily.</span>
  <p class="text-lg text-gray-600 leading-relaxed mb-8">Every cup is served with genuine care. Every pastry is baked fresh from scratch. Step inside your new neighborhood escape to slow down and savor the moment.
  </p>
<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
 <a href="#menu-search" class="bg-amber-800 rounded-full text-white font-medium px-8 py-3.5 hover:bg-amber-400/50 transition text-center" > See Today's Batch →
    </a>
</div>

  </div>

  <!---right side-->
 <div class="lg:col-span-7 grid grid-cols-2 gap-4 auto-rows-45 sm:auto-rows-">
  
  <!-- The Tall Pillar Capsule -->
  <div class="bg-amber-200 rounded-full overflow-hidden shadow-sm row-span-2 relative group">
    <img src="/cinnamon-latte.jpg" alt="Cozy Cafe Interior" class="w-full h-full object-cover ">
  </div>

  <!-- Top Curved Frame -->
  <div class="bg-amber-300 rounded-t-full rounded-br-full overflow-hidden shadow-sm relative group">
    <img src="/istockphoto-1256576728-612x612.jpg" alt="Fresh Baked Croissant" class="w-full h-full object-cover ">
  </div>

  <!-- Bottom Curved Frame -->
  <div class="bg-amber-400 rounded-b-full rounded-tl-full overflow-hidden shadow-sm relative group">
    <img src="/caremal .jpeg" alt="Pouring Latte Art" class="w-full h-full object-cover ">
  </div>

</div>
</div>


    <!-- Search bar -->
    <div class="w-full max-w-2xl m-8 flex flex-col items-center">
      <input
        type="text"
        id="menu-search"
        placeholder="search the warmth you need"
        class="w-full max-w-2xl border border-amber-200 p-6 text-black rounded-full "
      >
    </div>

    <!-- Menu cards -->
    <div id="menu-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl justify-center">

      <!-- Coffee -->

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 gap-4 rounded-2xl justify-between min-h-95" data-name="coffee drink latte espresso hot cinnamon vanilla morning" data-category="coffee">
        <h2 class="font-bold">Cinnamon Latte</h2>
        <img src="/cinnamon-latte.jpg" alt="Cinnamon Latte" class=" object-cover h-44 w-auto overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">Rich espresso paired with steamed milk, sweet vanilla syrup, and a heavy dash of ground cinnamon. </p>
        <h3>Price: 180</h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="coffee drink macchiato hot caramel sweet caffeine" data-category="coffee">
        <h2 class="font-bold">Caramel Macchiato</h2>
        <img src="/caremal .jpeg" alt="Caramel Macchiato" class="h-44 object-cover w-auto overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">Freshly pulled espresso shots layered over creamy steamed milk and finished with a buttery caramel drizzle cascade. </p>
        <h3>Price: ₹190 </h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="coffee cappuccino espresso milk foam hot" data-category="coffee">
        <h2 class="font-bold">Classic Cappuccino</h2>
        <img src="/Classic Cappuccino.jpg" alt="Classic Cappuccino" class="h-44  object-cover w-auto overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">Rich espresso blended with steamed milk and topped with a thick layer of creamy milk foam. </p>
        <h3>Price: ₹170 </h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="coffee americano espresso black coffee hot bold" data-category="coffee">
        <h2 class="font-bold">Classic Americano</h2>
        <img src="/Classic Americano.jpg" alt="Classic Americano" class="h-44 object-cover w-auto overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">Bold espresso combined with hot water for a smooth and refreshing black coffee. </p>
        <h3>Price: ₹150 </h3>
      </div>

      <!-- Hot Chocolate -->

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 gap-4 rounded-2xl justify-between min-h-95" data-name="chocolate drink cocoa hot hazelnut sweet dessert kids" data-category="hot-chocolate">
        <h2 class="font-bold">Hazelnut Hot Chocolate</h2>
        <img src="/hazel nut.jpeg" alt="Hazelnut Hot Chocolate" class="h-44 w-auto object-cover overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">Velvety melted chocolate infused with slow-toasted hazelnut syrup and topped with fluffy marshmallows. </p>
        <h3>Price: ₹195 </h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="chocolate drink cocoa dark rich sweet hot" data-category="hot-chocolate">
        <h2 class="font-bold">Dark Chocolate Cocoa</h2>
        <img src="/Dark Chocolate Cocoa.jpg" alt="Dark Chocolate Cocoa" class="h-44 object-cover w-auto overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">Rich dark chocolate blended with steamed milk for a comforting and indulgent drink. </p>
        <h3>Price: ₹185 </h3>
      </div>

      <!-- Tea -->

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 gap-4 rounded-2xl justify-between min-h-95" data-name="tea drink chamomile herbal hot honey calm sleep soothing" data-category="tea">
        <h2 class="font-bold">Honey Chamomile Tea</h2>
        <img src="/lemonn tea.jpeg" alt="Honey Chamomile Tea" class="h-44 w-auto object-cover overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">Soothing organic chamomile blossoms steeped to perfection and served with a golden drizzle of raw local honey.</p>
        <h3>Price:  ₹150 </h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="tea drink chai masala hot spice vanilla milk traditional" data-category="tea">
        <h2 class="font-bold">Spiced Vanilla Chai</h2>
        <img src="/ice vinnnala.jpeg" alt="Spiced Vanilla Chai" class="h-44 w-auto object-cover overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">A traditional blend of black tea leaves, aromatic crushed spices, and sweet vanilla beans simmered gently in hot milk. </p>
        <h3>Price: ₹160 </h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="tea green herbal light refreshing hot healthy" data-category="tea">
        <h2 class="font-bold">Classic Green Tea</h2>
        <img src="/Classic Green Tea.jpeg" alt="Classic Green Tea" class="h-44 w-auto object-cover overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">A light and refreshing green tea with a delicate flavour, perfect for a peaceful break. </p>
        <h3>Price: ₹130 </h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="tea lemon ginger honey hot soothing refreshing" data-category="tea">
        <h2 class="font-bold">Lemon Ginger Tea</h2>
        <img src="/Lemon Ginger Tea.jpg" alt="Lemon Ginger Tea" class="h-44 w-auto object-cover overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">A warming blend of lemon, aromatic ginger, and a touch of honey. </p>
        <h3>Price: ₹145 </h3>
      </div>

      <!-- Snacks -->

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 gap-4 rounded-2xl justify-between min-h-95" data-name="food pastry bake croissant butter bread breakfast morning warm" data-category="snacks">
        <h2 class="font-bold">Warm Butter Croissant</h2>
        <img src="/istockphoto-1256576728-612x612.jpg" alt="Warm Butter Croissant" class="h-44 object-cover w-auto overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">A flaky, golden-brown puff pastry baked fresh daily and served warm with a side of homemade berry jam. </p>
        <h3>Price: ₹140 </h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="food pastry bake bun cinnamon sweet roll dessert cake bread" data-category="snacks">
        <h2 class="font-bold">Cinnamon Swirl Bun</h2>
        <img src="/Cinnamon Swirl Bun.jpg" alt="Cinnamon Swirl Bun" class="h-44 w-auto object-cover overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">Soft, pillowy dough rolled with brown sugar cinnamon paste, baked golden, and drizzled with warm cream cheese glaze. </p>
        <h3>Price: ₹165 </h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="food pastry bake muffin cake almond nut sweet snack toast" data-category="snacks">
        <h2 class="font-bold">Toasted Almond Muffin</h2>
        <img src="/Toasted Almond Muffin.jpeg" alt="Toasted Almond Muffin" class="h-44 w-auto object-cover overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">A moist, classic vanilla muffin loaded with crunchy sliced almonds and a soft brown sugar crumble top. </p>
        <h3>Price: ₹130< </h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="food sandwich grilled cheese bread lunch snack" data-category="snacks">
        <h2 class="font-bold">Grilled Cheese Sandwich</h2>
        <img src="/Grilled Cheese Sandwich.jpg" alt="Grilled Cheese Sandwich" class="h-44 w-auto object-cover overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">Golden toasted bread filled with melted cheese for a warm and satisfying snack. </p>
        <h3>Price: ₹180 </h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="food garlic bread toasted savoury butter herbs snack" data-category="snacks">
        <h2 class="font-bold">Herb Garlic Bread</h2>
        <img src="/Herb Garlic Bread.jpg" alt="Herb Garlic Bread" class="h-44 w-auto object-cover overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">Toasted bread brushed with garlic butter and sprinkled with aromatic herbs. </p>
        <h3>Price: ₹125 </h3>
      </div>

      <!-- Desserts -->

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 gap-4 rounded-2xl justify-between min-h-95" data-name="dessert brownie chocolate fudge sweet cake" data-category="desserts">
        <h2 class="font-bold">Chocolate Fudge Brownie</h2>
        <img src="/Chocolate Fudge Brownie.jpeg" alt="Chocolate Fudge Brownie" class="h-44 w-auto object-cover overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">A rich, fudgy chocolate brownie with a soft centre and an indulgent cocoa flavour. </p>
        <h3>Price: ₹160 </h3>
      </div>

      <div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="dessert cookie chocolate chip sweet baked snack" data-category="desserts">
        <h2 class="font-bold">Chocolate Chip Cookie</h2>
        <img src="/Chocolate Chip Cookie.jpg" alt="Chocolate Chip Cookie" class="h-44 w-auto object-cover overflow-hidden border rounded-2xl m-1.5">
        <p class="text-gray-600">A freshly baked cookie with a soft centre and generous chocolate chips. </p>
        <h3>Price: ₹95 </h3>
      </div>

    </div>
  </main>
  `;

  const menuBtn = document.querySelector("#menuBtn");
  const menu = document.querySelector("#menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  const menuGrid = document.querySelector("#menu-grid");
  const menuCards = Array.from(menuGrid.querySelectorAll(".menu-card"));

  const categoryNames = {
    coffee: "Coffee",
    "hot-chocolate": "Hot Chocolate",
    tea: "Tea",
    snacks: "Snacks",
    desserts: "Desserts",
  };

  const menuContainer = document.createElement("div");
  menuContainer.className = "w-full max-w-6xl flex flex-col gap-12";

  // Create a section for each category
  Object.entries(categoryNames).forEach(([category, title]) => {
    const categoryCards = menuCards.filter(
      (card) => card.dataset.category === category,
    );

    if (categoryCards.length === 0) {
      return;
    }

    const section = document.createElement("section");
    section.className = "w-full";
    section.dataset.categorySection = category;

    const heading = document.createElement("h2");
    heading.className = "text-2xl font-bold text-left mb-6";
    heading.textContent = title;

    const grid = document.createElement("div");
    grid.className =
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full justify-center";

    categoryCards.forEach((card) => {
      grid.appendChild(card);
    });

    section.appendChild(heading);
    section.appendChild(grid);
    menuContainer.appendChild(section);
  });

  menuGrid.replaceWith(menuContainer);

  const searchInput = document.querySelector("#menu-search");

  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase().trim();

    menuCards.forEach((card) => {
      const productName = card.dataset.name.toLowerCase();
      const category = card.dataset.category.toLowerCase().replaceAll("-", " ");

      if (productName.includes(searchText) || category.includes(searchText)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });

    const categorySections = menuContainer.querySelectorAll(
      "[data-category-section]",
    );

    categorySections.forEach((section) => {
      const visibleCards = Array.from(
        section.querySelectorAll(".menu-card"),
      ).some((card) => card.style.display !== "none");

      section.style.display = visibleCards ? "" : "none";
    });
  });
});
