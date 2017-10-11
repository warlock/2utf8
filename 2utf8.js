const charset = require('charset')
const tck = require('tck')
const icu = require('node-icu-charset-detector')
const jchardet = require('jschardet')
const Iconv = require('iconv').Iconv

module.exports = (text, html_headers) => {
  if (!tck.isEmpty(text)) {
    var enc
    if (!tck.isEmpty(html_headers)) enc = charset(html_headers, text)
    if (tck.isEmpty(enc)) enc = icu.detectCharset(new Buffer(text, 'binary')).toString()
    if (tck.isEmpty(enc)) enc = jchardet.detect(text).encoding.toLowerCase()
    if (tck.isEmpty(enc)) {
      return text.toString('utf-8')
    } else {
      try {
        const iconva = new Iconv(enc, 'UTF-8//TRANSLIT//IGNORE')
        const buff = new Buffer(text, 'binary')
        return iconva.convert(buff).toString('utf-8')
      } catch (e) {
        return text
      }
    }
  } else return ''
}
