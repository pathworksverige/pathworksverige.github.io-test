
const cookieManager = () => {

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
    }
    
    function getCookie(name) {
        const decoded = decodeURIComponent(document.cookie);
        const cookies = decoded.split(';');
        name = name + "=";
        for (let c of cookies) {
            c = c.trim();
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    
    function eraseCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

        return {
        setCookie,
        getCookie,
        eraseCookie
    };
}

export default cookieManager;