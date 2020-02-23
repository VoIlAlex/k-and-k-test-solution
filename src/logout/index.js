function onLoad() {
	for (const key in localStorage) {
		if (localStorage.hasOwnProperty(key)) {
			let element = localStorage.getItem(key);
			element = JSON.parse(element);
			if (element.isAuth === true) {
				element.isAuth = false;
				element = JSON.stringify(element)
				localStorage.setItem(key, element)
				break;
			}
		}
	}
	let newLocation = window.location.href.replace('/logout/', '/');
	newLocation = newLocation.split('?')[0]
	window.location.href = newLocation;
}