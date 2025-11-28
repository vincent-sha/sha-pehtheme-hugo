(() => {
  // <stdin>
  (function() {
    var STORAGE_KEY = "pehtheme-theme";
    var root = document.documentElement;
    var prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function readStoredTheme() {
      try {
        return localStorage.getItem(STORAGE_KEY);
      } catch (err) {
        return null;
      }
    }
    function writeStoredTheme(value) {
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch (err) {
      }
    }
    function updateButtons(mode) {
      var buttons = document.querySelectorAll("[data-theme-toggle]");
      buttons.forEach(function(button) {
        button.setAttribute("data-theme-state", mode);
        button.setAttribute("aria-pressed", mode === "dark");
        var label = button.querySelector("[data-theme-label]");
        if (label) {
          label.textContent = mode === "dark" ? "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F" : "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F";
        }
        var icon = button.querySelector("[data-theme-icon]");
        if (icon) {
          icon.textContent = mode === "dark" ? "\u2600\uFE0F" : "\u{1F319}";
        }
      });
    }
    function applyTheme(mode) {
      root.dataset.theme = mode;
      if (mode === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      updateButtons(mode);
    }
    function getPreferredTheme() {
      var stored = readStoredTheme();
      if (stored === "dark" || stored === "light") {
        return stored;
      }
      return prefersDarkQuery.matches ? "dark" : "light";
    }
    function handleSystemChange(event) {
      if (!readStoredTheme()) {
        applyTheme(event.matches ? "dark" : "light");
      }
    }
    function toggleTheme() {
      var next = root.classList.contains("dark") ? "light" : "dark";
      writeStoredTheme(next);
      applyTheme(next);
    }
    function init() {
      applyTheme(getPreferredTheme());
      if (prefersDarkQuery.addEventListener) {
        prefersDarkQuery.addEventListener("change", handleSystemChange);
      } else if (prefersDarkQuery.addListener) {
        prefersDarkQuery.addListener(handleSystemChange);
      }
      document.querySelectorAll("[data-theme-toggle]").forEach(function(button) {
        button.addEventListener("click", function() {
          toggleTheme();
        });
      });
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();
})();
