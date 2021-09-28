import pad from 'pad-right'

type Vector<T> = T[][]

class AlignString {
    private readonly space: string
    constructor(space: string) {
        this.space = space
    }

    alignVector(data: Vector<string>) {
        return this.appendSpace(data, this.alignSpace(data))
    }

    alignArray(data: string[]) {
        const max = data.map((str) => str.length).sort((a, b) => b - a)[0]
        return data.map((str) => {
            return pad(str, max, this.space)
        })
    }

    alignSpace(array: Vector<string>) {
        const lengths: number[] = []
        array.forEach((arr) => {
            arr.forEach((item, index) => {
                item = String(item)
                item.length > (lengths[index] || 0) ? (lengths[index] = item.length) : void 0
            })
        })
        return lengths
    }

    appendSpace(array: Vector<string>, lengths: number[]) {
        return array.map((arr) => {
            return arr.map((item, index) => {
                let res = pad(String(item), lengths[index], this.space)
                return res
            })
        })
    }

    static create(space: string) {
        return new AlignString(space)
    }
}

export function align(arr: string[], space = ' ') {
    return AlignString.create(space).alignArray(arr)
}

export function alignVector(arr: Vector<string>, space = ' ') {
    return AlignString.create(space).alignVector(arr)
}
