function formatHTMLDate(prefix, date){
  if(date){
    return `${prefix} :
    ${date.toLocaleDateString('fr-FR',  { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} -
    ${date.toLocaleTimeString()}
    `
     ;
  }
  return '';
}

function taskToHtml(task){
  return `
    <div class = 'task-title'> ${task.titre} </div>
    <div class = 'task-description'> ${task.description} </div>
    <div class = 'task-date'> ${formatHTMLDate('Début', task.debut)}</div>
    <div class = 'task-date'> ${formatHTMLDate('Fin', task.fin)} </div>
    `;

}

function calendrierToHtml(calendrier){
  return `
    <a href=${calendrier.nom}> <div class = 'agenda-title'> ${calendrier.nom} </div></a>
    `;
}

function build_head(){
  return `
      <head>
        <title>NodeJS</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <style>
body {
  margin: 40px;
}

.box {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
}

.box:nth-child(even) {
  background-color: #ccc;
  color: #000;
}

    .wrapper {
        width: 900px;
        display: grid;
    grid-gap: 10px;
        grid-template-columns: repeat(3, 300px);
    }      }
       </style>
</head>
  `;
}

function build_body(planning){
const planingHTML = planning.taches.reduce((result,task) => result + `<div class="box">${taskToHtml(task)}</div>`,'');
const content = `
<div class="wrapper">
  ${planingHTML}
</div>
`;
    return `
 <body>
 ${content}
	</div>
</body>
    `;
}

function build_body_tache(tache){
const tacheHTML = `<div class="box">${taskToHtml(tache)}</div>`
const content = `
<div class="wrapper">
  ${tacheHTML}
</div>
`;
    return `
 <body>
 ${content}
	</div>
</body>
    `;
}

function build_body_liste(list_planning){
const planingHTML = list_planning.reduce((result,planning) => result + `<div class="box">${calendrierToHtml(planning)}</div>`,'');
const content = `
<div class="wrapper">
  ${planingHTML}
</div>
`;
    return `
 <body>
 ${content}
	</div>
</body>
    `;
}

function build_body_404(unknown_path){
const content = `
  <div class="notFound"> Page not found : <strong>${unknown_path}</strong> does not exists</div>
  <div class="home_ref"> <a href='/'>Go home...</a></div>
`;
    return `
 <body>
 ${content}
	</div>
</body>
    `;
}

function build_body_error(error){
const content = `
  <div class="error"> Error : <strong>${error}</strong></div>
  <div class="home_ref"> <a href='/'>Go home...</a></div>
`;
    return `
 <body>
 ${content}
	</div>
</body>
    `;
}

exports.build_page_tache = (tache)=>{
  return `
    <!DOCTYPE html>
    <html>
    ${build_head()}
    ${build_body_tache(tache)}
    </html>
  `;
}

exports.build_page_planning = (planning)=>{
  return `
    <!DOCTYPE html>
    <html>
    ${build_head()}
    ${build_body(planning)}
    </html>
  `;
}

exports.build_page_liste_planning = (list_planning)=>{
  return `
    <!DOCTYPE html>
    <html>
    ${build_head()}
    ${build_body_liste(list_planning)}
    </html>
  `;
}

exports.build_page_not_found = (unknown_path)=>{
  return `
    <!DOCTYPE html>
    <html>
    ${build_head()}
    ${build_body_404(unknown_path)}
    </html>
  `;

}

exports.build_page_error = (error)=>{
  return `
    <!DOCTYPE html>
    <html>
    ${build_head()}
    ${build_body_error(error)}
    </html>
  `;

}
