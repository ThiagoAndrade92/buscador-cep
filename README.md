# Buscador de CEP

Um aplicativo web que permite consultar endereços completos a partir da UF, cidade e rua, utilizando a API pública do [ViaCEP](https://viacep.com.br/). O projeto é ideal para quem deseja aprender a consumir APIs, manipular o DOM e trabalhar com JavaScript moderno.

## Funcionalidades

- Consulta de CEPs por **UF, cidade e rua**.
- Exibição dos resultados de forma **dinâmica**.
- Validação de campos para evitar buscas incompletas.
- Tratamento de erros caso a API não retorne dados.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação.
- **CSS3**: Estilização simples e responsiva.
- **JavaScript (Vanilla JS)**: Manipulação do DOM, requisições `fetch` e uso de `async/await`.
- **API ViaCEP**: Para consulta de endereços e CEPs.

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/SeuUsuario/buscador-cep.git
2. Abra o arquivo index.html no navegador.

3. Preencha os campos UF, Cidade e Rua.

4. Clique em Buscar CEP para ver os resultados.

Estrutura do Projeto
bash
Copiar código
buscador-cep/
│
├── index.html         # Página principal
├── estilos/
│   └── style.css      # Estilos da aplicação
└── js/
    └── cep.js         # Lógica de consulta de CEP
