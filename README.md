amazon-jp-2clicker
==================

Firefox addon for stopping wrong click in amazon 1-click button (for kindle content page)  
Tested on Firefox 24.0

Installation
------------
 - Install Firefox add-on SDK -> https://dev.mozilla.jp/addon-sdk-docs/dev-guide/tutorials/installation.html
 - Create amazon-jp-2clicker dir and initialize.

```
mkdir amazon-jp-2clicker
chdir amazon-jp-2clicker
cfx init
```

 - Copy data and lib files.

```
cp path-to-repository/lib/* lib
cp path-to-repository/data/* data
```

 - Test run

```
cfx run
```

 - Make .xpi

```
cfx xpi
```

 - And install the .xpi file to your firefox environment.
