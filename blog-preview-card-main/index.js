const costumCursor = document.querySelector('#costum-cursor'); // Put #costum-cursor id to costumCursor variable.

document.addEventListener('mouseenter', () => {
    costumCursor.style.display = 'block';
}) // check if the cursor is entered the website page and display the costum cursor.

document.addEventListener('mouseleave', () => {
    costumCursor.style.display = 'none';
}) // check if the cursor is leaving the website page and hide the costum cursor.

const moveCursor = (e) => {
    const mouseY = e.clientY; // Get mouse Y position.
    const mouseX = e.clientX - 5; // Get mouse X position, and also offset it 5px (SVG messed the position).

    costumCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`; // Follow the mouse based on the mouse position.

}

window.addEventListener('mousemove', moveCursor) // Execute the moveCursor function.