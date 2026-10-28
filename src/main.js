import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
  <main class="min-h-screen bg-amber-50 flex flex-col justify-start items-center px-6 text-center">
    <!---nav-->
    <div class="w-full flex justify-center py-4 bg-amber-100">
  
    <nav class="flex justify-between w-full  px-10"> 
    <!---left-side-->
    <p class="text-xl">Menu</p>
    <p class="text-xl" >About us</p>
    <!--center-->
    
    <p class="text-xl" >Home</p>
     
    <!---right side-->
    <p class="text-xl" >Contact</p>
    <p class="text-xl" >Visit us</p>
    <p class="text-xl">Follow us</p>
    </nav>
    </div>

    <!--brand name-->
    <div class="flex flex-col items-center mt-4 p-1.5 bg-amber-200 rounded-2xl">
  <h1 class="text-3xl font-bold text-black p-4">
    The Warm Table
  </h1>
</div>

<!---- search bar--->
<div class="w-full max-w-2xl m-8 flex flex-col items-center">
<input type="text" id="menu-search" placeholder="search the warmth u need" class=" w-full max-w-2xl border border-amber-200 p-6 text-black placeholder:text-black, items-center  rounded-full">

</div>
<!--- cards--->

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl justify-center">

<!---card1-->
<div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95  " data-name="coffee drink latte espresso hot cinnamon vanilla morning">
<h2 class="font-bold">Cinnamon Latte</h2>
<img src="public/cinnamon-latte.jpg" alt="Cinnamon Latte" class=" h-44 w-auto overflow-hidden border rounded-2xl m-1.5">
<p class="text-gray-600">Rich espresso paired with steamed milk, sweet vanilla syrup, and a heavy dash of ground cinnamon. (₹180)</p>
<h3> Price: 180</h3>
</div>

<div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95 " data-name="chocolate drink cocoa hot hazelnut sweet dessert kids">
<h2 class="font-bold">Hazelnut Hot Chocolate</h2>
<img src="public/hazel nut.jpeg" alt="Hazelnut Hot Chocolate" class=" h-44 w-auto overflow-hidden border rounded-2xl m-1.5">
<p class="text-gray-600">Velvety melted chocolate infused with slow-toasted hazelnut syrup and topped with fluffy marshmallows. (₹195)</p>
</div>

<div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="coffee drink macchiato hot caramel sweet caffeine">
<h2 class="font-bold">Caramel Macchiato</h2>
<img src="public/caremal .jpeg" alt="Caramel Macchiato" class=" h-44 w-auto overflow-hidden border rounded-2xl m-1.5">
<p class="text-gray-600">Freshly pulled espresso shots layered over creamy steamed milk and finished with a buttery caramel drizzle cascade. (₹190)</p>
</div>

<div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="tea drink chamomile herbal hot honey calm sleep soothing">
<h2 class="font-bold">Honey Chamomile Tea</h2>
<img src="public/lemonn tea.jpeg" alt="Honey Chamomile Tea" class=" h-44 w-auto overflow-hidden border rounded-2xl m-1.5">
<p class="text-gray-600">Soothing organic chamomile blossoms steeped to perfection and served with a golden drizzle of raw local honey. (₹150)</p>
</div>

<div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="tea drink chai masala hot spice vanilla milk traditional">
<h2 class="font-bold">Spiced Vanilla Chai</h2>
<img src="public/ice vinnnala.jpeg" alt="Spiced Vanilla Chai" class=" h-44 w-auto overflow-hidden border rounded-2xl m-1.5">
<p class="text-gray-600">A traditional blend of black tea leaves, aromatic crushed spices, and sweet vanilla beans simmered gently in hot milk. (₹160)</p>
</div>

<div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="food pastry bake croissant butter bread breakfast morning warm">
<h2 class="font-bold">Warm Butter Croissant</h2>
<img src="public/istockphoto-1256576728-612x612.jpg" alt="Warm Butter Croissant" class=" h-44 w-auto overflow-hidden border rounded-2xl m-1.5">
<p class="text-gray-600">A flaky, golden-brown puff pastry baked fresh daily and served warm with a side of homemade berry jam. (₹140)</p>
</div>

<div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="food pastry bake bun cinnamon sweet roll dessert cake bread">
<h2 class="font-bold">Cinnamon Swirl Bun</h2>
<img src="public/Cinnamon Swirl Bun.jpg" alt="Cinnamon Swirl Bun" class=" h-44 w-auto overflow-hidden border rounded-2xl m-1.5">
<p class="text-gray-600">Soft, pillowy dough rolled with brown sugar cinnamon paste, baked golden, and drizzled with warm cream cheese glaze. (₹165)</p>
</div>

<div class="menu-card bg-amber-100 flex flex-col py-6 px-4 rounded-2xl justify-between min-h-95" data-name="food pastry bake muffin cake almond nut sweet snack toast">
<h2 class="font-bold">Toasted Almond Muffin</h2>
<img src="public/Toasted Almond Muffin.jpeg" alt="Toasted Almond Muffin" class=" h-44 w-auto overflow-hidden border rounded-2xl m-1.5">
<p class="text-gray-600">A moist, classic vanilla muffin loaded with crunchy sliced almonds and a soft brown sugar crumble top. (₹130)</p>
</div>



</div>
   
   
  </main>
`;

  const searchInput = document.querySelector("#menu-search");
  const menuCards = document.querySelectorAll(".menu-card");

  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase().trim();

    menuCards.forEach((card) => {
      const productName = card.dataset.name.toLowerCase();

      if (productName.includes(searchText)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});
