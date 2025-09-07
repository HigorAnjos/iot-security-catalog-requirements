# Spoofing

Ameaças relacionadas à falsificação de identidade e autenticação inadequada.

---

## NFR-SEC-001: Autenticação Forte

<!-- **Categoria STRIDE**: Spoofing -->

**Descrição**

O sistema deve exigir autenticação confiável de dispositivos e usuários antes de conceder acesso a recursos críticos.

**Racional**

Dispositivos IoT são frequentemente implantados em ambientes inseguros, sujeitos a clonagem, roubo ou comprometimento físico. Sem autenticação robusta, um atacante pode se passar por um dispositivo legítimo e obter acesso não autorizado.

**Requisitos Concretos (Instanciados para IoT)**

* Cada dispositivo deve usar certificados digitais X.509 emitidos pela PKI interna.

* Em dispositivos de baixo consumo, suportar autenticação baseada em DTLS-PSK.

* As credenciais devem ser renovadas periodicamente (ex.: a cada 90 dias).

* Autenticação mútua deve ser exigida em gateways IoT.

**Exemplos de Aplicação**

* Sensores de temperatura em uma fábrica que só transmitem dados após autenticação mútua com o servidor.

* Câmeras residenciais que exigem autenticação com servidor em nuvem antes de liberar streaming.

**Relacionamentos com Outros Padrões**

* Gestão de Chaves
* Controle de Acesso
