# Denial of Service

Ataques negação de serviço (DoS) negar serviços a usuários válidos — por exemplo, fazendo um servidor Web temporariamente indisponível ou inutilizável. Você deve se proteger contra determinados tipos de ameaças DoS simplesmente para melhorar a confiabilidade e disponibilidade do sistema

---

## RPG-SEC-D01: Availability & Resilience

**Descrição**
Define os princípios de disponibilidade e resiliência em sistemas IoT, assegurando que dispositivos, redes e serviços mantenham funcionamento contínuo e confiável, mesmo diante de falhas, ataques ou condições adversas.

**Racional**
Ataques e falhas que comprometem a disponibilidade — como exaustão de recursos, interrupção de energia, interferência de canal ou sobrecarga de rede — podem paralisar sistemas críticos. Este grupo estabelece diretrizes para projetar arquiteturas resilientes, prevenir indisponibilidades e garantir recuperação rápida de serviços.

**Aplicabilidade**
Aplicável a todos os componentes IoT cuja indisponibilidade possa causar impacto operacional, econômico ou de segurança.
Inclui infraestrutura de energia, comunicação e hardware, bem como mecanismos de redundância, balanceamento de carga e mitigação de falhas.
Não aplicável a componentes auxiliares ou não críticos sem impacto direto na continuidade do serviço.

---

## Aplicação

## Dispositivo

### FRP-SEC-021: Proteção contra Dano Físico

<cvss-medium score="5.2" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:P/AC:L/AT:N/PR:N/UI:N/VC:L/VI:L/VA:H/SC:N/SI:N/SA:N">CVSS 5.2</cvss-medium>

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

**Considerações de Implementação e Teste**

> **Implementação:** uso de gabinetes selados, sensores anti-violação, redundância física em locais críticos, materiais robustos.
>
> **Teste:** simulação de vandalismo, testes de impacto físico, auditorias de logs de alarmes de violação, verificação da eficácia de desativação remota.

---

### FRP-SEC-023: Proteção contra Ataques de Privação do Sono

<cvss-high score="8.7" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N">CVSS 8.7</cvss-high>

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

**Considerações de Implementação e Teste**

> **Implementação:** uso de duty cycling, autenticação em requisições de *wake-up*, integração de IDS para análise de tráfego suspeito.
>
> **Teste:** simulação de ataques de tráfego malicioso contínuo, auditoria de políticas de energia, análise de logs de consumo para verificar detecção de anomalias.

---

## Rede

### NFRP-SEC-049: Mitigação de Ataques de Desautenticação de Wi-Fi

<cvss-critical score="9.2" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:L/SI:N/SA:H">CVSS 9.2</cvss-critical>

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

**Considerações de Implementação e Teste**

> **Implementação:** adoção de WPA3, monitoramento IDS/IPS para tráfego Wi-Fi, segregação de VLANs para IoT, chaves digitais renováveis.
>
> **Teste:** simulação de ataques de desautenticação, auditorias de robustez de protocolos Wi-Fi, validação de failover em redes alternativas.

---
