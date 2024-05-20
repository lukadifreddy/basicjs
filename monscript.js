// let age;
// let nom="freddy";
// let etude=false;
const age_valid=18;
// age =prompt("votre age ?");

// if(age>=age_valid){
//     alert("Etudiant")
// }
// else{
//     alert("n'es pas etudiant")
// };


let users=[
    'freddy',
    'belamard',
    'albert',
    'didier',
];

let olds=[
    '20',
    '32',
    '15',
    '18',  
];

for(let i=0; i<users.length;i++){
//    olds [i];
//    alert(users[i]+" age:"+olds[i] );
      if(olds[i]>=age_valid){

        alert(users[i]+" etudiant "+olds[i]+"ans")
      }else{
        alert(users[i]+" n'es pas etudiant "+olds[i]+"ans")
      }
        

      
};