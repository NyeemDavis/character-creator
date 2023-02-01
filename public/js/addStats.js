
module.exports.addStats = function (charClass, obj) {
  for(key in obj) {
    if(charClass == key) {
      console.log(`Added stats for ${charClass} class`)
      return obj[key]
    }
  }
}






