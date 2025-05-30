// ドロワー表示
const drawerIcon = document.querySelector("#js-drawer-icon");
const drawerContent = document.querySelector("#js-drawer-content");

if (drawerIcon) {
  drawerIcon.addEventListener("click", function (e) {
    e.preventDefault();
    drawerIcon.classList.toggle("is-checked");
    drawerContent.classList.toggle("is-checked");
  });
}

// ドロワー非表示
document
  .querySelectorAll("#js-drawer-content a[href^='#']")
  .forEach(function (link) {
    link.addEventListener("click", function (e) {
      drawerIcon.classList.remove("is-checked");
      drawerContent.classList.remove("is-checked");
    });
  });
