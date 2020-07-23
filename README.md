# 2UTF8

> Tranform string text or text buffer to UTF-8

### NPM URL

```
http://npmjs.com/package/2utf8
```

### GIT URL

```
https://github.com/warlock/2utf8
```

# Example:

```javascript
const toUtf8 = require('2utf8')
const request = require(request)

request('https://www.js.gl', { encoding: null }, (err, res, bodybuffer) => {
  try {
    const text = toUtf8(bodybuffer)
    console.log(text)
  } catch (error) {
    console.error(error)
  }
})
```

## License

The MIT License (MIT)
Copyright (c) 2017 Josep Subils (js@js.gl)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
