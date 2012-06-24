/*

Bookmarklet to run hosted code:

javascript:(function(){
var getSerpStyle=document.createElement('script');
document.getElementsByTagName('head')[0].appendChild(getSerpStyle).src='http://serpimp.com/tools/char-widths.js';
document.getElementsByTagName('head')[0].removeChild(getSerpStyle);
})();

*/

(function() {

    if (!window.jQuery) {
       var script = document.createElement('script');
       script.id = 'mofo_script';
       script.type = 'text/javascript';
       script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
       document.getElementsByTagName('head')[0].appendChild(script);
    }

})();

