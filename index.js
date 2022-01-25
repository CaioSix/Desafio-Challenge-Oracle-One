const formCript = document.getElementById('formCript');
const inputCript = document.getElementById('entradaCript')

const formDecripto = document.getElementById('formDecripto')
const inputDecripto = document.getElementById('entradaDecripto')


formCript.addEventListener('submit', function(e) {
    e.preventDefault();
    });



    
    function cripto(){

        if( entradaDecripto === ''){
            let palavra = inputCript.value.toLowerCase()
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");

            let texto = document.getElementById('entradaDecripto').innerHTML = palavra
        }else{
            entradaDecripto = ''
        }
        // let palavra = frase.toLowerCase();
        
    
    
    
        // return palavra

        
    };
    
    

    
    
formDecripto.addEventListener('submit', function(e) {
        e.preventDefault();
})

function Decripto(){
    let texto = document.getElementById('entradaCript').innerHTML = inputDecripto.value

    
};