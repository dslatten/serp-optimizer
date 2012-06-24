var SerpImp = function() {
    return {

        // Do this onload.
        onLoad : function() {
            // Append lazy script to <head>.
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', '/js/lazy.min.js');
            document.getElementsByTagName('head')[0].appendChild(script);
        },

        // Used by comment loader in lazy.js
        loadComments : function() {
            document.getElementById('comments-subheading').innerHTML = '&#x00a0;';
            var comments = document.getElementById('comments');
            var disqusThread = document.createElement('div');
            disqusThread.setAttribute('id', 'disqus_thread');
            comments.appendChild(disqusThread);
            var disqus_shortname = 'serpimp';
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        }

    };
}();

// There's no safety catch for pre-existing onload handlers because this script 
// should always be the first JavaScript loaded in the document.
window.onload = SerpImp.onLoad;