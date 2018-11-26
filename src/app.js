const pad = require('pad-right')

class AlignString {
    constructor(space) {
        this.SPACE = String(space)
    }

    align(data) {
        return this.appendSpace(data, this.alignSpace(data))
    }

    alignSpace(array) {
        const lengths = []
        array.forEach(arr => {
            arr.forEach((item, index) => {
                item = String(item)
                item.length > (lengths[index] || 0) ? lengths[index] = item.length : void(0)
            })
        })
        return lengths
    }

    appendSpace(array, lengths) {
        return array.map(arr => {
            return arr.map((item, index) => {
                let res = pad(String(item), lengths[index], this.SPACE)
                return res
            })
        })
    }

    static create() {
        return new AlignString(...arguments)
    }
}

module.exports = (data, space = ' ') => {
    return AlignString.create(space).align(data)
}
