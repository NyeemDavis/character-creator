
module.exports = {
  applyStats = function checkClassAndMatch(charClass, obj) {
    for(key in obj) {
        if(charClass == key) {
            console.log(`matches with ${key}`)
            return key
        }
    }
}
}
