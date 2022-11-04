const selectionneur1 = document.getElementById('selectionneur1');
selectionneur1.addEventListener('click', function (){
    document.getElementById("selectionneur2").style.backgroundImage = "none";
    document.getElementById("selectionneur1").style.backgroundImage = "url('./img/selectionNosOffres.svg')";
    document.getElementById("selectionneur4").style.backgroundImage = "none";
    document.getElementById("selectionneur3").style.backgroundImage = "none";
    document.getElementById("titreNosOffres").innerHTML = "Application mobile";
    document.getElementById("paragrapheNosOffres").innerHTML = "Vous souhaitez développer une application mobile ? Aucun problème pour notre équipe expérimenter, nos développeurs ayant déjà travailler sur des projets comme l’application Sofanmedia, ils n’auront aucun problèmes pour faire une application mobile qui correspond à vos attentes.\n";
});