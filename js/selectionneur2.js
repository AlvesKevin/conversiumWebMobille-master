const selectionneur2 = document.getElementById('selectionneur2');
selectionneur2.addEventListener('click', function (){
    document.getElementById("selectionneur2").style.backgroundImage = "url('./img/selectionNosOffres.svg')";
    document.getElementById("selectionneur1").style.backgroundImage = "none";
    document.getElementById("selectionneur4").style.backgroundImage = "none";
    document.getElementById("selectionneur3").style.backgroundImage = "none";
    document.getElementById("titreNosOffres").innerHTML = "Logiciel";
    document.getElementById("paragrapheNosOffres").innerHTML = "Nos équipes de développeur ayant déjà travaillé antérieurement sur des projets logiciels, ils n’auront aucun mal à vous accompagner. Nous pouvons couvrir tout type de domaine et cela sera un plaisir de travailler avec vous sur un nouveau projet.\n";
});