const persons=[
    {name:'John Roberts',age:40},
    {name:'Greg Roberts',age:38}
]

function fetchPersons(){
    setTimeout(()=>{
        persons.forEach(person=>{
            console.log('person is..',person);
        });
    },2000);
}

function addPerson(person){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        persons.push(person);
        const error=true;
        //const error=false;
        if(error){
            reject("Something went wrong");
        }else{
            resolve();
        }
    },4000);
   });
}


addPerson({name:'Tim Roberts',age:45}).then(fetchPersons).catch((err)=>{
    console.log(err);
    //throw new Error(err);
});