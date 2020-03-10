function getViewportWidth() {
    return window.innerWidth ||
    document.documentElement.clientWidth;
}

console.log(`Die Viewbreite betragt ${getViewportWidth()} pixel.`);