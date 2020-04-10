function calcular(tipo, valor) {
    if (tipo === 'acao') {

        if (valor === 'c') {
            //limpa visor
            document.getElementById('visor').value = ' '
        }

        //add operadores ao visor da calculadora 
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('visor').value += valor
        }


        if (valor === '=') {
            let resultado = eval(document.getElementById('visor').value)//eval serve para js transformar string em numero
            document.getElementById('visor').value = resultado
        }
    } else if (tipo === 'valor') {

        document.getElementById('visor').value += valor
    }

}