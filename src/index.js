function onLoad() {
	let authBadgeContainer = document.getElementById("auth-badge");

	// Find an authenticated user
	let authenticatedUser = null;
	for (const key in localStorage) {
		if (localStorage.hasOwnProperty(key)) {
			let element = localStorage.getItem(key);
			element = JSON.parse(element);
			if (element.isAuth === true) {
				authenticatedUser = element;
				break;
			}
		}
	}
	if (authenticatedUser !== null) {
		authBadgeContainer.innerHTML = authenticatedUser.email;
		document.getElementById('popup-menu-item-logout').style.display = "inline-block";
	}
}