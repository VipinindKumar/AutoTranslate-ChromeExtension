// to remove this line
// <meta name="google" content="notranslate"/>

var element = document.querySelector('meta[name="google"]');
// element.parentElement.removeChild(element);

// creating new meta tag to inject
var meta = document.createElement('meta');
meta.name = "google";
meta.content = "translate";

// replaces notranslate meta tag with translate meta tag
element.replaceWith(meta);
