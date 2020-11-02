package modele;

public class Morpion {
private int taille;
private char[][] grille;
    public Morpion(int taille){
        this.setTaille(taille);
    }

    public int getTaille() {
        return taille;
    }
    public char getGrille(int i, int j){

        return grille[i][j];
    }
    public void setTaille(int taille){
        final int MAX_GRILLE = 8;
        final int MIN_GRILLE = 3;
        if ( taille < MIN_GRILLE || taille > MAX_GRILLE){
            throw new IllegalArgumentException("Taille invalide !");
        }
        this.taille = taille;
        this.grille = new char[taille][];
        for (int i = 0;i<taille;i++){
            this.grille[i] = new char[taille];
            for (int j = 0;j<taille;j++){
                this.grille[i][j] = ' ';

            }
        }
    }

    public boolean setCase(int x,int y,char symbole){
        if (this.grille[y][x] == ' '){
            this.grille[y][x] = symbole;
            return this.aGagne(symbole,y,x);
        }else{
            throw new IllegalArgumentException("Case dejá ocupée !");
        }
    }

    public boolean aGagne(char symbole,int x,int y){
    int nbSymboles;

    //gagne en ligne
    int ligne = y;
        nbSymboles = 0;
        for (int col=0;col<this.taille;col++){
            if (this.grille[ligne][col] == symbole){
                nbSymboles++;
            }
        }
        if (nbSymboles == this.taille){
            return true;
        }
        //gagne en colone
        int col = x;
        nbSymboles = 0;
        for (ligne = 0; ligne < this.taille; ligne++) {
            if (this.grille[ligne][col] == symbole) {
                nbSymboles++;
            }
        }
        if (nbSymboles == this.taille) {
            return true;
        }
        // gagné diagonale
        if (x == y) {
            nbSymboles = 0;
            for (int lc = 0; lc < this.taille; lc++) {
                if (this.grille[lc][lc] == symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles == this.taille) {
                return true;
            }
        }
        // gagné diag inverse
        if (x == (this.taille - (y + 1))) {
            nbSymboles = 0;
            for ( ligne = 0; ligne < this.taille; ligne++) {
                if (this.grille[ligne][this.taille - (ligne + 1)] == symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles == this.taille) {
                return true;
            }
        }
        return false;

    }


}

