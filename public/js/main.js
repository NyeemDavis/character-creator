const deleteButton = document.querySelectorAll('.deleteButton')
const statsButton = document.querySelectorAll('.statsBtn')
Array.from(deleteButton).forEach((element)=>{
  element.addEventListener('click', deleteCharacater)
})

Array.from(statsButton).forEach((element)=>{
  element.addEventListener('click', getStats)
})

deleteButton.addEventListener('click', deleteCharacater)
statsButton.addEventListener('click', getStats)
// statsButton.addEventListener('click', addStats)

async function deleteCharacater(){
    const fName = this.parentNode.childNodes[1].innerText
    const lName = this.parentNode.childNodes[3].innerText
    console.log(fName, lName)
    try{
        const response = await fetch('deleteCharacater', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'charFNameS': fName,
              'charLNameS': lName
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function getStats() {
  const fName = this.parentNode.childNodes[1].innerText
  const lName = this.parentNode.childNodes[3].innerText
  const charCLass = this.parentNode.childNodes[5].innerText
  try {
    const response = await fetch('stats', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
  
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (error) {
    console.log(error)
  }
}
