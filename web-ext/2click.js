// -*- coding:utf-8-unix; js-indent-level:2; -*-

function hightest_zIndex(elm) {
  var z = 0;
  try {
    var st = window.getComputedStyle(elm, null);
    var zn = parseInt(st.zIndex);
    if (! isNaN(zn))
      z = zn;
  }catch (e) {
    //console.log("exception: " + e);
    return 0;
  }
  var cns = elm.childNodes;
  var cns_len = cns.length;
  for (var i=0; i<cns_len; i++) {
    var z2 = hightest_zIndex(cns[i]);
    //console.warn("z="+z + " z2="+z2);
    if (z < z2)
      z = z2;
  }
  //console.warn(elm + " : " + z);
  return z;
}

function findtarget(e, func, lev) {
  while (e) {
    //console.log("[" + lev + "] " + e.className + "#" + e.id + " " + e);
    if (func(e))
      return e;
    if (e.firstChild) {
      var r = findtarget(e.firstChild, func, lev+1);
      if (r)
	return r;
    }
    e = e.nextSibling;
  }
  return null;
}

function find_ascendant(e, func) {
  while (e) {
    if (func(e))
      return e;
    e = e.parentElement;
  }
  return null;
}

function fadeanim(elm, indicator, opacity) {
  opacity -= 0.1;
  if (opacity < 0)
    opacity = 0;
  indicator.style.opacity = opacity;
  if (opacity <= 0) {
    elm.disabled = false;
    //elm.style.cursor = self.port.emit('get_storage', 'orig_elm_cursor');
    indicator.style.display = "none";
  }else {
    setTimeout(fadeanim, 70, elm, indicator, opacity);
  }
}

function disable_1click() {
  var elm = document.getElementById('one-click-button');
  if (elm == null)
    return false;
  if (elm.tagName != "INPUT")
    return false;
  if (elm.type.toUpperCase() != "SUBMIT")
    return false;

  set_appear_1click(elm);
  return true;
}

function disable_preorder() {
  var elm_start = document.getElementById('oneClick-preorder-button');
  if (elm_start == null)
    return false;

  var elm = null;
  if (elm_start.tagName == "INPUT") {
    elm = elm_start;
  }else {
    var inputs = elm_start.getElementsByTagName("INPUT");
    if (inputs.length == 1)
      elm = inputs[0];
  }
  if (elm == null)
    return false;

  set_appear_1click(elm);
  return true;
}

function set_appear_1click(elm, text="[appear 1click]", id="appear1click") {
  var style = window.getComputedStyle(elm, null);
  //self.port.emit('put_storage', 'orig_elm_cursor', elm.style.cursor);
  //elm.style.cursor = "not-allowed";
  elm.disabled = true;

  var indicator = document.createElement("div");
  indicator.id = id;
  indicator.innerHTML = text;
  indicator.style.top = style.top;
  indicator.style.left = style.left;
  indicator.style.width = style.width;
  indicator.style.height = style.height;
  indicator.style.position = style.position;
  indicator.style.backgroundColor = "white";
  elm.parentElement.insertBefore(indicator, elm);
  indicator.style.zIndex = hightest_zIndex(elm.parentElement) + 1;

  indicator.onclick = function() {
    if (elm.disabled) {
      indicator.onclick = function() {};
      fadeanim(elm, indicator, 1.0);
    }
  }
}

function no1click() {
  var notfound = document.getElementById('notfound1click');
  var indicator = document.getElementById('appear1click');
  if (indicator) {
    if (notfound)
      notfound.style.display = "none";
    return;
  }
  if (notfound)
    return;

  notfound = document.createElement("div");
  notfound.id = "notfound1click";
  notfound.align = "center";
  var nftext = document.createElement("span");
  nftext.innerHTML = "1Click Button Not Found";
  notfound.appendChild(nftext);
  notfound.style.position = "absolute";
  notfound.style.right = 0;
  notfound.style.top = 0;
  notfound.style.width = "100px";
  notfound.style.zIndex = 999;
  notfound.style.backgroundColor = "#ff8888";
  notfound.style.border = "5px solid gray";
  nftext.style.top = "40px";
  nftext.style.textAlign = "center";
  notfound.onclick = function() {
    var fadeanim2 = function(opac) {
      if (opac <= 0) {
	notfound.style.display = "none";
      }else {
	notfound.style.opacity = opac / 10;
	setTimeout(function(){fadeanim2(opac-1)}, 70);
      }
    }
    fadeanim2(10);
  }
  document.body.insertBefore(notfound, null);
}

if (window == window.parent) {
  if (! disable_1click()) {
    disable_preorder();
  }
  no1click();
}
