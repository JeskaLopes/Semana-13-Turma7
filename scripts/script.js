const nomesNoRole = [
    "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"
];

const nomeDigitado = document.querySelector('#nome');
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const valor = nomeDigitado.value;
    const verificacao =  nomesNoRole.includes(nomeDigitado.value);


    //if sempre entra no true caso o valor resultado seja true;
    if(verificacao){   
        return (
        document.getElementById("nome").classList.add("is-valid"),
        alert('Tava sim')
        //alert('Opa tá sim')
        )
        
        
    }
    else{
        return(
            alert('Opa não tá')
        )
        
    }

    console.log({valor});
    console.log({verificacao});
});


