// Toggle Button
const toggleBtn = document.querySelector(".nav_toggle_btn");

// NavMenu
const navMenu = document.querySelector(".nav__menu");

// Check if "toggleBtn" exits
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    document.body.classList.toggle("stop_scroll");
  });
}
// Select All NavLink
const nav_link = document.querySelectorAll(".nav__link");

// function to remove active class.
function RemoveActive() {
  // Find the Active Link (remove) the active class
  nav_link.forEach((link) => link.classList.remove("active"));

  // Add the Active Class
  this.classList.add("active");

  // Close the Nav-Menu on Mobile after click on the link
  navMenu.classList.remove("show");
}

// EventListener on each NavLink
nav_link.forEach((link) => link.addEventListener("click", RemoveActive));

// ==== Animate on Scroll Initialize  ==== //
AOS.init();
// GSAP Animations

// LOGO & TOGGLE-BTN
gsap.from(".logo, .nav_toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});
// ==== NAV-MENU ==== //
gsap.from(".nav__menu_list .nav_menu_list_item", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
  stagger: 0.3,
});

// ==== BADGE ==== //
gsap.from(".badge", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1.2,
});
// ==== MAIN HEADING  ==== //
gsap.from(".hero__heading", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1,
});
// ==== INFO TEXT ==== //
gsap.from(".hero_subtext", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== HERO CTA BUTTONS ==== //
gsap.from(".hero__cta_btn", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1.2,
});
// ==== STUDENT IMAGES ==== //
gsap.from(".students_imgs img", {
  opacity: 0,
  x: -20,
  delay: 2.8,
  duration: 0.5,
  stagger: 0.3,
});
// ==== STUDENT JOINED TEXT ==== //
gsap.from(".students_joined_text", {
  opacity: 0,
  x: -20,
  delay: 4.7,
  duration: 0.7,
});
// ==== DIRECTION-ARROW ==== //
gsap.from(".direction_arrow", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});
// ==== POLYGON ELEMENT ==== //
gsap.from(".polygon_element", {
  opacity: 0,
  delay:3,
  duration: 1,
});
// ==== HERO IMAGE ==== //
gsap.from(".hero__img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3.5,
  duration: 1,
});
// ==== FADE-BACKGROUND ==== //
gsap.from(".fade__bg", {
  opacity: 0,
  delay: 3.9,
  duration: 1,
});