class Tache{
  static s_id = 0;

  #id ; // = ++s_id ;
  constructor(titre = 'Event', description = '', debut = new Date(), fin){
    if(fin === undefined){
      fin = new Date(debut.getTime() + 1 * 60 * 60 * 1000 ) ; // date début + 1h
    }
    this.titre = titre;
    this.debut = debut;
    this.fin = fin;
    this.description = description;
    this.categories = new Set() ;
    this.#id = ++Tache.s_id ;
  }
  get unique_id(){return this.#id ;}

  addCategory(categorie){
    categories.add(categorie) ;
  }
  removeCategory(categorie){
    this.categories.forEach((cat) =>{
      if(cat == categorie){
        this.categories.delete(categorie) ;
      }
    });
  }
  updateCategory(old_categorie,new_categorie){
    this.categories.forEach((cat) =>{
      if(cat == old_categorie){
        this.categories.delete(old_categorie) ;
        this.categories.add(new_categorie) ;
      }
    });
  }
};

class Calendrier{
  constructor(nom){
    this.nom = nom ;
    this.taches = new Array() ;
  }

  addTask(tache){
    if(tache instanceof Tache){
      this.taches.push(tache);
    }
    else{
      const nouvelle_tache = new Tache(
        tache.titre,
        tache.description,
        tache.debut,
        tache.fin
      );
      if(tache.categories){
        tache.categories.forEach(cat => nouvelle_tache.addCategory(cat)) ;
      }
      this.taches.push(nouvelle_tache);
    }
  }

  removeTask(tache){
    if(tache instanceof Tache){
      this.taches.forEach((t,ix) =>{
        if(t.unique_id == tache.unique_id){
          this.taches.splice(ix,1) ;
        }
        else{
          
        }
      } );
    }
    else{
    }
  }
}


module.exports = {
  Tache,
  Calendrier
};
