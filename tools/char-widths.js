/*

Bookmarklet to run hosted code:

javascript:(function(){
var charWidths=document.createElement('script');
document.getElementsByTagName('head')[0].appendChild(charWidths).src='http://serpimp.com/tools/char-widths.js';
document.getElementsByTagName('head')[0].removeChild(charWidths);
})();

*/

// Poll instead of a setTimeout hack
// http://paulirish.com/2008/best-practice-poll-instead-of-a-settimeout-hack/

function executeWhenLoaded(func) {  
    for (var i = 1; i < arguments.length; i++) {
        if (! window[ arguments[i] ]) {
            setTimeout(arguments.callee, 50);      
            return;
        } 
    }

    func();
}


(function() {
    if (!window.jQuery) {
       var script = document.createElement('script');
       script.type = 'text/javascript';
       script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
       document.getElementsByTagName('head')[0].appendChild(script);
       document.getElementsByTagName('head')[0].removeChild(script);
    }
})();



executeWhenLoaded(function() { 
    alert('jQuery = ' + window.jQuery);
},'jQuery');