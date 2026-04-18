const whatsappUrl = "https://wa.me/919022633284";

const productSections = {
  suits: [
    {
      name: "Ivory Zari",
      subtitle: "Refined three-piece ensemble with soft festive detailing.",
      categoryLabel: "Suit Set",
      images: ["Data/3 piece suits/Dress 1.jpeg"]
    },
    {
      name: "Rose Sand",
      subtitle: "Pastel-led wholesale suit set with fluid dupatta styling.",
      categoryLabel: "Suit Set",
      images: ["Data/3 piece suits/Dress 2.jpeg"]
    },
    {
      name: "Sage Bloom",
      subtitle: "Balanced print placement for elegant day-to-evening retail.",
      categoryLabel: "Suit Set",
      images: ["Data/3 piece suits/Dress 3.jpeg"]
    },
    {
      name: "Heritage Panel",
      subtitle: "Classic silhouette with elevated front-panel craftsmanship.",
      categoryLabel: "Suit Set",
      images: ["Data/3 piece suits/Dress 5.jpeg"]
    },
    {
      name: "Dusty Pink",
      subtitle: "A polished ethnic set designed for premium display counters.",
      categoryLabel: "Suit Set",
      images: ["Data/3 piece suits/Dress 6.jpeg"]
    },
    {
      name: "Amber Threadwork",
      subtitle: "Warm-toned styling with rich handcrafted appeal.",
      categoryLabel: "Suit Set",
      images: ["Data/3 piece suits/Dress 7.jpeg"]
    },
    {
      name: "Noor Festive",
      subtitle: "Graceful drape, statement print, and versatile sell-through.",
      categoryLabel: "Suit Set",
      images: ["Data/3 piece suits/Dress 8.jpeg"]
    },
    {
      name: "Meher Luxe",
      subtitle: "Sharp lines softened with feminine color and texture.",
      categoryLabel: "Suit Set",
      images: ["Data/3 piece suits/Dress 9.jpeg"]
    },
    {
      name: "Pearl Vine",
      subtitle: "Elegant festive layering for a premium ethnic assortment.",
      categoryLabel: "Suit Set",
      images: ["Data/3 piece suits/Dress 10.jpeg"]
    },
    {
      name: "Gulzar Artisan",
      subtitle: "Multi-variant bestseller with fresh color and motif options.",
      categoryLabel: "Suit Set",
      images: [
        "Data/3 piece suits/Dress 11.jpeg",
        "Data/3 piece suits/Dress 11.1.jpeg",
        "Data/3 piece suits/Dress 11.2.jpeg",
        "Data/3 piece suits/Dress 11.3.jpeg",
        "Data/3 piece suits/Dress 11.4.jpeg",
        "Data/3 piece suits/Dress 11.5.jpeg"
      ]
    },
    {
      name: "Ruhani Premium",
      subtitle: "Statement-ready ethnic set curated for standout merchandising.",
      categoryLabel: "Suit Set",
      images: [
        "Data/3 piece suits/Dress 12.jpeg",
        "Data/3 piece suits/Dress 12.1.jpeg",
        "Data/3 piece suits/Dress 12.2.jpeg",
        "Data/3 piece suits/Dress 12.3.jpeg",
        "Data/3 piece suits/Dress 12.4.jpeg"
      ]
    }
  ],
  coords: [
    {
      name: "Sage Street",
      subtitle: "Modern ethnic co-ord with a clean, retail-friendly finish.",
      categoryLabel: "Co-ord Set",
      images: ["Data/Co-ords/Co-ord 1.jpeg"]
    },
    {
      name: "Blush Form",
      subtitle: "Soft structure and easy styling for contemporary buyers.",
      categoryLabel: "Co-ord Set",
      images: ["Data/Co-ords/Co-ord 2.jpeg"]
    },
    {
      name: "Ivory Motion",
      subtitle: "Effortless pairing with elevated cuts and premium movement.",
      categoryLabel: "Co-ord Set",
      images: ["Data/Co-ords/Co-ord 3.jpeg"]
    },
    {
      name: "Urban Mehfil",
      subtitle: "A sharper co-ord silhouette for modern festive edits.",
      categoryLabel: "Co-ord Set",
      images: ["Data/Co-ords/Co-ord 4.jpeg"]
    },
    {
      name: "Pastel Frame",
      subtitle: "Balanced tones made for boutique and showroom displays.",
      categoryLabel: "Co-ord Set",
      images: ["Data/Co-ords/Co-ord 5.jpeg"]
    },
    {
      name: "Mysa Daywear",
      subtitle: "Minimal yet premium styling with easy repeat-order appeal.",
      categoryLabel: "Co-ord Set",
      images: ["Data/Co-ords/Co-ord 6.jpeg"]
    },
    {
      name: "Nazaakat Lounge",
      subtitle: "Relaxed sophistication with polished ethnic detailing.",
      categoryLabel: "Co-ord Set",
      images: ["Data/Co-ords/Co-ord 7.jpeg"]
    },
    {
      name: "Aura Retail",
      subtitle: "Statement-ready co-ord designed for quick customer pickup.",
      categoryLabel: "Co-ord Set",
      images: ["Data/Co-ords/Co-ord 8.jpeg"]
    }
  ],
  kurtis: [
    {
      name: "Noor Daily",
      subtitle: "Clean everyday ethnic styling with premium finishing.",
      categoryLabel: "Kurti",
      images: ["Data/Short kurti's/kurti 1.jpeg"]
    },
    {
      name: "Rosette Short",
      subtitle: "Soft feminine tone made for easy boutique merchandising.",
      categoryLabel: "Kurti",
      images: ["Data/Short kurti's/kurti 2.jpeg"]
    },
    {
      name: "Sufi Print",
      subtitle: "A versatile silhouette with subtle handcrafted character.",
      categoryLabel: "Kurti",
      images: ["Data/Short kurti's/kurti 3.jpeg"]
    },
    {
      name: "Meadow Tone",
      subtitle: "Muted color story with broad daywear appeal.",
      categoryLabel: "Kurti",
      images: ["Data/Short kurti's/kurti 4.jpeg"]
    },
    {
      name: "Aabha Boutique",
      subtitle: "Lightweight premium styling for easy repeat movement.",
      categoryLabel: "Kurti",
      images: ["Data/Short kurti's/kurti 5.jpeg"]
    },
    {
      name: "Sitara Everyday",
      subtitle: "Retail-friendly kurti with balanced print placement.",
      categoryLabel: "Kurti",
      images: ["Data/Short kurti's/kurti 6.jpeg"]
    },
    {
      name: "Ziva Softline",
      subtitle: "Contemporary short kurti with a polished seasonal palette.",
      categoryLabel: "Kurti",
      images: ["Data/Short kurti's/kurti 8.jpeg"]
    },
    {
      name: "Tara Casual",
      subtitle: "An easy-sell kurti with richer visual texture.",
      categoryLabel: "Kurti",
      images: ["Data/Short kurti's/kurti 9.jpeg"]
    },
    {
      name: "Mira Studio",
      subtitle: "Neat, modern ethnic styling for quick wardrobe updates.",
      categoryLabel: "Kurti",
      images: ["Data/Short kurti's/kurti 10.jpeg"]
    },
    {
      name: "Rang Short",
      subtitle: "Multi-view kurti with fresh color variance for display appeal.",
      categoryLabel: "Kurti",
      images: [
        "Data/Short kurti's/kurti 11.jpeg",
        "Data/Short kurti's/kurti 11.1.jpeg"
      ]
    },
    {
      name: "Gul Bloom",
      subtitle: "A bestselling short kurti with alternate style views.",
      categoryLabel: "Kurti",
      images: [
        "Data/Short kurti's/kurti 12.jpeg",
        "Data/Short kurti's/kurti 12.1.jpeg"
      ]
    }
  ]
};

const featuredProducts = [
  { section: "suits", index: 9 },
  { section: "suits", index: 10 },
  { section: "suits", index: 7 },
  { section: "coords", index: 0 },
  { section: "coords", index: 2 },
  { section: "coords", index: 7 },
  { section: "kurtis", index: 0 },
  { section: "kurtis", index: 3 },
  { section: "kurtis", index: 9 },
  { section: "kurtis", index: 10 }
].map(({ section, index }) => ({
  ...productSections[section][index],
  section
}));

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function createThumb(imagePath, productId, isActive) {
  const button = document.createElement("button");
  button.className = `thumb${isActive ? " is-active" : ""}`;
  button.type = "button";
  button.dataset.target = productId;
  button.dataset.image = imagePath;
  button.setAttribute("aria-label", "View alternate product image");

  const img = document.createElement("img");
  img.src = imagePath;
  img.alt = "Product variant thumbnail";

  button.appendChild(img);
  return button;
}

function createCard(product) {
  const productId = slugify(product.name);
  const card = document.createElement("article");
  card.className = "product-card";
  if (product.section) {
    card.dataset.section = product.section;
  }

  const media = document.createElement("div");
  media.className = "product-media";

  const mainImage = document.createElement("img");
  mainImage.src = product.images[0];
  mainImage.alt = `${product.name} by Ria Fashion`;
  mainImage.id = productId;
  media.appendChild(mainImage);

  const body = document.createElement("div");
  body.className = "product-body";

  const headline = document.createElement("div");
  headline.className = "product-topline";

  const title = document.createElement("h3");
  title.className = "product-name";
  title.textContent = product.name;

  const size = document.createElement("span");
  size.className = "size-pill";
  size.textContent = "S - 4XL";

  headline.append(title, size);

  const meta = document.createElement("p");
  meta.className = "product-meta";
  meta.textContent = product.subtitle || "Premium wholesale ethnic wear with curated color and print options.";

  const category = document.createElement("p");
  category.className = "product-category";
  category.textContent = product.categoryLabel || "Ethnic Wear";

  const thumbs = document.createElement("div");
  thumbs.className = "thumb-strip";
  if (product.images.length === 1) {
    thumbs.hidden = true;
  }

  product.images.forEach((imagePath, index) => {
    thumbs.appendChild(createThumb(imagePath, productId, index === 0));
  });

  const button = document.createElement("a");
  button.className = "button whatsapp-button";
  button.href = whatsappUrl;
  button.target = "_blank";
  button.rel = "noreferrer";
  button.textContent = "WhatsApp Order";

  body.append(headline, category, meta, thumbs, button);
  card.append(media, body);

  return card;
}

function renderProducts() {
  const maps = [
    { key: "featured", target: "featured-grid" },
    { key: "suits", target: "suits-grid" },
    { key: "coords", target: "coords-grid" },
    { key: "kurtis", target: "kurtis-grid" }
  ];

  maps.forEach(({ key, target }) => {
    const root = document.getElementById(target);
    if (!root) {
      return;
    }

    const source = key === "featured" ? featuredProducts : productSections[key];

    source.forEach((product) => {
      root.appendChild(createCard(product));
    });
  });
}

function applyFeaturedFilter(filter) {
  const cards = document.querySelectorAll("#featured-grid .product-card");
  const tabs = document.querySelectorAll(".filter-tab");

  cards.forEach((card) => {
    const shouldShow = filter === "all" || card.dataset.section === filter;
    card.hidden = !shouldShow;
  });

  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.filter === filter);
  });
}

function setupFilters() {
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      applyFeaturedFilter(tab.dataset.filter);
    });
  });

  document.querySelectorAll("[data-filter-link]").forEach((link) => {
    link.addEventListener("click", () => {
      const filter = link.dataset.filterLink;
      requestAnimationFrame(() => applyFeaturedFilter(filter));
    });
  });
}

function setupProductSwitcher() {
  document.addEventListener("click", (event) => {
    const thumb = event.target.closest(".thumb");
    if (!thumb) {
      return;
    }

    const target = document.getElementById(thumb.dataset.target);
    if (!target) {
      return;
    }

    target.src = thumb.dataset.image;

    const strip = thumb.parentElement;
    strip.querySelectorAll(".thumb").forEach((button) => {
      button.classList.remove("is-active");
    });
    thumb.classList.add("is-active");
  });
}

function setupFadeInSections() {
  const elements = document.querySelectorAll(".section-fade");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-panel");
  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownButton = document.querySelector(".dropdown-trigger");

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const isOpen = navPanel.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (dropdown && dropdownButton) {
    dropdownButton.addEventListener("click", () => {
      if (window.innerWidth > 760) {
        return;
      }

      const isOpen = dropdown.classList.toggle("is-open");
      dropdownButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll(".nav-panel a").forEach((link) => {
    link.addEventListener("click", () => {
      navPanel?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
      dropdown?.classList.remove("is-open");
      dropdownButton?.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      navPanel?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
      dropdown?.classList.remove("is-open");
      dropdownButton?.setAttribute("aria-expanded", "false");
    }
  });
}

renderProducts();
setupProductSwitcher();
setupFadeInSections();
setupNavigation();
setupFilters();
applyFeaturedFilter("all");
