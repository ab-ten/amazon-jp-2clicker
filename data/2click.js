
if(unsafeWindow.self == unsafeWindow.top) {


var elm = document.getElementById('buyButton');
if (elm) {
    var orgtop = elm.style.top;
    var orgleft = elm.style.left;
    var orgposition = elm.style.position;
    var indicator = document.createElement("span");
    var opacity = 0;
    elm.parentElement.insertBefore(indicator, elm);

    indicator.innerHTML = "[appear 1click]";
    elm.setAttribute('disabled', 'disabled');
    elm.style.top = -999;
    elm.style.left = -999;
    elm.style.position = "fixed";

    var findtarget = function (e, t, lev) {
	while (e) {
	    //console.log("[" + lev + "] " + e.className + "#" + e.id + " " + e);
	    if (e.tagName == t) {
		return e;
	    }
	    if (e.firstChild) {
		var r = findtarget(e.firstChild, t, lev+1);
		if (r)
		    return r;
	    }
	    e = e.nextSibling;
	}
	return null;
    }
    var selelm = findtarget(elm.parentElement, "SELECT", 0);
    if (selelm && selelm.type=="select-one") {
	for (var i=0; selelm[i]; i++) {
	    if (selelm[i].text.substring(0,2) == "1.") {
		selelm.selectedIndex = i;
		break;
	    }
	}
    }

    indicator.onclick = function() {
	if (elm.getAttribute('disabled')=='disabled' && opacity<=0) {
	    elm.style.top = orgtop;
	    elm.style.left = orgleft;
	    elm.style.position = orgposition;
	    indicator.style.display = "none";
	    fadeanim();
	}
    }
    var fadeanim = function() {
	if (++opacity > 10) {
	    opacity = 10;
	}
	elm.style.opacity = opacity / 10;
	if (opacity >= 10) {
	    elm.removeAttribute('disabled');
	}else {
	    setTimeout(fadeanim, 70);
	}
    }
}else {
    if (document.getElementById('buyBoxContent') == null) {
	var notfound = document.createElement("div");
	notfound.id = "notfound1click";
	document.body.insertBefore(notfound, null);
	notfound.align = "center";
	var nftext = document.createElement("span");
	nftext.innerHTML = "1Click Button Not Found";
	notfound.appendChild(nftext);
	var st = notfound.style;
	st.position = "absolute";
	st.right = 0;
	st.top = 0;
	st.width = "100px";
	st.zIndex = 999;
	st.backgroundColor = "#ff8888";
	st.border = "5px solid gray";
	nftext.style.top = "40px";
	nftext.style.textAlign = "center";
	notfound.onclick = function() {
	    var fadeanim = function(opac) {
		if (opac <= 0) {
		    notfound.style.display = "none";
		}else {
		    notfound.style.opacity = opac / 10;
		    setTimeout(function(){fadeanim(opac-1)}, 70);
		}
	    }
	    fadeanim(10);
	}
    }
}


}
