class P4 {
    //selector=balise id selecetionné
    constructor(selector){
        this.col=7;
        this.lgn=6;
        this.selector=selector;

        this.drawGame();
        this.ecoute();
    }

    //affichage jeu
    drawGame() {
        //ciblage "jeu"
        const $jeu = $(this.selector);
        //boucle d'affichage
        //ligne
        for(let lgn=0;lgn<this.lgn;lgn++){
            //ajout de ligne
            const $lgn = $('<div>').addClass('lgn');

            //colonne
            for(let col=0;col<this.col;col++){
                //ajout classe plus donnée ligne/colone
                const $col = $('<div>').addClass('col empty').attr("data-col", col).attr("data-lgn",lgn);
                //ajout de la colonne à la ligne
                $lgn.append($col);
            }
            //ajout tableau au jeu 
            $jeu.append($lgn);
            
        }
    };

    ecoute(){
        const $jeu = $(this.selector);
        const that=this;
        //on cherche la dernière case vide
        function lastCase(col){
            //retourne tous les elements avec le meme id
            const $cells = $(`.col[data-col='${col}']`);
            //parcours les tableau renvoyer dans $cells
            for(let i = $cells.length-1;i >= 0;i--){
                const $cell = $($cells[i])
                //retourn que si la classe est vide
                if ($cell.hasClass('empty')){
                   return $cell;
                }
            }
            //sinon retourne rien
            return null;
        }

        //quand on passe la souris dessus
        $jeu.on('mouseenter', '.col.empty', function(){
            //on récupère la colonne
            const $col = $(this).data('col');
            //on fait la fonction lastCase avec la valeur qu'on vient de recup
            const $last = lastCase($col);
            if ($last != null) {
                $last.addClass('pred');
            }
        });

        //quand on l'enlève
        $jeu.on('mouseleave', '.col', function(){
            $('.col').removeClass('pred');
        });
    }
}