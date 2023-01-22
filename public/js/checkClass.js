
module.exports.checkClassAndMatch = function (charClass, obj) {
  for(key in obj) {
    if(charClass == key) {
      console.log(`${charClass} matches with ${key}`)
      return obj[key]
    }
  }
}






