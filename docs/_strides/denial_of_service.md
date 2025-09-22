# Denial of Service

Ataques negação de serviço (DoS) negar serviços a usuários válidos — por exemplo, fazendo um servidor Web temporariamente indisponível ou inutilizável. Você deve se proteger contra determinados tipos de ameaças DoS simplesmente para melhorar a confiabilidade e disponibilidade do sistema

---

## Aplicação

### NFRP-SEC-050: Políticas Seguras de Bloqueio de Conta

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

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** políticas de bloqueio progressivo, rate limiting, monitoramento SIEM, mecanismos de recuperação baseados em MFA.
>
> **Teste:** simulação de ataques de força bruta, auditoria de logs de autenticação, validação de processos de desbloqueio e recuperação de conta.

---

## Dispositivo

### NFRP-SEC-003: Restrições de Energia

**Descrição**
Dispositivos IoT devem ser projetados para operar de forma eficiente sob restrições de energia, de modo que a limitação de consumo não comprometa a disponibilidade ou provoque falhas que resultem em indisponibilidade do serviço.

**Racional**
A escassez de energia pode causar interrupções no funcionamento de dispositivos IoT, resultando em degradação de desempenho, falhas de comunicação ou até paralisação total. Em ambientes críticos, isso equivale a uma forma de negação de serviço, mesmo que causada por limitações operacionais e não diretamente por um ataque.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve otimizar o consumo de energia em operações de comunicação e processamento.
* O sistema deve utilizar protocolos de baixo consumo, como **BLE, Zigbee ou LPWAN**.
* O sistema deve implementar gerenciamento de energia adaptativo, ajustando consumo conforme condições de operação.
* O sistema deve suportar técnicas de recuperação de energia (solar, cinética etc.).
* O sistema deve monitorar periodicamente o estado de energia e acionar manutenção preventiva quando necessário.

**Exemplos de Aplicação**

* Redes de sensores ambientais em áreas remotas, que precisam operar meses sem intervenção.
* Dispositivos de rastreamento logístico que mantêm disponibilidade por longos períodos sem recarga.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de protocolos otimizados para baixo consumo, algoritmos de duty cycle, integração com fontes de energia renovável (ex.: painéis solares).
>
> **Teste:** medições de consumo sob diferentes cenários de carga, simulação de falhas de energia, verificação de tempo de operação e disponibilidade.



---

### NFRP-SEC-017: Mitigação de Limitações Computacionais

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

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de algoritmos de criptografia leve (ex.: ECC, AES-CCM), protocolos de autenticação otimizados, técnicas de duty cycle.
>
> **Teste:** medições de desempenho sob diferentes cargas, testes de estresse para avaliar resistência a DoS, validação de eficiência de algoritmos em hardware limitado.

---

### FRP-SEC-021: Proteção contra Dano Físico

**Descrição**
O sistema deve proteger dispositivos IoT contra danos físicos resultantes de causas naturais, vandalismo ou ataques direcionados, prevenindo interrupções de serviço, perda de dados ou comprometimento da integridade do sistema.

**Racional**
Danos físicos ao hardware podem causar indisponibilidade imediata ou falhas críticas em sistemas IoT, comprometendo sua confiabilidade. Dispositivos desprotegidos em ambientes abertos ou acessíveis ao público são especialmente vulneráveis, tornando necessária a adoção de proteções físicas, monitoramento e planos de recuperação.

**Requisitos Concretos (Instanciados para IoT)**

* O dispositivo deve ser instalado em **locais fisicamente seguros**, de difícil acesso ao público.
* O dispositivo deve ser protegido por **gabinetes trancados ou invioláveis**.
* O dispositivo deve ser construído com **materiais resilientes** contra impactos e manipulações.
* O sistema deve implementar **monitoramento físico e alarmes** contra vandalismo ou remoção.
* O sistema deve aplicar **limitação de portas e interfaces físicas** expostas.
* O sistema deve possuir **procedimentos de recuperação rápida**, incluindo desativação remota e redefinição de credenciais em caso de comprometimento.

**Exemplos de Aplicação**

* Sensores de tráfego urbano instalados em caixas trancadas e monitoradas.
* Dispositivos médicos portáteis com sistema de desativação remota em caso de roubo.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de gabinetes selados, sensores anti-violação, redundância física em locais críticos, materiais robustos.
>
> **Teste:** simulação de vandalismo, testes de impacto físico, auditorias de logs de alarmes de violação, verificação da eficácia de desativação remota.

---

### FRP-SEC-023: Proteção contra Ataques de Privação do Sono

**Descrição**
O sistema deve prevenir ataques de privação do sono, garantindo que dispositivos IoT possam entrar corretamente em estados de suspensão e modos de economia de energia, mesmo na presença de tráfego ou comandos maliciosos.

**Racional**
Dispositivos IoT dependentes de bateria são alvos fáceis para ataques de privação do sono, que os impedem de entrar em repouso, esgotando rapidamente a energia e causando indisponibilidade. Esse tipo de ataque compromete a confiabilidade e a disponibilidade de redes IoT, especialmente em ambientes críticos ou remotos.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **políticas de gerenciamento de energia eficientes** para garantir a entrada em modos de economia.
* O sistema deve aplicar **filtragem de requisições** para limitar chamadas excessivas que mantenham o dispositivo acordado.
* O sistema deve usar **detecção de anomalias** para identificar tráfego suspeito de manter o dispositivo ativo.
* O sistema deve exigir **autenticação e autorização rigorosas** para manter dispositivos ativos apenas sob requisições legítimas.
* O sistema deve aplicar **atualizações regulares de firmware e software** para corrigir vulnerabilidades conhecidas.
* O dispositivo deve ser projetado em hardware para **resistir a tentativas de impedir modos de suspensão**.

**Exemplos de Aplicação**

* Sensores ambientais movidos a bateria que ignoram requisições suspeitas que visam mantê-los constantemente ativos.
* Dispositivos vestíveis (wearables) que detectam tráfego malicioso e entram em suspensão protegida.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de duty cycling, autenticação em requisições de *wake-up*, integração de IDS para análise de tráfego suspeito.
>
> **Teste:** simulação de ataques de tráfego malicioso contínuo, auditoria de políticas de energia, análise de logs de consumo para verificar detecção de anomalias.

---

### NFRP-SEC-043: Resiliência Física do Sistema de Energia

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

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de UPS e geradores redundantes, integração com sistemas SCADA de energia, design de hardware eficiente.
>
> **Teste:** simulações de queda de energia, auditorias de consumo, testes de failover para fontes redundantes.




## Rede

### NFRP-SEC-018: Mitigação de Baixo Alcance de Transmissão

**Descrição**
O sistema deve ser projetado para operar de forma confiável mesmo em cenários de baixo alcance de transmissão, utilizando protocolos, topologias e técnicas que aumentem a resiliência e a disponibilidade da comunicação.

**Racional**
Dispositivos com alcance limitado de transmissão estão mais suscetíveis a ataques de proximidade e interrupções de comunicação. Isso pode levar a indisponibilidade parcial ou total da rede IoT, afetando sua confiabilidade e expondo pontos de ataque em ambientes sensíveis.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **protocolos de comunicação eficientes** que minimizem overhead.
* O sistema deve realizar **planejamento de rede** considerando ambiente físico e interferências.
* O sistema deve selecionar **tecnologias adequadas ao alcance necessário** (ex.: LoRaWAN, Sigfox, Wi-Fi, Bluetooth).
* O sistema deve adotar **topologias de rede apropriadas**, como redes mesh para estender cobertura.
* O sistema deve implementar **repetidores e gateways estratégicos** para estender o alcance.
* O sistema deve otimizar a **potência de transmissão**, equilibrando consumo de energia e cobertura.

**Exemplos de Aplicação**

* Redes de sensores em áreas agrícolas que usam LoRaWAN para ampliar o alcance de comunicação.
* Casas inteligentes que utilizam redes mesh Zigbee para garantir conectividade mesmo em áreas com paredes grossas.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** seleção de protocolos de baixo alcance (BLE, Zigbee) ou longo alcance (LoRaWAN), configuração de topologia mesh, balanceamento de potência de transmissão.
>
> **Teste:** medição da cobertura em diferentes cenários físicos, testes de resiliência contra interferências, simulação de ataques de proximidade para avaliar impacto na disponibilidade.

---

### NFRP-SEC-029: Mitigação de Riscos em Arquitetura Centralizada

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

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de arquiteturas distribuídas (fog/edge computing), clusters redundantes, redes segmentadas, TLS 1.3 para comunicações seguras.
>
> **Teste:** simulação de falha do servidor central, auditorias de disponibilidade de failover, testes de resiliência contra ataques DDoS.

---


### NFRP-SEC-030: Mitigação de Interferência de Canal

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

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** integração de análise de espectro, protocolos adaptativos, hardware com múltiplas antenas, blindagem EM.
>
> **Teste:** simulação de ataques de jamming, medição de desempenho sob interferências, validação da eficácia de failover entre canais.

---

### NFRP-SEC-031: Mitigação de Sobrecarga de Comunicação


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

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de protocolos leves (CoAP, MQTT-SN), compressão adaptativa, rate limiting no firmware, integração com IDS/IPS.
>
> **Teste:** simulações de tráfego intenso, testes de carga em gateways IoT, auditorias de resiliência contra ataques de flooding e DoS.

---

### NFRP-SEC-049: Mitigação de Ataques de Desautenticação de Wi-Fi

**Descrição**
O sistema deve proteger dispositivos IoT contra ataques de desautenticação em redes Wi-Fi, garantindo conectividade contínua e resiliência mesmo diante de tentativas maliciosas de desconexão forçada.

**Racional**
Em ambientes domésticos ou corporativos, a desautenticação de Wi-Fi pode desconectar dispositivos IoT de suas redes, causando perda de serviço e expondo a rede a acessos indevidos. A mitigação exige o uso de protocolos modernos, monitoramento ativo e, quando possível, alternativas de comunicação redundantes.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **Wi-Fi com WPA3**, resistente a ataques de desautenticação.
* A rede deve implementar **monitoramento de tentativas de desautenticação** e alertas em tempo real.
* O sistema deve aplicar **gerenciamento robusto de chaves**, incluindo renovação periódica e uso de certificados digitais.
* O sistema deve adotar **separação de rede** para isolar dispositivos IoT críticos.
* O sistema deve considerar **redes alternativas** (cabeadas, Zigbee, Z-Wave) como redundância.

**Exemplos de Aplicação**

* Casas inteligentes com roteadores WPA3 que bloqueiam ataques de deauth.
* Ambientes industriais que usam Zigbee como fallback caso o Wi-Fi seja derrubado.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** adoção de WPA3, monitoramento IDS/IPS para tráfego Wi-Fi, segregação de VLANs para IoT, chaves digitais renováveis.
>
> **Teste:** simulação de ataques de desautenticação, auditorias de robustez de protocolos Wi-Fi, validação de failover em redes alternativas.

---
