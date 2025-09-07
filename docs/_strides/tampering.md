# Tampering

Ameaças relacionadas à modificação não autorizada de dados ou sistemas.

---
<!-- 
## NFRP#02. Criptografia de Dados

**Categoria STRIDE**: Tampering, Information Disclosure

**Descrição**
Proteger confidencialidade e integridade de dados IoT em trânsito e em repouso.

**Racional**
Comunicação IoT é vulnerável a interceptação e adulteração, especialmente em redes sem fio.

**Requisitos Concretos**

* Usar AES-128/256 em dados armazenados.
* TLS/DTLS para transmissão.
* Criptografia fim a fim em dados sensíveis.

**Exemplos de Aplicação**

* Smart home transmitindo vídeo de câmeras criptografado.
* Sensores ambientais em cidades inteligentes com DTLS.

**Relacionamentos**

* Autenticação Forte
* Gestão de Chaves

**Criticidade**

* Crítico: dispositivos médicos.
* Alto: câmeras de vigilância urbana.
* Médio: medidores de energia.
* Baixo: eletrodomésticos simples.



---

## NFRP#05. Gestão de Chaves

**Categoria STRIDE**: Tampering, Information Disclosure

**Descrição**
Assegurar armazenamento, distribuição e renovação de chaves criptográficas.

**Racional**
Chaves mal gerenciadas expõem todo o ecossistema IoT.

**Requisitos Concretos**

* Armazenar chaves em TPM/HSM.
* Renovação automática a cada 90 dias.
* Distribuição por PKI leve.

**Exemplos de Aplicação**

* Rede de sensores com rotação periódica de chaves.

**Relacionamentos**

* Criptografia de Dados
* Autenticação Forte

**Criticidade**

* Crítico: hospitais inteligentes.
* Alto: indústrias.
* Médio: wearables.
* Baixo: lâmpadas.



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
