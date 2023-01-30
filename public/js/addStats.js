
module.exports.addStats = function (charClass, obj) {
  for(key in obj) {
    if(charClass == key) {
      console.log(`${charClass} class matches with ${key} stats`)
      return obj[key]
    }
  }
}






