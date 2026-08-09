document.addEventListener("DOMContentLoaded", () => {
  const tab_btns = document.querySelectorAll(".tab-btn");
  const tab_panels = document.querySelectorAll(".tab-panel");

  //   Add event listeners to all the buttons
  tab_btns.forEach((button) => {
    button.addEventListener("click", () => {
      const targetPanelID = button.dataset.tab;

      tab_btns.forEach((button) => button.classList.remove("active"));
      tab_panels.forEach((panel) => panel.classList.remove("active"));

      button.classList.add("active");

      const target_panel = document.getElementById(targetPanelID);
      if (target_panel) {
        target_panel.classList.add("active");
      }
    });
  });
});
