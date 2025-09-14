# Spoofing

Ameaças relacionadas à falsificação de identidade e autenticação inadequada.

---

# Aplicacao

## FRP-SEC-001: Autenticação Forte

**Descrição**
O sistema deve garantir autenticação forte para dispositivos, usuários e sistemas IoT, prevenindo que atacantes obtenham acesso não autorizado por meio de credenciais fracas, contas padrão ou ausência de verificação multifator.

**Racional**
A ausência de autenticação forte permite que atacantes falsifiquem identidades e acessem dispositivos ou sistemas IoT de forma ilegítima. Esse risco é ampliado em ambientes distribuídos, onde a confiança entre dispositivos e usuários precisa ser garantida para preservar a integridade e a confidencialidade do ecossistema.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **autenticação multifator (MFA)** em interações críticas.
* O sistema deve exigir **senhas fortes e exclusivas**, desativando contas padrão.
* O sistema deve **armazenar credenciais de forma segura**, utilizando criptografia robusta.
* O sistema deve realizar **validação e revalidação periódica de credenciais**, incluindo expiração de sessões.
* O sistema deve **monitorar e registrar tentativas de login** e atividades suspeitas de autenticação.

**Exemplos de Aplicação**

* Gateways IoT que exigem autenticação multifator para acesso remoto de administradores.
* Dispositivos médicos conectados que revalidam credenciais antes de operações críticas.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de MFA (TOTP, biometria, certificados), hashing seguro de credenciais (Argon2, bcrypt), controle de sessões e revogação de tokens.
>
> **Teste:** testes de força bruta e dicionário, auditorias de armazenamento de credenciais, simulação de bypass de MFA, análise de logs de autenticação.

## FRP-SEC-004: Canal de Voz Seguro

**Descrição**
O sistema deve proteger os canais de voz em dispositivos IoT contra interceptação, falsificação e uso não autorizado, garantindo a autenticidade dos comandos de voz e a confidencialidade das comunicações.

**Racional**
Dispositivos IoT com microfones integrados (assistentes virtuais, brinquedos inteligentes, eletrodomésticos de voz) podem ser explorados para capturar informações privadas ou executar comandos falsificados. Ataques como voz intrusa ou mascaramento de voz podem comprometer a segurança e a privacidade do usuário.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar criptografia de ponta a ponta nas comunicações de voz.
* O sistema deve implementar autenticação robusta de voz para validar a identidade do usuário.
* O sistema deve monitorar tráfego de voz em rede para identificar atividades suspeitas.
* O sistema deve aplicar atualizações de segurança regularmente para corrigir vulnerabilidades conhecidas.
* O sistema deve aplicar controle de acesso para restringir a interação apenas a usuários autorizados.

**Exemplos de Aplicação**

* Smart speakers (Google Home, Amazon Echo) que validam comandos de voz antes da execução.
* Brinquedos infantis conectados que usam autenticação de voz para evitar interação de estranhos.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** criptografia TLS para tráfego de voz, integração com biometria de voz, políticas de acesso baseadas em identidade.
>
> **Teste:** cenários de spoofing de voz, testes de comando falso por gravação, simulação de interceptação de tráfego.

---


## FRP-SEC-004: Canal de Voz Seguro

**Descrição**
O sistema deve proteger canais de voz em dispositivos IoT contra interceptação, falsificação e uso não autorizado, garantindo a autenticidade dos comandos de voz e a confidencialidade das comunicações de áudio.

**Racional**
Dispositivos IoT com microfones integrados, como assistentes virtuais, brinquedos inteligentes e eletrodomésticos com comando de voz, são suscetíveis a ataques como voz intrusa ou mascaramento de voz. Essas vulnerabilidades podem expor informações privadas e permitir a execução de comandos falsos, comprometendo a privacidade e a segurança do ambiente IoT.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **criptografia de ponta a ponta** nas comunicações de voz.
* O sistema deve implementar **autenticação robusta de voz** para validar a identidade dos usuários.
* O sistema deve monitorar **tráfego de voz em rede** para identificar atividades suspeitas.
* O sistema deve aplicar **atualizações de segurança** regularmente para corrigir vulnerabilidades conhecidas.
* O sistema deve implementar **controle de acesso** para restringir interações de voz apenas a usuários autorizados.

**Exemplos de Aplicação**

* Smart speakers (Google Home, Amazon Echo) que validam comandos de voz antes da execução.
* Brinquedos conectados que usam autenticação de voz para impedir interação com estranhos.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** criptografia TLS para tráfego de voz, integração com biometria de voz, políticas de controle de acesso baseadas em identidade.
>
> **Teste:** simulação de spoofing de voz, testes com gravações reproduzidas para falsificar comandos, inspeção de tráfego para identificar interceptações.

---


## FRP-SEC-012: Gestão Segura de Senhas

**Descrição**
O sistema deve garantir que senhas sejam fortes, únicas e armazenadas de forma segura, prevenindo acesso não autorizado a contas, dispositivos e informações sensíveis.

**Racional**
Senhas fracas, padrão ou mal armazenadas são um dos vetores mais comuns de ataque. Em ambientes IoT, onde dispositivos podem estar expostos a redes públicas ou acessíveis remotamente, o uso de senhas inseguras permite que atacantes assumam identidades legítimas, comprometendo a confidencialidade e a integridade do sistema.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve exigir a **alteração imediata de senhas padrão** após a instalação.
* O sistema deve exigir **senhas fortes** (mínimo de 12 caracteres, letras maiúsculas/minúsculas, números e símbolos).
* O sistema deve suportar **autenticação multifator (MFA)** quando aplicável.
* O sistema deve fornecer **gerenciamento seguro de senhas**, como integração com cofres ou gerenciadores de credenciais.
* O sistema deve **armazenar senhas com hashing e salting seguros**.
* O sistema deve aplicar **políticas de senha**, incluindo expiração periódica e proibição de reutilização de senhas antigas.
* O sistema deve promover **educação do usuário** sobre práticas seguras de autenticação.

**Exemplos de Aplicação**

* Câmeras de segurança IoT que bloqueiam o uso de senhas fracas e exigem troca da senha padrão no primeiro login.
* Gateways residenciais que oferecem autenticação multifator para acesso remoto.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de algoritmos de hashing modernos (ex.: Argon2, bcrypt), políticas de complexidade de senha, integração com MFA.
>
> **Teste:** tentativas de login com senhas fracas, auditorias de armazenamento de senha, testes de força bruta e dicionário, verificação de expiração/reuso de senha.



# Rede 

## FRP-SEC-006: Proteção contra Falsificação de Dispositivo

**Descrição**
O sistema deve prevenir que dispositivos falsificados se passem por dispositivos legítimos na rede IoT, garantindo que apenas dispositivos devidamente autenticados e autorizados possam se conectar e trocar informações.

**Racional**
Na falsificação de dispositivo, atacantes manipulam identificadores como endereços MAC, IP ou IDs de hardware para enganar a rede e obter acesso indevido. Isso compromete a confiança no ecossistema IoT, podendo levar ao roubo de dados, uso não autorizado de recursos ou movimentação lateral em ataques.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **autenticação forte** de dispositivos (ex.: certificados digitais, autenticação mútua).
* O sistema deve utilizar **criptografia robusta de comunicação** entre dispositivos IoT.
* O sistema deve realizar **monitoramento contínuo da rede** para identificar dispositivos não autorizados.
* O sistema deve aplicar **políticas de identidade e acesso** que definam permissões claras de conexão e recursos acessíveis.
* O sistema deve manter dispositivos atualizados com **correções de segurança e patches de firmware**.

**Exemplos de Aplicação**

* Gateways IoT que apenas aceitam conexões de sensores autenticados com certificados digitais.
* Redes industriais que bloqueiam dispositivos com endereços MAC clonados.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** autenticação baseada em PKI, uso de TLS/DTLS, integração com sistemas de IAM (Identity and Access Management).
>
> **Teste:** simulações de spoofing de MAC/IP, injeção de dispositivos falsos na rede, testes de penetração para validação das políticas de identidade.

---

# Dispositivo

## FRP-SEC-025: Proteção contra Clonagem de Etiquetas

**Descrição**
O sistema deve proteger contra clonagem de etiquetas de identificação em dispositivos IoT, garantindo que apenas etiquetas legítimas e não replicadas sejam aceitas em processos de autenticação, rastreamento e controle de acesso.

**Racional**
A clonagem de etiquetas RFID/NFC permite que atacantes falsifiquem identidades e obtenham acesso não autorizado a sistemas ou recursos. Isso compromete a confiança em processos baseados em etiquetas, como rastreamento logístico, controle de ativos e autenticação de usuários.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **etiquetas RFID/NFC com criptografia** para proteger dados transmitidos.
* O sistema deve implementar **métodos de autenticação avançada**, como multifator ou biometria associada à etiqueta.
* O sistema deve adotar **monitoramento de acessos e detecção de anomalias** para identificar tentativas de uso de etiquetas clonadas.
* O sistema deve utilizar **etiquetas dinâmicas**, que mudam dados de identificação periodicamente.
* O sistema deve proteger canais de comunicação entre leitores e etiquetas com **protocolos criptográficos robustos**.

**Exemplos de Aplicação**

* Controle de acesso físico com etiquetas NFC dinâmicas que alteram periodicamente sua chave de autenticação.
* Rastreamento de cargas logísticas com etiquetas RFID criptografadas que resistem à clonagem.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de RFID/NFC criptografado, integração de autenticação multifator, implementação de tags dinâmicas.
>
> **Teste:** simulações de clonagem de etiquetas, análise de logs de acesso, auditoria de protocolos criptográficos de comunicação entre leitores e tags.

