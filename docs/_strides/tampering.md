# Tampering

Ameaças relacionadas à modificação não autorizada de dados ou sistemas.

---

# Dispositivo

## FRP-SEC-010: Firmware Seguro 

**Descrição**
O sistema deve garantir que o firmware de dispositivos IoT seja projetado, distribuído e mantido de forma segura, prevenindo exploração de vulnerabilidades que possam comprometer a integridade, a confidencialidade ou a disponibilidade do dispositivo e dos dados que ele manipula.

**Racional**
O firmware é o software de baixo nível que controla os dispositivos IoT. Vulnerabilidades nessa camada são altamente críticas, pois permitem que atacantes obtenham controle completo sobre o dispositivo. A falta de atualizações frequentes e a heterogeneidade do ecossistema IoT aumentam o risco de exploração.

**Requisitos Concretos (Instanciados para IoT)**

* O firmware deve ser submetido a **testes de segurança rigorosos** antes do lançamento.
* O sistema deve oferecer **atualizações regulares e seguras de firmware** (patches e respostas rápidas a novas ameaças).
* O firmware deve implementar **criptografia forte e autenticação robusta** para proteger dados armazenados e transmitidos.
* O firmware deve ser submetido a **auditorias regulares** para identificar vulnerabilidades e backdoors.
* O desenvolvimento do firmware deve seguir **práticas de codificação segura**, incluindo revisão de código, análise estática e testes de penetração.

**Exemplos de Aplicação**

* Câmeras IP que recebem atualizações automáticas de firmware para corrigir falhas de segurança.
* Sensores industriais que validam a integridade do firmware antes de inicializar.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** assinar digitalmente o firmware, adotar boot seguro, mecanismos OTA (Over-The-Air) confiáveis, integração de análise estática e ferramentas SAST/DAST.
>
> **Teste:** auditorias de firmware, fuzzing em interfaces, verificação de assinatura digital durante o processo de boot, simulação de ataques de manipulação de firmware.

---

## FRP-SEC-011: Inicialização Segura

**Descrição**
O sistema deve garantir a integridade e a autenticidade do processo de inicialização dos dispositivos IoT, prevenindo que firmware adulterado, configurações modificadas ou hardware não autorizado sejam carregados durante o boot.

**Racional**
A fase de inicialização é crítica: qualquer comprometimento nesse estágio pode permitir a execução de firmware malicioso ou configuração adulterada, comprometendo todo o dispositivo desde o primeiro momento. Um boot inseguro fornece aos atacantes controle total do dispositivo e pode neutralizar camadas posteriores de proteção.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **autenticação robusta de firmware** durante a inicialização.
* O sistema deve realizar **verificação de integridade do firmware** a cada boot.
* O sistema deve proteger as **configurações de inicialização** contra modificações não autorizadas (ex.: assinaturas digitais, chaves criptográficas).
* O sistema deve aplicar **autenticação de hardware** no processo de inicialização para validar a legitimidade dos componentes.
* O sistema deve garantir **atualizações regulares de segurança** para firmware e software relacionados ao boot.

**Exemplos de Aplicação**

* Dispositivos industriais que só inicializam após verificar a assinatura digital do firmware.
* Smartphones ou câmeras IP que não carregam sistemas modificados sem chave de fabricante.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de *secure boot*, assinaturas digitais de firmware, armazenamento seguro de chaves, módulos TPM/TEE para validação.
>
> **Teste:** simulações de alteração de firmware e configuração, testes de bypass do processo de boot, validação de logs de inicialização, auditoria de integridade do firmware.

---


## FRP-SEC-019: Proteção contra Injeção de Código Malicioso

**Descrição**
O sistema deve prevenir a injeção e execução de código malicioso em dispositivos IoT, garantindo que apenas software e firmware legítimos e íntegros possam ser instalados e executados.

**Racional**
A injeção de código malicioso pode dar controle remoto total ao atacante, comprometendo não só o dispositivo, mas todo o ecossistema IoT. Um ataque bem-sucedido pode incluir instalação de firmware adulterado via atualização insegura ou exploração de falhas de entrada de dados, levando à perda de integridade, confidencialidade e disponibilidade.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **validação e saneamento rigoroso de entradas** para evitar injeção de código.
* O sistema deve adotar **práticas seguras de programação**, prevenindo buffer overflows e uso inseguro de memória.
* O sistema deve realizar **atualizações de firmware seguras**, com verificação de integridade e autenticidade.
* O sistema deve aplicar **patches de segurança regulares** para corrigir vulnerabilidades exploráveis.
* O sistema deve empregar **segurança em camadas**, incluindo IDS/IPS e autenticação forte.
* O sistema deve realizar **monitoramento contínuo e auditorias de segurança** para detectar atividades suspeitas.

**Exemplos de Aplicação**

* Dispositivos de automação residencial que verificam assinatura digital antes de instalar firmware.
* Gateways industriais que rejeitam entradas inválidas e monitoram comportamento anômalo em tempo real.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de assinaturas digitais em firmware, secure boot, hardening de software, práticas de programação segura (ex.: SAFE-C).
>
> **Teste:** fuzzing de entradas, simulação de injeção em firmware OTA, auditorias de código, testes de penetração focados em bypass de validação.

---

## FRP-SEC-022: Proteção contra Violação Física

**Descrição**
O sistema deve prevenir e detectar tentativas de violação física em dispositivos IoT, protegendo dados sensíveis, firmware e componentes de hardware contra adulteração, modificação ou uso malicioso.

**Racional**
A violação física permite que adversários manipulem dispositivos, insiram impostores no sistema ou instalem firmware adulterado. Esse tipo de ataque compromete diretamente a integridade do dispositivo e pode abrir caminho para ataques em rede mais amplos.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve criptografar **dados sensíveis armazenados localmente**, tornando-os inúteis em caso de extração física.
* O dispositivo deve estar em **locais fisicamente protegidos** ou em gabinetes/lacres de segurança.
* O dispositivo deve **desabilitar ou proteger portas de comunicação não utilizadas** (ex.: USB, JTAG).
* O sistema deve implementar **sensores de detecção de violação física** que acionem alarmes ou desativem o dispositivo.
* O firmware deve ser **assinado digitalmente e protegido** contra substituição não autorizada.
* O sistema deve armazenar **chaves criptográficas em hardware seguro** (TPM, Secure Element).
* O hardware deve ser projetado com **componentes resistentes à violação** e encapsulamentos anti-intrusão.

**Exemplos de Aplicação**

* Dispositivos RFID em logística que apagam chaves ao detectar violação física.
* Gateways IoT que desativam automaticamente funções críticas quando lacres são rompidos.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de TPMs, firmware assinado, gabinetes selados, sensores anti-intrusão.
>
> **Teste:** auditorias de hardware, testes de extração de chaves criptográficas, simulações de ataque físico (decapping, glitching), validação de mecanismos anti-tampering.

---

## NFRP-SEC-024: Mitigação de Riscos em Sistemas de Baixo Custo

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

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de firewalls locais, segmentação VLAN, gateways seguros, isolamento físico/lógico de dispositivos frágeis.
>
> **Teste:** auditorias de firmware de dispositivos baratos, testes de penetração focados em bypass de autenticação, verificação da disponibilidade de atualizações de fabricante.



---
# Rede

## FRP-SEC-008: Interação Segura em Ambientes Heterogêneos

**Descrição**
O sistema deve garantir a segurança das interações entre dispositivos IoT heterogêneos, prevenindo exploração de falhas resultantes de diferenças de hardware, software, protocolos de comunicação e configurações.

**Racional**
A heterogeneidade em ambientes IoT cria superfícies de ataque ampliadas: dispositivos de diferentes fabricantes podem não seguir as mesmas práticas de segurança, introduzindo vulnerabilidades que permitem manipulação de dados ou bypass de controles. Essa lacuna pode ser explorada para comprometer a integridade e a confiabilidade do ecossistema IoT.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve adotar **padrões de segurança consistentes** para todos os dispositivos conectados.
* O sistema deve empregar **gateways e proxies seguros** para mediar a comunicação entre dispositivos heterogêneos.
* O sistema deve implementar **monitoramento e gerenciamento centralizado** para todos os dispositivos, independentemente da origem.
* O sistema deve aplicar **políticas de autenticação, criptografia e autorização** de forma uniforme.
* O sistema deve garantir **atualizações e patches regulares** para todos os dispositivos na rede.

**Exemplos de Aplicação**

* Smart homes que integram dispositivos de fabricantes diferentes e usam um gateway seguro para unificar protocolos.
* Ambientes industriais com sensores heterogêneos monitorados por um sistema central de segurança e gerenciamento.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de gateways seguros, protocolos interoperáveis padronizados (MQTT-S, CoAP, OPC UA), integração com frameworks de conformidade.
>
> **Teste:** simulações de ataques em ambientes com múltiplos fabricantes, auditorias de conformidade de segurança, verificação de compatibilidade e resiliência em comunicações cruzadas.

---

## FRP-SEC-009: Transferência e Armazenamento Seguros de Dados

**Descrição**
O sistema deve garantir a integridade e a confidencialidade dos dados em trânsito e em repouso, prevenindo que informações coletadas ou transmitidas por dispositivos IoT sejam expostas ou manipuladas por atacantes.

**Racional**
Dados manipulados ou expostos em dispositivos IoT podem comprometer decisões críticas de sistemas automatizados. Ataques como injeção de dados falsos em sensores podem direcionar comportamentos indesejados, causar falhas operacionais ou até explorar a infraestrutura inteira conectada.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve aplicar **criptografia robusta** para dados em trânsito e em repouso (ex.: TLS, criptografia de disco).
* O sistema deve proteger **chaves criptográficas** usando hardware dedicado, como HSMs.
* O sistema deve implementar **autenticação mútua** entre dispositivos IoT e servidores.
* O sistema deve utilizar **VPNs ou túneis seguros** para transmissão em redes não confiáveis.
* O sistema deve exigir de fornecedores conformidade com práticas de segurança de dados.
* O sistema deve manter **firmware atualizado** para corrigir vulnerabilidades relacionadas à transmissão e armazenamento de dados.

**Exemplos de Aplicação**

* Sensores de saúde que enviam sinais vitais criptografados para servidores hospitalares.
* Dispositivos de energia que armazenam dados de consumo de forma criptografada para impedir manipulação de medidores inteligentes.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de TLS 1.3, criptografia de disco AES-256, HSMs para proteção de chaves, autenticação mútua com certificados digitais.
>
> **Teste:** testes de injeção de dados falsos em sensores, auditorias de segurança de armazenamento, inspeção de pacotes para verificar criptografia ponta a ponta.

---
