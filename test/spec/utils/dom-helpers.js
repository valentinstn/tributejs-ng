export const createDomElement = function(element = 'text') {
  let elementToCreate = 'input';
  if (element === 'contenteditable') {
    elementToCreate = 'div';
  }
  let wrapperDiv = document.createElement('div');
  wrapperDiv.id = 'tribute-wrapper-div';
  let input = document.createElement(elementToCreate);
  input.id = `tribute-${element}`;
  if (element === 'contenteditable') {
    input.contentEditable = true;
  }
  wrapperDiv.appendChild(input);
  document.body.appendChild(wrapperDiv);
  return input;
}

export const clearDom = function() {
  let wrapperDiv = document.querySelector('#tribute-wrapper-div');
  if (wrapperDiv) {
    wrapperDiv.parentNode.removeChild(wrapperDiv);
  }
  let tributeContainer = document.querySelector('.tribute-container');
  if (tributeContainer) {
    tributeContainer.parentNode.removeChild(tributeContainer);
  }
}

export const fillIn = function(input, text) {
  input.focus();
  $(input).sendkeys(text);
  if (input.nodeName !== 'INPUT' && input.nodeName !== 'TEXTAREA') {
    const range = document.createRange();
    let caretNode = input;
    while (caretNode.lastChild) {
      caretNode = caretNode.lastChild;
    }
    if (caretNode.nodeType === Node.TEXT_NODE) {
      range.setStart(caretNode, caretNode.length);
    } else {
      range.selectNodeContents(input);
      range.collapse(false);
    }
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
  const finalCharacter = text.slice(-1);
  const keyCode = finalCharacter === '('
    ? 57
    : finalCharacter.charCodeAt(0) || 0;
  const keydown = new KeyboardEvent('keydown', { bubbles: true });
  const keyup = new KeyboardEvent('keyup', { bubbles: true });
  Object.defineProperty(keydown, 'keyCode', { value: keyCode });
  Object.defineProperty(keydown, 'which', { value: keyCode });
  Object.defineProperty(keyup, 'keyCode', { value: keyCode });
  Object.defineProperty(keyup, 'which', { value: keyCode });
  input.dispatchEvent(keydown);
  input.dispatchEvent(keyup);
}

export const simulateMouseClick = function(targetNode) {
  function triggerMouseEvent(targetNode, eventType) {
    let clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent(eventType, true, true);
    targetNode.dispatchEvent(clickEvent);
  }
  ["mouseover", "mousedown", "mouseup", "click"].forEach(function (eventType) {
    triggerMouseEvent(targetNode, eventType);
  });
}
