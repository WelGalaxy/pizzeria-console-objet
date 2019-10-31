class Pizza{
  // id = 0;
  // code ='';
  // libelle ='';
  // prix ='';

  constructor(leId,leCode,leLibelle,lePrix){
    this.id = leId;
    this.code = leCode;
    this.libelle = leLibelle;
    this.prix = lePrix;

  }
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

printMenu();


rl.question('Faites un choix ', (choix) => {
  if(choix == 1){
    console.log('Liste des pizzas');
    printMenu();
  }
  if(choix == 2){
    console.log('Ajout d’une nouvelle pizza');
    printMenu();
  }
  if(choix == 3){
    console.log('Mise à jour d\'une pizza');
    printMenu();
  }
  if(choix == 4){
    console.log('Suppression d\'une pizza');
    printMenu();
  }
  if(choix == 99){
    console.log('Aurevoir');
    process.exit(1);
  }
  else{
    console.log('Merci d\'utiliser une valeur valide');
    printMenu();
  }
});


function printMenu(){
  console.log('***** Pizzeria Administration *****');
  console.log('1. Lister les pizzas ');
  console.log('2. Ajouter une nouvelle pizza ');
  console.log('3. Mettre à jour une pizza ');
  console.log('4. Supprimer une pizza ');
  console.log('99. Sortir ');
}