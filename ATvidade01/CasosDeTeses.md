# Casos de Teste – Sistema de Reserva de Salas

## Índice

- [CT-01 – Reservar sala disponível para turma compatível](#ct-01--reservar-sala-disponível-para-turma-compatível-rf-01)
- [CT-02 – Impedir sobreposição de reservas na mesma sala](#ct-02--impedir-sobreposição-de-reservas-na-mesma-sala-rf-02)
- [CT-03 – Impedir reserva de turma maior que a capacidade da sala](#ct-03--impedir-reserva-de-turma-maior-que-a-capacidade-da-sala-rf-03)
- [CT-04 – Bloquear reserva de sala em manutenção](#ct-04--bloquear-reserva-de-sala-em-manutenção-rf-04)
- [CT-05 – Permitir reservas somente entre 07h30 e 22h30](#ct-05--permitir-reservas-somente-entre-07h30-e-22h30-rf-05)
- [CT-06 – Restringir alteração de reserva de outro professor à coordenação](#ct-06--restringir-alteração-de-reserva-de-outro-professor-à-coordenação-rf-06)
- [CT-07 – Cancelamento de reserva libera o horário e registra histórico](#ct-07--cancelamento-de-reserva-libera-o-horário-e-registra-histórico-rf-07)
- [CT-08 – Alteração ou cancelamento de reserva gera notificação](#ct-08--alteração-ou-cancelamento-de-reserva-gera-notificação-rf-08)
- [CT-09 – Tempo de resposta da busca de salas](#ct-09--tempo-de-resposta-da-busca-de-salas-rnf-01)
- [CT-10 – Trilha de auditoria das operações](#ct-10--trilha-de-auditoria-das-operações-rnf-02)
- [CT-11 – Acesso limitado às unidades autorizadas](#ct-11--acesso-limitado-às-unidades-autorizadas-rnf-03)
- [Pós-condições Gerais](#pós-condições-gerais)

---

## CT-01 – Reservar sala disponível para turma compatível (RF-01)

### Descrição

Verificar se é possível reservar uma sala disponível cuja capacidade e recursos sejam compatíveis com a turma.

### Pré-condições

- Usuário (professor ou coordenação) está autenticado no sistema.
- Existe ao menos uma sala disponível e compatível com a turma.

### Passos

1. Acessar a tela de reserva de salas.
2. Informar data, horário e turma.
3. Selecionar a sala compatível.
4. Clicar no botão **"Confirmar Reserva"**.

### Cenário 1 – Reserva realizada com sucesso

#### Dados de Teste

| Campo | Valor |
|---|---|
| Sala | Sala 101 |
| Capacidade | 40 |
| Recursos | Projetor |
| Turma | 2ºA |
| Alunos | 35 |
| Data/Horário | 20/08, 08h00–09h30 |

#### Resultado Esperado

- O sistema cria a reserva e a exibe na agenda da sala e do professor responsável.
- O sistema exibe mensagem de confirmação da reserva.

---

## CT-02 – Impedir sobreposição de reservas na mesma sala (RF-02)

### Descrição

Verificar se o sistema impede que duas reservas ocupem a mesma sala no mesmo horário (dupla ocupação).

### Pré-condições

- Já existe uma reserva confirmada para a sala no horário informado.

### Passos

1. Acessar a tela de reserva de salas.
2. Selecionar a mesma sala, data e horário de uma reserva já existente.
3. Clicar no botão **"Confirmar Reserva"**.

### Cenário 1 – Sobreposição total de horário

#### Dados de Teste

| Campo | Valor |
|---|---|
| Sala | Sala 101 |
| Reserva existente | 20/08, 08h00–09h30 |
| Nova tentativa | Sala 101, 20/08, 08h00–09h30 |

#### Resultado Esperado

- O sistema impede a nova reserva.
- O sistema exibe mensagem informando que a sala já está reservada no horário selecionado.

### Cenário 2 – Sobreposição parcial de horário

#### Dados de Teste

| Campo | Valor |
|---|---|
| Sala | Sala 101 |
| Reserva existente | 20/08, 08h00–09h30 |
| Nova tentativa | Sala 101, 20/08, 09h00–10h00 |
| Conflito | 09h00–09h30 |

#### Resultado Esperado

- O sistema impede a nova reserva por haver conflito parcial de horário.
- O sistema exibe mensagem de conflito de horário.

### Cenário 3 – Horário sem conflito

#### Dados de Teste

| Campo | Valor |
|---|---|
| Sala | Sala 101 |
| Reserva existente | 20/08, 08h00–09h30 |
| Nova tentativa | Sala 101, 20/08, 09h30–11h00 |

#### Resultado Esperado

- O sistema permite a nova reserva, pois não há sobreposição de horário.

---

## CT-03 – Impedir reserva de turma maior que a capacidade da sala (RF-03)

### Descrição

Verificar se o sistema impede a reserva de uma sala quando o número de alunos da turma excede a capacidade da sala.

### Pré-condições

- Usuário autenticado.
- Sala com capacidade definida.
- Turma com número de alunos definido.

### Passos

1. Acessar a tela de reserva de salas.
2. Selecionar sala, data, horário e turma.
3. Clicar no botão **"Confirmar Reserva"**.

### Cenário 1 – Turma maior que a capacidade

#### Dados de Teste

| Campo | Valor |
|---|---|
| Sala | Sala 05 |
| Capacidade | 20 |
| Turma | 3ºB |
| Alunos | 25 |

#### Resultado Esperado

- O sistema impede a reserva.
- O sistema exibe mensagem informando que a capacidade da sala é insuficiente para a turma.

### Cenário 2 – Turma igual à capacidade (caso de limite)

#### Dados de Teste

| Campo | Valor |
|---|---|
| Sala | Sala 05 |
| Capacidade | 20 |
| Turma | 3ºC |
| Alunos | 20 |

#### Resultado Esperado

- O sistema permite a reserva, pois a turma está dentro do limite de capacidade.

### Cenário 3 – Turma menor que a capacidade

#### Dados de Teste

| Campo | Valor |
|---|---|
| Sala | Sala 05 |
| Capacidade | 20 |
| Turma | 3ºD |
| Alunos | 15 |

#### Resultado Esperado

- O sistema permite a reserva normalmente.

---

## CT-04 – Bloquear reserva de sala em manutenção (RF-04)

### Descrição

Verificar se o sistema impede reservas em salas marcadas como **"Em manutenção"**.

### Pré-condições

- Existe uma sala com status **"Em manutenção"** cadastrada no sistema.

### Passos

1. Acessar a tela de reserva de salas.
2. Selecionar a sala em manutenção, data e horário.
3. Clicar no botão **"Confirmar Reserva"**.

### Cenário 1 – Sala em manutenção

#### Dados de Teste

| Campo | Valor |
|---|---|
| Sala | Sala 12 |
| Status | Em manutenção |
| Data/Horário | 20/08, 10h00–11h00 |

#### Resultado Esperado

- O sistema impede a reserva.
- O sistema exibe mensagem informando que a sala está em manutenção e indisponível.

### Cenário 2 – Sala volta a ficar disponível após manutenção

#### Dados de Teste

| Campo | Valor |
|---|---|
| Sala | Sala 12 |
| Status | Disponível |
| Data/Horário | 20/08, 10h00–11h00 |

#### Resultado Esperado

- O sistema permite a reserva normalmente.

---

## CT-05 – Permitir reservas somente entre 07h30 e 22h30 (RF-05)

### Descrição

Verificar se o sistema permite reservas apenas dentro da janela de funcionamento **07h30 às 22h30**.

### Pré-condições

- Usuário autenticado.
- Sala disponível e compatível.

### Passos

1. Acessar a tela de reserva de salas.
2. Informar data e horário desejado para a reserva.
3. Clicar no botão **"Confirmar Reserva"**.

### Cenário 1 – Horário de início antes das 07h30

#### Dados de Teste

| Campo | Valor |
|---|---|
| Data/Horário | 20/08, 07h00–08h00 |

#### Resultado Esperado

- O sistema impede a reserva.
- O sistema exibe mensagem informando que o horário está fora do funcionamento (07h30–22h30).

### Cenário 2 – Horário de término após as 22h30

#### Dados de Teste

| Campo | Valor |
|---|---|
| Data/Horário | 20/08, 22h00–23h00 |

#### Resultado Esperado

- O sistema impede a reserva pelo mesmo motivo do cenário anterior.

### Cenário 3 – Horário exatamente nos limites (caso de limite)

#### Dados de Teste

| Campo | Valor |
|---|---|
| Data/Horário | 20/08, 07h30–22h30 |

#### Resultado Esperado

- O sistema permite a reserva, pois o horário está dentro dos limites permitidos.

### Cenário 4 – Horário dentro do intervalo permitido

#### Dados de Teste

| Campo | Valor |
|---|---|
| Data/Horário | 20/08, 14h00–15h30 |

#### Resultado Esperado

- O sistema permite a reserva normalmente.

---

## CT-06 – Restringir alteração de reserva de outro professor à coordenação (RF-06)

### Descrição

Verificar se apenas usuários com perfil de **Coordenação** podem alterar reservas feitas por outros professores.

### Pré-condições

- Existe uma reserva feita pelo Professor A.
- Há um usuário logado com perfil Professor B.
- Há um usuário com perfil Coordenação.

### Passos

1. Acessar a reserva feita pelo Professor A.
2. Tentar alterar data, horário ou sala da reserva.
3. Clicar no botão **"Salvar Alteração"**.

### Cenário 1 – Professor B tenta alterar reserva do Professor A

#### Dados de Teste

| Campo | Valor |
|---|---|
| Usuário logado | Professor B |
| Perfil | Professor |
| Reserva | Feita pelo Professor A |

#### Resultado Esperado

- O sistema impede a alteração.
- O sistema exibe mensagem informando que apenas a coordenação pode alterar reservas de outros professores.

### Cenário 2 – Coordenação altera reserva do Professor A

#### Dados de Teste

| Campo | Valor |
|---|---|
| Usuário logado | Coordenação |
| Reserva | Feita pelo Professor A |

#### Resultado Esperado

- O sistema permite a alteração e salva as novas informações da reserva.

### Cenário 3 – Professor A altera a própria reserva

#### Dados de Teste

| Campo | Valor |
|---|---|
| Usuário logado | Professor A |
| Reserva | Feita pelo Professor A |

#### Resultado Esperado

- O sistema permite a alteração normalmente.

---

## CT-07 – Cancelamento de reserva libera o horário e registra histórico (RF-07)

### Descrição

Verificar se o cancelamento de uma reserva libera o horário da sala para novas reservas e registra o evento no histórico.

### Pré-condições

- Existe uma reserva confirmada e ativa.

### Passos

1. Acessar a reserva a ser cancelada.
2. Clicar no botão **"Cancelar Reserva"**.
3. Confirmar o cancelamento.

### Cenário 1 – Cancelamento bem-sucedido

#### Dados de Teste

| Campo | Valor |
|---|---|
| Reserva | Sala 101 |
| Data/Horário | 20/08, 08h00–09h30 |

#### Resultado Esperado

- O sistema cancela a reserva.
- O horário da sala passa a ficar disponível para nova reserva.
- O cancelamento é registrado no histórico com data, hora e responsável.

### Cenário 2 – Nova reserva no horário liberado

#### Dados de Teste

| Campo | Valor |
|---|---|
| Condição | Após o cancelamento do Cenário 1 |
| Nova tentativa | Sala 101, 20/08, 08h00–09h30 |

#### Resultado Esperado

- O sistema permite a nova reserva, confirmando que o horário foi corretamente liberado.

---

## CT-08 – Alteração ou cancelamento de reserva gera notificação (RF-08)

### Descrição

Verificar se alterações e cancelamentos de reservas geram notificação ao responsável e às partes envolvidas.

### Pré-condições

- Existe uma reserva ativa vinculada a um responsável com meio de notificação configurado (e-mail/sistema).

### Passos

1. Acessar a reserva existente.
2. Alterar ou cancelar a reserva.
3. Confirmar a operação.

### Cenário 1 – Alteração de reserva gera notificação

#### Dados de Teste

| Campo | Valor |
|---|---|
| Reserva alterada | Sala 101 |
| Horário anterior | 08h00–09h30 |
| Novo horário | 10h00–11h30 |

#### Resultado Esperado

- O sistema envia notificação ao responsável pela reserva informando a alteração.

### Cenário 2 – Cancelamento de reserva gera notificação

#### Dados de Teste

| Campo | Valor |
|---|---|
| Reserva cancelada | Sala 101 |
| Data/Horário | 20/08, 08h00–09h30 |

#### Resultado Esperado

- O sistema envia notificação ao responsável informando o cancelamento.

### Cenário 3 – Falha no envio de notificação (caso negativo)

#### Dados de Teste

| Campo | Valor |
|---|---|
| Situação | Serviço de notificação indisponível |
| Operação | Cancelamento |

#### Resultado Esperado

- O sistema registra a falha de envio para nova tentativa.
- O sistema não impede o cancelamento/alteração da reserva.
- O evento de falha fica registrado para auditoria (RNF-02).

---

## CT-09 – Tempo de resposta da busca de salas (RNF-01)

### Descrição

Verificar se a busca por salas disponíveis responde em até **2 segundos**.

### Pré-condições

- Base de dados com volume representativo de salas e reservas cadastradas.

### Passos

1. Acessar a tela de busca de salas.
2. Informar critérios de busca (data, horário, capacidade e recursos).
3. Executar a busca e medir o tempo de resposta.

### Cenário 1 – Busca dentro do limite de tempo

#### Dados de Teste

| Campo | Valor |
|---|---|
| Data | 20/08 |
| Horário | 08h00–09h30 |
| Capacidade mínima | 30 |

#### Resultado Esperado

- O sistema retorna o resultado da busca em até **2 segundos**.

### Cenário 2 – Busca com alto volume de dados (carga)

#### Dados de Teste

| Campo | Valor |
|---|---|
| Base de dados | Grande volume de salas |
| Reservas | Grande volume de reservas simultâneas |

#### Resultado Esperado

- O sistema mantém o tempo de resposta dentro de **2 segundos**, mesmo sob carga elevada.

---

## CT-10 – Trilha de auditoria das operações (RNF-02)

### Descrição

Verificar se todas as operações de reserva (criação, alteração e cancelamento) geram registro de auditoria.

### Pré-condições

- Usuário autenticado.
- Módulo de auditoria ativo.

### Passos

1. Realizar uma operação de criação, alteração ou cancelamento de reserva.
2. Acessar o log/trilha de auditoria.
3. Verificar o registro correspondente à operação realizada.

### Cenário 1 – Registro de criação de reserva

#### Dados de Teste

| Campo | Valor |
|---|---|
| Operação | Criação de reserva |
| Sala | Sala 101 |
| Data | 20/08 |

#### Resultado Esperado

- A trilha de auditoria registra usuário, data/hora, ação e dados da reserva criada.

### Cenário 2 – Registro de alteração de reserva

#### Dados de Teste

| Campo | Valor |
|---|---|
| Operação | Alteração de horário da reserva |

#### Resultado Esperado

- A trilha de auditoria registra os valores anteriores e os novos valores da reserva.

### Cenário 3 – Registro de cancelamento de reserva

#### Dados de Teste

| Campo | Valor |
|---|---|
| Operação | Cancelamento de reserva |

#### Resultado Esperado

- A trilha de auditoria registra o cancelamento, o responsável e o motivo, se informado.

---

## CT-11 – Acesso limitado às unidades autorizadas (RNF-03)

### Descrição

Verificar se o usuário consegue visualizar e reservar salas apenas das unidades para as quais está autorizado.

### Pré-condições

- Usuário autenticado com autorização vinculada a uma ou mais unidades específicas.

### Passos

1. Acessar a tela de busca/reserva de salas.
2. Tentar visualizar ou reservar uma sala de uma unidade não autorizada.
3. Tentar visualizar ou reservar uma sala de uma unidade autorizada.

### Cenário 1 – Tentativa de acesso a unidade não autorizada

#### Dados de Teste

| Campo | Valor |
|---|---|
| Usuário | Autorizado apenas para a Unidade Centro |
| Tentativa | Sala da Unidade Norte |

#### Resultado Esperado

- O sistema não exibe e não permite reserva de salas da Unidade Norte para esse usuário.
- O sistema pode registrar a tentativa para fins de auditoria (RNF-02).

### Cenário 2 – Acesso a unidade autorizada

#### Dados de Teste

| Campo | Valor |
|---|---|
| Usuário | Autorizado para a Unidade Centro |
| Consulta | Sala da Unidade Centro |

#### Resultado Esperado

- O sistema exibe as salas da Unidade Centro.
- O sistema permite a reserva normalmente.

---

# Pós-condições Gerais

Ao final de cada caso de teste:

- A agenda de salas deve refletir corretamente o resultado da operação executada.
- O histórico de reservas deve ser atualizado corretamente.
- A trilha de auditoria deve registrar as operações conforme definido nos requisitos.
