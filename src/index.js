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
const getChildByClass = (el, className) => {
  const childrenList = getChildren(el);
  let child;
  childrenList.map( val => {
    if (hasClass(val, className)) {
      child = val;
    }
  })
  return child; 
}
const getChildren = el => {
  let children = el.children;
  let childrenList = [];
  Array.prototype.filter.call(children, val => {
    childrenList.push(val);
  })
  return childrenList;
}

const resetOpenStatus = folderIconEl => {
  folderIconEl.classList.remove('folder-open');
  getSiblingByClass(folderIconEl.parentNode, 'dir-file-container').classList.add('hide');
}

const _init = ({ container = '', data = [], onClick = false }) => {
  let fileBrowserContainer = document.getElementById(container);
  fileBrowserContainer.innerHTML = parseData(data, onClick);

  let fileLineDivHeight = document.getElementsByClassName('file-name')[0].clientHeight / 4;
  Array.from(document.getElementsByClassName('file-line')).forEach( div => {
    div.style.height = fileLineDivHeight+'px';
  })

  document.addEventListener('click', e => {
    let el = e.target;
    if (hasClass(el, 'file-name')) {
      toggleClass(el, 'green');
    } else if (hasClass(el, 'dir-name-container')) {
      let folderIcon = getChildByClass(el, 'icon');
      let dirFileContainer = getSiblingByClass(el, 'dir-file-container');
      if (hasClass(folderIcon, 'folder-open') !== hasClass(dirFileContainer, 'hide')) {
        toggleClass(folderIcon, 'folder-open');
        toggleClass(dirFileContainer, 'hide');
      } else {
        console.log('class and hide status mismatch, resetting');
        resetOpenStatus(folderIcon);
      }
    } else if (hasClass(el, 'dir-name') || hasClass(el, 'dir-icon')) {
      let folderIcon = getSiblingByClass(el, 'icon');
      let dirFileContainer = getSiblingByClass(el.parentNode, 'dir-file-container');
      if (hasClass(folderIcon, 'folder-open') !== hasClass(dirFileContainer, 'hide')) {
        toggleClass(folderIcon, 'folder-open');
        toggleClass(dirFileContainer, 'hide');
      } else {
        console.log('class and hide status mismatch, resetting');
        resetOpenStatus(folderIcon);
      }
    }
  })
}

const parseData = (fileData, onClick) => {
  // console.log(onClick);
  let folderDivs = '';
  fileData.map(dir => {
    let fileDivs = '';
    dir.files.map((file, i) => {
      fileDivs += `<div class="file-container">
        <div class="file-inner-container">
          <div class="file-line"></div>
          <div class="file-name" onClick="${onClick}()">${file}</div>
        </div>
      </div>`;
    })
    folderDivs += 
    `<div class="dir-container">
      <div class="dir-name-container">
        <span class="icon folder dir-icon"></span>
        <div class="dir-name">${dir.name}</div>
      </div>
      <div class="dir-file-container">
        ${fileDivs}
      </div>
    </div>`;
  })
  return folderDivs;
}

window.FileBrowser = {
  init: _init
}