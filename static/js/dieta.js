document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.common-dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const svgIcon = dropdown.querySelector('svg');

        svgIcon.addEventListener('click', (event) => {
            event.preventDefault();
            dropdownContent.classList.toggle('show');
        });

        window.addEventListener('click', event => {
            if (!event.target.closest('.common-dropdown')) {
                dropdownContent.classList.remove('show');
            }
        });
    });
});
function openModal() {
    var modal = document.getElementById('editarDietaModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('editarDietaModal');
    modal.style.display = 'none';
}
  // Adicionar um ouvinte de evento para capturar a mudança no <select>
  document.querySelector('select[name="tipo_dieta"]').addEventListener('change', function() {
    // Obter o valor do data-id associado à opção selecionada
    const selectedOption = this.options[this.selectedIndex];
    const dietaId = selectedOption.getAttribute('data-id');
    
    // Atribuir o valor do ID da dieta ao campo id_dieta
    document.getElementById('id_dieta').value = dietaId;
});