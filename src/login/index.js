function onLogin() {
	let loginForm = document.getElementById("login-form");

	// Get information from the form
	let email = loginForm.elements["email"].value;
	let password = loginForm.elements["password"].value;

	// Validation
	if (email == "") {
		alert("Please, provide your email!");
		return false;
	}
	if (password == "") {
		alert("Please, provide your password!");
		return false;
	}

	for (const key in localStorage) {
		if (localStorage.hasOwnProperty(key)) {
			let element = localStorage.getItem(key);
			element = JSON.parse(element);
			if (element.email === email) {
				if (element.password === password) {
					element.isAuth = true;
					element = JSON.stringify(element);
					localStorage.setItem(key, element);
					let newLocation = window.location.href.replace('/login/', '/');
					newLocation = newLocation.split('?')[0]
					window.location.href = newLocation;
					return false;
				} else {
					break;
				}
			}
		}
	}

	alert("Login or password is incorrect!");
	return false;
}