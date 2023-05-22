
const observer = (() => {
    const callbacks = []
    return {
        publish: (fileName) => {
            callbacks.forEach(cb => cb(fileName))
        },
        subscribe: (cb) => { callbacks.push(cb)}
    }
})()

module.exports = observer