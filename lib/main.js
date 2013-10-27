var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
    include: ["https://www.amazon.co.jp/*","http://www.amazon.co.jp/*"],
    contentScriptFile: self.data.url("2click.js"),
});
