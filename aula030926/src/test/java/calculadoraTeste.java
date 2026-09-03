import org.example.calculadora;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class calculadoraTeste {

    calculadora calculadora = new calculadora();

    @Test
    void deveSomarDoisFatores(){
        int resultado = calculadora.somar(2,2);

        assertEquals(4, resultado);

        if(resultado == 4){
            System.out.println("aprovado");
        }
    }

    @Test
    void deveSubtrairDoisFatores( ){
        int resultado = calculadora.subtrair( 4,2);
        assertEquals(2,resultado);
    }

    @Test
    void deveMutiplicarDoisFatores(){
        int resultado = calculadora.mutiplicar(5,3);
        assertEquals(15,resultado);
    }

    @Test
    void deveDividirDoisFatores(){
        int resultado = calculadora.dividir(100,10);
        assertEquals(10,resultado);
    }


}
