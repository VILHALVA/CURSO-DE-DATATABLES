$(document).ready(function () {
    // Inicializar DataTables com os dados do `database`
    $("#tabela").DataTable({
        data: database, // Dados do arquivo DATABASE.js
        columns: [
            { data: "id" },
            { data: "nome" },
            { data: "email" },
            { data: "idade" },
            { data: "cidade" },
            { data: "profissao" }
        ],
        dom: "Bfrtip", // Adicionar recursos de exportação
        buttons: ["copyHtml5", "csvHtml5", "excelHtml5", "pdfHtml5"],
        language: {
            url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json"
        },
        responsive: true,
        order: [[0, "asc"]], // Ordenação inicial
        pageLength: 10, // Número de registros por página
        lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]]
    });
});
