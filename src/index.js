import hljs from 'highlight.js'

const startHilight = () => {
  const langs = []
  document.querySelectorAll('p.code-view__header-path').forEach((codeHeader) => {
    const extOrFilename = codeHeader.innerHTML.split('.').pop().split('/').pop()
    let lang = hljs.getLanguage(extOrFilename)
    if (lang !== undefined && lang.aliases !== undefined && lang.aliases.length !== 0) {
      lang = lang.aliases[0]
    } else {
      lang = undefined
    }
    langs.push(lang)
  })
  document.querySelectorAll('div.code-view__content').forEach((codeContent, i) => {
    codeContent.querySelectorAll('td.Line-src span').forEach((line) => {
      if (langs[i] !== undefined) {
        line.classList.add(langs[i])
        hljs.highlightBlock(line);
      }
    })
  })
}

const codeLoaded = (loadingSelector) => {
  const elem = document.querySelector(loadingSelector)
  return elem && elem.style.display === "none"
}

const waitUntilLoaded = (handler) => {
  setTimeout(() => {
    if (codeLoaded('div.tab-loading-wrapper__mask')) {
      handler()
    } else {
      waitUntilLoaded(handler)
    }
  }, 100)
}

let diffWaitingCalled = false
const waitUntilDiffLoaded = () => {
  if (diffWaitingCalled) {
    return
  }
  waitUntilLoaded(startHilight)
  diffWaitingCalled = true
}

const urlLastElement = location.href.split('/').pop()
if (urlLastElement === 'diff') {
  window.addEventListener('load', () => {
    waitUntilDiffLoaded()
  }, false)
} else {
  document.querySelector('#tabNavi > li:nth-child(3) > a').addEventListener('click', () => {
    waitUntilDiffLoaded()
  })
}
