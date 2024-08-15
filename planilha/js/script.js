
document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById('editableTable');

    // Exemplo de como adicionar uma nova linha na tabela
    function addRow() {
        const row = table.insertRow();
        for (let i = 0; i < 6; i++) {
            const cell = row.insertCell(i);
            cell.contentEditable = "true";
            cell.textContent = "Novo valor";
        }
    }

 
});
