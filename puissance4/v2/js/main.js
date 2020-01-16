$('game').ready(function(){
    //appel cosntructeurde la classe p4
    const p4 = new P4('#game');


    $('#actu').on('click', function() {
    	//on vide tous
        $('#game').empty();
        p4.selectGrille();
        //on réaffiche la grille
        p4.drawGame();
        p4.selectNbVictoire()
       
    })
    //bouton restart
    $('#restart').on('click', function() {
        //on vide tous
        $('#game').empty();
        //on réaffiche puis réinitialise tout
        p4.selectNbVictoire()
        p4.drawGame();
        p4.ecoute();
        p4.victoire();
        //affichage du vainqueur
        $('#vic').css('visibility','hidden');
        //bouton restart
        $('#restart').css('visibility','hidden');
    })
});