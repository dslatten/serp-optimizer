/*

This code is based on bookmarklet found here:
https://www.squarefree.com/bookmarklets/webdevel.html#view_style_sheets

Bookmarklet to run hosted code:

javascript:(function(){
var getSerpStyle=document.createElement('script');
document.getElementsByTagName('head')[0].appendChild(getSerpStyle).src='http://www.darrenslatten.com/serp-optimizer/tools/get-serp-styles.js';
document.getElementsByTagName('head')[0].removeChild(getSerpStyle);
})();

*/

(function() {
    s = document.getElementsByTagName('style');
    ex = document.getElementsByTagName('link');
    d = window.open().document;

    /*set base href*/
    d.open();
    d.close();
    b = d.body;

    function preprocessCSS(s) {
        s = s.replace(/\s*}\s*/g, '}');
        s = s.replace(/\s*{\s*/g, '{');
        s = s.replace(/\s*;\s*/g, ';');
        s = s.replace(/\s*:\s*/g, ':');
        s = s.replace(/(^\s+|\s+$)/gm, '');
        s = s.replace(/}/g, '}\n');
        s = s.replace(/{/g, '{\n');
        s = s.replace(/([^;])}/g, '$1;}');
        s = s.replace(/;/g, ';\n');
        s = s.replace(/:(.+)\\0\/(;|})/g, ':~"$1\\0/";'); // http://lesscss.org/#-escaping
        s = s.replace(/^0;\s$/gm, ''); // For whatever reason (typo?), Google had a CSS property of "0". This kills it to prevent LESS compiler error.
        return s;
    }

    function iff(a, b, c) {
        return b ? a + b + c : '';
    }

    function add(h) {
        b.appendChild(h);
    }

    function makeTag(t) {
        return d.createElement(t);
    }

    function makeText(tag, text) {
        t = makeTag(tag);
        t.appendChild(d.createTextNode(text));
        return t;
    }

    add(makeText('style', 'iframe{width:100%; height:18em; border:1px solid;'));
//  add(makeText('h3', d.title='Style sheets in ' + location.href));

    for (i = 0; i < s.length; ++i) {
//      add(makeText('h4', 'Inline style sheet'  + iff(' title="', s[i].title, '"')));
        add(makeText('pre', preprocessCSS(s[i].innerHTML)));
    }

    for (i = 0; i < ex.length; ++i) {
        rs = ex[i].rel.split(' ');
        for (j = 0; j < rs.length; ++j) {
            if (rs[j].toLowerCase() == 'stylesheet') {
                add(makeText('h4', 'link rel="' + ex[i].rel + '" href="' + ex[i].href + '"' + iff(' title="', ex[i].title, '"')));
                iframe = makeTag('iframe');
                iframe.src = ex[i].href;
                add(iframe);
                break;
            }
        }
    }
    void 0
})();