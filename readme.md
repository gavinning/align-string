Align-string
---
字符串对齐


### Install
```sh
npm i align-string --save
```

### Function
input
```js
[
    [ 1, '192.168.1.1', 'test', '测试机1' ],
    [ 21, '192.168.10.2', 'webapp', '测试机264565456456' ],
    [ 316, '192.168.1.255', 'preview-server-1', '测试机311' ]
]
```
output
```js
[
    [ '1  ', '192.168.1.1  ', 'test            ', '测试机1           ' ],
    [ '21 ', '192.168.10.2 ', 'webapp          ', '测试机264565456456' ],
    [ '316', '192.168.1.255', 'preview-server-1', '测试机311         ' ]
]
```

### Example
```js
const align = require('align-string')
const data = [
    [ 1, '192.168.1.1', 'test', '测试机1' ],
    [ 21, '192.168.10.2', 'webapp', '测试机264565456456' ],
    [ 316, '192.168.1.255', 'preview-server-1', '测试机311' ]
]

// space默认为1个空格
const res = align(data [, space: string])

// 设置space为0
const res = align(data, '0')

// 设置space为~
const res = align(data, '~')
```


