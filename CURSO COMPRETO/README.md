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

## QUAIS RECURSOS ESTÃO DISPONÍVEIS?
### 1. PAGINAÇÃO:
- **Descrição**: Permite dividir grandes conjuntos de dados em várias páginas, melhorando a usabilidade e a performance.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    paging: true // Ativado por padrão
  });
  ```

### 2. BUSCA/FILTRAGEM:
- **Descrição**: Barra de pesquisa que permite aos usuários procurar por conteúdo específico na tabela.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    searching: true // Ativado por padrão
  });
  ```

### 3. ORDENAÇÃO (SORTING):
- **Descrição**: Permite ordenar as colunas da tabela em ordem crescente ou decrescente ao clicar no cabeçalho.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    ordering: true // Ativado por padrão
  });
  ```

### 4. EXIBIÇÃO DE NÚMERO DE REGISTROS POR PÁGINA:
- **Descrição**: Exibe o número de registros por página e oferece opções para o usuário escolher quantos registros deseja ver.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    pageLength: 10 // Exibe 10 registros por página
  });
  ```

### 5. BOTÕES DE EXPORTAÇÃO (BUTTONS):
- **Descrição**: Permite exportar os dados da tabela em diferentes formatos, como Excel, CSV, PDF, etc.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    buttons: ["copyHtml5", "csvHtml5", "excelHtml5", "pdfHtml5"]
  });
  ```

### 6. TABELA RESPONSIVA:
- **Descrição**: Ajusta a tabela automaticamente para diferentes tamanhos de tela (desktop, tablet, mobile).
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    responsive: true
  });
  ```

### 7. CONTROLE DE COLUNAS VISÍVEIS (COLUMN VISIBILITY):
- **Descrição**: Permite ao usuário controlar a visibilidade das colunas da tabela.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    columnDefs: [{
      targets: [0], // Coluna 0 ficará invisível
      visible: false
    }]
  });
  ```

### 8. CARREGAMENTO DE DADOS VIA AJAX:
- **Descrição**: Permite carregar dados de uma fonte externa, como uma API, em vez de carregar os dados diretamente no HTML.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    ajax: 'data.json' // Carrega dados de um arquivo JSON
  });
  ```

### 9. REORDENAÇÃO DE LINHAS (ROW REORDERING):
- **Descrição**: Permite que os usuários reordem as linhas da tabela arrastando-as.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    rowReorder: true // Permite reordenar as linhas
  });
  ```

### 10. ANIMAÇÕES E EFEITOS:
- **Descrição**: Adiciona animações e efeitos ao carregar e interagir com a tabela.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    processing: true // Mostra indicador de carregamento
  });
  ```

### 11. SELEÇÃO DE LINHAS:
- **Descrição**: Permite que os usuários selecionem uma ou mais linhas da tabela.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    select: true // Permite selecionar linhas
  });
  ```

### 12. CONFIGURAÇÃO DE ESTILO COM CSS:
- **Descrição**: Customização do estilo visual da tabela, como cores, fontes e tamanhos.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    columnDefs: [{
      targets: [0], // Customiza o estilo da coluna 0
      className: 'dt-head-center' // Aplica uma classe CSS personalizada
    }]
  });
  ```

### 13. AGRUPAMENTO DE DADOS (ROW GROUPING):
- **Descrição**: Agrupa dados da tabela de acordo com um valor específico.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    rowGroup: {
      dataSrc: 2 // Agrupa por uma coluna (ex: Cidade)
    }
  });
  ```

### 14. EXIBIÇÃO DE TABELA DE DADOS COM GRÁFICOS:
- **Descrição**: Integra gráficos com os dados da tabela, usando bibliotecas como Chart.js ou outros.
- **Exemplo**:
  - Aqui, a integração depende da biblioteca gráfica usada, mas você pode combinar os dados da tabela com gráficos em um painel. Exemplo simplificado:
  ```javascript
  var table = $("#tabela").DataTable();
  var data = table.rows().data();
  var chartData = processDataForChart(data);
  generateChart(chartData);
  ```

### 15. BUSCA EM COLUNAS ESPECÍFICAS (COLUMN FILTERING):
- **Descrição**: Permite aplicar filtros em colunas específicas, criando menus de filtro.
- **Exemplo**:
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

### 16. BOTÕES DE IMAGEM (IMAGE BUTTONS):
- **Descrição**: Personalize botões com imagens, como exportar para PDF ou Excel com ícones personalizados.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    buttons: [
      {
        extend: 'pdfHtml5',
        text: '<img src="icon.png" /> PDF'
      }
    ]
  });
  ```

### 17. CUSTOMIZAÇÃO DE CABEÇALHOS:
- **Descrição**: Permite customizar os cabeçalhos das colunas com HTML ou adicionar ferramentas como filtros e menus de seleção.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    columns: [
      { title: "<b>ID</b>" },
      { title: "<i>Nome</i>" }
    ]
  });
  ```

### 18. PESQUISA EM TEMPO REAL (LIVE SEARCH):
- **Descrição**: A pesquisa começa automaticamente à medida que o usuário digita, sem precisar apertar "Enter".
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    searchDelay: 500 // Configura o tempo de delay para a pesquisa em tempo real
  });
  ```

### 19. COMPORTAMENTO DE "FIXAÇÃO" DE CABEÇALHO:
- **Descrição**: Permite que o cabeçalho da tabela permaneça fixo enquanto o usuário rola os dados da tabela.
- **Exemplo**:
  ```javascript
  $("#tabela").DataTable({
    scrollY: '50vh',
    scrollCollapse: true,
    paging: false
  });
  ```

### 20. MESCLAR CÉLULAS (CELL MERGING):
- **Descrição**: Permite a mesclagem de células dentro de uma tabela, útil para mostrar subtotais ou agrupar dados de forma visual.
- **Exemplo**:
  ```html
  <table id="tabela">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Cidade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">João</td>
        <td>25</td>
        <td>São Paulo</td>
      </tr>
      <tr>
        <td>26</td>
        <td>São Paulo</td>
      </tr>
    </tbody>
  </table>
  ```

Esses exemplos de código mostram como ativar e configurar recursos básicos do **DataTables** em uma tabela.

### CONCLUSÃO:
Esses são apenas alguns dos muitos recursos oferecidos pelo **DataTables**. A biblioteca é altamente configurável, permitindo que você adicione ou remova recursos conforme necessário, criando tabelas ricas e interativas para o seu projeto.

--- 

## COMO ATIVAR OU DESATIVAR RECURSOS NO DATATABLES?
Os recursos no **DataTables** podem ser facilmente ativados ou desativados usando as opções de configuração passadas no momento da inicialização da tabela. Abaixo estão os passos para controlar cada funcionalidade:

### 1.PAGINAÇÃO
- ATIVAR: Está ativada por padrão.
- DESATIVAR: Use a opção `paging: false`.

```javascript
$("#tabela").DataTable({
    paging: false // Desativa a paginação
});
```

### 2.PESQUISA
- ATIVAR: Está ativada por padrão.
- DESATIVAR: Use a opção `searching: false`.

```javascript
$("#tabela").DataTable({
    searching: false // Desativa a barra de pesquisa
});
```

### 3.ORDENAÇÃO
- ATIVAR: Está ativada por padrão.
- DESATIVAR: Use a opção `ordering: false`.

```javascript
$("#tabela").DataTable({
    ordering: false // Desativa a ordenação nas colunas
});
```

### 4.BOTÕES DE EXPORTAÇÃO
- ATIVAR: Configure a opção `dom` e adicione os botões desejados em `buttons`.
- DESATIVAR: Remova ou não configure os botões.

**Para desativar:**
```javascript
$("#tabela").DataTable({
    dom: "frtip" // Remove os botões de exportação
});
```

### 5.IDIOMA
- ATIVAR TRADUÇÃO: Use a opção `language.url` e insira o link do arquivo JSON.
- DESATIVAR TRADUÇÃO: Não inclua a opção `language`.

**Para desativar a tradução:**
```javascript
$("#tabela").DataTable({
    language: {} // Não configura idioma, será carregado o padrão (inglês)
});
```

### 6.ORDENAÇÃO INICIAL
- ATIVAR ORDENÇÃO ESPECÍFICA: Use `order: [[coluna, "asc" | "desc"]]`.
- DESATIVAR ORDENÇÃO INICIAL: Use `order: []`.

**Para desativar:**
```javascript
$("#tabela").DataTable({
    order: [] // Nenhuma coluna é ordenada automaticamente
});
```

### 7.NÚMERO DE REGISTROS POR PÁGINA
- CONFIGURAR: Use a opção `

pageLength`.

```javascript
$("#tabela").DataTable({
    pageLength: 15 // Exibe 15 registros por página
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

### CONCLUSÃO:
Com essas configurações, é possível personalizar a tabela para atender às suas necessidades específicas, ativando ou desativando funcionalidades conforme necessário.

