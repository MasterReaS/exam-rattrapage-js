const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let i = 0; i < tab.length; i++) {
    let prenom = tab[i]
    let poisson = tab[i].indexOf(tab) 
    let longueurPrenom = prenom.length
    console.log(`${prenom} Lenght: ${longueurPrenom} index: ${poisson}`)
  }
  
  
  for (let prenom of tab) {
    let longueurPrenom = prenom.length
    console.log(`${prenom} Lenght: ${longueurPrenom}`)
  }
  
  
  tab.forEach(prenom => {
    let longueurPrenom = prenom.length
    console.log(`${prenom} Lenght: ${longueurPrenom}`)
  })