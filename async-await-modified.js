const persons=[
    {name:'John Roberts',age:40},
    {name:'Greg Roberts',age:38}
]

const fetchPersonse= function fetchPersons(){    
    setTimeout(()=>{
        persons.forEach(person=>{
            console.log('person is..',person);
        });
    },2000);
}

const addPersonPromise=async function addPerson(person){
    return new Promise((resolve,reject)=>{     
         persons.push(person);
         const error=false;
         //const error=false;
         if(error){
             reject("Something went wrong");
         }else{
             resolve();
         }
     },4000);
    };
 

const callAsync=async()=>{
    try{   
        await addPersonPromise({name:'Tim Roberts',age:45});
        fetchPersonse();        
    }catch(err){
        console.log(err);
    }
}
callAsync();