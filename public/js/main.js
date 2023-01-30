const deleteBtn = document.querySelectorAll('.deleteBtn')

Array.from(deleteBtn).forEach((el)=>{
  el.addEventListener('click', deleteCharacater)
})



deleteBtn.addEventListener('click', deleteCharacater)

async function deleteCharacater(){
    const fName = this.parentNode.childNodes[1].innerText
    const lName = this.parentNode.childNodes[3].innerText
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

