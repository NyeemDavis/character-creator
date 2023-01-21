// const form = document.querySelector('.deleteButton')
// form.addEventListener('submit', applyStats)

async function applyStats() {
     const classValue = document.querySelector('.classes').value
     for(i = 0; i < stats.length; i++) {
          if(classValue == stats.stats[i]){
               alert(`Matches at class ${stats[i]}`)
          }
     }
}


