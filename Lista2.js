function exe1(){
    //Recurar os dados
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
    var nota4 = Number(document.getElementById("nota4").value);

    var media = (nota1 + nota2 + nota3 + nota4)/4
    if (media >= 7){
        alert ("Aprovado com media " + media)
        console.log ("Aprovado com media " + media)
    }
    else{
        alert ("Reprovado com media " + media)
        console.log ("Aprovado com media " + media)
    }
}

function exe2(){
    //Recurar os dados
    var not1 = Number(document.getElementById("not1").value);
    var not2 = Number(document.getElementById("not2").value);

    var media = (not1 + not2)/2

    
    if (media >= 7) {
    alert ("O aluno foi aprovado com media " + media)
    }
    else if ((media >= 3) && (media < 7)) { 
        alert ("Sera necessario um exame, a media foi " + media)
    }
    else {
        alert ("Reprovado com media " + media)
    }   
}

function exe3(){
    //Recurar os dados
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    
    if (num1<num2) {
    alert ("O menor número é o " + num1)
    }
    else if (num1>num2) {
        alert ("O menor número é o " + num2)
    }  
    else {
        alert ("Os números são iguais")
    }  
}
function exe4(){
    //Recurar os dados
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var n3 = Number(document.getElementById("n3").value);
    
    if ((n1<=n2) && (n2<n3)) {
    alert ("O maior número é o " + n3)
    }
     else if ((n2<=n1) && (n1<n3)){
        alert ("O maior número é o " + n3)
    } 
    else if ((n1<=n3) && (n3<n2)) {
    alert ("O maior número é o " + n2)
    }
    else if ((n3<=n1)&&(n1<n2)){
        alert ("O maior número é o " + n2)
    }
    else if ((n2<=n3) && (n3<n1)){
        alert ("O maior número é o " + n1)
    }      
    else if ((n3<=n2)&&(n2<n1)){
        alert ("O maior número é o " + n1)
    }    
    else {
        alert ("Não tem número maior")
    }
}
function exe5(){
    //Recurar os dados
    var nu1 = Number(document.getElementById("nu1").value);
    var nu2 = Number(document.getElementById("nu2").value);
    var expr = document.getElementById("expr").value;

    media = (nu1+nu2)/2
    if (nu1>nu2)
    dif = nu1 - nu2
    else
    dif = nu2 - nu1
    prod = nu1*nu2
    div = nu1/nu2

    switch (expr) {
        case '1':
        alert ("A média dos números é " + media)
             break;
        case '2':
        alert ("A diferença do maior entre o menor é " + dif)
            break;
        case '3':
        alert ("O produto dos números é "+ prod)
              break;
        case '4':
        alert ("A divisão do primeiro número pelo segundo é " + div)
            break;
        default:
            alert ("Não tem essa opçao")
    }
}

function exe6(){
    //Recurar os dados
    var nume1 = Number(document.getElementById("nume1").value);
    var nume2 = Number(document.getElementById("nume2").value);
    var expre = document.getElementById("expre").value;

    ele = Math.pow(nume1, nume2)
    raiz1= Math.sqrt(nume1)
    raiz2= Math.sqrt(nume2)
    raizc1 = Math.cbrt(nume1)
    raizc2 = Math.cbrt(nume2)

    switch (expre) {
        case '1':
        alert ("O primeiro número elevado ao segundo é " + ele)
             break;
        case '2':
        alert ("A raiz quadrada do primeiro número é " + raiz1 + 
        "\n e a raiz do segundo é " + raiz2 )
             break;
        case '3':
        alert ("A raiz cúbica do primeiro número é " + raizc1 + 
        "\n e a raiz cúbica do segundo é " + raizc2 )
              break;
        default:
            alert ("Não tem essa opçao")
    }
}

function exe7 () {
        var salario = Number(document.getElementById("salario").value);
novo = salario + salario*30/100 

    if (salario > 500){
        alert ("O aumento não serve para sua catergoria")
    }
    else{
        alert ("Seu salário passa a ser " + novo)
    }
}