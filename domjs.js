const mes_donnees=require("./mydata.js");

console.log(mes_donnees);
const operateurs=['DESTINATEUR','EXPEDITEUR'];
const devises=['USD','CDF'];
const options=["zando","kintambo","bandal","masina","limete"];
let cash_cdf=1000000;
let cash_usd=1000000000000;
const pourcentage=2;
function comission(somme){
    const result=somme*pourcentage/100;
    return result
}

function verif_solde(_somme,_devise){
     if (_devise===devise_usd.value){
        if(_somme>cash_usd){
            return false;
        }
        return true;
     }
     if (_devise===devise_cdf.value){
        if(_somme>cash_cdf){
            return false;
        }
        return true;
     }
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
operateurs.forEach(operateur=>{
    const label_source=document.createElement("label");
    div_operateur.appendChild(label_source);
    label_source.textContent= operateur;
    label_source.setAttribute("id","operateur");
    const select_source=document.createElement("select");
    select_source.setAttribute("name",operateur);
    select_source.setAttribute("id",operateur);
    options.forEach(option=>{
        const option_select=document.createElement("option");
        option_select.setAttribute("value",option);
        option_select.textContent=option;        
        select_source.appendChild(option_select);
    })
    div_operateur.appendChild(select_source);
})
form.appendChild(div_operateur);
const bottom=document.createElement("input");
bottom.setAttribute("type","submit");
bottom.setAttribute("value","valider");
form.appendChild(bottom);
form.addEventListener("submit",function(event){
    event.preventDefault();
    let somme= input_somme.value;
    alert(comission(somme));
    
})









