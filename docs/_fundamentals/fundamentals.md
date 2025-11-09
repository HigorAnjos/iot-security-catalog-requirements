# RPG-SEC-F01: IoT Fundamental (Non-Functional Domain)

**Descrição**
Define os princípios não funcionais e contextuais que asseguram a operação confiável, eficiente e sustentável de ecossistemas IoT. Este grupo aborda restrições arquiteturais, físicas e ambientais que impactam a segurança, desempenho e resiliência dos sistemas conectados.

**Racional**
Requisitos não funcionais são pilares invisíveis da segurança em IoT. Eles influenciam diretamente a confiabilidade do sistema — desde limitações energéticas e de processamento até interferências de canal e resiliência física. Este grupo consolida práticas para mitigar riscos inerentes à natureza distribuída, heterogênea e, muitas vezes, de baixo custo das implementações IoT.

**Aplicabilidade**
Aplicável de forma transversal a todos os domínios STRIDE e camadas da arquitetura IoT (aplicação, rede e dispositivo).
Inclui mitigação de riscos operacionais, restrições de hardware, eficiência energética, interferência de canal e resiliência física.
Não aplicável a funções puramente lógicas que não dependam de restrições contextuais ou ambientais.

---

## Arquiteturais

### NFRP-SEC-050: Políticas Seguras de Bloqueio de Conta

<cvss-critical score="9.2" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:H">CVSS 9.2</cvss-critical>

**Descrição**
O sistema deve implementar mecanismos robustos de bloqueio de conta para proteger contra ataques de força bruta sem comprometer a disponibilidade de usuários legítimos, prevenindo que o recurso seja explorado como forma de ataque de negação de serviço.

**Racional**
Tentativas de login excessivas podem indicar ataques de força bruta, mas políticas mal configuradas de bloqueio de conta também podem ser exploradas para impedir que usuários legítimos acessem seus dispositivos e serviços. O equilíbrio entre segurança e disponibilidade exige monitoramento, limitação de taxa e opções de recuperação de acesso.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve aplicar **políticas de bloqueio robustas** (ex.: bloqueio após 3–5 tentativas inválidas, desbloqueio temporizado).
* O sistema deve **registrar e monitorar atividades de autenticação** para identificar padrões suspeitos.
* O sistema deve adotar **mitigações contra DoS**, como rate limiting e filtragem de tráfego.
* O sistema deve fornecer **recursos seguros de recuperação de conta** (redefinição de senha, validação de identidade).

**Exemplos de Aplicação**

* Plataformas IoT em nuvem que bloqueiam login após tentativas consecutivas inválidas e notificam o usuário.
* Gateways de rede que implementam rate limiting para evitar bloqueios em massa por força bruta.

**Considerações de Implementação e Teste**

> **Implementação:** políticas de bloqueio progressivo, rate limiting, monitoramento SIEM, mecanismos de recuperação baseados em MFA.
>
> **Teste:** simulação de ataques de força bruta, auditoria de logs de autenticação, validação de processos de desbloqueio e recuperação de conta.

---

### NFRP-SEC-031: Mitigação de Sobrecarga de Comunicação

<cvss-critical score="9.2" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:L/VA:H/SC:H/SI:L/SA:N">CVSS 9.2</cvss-critical>

**Descrição**
O sistema deve prevenir e mitigar situações de sobrecarga de comunicação em redes IoT, garantindo desempenho estável, baixa latência e disponibilidade mesmo sob tráfego intenso ou ataques de inundação.

**Racional**
Quando a quantidade de pacotes transmitidos excede a capacidade da rede ou dos servidores, o sistema sofre degradação de desempenho, perda de pacotes e até indisponibilidade. Além de problemas operacionais, a sobrecarga pode ser explorada por atacantes em ataques de negação de serviço.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **protocolos de comunicação eficientes** que minimizem overhead.
* O sistema deve aplicar **compressão de dados** antes da transmissão.
* O sistema deve implementar **limitação de taxa de transmissão** (rate limiting) para evitar saturação da rede.
* O sistema deve usar **cache distribuído** para reduzir tráfego redundante.
* O sistema deve adotar **monitoramento de tráfego e detecção de anomalias** para prever sobrecargas.
* O sistema deve implementar **medidas de resiliência a ataques DoS**, como firewalls, filtragem de pacotes e IDS/IPS.

**Exemplos de Aplicação**

* Dispositivos de telemetria que utilizam MQTT com compressão e controle de taxa para evitar congestionamento.
* Gateways industriais que fazem cache local de dados antes de enviá-los para a nuvem.

**Considerações de Implementação e Teste**

> **Implementação:** uso de protocolos leves (CoAP, MQTT-SN), compressão adaptativa, rate limiting no firmware, integração com IDS/IPS.
>
> **Teste:** simulações de tráfego intenso, testes de carga em gateways IoT, auditorias de resiliência contra ataques de flooding e DoS.

---

### NFRP-SEC-029: Mitigação de Riscos em Arquitetura Centralizada

<cvss-critical score="9.2" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:L/VI:H/VA:H/SC:H/SI:L/SA:N">CVSS 9.2</cvss-critical>

**Descrição**
O sistema deve reduzir a dependência de arquiteturas centralizadas, garantindo resiliência e continuidade de operação mesmo em caso de falhas ou ataques ao servidor central de controle.

**Racional**
A centralização do controle e processamento em um único ponto cria vulnerabilidades críticas: ataques ao servidor central podem paralisar toda a rede, comprometer dados ou impedir a execução de serviços essenciais. Distribuir funções, segmentar redes e adotar redundância são medidas essenciais para manter disponibilidade e confiabilidade.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve **distribuir funcionalidades de controle e processamento** entre dispositivos ou nós intermediários.
* O sistema deve implementar **redundância e failover** para o servidor central.
* O sistema deve aplicar **segmentação de rede** com firewalls e ACLs para limitar exposição do ponto central.
* O sistema deve utilizar **criptografia e autenticação fortes** na comunicação entre dispositivos e o servidor central.
* O sistema deve manter **monitoramento contínuo** e capacidade de resposta rápida a incidentes no ponto central.

**Exemplos de Aplicação**

* Redes de smart cities que usam múltiplos gateways descentralizados para processar dados localmente.
* Sistemas industriais que mantêm servidores redundantes para controle de equipamentos críticos.

**Considerações de Implementação e Teste**

> **Implementação:** uso de arquiteturas distribuídas (fog/edge computing), clusters redundantes, redes segmentadas, TLS 1.3 para comunicações seguras.
>
> **Teste:** simulação de falha do servidor central, auditorias de disponibilidade de failover, testes de resiliência contra ataques DDoS.

---

### NFRP-SEC-024: Mitigação de Riscos em Sistemas de Baixo Custo

<cvss-critical score="9.9" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:H/SI:L/SA:N">CVSS 9.9</cvss-critical>

**Descrição**
O sistema deve considerar riscos adicionais ao utilizar dispositivos IoT de baixo custo, adotando medidas complementares para compensar a falta de proteções nativas, prevenindo adulterações, comprometimento de dados ou exploração por atacantes.

**Racional**
Dispositivos de baixo custo frequentemente sacrificam práticas de segurança em troca de preço acessível, o que os torna mais vulneráveis a adulterações e ataques. Sem medidas adicionais, esses equipamentos podem comprometer toda a rede IoT, inclusive ativos críticos.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve priorizar **dispositivos com certificações de segurança reconhecidas**.
* O sistema deve adotar **medidas adicionais de proteção** para dispositivos de baixo custo (ex.: firewalls, segmentação de rede, VPNs).
* O sistema deve realizar **monitoramento contínuo** para identificar anomalias ou atividades suspeitas.
* O sistema deve garantir **atualizações de firmware e patches de segurança** sempre que disponíveis.
* O sistema deve **isolar dispositivos críticos de dispositivos de baixo custo** em arquiteturas de rede.
* O sistema deve realizar **avaliação de riscos periódica** sobre o uso de dispositivos de baixo custo em ambientes sensíveis.

**Exemplos de Aplicação**

* Câmeras IP de baixo custo em ambientes domésticos protegidas via segmentação de rede e firewall.
* Sensores genéricos em ambientes industriais isolados da rede de controle principal.

**Considerações de Implementação e Teste**

> **Implementação:** uso de firewalls locais, segmentação VLAN, gateways seguros, isolamento físico/lógico de dispositivos frágeis.
>
> **Teste:** auditorias de firmware de dispositivos baratos, testes de penetração focados em bypass de autenticação, verificação da disponibilidade de atualizações de fabricante.

---

## Infraestruturais

### NFRP-SEC-003: Restrições de Energia

<cvss-high score="8.7" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N">CVSS 8.7</cvss-high>

**Descrição**
O sistema deve garantir que dispositivos IoT operem de forma eficiente sob restrições de energia, evitando que limitações de consumo provoquem falhas ou indisponibilidade dos serviços.

**Racional**
Sensores e atuadores IoT frequentemente funcionam em ambientes com energia limitada (bateria, energia solar). O consumo ineficiente pode causar interrupções, degradação de desempenho ou até paralisação total, o que equivale a uma forma de negação de serviço mesmo sem ataque direto.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve otimizar o consumo de energia em operações de comunicação e processamento.
* O sistema deve utilizar protocolos de baixo consumo, como **BLE, Zigbee ou LPWAN**.
* O sistema deve implementar gerenciamento de energia adaptativo, ajustando consumo conforme as condições de operação.
* O sistema deve suportar técnicas de recuperação de energia (ex.: solar, cinética).
* O sistema deve monitorar periodicamente o estado de energia e acionar manutenção preventiva quando necessário.

**Exemplos de Aplicação**

* Redes de sensores ambientais em áreas remotas que precisam operar meses sem manutenção.
* Dispositivos de rastreamento logístico que funcionam longos períodos sem recarga.

**Considerações de Implementação e Teste**

> **Implementação:** protocolos otimizados para baixo consumo, duty cycling, integração de módulos de recuperação de energia.
>
> **Teste:** medições de consumo em cenários reais, simulação de falhas de energia, verificação da disponibilidade sob diferentes condições de carga.

---

### NFRP-SEC-017: Mitigação de Limitações Computacionais

<cvss-high score="8.8" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:L/VI:L/VA:H/SC:N/SI:N/SA:N">CVSS 8.8</cvss-high>

**Descrição**
O sistema deve ser projetado para operar de forma segura mesmo em dispositivos com baixo poder computacional, utilizando algoritmos e protocolos otimizados que equilibrem segurança, desempenho e consumo de recursos.

**Racional**
Dispositivos IoT geralmente possuem limitações severas de processamento e memória. Isso os torna alvos mais fáceis para ataques de exaustão de recursos e dificulta a aplicação de medidas tradicionais de segurança. Sem mitigação, a fragilidade computacional pode levar à indisponibilidade do serviço e à exposição de informações sensíveis.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **algoritmos de segurança leves e eficientes**, adaptados a dispositivos com recursos limitados.
* O sistema deve empregar **protocolos de autenticação otimizados** para baixo consumo de CPU.
* O sistema deve adotar **técnicas de computação aproximada** em cenários onde isso aumente a privacidade ou resiliência.
* O sistema deve implementar **técnicas de gerenciamento de energia** para equilibrar desempenho e segurança.
* O sistema deve manter **resiliência a falhas** mesmo sob restrições de processamento.

**Exemplos de Aplicação**

* Sensores ambientais de baixo consumo que utilizam criptografia leve para transmissão de dados.
* Dispositivos de rastreamento que equilibram ciclos de operação e segurança para manter disponibilidade.

**Considerações de Implementação e Teste**

> **Implementação:** uso de algoritmos de criptografia leve (ex.: ECC, AES-CCM), protocolos de autenticação otimizados, técnicas de duty cycle.
>
> **Teste:** medições de desempenho sob diferentes cargas, testes de estresse para avaliar resistência a DoS, validação de eficiência de algoritmos em hardware limitado.

---

### NFRP-SEC-018: Mitigação de Baixo Alcance de Transmissão

<cvss-high score="7.1" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:A/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N">CVSS 7.1</cvss-high>

**Descrição**
O sistema deve ser projetado para operar de forma confiável mesmo em cenários de baixo alcance de transmissão, utilizando protocolos, topologias e técnicas que aumentem a resiliência e a disponibilidade da comunicação.

**Racional**
Dispositivos com alcance limitado de transmissão estão mais suscetíveis a ataques de proximidade e interrupções de comunicação. Isso pode levar a indisponibilidade parcial ou total da rede IoT, afetando sua confiabilidade e expondo pontos de ataque em ambientes sensíveis.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **protocolos de comunicação eficientes e resilientes** a perdas, como Zigbee, Z-Wave ou Thread.
* O sistema deve realizar **planejamento de rede** considerando ambiente físico e interferências.
* O sistema deve selecionar **tecnologias adequadas ao alcance necessário** (ex.: LoRaWAN, Sigfox, Wi-Fi, Bluetooth).
* O sistema deve adotar **topologias de rede apropriadas**, como redes mesh para estender cobertura.
* O sistema deve implementar **repetidores e gateways estratégicos** para estender o alcance.
* O sistema deve otimizar a **potência de transmissão**, equilibrando consumo de energia e cobertura.

**Exemplos de Aplicação**

* Redes de sensores em áreas agrícolas que usam LoRaWAN para ampliar o alcance de comunicação.
* Casas inteligentes que utilizam redes mesh Zigbee para garantir conectividade mesmo em áreas com paredes grossas.

**Considerações de Implementação e Teste**

> **Implementação:** seleção de protocolos de baixo alcance (BLE, Zigbee) ou longo alcance (LoRaWAN), configuração de topologia mesh, balanceamento de potência de transmissão.
>
> **Teste:** medição da cobertura em diferentes cenários físicos, testes de resiliência contra interferências, simulação de ataques de proximidade para avaliar impacto na disponibilidade.

---



### NFRP-SEC-030: Mitigação de Interferência de Canal

<cvss-high score="7.1" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:A/AC:L/AT:N/PR:N/UI:N/VC:N/VI:L/VA:H/SC:L/SI:N/SA:N">CVSS 7.1</cvss-high>

**Descrição**
O sistema deve proteger os canais de comunicação sem fio contra interferências intencionais ou acidentais, garantindo a integridade e a disponibilidade das comunicações entre dispositivos IoT.

**Racional**
Dispositivos IoT que dependem de canais sem fio são suscetíveis a interferências eletromagnéticas e ataques de jamming, que podem bloquear ou degradar a comunicação. Sem mitigação, a rede IoT pode sofrer interrupções críticas, comprometendo sua confiabilidade e disponibilidade.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve identificar e utilizar **canais de comunicação livres e menos congestionados**.
* O sistema deve aplicar **técnicas de mitigação**, como seleção dinâmica de canais, controle adaptativo de potência e protocolos de correção de erros.
* O dispositivo deve suportar **diversidade de antenas e MIMO** para maior resiliência contra interferência.
* O sistema deve implementar **isolamento físico e blindagem** para reduzir exposição a interferências externas.
* O sistema deve realizar **monitoramento contínuo dos canais** para detectar e diagnosticar interferências.

**Exemplos de Aplicação**

* Redes Zigbee em casas inteligentes que trocam automaticamente de canal quando detectam interferência.
* Dispositivos industriais que usam antenas MIMO para manter estabilidade mesmo em ambientes ruidosos.

**Considerações de Implementação e Teste**

> **Implementação:** integração de análise de espectro, protocolos adaptativos, hardware com múltiplas antenas, blindagem EM.
>
> **Teste:** simulação de ataques de jamming, medição de desempenho sob interferências, validação da eficácia de failover entre canais.

---

## Físicos

### NFRP-SEC-007: Proteção contra Vazamento de Emanações Eletromagnéticas

<cvss-medium score="5.6" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:P/AC:H/AT:N/PR:N/UI:N/VC:H/VI:N/VA:N/SC:H/SI:N/SA:N">CVSS 5.6</cvss-medium>

**Descrição**
O sistema deve proteger dispositivos IoT contra a exposição não intencional de informações por meio de emanações eletromagnéticas que possam ser exploradas por atacantes para inferir dados processados ou transmitidos.

**Racional**
Dispositivos IoT podem vazar informações através de campos eletromagnéticos emitidos durante seu funcionamento. Pesquisas já demonstraram que é possível identificar hábitos de uso ou até mesmo conteúdos consumidos a partir dessas emanações, comprometendo a privacidade do usuário e a segurança do sistema.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **técnicas robustas de criptografia** para dados armazenados e transmitidos.
* O sistema deve aplicar **atualizações de firmware regulares** para mitigar vulnerabilidades conhecidas.
* O sistema deve implementar **autenticação forte** para restringir acesso a dados sensíveis.
* O sistema deve realizar **monitoramento de rede** para detectar vazamentos de dados ou acessos suspeitos.
* O sistema deve incluir **orientações de conscientização do usuário** sobre riscos de emanações e boas práticas de segurança.

**Exemplos de Aplicação**

* Dispositivos de energia residencial que podem vazar informações de consumo elétrico, inferindo atividades dos moradores.
* Sensores industriais que, sem proteção adequada, podem permitir que terceiros monitorem padrões de produção via emanações.

**Considerações de Implementação e Teste**

> **Implementação:** uso de filtros eletromagnéticos em hardware, isolamento físico, criptografia ponta a ponta, hardening de firmware.
>
> **Teste:** testes de laboratório de emanações eletromagnéticas, simulações de ataques de *side-channel*, auditorias de firmware para verificar implementação de criptografia.

--- 

### NFRP-SEC-015: Proteção contra Canais Laterais

<cvss-medium score="4.1" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:P/AC:H/AT:P/PR:N/UI:N/VC:H/VI:N/VA:N/SC:N/SI:N/SA:N">CVSS 4.1</cvss-medium>

**Descrição**
O sistema deve prevenir o vazamento de informações sensíveis por meio de canais laterais, como padrões de consumo de energia, emissões eletromagnéticas ou tempos de resposta, que possam ser explorados para inferir dados confidenciais.

**Racional**
Ataques de canal lateral permitem que adversários obtenham informações valiosas sobre dados ou processos internos sem precisar interceptar a comunicação diretamente. Isso compromete a privacidade e pode expor chaves criptográficas, operações críticas ou hábitos de uso, enfraquecendo a segurança do ecossistema IoT.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve adotar **métricas para priorizar recursos** de mitigação em áreas mais suscetíveis a vazamento.
* O dispositivo deve implementar **normalização do consumo de energia**, evitando variações perceptíveis baseadas em operações.
* O dispositivo deve utilizar **blindagem física e eletromagnética** contra vazamentos.
* O sistema deve introduzir **ruído ou variação aleatória em tempos de resposta** para dificultar inferências.
* O hardware e software devem ser projetados **com resiliência a canais laterais desde a fase de design**.

**Exemplos de Aplicação**

* Dispositivos criptográficos embarcados com blindagem contra análise eletromagnética.
* Smartcards que introduzem ruído aleatório em tempos de resposta para resistir a ataques de *timing*.

**Considerações de Implementação e Teste**

> **Implementação:** uso de técnicas de *constant-time execution*, blindagem EM, variação controlada de consumo de energia, ruído aleatório em hardware/firmware.
>
> **Teste:** simulações de ataques de análise de energia (DPA/SPA), auditorias de ruído eletromagnético, testes de side-channel em laboratório.

---

### NFRP-SEC-043: Resiliência Física do Sistema de Energia

<cvss-medium score="6.8" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:P/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:L/SA:H">CVSS 6.8</cvss-medium>

**Descrição**
O sistema deve garantir resiliência da infraestrutura energética que suporta dispositivos IoT, prevenindo interrupções no fornecimento de energia e protegendo contra ataques, falhas ou desastres que possam comprometer a disponibilidade.

**Racional**
Dispositivos IoT dependem de fornecimento contínuo de energia elétrica. Vulnerabilidades no sistema de energia, como falhas físicas, flutuações de voltagem ou ataques, podem causar indisponibilidade e perda de confiabilidade dos serviços. Estratégias de redundância, eficiência e proteção física são essenciais para mitigar esse risco.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve possuir **fontes de energia redundantes** (baterias, geradores).
* O sistema deve utilizar **reguladores de voltagem e UPS** para proteção contra flutuações.
* O sistema deve adotar **monitoramento de energia em tempo real** para detectar anomalias.
* A infraestrutura de energia deve ser **fisicamente protegida** contra vandalismo e desastres.
* Os dispositivos devem ser projetados com **eficiência energética** e modos de baixo consumo.
* O sistema deve realizar **manutenção preventiva e inspeções regulares**.
* O sistema deve incorporar **armazenamento avançado de energia** (baterias de longa duração, sistemas em rede).

**Exemplos de Aplicação**

* Estações de sensores ambientais em áreas remotas alimentadas por painéis solares com baterias de backup.
* Infraestruturas críticas (ex.: hospitais) que utilizam UPS e geradores redundantes para manter dispositivos IoT funcionando em emergências.

**Considerações de Implementação e Teste**

> **Implementação:** uso de UPS e geradores redundantes, integração com sistemas SCADA de energia, design de hardware eficiente.
>
> **Teste:** simulações de queda de energia, auditorias de consumo, testes de failover para fontes redundantes.

--- 