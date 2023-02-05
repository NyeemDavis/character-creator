const deleteBtn = document.querySelectorAll('.deleteBtn')
const configBtn = document.querySelectorAll('.configBtn')
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


const getStats = async function () {
  const characterId = this.parentNode.dataset.id
  const response = 
  await fetch(`/characters/config?${new URLSearchParams(characterId).toString()}`)
    .then(res => res.json())
    .then(configHTML => {
      
      location.reload()
    })
    .catch(err => {
      console.log(err)
    })
}

Array.from(configBtn).forEach((el) => {
  el.addEventListener('click', getStats)})


