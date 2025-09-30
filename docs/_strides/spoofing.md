# Spoofing

Envolve acessar ilegalmente e, em seguida, usando as informações de autenticação de outro usuário, como nome de usuário e senha

---

## Aplicação

### FRP-SEC-001: Autenticação Forte

<cvss-critical score="9.3" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:N/SI:N/SA:N">CVSS 9.3</cvss-critical>

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
- [*FRP-SEC-041: Exigência de Senhas Fortes*](https://iot-security-catalog-requirements.readthedocs.io/pt-br/latest/_strides/spoofing/#frp-sec-041-exigencia-de-senhas-fortes)

**Considerações de Implementação e Teste**

> **Implementação:** uso de MFA (TOTP, biometria, certificados), hashing seguro de credenciais (Argon2, bcrypt), controle de sessões e revogação de tokens.
>
> **Teste:** testes de força bruta e dicionário, auditorias de armazenamento de credenciais, simulação de bypass de MFA, análise de logs de autenticação.

### FRP-SEC-004: Canal de Voz Seguro

<cvss-critical score="9.3" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:N/SI:N/SA:N">CVSS 9.3</cvss-critical>

 

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
* FRP-SEC-040: Autenticação Robusta em IoT
* FRP-SEC-041: Exigência de Senhas Fortes
* FRP-SEC-045: Prevenção de Acesso Não Autorizado
* FRP-SEC-048: Criptografia Robusta na Comunicação

**Considerações de Implementação e Teste**

> **Implementação:** criptografia TLS para tráfego de voz, integração com *Voice Biometric* para verificar a identidade de uma pessoa cadastrada, políticas de controle de acesso baseadas em identidade.
>
> **Teste:** simulação de spoofing de voz, testes com gravações reproduzidas para falsificar comandos de voz, inspeção de tráfego para identificar interceptações.

---

### FRP-SEC-012: Gestão Segura de Senhas

<cvss-critical score="9.3" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:L/SI:N/SA:N">CVSS 9.3</cvss-critical>

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
* FRP-SEC-041: Exigência de Senhas Fortes
* FRP-SEC-040: Autenticação Robusta em IoT
* FRP-SEC-051: Mitigação de Quebra de Autenticação
* FRP-SEC-045: Prevenção de Acesso Não Autorizado

**Considerações de Implementação e Teste**

> **Implementação:** uso de algoritmos de hashing modernos (ex.: Argon2, bcrypt), políticas de complexidade de senha, integração com MFA.
>
> **Teste:** tentativas de login com senhas fracas, auditorias de armazenamento de senha, testes de força bruta e dicionário, verificação de expiração/reuso de senha.

---

### FRP-SEC-040: Autenticação Robusta em IoT

<cvss-critical score="9.9" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:H/SI:H/SA:N">CVSS 9.9</cvss-critical>

**Descrição**
O sistema deve implementar mecanismos adequados e robustos de autenticação para garantir que apenas dispositivos, usuários e serviços autorizados tenham acesso a recursos e funcionalidades da rede IoT.

**Racional**
A ausência ou inadequação de mecanismos de autenticação expõe a rede IoT a ataques de falsificação de identidade. Isso permite que atacantes assumam o papel de dispositivos ou usuários legítimos, acessem dados sensíveis ou manipulem serviços críticos.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **autenticação forte de dispositivos**, com uso de chaves criptográficas ou certificados digitais.
* O sistema deve exigir **senhas complexas ou credenciais seguras** para usuários e serviços.
* O sistema deve aplicar **controle físico** nos dispositivos para prevenir acesso local não autorizado.
* O sistema deve estar em **conformidade com normas e regulamentos de segurança** (ex.: GDPR, LGPD, ISO 27001).

**Exemplos de Aplicação**

* Gateways IoT que validam certificados digitais de todos os dispositivos conectados antes de liberar comunicação.
* Plataformas em nuvem que exigem autenticação multifator para administradores e operadores.

**Relacionamentos com Outros Padrões**
* FRP-SEC-001: Autenticação Forte
* FRP-SEC-041: Exigência de Senhas Fortes
* FRP-SEC-051: Mitigação de Quebra de Autenticação
* FRP-SEC-045: Prevenção de Acesso Não Autorizado

**Considerações de Implementação e Teste**

> **Implementação:** uso de PKI para autenticação de dispositivos, MFA para usuários, cofres de credenciais, integração com IAM.
>
> **Teste:** simulação de falsificação de dispositivos, tentativas de acesso com credenciais fracas, auditorias de conformidade regulatória.

---

### FRP-SEC-041: Exigência de Senhas Fortes

<cvss-critical score="9.9" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:H/SI:H/SA:N">CVSS 9.9</cvss-critical>

**Descrição**
O sistema deve exigir o uso de senhas fortes e exclusivas para autenticação de usuários, dispositivos e serviços em ambientes IoT, prevenindo que credenciais frágeis sejam exploradas por atacantes.

**Racional**
Senhas fracas ou padrão são facilmente adivinhadas ou obtidas em ataques de força bruta e dicionário. Em IoT, onde muitos dispositivos permanecem acessíveis via rede, essa vulnerabilidade pode comprometer rapidamente não apenas o dispositivo, mas toda a infraestrutura conectada.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve exigir **senhas fortes** (mínimo de 12 caracteres, incluindo maiúsculas, minúsculas, números e símbolos).
* O sistema deve **obrigar a alteração de senhas padrão** na configuração inicial do dispositivo.
* O sistema deve implementar **políticas de senha**, incluindo expiração periódica e prevenção de reutilização de senhas antigas.
* O sistema deve suportar **autenticação multifator (MFA)** sempre que possível.
* O sistema deve promover **educação dos usuários** sobre boas práticas de senhas.
* O sistema deve oferecer ou recomendar **ferramentas de gerenciamento de senhas** seguras.

**Exemplos de Aplicação**

* Câmeras IoT que não permitem login com senhas fracas e exigem troca imediata da senha padrão.
* Gateways de rede que exigem MFA além de senha para acesso administrativo.

**Relacionamentos com Outros Padrões**
* FRP-SEC-001: Autenticação Forte
* FRP-SEC-040: Autenticação Robusta em IoT
* FRP-SEC-051: Mitigação de Quebra de Autenticação
* NFRP-SEC-050: Políticas Seguras de Bloqueio de Conta

**Considerações de Implementação e Teste**

> **Implementação:** aplicação de políticas de complexidade de senha, MFA via TOTP ou biometria, integração com cofres de credenciais.
>
> **Teste:** tentativas de login com senhas fracas, auditorias de senhas padrão em dispositivos, simulação de ataques de força bruta e dicionário.

---

### FRP-SEC-051: Mitigação de Quebra de Autenticação

<cvss-critical score="10.0" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:H/SI:H/SA:H">CVSS 10.0</cvss-critical>

**Descrição**
O sistema deve implementar mecanismos robustos para prevenir a quebra de autenticação, garantindo que apenas usuários, dispositivos e serviços devidamente verificados tenham acesso aos recursos da rede IoT.

**Racional**
A falta de autenticação forte ou políticas adequadas expõe dispositivos IoT a ataques em que adversários assumem identidades legítimas, explorando falhas de segurança e comprometendo dados e serviços. Isso pode incluir força bruta, credenciais padrão ou injeção de código para burlar autenticação.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve aplicar **autenticação multifator (MFA)** para acesso de usuários e dispositivos.
* O sistema deve exigir **senhas fortes** e aplicar **políticas de bloqueio de conta** contra tentativas de força bruta.
* O sistema deve exigir a **alteração de credenciais padrão** e permitir personalização de credenciais pelos usuários.
* O sistema deve realizar **validação de entradas de usuário** para evitar injeções que comprometam a autenticação.
* O sistema deve **monitorar e registrar atividades de autenticação** para identificar tentativas de ataque.

**Exemplos de Aplicação**

* Sistemas de automação residencial que exigem MFA para administração remota.
* Gateways industriais que rejeitam credenciais padrão e aplicam bloqueio de conta após múltiplas falhas de login.

**Relacionamentos com Outros Padrões**
* FRP-SEC-040: Autenticação Robusta em IoT
* FRP-SEC-041: Exigência de Senhas Fortes
* NFRP-SEC-050: Políticas Seguras de Bloqueio de Conta

**Considerações de Implementação e Teste**

> **Implementação:** MFA (senha + token ou biometria), bloqueio progressivo de conta, personalização de credenciais, WAF para validação de entradas.
>
> **Teste:** simulações de ataques de força bruta, auditorias de credenciais padrão, testes de injeção SQL/XSS em fluxos de autenticação, análise de logs de tentativas de login.

---


## Dispositivo

### FRP-SEC-025: Proteção contra Clonagem de Etiquetas

<cvss-high score="8.4" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:A/AC:L/AT:N/PR:N/UI:N/VC:L/VI:H/VA:L/SC:H/SI:L/SA:N">CVSS 8.4</cvss-high>

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
* FRP-SEC-006: Proteção contra Falsificação de Dispositivo
* FRP-SEC-035: Proteção contra Nós Falsos ou Maliciosos
* FRP-SEC-044: Proteção contra Falsificação de Sinal

**Considerações de Implementação e Teste**

> **Implementação:** uso de RFID/NFC criptografado, integração de autenticação multifator, implementação de tags dinâmicas.
>
> **Teste:** simulações de clonagem de etiquetas, análise de logs de acesso, auditoria de protocolos criptográficos de comunicação entre leitores e tags.

---

## Rede

### FRP-SEC-006: Proteção contra Falsificação de Dispositivo

<cvss-critical score="9.3" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:N/SI:N/SA:N">CVSS 9.3</cvss-critical>

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
* FRP-SEC-040: Autenticação Robusta em IoT
* FRP-SEC-048: Criptografia Robusta na Comunicação
* FRP-SEC-046: Proteção contra Redes Inseguras
* FRP-SEC-036: Comunicação Segura em Ambientes Heterogêneos

**Considerações de Implementação e Teste**

> **Implementação:** autenticação baseada em PKI, uso de TLS/DTLS, integração com sistemas de IAM (Identity and Access Management).
>
> **Teste:** simulações de spoofing de MAC/IP, injeção de dispositivos falsos na rede, testes de penetração para validação das políticas de identidade.

---

### FRP-SEC-035: Proteção contra Nós Falsos ou Maliciosos

<cvss-critical score="9.3" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:N/SI:N/SA:N">CVSS 9.3</cvss-critical>

**Descrição**
O sistema deve proteger redes IoT contra a inserção de nós falsos ou maliciosos, garantindo que apenas dispositivos autenticados e autorizados possam participar da comunicação e do fluxo de dados.

**Racional**
Nós maliciosos podem ser introduzidos em redes IoT para coletar, manipular ou redirecionar dados entre dispositivos legítimos. Sem autenticação forte e monitoramento, esses nós podem comprometer a confidencialidade, a integridade e a confiabilidade do ecossistema IoT.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **autenticação robusta de nós** (ex.: certificados digitais, MFA).
* O sistema deve aplicar **criptografia forte** em todos os dados em trânsito.
* O sistema deve realizar **monitoramento contínuo da rede** para identificar comportamentos anômalos.
* O sistema deve usar **listas de controle de acesso (ACLs)** para definir permissões de comunicação.
* O sistema deve garantir que nós executem apenas **software/firmware verificado e assinado**.
* O sistema deve aplicar **segmentação de rede** para limitar o impacto de possíveis nós maliciosos.
* O sistema deve manter **atualizações e patches regulares** em todos os dispositivos.

**Exemplos de Aplicação**

* Redes de sensores em malha que validam certificados digitais de cada nó antes de permitir comunicação.
* Gateways industriais que rejeitam conexões de dispositivos com firmware não verificado.

**Relacionamentos com Outros Padrões**
* FRP-SEC-006: Proteção contra Falsificação de Dispositivo
* FRP-SEC-048: Criptografia Robusta na Comunicação
* FRP-SEC-046: Proteção contra Redes Inseguras
* FRP-SEC-036: Comunicação Segura em Ambientes Heterogêneos

**Considerações de Implementação e Teste**

> **Implementação:** uso de PKI, TLS/DTLS, segmentação lógica (VLANs), ACLs de rede, validação de firmware assinado.
>
> **Teste:** simulações de inserção de nós falsos, auditoria de tráfego anômalo, verificação de políticas de ACL, validação de logs de autenticação de nós.

---

### FRP-SEC-044: Proteção contra Falsificação de Sinal

<cvss-critical score="9.3" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:L/VI:H/VA:L/SC:L/SI:H/SA:L">CVSS 9.3</cvss-critical>

**Descrição**
O sistema deve proteger dispositivos IoT contra sinais falsificados ou manipulados, garantindo que apenas transmissões legítimas sejam aceitas e utilizadas para controle ou troca de informações.

**Racional**
A falsificação de sinais permite que atacantes transmitam comandos não autorizados ou manipulem dados recebidos por dispositivos IoT. Sem autenticação robusta e mecanismos de validação, a rede pode ser enganada a executar ações incorretas ou expor informações sensíveis.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **autenticação forte de sinais e dispositivos** (certificados digitais, criptografia, verificação de integridade).
* O sistema deve realizar **monitoramento contínuo da rede** para identificar padrões de tráfego suspeitos.
* O sistema deve empregar **filtros de sinal** para bloquear transmissões não autorizadas e implementar **detecção de jamming**.
* O sistema deve adotar **mecanismos redundantes e validação cruzada** entre dispositivos/sensores para confirmar autenticidade dos sinais.

**Exemplos de Aplicação**

* Drones que validam criptograficamente sinais de comando para evitar sequestro por spoofing.
* Sistemas de medidores inteligentes que rejeitam sinais sem certificados digitais válidos.

**Relacionamentos com Outros Padrões**
* FRP-SEC-006: Proteção contra Falsificação de Dispositivo
* FRP-SEC-035: Proteção contra Nós Falsos ou Maliciosos
* FRP-SEC-048: Criptografia Robusta na Comunicação

**Considerações de Implementação e Teste**

> **Implementação:** uso de PKI para autenticação de sinais, criptografia em camadas, IDS/IPS para análise de tráfego, filtros RF.
>
> **Teste:** simulações de spoofing de sinais, auditorias de logs de tráfego, testes de validação cruzada em sensores redundantes.



---