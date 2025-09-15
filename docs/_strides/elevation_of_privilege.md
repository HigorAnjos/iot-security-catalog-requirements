# Elevation of Privilege

Um usuário sem privilégios obtém acesso privilegiado e, portanto, tem acesso suficiente para comprometer ou destruir todo o sistema. Elevação de ameaças de privilégios incluem situações em que um invasor penetra de forma eficaz todas as defesas do sistema e se tornam parte do sistema confiável em si, uma situação perigosa, de fato

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

## FRP-SEC-054: Gerenciamento Seguro de Acesso

**Descrição**
O sistema deve implementar controles de acesso robustos para garantir que apenas entidades autenticadas e autorizadas possam acessar os recursos apropriados, aplicando rigorosamente o princípio do menor privilégio.

**Racional**
Sem gerenciamento adequado de acesso, usuários ou dispositivos podem obter permissões excessivas ou não autorizadas, comprometendo dados, funcionalidades e até a integridade da rede IoT. Um controle fraco de APIs, credenciais mal gerenciadas e ausência de monitoramento são vetores comuns de ataque.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve exigir **autenticação forte** (senhas robustas, MFA).
* O sistema deve aplicar o **princípio do menor privilégio** para todos os usuários e dispositivos.
* O sistema deve implementar **controles de acesso rigorosos em APIs**, incluindo autenticação baseada em tokens seguros.
* O sistema deve realizar **gerenciamento seguro de credenciais** (hashing, criptografia, rotação).
* O sistema deve aplicar **segregação de funções e dados**.
* O sistema deve realizar **monitoramento e registro contínuos de acessos**.
* O sistema deve **revisar periodicamente políticas de acesso** e atualizar conforme mudanças de função.
* O sistema deve oferecer **treinamento de segurança** para administradores e usuários.

**Exemplos de Aplicação**

* Plataformas de nuvem IoT que utilizam RBAC/ABAC para restringir privilégios de usuários e dispositivos.
* APIs de gerenciamento de dispositivos protegidas por OAuth2 e tokens de acesso limitados.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** IAM com RBAC/ABAC, segregação de funções, autenticação federada, cofre de credenciais.
>
> **Teste:** auditoria de permissões excessivas, simulação de escalonamento de privilégios, revisão de logs de API, testes de credenciais revogadas.

---

## FRP-SEC-055: Gestão Segura de Componentes de Terceiros

**Descrição**
O sistema deve avaliar, monitorar e manter seguros os componentes de terceiros utilizados em dispositivos e serviços IoT, prevenindo que vulnerabilidades externas introduzam riscos à segurança geral do ecossistema.

**Racional**
Muitos ataques a dispositivos IoT exploram falhas já conhecidas em bibliotecas, módulos ou serviços de terceiros. Se não forem avaliados e atualizados, esses componentes tornam-se pontos fracos críticos, facilitando a escalada de privilégios, manipulação de dados e comprometimento de sistemas inteiros.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve realizar **avaliações de segurança** antes da integração de qualquer componente de terceiros.
* O sistema deve **manter todos os componentes atualizados** com patches e correções de segurança.
* O sistema deve aplicar **controles adicionais de segurança** (firewalls, criptografia, monitoramento).
* O sistema deve adotar **processos de gerenciamento de fornecedores**, selecionando apenas parceiros confiáveis.
* O sistema deve estabelecer **contratos de conformidade** que exijam padrões mínimos de segurança de fornecedores.

**Exemplos de Aplicação**

* Um fabricante de câmeras IoT que audita bibliotecas de criptografia de terceiros antes da integração.
* Gateways IoT que monitoram e atualizam automaticamente drivers fornecidos por fabricantes externos.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** SBOM (Software Bill of Materials), scanners de vulnerabilidades (ex.: OWASP Dependency-Check), acordos de nível de segurança com fornecedores.
>
> **Teste:** auditorias de bibliotecas usadas, testes de integração em sandbox, simulações de exploração de CVEs conhecidos em componentes de terceiros.

---

## FRP-SEC-056: Configuração Segura de Interfaces IoT

**Descrição**
O sistema deve proteger interfaces de administração e configuração de dispositivos IoT, garantindo que apenas usuários autenticados e autorizados possam acessar funções críticas, prevenindo falhas de autenticação, uso de credenciais padrão ou exposição de portas desnecessárias.

**Racional**
Interfaces de configuração inseguras são frequentemente exploradas como porta de entrada para ataques, permitindo controle indevido sobre dispositivos e comprometendo todo o ecossistema IoT. Sem autenticação forte, criptografia adequada e controles de acesso rigorosos, atacantes podem assumir privilégios administrativos e manipular dispositivos.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **autenticação forte** (MFA, senhas complexas) em interfaces web.
* O sistema deve aplicar **controle de acesso baseado em funções (RBAC)** para limitar permissões.
* O sistema deve garantir **criptografia de dados em trânsito** com TLS/SSL.
* O sistema deve **desativar credenciais padrão e portas administrativas expostas**.
* O sistema deve manter **atualizações de segurança regulares** no software de interfaces.

**Exemplos de Aplicação**

* Roteadores IoT que exigem MFA e bloqueiam credenciais padrão em interfaces web de administração.
* Câmeras IP que criptografam todo o tráfego de configuração e segmentam acessos por função (admin, operador, visualizador).

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** MFA obrigatório, TLS 1.3, RBAC granular, desativação automática de credenciais padrão, hardening de interfaces administrativas.
>
> **Teste:** varredura de portas expostas, simulação de ataques de força bruta em interfaces web, auditorias de permissões RBAC, testes de penetração em painéis administrativos.

---
