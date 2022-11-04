const selectionneur3 = document.getElementById('selectionneur3');
selectionneur3.addEventListener('click', function (){
    document.getElementById("selectionneur2").style.backgroundImage = "none";
    document.getElementById("selectionneur1").style.backgroundImage = "none";
    document.getElementById("selectionneur4").style.backgroundImage = "none";
    document.getElementById("selectionneur3").style.backgroundImage = "url('./img/selectionNosOffres.svg')";
    document.getElementById("titreNosOffres").innerHTML = "Site internet";
    document.getElementById("paragrapheNosOffres").innerHTML = "Un nouveau commerce ? Le lancement d’une nouvelle entreprise ? Une LP de collecte ? Nous nous occupons de tout, nos équipes ayant une grande expérience dans le développement web nous pourrons vous accompagner dans votre projet de site internet sans soucis et en étant force de proposition.\n";
});