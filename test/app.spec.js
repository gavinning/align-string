const { align, alignVector } = require('..')
const data = [
    [ 1, '192.168.1.1', 'test', '测试机1' ],
    [ 21, '192.168.10.2', 'webapp', '测试机264565456456' ],
    [ 316, '192.168.1.255', 'preview-server-1', '测试机311' ]
]

const res = alignVector(data)

console.log('input:')
console.log(data)

console.log('')
console.log('output:')
console.log(res)
console.log('')
console.log('')

const files = ['1.png', 'WechatIMG5289.png', 'WechatIMG5542.jpeg']

console.log('files:', files)
console.log('')
console.log('align files:', align(files))
