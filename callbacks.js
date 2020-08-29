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

function addPerson(person,callback){
    setTimeout(()=>{
        persons.push(person);
        callback();
    },4000);
}


addPerson({name:'Tim Roberts',age:45},fetchPersons);