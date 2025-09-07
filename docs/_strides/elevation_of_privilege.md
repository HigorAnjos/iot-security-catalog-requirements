# Elevation of Privilege

Ameaças relacionadas ao ganho não autorizado de privilégios ou acesso elevado.

---
<!-- 
## NFRP#03. Controle de Acesso

**Categoria STRIDE**: Elevation of Privilege

**Descrição**
Restringir o acesso a recursos conforme papéis e privilégios definidos.

**Racional**
Em IoT, múltiplos perfis coexistem (usuários, administradores, dispositivos), o que aumenta a necessidade de restrição de acessos.

**Requisitos Concretos**

* Implementar RBAC (Role-Based Access Control).
* Segmentar dispositivos em VLANs ou grupos de segurança.
* Definir políticas de acesso em gateways IoT.

**Exemplos de Aplicação**

* Smart locks com permissões diferenciadas para moradores e visitantes.
* Gateways que bloqueiam acesso administrativo a dispositivos comuns.

**Relacionamentos**

* Autenticação Forte
* Identidade Digital

**Criticidade**

* Crítico: sistemas de controle industrial.
* Alto: smart grid.
* Médio: câmeras de vigilância.
* Baixo: eletrodomésticos conectados.



---

## NFRP#10. Monitoramento Contínuo

**Categoria STRIDE**: Denial of Service, Elevation of Privilege

**Descrição**
Detectar comportamentos anômalos em dispositivos e redes IoT.

**Racional**
Ataques de DoS e intrusões são comuns em redes IoT pouco monitoradas.

**Requisitos Concretos**

* IDS leve em gateways.
* Análise de tráfego.
* Alertas automáticos.

**Exemplos de Aplicação**

* Gateway bloqueando flood de pacotes.

**Relacionamentos**

* Registro e Auditoria
* Limitação de Recursos

**Criticidade**

* Crítico: hospitais.
* Alto: transporte inteligente.
* Médio: fábricas.
* Baixo: automação residencial.



---

## NFRP#06. Atualização Segura

**Categoria STRIDE**: Tampering, Elevation of Privilege

**Descrição**
Permitir atualização segura de firmware e software embarcado.

**Racional**
Falhas em firmware expõem dispositivos a ataques graves.

**Requisitos Concretos**

* Firmware assinado digitalmente.
* OTA autenticado e criptografado.
* Rollback automático em falhas.

**Exemplos de Aplicação**

* Lâmpadas inteligentes só aceitando firmware assinado.

**Relacionamentos**

* Gestão de Chaves
* Disponibilidade

**Criticidade**

* Crítico: equipamentos médicos.
* Alto: indústrias.
* Médio: smart homes.
* Baixo: eletrodomésticos.

 -->
