# Denial of Service

Ameaças relacionadas à interrupção ou degradação da disponibilidade de serviços.


---

# Dispositivo

## NFRP-SEC-003: Restrições de Energia

**Descrição**
Dispositivos IoT devem ser projetados para operar de forma eficiente sob restrições de energia, de modo que a limitação de consumo não comprometa a disponibilidade ou provoque falhas que resultem em indisponibilidade do serviço.

**Racional**
A escassez de energia pode causar interrupções no funcionamento de dispositivos IoT, resultando em degradação de desempenho, falhas de comunicação ou até paralisação total. Em ambientes críticos, isso equivale a uma forma de negação de serviço, mesmo que causada por limitações operacionais e não diretamente por um ataque.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve otimizar o consumo de energia em operações de comunicação e processamento.
* O sistema deve utilizar protocolos de baixo consumo, como **BLE, Zigbee ou LPWAN**.
* O sistema deve implementar gerenciamento de energia adaptativo, ajustando consumo conforme condições de operação.
* O sistema deve suportar técnicas de recuperação de energia (solar, cinética etc.).
* O sistema deve monitorar periodicamente o estado de energia e acionar manutenção preventiva quando necessário.

**Exemplos de Aplicação**

* Redes de sensores ambientais em áreas remotas, que precisam operar meses sem intervenção.
* Dispositivos de rastreamento logístico que mantêm disponibilidade por longos períodos sem recarga.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de protocolos otimizados para baixo consumo, algoritmos de duty cycle, integração com fontes de energia renovável (ex.: painéis solares).
>
> **Teste:** medições de consumo sob diferentes cenários de carga, simulação de falhas de energia, verificação de tempo de operação e disponibilidade.


---

## NFRP-SEC-003: Restrições de Energia

**Descrição**
O sistema deve garantir que dispositivos IoT operem de forma eficiente sob restrições de energia, evitando que limitações de consumo provoquem falhas ou indisponibilidade dos serviços.

**Racional**
Sensores e atuadores IoT frequentemente funcionam em ambientes com energia limitada (bateria, energia solar). O consumo ineficiente pode causar interrupções, degradação de desempenho ou até paralisação total, o que equivale a uma forma de negação de serviço mesmo sem ataque direto.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve otimizar o consumo de energia em operações de comunicação e processamento.
* O sistema deve utilizar protocolos de baixo consumo, como **BLE, Zigbee ou LPWAN**.
* O sistema deve implementar gerenciamento de energia adaptativo, ajustando consumo conforme as condições de operação.
* O sistema deve suportar técnicas de recuperação de energia (ex.: solar, cinética).
* O sistema deve monitorar periodicamente o estado de energia e acionar manutenção preventiva quando necessário.

**Exemplos de Aplicação**

* Redes de sensores ambientais em áreas remotas que precisam operar meses sem manutenção.
* Dispositivos de rastreamento logístico que funcionam longos períodos sem recarga.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** protocolos otimizados para baixo consumo, duty cycling, integração de módulos de recuperação de energia.
>
> **Teste:** medições de consumo em cenários reais, simulação de falhas de energia, verificação da disponibilidade sob diferentes condições de carga.

---

## NFRP-SEC-017: Mitigação de Limitações Computacionais

**Descrição**
O sistema deve ser projetado para operar de forma segura mesmo em dispositivos com baixo poder computacional, utilizando algoritmos e protocolos otimizados que equilibrem segurança, desempenho e consumo de recursos.

**Racional**
Dispositivos IoT geralmente possuem limitações severas de processamento e memória. Isso os torna alvos mais fáceis para ataques de exaustão de recursos e dificulta a aplicação de medidas tradicionais de segurança. Sem mitigação, a fragilidade computacional pode levar à indisponibilidade do serviço e à exposição de informações sensíveis.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **algoritmos de segurança leves e eficientes**, adaptados a dispositivos com recursos limitados.
* O sistema deve empregar **protocolos de autenticação otimizados** para baixo consumo de CPU.
* O sistema deve adotar **técnicas de computação aproximada** em cenários onde isso aumente a privacidade ou resiliência.
* O sistema deve implementar **técnicas de gerenciamento de energia** para equilibrar desempenho e segurança.
* O sistema deve manter **resiliência a falhas** mesmo sob restrições de processamento.

**Exemplos de Aplicação**

* Sensores ambientais de baixo consumo que utilizam criptografia leve para transmissão de dados.
* Dispositivos de rastreamento que equilibram ciclos de operação e segurança para manter disponibilidade.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de algoritmos de criptografia leve (ex.: ECC, AES-CCM), protocolos de autenticação otimizados, técnicas de duty cycle.
>
> **Teste:** medições de desempenho sob diferentes cargas, testes de estresse para avaliar resistência a DoS, validação de eficiência de algoritmos em hardware limitado.
---

## FRP-SEC-021: Proteção contra Dano Físico

**Descrição**
O sistema deve proteger dispositivos IoT contra danos físicos resultantes de causas naturais, vandalismo ou ataques direcionados, prevenindo interrupções de serviço, perda de dados ou comprometimento da integridade do sistema.

**Racional**
Danos físicos ao hardware podem causar indisponibilidade imediata ou falhas críticas em sistemas IoT, comprometendo sua confiabilidade. Dispositivos desprotegidos em ambientes abertos ou acessíveis ao público são especialmente vulneráveis, tornando necessária a adoção de proteções físicas, monitoramento e planos de recuperação.

**Requisitos Concretos (Instanciados para IoT)**

* O dispositivo deve ser instalado em **locais fisicamente seguros**, de difícil acesso ao público.
* O dispositivo deve ser protegido por **gabinetes trancados ou invioláveis**.
* O dispositivo deve ser construído com **materiais resilientes** contra impactos e manipulações.
* O sistema deve implementar **monitoramento físico e alarmes** contra vandalismo ou remoção.
* O sistema deve aplicar **limitação de portas e interfaces físicas** expostas.
* O sistema deve possuir **procedimentos de recuperação rápida**, incluindo desativação remota e redefinição de credenciais em caso de comprometimento.

**Exemplos de Aplicação**

* Sensores de tráfego urbano instalados em caixas trancadas e monitoradas.
* Dispositivos médicos portáteis com sistema de desativação remota em caso de roubo.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de gabinetes selados, sensores anti-violação, redundância física em locais críticos, materiais robustos.
>
> **Teste:** simulação de vandalismo, testes de impacto físico, auditorias de logs de alarmes de violação, verificação da eficácia de desativação remota.

---

## FRP-SEC-023: Proteção contra Ataques de Privação do Sono

**Descrição**
O sistema deve prevenir ataques de privação do sono, garantindo que dispositivos IoT possam entrar corretamente em estados de suspensão e modos de economia de energia, mesmo na presença de tráfego ou comandos maliciosos.

**Racional**
Dispositivos IoT dependentes de bateria são alvos fáceis para ataques de privação do sono, que os impedem de entrar em repouso, esgotando rapidamente a energia e causando indisponibilidade. Esse tipo de ataque compromete a confiabilidade e a disponibilidade de redes IoT, especialmente em ambientes críticos ou remotos.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve implementar **políticas de gerenciamento de energia eficientes** para garantir a entrada em modos de economia.
* O sistema deve aplicar **filtragem de requisições** para limitar chamadas excessivas que mantenham o dispositivo acordado.
* O sistema deve usar **detecção de anomalias** para identificar tráfego suspeito de manter o dispositivo ativo.
* O sistema deve exigir **autenticação e autorização rigorosas** para manter dispositivos ativos apenas sob requisições legítimas.
* O sistema deve aplicar **atualizações regulares de firmware e software** para corrigir vulnerabilidades conhecidas.
* O dispositivo deve ser projetado em hardware para **resistir a tentativas de impedir modos de suspensão**.

**Exemplos de Aplicação**

* Sensores ambientais movidos a bateria que ignoram requisições suspeitas que visam mantê-los constantemente ativos.
* Dispositivos vestíveis (wearables) que detectam tráfego malicioso e entram em suspensão protegida.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** uso de duty cycling, autenticação em requisições de *wake-up*, integração de IDS para análise de tráfego suspeito.
>
> **Teste:** simulação de ataques de tráfego malicioso contínuo, auditoria de políticas de energia, análise de logs de consumo para verificar detecção de anomalias.

---



# Rede

## NFRP-SEC-018: Mitigação de Baixo Alcance de Transmissão

**Descrição**
O sistema deve ser projetado para operar de forma confiável mesmo em cenários de baixo alcance de transmissão, utilizando protocolos, topologias e técnicas que aumentem a resiliência e a disponibilidade da comunicação.

**Racional**
Dispositivos com alcance limitado de transmissão estão mais suscetíveis a ataques de proximidade e interrupções de comunicação. Isso pode levar a indisponibilidade parcial ou total da rede IoT, afetando sua confiabilidade e expondo pontos de ataque em ambientes sensíveis.

**Requisitos Concretos (Instanciados para IoT)**

* O sistema deve utilizar **protocolos de comunicação eficientes e resilientes** a perdas, como Zigbee, Z-Wave ou Thread.
* O sistema deve realizar **planejamento de rede** considerando ambiente físico e interferências.
* O sistema deve selecionar **tecnologias adequadas ao alcance necessário** (ex.: LoRaWAN, Sigfox, Wi-Fi, Bluetooth).
* O sistema deve adotar **topologias de rede apropriadas**, como redes mesh para estender cobertura.
* O sistema deve implementar **repetidores e gateways estratégicos** para estender o alcance.
* O sistema deve otimizar a **potência de transmissão**, equilibrando consumo de energia e cobertura.

**Exemplos de Aplicação**

* Redes de sensores em áreas agrícolas que usam LoRaWAN para ampliar o alcance de comunicação.
* Casas inteligentes que utilizam redes mesh Zigbee para garantir conectividade mesmo em áreas com paredes grossas.

**Relacionamentos com Outros Padrões**
*Não aplicável no momento.*

### **Considerações de Implementação e Teste**

> **Implementação:** seleção de protocolos de baixo alcance (BLE, Zigbee) ou longo alcance (LoRaWAN), configuração de topologia mesh, balanceamento de potência de transmissão.
>
> **Teste:** medição da cobertura em diferentes cenários físicos, testes de resiliência contra interferências, simulação de ataques de proximidade para avaliar impacto na disponibilidade.

