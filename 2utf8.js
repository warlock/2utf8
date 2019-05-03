const charset = require('charset')
const tck = require('tck')
const icu = require('node-icu-charset-detector')
const jschardet = require('jschardet')
const Iconv = require('iconv').Iconv

module.exports = (bufftext, html_headers) => {
  if (!tck.isEmpty(bufftext)) {
    var enc
    if (!tck.isEmpty(html_headers)) enc = charset(html_headers, bufftext)
    if (tck.isEmpty(enc)) enc = icu.detectCharset(bufftext).toString()
    if (tck.isEmpty(enc)) enc = jschardet.detect(bufftext).encoding.toLowerCase()
    if (tck.isEmpty(enc)) {
      return bufftext.toString('utf-8')
    } else {
      try {
        const iconva = new Iconv(enc, 'UTF-8//TRANSLIT//IGNORE')
        return iconva.convert(bufftext).toString('utf-8')
      } catch (e) {
        return bufftext
      }
    }
  } else return ''
}
