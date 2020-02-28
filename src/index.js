const TITLE_FULL = "TAPOC (technologically approved picture of code)";
const TITLE_SHORT = "TAPOC";

function defaultOnLoad() {
  loadUserBadge();
  adjustTitle();
}

function mainPageOnLoad() {
  defaultOnLoad();
  addAuthenticatedButtons();
}

function getAuthenticatedUser() {
  for (const key in localStorage) {
    element = localStorage.getItem(key);
    element = JSON.parse(element);
    try {
      if (element.isAuth === true) {
        return element;
      }
    } catch (e) {
      continue;
    }
  }
  return null;
}

function loadUserBadge() {
  let authBadgeContainer = document.getElementById("header-user-badge");
  let authenticatedUser = getAuthenticatedUser();
  if (authenticatedUser !== null) {
    authBadgeContainer.innerHTML = authenticatedUser.email[0];
    authBadgeContainer.style.display = "block";
    authBadgeContainer.title = authenticatedUser.email;
  }
}

function addAuthenticatedButtons() {
  const user = getAuthenticatedUser();
  if (user !== null) {
    let logoutButton = document.getElementById("popup-menu-item-logout");
    if (logoutButton !== null) logoutButton.style.display = "inline-block";
  }
}

function adjustTitle() {
  const title = document.getElementById("header-site-name");
  const titleText = title.innerHTML;
  const fullTitleSize = 780;
  const additionalSize = 200;
  if (
    window.innerWidth < fullTitleSize + additionalSize &&
    titleText != TITLE_SHORT
  ) {
    title.innerHTML = TITLE_SHORT;
  } else if (
    window.innerWidth > fullTitleSize + additionalSize &&
    titleText != TITLE_FULL
  ) {
    title.innerHTML = TITLE_FULL;
  }
}

function relocateTo(currentPath, targetPath = "") {
  //TODO: figure out how ot import modules
  let newLocation = window.location.href.replace(
    "/" + currentPath + "/",
    "/" + targetPath + "/"
  );
  newLocation = newLocation.split("?")[0];
  window.location.href = newLocation;
}
