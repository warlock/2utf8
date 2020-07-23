const chardet = require('chardet')
const iconv = require('iconv-lite')

module.exports = text => {
  if (!text) throw 'No text input'
  const textbuffer = Buffer.from(text)
  const encoding = chardet.detect(textbuffer)
  const decoded = iconv.decode(textbuffer, encoding)
  const encoded = iconv.encode(decoded, 'utf8').toString()
  return encoded
}
