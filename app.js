function calculateBMR() {
    // Obter os dados do formulário
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var age = parseInt(document.getElementById("age").value);
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);

    // Calcular a taxa metabólica basal (BMR)
    var bmr;
    if (gender === "male") {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }



    // Obter os dados de nível de atividade
    var activityLevel = parseFloat(document.getElementById("activity").value);

    // Calcular o total de calorias necessárias por dia
    var totalCalories = bmr * activityLevel;


    // Exibir o resultado na página

    document.getElementById("result").innerHTML = "A sua taxa de metabolismo basal gira em torno de  " + bmr.toFixed(2) + " calorias por dia.";

    document.getElementById("result").innerHTML += "<br><br>Nesse cálculo, não estão inclusos seu gasto calórico com atividades físicas..";
    document.getElementById("totalResult").innerHTML = "Para manter o seu peso, você precisa consumir " + totalCalories.toFixed(2) + " calorias por dia.";

}

