

document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("globalPopup");
  const closeBtn = popup.querySelector(".popup-close");

  // OPEN popup (ANY button anywhere)
  document.addEventListener("click", e => {
    const trigger = e.target.closest("[data-popup]");
    if (trigger) {
      e.preventDefault();
      popup.classList.add("active");
    }
  });

  // CLOSE popup
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  // CLOSE on outside click
  popup.addEventListener("click", e => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("globalPopup");

  // OPEN POPUP
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".open-enquiry");
    if (!trigger) return;

    e.preventDefault(); // only stops link navigation
    popup.classList.add("active");
    document.body.classList.add("popup-open");
  });

  // CLOSE POPUP
  popup.querySelector(".popup-close").addEventListener("click", () => {
    popup.classList.remove("active");
    document.body.classList.remove("popup-open");
  });

  // CLOSE ON OVERLAY CLICK
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
      document.body.classList.remove("popup-open");
    }
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  const body = document.body;

  /* ================= TOGGLE MENU ================= */
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  /* ================= CLOSE ON LINK CLICK ================= */
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  /* ================= DROPDOWNS (MOBILE) ================= */
  document.querySelectorAll(".dropdown-toggle").forEach(btn => {
    btn.addEventListener("click", e => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        btn.closest(".dropdown").classList.toggle("open");
      }
    });
  });

  document.querySelectorAll(".service-toggle").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        link.closest(".service-item").classList.toggle("open");
      }
    });
  });

  /* ================= RESET ON RESIZE ================= */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      closeMenu();
    }
  });

  /* ================= CLOSE FUNCTION ================= */
  function closeMenu() {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("menu-open");

    document
      .querySelectorAll(".dropdown.open, .service-item.open")
      .forEach(el => el.classList.remove("open"));
  }

});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/* MAIN MENU */
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

/* TOP LEVEL DROPDOWNS */
document.querySelectorAll(".dropdown-toggle").forEach(btn => {
  btn.addEventListener("click", e => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      btn.parentElement.classList.toggle("open");
    }
  });
});

/* MEGA SUB MENU */
document.querySelectorAll(".service-toggle").forEach(btn => {
  btn.addEventListener("click", e => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      btn.parentElement.classList.toggle("open");
    }
  });
});

/* CLOSE MENU ON LINK CLICK */
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 991) {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});
mobileMenu.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});
mobileMenu.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});
