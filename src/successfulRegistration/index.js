function relocateTo(currentPath, targetPath = "") {
    //TODO: figure out how ot import modules
    let newLocation = window.location.href.replace('/' + currentPath + '/', '/' + targetPath + '/');
    newLocation = newLocation.split('?')[0];
    window.location.href = newLocation;
}