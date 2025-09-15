# Information Disclosure

Ameaças relacionadas à exposição não autorizada de informações confidenciais.

---


## FRP-SEC-002: Proteção contra Links Maliciosos

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
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação**: uso de filtragem DNS, listas de bloqueio de domínios, inspeção profunda de pacotes (DPI), atualizações OTA.
>
> **Teste**: simulação de phishing com links encurtados/redirecionados, verificação de bloqueio em tempo real, análise de geração de logs.


# Dispositivo

## NFRP-SEC-007: Proteção contra Vazamento de Emanações Eletromagnéticas

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
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de filtros eletromagnéticos em hardware, isolamento físico, criptografia ponta a ponta, hardening de firmware.
>
> **Teste:** testes de laboratório de emanações eletromagnéticas, simulações de ataques de *side-channel*, auditorias de firmware para verificar implementação de criptografia.


---

## NFRP-SEC-015: Proteção contra Canais Laterais

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
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de técnicas de *constant-time execution*, blindagem EM, variação controlada de consumo de energia, ruído aleatório em hardware/firmware.
>
> **Teste:** simulações de ataques de análise de energia (DPA/SPA), auditorias de ruído eletromagnético, testes de side-channel em laboratório.

---

## FRP-SEC-028: Criptografia Forte em Dispositivos IoT

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
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de TLS 1.3, AES-256, RSA/ECC, integração com TPM/HSM, rotação automática de chaves.
>
> **Teste:** auditorias criptográficas, testes de interceptação de tráfego, simulação de ataques de extração de dados locais, validação de rotação de chaves.

---


# Rede

## FRP-SEC-033: Proteção contra Vazamento ou Violação de Dados

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
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** TLS 1.3, AES-256, RBAC/ABAC, APIs com OAuth2 e validação de entrada, auditorias regulares.
>
> **Teste:** pentests de APIs, testes de extração de dados em repouso, simulação de ataque de *data breach*, varredura de configurações inseguras.

---

## FRP-SEC-034: Proteção contra Escuta Clandestina

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
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** TLS 1.3, DTLS para dispositivos leves, autenticação mútua com certificados digitais, segmentação em VLANs.
>
> **Teste:** simulação de sniffing de tráfego sem fio, testes de MitM, auditorias de logs de rede, verificação da aplicação correta da criptografia.

---
