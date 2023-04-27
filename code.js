function numero(){

    let n = document.getElementById('numero')
    let resultad = document.getElementById('tabuada')

    if (n.value.length <=0){

        alert('digite um valor valido')
    }else{
        let numero = Number(n.value)
      let resultado 
        let mais = 0

        resultad.innerHTML = ''
        while (mais<=10) {
            
            let item = document.createElement('option')
            resultado = numero * mais
            item.text = `${numero} x ${mais} = ${resultado}`
            resultad.appendChild(item)
            mais ++
        }
    }
}