<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Questionnaire</title>
    <link rel="stylesheet" href="../css/questionnaire.css">

    <link rel="icon" type="image/jpg" sizes="16x16" href="/img/icone.jpg">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap" rel="stylesheet">
</head>
<header>
    <img class="logoHeader" src="../img/logo.png" alt="logo">
    <nav class="texteNav">
        <div id="texte1">Qui sommes nous ?</div>
        <div id="texte2">Nos offres</div>
        <div id="texte3">Nos créations</div>
    </nav>
    <div class="ligne"></div>
</header>
<body>
<div class="container">
    <div class="containerQuestion">
        <form method="post" action="traitement_questionnaire.php">
        <div id="textePrenom">Nom Prénom</div>
        <input id="NomPrenom" type="text" name="NomPrenom" placeholder="NomPrénom">
        <div id="texteSociete">Nom de la societe ou du projet</div>
        <input id="nomSociete" type="text" name="NomSociete" placeholder="NomSociete">
        <div id="texteBudget">Quel buget ?</div>
        <input id="budget" type="number" name="budget" placeholder="Budget">
        <div id="texteCahierCharge">Vous avez un cahier des charges ?</div>
        <input id="cahierDesCharges" type="checkbox" name="cahierCharge" placeholder="cahierDesCharges">
        <div id="texteTelephone">Téléphone</div>
        <input id="telephone" type="tel" name="telephone" placeholder="telephone">
        <div id="texteMail">Email</div>
        <input id="email" type="email" name="email" placeholder="email">
    </div>
    <div class="containerInfoProjet">
        <div id="texteInfoProjet">Informations sur le projet:</div>
        <textarea id="infoProjet" name="informationProjet" rows="25" cols="50"></textarea>
        <button type="submit">Envoyer</button>
    </div>
    </form>
    <div class="containerTexte">
        <div id="texte1Projet">Parlez nous de vous et de votre projet !</div>
        <div id="texte2Projet">Répondez à ce questionnaire et nous vous recontacterons pour vous aider dans le développement de votre site internet, vos applications et vos applications mobiles. Une fois tout le projet précisé, nos développeurs se chargeront de le rendre réel. </div>
    </div>
</div>
</body>
</html>

<?php
