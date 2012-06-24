// Share buttons
(function() {
    if (document.getElementById('share')) {
        var share = document.getElementById('share');
        var strVar="";
        strVar += "<div id=\"share-heading\">Share this Tool<\/div>";
        strVar += "<div id=\"share-subheading\">Thank you for supporting SERP Imp!<\/div>";
        strVar += "<div id=\"share-buttons\">";
        strVar += "<div id=\"si-twitter-button\"><\/div>";
        strVar += "<div id=\"si-facebook-button\"><\/div>";
        strVar += "<div id=\"si-google-button\"><\/div>";
        strVar += "<div class=\"clear\"><\/div>";
        strVar += "<\/div>";
        strVar += "<div class=\"clear\"><\/div>";
        share.innerHTML = strVar;
    }
})();

// Twitter button
(function() {
    if (document.getElementById('si-twitter-button')) {
        var twArray = new Array();
        twArray.push('<iframe allowtransparency="true" frameborder="0" scrolling="no" src="\/\/platform.twitter.com\/widgets\/tweet_button.html');
        twArray.push('?url=' + FT.canonical);
        twArray.push('&via=SerpImp');
        twArray.push('&text=' + FT.title);
        twArray.push('&related=SEOmofo');
        twArray.push('&count=horizontal');
        twArray.push('" style="width:90px; height:20px; overflow:hidden; border:none;"><\/iframe>');
        document.getElementById('si-twitter-button').innerHTML = twArray.join('');
    }
})();

// Facebook button
(function() {
    if (document.getElementById('si-facebook-button')) {
        var fbArray = new Array();
        fbArray.push('<iframe allowtransparency="true" frameborder="0" scrolling="no" src="\/\/www.facebook.com\/plugins\/like.php');
        fbArray.push('?href=' + FT.canonical);
        fbArray.push('&send=false');
        fbArray.push('&layout=button_count');
        fbArray.push('&width=90');
        fbArray.push('&show_faces=false');
        fbArray.push('&action=like');
        fbArray.push('&colorscheme=light');
        fbArray.push('&font=segoe+ui');
        fbArray.push('&height=20');
        fbArray.push('" style="width:90px; height:20px; overflow:hidden; border:none;"><\/iframe>');
        document.getElementById('si-facebook-button').innerHTML = fbArray.join('');
    }
})();

// Google+ button
(function() {
    if (document.getElementById('si-google-button')) {
        var gpArray = new Array();
        gpArray.push('<div class="g-plusone" ');
        gpArray.push('data-size="medium" ');
        gpArray.push('></div>');
        document.getElementById('si-google-button').innerHTML = gpArray.join('');
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    }
})();

// Disqus comment thread
(function() {
    if (document.getElementById('comments')) {
        var comments = document.getElementById('comments');
        var strVar="";
        strVar += "<div id=\"comments-heading\" onclick=\"SerpImp.loadComments();\">Leave a Comment<\/div>";
        strVar += "<div id=\"comments-subheading\"><a href=\"#comments\" onclick=\"SerpImp.loadComments();\">Click here to view the comments.<\/a><\/div>";
        comments.innerHTML = strVar;
    }
})();











