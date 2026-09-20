/* Shubhabrata Ganguly — portfolio interactions */
(function () {
  "use strict";

  // Year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Sticky nav shadow
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var burger = document.getElementById("burger");
  var links = document.querySelector(".nav__links");
  function closeMenu() {
    burger.classList.remove("open");
    links.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll(
    ".reveal, .section__head, .svc, .tl, .proj, .skillset, .about__grid, .contact__card"
  );
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // Count-up stats
  var counted = false;
  function runCounters() {
    if (counted) return;
    var stats = document.querySelectorAll(".stat b[data-count]");
    if (!stats.length) return;
    var hero = document.querySelector(".hero__stats");
    var rect = hero.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;
    counted = true;
    stats.forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var start = 0, dur = 1100, t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        el.textContent = Math.floor(start + (target - start) * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    });
  }
  window.addEventListener("scroll", runCounters, { passive: true });
  window.addEventListener("load", runCounters);
  runCounters();
})();
