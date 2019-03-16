import './styles/index.scss';

const hasClass = (el, className) => el.classList.contains(className);
const toggleClass = (el, className) => {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
}
const getSiblingByClass = (el, className) => {
  const siblingList = getSiblings(el);
  let sibling;
  siblingList.map( val => {
    if (hasClass(val, className)) {
      sibling = val;
    }
  })
  return sibling; 
}
const getSiblings = el => {
  let children = el.parentNode.children;
  let siblings = [];
  Array.prototype.filter.call(children, val => {
    siblings.push(val);
  })
  return siblings;
}

const _init = ({ container = '', data = [] }) => {
  let fileBrowserContainer = document.getElementById(container);
  fileBrowserContainer.innerHTML = parseData(data);

  console.log(document.getElementsByClassName('.file-name'));
  document.addEventListener('click', e => {
    let el = e.target;
    if (hasClass(el, 'file-name')) {
      console.log('file');
      toggleClass(el, 'green');
    } else if (hasClass(el, 'dir-name')) {
      toggleClass(getSiblingByClass(el, 'icon'), 'folder-open'); // TODO: add check here to toggle only if !hide&folder-open or hide&!folder-open
      toggleClass(getSiblingByClass(el.parentNode, 'dir-file-container'), 'hide');
    } 
  })
}

const parseData = fileData => {
  let folderDivs = '';
  fileData.map(dir => {
    let fileDivs = '';
    dir.files.map(file => {
      fileDivs += `<div class="file-container">
      <div class="file-name">${file}</div>
      </div>`;
    })

    folderDivs += 
    `<div class="dir-container">
      <div class="dir-name-container">
        <span class="icon folder"></span>
        <div class="dir-name">${dir.name}</div>
      </div>
      <div class="dir-file-container hide">${fileDivs}</div>
    </div>`;
  })
  return folderDivs;
}

window.FileBrowser = {
  init: _init
}