// -*- coding:utf-8-unix; js-indent-level:2; -*-

var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
  include: ["https://www.amazon.co.jp/*","http://www.amazon.co.jp/*"],
  contentScriptFile: self.data.url("2click.js"),
  onAttach: setupStorage,
});


var storage_obj = {};
function setupStorage(worker) {
  worker.port.on('get_storage', function (name) {
    console.log("get: " + name);
    return storage_obj[name];
  });
  worker.port.on('put_storage', function (name, val) {
    storage_obj[name] = val;
    console.log("put: " + name + " = " + val);
  });
}
