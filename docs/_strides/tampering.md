# Tampering

Envolve a modificação mal-intencionada de dados. Os exemplos incluem alterações não autorizadas feitas em dados persistentes, como as mantidas em um banco de dados e a alteração de dados enquanto estão fluindo entre dois computadores em uma rede aberta, como a Internet

---

## Aplicação

### FRP-SEC-053: Garantia de Consistência de Dados

**Descrição**
O sistema deve proteger contra inconsistências de dados em ambientes IoT, assegurando a integridade, precisão e confiabilidade das informações coletadas, processadas e armazenadas.

**Racional**
Dados corrompidos, contraditórios ou incompletos comprometem a confiabilidade de sistemas IoT, podendo levar a falhas operacionais, decisões incorretas ou até riscos à segurança. Estratégias de validação, redundância e monitoramento contínuo são necessárias para garantir a consistência.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **validação e verificação de dados recebidos** de dispositivos IoT.
* O sistema deve utilizar **múltiplos sensores ou fontes redundantes** para assegurar consistência.
* O sistema deve realizar **monitoramento contínuo** de dados para detectar e corrigir inconsistências em tempo real.
* O sistema deve possuir **estratégias de backup e recuperação** para restaurar dados perdidos ou corrompidos.
* O sistema deve usar **protocolos de comunicação robustos** com detecção/correção de erros.

**Exemplos de Aplicação**

* Sistemas de saúde que cruzam dados de sensores redundantes para validar sinais vitais de pacientes.
* Indústrias que utilizam CRC ou assinaturas digitais para validar integridade de dados coletados por sensores.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de protocolos como MQTT com QoS, CRCs, checksums, validações de integridade e redundância de sensores.
>
> **Teste:** simulação de falhas de sensores, auditoria de logs de dados, injeção de dados corrompidos para avaliar capacidade de detecção.

---

### FRP-SEC-060: Garantia de Qualidade de Código em IoT

**Descrição**
O sistema deve ser desenvolvido com práticas de codificação seguras e robustas, garantindo que o código-fonte não introduza vulnerabilidades decorrentes de má estruturação, falta de validação de entrada ou uso inadequado de recursos críticos.

**Racional**
Código mal estruturado, sem revisões e sem validações adequadas, aumenta a superfície de ataque e pode facilitar falhas como estouro de buffer, injeções de código, manipulação de credenciais e uso de criptografia fraca. Em IoT, onde os dispositivos são limitados e muitas vezes expostos, essas falhas podem comprometer toda a rede.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve adotar **práticas de desenvolvimento seguro**, usando frameworks e bibliotecas confiáveis.
* O sistema deve implementar **revisões de código regulares** (peer review ou análise estática).
* O sistema deve passar por **testes rigorosos** (unidade, integração, segurança, penetração).
* O sistema deve receber **atualizações e patches de segurança regulares**.

**Exemplos de Aplicação**

* Firmware IoT que utiliza bibliotecas de criptografia robustas e segue padrões de codificação segura.
* Dispositivos de automação residencial cujo software passa por revisões formais de código antes da liberação.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** integração de ferramentas SAST/DAST em CI/CD, uso de guias como OWASP Secure Coding, automação de revisão de código.
>
> **Teste:** fuzzing de entradas, auditorias regulares de código-fonte, simulação de ataques de injeção em protótipos, validação de patches aplicados.

---

### FRP-SEC-061: Prevenção de Código Malicioso em Aplicativos IoT

**Descrição**
O sistema deve prevenir a introdução e execução de código malicioso em aplicações IoT, assegurando que apenas software legítimo e verificado seja implantado e executado nos dispositivos e sistemas relacionados.

**Racional**
A inclusão de código malicioso em aplicativos IoT pode resultar em vazamento de dados, espionagem, indisponibilidade de serviços e até controle remoto por adversários. Como dispositivos IoT geralmente não têm defesas robustas, é essencial garantir a integridade do software desde o desenvolvimento até a execução.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **processos rigorosos de verificação e validação de código** (revisão, SAST, DAST, testes automatizados).
* O sistema deve aplicar **isolamento de componentes críticos** para limitar impactos de código malicioso.
* O sistema deve utilizar **segmentação de rede** para impedir a propagação de malware.
* O sistema deve promover **educação e conscientização de desenvolvedores e usuários** sobre riscos de software não confiável.
* O sistema deve garantir que **apenas fontes confiáveis de software e atualização** sejam utilizadas.

**Exemplos de Aplicação**

* Gateways IoT que só aceitam instalação de pacotes assinados digitalmente pelo fabricante.
* Dispositivos inteligentes que validam integridade de aplicativos antes da execução.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de pipelines CI/CD seguros, assinatura digital de software, segmentação lógica de aplicações críticas, whitelisting de executáveis.
>
> **Teste:** auditoria de código, varredura de pacotes em busca de backdoors, testes de execução controlada em sandbox, simulação de ataques com aplicativos maliciosos.

---

### FRP-SEC-063: Redução da Superfície de Ataque em IoT

**Descrição**
O sistema deve reduzir a superfície de ataque disponível, limitando funcionalidades, serviços e pontos de entrada apenas ao necessário para a operação segura dos dispositivos e aplicações IoT.

**Racional**
Quanto maior a superfície de ataque, maior a probabilidade de vulnerabilidades exploráveis. Em IoT, onde dispositivos frequentemente interagem com múltiplos serviços e nuvem, essa complexidade cria vetores adicionais para adulteração e ataques. Reduzir a superfície exposta melhora significativamente a segurança geral do sistema.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve **remover funcionalidades desnecessárias** e simplificar o design do software IoT.
* O sistema deve **desativar interfaces e recursos não utilizados**.
* O sistema deve implementar **controles de acesso rigorosos em todos os pontos de entrada**.
* O sistema deve realizar **monitoramento contínuo** de acessos e tentativas de exploração.
* O sistema deve aplicar **segmentação de rede** para isolar componentes críticos.
* O sistema deve realizar **auditorias periódicas de segurança** para identificar pontos vulneráveis.
* O sistema deve usar apenas **bibliotecas e APIs seguras e atualizadas**.
* O sistema deve empregar **firewalls e filtros de rede** para limitar acessos indevidos.

**Exemplos de Aplicação**

* Dispositivos domésticos inteligentes que desabilitam serviços de depuração em produção.
* Gateways IoT industriais que expõem apenas APIs estritamente necessárias e auditadas.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** aplicar *hardening* de dispositivos IoT, configurar firewalls e IDS, utilizar *secure by design* eliminando recursos supérfluos.
>
> **Teste:** testes de penetração para mapear a superfície de ataque, varredura de portas e serviços habilitados, auditorias de dependências externas.

---

### FRP-SEC-064: Prevenção de Injeção em Banco de Dados

**Descrição**
O sistema deve proteger-se contra injeções em banco de dados, garantindo que comandos maliciosos não possam ser inseridos ou executados por meio de entradas de usuário, preservando a integridade e a confidencialidade dos dados.

**Racional**
Ataques de injeção em SQL exploram falhas na manipulação de entradas, permitindo que atacantes leiam, modifiquem ou apaguem registros. Em ambientes IoT, isso pode comprometer desde dados sensíveis até o funcionamento de dispositivos críticos conectados a sistemas de back-end.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **consultas parametrizadas/prepared statements** em todas as interações com o banco.
* O sistema deve aplicar **validação e saneamento de todas as entradas de dados**.
* O sistema deve utilizar **ORMs seguros** para abstrair consultas e minimizar riscos de injeção.
* O banco de dados deve adotar **controle de acesso mínimo**, evitando permissões excessivas.
* O sistema deve realizar **auditoria e monitoramento contínuos** para detectar tentativas de injeção.
* Os desenvolvedores devem receber **treinamento em segurança contra injeção de SQL**.

**Exemplos de Aplicação**

* Plataforma de casa inteligente que utiliza *prepared statements* para registrar eventos em banco relacional.
* Sistemas industriais IoT que monitoram logs de consultas SQL em tempo real para detectar injeções.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de *prepared statements*, ORMs confiáveis, políticas de privilégios mínimos, integração de ferramentas de SAST para detectar vulnerabilidades de injeção.
>
> **Teste:** execução de testes de penetração (SQLi), fuzzing em inputs, validação de logs de auditoria, simulação de ataques automatizados (ex.: SQLMap).

---

## Dispositivo

### FRP-SEC-010: Firmware Seguro 

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

**Considerações de Implementação e Teste**

> **Implementação:** assinar digitalmente o firmware, adotar boot seguro, mecanismos OTA (Over-The-Air) confiáveis, integração de análise estática e ferramentas SAST/DAST.
>
> **Teste:** auditorias de firmware, fuzzing em interfaces, verificação de assinatura digital durante o processo de boot, simulação de ataques de manipulação de firmware.

---

### FRP-SEC-011: Inicialização Segura

**Descrição**
O sistema deve garantir a integridade e a autenticidade do processo de inicialização dos dispositivos IoT, prevenindo que firmware adulterado, configurações modificadas ou hardware não autorizado sejam carregados durante o boot.

**Racional**
A fase de inicialização é crítica: qualquer comprometimento nesse estágio pode permitir a execução de firmware malicioso ou configuração adulterada, comprometendo todo o dispositivo desde o primeiro momento. Um boot inseguro fornece aos atacantes controle total do dispositivo e pode neutralizar camadas posteriores de proteção.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **autenticação robusta de firmware** durante a inicialização.
* O sistema deve realizar **verificação de integridade do firmware** a cada boot.
* O sistema deve proteger as **configurações de inicialização** contra modificações não autorizadas (ex.: assinaturas digitais, chaves criptográficas).
* O sistema deve aplicar **autenticação de hardware** no processo de inicialização para validar a legitimidade dos componentes.
* O sistema deve garantir **atualizações e patches regulares** para firmware e software relacionados ao boot.

**Exemplos de Aplicação**

* Dispositivos industriais que só inicializam após verificar a assinatura digital do firmware.
* Smartphones ou câmeras IP que não carregam sistemas modificados sem chave de fabricante.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de *secure boot*, assinaturas digitais de firmware, armazenamento seguro de chaves, módulos TPM/TEE para validação.
>
> **Teste:** simulações de alteração de firmware e configuração, testes de bypass do processo de boot, validação de logs de inicialização, auditoria de integridade do firmware.

---

### FRP-SEC-019: Proteção contra Injeção de Código Malicioso

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

**Considerações de Implementação e Teste**

> **Implementação:** uso de assinaturas digitais em firmware, secure boot, hardening de software, práticas de programação segura (ex.: SAFE-C).
>
> **Teste:** fuzzing de entradas, simulação de injeção em firmware OTA, auditorias de código, testes de penetração focados em bypass de validação.

---

### FRP-SEC-022: Proteção contra Violação Física

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

**Considerações de Implementação e Teste**

> **Implementação:** uso de TPMs, firmware assinado, gabinetes selados, sensores anti-intrusão.
>
> **Teste:** auditorias de hardware, testes de extração de chaves criptográficas, simulações de ataque físico (decapping, glitching), validação de mecanismos anti-tampering.

---

### NFRP-SEC-024: Mitigação de Riscos em Sistemas de Baixo Custo

**Descrição**
O sistema deve considerar riscos adicionais ao utilizar dispositivos IoT de baixo custo, adotando medidas complementares para compensar a falta de proteções nativas, prevenindo adulterações, comprometimento de dados ou exploração por atacantes.

**Racional**
Dispositivos de baixo custo frequentemente sacrificam práticas de segurança em troca de preço acessível, o que os torna mais vulneráveis a adulterações e ataques. Sem medidas adicionais, esses equipamentos podem comprometer toda a rede IoT, inclusive ativos críticos.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve priorizar **dispositivos com certificações de segurança reconhecidas**.
* O sistema deve adotar **medidas adicionais de proteção** para dispositivos de baixo custo (ex.: firewalls, segmentação de rede, VPNs).
* O sistema deve realizar **monitoramento contínuo** para identificar anomalias ou atividades suspeitas.
* O sistema deve garantir **atualizações e patches regulares** para todos os dispositivos na rede.
* O sistema deve **isolar dispositivos críticos de dispositivos de baixo custo** em arquiteturas de rede.
* O sistema deve realizar **avaliação de riscos periódica** sobre o uso de dispositivos de baixo custo em ambientes sensíveis.

**Exemplos de Aplicação**

* Câmeras IP de baixo custo em ambientes domésticos protegidas via segmentação de rede e firewall.
* Sensores genéricos em ambientes industriais isolados da rede de controle principal.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de firewalls locais, segmentação VLAN, gateways seguros, isolamento físico/lógico de dispositivos frágeis.
>
> **Teste:** auditorias de firmware de dispositivos baratos, testes de penetração focados em bypass de autenticação, verificação da disponibilidade de atualizações de fabricante.

---

### FRP-SEC-039: Mecanismos Seguros de Atualização

**Descrição**
O sistema deve garantir que atualizações de firmware e software em dispositivos IoT sejam realizadas de forma segura, prevenindo adulterações, injeções maliciosas e a instalação de componentes não autorizados.

**Racional**
Atualizações são essenciais para corrigir vulnerabilidades e manter dispositivos IoT seguros. No entanto, mecanismos inseguros podem ser explorados para introduzir código malicioso ou corromper o dispositivo. Além disso, falhas de rede durante o processo podem introduzir riscos de integridade e disponibilidade.

**Requisitos Concretos (Instanciados para IoT)**

* Todas as atualizações devem ser **assinadas digitalmente**, garantindo autenticidade e integridade.
* Os dispositivos devem **verificar autenticidade e integridade** antes da instalação.
* As atualizações devem ser transmitidas por **protocolos criptografados** (TLS, HTTPS).
* O sistema deve possuir **controle e monitoramento das atualizações**, aplicando apenas pacotes autorizados.
* O sistema deve seguir **políticas de atualização segura**, incluindo testes prévios em ambientes controlados.
* O sistema deve mitigar impactos de latência ou falhas de rede durante o processo de atualização.

**Exemplos de Aplicação**

* Câmeras IP que instalam apenas firmware assinado digitalmente pelo fabricante.
* Gateways IoT que baixam atualizações via TLS e validam integridade antes da aplicação.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de assinaturas digitais (RSA/ECC), verificação de hash (SHA-256), OTA seguro com TLS, pipelines de testes antes da liberação.
>
> **Teste:** simulação de injeção de firmware malicioso, auditoria de logs de atualização, testes de rollback seguro em caso de falha.

---

### FRP-SEC-052: Prevenção de Estouro de Buffer

**Descrição**
O sistema deve prevenir vulnerabilidades de estouro de buffer em software embarcado de dispositivos IoT, garantindo que dados de entrada não corrompam a memória nem permitam execução de código malicioso.

**Racional**
Em dispositivos IoT, a exploração de estouros de buffer pode permitir que atacantes assumam controle do dispositivo, executem código arbitrário ou corrompam dados críticos. Como esses sistemas muitas vezes não possuem proteções modernas de hardware, boas práticas de programação e validação de entradas são essenciais.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve aplicar **verificação de limites** em todas as operações de entrada e escrita em buffers.
* O sistema deve utilizar **funções seguras de manipulação de memória** (ex.: `strncpy`, `memcpy_s`) em vez de funções inseguras.
* O sistema deve preferir **linguagens com segurança de memória embutida** (ex.: Java, Rust, Python) quando aplicável.
* O sistema deve realizar **testes de segurança e revisões de código** para detectar estouros de buffer.
* O sistema deve aplicar **ferramentas de análise estática e dinâmica** para detectar vulnerabilidades em tempo de desenvolvimento.

**Exemplos de Aplicação**

* Firmwares escritos em C que utilizam `strncpy` em vez de `strcpy` para prevenir escrita fora do limite de buffers.
* Dispositivos médicos que usam Rust em módulos críticos para evitar falhas de segurança relacionadas à memória.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** programação defensiva em C/C++, uso de compiladores com proteções (Stack Canaries, ASLR), adoção de linguagens seguras.
>
> **Teste:** fuzzing de entradas, auditoria de código C/C++, testes de penetração em firmwares, análise estática (ex.: Coverity, SonarQube).

---

### FRP-SEC-058: Garantia de Software Seguro em IoT

**Descrição**
O sistema deve garantir que o software embarcado em dispositivos IoT seja desenvolvido, distribuído e atualizado de forma segura, prevenindo adulterações, vulnerabilidades e uso de componentes inseguros ou desatualizados.

**Racional**
O software é o núcleo de funcionamento dos dispositivos IoT. Se vulnerável, desatualizado ou manipulado, ele abre espaço para ataques críticos, desde execução de código malicioso até perda de integridade do sistema. É essencial aplicar desenvolvimento seguro, atualizações regulares e mecanismos de validação de autenticidade.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve adotar **práticas de desenvolvimento seguro** (revisões de código, testes de segurança, padrões de codificação).
* O sistema deve realizar **auditorias e testes de penetração periódicos** no software.
* O software e bibliotecas de terceiros devem estar sempre **atualizados com patches de segurança**.
* O sistema deve usar **criptografia forte** para proteger dados em trânsito e em repouso.
* O sistema deve implementar **verificação de autenticidade** em todos os componentes e atualizações (assinaturas digitais, checksums).
* O sistema deve utilizar **mecanismos de atualização segura** (canais criptografados, validação de pacotes).
* O software deve aplicar **controle de permissões** seguindo o princípio do menor privilégio.

**Exemplos de Aplicação**

* Dispositivos IoT que recebem atualizações OTA assinadas digitalmente e transmitidas por TLS.
* Gateways industriais que passam por auditorias semestrais de segurança de software e código.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de CI/CD com análise estática e dinâmica, assinatura digital (RSA/ECC), TLS 1.3 para OTA, controle de permissões em software embarcado.
>
> **Teste:** fuzzing de software IoT, simulação de adulteração de pacotes de atualização, auditorias de bibliotecas de terceiros, testes de rollback seguro.

---

## Rede

### FRP-SEC-008: Interação Segura em Ambientes Heterogêneos

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

**Considerações de Implementação e Teste**

> **Implementação:** uso de gateways seguros, protocolos interoperáveis padronizados (MQTT-S, CoAP, OPC UA), integração com frameworks de conformidade.
>
> **Teste:** simulações de ataques em ambientes com múltiplos fabricantes, auditorias de conformidade de segurança, verificação de compatibilidade e resiliência em comunicações cruzadas.

---

### FRP-SEC-009: Transferência e Armazenamento Seguros de Dados

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

**Considerações de Implementação e Teste**

> **Implementação:** uso de TLS 1.3, criptografia de disco AES-256, HSMs para proteção de chaves, autenticação mútua com certificados digitais.
>
> **Teste:** testes de injeção de dados falsos em sensores, auditorias de segurança de armazenamento, inspeção de pacotes para verificar criptografia ponta a ponta.

---

### FRP-SEC-032: Configuração Segura de Rede

**Descrição**
O sistema deve proteger o processo de configuração de rede em dispositivos IoT, prevenindo alterações não autorizadas, inconsistentes ou repetidas que possam introduzir vulnerabilidades e comprometer a integridade da rede.

**Racional**
Configurações de rede aplicadas de forma repetitiva ou inadequada podem resultar em falhas de segurança, exposição de portas, permissões incorretas e risco de acessos indevidos. Em ambientes IoT, onde a comunicação é crítica, a proteção da configuração é essencial para manter a integridade e a confiabilidade da rede.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve exigir **autenticação e autorização robustas** para qualquer alteração de configuração.
* O sistema deve aplicar **monitoramento contínuo** de atividades de configuração e detectar tentativas suspeitas.
* O sistema deve implementar **automação segura de reconfiguração**, garantindo verificações de integridade antes da aplicação.
* O sistema deve manter os dispositivos **atualizados com firmware seguro** que corrija vulnerabilidades conhecidas.
* O sistema deve promover **educação e conscientização do usuário** sobre práticas seguras de configuração.

**Exemplos de Aplicação**

* Gateways IoT que só aceitam alterações de rede mediante autenticação multifator de administradores.
* Sensores em malhas industriais que validam automaticamente a integridade das configurações antes de aplicá-las.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** autenticação multifator para acesso administrativo, controle de versões de configuração, validação criptográfica em automações.
>
> **Teste:** simulação de alterações maliciosas de rede, auditorias de logs de configuração, testes de rollback automático em reconfigurações falhas.

---

### FRP-SEC-036: Comunicação Segura em Ambientes Heterogêneos

**Descrição**
O sistema deve garantir que a comunicação entre dispositivos e sistemas heterogêneos em redes IoT seja realizada de forma segura, prevenindo manipulações, inconsistências e vulnerabilidades decorrentes do uso de diferentes protocolos e padrões.

**Racional**
A interoperabilidade entre dispositivos de diferentes fabricantes é fundamental para o ecossistema IoT, mas também introduz riscos: traduções de protocolo mal implementadas ou políticas inconsistentes podem abrir brechas de segurança. Sem padronização e mecanismos robustos de proteção, a rede pode se tornar vulnerável a manipulações e ataques.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **gateways e middleware seguros** para traduzir protocolos e manter interoperabilidade.
* O sistema deve aplicar **políticas de segurança uniformes** (criptografia, autenticação e controle de acesso) em toda a rede.
* O sistema deve adotar **protocolos abertos e padrões amplamente aceitos** para reduzir vulnerabilidades.
* O sistema deve validar e registrar **todas as comunicações interprotocolo** para garantir integridade.

**Exemplos de Aplicação**

* Gateways industriais que traduzem entre protocolos Modbus, OPC-UA e MQTT com criptografia TLS.
* Redes de smart cities que utilizam middleware para integrar dispositivos BLE, Wi-Fi e LoRaWAN com políticas de segurança unificadas.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de gateways com TLS, middleware seguro, adoção de protocolos padronizados como CoAP e MQTT, políticas de segurança uniformes.
>
> **Teste:** simulação de ataques em traduções de protocolo, auditoria de consistência de políticas de segurança, testes de interoperabilidade com múltiplos fabricantes.

---

### FRP-SEC-038: Controle Seguro de Tráfego

**Descrição**
O sistema deve proteger o tráfego de dados entre dispositivos IoT, gateways, servidores e serviços em nuvem contra interceptação, manipulação e uso não autorizado, garantindo a integridade e a confidencialidade da comunicação.

**Racional**
Comunicações IoT inseguras podem ser interceptadas, manipuladas ou redirecionadas, permitindo que adversários modifiquem dados, obtenham acesso não autorizado ou comprometam serviços críticos. A falta de protocolos seguros e monitoramento adequado expõe a rede a riscos de ataques de homem-no-meio (MitM) e adulteração de pacotes.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve aplicar **criptografia de ponta a ponta** em todas as comunicações.
* O sistema deve utilizar **protocolos seguros** (ex.: HTTPS, TLS/DTLS).
* O sistema deve implementar **autenticação e autorização robustas** em canais de comunicação.
* O sistema deve realizar **monitoramento contínuo de tráfego** para identificar padrões suspeitos.
* O sistema deve aplicar **atualizações regulares de segurança** em dispositivos e infraestrutura de rede.

**Exemplos de Aplicação**

* Sensores IoT que transmitem dados criptografados via TLS para servidores em nuvem.
* Gateways industriais que rejeitam tráfego sem autenticação mútua.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de TLS 1.3, DTLS para dispositivos leves, autenticação baseada em certificados digitais, monitoramento IDS/IPS.
>
> **Teste:** simulação de ataques MitM, auditoria de pacotes em trânsito, verificação de uso de protocolos seguros em toda a cadeia de comunicação.

---

### FRP-SEC-042: Adoção de Protocolos de Comunicação Seguros

**Descrição**
O sistema deve utilizar protocolos de comunicação seguros para proteger os dados transmitidos entre dispositivos IoT, serviços e sistemas de back-end, garantindo confidencialidade, integridade e autenticidade.

**Racional**
A ausência ou o uso inadequado de protocolos seguros permite que atacantes interceptem, modifiquem ou falsifiquem dados em trânsito. Isso compromete não apenas a privacidade, mas também a integridade e autenticidade das comunicações, possibilitando ataques de *man-in-the-middle* e injeção de pacotes maliciosos.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **criptografia moderna e segura** (TLS/SSL, DTLS).
* O sistema deve usar **certificados digitais confiáveis** emitidos por autoridades certificadoras reconhecidas.
* O sistema deve aplicar **verificação de integridade** com assinaturas digitais ou checksums.
* O sistema deve adotar **políticas de gerenciamento seguro de chaves e certificados**, incluindo rotação periódica.

**Exemplos de Aplicação**

* Dispositivos médicos conectados que transmitem dados de pacientes via TLS 1.3.
* Gateways industriais que validam certificados digitais de servidores antes de iniciar comunicações.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** uso de TLS 1.3 ou DTLS para dispositivos leves, certificados digitais X.509, gerenciamento centralizado de chaves.
>
> **Teste:** simulações de ataques de *man-in-the-middle*, auditorias de tráfego de rede para verificar criptografia, inspeção de políticas de rotação de chaves.

---

### FRP-SEC-046: Proteção contra Redes Inseguras

**Descrição**
O sistema deve proteger dispositivos IoT contra os riscos de operar em redes inseguras, prevenindo interceptação, manipulação de tráfego e propagação de malware por meio da aplicação de mecanismos robustos de segurança em nível de rede.

**Racional**
Dispositivos IoT muitas vezes se conectam a redes públicas ou mal segmentadas, tornando-se pontos de entrada para atacantes explorarem falhas, interceptarem comunicações ou espalharem malware. A proteção contra redes inseguras envolve não apenas criptografia e autenticação, mas também segmentação, monitoramento e controle de tráfego.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **criptografia forte** (TLS/SSL) em todas as comunicações.
* O sistema deve exigir **autenticação forte** (MFA, certificados digitais) para acesso à rede.
* O sistema deve aplicar **controles de acesso rigorosos**, limitando recursos críticos a entidades autorizadas.
* A rede IoT deve ser **segmentada em zonas de segurança**, isolando dispositivos críticos.
* O sistema deve usar **VPNs** para comunicação em redes públicas.
* A rede deve ter **monitoramento contínuo e análise de tráfego** para identificar anomalias.
* O sistema deve usar **firewalls e IDS/IPS** para filtrar tráfego malicioso.
* O sistema deve aplicar **políticas de senha forte** em todos os dispositivos.

**Exemplos de Aplicação**

* Dispositivos de saúde conectados a VLANs isoladas em hospitais.
* Sensores urbanos que transmitem dados por VPN quando conectados a redes públicas.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** TLS 1.3, VPNs (IPsec, WireGuard), segmentação em VLANs, firewalls de camada 7, IDS/IPS com análise de tráfego.
>
> **Teste:** auditorias de segmentação de rede, simulações de tráfego malicioso, testes de penetração em redes públicas, verificação de conformidade com políticas de senha.

---

### FRP-SEC-047: Desativação de Portas Não Utilizadas

**Descrição**
O sistema deve garantir que todas as portas de rede não utilizadas em dispositivos IoT e infraestrutura associada sejam desativadas, prevenindo que se tornem pontos de entrada para acessos não autorizados ou manipulação de tráfego.

**Racional**
Portas abertas e desnecessárias expõem dispositivos IoT a riscos adicionais, permitindo que atacantes explorem serviços não protegidos. Essa vulnerabilidade aumenta a superfície de ataque e pode comprometer diretamente a integridade, a confidencialidade e a disponibilidade dos sistemas.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve **desativar todas as portas de rede não utilizadas** por padrão.
* O sistema deve aplicar **configuração segura** desde a implantação inicial do dispositivo.
* A rede deve ser submetida a **monitoramento e auditorias regulares** para identificar portas abertas.
* O sistema deve utilizar **firewalls e ACLs** para restringir tráfego apenas às portas essenciais.
* Os dispositivos devem estar sempre com **atualizações e patches de segurança aplicados**.
* Devem ser realizados **testes de penetração** para identificar vulnerabilidades relacionadas a portas abertas.

**Exemplos de Aplicação**

* Câmeras IP configuradas para expor apenas a porta HTTPS, com todas as demais desativadas.
* Gateways IoT industriais com firewalls internos bloqueando portas não essenciais.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** hardening de dispositivos, firewalls integrados, configuração de ACLs, aplicação de patches.
>
> **Teste:** varredura de portas com ferramentas como Nmap, auditorias de segurança regulares, testes de penetração em dispositivos IoT.

---

### FRP-SEC-048: Criptografia Robusta na Comunicação

**Descrição**
O sistema deve utilizar criptografia forte e atualizada em todas as comunicações de dispositivos IoT, prevenindo interceptação, adulteração e acesso não autorizado a dados em trânsito.

**Racional**
Sem criptografia adequada, os dados transmitidos em redes IoT podem ser interceptados e modificados por atacantes. Isso compromete não apenas a privacidade, mas também a integridade e autenticidade das comunicações, possibilitando ataques de *man-in-the-middle* e injeção de pacotes maliciosos.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **criptografia moderna e segura** (TLS/SSL, DTLS).
* O sistema deve usar **certificados digitais confiáveis** emitidos por autoridades certificadoras reconhecidas.
* O sistema deve aplicar **verificação de integridade** com assinaturas digitais ou checksums.
* O sistema deve adotar **políticas de gerenciamento seguro de chaves e certificados**, incluindo rotação periódica.

**Exemplos de Aplicação**

* Sensores ambientais que enviam dados via MQTT protegido com TLS e certificados X.509.
* Dispositivos médicos que usam DTLS para proteger pacotes UDP de telemetria.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

**Considerações de Implementação e Teste**

> **Implementação:** TLS 1.3, DTLS para IoT de baixo consumo, PKI para autenticação de dispositivos, armazenamento seguro de chaves.
>
> **Teste:** simulação de ataques *man-in-the-middle*, auditoria de protocolos utilizados, verificação da rotação periódica de chaves, inspeção de certificados digitais.