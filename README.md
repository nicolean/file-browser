# File Browser

## A very simple plugin to create very simple file browsing

### Getting Started

Include the file-browser.js library in your project.

Add a `div` with an id  
`<div id="file-browser"></div>`

Provide an array of your directory/file structure in the following format  
`const testData = [{  
    name: 'Directory Name',
    files: ['file one', 'file two', 'file three', 'file four', 'file five']
  }];`

Call the FileBrowser.init() function with the `div` id and data   
`FileBrowser.init({
  container: 'file-browser',
  data: testData
})`