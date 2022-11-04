const selectionneur4 = document.getElementById('selectionneur4');
selectionneur4.addEventListener('click', function (){
    document.getElementById("selectionneur2").style.backgroundImage = "none";
    document.getElementById("selectionneur1").style.backgroundImage = "none";
    document.getElementById("selectionneur4").style.backgroundImage = "url('./img/selectionNosOffres.svg')";
    document.getElementById("selectionneur3").style.backgroundImage = "none";
    document.getElementById("titreNosOffres").innerHTML = "Prototypage";
    document.getElementById("paragrapheNosOffres").innerHTML = "Vous avez une idée de projet informatique mais vous ne savez pas comment la mettre en place ? Appelez nous que vous ayez besoin d’avis de la part de professionnel, si vous avez besoin d’un prototype pour votre application ou bien de tester diffèrent design, nous sommes là pour vous.\n";
});