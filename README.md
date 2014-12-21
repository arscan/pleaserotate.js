pleaserotate.js
===============

Probably the simplest way to force your mobile users to view your site in portrait or landscape mode.  Include this js 
file and it will replace your site with a friendly message until the users' device is in the proper orientation.

![Example](https://raw.githubusercontent.com/arscan/pleaserotate.js/master/demo.gif "Example")

View it in action [over here](http://www.robscanlon.com/lineup/) (mobile device required).

All pieces, including the SVG graphic, can be styled using CSS.  

I don't recommend using this on most sites -- let your users view it however they want.  However, this can be 
useful on things like games or tech demos where supporting multiple orientations simply isn't practical.

### Basic Usage

Just include the script file anywhere in your doc:

```html
<script src="pleaserotate.js"></script>
```

All parts can be styled with CSS.  It can be configured by creating a `window.PleaseRotateOptions` object before you
include the script.

```html
<style>
    /* style the elements with CSS */
    #pleaserotate-graphic{
        fill: #fff;
    }

    #pleaserotate-backdrop {
        color: #fff;
        background-color: #000;
    }
</style>

<script>
    /* you can pass in options here */
    PleaseRotateOptions = {
        forcePortrait: true // if you would prefer to force portrait mode
    };
</script>
<script src="pleaserotate.js"></script>
```

### Using AMD or CommonJS

This supports AMD and CommonJS.  Require ```pleaserotate.js``` and call ```PleaseRotate.start(options)``` to use.

### Options

The current default options are:

```javascript
var PleaseRotateOptions = {
    startOnPageLoad: true,
    onHide: function(){},
    onShow: function(){},
    forcePortrait: false,
    message: "Please Rotate Your Device",
    bypassText: "(or click to continue)",
    allowClickBypass: true,
    onlyMobile: true,
    zIndex: 1000,
    iconNode: null
};
```

### Note Regarding Startup

Depending on where you including the javascript file, other parts of your site could render before pleaserotate.js
has a chance to block them out.  To help you  work around that, pleaserotate.js attaches classes to the ```<html>``` element 
while running.  Look for ```pleaserotate-showing``` and ```pleaserotate-hiding``` classes, which
indicate that pleaserotate.js has finished loading and if it is currently showing the "Please Rotate" message or not.
You can use CSS to hide parts of your page until those classes show up.

### Implementation Details

This is currently implemented using an extremely basic technique.  It inspects the user agent to determine if the user is on 
a mobile device.  It uses the window width / height to decide if it is in portrait or landscape mode.

This functionality could be recreated fairly easily using media queries.  However, I find it useful on some of my projects to have an
option where I simply include a JS file and don't worry about creating the right HTML and CSS.  It probably isn't the
most correct if you have the time / resources to do it properly.


