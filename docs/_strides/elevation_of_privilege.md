# Elevation of Privilege

Ameaças relacionadas ao ganho não autorizado de privilégios ou acesso elevado.

---

# Dispositivo

## FRP-SEC-005: Configuração Segura de Fábrica

**Descrição**
O sistema deve garantir que dispositivos IoT não permaneçam com credenciais ou configurações padrão de fábrica que possam ser exploradas para acesso não autorizado ou uso malicioso.

**Racional**
Configurações padrão em dispositivos IoT (como senhas de fábrica ou serviços habilitados por padrão) são amplamente conhecidas e facilmente exploradas por atacantes. Se não forem alteradas imediatamente, representam um risco direto de escalonamento de privilégios, permitindo que invasores obtenham acesso indevido ao dispositivo e à rede onde ele está inserido.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve exigir a **alteração obrigatória de senhas padrão** no primeiro uso.
* O sistema deve fornecer **instruções claras de configuração segura** ao usuário final.
* O sistema deve permitir a **desativação de serviços não utilizados** na configuração inicial.
* O sistema deve receber **atualizações regulares de firmware** que corrijam vulnerabilidades de configuração.
* O sistema deve ser submetido a **auditorias periódicas** para verificar se as configurações padrão foram devidamente modificadas.

**Exemplos de Aplicação**

* Roteadores domésticos que obrigam a troca de senha de fábrica na primeira configuração.
* Câmeras de segurança que bloqueiam o uso de credenciais padrão conhecidas em ataques massivos de botnets.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** exigir tela de alteração de senha obrigatória, provisionamento seguro de firmware, integração com frameworks de segurança (ex.: NIST).
>
> **Teste:** verificação de que nenhum dispositivo entra em produção com credenciais padrão; execução de auditorias automatizadas para detectar serviços inseguros habilitados por padrão.

---

## FRP-SEC-013: Proteção de Interface Física

**Descrição**
O sistema deve proteger dispositivos IoT contra acessos físicos não autorizados por meio de portas, interfaces de configuração e pontos de acesso físico, prevenindo manipulação ou comprometimento da segurança do dispositivo.

**Racional**
Interfaces físicas desprotegidas representam um vetor direto de ataque: adversários podem explorar portas de depuração, conexões não utilizadas ou interfaces de configuração mal protegidas para obter acesso privilegiado, manipular firmware ou alterar funcionalidades críticas do dispositivo.

**Requisitos Concretos (Instanciados para IoT)**

* O dispositivo deve possuir **proteção física contra acesso não autorizado** (trancas, gabinetes, instalação segura).
* O dispositivo deve **desativar ou proteger portas de conexão não utilizadas**.
* O sistema deve proteger **interfaces de configuração** com autenticação forte, autorização baseada em função e comunicação criptografada.
* O sistema deve implementar **controles de acesso físico**, incluindo monitoramento e registro de atividades.
* O sistema deve ser submetido a **auditorias e testes de penetração regulares** para identificar vulnerabilidades físicas.

**Exemplos de Aplicação**

* Roteadores IoT com portas USB desativadas por padrão para impedir exploração local.
* Dispositivos industriais instalados em gabinetes lacrados e monitorados contra violação.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de portas seladas ou tampadas, autenticação multifator em consoles de configuração, gabinetes com sensores de violação.
>
> **Teste:** tentativas de acesso físico sem autenticação, testes de invasão local via UART/JTAG, auditorias de integridade física e de logs de acesso.

---

## FRP-SEC-020: Proteção contra Acesso Indevido ao Console

**Descrição**
O sistema deve impedir que atacantes obtenham acesso não autorizado ao console de administração de dispositivos IoT por meio de portas seriais ou interfaces físicas, prevenindo modificações indevidas de configurações, manipulação de credenciais e comprometimento da privacidade.

**Racional**
Interfaces de console (ex.: UART, JTAG) são frequentemente negligenciadas em dispositivos IoT, ficando habilitadas com credenciais padrão ou sem autenticação. A exploração dessas interfaces permite controle total do hardware, leitura de firmware, modificação de parâmetros críticos e até instalação de backdoors permanentes.

**Requisitos Concretos (Instanciados para IoT)**

* O dispositivo deve estar em **ambientes fisicamente seguros**, acessíveis apenas a pessoal autorizado.
* O sistema deve exigir a **alteração imediata de credenciais padrão** após instalação.
* O dispositivo deve **desativar ou proteger portas de console inseguras** (UART, JTAG, seriais).
* O console e interfaces administrativas devem ser protegidos com **autenticação forte** (ex.: MFA).
* O sistema deve utilizar **criptografia** nas comunicações com o console.
* O fabricante deve **remover ou desativar backdoors** antes da entrega ao cliente.
* O sistema deve implementar **monitoramento e geração de logs** de tentativas de acesso ao console.

**Exemplos de Aplicação**

* Roteadores IoT que desativam interfaces UART em produção.
* Dispositivos médicos que exigem MFA para acesso ao console administrativo.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** desabilitar JTAG/UART em produção, uso de gabinetes selados, exigência de MFA em consoles administrativos, criptografia em canais de debug.
>
> **Teste:** simulação de ataque físico via console, testes de bypass em portas seriais, auditoria de logs de acesso administrativo.

---

## FRP-SEC-026: Proteção contra Acesso Físico Não Autorizado

**Descrição**
O sistema deve proteger dispositivos IoT contra acesso físico não autorizado, prevenindo que adversários capturem ou manipulem o hardware e garantindo a segurança de dados sensíveis mesmo em cenários de comprometimento físico.

**Racional**
Dispositivos IoT muitas vezes operam em locais de fácil acesso ao público, tornando-os alvos para captura física. Um atacante que obtém acesso físico pode manipular configurações, extrair dados, instalar backdoors ou até substituir o dispositivo por um impostor. A proteção física e lógica é essencial para preservar a integridade do sistema.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **monitoramento de intrusão** com sensores e alarmes em dispositivos críticos.
* O dispositivo deve possuir **proteções físicas** (fechaduras, lacres de segurança, gabinetes resistentes).
* O sistema deve **criptografar dados sensíveis armazenados localmente** para mitigar o impacto de captura física.
* O sistema deve implementar **autenticação de hardware** para validar legitimidade antes de conceder acesso a recursos.
* O dispositivo deve ser instalado com **restrições de acesso físico** (locais seguros, barreiras físicas).

**Exemplos de Aplicação**

* Sensores urbanos protegidos por gabinetes lacrados e monitorados contra violação.
* Gateways industriais com criptografia de dados local e autenticação de hardware.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de lacres anti-violação, sensores de intrusão, TPMs ou Secure Elements, criptografia AES em dados locais.
>
> **Teste:** simulação de ataques físicos ao hardware, verificação de alarmes de intrusão, auditorias de criptografia de dados armazenados.

---

# Aplicação

## FRP-SEC-027: Controle de Acesso Robusto

**Descrição**
O sistema deve implementar mecanismos robustos de controle de acesso para garantir que apenas usuários e dispositivos autorizados possam interagir com recursos, funcionalidades e dados de sistemas IoT.

**Racional**
Controles de acesso fracos permitem que invasores explorem lacunas na autenticação ou autorização, elevando privilégios e acessando informações ou funções críticas. Em ambientes IoT, a falta de granularidade e monitoramento no controle de acesso pode comprometer a confidencialidade e a integridade de toda a rede.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **autenticação forte** (MFA, certificados digitais, biometria).
* O sistema deve aplicar **políticas de autorização granulares**, concedendo apenas os acessos necessários por função.
* O sistema deve **registrar e monitorar todas as tentativas de acesso** para identificar anomalias.
* O sistema deve aplicar **atualizações regulares de segurança** e patches de firmware.
* O sistema deve adotar **modelos descentralizados de controle de acesso** (ex.: blockchain, consenso distribuído) quando aplicável.

**Exemplos de Aplicação**

* Gateways IoT que aplicam RBAC (Role-Based Access Control) para diferentes perfis de administradores e operadores.
* Sistemas de casa inteligente que exigem MFA para alterar configurações críticas.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de RBAC ou ABAC, autenticação federada, integração com cofres de identidade, descentralização via blockchain em redes IoT críticas.
>
> **Teste:** tentativas de acesso não autorizado, auditoria de logs de controle de acesso, testes de bypass de autenticação e autorização.

---

## FRP-SEC-037: Proteção de Servidores IoT

**Descrição**
O sistema deve proteger servidores IoT e infraestrutura de back-end contra configurações inseguras, vulnerabilidades e acessos não autorizados, garantindo que dados e dispositivos conectados permaneçam íntegros e confiáveis.

**Racional**
Servidores IoT são alvos críticos, pois concentram processamento, armazenamento e coordenação de dispositivos. Um servidor inseguro permite que atacantes elevem privilégios, obtenham acesso a dados confidenciais e manipulem dispositivos da rede, comprometendo a operação de todo o ecossistema.

**Requisitos Concretos (Instanciados para IoT)**

* O servidor deve estar configurado com **parâmetros de segurança fortes** (desativar serviços desnecessários, remover credenciais padrão, aplicar políticas restritivas).
* O sistema deve aplicar **criptografia forte** para dados em trânsito e em repouso (TLS/SSL, AES).
* O servidor deve estar sempre com **atualizações e patches de segurança aplicados**.
* O sistema deve exigir **autenticação forte** (MFA) para acessos administrativos.
* O servidor deve ser **segmentado em rede isolada** de redes públicas.
* O sistema deve aplicar **monitoramento contínuo e auditoria de logs** para detectar incidentes.
* O sistema deve realizar **backups regulares** para garantir resiliência em caso de ataque.

**Exemplos de Aplicação**

* Servidores de nuvem que processam dados de sensores industriais isolados em VPCs privadas.
* Gateways IoT que exigem MFA para acesso de administradores e aplicam TLS 1.3 em todas as conexões.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** aplicação de hardening em servidores, criptografia ponta a ponta, autenticação federada, monitoramento SIEM.
>
> **Teste:** auditorias de configuração de servidor, testes de penetração em APIs de back-end, simulação de ataque de escalonamento de privilégios.

---

## FRP-SEC-045: Prevenção de Acesso Não Autorizado

**Descrição**
O sistema deve prevenir que entidades não autorizadas acessem recursos de dispositivos e redes IoT, garantindo que apenas usuários e dispositivos autenticados e autorizados tenham acesso aos recursos que lhes são atribuídos.

**Racional**
O acesso não autorizado a sistemas IoT compromete dados sensíveis, dispositivos e a própria rede. Sem autenticação forte, segmentação adequada e auditoria contínua, atacantes podem assumir privilégios de usuários legítimos, explorando dispositivos de forma indevida.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **autenticação forte** (senhas robustas, 2FA, certificados digitais).
* O sistema deve aplicar **segmentação de rede** (VLANs, redes isoladas para IoT).
* O sistema deve manter **auditoria e monitoramento contínuos** para identificar acessos suspeitos.
* O sistema deve adotar **gerenciamento de identidades e privilégios** (IAM) para controlar acessos.

**Exemplos de Aplicação**

* Sistemas de automação residencial que exigem 2FA para controle remoto de dispositivos críticos.
* Redes corporativas IoT isoladas em VLANs, com monitoramento ativo de tentativas de intrusão.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** integração com sistemas IAM, aplicação de RBAC/ABAC, uso de 2FA, segmentação de rede em VLANs.
>
> **Teste:** simulação de invasões internas e externas, testes de escalonamento de privilégios, auditorias de logs de acesso.

---

