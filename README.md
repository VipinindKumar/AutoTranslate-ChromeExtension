# AutoTranslate-ChromeExtension
Chrome Extension that let Google Chrome auto-translate despite being blocked by websites


**Not working**: works by removing the meta tag for no-translate, but google translate is still not firing. 

**To do**:
* Need to understand how google translate is working
* ~~Try changing content from no-translate to translate~~
  ```javascript
  <meta name="google" content="notranslate">new content</meta> 
  //need to add new content inside the meta tag
  //replacing the meta tag, need function to create meta tag```

* Replaced the meta tag with content notranslate with meta tag with translate, but it didn't worked for auto translation
* it will have no affect, as it will be generated after the page is loaded
* **For modifying the HEAD, need to dynamically inject your code into the HEAD (via a third party module??)**
