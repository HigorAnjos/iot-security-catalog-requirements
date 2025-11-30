<h1 align="center">🛡️ STRIDE-IoT</h1>

<p align="center">Catálogo de Padrões de Requisitos de Segurança para Internet das Coisas (IoT). 🌐</p>

<p align="center">
  <a href="#Read-the-Docs">Read the Docs</a> •
  <a href="#MkDocs">MkDocs</a> •
  <a href="#Python">Python</a> •
  <a href="#Docker">Docker</a> •
  <a href="#STRIDE">STRIDE</a> •
  <a href="#Tecnologias">Tecnologias</a> •
  <a href="#Autor">Autor</a>
</p>

## Read the Docs

O projeto está disponível online no
[Read the Docs 📖](https://iot-security-catalog-requirements.readthedocs.io/)

## MkDocs

A documentação é construída com MkDocs e está disponível localmente em
`http://localhost:8000` após executar o comando de desenvolvimento.

# Python

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Python 3.13+](https://python.org/).

Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

## Rodando com Python

```bash
# Clone este repositório
$ git clone git@github.com:HigorAnjos/iot-security-catalog-requirements.git

# Acesse a pasta do projeto no terminal/cmd
$ cd iot-security-catalog-requirements

# Instale as dependências
$ pip install -r requirements.txt

# Inicie o servidor de desenvolvimento
$ mkdocs serve
```

A documentação estará disponível em `http://localhost:8000/`

---

# Docker

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Docker](https://www.docker.com/).

## Rodando com Docker 🐳

```bash
# Clone este repositório
$ git clone git@github.com:HigorAnjos/iot-security-catalog-requirements.git

# Acesse a pasta do projeto
$ cd iot-security-catalog-requirements

# Execute com Docker
$ docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```

A documentação estará disponível em `http://localhost:8000/`

---

## STRIDE

Este catálogo utiliza a metodologia **STRIDE** para classificar ameaças de segurança:

- **S**poofing (Falsificação de Identidade) 🎭
- **T**ampering (Adulteração) ✏️
- **R**epudiation (Repúdio) ❌
- **I**nformation Disclosure (Divulgação de Informações) 📊
- **D**enial of Service (Negação de Serviço) 🚫
- **E**levation of Privilege (Elevação de Privilégio) ⬆️

Cada categoria contém padrões específicos adaptados para dispositivos IoT.

## Tecnologias

🔧 As seguintes ferramentas foram usadas na construção do projeto:

- [Git 🐙](https://git-scm.com/)
- [Python 3.13+ 🐍](https://python.org/)
- [MkDocs 📚](https://www.mkdocs.org/)
- [MkDocs Material 🎨](https://squidfunk.github.io/mkdocs-material/)
- [PyMdown Extensions 🔌](https://facelessuser.github.io/pymdown-extensions/)
- [Poetry 📦](https://python-poetry.org/)
- [Read the Docs 📖](https://readthedocs.org/)
- [Mermaid 📊](https://mermaid-js.github.io/)

Você pode verificar todas as ferramentas no arquivo [pyproject.toml](https://github.com/HigorAnjos/iot-security-catalog-requirements/blob/main/pyproject.toml), em dependencies.

## Estrutura do Projeto

```
iot-security-catalog-requirements/
├── docs/                          # Documentação MkDocs
│   ├── _strides/                  # Categorias STRIDE
│   │   ├── spoofing.md
│   │   ├── tampering.md
│   │   ├── repudiation.md
│   │   ├── information_disclosure.md
│   │   ├── denial_of_service.md
│   │   └── elevation_of_privilege.md
│   ├── _fundamentals/             # Fundamentos não-funcionais
│   ├── assets/                    # Imagens e recursos
│   ├── javascripts/               # Scripts customizados
│   ├── stylesheets/               # Estilos customizados
│   └── index.md                   # Página inicial
├── mkdocs.yml                     # Configuração MkDocs
├── pyproject.toml                 # Configuração Poetry
├── requirements.txt               # Dependências Python
└── .readthedocs.yaml             # Configuração Read the Docs
```

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

# Autor

<img alt="Higor Anjos" title="Higor Anjos" src="https://avatars.githubusercontent.com/u/38214470?v=4" height="70" width="70" style="border-radius: 50%;" />

Made with 💜 by Higor Anjos 👋

[![LinkedIn Badge](https://img.shields.io/badge/-Higor_Anjos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/higoranjos)](https://www.linkedin.com/in/higoranjos)
