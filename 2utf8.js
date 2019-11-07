const chardet = require('chardet')
const charset = require('charset')
const iconv = require('iconv-lite')

module.exports = async (text, html_headers) => {
  const textbuffer = Buffer.from(text)
  if (text) {
    var encoding
    if (html_headers) {
      encoding = charset(html_headers, text)
    } else {
      encoding = chardet.detect(textbuffer)
    }
    const decoded = iconv.encode(textbuffer, encoding)
    const encoded = iconv.decode(decoded, 'utf8')
    return encoded
  } else throw 'No text input'
}
