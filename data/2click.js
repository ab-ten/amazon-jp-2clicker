
if(unsafeWindow.self == unsafeWindow.top) {


var elm = document.getElementById('buyButton');
if (elm) {
    var orgtop = elm.style.top;
    var orgleft = elm.style.left;
    var orgposition = elm.style.position;
    var indicator = document.createElement("span");
    elm.parentElement.insertBefore(indicator, elm);
    var disableclick = function() {
	indicator.innerHTML = "[appear 1click]";
	elm.setAttribute('disabled', 'disabled');
	elm.style.top = -999;
	elm.style.left = -999;
	elm.style.position = "fixed";
    }
    var enableclick = function() {
	indicator.innerHTML = "on";
	indicator.style.display = "none";
	elm.removeAttribute('disabled');
	elm.style.top = orgtop;
	elm.style.left = orgleft;
	elm.style.position = orgposition;
    }
    disableclick();
    indicator.onclick = function() {
	if (elm.getAttribute('disabled') == 'disabled') {
	    enableclick();
	}else {
	    disableclick();
	}
    }
}else {
    if (document.getElementById('buyBoxContent') == null) {
	var notfound = document.createElement("div");
	notfound.id = "notfound1click";
	document.body.insertBefore(notfound, null);
	var nftext = document.createElement("span");
	nftext.innerHTML = "1Click Button Not Found";
	notfound.appendChild(nftext);
	var st = notfound.style;
	st.position = "absolute";
	st.right = 0;
	st.top = 0;
	st.width = "100px";
	//st.height = "100px";
	st.zIndex = 999;
	st.backgroundColor = "#ff8888";
	st.outline = "thick solid black";
	nftext.style.top = "40px";
	nftext.style.textAlign = "center";
	notfound.onclick = function() {
	    notfound.style.display = "none";
	}
    }
}


}
