var charset = require('charset')
var sb = require('spellbook')
var icu = require('node-icu-charset-detector')
var jchardet = require('jschardet')
var Iconv = require('iconv').Iconv

module.exports = function (text, html_headers) {
  if (!sb.empty(text)) {
    var enc
    if (!sb.empty(html_headers)) enc = charset(html_headers, text)
    if (sb.empty(enc)) enc = icu.detectCharset(new Buffer(text, 'binary')).toString()
    if (sb.empty(enc)) enc = jchardet.detect(text).encoding.toLowerCase()
    if (sb.empty(enc)) {
      return text.toString('utf-8')
    } else {
      try {
        var iconva = new Iconv(enc, 'UTF-8//TRANSLIT//IGNORE')
        return iconva.convert(new Buffer(text, 'binary')).toString('utf-8')
      } catch (e) {
        return text
      }
    }
  } else return ''
}