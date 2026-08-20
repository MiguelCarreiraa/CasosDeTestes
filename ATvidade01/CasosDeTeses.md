Casos de Teste – Sistema de Reserva de Salas
CT-01 – Reservar sala disponível para turma compatível (RF-01)

Descrição:
Verificar se é possível reservar uma sala disponível cuja capacidade e recursos sejam compatíveis com a turma.

Pré-condições:

Usuário (professor ou coordenação) está autenticado no sistema.
Existe ao menos uma sala disponível e compatível com a turma.

Passos:

Acessar a tela de reserva de salas.
Informar data, horário e turma.
Selecionar a sala compatível.
Clicar no botão "Confirmar Reserva".
Cenário 1 – Reserva realizada com sucesso

Dados de Teste:

Sala: Sala 101 (capacidade 40, projetor)
Turma: 2ºA (35 alunos)
Data/Horário: 20/08, 08h00–09h30

Resultado Esperado:

O sistema cria a reserva e a exibe na agenda da sala e do professor responsável.
O sistema exibe mensagem de confirmação da reserva.
CT-02 – Impedir sobreposição de reservas na mesma sala (RF-02)

Descrição:
Verificar se o sistema impede que duas reservas ocupem a mesma sala no mesmo horário (dupla ocupação).

Pré-condições:

Já existe uma reserva confirmada para a sala no horário informado.

Passos:

Acessar a tela de reserva de salas.
Selecionar a mesma sala, data e horário de uma reserva já existente.
Clicar no botão "Confirmar Reserva".
Cenário 1 – Sobreposição total de horário

Dados de Teste:

Sala: Sala 101, já reservada em 20/08, das 08h00–09h30.
Nova tentativa: Sala 101, 20/08, 08h00–09h30.

Resultado Esperado:

O sistema impede a nova reserva.
O sistema exibe mensagem informando que a sala já está reservada no horário selecionado.
Cenário 2 – Sobreposição parcial de horário

Dados de Teste:

Sala: Sala 101, já reservada em 20/08, das 08h00–09h30.
Nova tentativa: Sala 101, 20/08, 09h00–10h00.

Resultado Esperado:

O sistema impede a nova reserva por haver conflito parcial de horário (09h00–09h30).
O sistema exibe mensagem de conflito de horário.
Cenário 3 – Horário sem conflito

Dados de Teste:

Sala: Sala 101, já reservada em 20/08, das 08h00–09h30.
Nova tentativa: Sala 101, 20/08, 09h30–11h00.

Resultado Esperado:

O sistema permite a nova reserva, pois não há sobreposição de horário.
CT-03 – Impedir reserva de turma maior que a capacidade da sala (RF-03)

Descrição:
Verificar se o sistema impede a reserva de uma sala quando o número de alunos da turma excede a capacidade da sala.

Pré-condições:

Usuário autenticado.
Sala com capacidade definida.
Turma com número de alunos definido.

Passos:

Acessar a tela de reserva de salas.
Selecionar sala, data, horário e turma.
Clicar no botão "Confirmar Reserva".
Cenário 1 – Turma maior que a capacidade

Dados de Teste:

Sala: Sala 05 (capacidade 20)
Turma: 3ºB (25 alunos)

Resultado Esperado:

O sistema impede a reserva.
O sistema exibe mensagem informando que a capacidade da sala é insuficiente para a turma.
Cenário 2 – Turma igual à capacidade (caso de limite)

Dados de Teste:

Sala: Sala 05 (capacidade 20)
Turma: 3ºC (20 alunos)

Resultado Esperado:

O sistema permite a reserva, pois a turma está dentro do limite de capacidade.
Cenário 3 – Turma menor que a capacidade

Dados de Teste:

Sala: Sala 05 (capacidade 20)
Turma: 3ºD (15 alunos)

Resultado Esperado:

O sistema permite a reserva normalmente.
CT-04 – Bloquear reserva de sala em manutenção (RF-04)

Descrição:
Verificar se o sistema impede reservas em salas marcadas como em manutenção.

Pré-condições:

Existe uma sala com status "Em manutenção" cadastrada no sistema.

Passos:

Acessar a tela de reserva de salas.
Selecionar a sala em manutenção, data e horário.
Clicar no botão "Confirmar Reserva".
Cenário 1 – Sala em manutenção

Dados de Teste:

Sala: Sala 12 (status: Em manutenção)
Data/Horário: 20/08, 10h00–11h00

Resultado Esperado:

O sistema impede a reserva.
O sistema exibe mensagem informando que a sala está em manutenção e indisponível.
Cenário 2 – Sala volta a ficar disponível após manutenção

Dados de Teste:

Sala: Sala 12 (status alterado para "Disponível")
Data/Horário: 20/08, 10h00–11h00

Resultado Esperado:

O sistema permite a reserva normalmente.
CT-05 – Permitir reservas somente entre 07h30 e 22h30 (RF-05)

Descrição:
Verificar se o sistema permite reservas apenas dentro da janela de funcionamento (07h30 às 22h30).

Pré-condições:

Usuário autenticado.
Sala disponível e compatível.

Passos:

Acessar a tela de reserva de salas.
Informar data e horário desejado para a reserva.
Clicar no botão "Confirmar Reserva".
Cenário 1 – Horário de início antes das 07h30

Dados de Teste:

Data/Horário: 20/08, 07h00–08h00

Resultado Esperado:

O sistema impede a reserva.
O sistema exibe mensagem informando que o horário está fora do funcionamento (07h30–22h30).
Cenário 2 – Horário de término após as 22h30

Dados de Teste:

Data/Horário: 20/08, 22h00–23h00

Resultado Esperado:

O sistema impede a reserva pelo mesmo motivo do cenário anterior.
Cenário 3 – Horário exatamente nos limites (caso de limite)

Dados de Teste:

Data/Horário: 20/08, 07h30–22h30

Resultado Esperado:

O sistema permite a reserva, pois o horário está dentro dos limites permitidos.
Cenário 4 – Horário dentro do intervalo permitido

Dados de Teste:

Data/Horário: 20/08, 14h00–15h30

Resultado Esperado:

O sistema permite a reserva normalmente.
CT-06 – Restringir alteração de reserva de outro professor à coordenação (RF-06)

Descrição:
Verificar se apenas usuários com perfil de coordenação podem alterar reservas feitas por outros professores.

Pré-condições:

Existe uma reserva feita pelo Professor A.
Há um usuário logado com perfil Professor B.
Há um usuário com perfil Coordenação.

Passos:

Acessar a reserva feita pelo Professor A.
Tentar alterar data, horário ou sala da reserva.
Clicar no botão "Salvar Alteração".
Cenário 1 – Professor B tenta alterar reserva do Professor A

Dados de Teste:

Usuário logado: Professor B (perfil: Professor)
Reserva: feita pelo Professor A

Resultado Esperado:

O sistema impede a alteração.
O sistema exibe mensagem informando que apenas a coordenação pode alterar reservas de outros professores.
Cenário 2 – Coordenação altera reserva do Professor A

Dados de Teste:

Usuário logado: Coordenação
Reserva: feita pelo Professor A

Resultado Esperado:

O sistema permite a alteração e salva as novas informações da reserva.
Cenário 3 – Professor A altera a própria reserva

Dados de Teste:

Usuário logado: Professor A
Reserva: feita pelo Professor A

Resultado Esperado:

O sistema permite a alteração normalmente.
CT-07 – Cancelamento de reserva libera o horário e registra histórico (RF-07)

Descrição:
Verificar se o cancelamento de uma reserva libera o horário da sala para novas reservas e registra o evento no histórico.

Pré-condições:

Existe uma reserva confirmada e ativa.

Passos:

Acessar a reserva a ser cancelada.
Clicar no botão "Cancelar Reserva".
Confirmar o cancelamento.
Cenário 1 – Cancelamento bem-sucedido

Dados de Teste:

Reserva: Sala 101, 20/08, 08h00–09h30.

Resultado Esperado:

O sistema cancela a reserva.
O horário da sala passa a ficar disponível para nova reserva.
O cancelamento é registrado no histórico com data, hora e responsável.
Cenário 2 – Nova reserva no horário liberado

Dados de Teste:

Após o cancelamento do Cenário 1.
Nova tentativa: Sala 101, 20/08, 08h00–09h30.

Resultado Esperado:

O sistema permite a nova reserva, confirmando que o horário foi corretamente liberado.
CT-08 – Alteração ou cancelamento de reserva gera notificação (RF-08)

Descrição:
Verificar se alterações e cancelamentos de reservas geram notificação ao responsável e às partes envolvidas.

Pré-condições:

Existe uma reserva ativa vinculada a um responsável com meio de notificação configurado (e-mail/sistema).

Passos:

Acessar a reserva existente.
Alterar ou cancelar a reserva.
Confirmar a operação.
Cenário 1 – Alteração de reserva gera notificação

Dados de Teste:

Reserva alterada: horário de 08h00–09h30 para 10h00–11h30.

Resultado Esperado:

O sistema envia notificação ao responsável pela reserva informando a alteração.
Cenário 2 – Cancelamento de reserva gera notificação

Dados de Teste:

Reserva cancelada: Sala 101, 20/08, 08h00–09h30.

Resultado Esperado:

O sistema envia notificação ao responsável informando o cancelamento.
Cenário 3 – Falha no envio de notificação (caso negativo)

Dados de Teste:

Serviço de notificação indisponível no momento do cancelamento.

Resultado Esperado:

O sistema registra a falha de envio para nova tentativa e não impede o cancelamento/alteração da reserva.
O evento de falha fica registrado para auditoria (RNF-02).
CT-09 – Tempo de resposta da busca de salas (RNF-01)

Descrição:
Verificar se a busca por salas disponíveis responde em até 2 segundos.

Pré-condições:

Base de dados com volume representativo de salas e reservas cadastradas.

Passos:

Acessar a tela de busca de salas.
Informar critérios de busca (data, horário, capacidade e recursos).
Executar a busca e medir o tempo de resposta.
Cenário 1 – Busca dentro do limite de tempo

Dados de Teste:

Critérios: data 20/08, horário 08h00–09h30, capacidade mínima 30.

Resultado Esperado:

O sistema retorna o resultado da busca em até 2 segundos.
Cenário 2 – Busca com alto volume de dados (carga)

Dados de Teste:

Base com grande volume de salas e reservas simultâneas.

Resultado Esperado:

O sistema mantém o tempo de resposta dentro de 2 segundos mesmo sob carga elevada.
CT-10 – Trilha de auditoria das operações (RNF-02)

Descrição:
Verificar se todas as operações de reserva (criação, alteração e cancelamento) geram registro de auditoria.

Pré-condições:

Usuário autenticado.
Módulo de auditoria ativo.

Passos:

Realizar uma operação de criação, alteração ou cancelamento de reserva.
Acessar o log/trilha de auditoria.
Verificar o registro correspondente à operação realizada.
Cenário 1 – Registro de criação de reserva

Dados de Teste:

Operação: criação de reserva pela Sala 101, 20/08.

Resultado Esperado:

A trilha de auditoria registra usuário, data/hora, ação e dados da reserva criada.
Cenário 2 – Registro de alteração de reserva

Dados de Teste:

Operação: alteração de horário da reserva.

Resultado Esperado:

A trilha de auditoria registra os valores anteriores e os novos valores da reserva.
Cenário 3 – Registro de cancelamento de reserva

Dados de Teste:

Operação: cancelamento de reserva.

Resultado Esperado:

A trilha de auditoria registra o cancelamento, o responsável e o motivo, se informado.
CT-11 – Acesso limitado às unidades autorizadas (RNF-03)

Descrição:
Verificar se o usuário consegue visualizar e reservar salas apenas das unidades para as quais está autorizado.

Pré-condições:

Usuário autenticado com autorização vinculada a uma ou mais unidades específicas.

Passos:

Acessar a tela de busca/reserva de salas.
Tentar visualizar ou reservar uma sala de uma unidade não autorizada.
Tentar visualizar ou reservar uma sala de uma unidade autorizada.
Cenário 1 – Tentativa de acesso a unidade não autorizada

Dados de Teste:

Usuário: autorizado apenas para a Unidade Centro.
Tentativa: sala da Unidade Norte.

Resultado Esperado:

O sistema não exibe/não permite reserva de salas da Unidade Norte para esse usuário.
O sistema pode registrar a tentativa para fins de auditoria (RNF-02).
Cenário 2 – Acesso a unidade autorizada

Dados de Teste:

Usuário: autorizado para a Unidade Centro.
Consulta: sala da Unidade Centro.

Resultado Esperado:

O sistema exibe as salas da Unidade Centro e permite a reserva normalmente.
Pós-condições Gerais

Ao final de cada caso de teste:

A agenda de salas deve refletir corretamente o resultado da operação executada.
O histórico de reservas deve ser atualizado corretamente.
A trilha de auditoria deve registrar as operações conforme definido nos requisitos.
