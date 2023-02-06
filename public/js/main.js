const deleteBtn = document.querySelectorAll('.deleteBtn')
const configBtn = document.querySelectorAll('.configure')
const charClass = document.querySelectorAll('.characterClass')
const weapons = document.querySelectorAll(".weapon")


Array.from(charClass).forEach((el) => {
  el.addEventListener('click', () => {
    const input = document.querySelector('.classInput')
    input.value = el.innerText
  })
})

Array.from(weapons).forEach((el) => {
  el.addEventListener('click', () => {
    const input = document.querySelector('.weaponInput')
    input.value = el.innerText
  })
})

Array.from(deleteBtn).forEach((el)=>{
  el.addEventListener('click', deleteCharacater)
})


Array.from(configBtn).forEach((el) => {
  el.addEventListener('click', async () => {
    const characterId = el.parentNode.dataset.id
    if(el.parentNode.dataset.status == 'unchecked') {
      el.parentNode.dataset.status = 'checked'
      try {
        const response = await fetch('characters/config', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            "characterFromJSFile": characterId
          })
        })
        const data = await response.json()

        const characterText = document.querySelector('.characterInfoDiv')

        stats =  Object.values(data.character.stats)
        console.log(stats)
       for(i = 0; i < stats.length; i ++) {
        characterText.innerHTML += `<span class='fortnite'>${stats[i]}</span>`
       }
      } catch (err) {
        console.log(err)
      }
    }else if(el.parentNode.dataset.status == 'checked') {
      console.log('deez fat ass nigger nuts')
    }
  })
})


async function deleteCharacater(){
  const characterId = this.parentNode.dataset.id
  try{
      const response = await fetch('characters/deleteCharacter', {
          method: 'delete',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'characterFromJSFile': characterId
          })
        })
      const data = await response.json()
      console.log(data)
      location.reload()
  }catch(err){
      console.log(err)
  }
}
