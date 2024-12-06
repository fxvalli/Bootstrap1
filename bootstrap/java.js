// Exemplo de interatividade com hover usando JS
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
// script.js

$(document).ready(function () {
    // Efeito de zoom nas imagens do carrossel
    $('#carouselTítulos').on('slide.bs.carousel', function (e) {
        var $nextImage = $(e.relatedTarget).find('.card-img-top');
        
        // Resetar o zoom da imagem anterior
        $(this).find('.carousel-item').find('.card-img-top').css('transform', 'scale(1)');
        
        // Aplicar zoom na nova imagem
        $nextImage.css('transform', 'scale(1.05)');
    });
});

// Função para rolar suavemente para a seção desejada
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50, // Desconta 50px para o efeito de espaçamento superior (ajuste conforme necessário)
            behavior: 'smooth' // Ativa o comportamento suave de rolagem
        });
    }
}
