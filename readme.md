Align-string
---
字符串对齐


### Install
```sh
npm i align-string --save
```

### Usage
```js
import { align, alignVector } from 'align-string'
// or
const { align, alignVector } = require('align-string')
```

#### align
```js
align(arr: string[])

['1.png', 'WechatIMG5289.png', 'WechatIMG5542.jpeg']

// =>

[ '1.png             ', 'WechatIMG5289.png ', 'WechatIMG5542.jpeg' ]
```

#### alignVector
```js
alignVector(vector: string[][])

[
    [ 1, '192.168.1.1', 'test', '测试机1' ],
    [ 21, '192.168.10.2', 'webapp', '测试机264565456456' ],
    [ 316, '192.168.1.255', 'preview-server-1', '测试机311' ]
]

// =>

[
    [ '1  ', '192.168.1.1  ', 'test            ', '测试机1           ' ],
    [ '21 ', '192.168.10.2 ', 'webapp          ', '测试机264565456456' ],
    [ '316', '192.168.1.255', 'preview-server-1', '测试机311         ' ]
]
```


