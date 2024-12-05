# TABELA BÁSICA COM DATATABLES
## DESCRIÇÃO:
Este projeto implementa uma **tabela dinâmica e interativa** utilizando o **DataTables**, uma biblioteca popular baseada em jQuery para a criação de tabelas avançadas em páginas web. O objetivo é demonstrar as funcionalidades completas do **DataTables**, incluindo ordenação, pesquisa, paginação e exportação de dados.

## FUNCIONALIDADES:
1. **Carregamento de Dados Dinâmicos**
- Os registros são carregados de um arquivo JavaScript (`database.js`) que contém um array de objetos simulando um banco de dados. Há 1000 registros gerados automaticamente.

2. **Funcionalidades do DataTables**
- **Ordenação:** Permite ordenar qualquer coluna clicando no cabeçalho.
- **Pesquisa:** Inclui um campo de busca para encontrar registros rapidamente.
- **Paginação:** Divide os registros em páginas com um seletor para alterar a quantidade de registros exibidos.
- **Responsividade:** A tabela ajusta automaticamente o layout para diferentes tamanhos de tela.
- **Exportação:** Botões para exportar os dados em formatos como:
  - **Copiar** (Texto simples)
  - **CSV**
  - **Excel**
  - **PDF**

3. **Estilo Personalizado**
- A tabela utiliza estilos do **DataTables**, garantindo um design moderno e responsivo.

4. **Idiomas**
- A interface está traduzida para o português com o arquivo de idioma fornecido pela CDN do DataTables.

## COMO USAR?
1. **Estrutura dos Arquivos**
   - **`index.html`:** Arquivo principal que carrega a página web.
   - **`database.js`:** Contém o array de dados com 1000 registros.
   - **`script.js`:** Arquivo com a lógica para inicializar e configurar o DataTables.
   - Bibliotecas externas:
     - jQuery
     - DataTables CSS e JS
     - DataTables Buttons para exportação

2. **Executar o Projeto**
   - Abra o arquivo `index.html` no navegador.
   - A tabela será carregada automaticamente com os dados de `database.js`.

3. **Pesquisa**
   - Digite "São Paulo" na barra de pesquisa para encontrar todos os registros da cidade de São Paulo.

4. **Exportação**
   - Clique no botão "Exportar CSV" para baixar os registros no formato CSV.

5. **Paginação**
   - Alterne entre as páginas utilizando os controles de paginação no rodapé da tabela.

---

## QUAIS RECURSOS ESTÃO DISPONIVEIS?
O **DataTables** oferece uma ampla gama de recursos que permitem criar tabelas interativas e dinâmicas. Aqui estão alguns dos principais recursos disponíveis:

1. **Paginação**
- **Descrição:** Permite dividir grandes conjuntos de dados em várias páginas, melhorando a usabilidade e a performance.
- **Exemplo:** `paging: true` (Ativado por padrão).

2. **Busca/Filtragem**
- **Descrição:** Uma barra de pesquisa que permite aos usuários procurar por conteúdo específico na tabela.
- **Exemplo:** `searching: true` (Ativado por padrão).

3. **Ordenação (Sorting)**
- **Descrição:** Permite ordenar as colunas da tabela em ordem crescente ou decrescente ao clicar no cabeçalho.
- **Exemplo:** `ordering: true` (Ativado por padrão).

4. **Exibição de Número de Registros por Página**
- **Descrição:** Exibe o número de registros por página e oferece opções para o usuário escolher quantos registros deseja ver.
- **Exemplo:** `pageLength: 10` para mostrar 10 registros por página.

5. **Botões de Exportação (Buttons)**
- **Descrição:** Permite exportar os dados da tabela em diferentes formatos, como Excel, CSV, PDF, etc.
- **Exemplo:** `buttons: ["copyHtml5", "csvHtml5", "excelHtml5", "pdfHtml5"]`.

6. **Tabela Responsiva**
- **Descrição:** Ajusta a tabela automaticamente para diferentes tamanhos de tela (desktop, tablet, mobile).
- **Exemplo:** `responsive: true`.

7. **Controle de Colunas Visíveis (Column Visibility)**
- **Descrição:** Permite ao usuário controlar a visibilidade das colunas da tabela.
- **Exemplo:** `columnDefs: [{ targets: [0], visible: false }]` (esconde a primeira coluna).

8. **Carregamento de Dados via Ajax**
- **Descrição:** Permite carregar dados de uma fonte externa, como uma API, em vez de carregar os dados diretamente no HTML.
- **Exemplo:** 
  ```javascript
  $("#tabela").DataTable({
    ajax: 'data.json'
  });
  ```

9. **Reordenação de Linhas (Row Reordering)**
- **Descrição:** Permite que os usuários reordem as linhas da tabela arrastando-as.
- **Exemplo:** `rowReorder: true`.

10. **Animações e Efeitos**
- **Descrição:** Adiciona animações e efeitos ao carregar e interagir com a tabela.
- **Exemplo:** `processing: true` (mostra um indicador de carregamento).

11. **Seleção de Linhas**
- **Descrição:** Permite que os usuários selecionem uma ou mais linhas da tabela.
- **Exemplo:** 
  ```javascript
  $("#tabela").DataTable({
    select: true
  });
  ```

12. **Configuração de Estilo com CSS**
- **Descrição:** Customização do estilo visual da tabela, como cores, fontes e tamanhos.
- **Exemplo:** Usando `className` e outras opções de personalização do estilo.

13. **Agrupamento de Dados (Row Grouping)**
- **Descrição:** Agrupa dados da tabela de acordo com um valor específico.
- **Exemplo:** 
  ```javascript
  $("#tabela").DataTable({
    rowGroup: {
      dataSrc: 2 // Agrupa por uma coluna (ex: Cidade)
    }
  });
  ```

14. **Exibição de Tabela de Dados com Gráficos**
- **Descrição:** Integrar gráficos com os dados da tabela, usando bibliotecas como Chart.js ou outros.
  
15. **Busca em Colunas Específicas (Column Filtering)**
- **Descrição:** Permite aplicar filtros em colunas específicas, criando menus de filtro.
- **Exemplo:** 
  ```javascript
  $("#tabela").DataTable({
    initComplete: function () {
      this.api().columns([1, 2, 3]).every(function () {
        var column = this;
        var select = $('<select><option value=""></option></select>')
          .appendTo($(column.header()))
          .on('change', function () {
            var val = $.fn.dataTable.util.escapeRegex($(this).val());
            column.search(val ? '^' + val + '$' : '', true, false).draw();
          });
        column.data().unique().sort().each(function (d, j) {
          select.append('<option value="' + d + '">' + d + '</option>');
        });
      });
    }
  });
  ```

16. **Botões de Imagem (Image Buttons)**
- **Descrição:** Personalize botões com imagens, como exportar para PDF ou Excel com ícones personalizados.
- **Exemplo:** 
  ```javascript
  buttons: [
    {
      extend: 'pdfHtml5',
      text: '<img src="icon.png" /> PDF'
    }
  ]
  ```

17. **Customização de Cabeçalhos**
- **Descrição:** Permite customizar os cabeçalhos das colunas com HTML ou adicionar ferramentas como filtros e menus de seleção.
- **Exemplo:** 
  ```javascript
  columns: [
    { title: "<b>ID</b>" },
    { title: "<i>Nome</i>" }
  ]
  ```

18. **Pesquisa em Tempo Real (Live Search)**
- **Descrição:** A pesquisa começa automaticamente a medida que o usuário digita, sem precisar apertar "Enter".
- **Exemplo:** 
  ```javascript
  $("#tabela").DataTable({
    searchDelay: 500 // Configura o tempo de delay para a pesquisa em tempo real
  });
  ```

19. **Comportamento de "Fixação" de Cabeçalho**
- **Descrição:** Permite que o cabeçalho da tabela permaneça fixo enquanto o usuário rola os dados da tabela.
- **Exemplo:** 
  ```javascript
  $("#tabela").DataTable({
    scrollY: '50vh',
    scrollCollapse: true,
    paging: false
  });
  ```

20. **Mesclar Células (Cell Merging)**
- **Descrição:** Permite a mesclagem de células dentro de uma tabela, útil para mostrar subtotais ou agrupar dados de forma visual.
- **Exemplo:** Usando `rowspan` e `colspan` diretamente no HTML ou com plugins.

### CONCLUSÃO:
Esses são apenas alguns dos muitos recursos oferecidos pelo **DataTables**. A biblioteca é altamente configurável, permitindo que você adicione ou remova recursos conforme necessário, criando tabelas ricas e interativas para o seu projeto.

---

## COMO ATIVAR OU DESATIVAR RECURSOS NO DATATABLES?
Os recursos no **DataTables** podem ser facilmente ativados ou desativados usando as opções de configuração passadas no momento da inicialização da tabela. Abaixo estão os passos para controlar cada funcionalidade:

1. **Paginação**
- **Ativar:** Está ativada por padrão.
- **Desativar:** Use a opção `paging: false`.

```javascript
$("#tabela").DataTable({
    paging: false // Desativa a paginação
});
```

2. **Pesquisa**
- **Ativar:** Está ativada por padrão.
- **Desativar:** Use a opção `searching: false`.

```javascript
$("#tabela").DataTable({
    searching: false // Desativa a barra de pesquisa
});
```

3. **Ordenação**
- **Ativar:** Está ativada por padrão.
- **Desativar:** Use a opção `ordering: false`.

```javascript
$("#tabela").DataTable({
    ordering: false // Desativa a ordenação nas colunas
});
```

4. **Botões de Exportação**
- **Ativar:** Configure a opção `dom` e adicione os botões desejados em `buttons`.
- **Desativar:** Remova ou não configure os botões.

**Para desativar:**
```javascript
$("#tabela").DataTable({
    dom: "frtip" // Remove os botões de exportação
});
```

5. **Idioma**
- **Ativar Tradução:** Use a opção `language.url` e insira o link do arquivo JSON.
- **Desativar Tradução:** Não inclua a opção `language`.

**Para desativar a tradução:**
```javascript
$("#tabela").DataTable({
    language: {} // Não configura idioma, será carregado o padrão (inglês)
});
```

6. **Ordenação Inicial**
- **Ativar Ordenação Específica:** Use `order: [[coluna, "asc" | "desc"]]`.
- **Desativar Ordenação Inicial:** Use `order: []`.

**Para desativar:**
```javascript
$("#tabela").DataTable({
    order: [] // Nenhuma coluna é ordenada automaticamente
});
```

7. **Número de Registros por Página**
- **Configurar:** Use a opção `pageLength` para o número padrão e `lengthMenu` para definir as opções.
- **Desativar Controle do Usuário:** Não exiba o menu de seleção com `lengthChange: false`.

**Para desativar o menu de controle:**
```javascript
$("#tabela").DataTable({
    lengthChange: false // Usuário não pode mudar o número de registros por página
});
```

### EXEMPLO GERAL DE CONFIGURAÇÃO:
```javascript
$(document).ready(function () {
    $("#tabela").DataTable({
        paging: true, // Ativar ou desativar
        searching: true, // Ativar ou desativar
        ordering: true, // Ativar ou desativar
        dom: "Bfrtip", // Mostrar ou ocultar botões
        buttons: ["copyHtml5", "csvHtml5"], // Escolher quais botões usar
        language: {
            url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json"
        },
        pageLength: 10, // Registros por página
        lengthMenu: [[10, 25, 50], [10, 25, 50]], // Opções de páginas
        order: [[0, "asc"]] // Configurar ordenação inicial
    });
});
```

Com essas configurações, é possível personalizar a tabela para atender às suas necessidades específicas, ativando ou desativando funcionalidades conforme necessário.

