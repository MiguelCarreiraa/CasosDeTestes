package br.edu.ifpr.boletim;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ParticipacaoTest {
    @Test
    void deveCalcularPontos2TrueTrue(){
        Participacao participacao = new Participacao();

        double resultado = participacao.calcularPontos(true, true);

        assertEquals(3,resultado);

    }

    @Test
    void deveCalcularPontosTrueFalse(){
        Participacao participacao = new Participacao();

        double resultado = participacao.calcularPontos(true, false);

        assertEquals(2,resultado);

    }

    @Test
    void deveCalcularPontosFalseTrue(){
        Participacao participacao = new Participacao();

        double resultado = participacao.calcularPontos(false, true);

        assertEquals(1,resultado);

    }

    // TODO: criar o objeto, chamar calcularPontos e verificar o resultado.
}
