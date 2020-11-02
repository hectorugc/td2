package principal;
import modele.Morpion;
import java.util.Scanner;
public class Main {
    public static void main(String args[]){
        boolean error;
        do {
            error = false;
            Scanner clavier = new Scanner(System.in);
            System.out.println("Taille du morpion? ");
            try {
                int taille = clavier.nextInt();
                Morpion morp = new Morpion(taille);
                morp.setCase(0,0,'X');
                morp.setCase(1,1,'O');

                for (int i = 0;i < morp.getTaille();i++){
                    System.out.print("| ");
                  // System.out.print("_");
                    for (int j = 0;j < morp.getTaille();j++){
                        System.out.print(morp.getGrille(i,j)+(" | "));
                      //  System.out.print();
                    }
                   System.out.println();
                }
                for (int check4Winner=0;check4Winner < morp.getTaille();check4Winner++){
                if (morp.aGagne()){

                }
                }


            }catch (IllegalArgumentException  e){
                System.out.println(e.getMessage());
                error = true;
            }

        }while (error);




    }
}
