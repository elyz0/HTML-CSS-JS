'use strict'; 
 
const switcher = document.querySelector('.btn'); /*Referencia ao botão*/ 
 
switcher.addEventListener('click', function(){ 
    document.body.classList.toggle('Pink-theme') /*o método toggle para alternar o elemento para a classe dark-theme. */
  
    var className = document.body.className; 
    if(className == "Trad-theme") { 
        this.textContent = "Pink";
    } 
    else { 
        this.textContent = "Trad";
    } 
    console.log
    
}); 
 
/*Um ouvinte de eventos (event listener) é um código que "escuta" ações do usuário, como cliques, teclas pressionadas, rolagens etc. O manipulador de eventos (event handler) é a função que define o que acontece quando um evento ocorre.*/
 
