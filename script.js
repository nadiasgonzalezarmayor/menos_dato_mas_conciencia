// CONTROLADOR DE PESTAÑAS (TABS) DEL RETO
function openDay(evt, dayId) {
    // Esconder todos los contenidos de las pestañas
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Quitar la clase active de todos los botones de las pestañas
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Mostrar el contenido seleccionado y marcar el botón como activo
    document.getElementById(dayId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// SISTEMA DE COMENTARIOS DINÁMICOS
document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que la página se refresque

    // Obtener los valores del formulario
    const nameInput = document.getElementById('user-name');
    const commentInput = document.getElementById('user-comment');
    const commentsContainer = document.getElementById('comments-container');

    if (nameInput.value.trim() === "" || commentInput.value.trim() === "") return;

    // Crear la estructura del comentario nuevo
    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');

    const commentMeta = document.createElement('div');
    commentMeta.classList.add('comment-meta');
    const date = new Date();
    commentMeta.textContent = `${nameInput.value} • hace un momento (Día del Reto Activo)`;

    const commentText = document.createElement('p');
    commentText.textContent = commentInput.value;

    // Unir los elementos
    commentCard.appendChild(commentMeta);
    commentCard.appendChild(commentText);

    // Insertar el comentario al principio de la lista de comunidad
    commentsContainer.insertBefore(commentCard, commentsContainer.firstChild);

    // Resetear el formulario
    nameInput.value = "";
    commentInput.value = "";
});

// Precargar un comentario ficticio de ejemplo de la comunidad
window.onload = function() {
    const commentsContainer = document.getElementById('comments-container');
    const sampleComment = document.createElement('div');
    sampleComment.classList.add('comment-card');
    sampleComment.innerHTML = `
        <div class="comment-meta">Alejandro M. • Ayer</div>
        <p>¡Día 3 completado! He borrado más de 4GB de vídeos duplicados en mi cuenta en la nube. Sorprende ver cómo acumulamos basura digital sin darnos cuenta[cite: 283, 289, 364].</p>
    `;
    commentsContainer.appendChild(sampleComment);
};