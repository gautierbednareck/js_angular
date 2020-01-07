$('game').ready(function(){
    //appel cosntructeurde la classe p4
    const p4 = new P4('#game');
    
    //bouton restart
    $('#restart').on('click', function() {
        //on vide tous
        $('#game').empty();
        //on réaffiche puis réinitialise tout
        p4.drawGame();
        p4.ecoute();
        p4.victoire();
        //affichage du vainqueur
        $('#vic').css('visibility','hidden');
        //bouton restart
        $('#restart').css('visibility','hidden');
    })
});