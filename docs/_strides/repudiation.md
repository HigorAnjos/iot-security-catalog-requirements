# Repudiation

Associado aos usuários que negam a execução de uma ação sem ter alguma maneira de provar o contrário — por exemplo, um usuário executa uma operação ilegal em um sistema que não tem capacidade para rastrear as operações proibidas. Não repúdio refere-se à capacidade de um sistema para combater ameaças de repúdio. Por exemplo, um usuário que adquire um item pode ter que inscrever o item após o recebimento. O vendedor pode usar o recibo assinado como prova de que o usuário recebeu o pacote

---

## Aplicação

### FRP-SEC-059: Monitoramento Ativo de Dispositivos IoT

<cvss-critical score="10.0" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:H/SI:H/SA:H">CVSS 10.0</cvss-critical>

**Descrição**
O sistema deve implementar monitoramento ativo e contínuo de dispositivos IoT, registrando atividades e detectando comportamentos suspeitos em tempo real, para garantir visibilidade, rastreabilidade e resposta rápida a incidentes de segurança.

**Racional**
Sem monitoramento ativo, é impossível garantir a detecção de anomalias ou ataques em dispositivos IoT. Isso compromete a capacidade de auditar eventos, atribuir responsabilidades e agir preventivamente contra ameaças, deixando a rede vulnerável a explorações prolongadas.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **monitoramento contínuo** de atividades, desempenho e segurança dos dispositivos.
* O sistema deve aplicar **técnicas de análise comportamental e detecção de anomalias** (ex.: aprendizado de máquina).
* O sistema deve realizar **gerenciamento centralizado de logs** e análises periódicas.
* O sistema deve emitir **alertas e notificações em tempo real** sobre incidentes e anomalias.
* O sistema deve manter **políticas de segurança atualizadas** em alinhamento com boas práticas e normas.

**Exemplos de Aplicação**

* Plataformas de cidades inteligentes que usam SIEM para monitorar tráfego de sensores em tempo real.
* Hospitais que aplicam monitoramento contínuo em dispositivos médicos conectados, detectando acessos suspeitos.

**Relacionamentos com Outros Padrões**
* FRP-SEC-054: Gerenciamento Seguro de Acesso
* FRP-SEC-033: Proteção contra Vazamento ou Violação de Dados
* FRP-SEC-009: Transferência e Armazenamento Seguros de Dados
* FRP-SEC-038: Controle Seguro de Tráfego

**Considerações de Implementação e Teste**

> **Implementação:** integração com sistemas SIEM, uso de IDS/IPS, técnicas de ML para detecção de anomalias, dashboards de monitoramento centralizado.
>
> **Teste:** simulação de incidentes para verificar alertas, auditoria de logs de dispositivos, validação de detecção de comportamento anômalo em sandbox.

---

### FRP-SEC-062: Garantia de Não Repúdio em IoT

<cvss-critical score="9.3" href="https://www.first.org/cvss/calculator/4-0#CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:L/VI:H/VA:L/SC:L/SI:H/SA:L">CVSS 9.3</cvss-critical>

**Descrição**
O sistema deve garantir que todas as ações realizadas em dispositivos, redes e serviços IoT sejam registradas e autenticadas de forma a impedir que usuários, dispositivos ou serviços neguem posteriormente sua execução ou participação.

**Racional**
Em ambientes IoT, a ausência de mecanismos de não repúdio pode comprometer a confiabilidade de transações, comandos e registros de atividades. Isso é especialmente crítico em cenários como IoT industrial, cidades inteligentes ou dispositivos médicos, onde a responsabilidade e a rastreabilidade são indispensáveis.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **assinaturas digitais** para garantir autenticidade e integridade de mensagens.
* O sistema deve manter **logs de auditoria protegidos contra adulteração**, com carimbo de data e hora.
* O sistema deve utilizar **criptografia forte** em todas as comunicações.
* O sistema deve aplicar **autenticação robusta** (ex.: MFA, certificados digitais).
* O sistema deve adotar **protocolos de comunicação seguros**, como TLS.
* O sistema deve usar **certificados digitais** para autenticar dispositivos e usuários.

**Exemplos de Aplicação**

* Sensores de IoT industrial que assinam digitalmente os dados antes de enviá-los para análise em nuvem.
* Plataformas de cidades inteligentes que mantêm logs imutáveis de ações de dispositivos críticos (ex.: semáforos inteligentes).

**Relacionamentos com Outros Padrões**
* FRP-SEC-048: Criptografia Robusta na Comunicação
* FRP-SEC-033: Proteção contra Vazamento ou Violação de Dados
* FRP-SEC-054: Gerenciamento Seguro de Acesso
* FRP-SEC-040: Autenticação Robusta em IoT

**Considerações de Implementação e Teste**

> **Implementação:** uso de PKI, certificados X.509, blockchain ou registros imutáveis para auditoria, TLS 1.3 com suporte a Perfect Forward Secrecy.
>
> **Teste:** validação de logs imutáveis, testes de assinatura digital em transações, auditorias de conformidade com LGPD/GDPR em registros de atividades.

---

