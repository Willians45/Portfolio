document.addEventListener('DOMContentLoaded', function() {
    // Elementos del menú
    const menuItems = {
        inicio: document.querySelector('.inicio'),
        trabajos: document.querySelector('.trabajos'),
        proyectos: document.querySelector('.proyectos'),
        vercv: document.querySelector('.vercv')
    };
    
    // Secciones
    const sections = {
        inicio: document.querySelector('.display-inicio'),
        trabajos: document.querySelector('.display-trabajos'),
        proyectos: document.querySelector('.display-proyectos')
    };
    
    // Función para mostrar una sección y ocultar las demás
    function showSection(sectionToShow) {
        // Oculta todas las secciones
        Object.values(sections).forEach(section => {
            section.style.display = 'none';
        });
        
        // Muestra solo la sección seleccionada
        if (sections[sectionToShow]) {
            sections[sectionToShow].style.display = 'flex';
            
            // Añade animación solo si no es la sección de inicio (que ya tiene animación inicial)
            if (sectionToShow !== 'inicio') {
                sections[sectionToShow].classList.add('animate__animated', 'animate__fadeInLeft');
            }
        }
        
        // Actualiza la clase active en los elementos del menú
        Object.values(menuItems).forEach(item => {
            item.classList.remove('active');
        });
        
        if (menuItems[sectionToShow]) {
            menuItems[sectionToShow].classList.add('active');
        }
    }
    
    // Event listeners para los elementos del menú
    menuItems.inicio.addEventListener('click', () => showSection('inicio'));
    menuItems.trabajos.addEventListener('click', () => showSection('trabajos'));
    menuItems.proyectos.addEventListener('click', () => showSection('proyectos'));
    
    // Mostrar la sección de inicio por defecto
    showSection('inicio');
});