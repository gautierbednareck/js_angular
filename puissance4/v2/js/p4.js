class P4 {
    //selector=balise id selecetionné
    constructor(selector){
        this.col=7;
        this.lgn=6;
        this.selector=selector;
        this.player='red';

        this.drawGame();
        this.ecoute();
        this.victoire();
        var victory=false;
    }

    //affichage jeu
    drawGame() {
        //ciblage "jeu"
        const $jeu = $(this.selector);
        this.victory=false;
        //console.log(`victoire=${this.victory}`);

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

    //la victoire
    victoire(lgn, col){
        const that=this;
        this.victory=false;
        //fonction qui retourne l'élément donnée en html
        function $getCell(i,j){
            return $(`.col[data-lgn='${i}'][data-col='${j}']`);
        }
        // verification par direction sous forme de tab
        function checkDirection(direction){
            let total = 0;
            let i=lgn + direction.i;
            let j=col + direction.j;
            let $next=$getCell(i,j);

            //i>=0 && i< that.lgn && j >= 0 && j < that.col == intervalle de la grille
            //$next.data('player') === that.player ==condition victoire
            while(i>=0 && i< that.lgn && j >= 0 && j < that.col && $next.data('player') === that.player){
                total++;
                i+=direction.i;
                j+=direction.j;                
                $next=$getCell(i,j);
            }
            return total;
        }

        //fonction condition victoire
        function checkWin(directionA, directionB){
            const total = 1 + checkDirection(directionA)+checkDirection(directionB);
            if (total >= 4){
                return that.player;
            } else {
                return null;
            }
        }

        //fonction vérif axe horizontale
        function checkHorizon(){
            //retourne deux objet qui ont toujours deux valeur i et j
            // on passe de colone en colone
            return checkWin({i:0,j:-1},{i:0,j:1});
        }
                //fonction vérif axe horizontale
        function checkVerti(){
            //retourne deux objet qui ont toujours deux valeur i et j
            //on passe de ligne en ligne
            return checkWin({i:-1,j:0},{i:1,j:0});
        }
        function checkDiag1(){
            //la première diagonale
            return checkWin({i:1,j:1},{i:-1,j:-1});
        }
        function checkDiag2(){
            //la deuxième diagonale
            return checkWin({i:1,j:-1},{i:-1,j:1});
        }
        
        //on le retourne si une des valeur n'est pas null 
        return checkHorizon() || checkVerti() || checkDiag1() || checkDiag2();
    }

    //gestion de la souris et du click
    ecoute(){
        const $jeu = $(this.selector);
        const that=this;
        var win=this.victory;
        console.log(`victoire2=${win}`);

        
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
            if (!win){
                //on récupère la colonne
                const $col = $(this).data('col');
                //on fait la fonction lastCase avec la valeur qu'on vient de recup
                const $last = lastCase($col);
                if ($last != null) {
                    //selection de la couleur selon joueur
                    $last.addClass(`p${that.player}`);
                }
            }
        });

        //quand on l'enlève
        $jeu.on('mouseleave', '.col', function(){
            if (!win){
                //selection de la couleur selon joueur
                $('.col').removeClass(`p${that.player}`);
            }
        });

        //vérifie quand on click
        $jeu.on('click', '.col.empty', function(){
            if (!win){
                //on réucpère et on retourne la dernière case
                const col=$(this).data('col');
                const $last = lastCase(col);
                //p${that.player} pour le faire selon valeur joueur pred/pyellow
                $last.addClass(`${that.player}`).removeClass(` empty p${that.player}`).data('player', `${that.player}`);

                //verif gagnant appel fonction
                const winner = that.victoire($last.data('lgn'),$last.data('col'));
                
                //si that.player = red alors on le passe a yellow sinon on met red/ switch des joueurs
                that.player = (that.player === 'red') ? 'yellow' : 'red' ;

                //verif gagnant
                if (winner) {
                    //console.log(`Les ${winner} ont gagné`);
                    //affichage du nom du gagnant
                    $('#vic').text(`le gagnant est ${winner}`);
                    win=true;
                    //console.log(`victoire=${win}`);
                    //console.log('------');
                    //affichage du vainqueur
                    $('#vic').css('visibility',"visible");
                    //on réactive le bouton restart si des gens gagne
                    $('#restart').css('visibility',"visible");
                    return;
                }
            }
        });

    }
}