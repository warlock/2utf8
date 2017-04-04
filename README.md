2UTF8
===
> Tranform string text to UTF-8

### NPM URL
```
http://npmjs.com/package/2utf8
```

### GIT URL
```
https://github.com/warlock/2utf8
```

# Examples:
**From string:**
```javascript
var 2utf8 = require('2utf8')
var text = 2utf8(string_from_other_encoding);
console.log(text)
```

**With html headers from request:**
```javascript
var 2utf8 = require('2utf8', )
var request = require(request)

request('http://www.spellbook.io', (err, res, body) => {
  var text = 2utf8(body, res.headers);
  console.log(text)
})
```

## License
The MIT License (MIT)
Copyright (c) 2015 Josep Subils Rigau (josep@spellbook.io)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
