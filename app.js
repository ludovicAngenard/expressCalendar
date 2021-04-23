var express = require('express');
var path = require('path');

const {Tache, Calendrier} = require('./public/javascripts/calendrier');
const html = require('./public/javascripts/calendrierHtml');
const http = require('http');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


const planningArthur = new Calendrier('Arthur');
const planningBernard = new Calendrier('Bernard');

// Ajout des tâches
planningArthur.addTask({titre:'Kick-Off', description:'Démarrage projet', debut: new Date(Date.UTC(2020, 09, 01, 06, 30, 0)),fin: new Date(Date.UTC(2020, 09, 01, 08, 30, 0))});
planningArthur.addTask({titre:'TN Meeting', description:'Point technique', debut: new Date(Date.UTC(2020, 09, 06, 12, 00, 0))}) ;
planningArthur.addTask({titre:'CRA', description:'Weekly report', debut: new Date(Date.UTC(2020, 09, 09, 15, 00, 0))}) ;
planningArthur.addTask({titre:'Off', description:'Congés', debut: new Date(Date.UTC(2020, 09, 07, 06, 30, 0)),fin : new Date(Date.UTC(2020, 09, 08, 19, 00, 0))}) ;

planningBernard.addTask({titre:'Information', description:'Information hebdomadaire', debut: new Date(Date.UTC(2020, 09, 02, 08, 00, 0)),fin: new Date(Date.UTC(2020, 09, 02, 08, 30, 0))});
planningBernard.addTask({titre:'Copil', description:'Réunio de copilotage', debut: new Date(Date.UTC(2020, 09, 04, 14, 00, 0))}) ;

// Tableau contenant les planning de chaque personne
let tabPlannings = new Array(planningArthur,planningBernard);

function trouverPlanning(nom){
  return tabPlannings.find(p => p.nom.toUpperCase() == nom.toUpperCase());
}

function trouverTaches(planning, nom){
  return planning.taches.find(t => t.titre.toUpperCase() == nom.toUpperCase());
}

var app = express();

const port = 3000;

app.get('/', function(req,res){
  res.send('hello world ! ');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
