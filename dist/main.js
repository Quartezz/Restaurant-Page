(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}function t(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("img");a.src=`../Images/${e.toLowerCase()}.svg`,a.alt=`${e}`;const d=document.createElement("h2");d.textContent=e;const c=document.createElement("p");return c.textContent=t,n.appendChild(a),n.appendChild(d),n.appendChild(c),n}(function(){const t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");return t.classList.add("title"),t.textContent="Stateside Eats & Vibes",e.appendChild(t),e}()),t.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),t.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.textContent=`Copyright © ${(new Date).getFullYear()} kamilmachel`;const n=document.createElement("a");n.href="https://github.com/Quartezz";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}()),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("center");const n=document.createElement("img");return n.src="../Images/chef4.jpg",n.alt="Chef",t.appendChild(e("Since 1952: Savoring the Flavors of America")),t.appendChild(n),t.appendChild(e("Just visit us or order online!")),t}())}()})(),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(t("BigMac","The Big Mac: Iconic double-decker burger from McDonald's.")),e.appendChild(t("EggBurger","Egg Burger: Tasty patty with a fried egg.")),e.appendChild(t("FishBurger","Fish Burger: Fish patty delight.")),e.appendChild(t("OnionBurger","Onion Burger: Tangy onion twist.")),e.appendChild(t("RealBurger","Real Burger: Genuine satisfaction.")),e.appendChild(t("TomatoBurger","Tomato Burger: Burger with fresh tomato.")),e}())}()})();