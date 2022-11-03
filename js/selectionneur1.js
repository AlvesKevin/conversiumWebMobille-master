const selectionneur1 = document.getElementById('selectionneur1');
selectionneur1.addEventListener('click', function (){
    document.getElementById("selectionneur2").style.backgroundImage = "none";
    document.getElementById("selectionneur1").style.backgroundImage = "url('./img/selectionNosOffres.svg')";
    document.getElementById("selectionneur4").style.backgroundImage = "none";
    document.getElementById("selectionneur3").style.backgroundImage = "none";
    document.getElementById("titreNosOffres").innerHTML = "Application mobile";
    document.getElementsByClassName("paragrapheNosOffres").innerHTML = "Nam quis enim. Quisque ornare dui a tortor. Fusce consequat lacus pellentesque metus. Duis euismod. Duis non quam. Maecenas vitae dolor in ipsum auctor vehicula. Vivamus nec nibh eget wisi varius pulvinar. Cras a lacus. Etiam et massa. Donec in nisl sit amet dui imperdiet vestibulum. Duis porttitor nibh id eros.\n";
});