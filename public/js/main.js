const deleteButton = document.querySelector('.deleteButton')

deleteButton.addEventListener('click', deleteCharacater)

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