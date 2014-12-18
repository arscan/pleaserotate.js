
(function(){
    var PleaseRotate = {},
        options,
        isMobile = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);


    var defaults = {
        startOnPageLoad: true
    };

   
    function extend(defaults, options){
        var extended = {}, prop;
        for (var prop in defaults){
            if(Object.prototype.hasOwnProperty.call(defaults, prop)){
                extended[prop] = defaults[prop];
            }
        }

        for (var prop in options){
            if(Object.prototype.hasOwnProperty.call(options, prop)){
                extended[prop] = options[prop];
            }
        }

        return extended;
    }


    function isPortrait(){
        return ( isMobile && window.innerWidth < window.innerHeight);
    }

    function onWindowResize(){


    }


    PleaseRotate.start = function(opts){
        console.log('starting');
        options = extend(defaults, opts);
        window.addEventListener( 'resize', onWindowResize, false );
    }


    PleaseRotate.stop = function(){
        window.removeEventListener('resize', onWindowResize, false);
    }

    if (typeof define === 'function' && define.amd) {
        define(['PleaseRotate'], function() {
            return PleaseRotate;
        });
    } else if (typeof exports === 'object') {
        module.exports = PleaseRotate;
    } else {
        options = extend(window.PleaseRotateOptions, defaults);
        if (options.startOnPageLoad) {
            PleaseRotate.start();
        }
    }

})();

