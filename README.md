# File Browser

## A very simple plugin to create a very simple file browser

### Getting Started

#### Dependencies  
- [Fontawesome](https://fontawesome.com/) is currently in use for the folder and file icons--support for user-supplied classnames is planned


Include the `file-browser.js` plugin and Fontawesome in your project.

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