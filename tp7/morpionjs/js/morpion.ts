export class Morpion {
    public taille: number;
    public grille:string[][];

    constructor(taille:number = 3) {
        this.setTaille(taille);
    }

    setTaille(taille:number = 3) {

        const MAX_GRILLE = 8;
        const MIN_GRILLE = 3;

        if (Number.isNaN(taille) || taille < MIN_GRILLE || taille > MAX_GRILLE) {
            throw "Taille invalide !";
        }
        this.taille = taille;
        this.grille = new Array(taille);
        for (let i = 0; i < taille; i++) {
            this.grille[i] = new Array(taille);
            for (let j = 0; j < taille; j++) {
                this.grille[i][j] = ' ';
            }
        }
    }

    setCase(symbole:string, y:number, x:number):boolean {

        if (this.grille[y][x] === ' ') {
            this.grille[y][x] = symbole;

            return this.aGagne(symbole, y, x);
        } else {
            throw "Case déjà occupée !";
        }
    }

    aGagne(symbole:string, y:number, x:number):boolean {    

        let nbSymboles:number;

        // gagné en ligne ?
        const ligne:number = y;
            nbSymboles = 0;
            for (let col = 0; col < this.taille; col++) {
                if (this.grille[ligne][col] === symbole) {
                    nbSymboles++;
                }
            }
        if (nbSymboles === this.taille) {
            return true;
        }


        // gagné en colonne ?
        const col:number = x;
            nbSymboles = 0;
            for (let ligne = 0; ligne < this.taille; ligne++) {
                if (this.grille[ligne][col] === symbole) {
                    nbSymboles++;
                }
            }
        if (nbSymboles === this.taille) {
            return true;
        }

        // gagné diagonale
        if (x === y) {
            nbSymboles = 0;
            for (let lc = 0; lc < this.taille; lc++) {
                if (this.grille[lc][lc] === symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === this.taille) {
                return true;
            }
        }

        // gagné diag inverse
        if (x === (this.taille - (y + 1))) {
            nbSymboles = 0;
            for (let ligne = 0; ligne < this.taille; ligne++) {
                if (this.grille[ligne][this.taille - (ligne + 1)] === symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === this.taille) {
                return true;
            }
        }
        return false;
    }
}
