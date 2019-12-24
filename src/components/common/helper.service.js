const jwtDecode = require('jwt-decode');

export const isElementVisible = (elem, horizontal) => {
    if (!elem) {
        return false;
    }
    let coords = elem.getBoundingClientRect();

    if (horizontal) {

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
export const scrollToTop = () => {

    window.scrollTo({ behavior: 'smooth', top: 0 })

};
export const onlyAuth = (props) => {

    if (!props.auth.loggedIn) {
        props.history.push('/');
    }

};
export const notAuth = (props) => {

    if (props.auth.loggedIn) {
        props.history.push('/auth/dashboard');
    }

};
export const isjwtValid = () => {
    const auth = {

        loggedIn: false,
        token: null,
        decoded: {}

    }

    const token = localStorage.getItem("__token__") || ''
    try {
        const decoded = jwtDecode(token);

        if (decoded) {
            auth.loggedIn = true;
            auth.token = token;
            auth.decoded = decoded

        }

        return auth

    } catch (error) {
        return auth;

    }



};
export const logoutUser = () => {

    localStorage.setItem("__token__", '');
    return true

};



let setTimeoutAlerterGlobal = null
let isAlerterActiveGlobal = false

export const alerter = (msg,type_,  icon_, timer) => {
    let lTimer = 4000;
    let type = 'success'
    let icon = 'fa-check'
    if (timer) {
        lTimer = timer;
    }
    if (type_) {
        type = type_

    }
    if (icon_) {
        icon = icon_

    }
    const alerterDiv = document.getElementById('alerter');
    if (!alerterDiv) {
        return;
    }
    if (!isAlerterActiveGlobal) {
        alerterDiv.innerHTML = `
                        <div class="alert alert-${type} animated fadeInDown squared">
                        <i class="fa ${icon} mr-2"></i>
                                ${msg === '' ? "<i class='fa fa-check-circle'>  </i>" : msg}
                        </div>
                        `;
        alerterDiv.style.display = 'inline-block';
        isAlerterActiveGlobal = true;

        setTimeoutAlerterGlobal = setTimeout(() => {
            isAlerterActiveGlobal = false;
            alerterDiv.style.display = 'none';
        }, lTimer)
    } else {
        isAlerterActiveGlobal = false;
        clearTimeout(setTimeoutAlerterGlobal)
        alerter(type, msg);

    }


}
