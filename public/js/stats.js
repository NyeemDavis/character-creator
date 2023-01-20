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
const stats = 
   [{warrior: {health: 200, defense: 175, damage: 150, magic: 20}},
    {'Class': {health: 180,'defense': 120,'damage': 125,'magic': 30}},
   {'Support': {'health': 200,'defense': 175,'damage': 150,'magic': 60}},
   {'Mage': {'health': 200,'defense': 140,'damage': 75,'magic': 150}},
   {'Assassin': {'health': 200,'defense': 135,'damage': 165,'magic': 55 }},
   {'Healer': {'health': 200,'defense': 100,'damage': 60,'magic': 100}}]



