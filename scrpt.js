function verificar() {

    var o1 = document.getElementById('prio');
    var o2 = document.getElementById('sego');
    var res = document.getElementById('res');
    var img = document.createElement ('img');
    var p1 = document.getElementById('pergunta');
    var r1 = document.getElementById('resposta');
    var resSel = document.getElementById('resSel');


    if (o1.value == o2.value) {
        window.alert ('AS RESPOSTAS ESTÃO IGUAIS');
    } else {
        p1.style.display = 'none';
        r1.style.display = 'block';

        var random_boolean = Math.random() < 0.5;
        if(random_boolean) {
            resSel.innerHTML = o1.value;
        } else {
            resSel.innerHTML = o2.value;
        }
    }
    
}