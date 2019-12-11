export const isElementVisible = (elem, horizontal) => {
    if (!elem) {
        return false;
    }
    let coords = elem.getBoundingClientRect();

    if(horizontal) {

        let windowWidth = document.documentElement.clientWidth;

        // left elem edge is visible?
        let leftVisible = coords.left > 0 && coords.left < windowWidth;

        // right elem edge is visible?
        let rightVisible = coords.right < windowWidth && coords.right > 0;

        return leftVisible || rightVisible;

        return;
    }



    let windowHeight = document.documentElement.clientHeight;

    // top elem edge is visible?
    let topVisible = coords.top > 0 && coords.top < windowHeight;

    // bottom elem edge is visible?
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
};