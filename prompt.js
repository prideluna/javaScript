    <script>
   // console.log("----------Itens registrados----------")
//FUNCAO OK
    function retornaStorage(){
        var j;
        let qtde = localStorage.length;
        console.log("----------Itens registrados----------")
        for (j=1; j<=qtde;j++){
            
            let x = localStorage.getItem(j);
            console.log(x)
        }
    }
//FUNCAO OK
    function clearStorage(elemento){
        if (elemento == "clear") {
            localStorage.clear();
        }
    }
//FUNCAO OK
    function addItem(item){
        let i = localStorage.length;
        i++
        localStorage.setItem(i, elemento); 
        var x = localStorage.getItem(i);
        console.log(x)
        //if(item = null){}
        }
    function excluir(item){
        var i;
        let sizeStorage = localStorage.length;
 
        for (i=0; i<sizeStorage; i++){
            //var indiceItem = localStorage.key(i);
            var a = localStorage.getItem(i);
            if (item == a){
                localStorage.removeItem(i)
            }
        }
    }
   
    let isTrue = true;

    while(isTrue == true){
        var elemento = prompt("Adicionar informacao a lista");
        excluir(elemento);
        if (elemento == '' || elemento == null){
            retornaStorage();
            isTrue = false;
            break;

        }else{
            
            addItem(elemento);
            
            if(elemento == "clear"){
                clearStorage(elemento);
                }
            }
       }

    </script> 
