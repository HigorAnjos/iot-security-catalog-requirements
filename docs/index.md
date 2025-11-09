<div style="text-align: center; margin-bottom: 2rem;">
    <img src="assets/images/iot.png" alt="IoT Security Logo" style="width: 100%; margin: 0 auto;">
</div>

# Catálogo de Padrões de Requisitos de Segurança IoT

> **Um guia prático e estruturado para identificar, aplicar e validar controles de segurança em sistemas IoT.**

---

## 💡 O que é este Catálogo?

Um **catálogo de padrões** é uma coleção estruturada de soluções reutilizáveis que documentam abordagens comprovadas para resolver problemas recorrentes em um domínio específico. 

Este catálogo organiza **padrões de requisitos de segurança** específicos para ambientes IoT, utilizando a metodologia **STRIDE** (desenvolvida pela Microsoft) para classificar ameaças e suas respectivas mitigações.

### 🎯 Por que usar STRIDE?

STRIDE oferece uma abordagem sistemática para análise de ameaças, categorizando-as em **6 tipos principais**:

- **S**poofing (Falsificação de Identidade)
- **T**ampering (Adulteração)
- **R**epudiation (Repúdio)
- **I**nformation Disclosure (Divulgação de Informações)
- **D**enial of Service (Negação de Serviço)
- **E**levation of Privilege (Elevação de Privilégio)

Para cada categoria, este catálogo apresenta padrões adaptados às características únicas de dispositivos IoT (recursos limitados, exposição física, conectividade intermitente, etc.).

---

## 🗂️ Explore por Categoria STRIDE

Selecione uma categoria abaixo para explorar os padrões de segurança relacionados:

<div class="grid cards" markdown>

- :material-account-question: **[Spoofing (Falsificação de Identidade)](_strides/spoofing.md)**

    Ameaças relacionadas à falsificação de identidade de usuários ou dispositivos
    
    *Padrões: Autenticação Forte*

- :material-file-edit: **[Tampering (Adulteração)](_strides/tampering.md)**

    Modificação não autorizada de dados, código ou configurações
    
    *Padrões: Criptografia de Dados, Gestão de Chaves, Atualização Segura*

- :material-cancel: **[Repudiation (Repúdio)](_strides/repudiation.md)**

    Negação de ações realizadas sem possibilidade de prova
    
    *Padrões: Registro e Auditoria*

- :material-eye-off: **[Information Disclosure (Divulgação de Informações)](_strides/information_disclosure.md)**

    Exposição não autorizada de informações confidenciais
    
    *Padrões: Criptografia de Dados, Gestão de Chaves, Privacidade de Dados*

- :material-server-off: **[Denial of Service (Negação de Serviço)](_strides/denial_of_service.md)**

    Indisponibilidade de serviços ou recursos do sistema
    
    *Padrões: Monitoramento Contínuo, Disponibilidade Resiliente, Limitação de Recursos*

- :material-shield-alert: **[Elevation of Privilege (Elevação de Privilégio)](_strides/elevation_of_privilege.md)**

    Obtenção não autorizada de permissões elevadas
    
    *Padrões: Controle de Acesso, Monitoramento Contínuo, Atualização Segura*

</div>

---

## 📊 Entendendo os Níveis de Criticidade

Cada padrão é classificado conforme seu impacto na segurança do sistema:

| Nível | O que significa | Quando implementar |
|:-----:|:----------------|:-------------------|
| 🔴 **Alto** | Requisitos essenciais que mitigam ameaças críticas | **Obrigatório** - Implementar em todos os ambientes |
| 🟡 **Médio** | Requisitos importantes para robustez da segurança | **Recomendado** - Especialmente em produção |
| 🟢 **Baixo** | Requisitos complementares para proteção adicional | **Opcional** - Avaliar conforme análise de risco |

**⚠️ Importante**: As criticidades são orientações gerais. Realize sua própria análise de risco considerando o contexto específico do seu sistema.

---

## 🚀 Como Usar este Catálogo

### 1️⃣ Identifique as Ameaças
Analise seu sistema IoT e identifique quais das 6 categorias STRIDE são relevantes.

### 2️⃣ Explore os Padrões
Navegue pelas categorias para descobrir os padrões de segurança aplicáveis.

### 3️⃣ Priorize por Criticidade
Comece pelos padrões marcados como 🔴 **Alto**, seguido pelos 🟡 **Médio**.

### 4️⃣ Adapte ao seu Contexto
Use os requisitos concretos como base e adapte-os às necessidades do seu projeto.

### 5️⃣ Valide a Implementação
Utilize as estratégias de teste sugeridas para verificar a efetividade dos controles.

---
<!-- 
## 📋 Catálogo de Requisitos de Segurança

| **ID** | **Requisito de Segurança**           | **Categoria STRIDE**       | **Objetivo**                                              | **Implementação Técnica**                                                    |
|:------:|:-------------------------------------|:---------------------------|:----------------------------------------------------------|:-----------------------------------------------------------------------------|
| **NFRP#01** | `Autenticação Forte`                | 🎭 _Spoofing_              | Garantir autenticação confiável de usuários e dispositivos | • Certificados X.509 para dispositivos<br>• DTLS-PSK para comunicação<br>• Renovação automática a cada 90 dias |
| **NFRP#02** | `Criptografia de Dados em Trânsito` | 🔍 _Information Disclosure_ | Proteger confidencialidade da comunicação                | • TLS 1.3 para protocolos TCP<br>• AES-128/256 para redes LPWAN<br>• Perfect Forward Secrecy (PFS) |
| **NFRP#03** | `Controle de Acesso Baseado em Papéis` | 🔓 _Elevation of Privilege_ | Restringir acesso conforme funções organizacionais       | • RBAC com princípio do menor privilégio<br>• Administradores: firmware updates<br>• Operadores: somente leitura |
| **NFRP#04** | `Registro e Auditoria de Eventos`   | 🚫 _Repudiation_           | Assegurar rastreabilidade e não-repúdio                  | • Logs criptograficamente protegidos<br>• Timestamps sincronizados via NTP<br>• Centralização em SIEM |
| **NFRP#05** | `Gerenciamento Seguro de Chaves`    | 🔧 _Tampering_             | Garantir ciclo de vida seguro de material criptográfico  | • Rotação automática de chaves<br>• Armazenamento em TPM/HSM<br>• Key escrow para recuperação |
| **NFRP#06** | `Atualização Segura de Firmware`    | 🔧 _Tampering_             | Manter integridade e autenticidade do software           | • Assinatura digital com PKI<br>• Verificação de integridade<br>• Rollback seguro em falhas |
| **NFRP#07** | `Disponibilidade Resiliente`        | ⚡ _Denial of Service_      | Assegurar continuidade operacional                       | • Load balancing automático<br>• Rate limiting por cliente<br>• Filtragem de tráfego malicioso |
| **NFRP#08** | `Privacidade por Design`            | 🔍 _Information Disclosure_ | Minimizar exposição de dados pessoais                    | • Coleta mínima de dados<br>• Anonimização/pseudonimização<br>• Consentimento explícito |
| **NFRP#09** | `Isolamento de Recursos Críticos`   | 🔓 _Elevation of Privilege_ | Prevenir comprometimento sistêmico                       | • Sandboxing de aplicações<br>• Separação controle/dados<br>• Micro-segmentação de rede |
| **NFRP#10** | `Monitoramento Contínuo de Segurança` | ⚡ _DoS_ / 🔧 _Tampering_   | Detectar e responder a ameaças em tempo real             | • IDS/IPS com ML<br>• SOAR para resposta automática<br>• Alertas para SOC 24/7 | -->
