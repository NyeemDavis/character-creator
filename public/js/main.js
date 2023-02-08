const deleteBtn = document.querySelectorAll('.deleteBtn')
const configBtn = document.querySelectorAll('.configure')
const charClass = document.querySelectorAll('.characterClass')
const weapons = document.querySelectorAll(".weapon")
const statChangingButtons = document.querySelectorAll('.configStatBtn')

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
  el.addEventListener('click', showAndHideStats)
})

Array.from(statChangingButtons).forEach((el) => {
  el.addEventListener('click', () => {
    console.log(el.nextElementSibling)
  })
})

async function getStats(id) {
  const characterId = id
  try {
    const response = await fetch('characters/config', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'characterFromJSFile': characterId
      })
    })
  const data = await response.json()
  return data.character.stats
  } catch (err) {
    console.log(err)
  }
}


async function showAndHideStats() {
  const characterId = this.parentNode.dataset.id
  const characterText = this.parentNode.parentNode.nextSibling.nextSibling
  if(this.parentNode.dataset.status == 'unchecked') {
    this.parentNode.dataset.status = 'checked'
    const stats = Object.values(await getStats(characterId))
    for(i = 0; i < stats.length; i++) {
      characterText.innerHTML += 
      `
      <button class='configStatBtn' data-type='plus'>+</button>
      <span class='characterStat'>${stats[i]}</span>
      <button class='configStatBtn'  data-type='minus'>-</button>
      `
    }
  }else if( this.parentNode.dataset.status == 'checked') {
    this.parentNode.dataset.status = 'unchecked'
    characterText.innerHTML = ''
  }
}



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


async function changeStat() {
  console.log('Youre gay')
}

