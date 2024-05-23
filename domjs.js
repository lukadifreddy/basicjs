const operateurs=['DESTINATEUR','EXPEDITEUR'];



const devises=['USD','CDF'];
const options=["zando","kintambo","bandal","masina","limete"];
let cash_cdf=1000000000000;
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
// const devise_cdf=document.createElement("input");
// devise_cdf.setAttribute("type","radio");
// devise_cdf.setAttribute("id","devise_cdf");
// devise_cdf.setAttribute("name","devise");
// devise_cdf.setAttribute("value","franc congolais");
// form.appendChild(devise_cdf);
// const label_cdf=document.createElement("label");
// label_cdf.setAttribute("for","devise_cdf");
// label_cdf.textContent="CDF";
// form.appendChild(label_cdf);
// const devise_usd=document.createElement("input");
// devise_usd.setAttribute("type","radio");
// devise_usd.setAttribute("id","devise_usd");
// devise_usd.setAttribute("name","devise");
// devise_usd.setAttribute("value","dollars");
// form.appendChild(devise_usd);
// const label_usd=document.createElement("label");
// label_usd.setAttribute("for","devise_usd");
// label_usd.textContent="USD";
// form.appendChild(label_usd); 
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
// const label_source=document.createElement("label");
// form.appendChild(label_source);
// label_source.textContent="Expediteur";
// label_source.setAttribute("id","ex");
// const select_source=document.createElement("select");
// select_source.setAttribute("name","source");
// select_source.setAttribute("id","source");
// form.appendChild(select_source);
// const label_desti=document.createElement("label");
// label_desti.setAttribute("for","desti");
// label_desti.textContent="destinateur";
// label_desti.setAttribute("id","des")
// form.appendChild(label_desti);
// const select_desti=document.createElement("select");
// select_desti.setAttribute("name","desti");
// select_desti.setAttribute("id","desti");
// form.appendChild(select_desti);
const div_operateur=document.createElement("div");
div_operateur.setAttribute("id","operateur");
operateurs.forEach(operateur=>{
    const label_source=document.createElement("label");
    form.appendChild(label_source);
    label_source.textContent= operateur;
    label_source.setAttribute("id","operateur");
    const select_source=document.createElement("select");
    select_source.setAttribute("name",operateur);
    select_source.setAttribute("id",operateur);
    form.appendChild(select_source);

})
form.appendChild(div_operateur);
const bottom=document.createElement("input");
bottom.setAttribute("type","submit");
bottom.setAttribute("value","valider");
form.appendChild(bottom);
for (let i=0;i<options.length;i++){
    const option=document.createElement("option");
    option.setAttribute("value",options[i]);
    option.textContent=options[i];
    const option_desti=document.createElement("option");
    option_desti.setAttribute("value",options[i]);
    option_desti.textContent=options[i];
    select_source.appendChild(option);
    select_desti.appendChild(option_desti);
}
form.addEventListener("submit",function(event){
    event.preventDefault();
    let somme= input_somme.value;
    alert(comission(somme));
    
})









