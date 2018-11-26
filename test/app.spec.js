const align = require('../')
const data = [
    [ 1, '192.168.1.1', 'test', '测试机1' ],
    [ 21, '192.168.10.2', 'webapp', '测试机264565456456' ],
    [ 316, '192.168.1.255', 'preview-server-1', '测试机311' ]
]

const res = align(data)

console.log('input:')
console.log(data)

console.log('')
console.log('output:')
console.log(res)