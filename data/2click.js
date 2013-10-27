
var elm = document.getElementById('buyButton');
if (elm) {
    elm.setAttribute('disabled', 'disabled');
    var indicator = document.createElement("div");
    indicator.innerHTML = "off";
    elm.parentElement.insertBefore(indicator, elm.nextSibling);
    indicator.onclick = function() {
	if (elm.getAttribute('disabled') == 'disabled') {
	    indicator.innerHTML = "on";
	    //elm.disabled = false;
	    elm.removeAttribute('disabled');
	}else {
	    indicator.innerHTML = "off";
	    //elm.disabled = true;
	    elm.setAttribute('disabled', 'disabled');
	}
    }
}else {
    //alert('buyButton not found.');
}
