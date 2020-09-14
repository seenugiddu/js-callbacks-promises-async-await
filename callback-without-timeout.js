const persons=[
    {name:'John Roberts',age:40},
    {name:'Greg Roberts',age:38}
]

function fetchPersons(){
    
        persons.forEach(person=>{
            console.log('person is..',person);
        });
}

function addPerson(person,callback){        
        persons.push(person);
        callback();       
}


addPerson({name:'Tim Roberts',age:45},fetchPersons);