class player {
    //selector=balise id selecetionné
    constructor(pseudo,couleur)
    {
        this.pseudo=pseudo;
        this.couleur=couleur;
    }
    getPseudo()
    {
        return this.pseudo;
    }
    getCouleur()
    {
        return this.couleur;
    }
    setPseudo(surname)
    {
        return this.pseudo=surname;
    }
    setCouleur(color)
    {
        return this.couleur=color;
    }

}