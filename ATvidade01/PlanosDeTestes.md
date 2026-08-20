
# Plano de Teste – Sistema de Reserva de Salas

**Disciplina:** Teste de Software  
**Atividade:** Em dupla  
**Entrega:** 20/08

---

## 1. Introdução

Este plano de teste descreve a abordagem para testar o **Sistema de Reserva de Salas**, cujo objetivo é permitir que professores e coordenação reservem salas para turmas, respeitando capacidade, disponibilidade, manutenção e horário de funcionamento.

O objetivo deste plano é garantir a qualidade e a confiabilidade do software antes do seu uso em produção.

---

## 2. Objetivos

Os objetivos do teste são:

- Verificar se todas as funcionalidades de reserva de salas estão implementadas corretamente.
- Validar se o sistema atende aos requisitos funcionais (RF) e não funcionais (RNF) especificados.
- Identificar e reportar defeitos, em especial os relacionados aos riscos críticos do produto.

---

## 3. Escopo do Produto

O sistema permite a reserva de salas para turmas, considerando as seguintes características:

- Salas possuem capacidades e recursos diferentes.
- Reservas têm data, horário, turma e responsável.
- Conflitos de horário, manutenção e janela de funcionamento devem ser respeitados.
- Operações do sistema dependem do perfil do usuário (professor ou coordenação).
- Alterações e cancelamentos de reservas afetam notificações e histórico.

---

## 4. Escopo do Teste

O teste abrangerá todas as funcionalidades relacionadas aos requisitos funcionais e não funcionais listados a seguir.

### 4.1 Requisitos Funcionais (RF)

| ID | Descrição | Prioridade |
|---|---|---|
| **RF-01** | Reservar sala disponível para turma compatível | Alta |
| **RF-02** | Impedir sobreposição de reservas na mesma sala | Alta |
| **RF-03** | Impedir reserva de turma maior que a capacidade da sala | Alta |
| **RF-04** | Bloquear reserva de sala em manutenção | Alta |
| **RF-05** | Permitir reservas somente entre 07h30 e 22h30 | Média |
| **RF-06** | Permitir que apenas a coordenação altere reserva de outro professor | Alta |
| **RF-07** | Cancelamento de reserva libera o horário e registra histórico | Alta |
| **RF-08** | Alteração ou cancelamento de reserva gera notificação | Média |

### 4.2 Requisitos Não Funcionais (RNF)

| ID | Descrição | Categoria |
|---|---|---|
| **RNF-01** | A busca de salas deve responder em até 2 segundos | Desempenho |
| **RNF-02** | Todas as operações devem possuir trilha de auditoria | Segurança/Auditoria |
| **RNF-03** | O acesso deve ser limitado às unidades autorizadas do usuário | Segurança |

---

## 5. Estratégia de Teste

A estratégia de teste incluirá:

- **Testes unitários:** realizados pelos desenvolvedores para verificar regras de negócio isoladas, como cálculo de sobreposição e validação de capacidade.
- **Testes de integração:** para garantir que os módulos de reserva, notificação, histórico e controle de acesso funcionem em conjunto.
- **Testes de sistema (funcionais):** para validar cada RF de ponta a ponta, incluindo cenários positivos e negativos.
- **Testes não funcionais:** para validar desempenho da busca (RNF-01), auditoria (RNF-02) e controle de acesso por unidade (RNF-03).
- **Testes de aceitação:** realizados por professores e coordenação em ambiente simulado, priorizando os riscos críticos.

---

## 6. Casos de Teste

Serão criados casos de teste para cada requisito funcional e não funcional, cobrindo:

- Cenários positivos;
- Cenários negativos;
- Cenários de limite (borda);
- Cenários de exceção.

Os casos de teste detalhados estão no documento **"Casos de Teste – Sistema de Reserva de Salas"**.

### Exemplo de Caso de Teste

**CT-01 – Reservar sala disponível para turma compatível**

**Descrição:**  
Verificar se é possível reservar uma sala disponível, com capacidade e recursos compatíveis com a turma.

**Pré-condições:**

- Usuário (professor ou coordenação) está autenticado no sistema.

**Passos:**

1. Acessar a tela de reserva de salas.
2. Selecionar data, horário, turma e sala disponível compatível.
3. Clicar no botão **"Confirmar Reserva"**.

**Resultado Esperado:**

A reserva é criada e exibida na agenda da sala e do professor responsável.

---

## 7. Ambiente de Teste

O teste será realizado em um ambiente de teste dedicado, com dados simulando múltiplas unidades, salas com capacidades e recursos distintos e salas em status de manutenção, replicando o ambiente de produção o mais próximo possível.

---

## 8. Recursos

### Equipe de Teste

- Dupla de testadores responsável pela atividade.

### Ambiente de Teste

- Ambiente dedicado com massa de dados representativa.
- Salas.
- Turmas.
- Usuários com diferentes perfis.

### Dados de Teste

Serão utilizados:

- Salas com capacidades variadas.
- Sala em manutenção.
- Turmas dentro e fora do limite de capacidade.
- Usuários com perfil **Professor**.
- Usuários com perfil **Coordenação**.

---

## 9. Cronograma

| Atividade | Período |
|---|---|
| Elaboração do plano de teste e casos de teste | Até 20/08 |
| Execução dos testes funcionais (RF-01 a RF-08) | Após aprovação do plano |
| Execução dos testes não funcionais (RNF-01 a RNF-03) | Em paralelo aos testes funcionais |
| Testes de aceitação | Ao final da execução funcional |

---

## 10. Critérios de Aceitação

O sistema será considerado aceito quando:

- Todos os casos de teste relacionados a **RF-01 a RF-08** forem executados e passarem com sucesso.
- Os requisitos não funcionais **RNF-01 a RNF-03** forem validados dentro dos limites especificados.
- Todos os defeitos críticos, em especial os associados aos riscos críticos do produto, forem corrigidos e verificados.

---

## 11. Riscos

### 11.1 Riscos do Projeto

- Atrasos no desenvolvimento podem afetar o cronograma de teste.
- Possíveis problemas de compatibilidade com navegadores e dispositivos.

### 11.2 Riscos Críticos do Produto

| Risco | Descrição | Requisito Relacionado |
|---|---|---|
| **Dupla ocupação** | Duas reservas confirmadas para a mesma sala no mesmo horário. | RF-02 |
| **Capacidade insegura** | Turma alocada em sala com capacidade insuficiente. | RF-03 |
| **Alteração sem autorização** | Usuário sem permissão altera reserva de outro professor. | RF-06 |
| **Falha de notificação** | Alteração ou cancelamento não gera notificação ao responsável. | RF-08 |

---

## 12. Responsabilidades

- A **equipe de desenvolvimento** será responsável por corrigir os defeitos encontrados durante o teste.
- A **dupla de testadores** será responsável por elaborar, executar os casos de teste e relatar os resultados.

---

## 13. Comunicação

Relatórios de teste serão gerados e compartilhados com a equipe de desenvolvimento e com o professor da disciplina para acompanhamento e tomada de decisões.

---

## 14. Aprovação

Este plano de teste será revisado e entregue conforme o prazo estabelecido (**até 20/08**).

Quaisquer alterações subsequentes serão comunicadas e alinhadas com a dupla responsável.

---

## 15. Considerações Finais

Este plano de teste é o guia para o processo de teste do **Sistema de Reserva de Salas**, com foco especial na mitigação dos riscos críticos identificados:

- Dupla ocupação;
- Capacidade insegura;
- Alteração sem autorização;
- Falha de notificação.

O objetivo final é garantir que o sistema apresente comportamento confiável, seguro e adequado aos requisitos definidos antes de sua utilização em produção.


