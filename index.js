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
   
    };
    
    

formDecripto.addEventListener('submit', function(e) {
        e.preventDefault();
})

function Decripto(){
    if (entradaCript === ''){
        let descriptar = inputDecripto.value.toLowerCase()
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

        let texto = document.getElementById('entradaCript').innerHTML = descriptar

    }else{
        entradaCript = '';
    }


    
};