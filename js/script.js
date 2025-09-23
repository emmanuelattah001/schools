// Load header.html dynamically
fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("nav").innerHTML = data;

    // Menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const circularMenu = document.getElementById("circular-menu");

    if (menuToggle && circularMenu) {
      menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        circularMenu.classList.toggle("show");
      });
    }

    //close circular menu automatically when resize
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        circularMenu.classList.remove("show");
        menuToggle.classList.remove("active");
      }
    });

    // Highlight active link
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll("nav ul li a, .circular-menu a");

    links.forEach((link) => {
      const linkPage = link.getAttribute("href");
      if (
        linkPage === currentPage ||
        (linkPage === "index.html" && currentPage === "")
      ) {
        link.classList.add("active");
      }

      // Close circle menu when clicking a link
      link.addEventListener("click", () => {
        circularMenu.classList.remove("show");
        menuToggle.classList.remove("active");
      });
    });
  });

// -------- FETCH FOOTER --------
const footerEl = document.getElementById("footer");
if (footerEl) {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => (footerEl.innerHTML = data));
}

// -------- SLIDER FUNCTION --------
function initSlider() {
  let index = 0;
  const slides = document.getElementById("slides");
  const slideItems = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (!slides || slideItems.length === 0) return;

  function showSlide(i) {
    index = i;
    slides.style.transform = `translateX(${-index * 100}%)`;

    slideItems.forEach((slide, idx) => {
      slide.classList.remove("active");
      dots[idx].classList.remove("active");
    });

    slideItems[i].classList.add("active");
    dots[i].classList.add("active");
  }

  function autoSlide() {
    index = (index + 1) % slideItems.length;
    showSlide(index);
  }

  // Dots clickable
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });

  // Start slider
  showSlide(index);
  setInterval(autoSlide, 5000);
}

// Run slider after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  initSlider();
});

fetch("json/news.json")
  .then((response) => response.json())
  .then((data) => {
    const newsContainer = document.getElementById("news-container");
    const eventsContainer = document.getElementById("events-container");

    // News
    data.news.forEach((item) => {
      const div = document.createElement("div");
      div.className = "news-card";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}">Read More</a>
      `;
      newsContainer.appendChild(div);
    });

    // Events
    data.events.forEach((event) => {
      const div = document.createElement("div");
      div.className = "event-card";
      div.innerHTML = `
        <img src="${event.image}" alt="${event.title}">
        <div class="event-info">
          <span class="date">${event.date}</span>
          <h3>${event.title}</h3>
          <p>${event.description}</p>
        </div>
      `;
      eventsContainer.appendChild(div);
    });
  });

//for admission drop down
const accordions = document.querySelectorAll(".accordion-header");
accordions.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const open = content.style.maxHeight;
    document.querySelectorAll(".accordion-content").forEach((c) => {
      c.style.maxHeight = null;
      c.classList.remove("open");
      c.previousElementSibling.querySelector("span").textContent = "+";
    });
    if (!open) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
      header.querySelector("span").textContent = "−";
    }
  });
});
