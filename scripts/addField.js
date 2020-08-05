//pega o botao "#add-time" executa um evento para clonar o campo ".schedule-item"
document.querySelector("#add-time")
.addEventListener('click', cloneField);

//duplica o campo e add na pagina
function cloneField(){
    //duplica o campo .schedule-item
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpa os campos
    const  fields = newFieldsContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    });
    
    //e coloca na pagina
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}