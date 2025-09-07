# Catálogo de Padrões de Requisitos de Segurança IoT

Um catálogo é uma abstração para organizar sistematicamente padrões de software, geralmente abordando problemas mais comuns para um domínio particular de aplicação.

---

## Sobre o Catálogo

Este catálogo organiza **XX padrões de requisitos de segurança** específicos para ambientes IoT, classificados de acordo com a metodologia **STRIDE** (_Spoofing_, _Tampering_, _Repudiation_, _Information Disclosure_, _Denial of Service_, _Elevation of Privilege_).

---

## Estrutura de cada padrão

### **Nome do Padrão**
Um título curto e direto.

> **Exemplo**: Autenticação Forte

### **Categoria STRIDE**
Qual ameaça principal este padrão mitiga: **S**poofing, **T**ampering, **R**epudiation, **I**nformation Disclosure, **D**enial of Service, **E**levation of Privilege.

### **Descrição**
Explicação geral do requisito em linguagem natural.

> **Exemplo**: O sistema deve exigir autenticação confiável de dispositivos e usuários antes de conceder acesso a recursos críticos.

### **Racional**
Por que este padrão é importante para IoT.

> **Exemplo**: Dispositivos IoT muitas vezes são implantados em ambientes inseguros, sujeitos a captura física ou ataques de rede, aumentando o risco de spoofing.

### **Requisitos Concretos (Instanciados para IoT)**
Lista de requisitos específicos que podem ser derivados desse padrão.

- Cada dispositivo deve usar certificados digitais X.509 emitidos pela PKI interna
- Em dispositivos de baixo consumo, suportar autenticação baseada em DTLS-PSK
- As chaves devem ser renovadas automaticamente a cada 90 dias

### **Exemplos de Aplicação**
Casos reais ou simulados em sistemas IoT.

> **Exemplo**: Sensores de temperatura em uma fábrica que só transmitem dados após autenticação mútua com o servidor.

### **Relacionamentos com Outros Padrões**
Padrões complementares ou dependentes.

> **Exemplo**: Relacionado a "Gerenciamento de Chaves" e "Controle de Acesso Baseado em Funções".

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
