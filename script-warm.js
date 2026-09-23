/* Shubhabrata Ganguly — warm theme interactions */
(function () {
  "use strict";

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  var burger = document.getElementById("burger");
  var links = document.querySelector(".nav__links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Project filters + linked descriptions
  var filters = document.getElementById("filters");
  var works = Array.prototype.slice.call(document.querySelectorAll(".work"));
  var descs = Array.prototype.slice.call(document.querySelectorAll(".works__desc article"));

  function showDescFor(filter) {
    descs.forEach(function (d) {
      var on = filter === "all" ? d.getAttribute("data-for") === "ml" : d.getAttribute("data-for") === filter;
      d.classList.toggle("show", on);
    });
  }

  if (filters) {
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      filters.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var f = btn.getAttribute("data-filter");
      works.forEach(function (w) {
        var match = f === "all" || w.getAttribute("data-cat") === f;
        w.classList.toggle("hide", !match);
      });
      showDescFor(f);
    });
    showDescFor("all");
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }
})();
