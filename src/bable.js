async function start() {
    return await Promise.resolve('async await')
}

start().then(console.log)

class Util {
    static id() {
        console.log("++++++");
    } 
}
console.log('Util.id: ',Util.id())