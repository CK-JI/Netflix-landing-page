const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  // Remove all the border and then add border.
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  // Grab content from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
  console.log(tabContentItem);
}

function removeBorder(item) {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow(item) {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

tabItems.forEach(item => item.addEventListener("click", selectItem));
