function checkCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        console.log(match[2]);
        return true;
    }
    else{
        console.log('Cookie not found');
        return false;
    }
}

function removeCookie(name)
{
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        document.cookie = name + "=" +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    } else{
        console.log('Cookie already removed.');
    }
}

function getUserNameCookie (name){
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            return match[2];
        }

}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}




export {removeCookie, checkCookie, getUserNameCookie, setCookie}