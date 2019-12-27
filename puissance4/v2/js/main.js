$('game').ready(function(){
    //appel cosntructeurde la classe p4
    const p4 = new P4('#game');
    
    //bouton restart
    $('#restart').on('click', function() {
        //on vide tous
        $('#game').empty();
        //on réaffiche
        p4.drawGame();
        $('#restart').css('visibility','hidden');
    })
});