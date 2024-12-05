# MANUAL
Aqui está um tutorial simples para criar um projeto básico utilizando **DataTables**, sem Node.js. Este exemplo utiliza apenas HTML, CSS e JavaScript:

## 1. ESTRUTURA INICIAL DO PROJETO:
Crie um diretório para o projeto e dentro dele, um arquivo chamado `index.html`.

## 2. ADICIONE A ESTRUTURA BÁSICA NO ARQUIVO `INDEX.HTML`:
Copie o código abaixo para o arquivo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto com DataTables</title>
    <!-- Link do CSS do DataTables -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
    </style>
</head>
<body>
    <h1>Exemplo de Tabela com DataTables</h1>
    <!-- Tabela HTML -->
    <table id="minhaTabela" class="display">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Cidade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>João Silva</td>
                <td>joao.silva@email.com</td>
                <td>25</td>
                <td>São Paulo</td>
            </tr>
            <tr>
                <td>Maria Santos</td>
                <td>maria.santos@email.com</td>
                <td>30</td>
                <td>Rio de Janeiro</td>
            </tr>
            <tr>
                <td>Carlos Pereira</td>
                <td>carlos.pereira@email.com</td>
                <td>22</td>
                <td>Belo Horizonte</td>
            </tr>
            <tr>
                <td>Ana Costa</td>
                <td>ana.costa@email.com</td>
                <td>28</td>
                <td>Curitiba</td>
            </tr>
        </tbody>
    </table>

    <!-- Inclusão do jQuery e DataTables JS -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

    <script>
        $(document).ready(function() {
            // Inicialização do DataTables
            $('#minhaTabela').DataTable({
                language: {
                    url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json"
                }
            });
        });
    </script>
</body>
</html>
```

## 3. COMO FUNCIONA O PROJETO?
- A **tabela HTML** está no formato padrão, com `thead` para o cabeçalho e `tbody` para os dados.
- Incluímos os **recursos de DataTables** via CDN, sem necessidade de instalar pacotes.
- O DataTables é inicializado no `document.ready` usando o seletor `#minhaTabela`.

## 4. TESTE O PROJETO:
Abra o arquivo `index.html` no navegador. A tabela terá as seguintes funcionalidades automaticamente:
- Busca.
- Ordenação por coluna.
- Paginação.
- Suporte à tradução para português.

