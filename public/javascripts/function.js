const {Tache, Calendrier} = require('./calendrier');
const planningArthur = new Calendrier('Arthur');
const planningBernard = new Calendrier('Bernard');

planningArthur.addTask({titre:'Kick-Off', description:'Démarrage projet', debut: new Date(Date.UTC(2020, 09, 01, 06, 30, 0)),fin: new Date(Date.UTC(2020, 09, 01, 08, 30, 0))});
planningArthur.addTask({titre:'TN Meeting', description:'Point technique', debut: new Date(Date.UTC(2020, 09, 06, 12, 00, 0))}) ;
planningArthur.addTask({titre:'CRA', description:'Weekly report', debut: new Date(Date.UTC(2020, 09, 09, 15, 00, 0))}) ;
planningArthur.addTask({titre:'Off', description:'Congés', debut: new Date(Date.UTC(2020, 09, 07, 06, 30, 0)),fin : new Date(Date.UTC(2020, 09, 08, 19, 00, 0))}) ;

planningBernard.addTask({titre:'Information', description:'Information hebdomadaire', debut: new Date(Date.UTC(2020, 09, 02, 08, 00, 0)),fin: new Date(Date.UTC(2020, 09, 02, 08, 30, 0))});
planningBernard.addTask({titre:'Copil', description:'Réunio de copilotage', debut: new Date(Date.UTC(2020, 09, 04, 14, 00, 0))}) ;

exports.tabPlannings = new Array(planningArthur,planningBernard);

exports.trouverPlanning = (nom) => {
  return tabPlannings.find(p => p.nom.toUpperCase() == nom.toUpperCase());
}

exports.trouverTaches = (planning, nom) => {
  return planning.taches.find(t => t.titre.toUpperCase() == nom.toUpperCase());
}
exports.refactorArray = (array) =>{
  var contenu = [];
  array.forEach(element => {
    contenu.push(element.nom);
  });
  return contenu;
}

// function readItem(urlSplit, res){
//   var contenu;

//   if(urlSplit[1] == "agendas" && urlSplit.length == 2 || urlSplit[0] == "" && urlSplit[1] == "" && !urlSplit[2]){ // Localhost:9000 OU Localhost:9000/agendas
//     checkStatus(200, res)
//     contenu = refactorArray(tabPlannings) ; //Retourne le menu

//   } else if (  trouverPlanning(urlSplit[2]) && !urlSplit[3]){ // Localhost:9000/agendas/NomDuPlanning
//     checkStatus(200, res)
//     contenu = trouverPlanning(urlSplit[2]); //Retourne la liste des taches avec le nom de la personne

//   } else if ( trouverPlanning(urlSplit[2]) && urlSplit[3] == "taches" && !urlSplit[4]){ // Localhost:9000/agendas/NomDuPlanning/taches
//     checkStatus(200, res)
//     contenu = trouverPlanning(urlSplit[2]).taches ; //Retourne la liste des taches seule

//   } else if ( trouverPlanning(urlSplit[2]) && trouverTaches(trouverPlanning(urlSplit[2]), urlSplit[3])  && !urlSplit[4] ) { // Localhost:9000/agendas/NomDuPlanning/NomTache
//     checkStatus(200, res)
//     contenu = trouverTaches(trouverPlanning(urlSplit[2]), urlSplit[3]); // Retourne une tache précise

//   } else { // Localhost:9000/Pas/Le/Bon/Pathname
//     checkStatus(404, res)
//   }
//   return JSON.stringify(contenu)
// }