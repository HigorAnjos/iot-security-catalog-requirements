# Information Disclosure

Envolve a exposição de informações para os indivíduos que não devem para ter acesso a ele — por exemplo, a capacidade dos usuários para ler um arquivo que não tem permissão de acesso para ou a capacidade de um intruso ler dados em trânsito entre dois computadores

---

## Aplicação

### FRP-SEC-002: Proteção contra Links Maliciosos

**Descrição**
O sistema deve prevenir que usuários de dispositivos IoT acessem links maliciosos que possam resultar em vazamento de dados, instalação de malware ou exploração de vulnerabilidades conhecidas.

**Racional**
Links maliciosos são um vetor comum de ataques. Em ambientes IoT, dispositivos estão frequentemente expostos em redes inseguras, e seu comprometimento pode servir de porta de entrada para invasores, ampliando o risco de perda de dados e controle indevido da infraestrutura.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve bloquear links maliciosos antes do acesso pelo usuário.
* O sistema deve monitorar o tráfego de rede em tempo real para identificar padrões suspeitos.
* O sistema deve aplicar atualizações de segurança em até **X dias** após liberação oficial.
* O sistema deve restringir o acesso a sites externos não autorizados.
* O sistema deve registrar tentativas de acesso a links maliciosos para auditoria.

**Exemplos de Aplicação**

* Sensores industriais conectados que só permitem comunicação com domínios autorizados.
* Dispositivos médicos que bloqueiam URLs externas suspeitas em interfaces de monitoramento.

**Relacionamentos com Outros Padrões**
* FRP-SEC-009: Transferência e Armazenamento Seguros de Dados
* FRP-SEC-038: Controle Seguro de Tráfego
* FRP-SEC-046: Proteção contra Redes Inseguras
* FRP-SEC-048: Criptografia Robusta na Comunicação

**Considerações de Implementação e Teste**

> **Implementação**: uso de filtragem DNS, listas de bloqueio de domínios, inspeção profunda de pacotes (DPI), atualizações OTA.
>
> **Teste**: simulação de phishing com links encurtados/redirecionados, verificação de bloqueio em tempo real, análise de geração de logs.

---

### FRP-SEC-057: Gestão Segura de Dados

<cvss-critical score="10.0" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:H/SI:H/SA:L">CVSS 10.0</cvss-critical>

**Descrição**
O sistema deve garantir que os dados coletados, processados e armazenados por dispositivos e serviços IoT sejam tratados com segurança durante todo o seu ciclo de vida, prevenindo vazamentos e acessos não autorizados.

**Racional**
A falta de boas práticas de gestão de dados pode expor informações pessoais ou sensíveis, resultando em violações de privacidade, perdas financeiras e comprometimento de confiança. É essencial aplicar segurança desde a coleta até o armazenamento e o compartilhamento dos dados.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve adotar **práticas de coleta mínima de dados**, limitando-se ao estritamente necessário.
* O sistema deve aplicar **criptografia de ponta a ponta** para dados transmitidos entre dispositivos e back-end.
* O sistema deve implementar **armazenamento seguro de dados**, com criptografia e controle de acesso.
* O sistema deve adotar **mecanismos de autenticação e autorização robustos** para acesso aos dados.
* O sistema deve realizar **auditorias regulares** para verificar conformidade com regulamentações de privacidade.

**Exemplos de Aplicação**

* Dispositivos de saúde que coletam apenas sinais vitais relevantes e armazenam os dados criptografados em nuvem.
* Plataformas de cidades inteligentes que aplicam controles de acesso estritos a dados de tráfego e transporte.

**Relacionamentos com Outros Padrões**
* FRP-SEC-009: Transferência e Armazenamento Seguros de Dados
* FRP-SEC-028: Criptografia Forte em Dispositivos IoT
* FRP-SEC-066: Criptografia Robusta na Aplicação IoT
* FRP-SEC-033: Proteção contra Vazamento ou Violação de Dados

**Considerações de Implementação e Teste**

> **Implementação:** criptografia AES-256 para armazenamento, TLS 1.3 para transmissão, RBAC/ABAC para acesso, conformidade com LGPD/GDPR.
>
> **Teste:** auditorias de privacidade, testes de fuga de dados (*data leakage*), simulações de acesso indevido, inspeção de políticas de minimização de dados.

---

### FRP-SEC-065: Prevenção de Enumeração de Usuários

<cvss-medium score="6.9" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:L/VI:N/VA:N/SC:L/SI:N/SA:N">CVSS 6.9</cvss-medium>

**Descrição**
O sistema deve proteger os mecanismos de autenticação e APIs contra a enumeração de nomes de usuários, evitando que atacantes identifiquem contas válidas por meio de mensagens de erro, respostas diferenciadas ou padrões de comportamento do sistema.

**Racional**
Quando um sistema expõe, ainda que de forma indireta, a existência de usuários válidos, facilita ataques de força bruta, phishing direcionado ou exploração de credenciais. Essa falha é crítica em IoT, onde dispositivos e serviços muitas vezes têm autenticação simplificada.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve exibir **mensagens de erro genéricas** em tentativas de login falhas (“Credenciais inválidas”).
* O sistema deve aplicar **mecanismos de proteção contra força bruta** (rate limiting, bloqueios temporários, MFA).
* O sistema deve realizar **monitoramento e alertas** de tentativas de login suspeitas.
* O sistema deve aplicar **proteção de dados sensíveis**, como criptografia ou anonimização de nomes de usuário.
* O sistema deve promover **educação dos usuários** sobre criação e proteção de credenciais.

**Exemplos de Aplicação**

* APIs de dispositivos inteligentes que sempre retornam a mesma resposta para falha de login.
* Serviços em nuvem para IoT que aplicam bloqueio automático após múltiplas tentativas inválidas.

**Relacionamentos com Outros Padrões**
* FRP-SEC-040: Autenticação Robusta em IoT
* FRP-SEC-041: Exigência de Senhas Fortes
* FRP-SEC-051: Mitigação de Quebra de Autenticação
* FRP-SEC-045: Prevenção de Acesso Não Autorizado

**Considerações de Implementação e Teste**

> **Implementação:** padronizar mensagens de erro, configurar rate limiting, aplicar MFA em sistemas críticos, criptografar identificadores de usuário.
>
> **Teste:** simular ataques de enumeração (diferenciação de mensagens, tempos de resposta), testes de força bruta, análise de logs para detecção de tentativas automatizadas.

---

### FRP-SEC-066: Criptografia Robusta na Aplicação IoT

<cvss-critical score="10.0" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:H/SI:H/SA:L">CVSS 10.0</cvss-critical>

**Descrição**
O sistema deve implementar criptografia forte e adequada em nível de aplicação para proteger dados em trânsito e em repouso, garantindo que não sejam expostos ou manipulados por atacantes devido a algoritmos obsoletos ou ausência de mecanismos criptográficos.

**Racional**
Sem criptografia robusta, dados sensíveis transmitidos ou armazenados em dispositivos IoT podem ser interceptados, modificados ou utilizados de forma maliciosa. Em sistemas distribuídos e altamente conectados, como IoT, isso aumenta o risco de espionagem, fraude e perda de confiança.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve adotar **algoritmos modernos de criptografia** (AES, RSA, SHA-256).
* O sistema deve aplicar **gerenciamento seguro de chaves**, incluindo rotação e armazenamento protegido.
* O sistema deve utilizar **protocolos seguros de comunicação** (TLS/SSL, DTLS em dispositivos leves).
* O sistema deve **criptografar dados sensíveis em repouso** em dispositivos e servidores.
* O sistema deve realizar **auditorias e atualizações regulares** de seus mecanismos criptográficos.

**Exemplos de Aplicação**

* Aplicativos de monitoramento de saúde que criptografam dados do paciente no dispositivo e durante a transmissão para a nuvem.
* Sistemas de casas inteligentes que utilizam TLS 1.3 e certificados digitais para proteger comandos enviados a dispositivos.

**Relacionamentos com Outros Padrões**
* FRP-SEC-028: Criptografia Forte em Dispositivos IoT
* FRP-SEC-009: Transferência e Armazenamento Seguros de Dados
* FRP-SEC-048: Criptografia Robusta na Comunicação
* FRP-SEC-033: Proteção contra Vazamento ou Violação de Dados

**Considerações de Implementação e Teste**

> **Implementação:** uso de HSMs para chaves, TLS 1.3, bibliotecas criptográficas confiáveis, descontinuação de algoritmos fracos (MD5, SHA-1).
>
> **Teste:** auditorias de configuração criptográfica, testes de downgrade de protocolos, simulações de ataque *man-in-the-middle*, inspeção de dados em repouso.

---

## Dispositivo

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

**Relacionamentos com Outros Padrões**
* NFRP-SEC-015: Proteção contra Canais Laterais
* FRP-SEC-028: Criptografia Forte em Dispositivos IoT
* FRP-SEC-057: Gestão Segura de Dados

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

**Relacionamentos com Outros Padrões**
* NFRP-SEC-007: Proteção contra Vazamento de Emanações Eletromagnéticas
* FRP-SEC-028: Criptografia Forte em Dispositivos IoT

**Considerações de Implementação e Teste**

> **Implementação:** uso de técnicas de *constant-time execution*, blindagem EM, variação controlada de consumo de energia, ruído aleatório em hardware/firmware.
>
> **Teste:** simulações de ataques de análise de energia (DPA/SPA), auditorias de ruído eletromagnético, testes de side-channel em laboratório.

---

### FRP-SEC-028: Criptografia Forte em Dispositivos IoT

<cvss-critical score="10.0" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:H/SI:H/SA:L">CVSS 10.0</cvss-critical>

**Descrição**
O sistema deve proteger dados sensíveis em dispositivos IoT utilizando mecanismos de criptografia fortes, tanto para dados em repouso quanto em trânsito, prevenindo sua exposição ou uso indevido por adversários.

**Racional**
A ausência ou fraqueza de criptografia em dispositivos IoT permite que atacantes interceptem, leiam ou modifiquem dados sensíveis, incluindo credenciais, configurações e informações pessoais. Essa vulnerabilidade compromete diretamente a confidencialidade e a integridade da rede IoT.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **algoritmos de criptografia fortes** (ex.: AES para dados, RSA/ECC para chaves).
* O sistema deve adotar **gerenciamento seguro de chaves**, incluindo rotação periódica e uso de HSMs.
* O sistema deve aplicar **criptografia de dados em repouso**, incluindo configurações, logs e dados de usuário.
* O sistema deve prover **mecanismos de atualização segura de algoritmos e chaves**.
* O sistema deve implementar **proteções físicas e lógicas** contra acesso não autorizado às interfaces de administração.
* O sistema deve passar por **auditorias de conformidade regulares** para validar a segurança da criptografia.

**Exemplos de Aplicação**

* Dispositivos médicos que armazenam sinais vitais criptografados localmente e os transmitem via TLS.
* Sensores industriais que utilizam chaves gerenciadas por HSM e criptografia AES-256 em seus registros de operação.

**Relacionamentos com Outros Padrões**
* FRP-SEC-066: Criptografia Robusta na Aplicação IoT
* FRP-SEC-009: Transferência e Armazenamento Seguros de Dados
* FRP-SEC-033: Proteção contra Vazamento ou Violação de Dados

**Considerações de Implementação e Teste**

> **Implementação:** uso de TLS 1.3, AES-256, RSA/ECC, integração com TPM/HSM, rotação automática de chaves.
>
> **Teste:** auditorias criptográficas, testes de interceptação de tráfego, simulação de ataques de extração de dados locais, validação de rotação de chaves.

---


## Rede

### FRP-SEC-033: Proteção contra Vazamento ou Violação de Dados

<cvss-critical score="9.9" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:H/SI:H/SA:N">CVSS 9.9</cvss-critical>

**Descrição**
O sistema deve proteger dados sensíveis em redes IoT contra vazamento, violação ou acesso não autorizado, assegurando confidencialidade, integridade e disponibilidade das informações em trânsito e em repouso.

**Racional**
Vazamentos de dados comprometem diretamente a privacidade de usuários e a segurança operacional do ecossistema IoT. Brechas de configuração, APIs inseguras, armazenamento desprotegido e falhas em criptografia são vetores comuns de exploração que permitem acesso indevido a dados críticos.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve aplicar **criptografia robusta** em dados em trânsito e em repouso.
* O sistema deve garantir **configuração segura** (senhas fortes, desativação de portas, permissões limitadas).
* O sistema deve implementar **controles de acesso rigorosos**, seguindo o princípio do menor privilégio.
* O sistema deve adotar **monitoramento contínuo e IDS/IPS** para detectar violações.
* O sistema deve proteger **APIs e interfaces** com autenticação forte, criptografia e validação de entradas.
* O sistema deve aplicar **armazenamento seguro** com criptografia e controles de acesso.
* O sistema deve realizar **avaliações e auditorias periódicas** de segurança.
* O sistema deve utilizar **fornecedores confiáveis** que sigam boas práticas e conformidade regulatória.

**Exemplos de Aplicação**

* Plataformas de casa inteligente que criptografam comunicações entre dispositivos e nuvem.
* Soluções de saúde IoT que armazenam registros médicos criptografados em conformidade com a LGPD/HIPAA.

**Relacionamentos com Outros Padrões**
* FRP-SEC-009: Transferência e Armazenamento Seguros de Dados
* FRP-SEC-048: Criptografia Robusta na Comunicação
* FRP-SEC-054: Gerenciamento Seguro de Acesso

**Considerações de Implementação e Teste**

> **Implementação:** TLS 1.3, AES-256, RBAC/ABAC, APIs com OAuth2 e validação de entrada, auditorias regulares.
>
> **Teste:** pentests de APIs, testes de extração de dados em repouso, simulação de ataque de *data breach*, varredura de configurações inseguras.

---

### FRP-SEC-034: Proteção contra Escuta Clandestina

<cvss-high score="8.4" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:A/AC:L/AT:N/PR:N/UI:N/VC:H/VI:L/VA:N/SC:H/SI:L/SA:N">CVSS 8.4</cvss-high>

**Descrição**
O sistema deve proteger as comunicações IoT contra interceptações não autorizadas, garantindo que dados transmitidos permaneçam confidenciais e inacessíveis a atacantes, mesmo que capturados durante a transmissão.

**Racional**
Dispositivos IoT utilizam principalmente canais sem fio, tornando-os suscetíveis à interceptação de sinais. Sem criptografia e autenticação robustas, adversários podem monitorar comunicações, obter informações sensíveis e preparar ataques mais complexos, como homem-no-meio (MitM).

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve aplicar **criptografia de ponta a ponta** em todas as comunicações IoT.
* O sistema deve implementar **autenticação forte de dispositivos e usuários** para evitar MitM.
* O sistema deve realizar **monitoramento contínuo da rede** para identificar padrões suspeitos.
* O sistema deve manter **atualizações regulares de segurança** em dispositivos e sistemas de gerenciamento.
* O sistema deve promover **conscientização dos usuários** sobre riscos e boas práticas.
* O sistema deve aplicar **segmentação de rede** para isolar dispositivos IoT de outras partes da rede.

**Exemplos de Aplicação**

* Smart homes que utilizam TLS em todas as comunicações entre sensores e servidores na nuvem.
* Redes corporativas que isolam dispositivos IoT críticos em VLANs protegidas contra sniffing.

**Relacionamentos com Outros Padrões**
* FRP-SEC-048: Criptografia Robusta na Comunicação
* FRP-SEC-009: Transferência e Armazenamento Seguros de Dados
* FRP-SEC-036: Comunicação Segura em Ambientes Heterogêneos

**Considerações de Implementação e Teste**

> **Implementação:** TLS 1.3, DTLS para dispositivos leves, autenticação mútua com certificados digitais, segmentação em VLANs.
>
> **Teste:** simulação de sniffing de tráfego sem fio, testes de MitM, auditorias de logs de rede, verificação da aplicação correta da criptografia.

---
