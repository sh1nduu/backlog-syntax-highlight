console.log("Hello")

const css = document.createElement('link')
css.rel = 'stylesheet'
css.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/default.min.css'
const js = document.createElement('script')
js.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js'
const init = document.createElement('script')
init.innerHTML = `
const langs = []
document.querySelectorAll('p.code-view__header-path').forEach((codeHeader) => {
  const extOrFilename = codeHeader.innerHTML.split('.').pop().split('/').pop()
  let lang = hljs.getLanguage(extOrFilename)
  if (lang === undefined) {
    lang = extOrFilename
  } else {
    lang = lang.aliases[0]
  }
  langs.push(lang)
})
document.querySelectorAll('div.code-view__content').forEach((codeContent, i) => {
  codeContent.querySelectorAll('td.Line-src span').forEach((line) => {
    if (langs[i] !== undefined) {
      line.classList.add(langs[i])
    }
    hljs.highlightBlock(line);
  })
})
`

// document.body.appendChild(css)
// document.body.appendChild(js)
setTimeout(() => document.body.appendChild(init), 2000)

console.log("created elements")
