const deleteButton = document.querySelector('.deleteButton')
const statsButton = document.querySelector('.getStatsButton')

deleteButton.addEventListener('click', deleteCharacater)
statsButton.addEventListener('click', addStats)

async function deleteCharacater(){
    const fName = this.parentNode.childNodes[1].innerText
    const lName = this.parentNode.childNodes[3].innerText
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

async function addStats() {
  const cheese = 'eggman'
  try {
    const response = await fetch('getStats', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        stats
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (error) {
    console.log(err)
  }
}