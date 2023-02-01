
module.exports.addWeapon = function (weaponName, obj) {
    for(key in obj) {
        if(weaponName == key) {
          console.log(`Added stats for ${weaponName} weapon`)
          return obj[key]
        }
      }
}