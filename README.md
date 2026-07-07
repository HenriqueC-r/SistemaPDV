# 🛒 Sistema PDV

Sistema de Ponto de Venda (PDV) desenvolvido em **PHP**, **JavaScript**, **HTML** e **CSS**, com integração ao **MySQL**, permitindo a busca de produtos por código de barras.

---

## 🚀 Tecnologias

![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)

---

## 📋 Funcionalidades

- ✅ Buscar produtos pelo código de barras
- ✅ Exibir nome do produto
- ✅ Exibir valor
- ✅ Exibir estoque
- ✅ Retornar dados em JSON
- ✅ Tratamento para código inválido
- ✅ Tratamento para produto não encontrado

---

## 📁 Estrutura do Projeto

```text
SistemaPDV/
│
├── api/
│   ├── buscarpdv.php
│   ├── finalizarpdv.php
│   └── produtos.php
│
├── assets/
│   ├── script.js
│   └── css/
│       └── style.css
│
├── database/
│   └── connect.php
│
├── index.html
└── README.md
```

---

## ⚙️ Como executar

1. Clone o repositório

```bash
git clone https://github.com/HenriqueC-r/SistemaPDV.git
```

2. Coloque o projeto no servidor local (XAMPP, Laragon ou WAMP).

3. Importe o banco de dados MySQL.

4. Configure a conexão em:

```text
database/connect.php
```

5. Inicie o Apache e o MySQL.

6. Acesse:

```text
http://localhost/SistemaPDV/
```

---

## 👨‍💻 Equipe

- Caio
- Mirian

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos.