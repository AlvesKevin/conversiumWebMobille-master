<?php
/*se connecter à la base donnée*/
require_once 'config.php';


/*vérifier si les variables $_POST existe grace à isset([nom_du_post])*/
if(isset($_POST['nomPrenom']) && isset($_POST['nomSociete']) && isset($_POST['budget']) && isset($_POST['cahierCharge']) && isset($_POST['telephone']) && isset($_POST['email']) && isset($_POST['informationProjet']))
{
    /*empecher les utilisateurs d'envoyer du codes nuisibles*/
    $nomPrenom = htmlspecialchars($_POST['nomPrenom']);
    $nomSociete = htmlspecialchars($_POST['nomSociete']);
    $budget = htmlspecialchars($_POST['budget']);
    $cahierCharge = htmlspecialchars($_POST['cahierCharge']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $email = htmlspecialchars($_POST['email']);
    $informationProjet = htmlspecialchars($_POST['informationProjet']);

    $insert = $bdd->prepare('INSERT INTO questionnaire(nomPrenom, nomSociete, budget, cahierCharge, telephone, email, informationProjet) VALUES(:nomPrenom, :nomSociete, :budget, :cahierCharge, :telephone, :email, :informationProjet)');
    $insert->execute(array(
        'nomPrenom' => $nomPrenom,
        'nomSociete' => $nomSociete,
        'budget' =>$budget,
        'cahierCharge' => $cahierCharge,
        'telephone' => $telephone,
        'email' => $email,
        'informationProjet' => $informationProjet
    ));
}

