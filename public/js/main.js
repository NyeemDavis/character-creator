const deleteBtn = document.querySelectorAll('.deleteBtn')
const configBtn = document.querySelectorAll('.configBtn')
const charClass = document.querySelectorAll('.characterClass')


Array.from(charClass).forEach((el) => {
  el.addEventListener('click', () => {
    const input = document.querySelector('.classInput')
    input.value = el.innerText
  })
})

Array.from(deleteBtn).forEach((el)=>{
  el.addEventListener('click', deleteCharacater)
})

Array.from(configBtn).forEach((el) => {
  el.addEventListener('click', getConfig)
})

async function deleteCharacater(){
    const fName = this.parentNode.childNodes[3].innerText
    const lName = this.parentNode.childNodes[5].innerText
    try{
        const response = await fetch('characters/deleteCharacter', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'fName': fName,
              'lName': lName
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


