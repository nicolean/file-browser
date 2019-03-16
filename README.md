# File Browser

## A very simple plugin to create very simple file browsing

### Getting Started

Include the file-browser.js library in your project.

Add a `div` with an id  
```html
<div id="file-browser"></div>
```

Provide an array of your directory/file structure in the following format  
```javascript
const testData = [{  
  name: 'Directory Name',
  files: ['file one', 'file two', 'file three', 'file four', 'file five']
}];
```

Call the FileBrowser.init() function with the `div` id and data   
```javascript
FileBrowser.init({
  container: 'file-browser',
  data: testData
})
```