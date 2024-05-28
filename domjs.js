let etat=true;
let index_item;
const operateurs=['DESTINATEUR','EXPEDITEUR'];
const devises=['USD','CDF'];
const options=["zando","kintambo","bandal","masina","limete"];
let cash_cdf=1000000;
let cash_usd=1000000000000;
const my_data=[{
    'id':1,
    'somme':10000,
    'devise':"CDF",
    'destinateur':"zando",
    'expediteur':"kintambo",
},{
    'id':2,
    'somme':10000,
    'devise':"USD",
    'destinateur':"masina",
    'expediteur':"limete",
},{
    'id':3,
    'somme':10000,
    'devise':"USD",
    'destinateur':"bandal",
    'expediteur':"kintambo",
}];
const pourcentage=2;
function comission(somme){
    const result=somme*pourcentage/100;
    return result
}

function verif_solde(_somme,_devise){
     if (_devise===devises[0]){
        if(_somme>cash_usd){
            alert("nous n'avons pas assez de solde ");
            return false;
        }
        
        return revenus(comission(_somme),_devise);
     }
     if (_devise===devises[1]){
        if(_somme>cash_cdf){
            alert("nous n'avons pas assez de solde ");
            return false;
        }
        return revenus(comission(_somme),_devise);
     }
}
function revenus (comission,devise){
    if (devise===devises[0]){
         cash_usd+=comission;
         affichage_usd.textContent="cash_dollars:"+cash_usd;
         return  cash_usd
    }
    if (devise===devises[1]){
         cash_cdf+=comission;
         affichage_cdf.textContent="cash_franc_congolais:"+cash_cdf;
         return  cash_cdf
    }
     return null; 
};
function ajouts_donnees(somme,devise,destinateur,expediteur){
    if(!verif_solde(somme,devise)){
        return alert('operation annuler!!!!')
    }
    let max_id=my_data.reduce(
        function (max,donnee){
            return (donnee.id>max?donnee.id:max);
        },0
    )    
    my_data.push({ 
    'id':max_id+1,
    'somme':somme,
    'devise':devise,
    'destinateur':destinateur,
    'expediteur':expediteur,
    })
    recuper_nouveau_donnee(max_id+1)
    return alert('operation reussir!!!!');
};
function recuper_nouveau_donnee(id){
    const nouveau_donnee=my_data.findLast(function(donnee){
        return donnee.id==id;
    })
    const div_item=document.createElement("div");
    div_item.setAttribute("class","item");
    div_item.setAttribute("id",nouveau_donnee.id);
    const titre_item=document.createElement("h3");
    titre_item.setAttribute("class","titre_item");
    titre_item.textContent="Exp:"+nouveau_donnee.expediteur;
    div_item.appendChild(titre_item);
    const titre_item_desti=document.createElement("h3");
    titre_item_desti.setAttribute ("class","titre_item");
    titre_item_desti.textContent="Dest:"+nouveau_donnee.destinateur;
    div_item.appendChild(titre_item_desti);
    const titre_item_somme=document.createElement("h4");
    titre_item_somme.setAttribute("class","titre_item");
    titre_item_somme.textContent="Somme:"+nouveau_donnee.somme;
    div_item.appendChild(titre_item_somme);
    div_box_list.appendChild(div_item);

    const input_update=document.createElement("button")
    input_update.setAttribute("class","update");
    input_update.setAttribute("id","update");
    input_update.addEventListener("click",recup_item);
    input_update.textContent="Modifier"
    const input_delete=document.createElement("button");
    input_delete.setAttribute("class","delete");
    input_delete.setAttribute("id","delete");
    input_delete.addEventListener("click",delete_item);
    input_delete.textContent="Supprimer";
     
    div_item.appendChild(input_update);
    div_item.appendChild(input_delete);

}
function recup_item(event){
    const up_item=event.target.parentNode;
    const recup=my_data.find(function(item){
        
        return item.id==up_item.id;

    })
    const mon_input_somme=document.getElementById("somme");
    mon_input_somme.value=recup.somme;
   // la recuperation de la devise
   div_devises.querySelectorAll("input[type=radio]").forEach(function(radio){
    if (radio.value == recup.devise){
         radio.checked=true;
        }
    }) 

   //la recuperation expediteur
    select_destin.value=recup.destinateur;
    select_exped.value=recup.expediteur;
    index_item=recup.id;    
    etat=false;    
    return etat;

    
}
// la modification de l'item
function update(){
    
    const index=my_data.findIndex(function (item){
        return item.id==index_item;
    })
    let _somme= input_somme.value;
    let _devise;
    div_devises.querySelectorAll("input[type=radio]").forEach(function(radio){
        if (radio.checked){
             _devise=radio.value;
        }
    })
    let _destinateur=select_destin.value; 
    let _expediteur=select_exped.value;
    my_data[index]={"id":index_item, "somme":_somme, "devise":_devise, "destinateur":_destinateur, "expediteur":_expediteur};
    console.log(my_data);
    div_box_list.replaceChildren();
    etat=true;
    my_data.forEach(function(donnee){
        const div_item=document.createElement("div");
        div_item.setAttribute("class","item");
        div_item.setAttribute("id",donnee.id);
        const titre_item=document.createElement("h3");
        titre_item.setAttribute("class","titre_item");
        titre_item.textContent="Exp:"+donnee.expediteur;
        div_item.appendChild(titre_item);
        const titre_item_desti=document.createElement("h3");
        titre_item_desti.setAttribute ("class","titre_item");
        titre_item_desti.textContent="Dest:"+donnee.destinateur;
        div_item.appendChild(titre_item_desti);
        const titre_item_somme=document.createElement("h4");
        titre_item_somme.setAttribute("class","titre_item");
        titre_item_somme.textContent="Somme:"+donnee.somme+" "+donnee.devise;
        const input_update=document.createElement("button")
        input_update.setAttribute("class","update");
        input_update.setAttribute("id","update");
        input_update.addEventListener("click",recup_item);
        input_update.textContent="Modifier"
        const input_delete=document.createElement("button");
        input_delete.setAttribute("class","delete");
        input_delete.setAttribute("id","delete");
        input_delete.addEventListener("click",delete_item);
        input_delete.textContent="Supprimer";
        div_item.appendChild(titre_item_somme);
        div_item.appendChild(input_update);
        div_item.appendChild(input_delete);
        div_box_list.appendChild(div_item);      
    
    })
    alert("modification effectuer avec succès par freddy et Monsieur belamard");
    return etat
}
//
function recup_dev(){
    
    let _somme= input_somme.value;
    let _devise;
    div_devises.querySelectorAll("input[type=radio]").forEach(function(radio){
        if (radio.checked){
             _devise=radio.value;
        }
    })
    let _destinateur=select_destin.value; 
    let _expediteur=select_exped.value;
    
    
    ajouts_donnees(_somme, _devise, _destinateur, _expediteur);
    form.reset;
        
}
//    
function intermediare(event){    
    event.preventDefault(); 
    if (etat){  
           
       recup_dev();        
    }else{
         
        update();
    }


} 
// la suppression de l'item
function delete_item(event){
    const del_item= event.target.parentNode;
    const index=my_data.findIndex(function(item){
        return item.id==del_item.id;
    });
    my_data.splice(index,1);
    console.log(my_data);
    return del_item.remove();
}



const affichage_usd=document.getElementById("dollars");
affichage_usd.textContent+=cash_usd
const affichage_cdf=document.getElementById("franc_congolais");
affichage_cdf.textContent+=cash_cdf
const header=document.createElement("div");
header.setAttribute("class","header");
document.body.appendChild(header);
const titre=document.createElement("h1");
titre.textContent="Transfert D'agence";
header.appendChild(titre);
const form=document.createElement("form");
const divparent=document.createElement("div");
document.body.appendChild(divparent);
divparent.setAttribute("class","container");
const divform=document.createElement("div");
divparent.appendChild(divform);
divform.setAttribute("class","form");
divform.appendChild(form);
const input_somme=document.createElement("input");
input_somme.setAttribute("class","somme");
input_somme.setAttribute("id","somme");
input_somme.setAttribute("type","number");
input_somme.setAttribute("name","somme");
input_somme.setAttribute("required",true);
input_somme.setAttribute("placeholder","ex:100$");
form.appendChild(input_somme);
const div_devises=document.createElement("div");
div_devises.setAttribute("id","devises");
devises.forEach(devise => {
    const label_devises=document.createElement("label");
    label_devises.setAttribute("for",devise);
    label_devises.textContent=devise;
    div_devises.appendChild(label_devises);
    const input_devise=document.createElement("input");
    input_devise.setAttribute("type","radio");
    input_devise.setAttribute("id",devise);
    input_devise.setAttribute("name","devise");
    input_devise.setAttribute("value",devise);
    div_devises.appendChild(input_devise);

}); 
form.appendChild(div_devises);  
const div_operateur=document.createElement("div");
div_operateur.setAttribute("id","operateur");
const label_destin=document.createElement("label");
    div_operateur.appendChild(label_destin);
    label_destin.textContent= operateurs[0];
    label_destin.setAttribute("id","destin");
    const select_destin=document.createElement("select");
    select_destin.setAttribute("name",operateurs[0]);
    select_destin.setAttribute("id",operateurs[0]);
    options.forEach(option=>{
        const option_select=document.createElement("option");
        option_select.setAttribute("value",option);
        option_select.textContent=option;        
        select_destin.appendChild(option_select);
    })
    div_operateur.appendChild(select_destin);

    const label_exped=document.createElement("label");
    div_operateur.appendChild(label_exped);
    label_exped.textContent= operateurs[1];
    label_exped.setAttribute("id","exped");
    const select_exped=document.createElement("select");
    select_exped.setAttribute("name",operateurs[1]);
    select_exped.setAttribute("id",operateurs[1]);
    options.forEach(option=>{
        const option_select=document.createElement("option");
        option_select.setAttribute("value",option);
        option_select.textContent=option;        
        select_exped.appendChild(option_select);
    })
    div_operateur.appendChild(select_exped);

form.appendChild(div_operateur);
const bottom=document.createElement("input");
bottom.setAttribute("type","submit");
bottom.setAttribute("value","valider");
form.appendChild(bottom);
form.addEventListener("submit",intermediare);





const div_list=document.createElement("div");
div_list.setAttribute("class","list");
divparent.appendChild(div_list);
const titre_list=document.createElement("h2");
titre_list.setAttribute("class","titre_list");
titre_list.textContent="list-operating";
div_list.appendChild(titre_list);
const div_box_list=document.createElement("div");
div_box_list.setAttribute("class","box_list");
my_data.forEach(function(donnee){
    const div_item=document.createElement("div");
    div_item.setAttribute("class","item");
    div_item.setAttribute("id",donnee.id);
    const titre_item=document.createElement("h3");
    titre_item.setAttribute("class","titre_item");
    titre_item.textContent="Exp:"+donnee.expediteur;
    div_item.appendChild(titre_item);
    const titre_item_desti=document.createElement("h3");
    titre_item_desti.setAttribute ("class","titre_item");
    titre_item_desti.textContent="Dest:"+donnee.destinateur;
    div_item.appendChild(titre_item_desti);
    const titre_item_somme=document.createElement("h4");
    titre_item_somme.setAttribute("class","titre_item");
    titre_item_somme.textContent="Somme:"+donnee.somme+" "+donnee.devise;
    const input_update=document.createElement("button")
    input_update.setAttribute("class","update");
    input_update.setAttribute("id","update");
    input_update.addEventListener("click",recup_item);
    input_update.textContent="Modifier"
    const input_delete=document.createElement("button");
    input_delete.setAttribute("class","delete");
    input_delete.setAttribute("id","delete");
    input_delete.addEventListener("click",delete_item);
    input_delete.textContent="Supprimer";
    div_item.appendChild(titre_item_somme);
    div_item.appendChild(input_update);
    div_item.appendChild(input_delete);
    div_box_list.appendChild(div_item);
    

})
div_list.appendChild(div_box_list);











