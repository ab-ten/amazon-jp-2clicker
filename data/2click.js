
var elm = document.getElementById('buyButton');
if (elm) {
    elm.disabled = true;
    var indicator = document.createElement("div");
    indicator.innerHTML = "off";
    elm.parentElement.insertBefore(indicator, elm.nextSibling);
    indicator.onclick = function() {
	if (elm.disabled) {
	    indicator.innerHTML = "on";
	    elm.disabled = false;
	}else {
	    indicator.innerHTML = "off";
	    elm.disabled = true;
	}
    }
}else {
    alert('buyButton not found.');
}
