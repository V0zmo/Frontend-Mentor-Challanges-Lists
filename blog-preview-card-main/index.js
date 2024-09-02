const customCursor = document.querySelector('#custom-cursor'); // Put #custom-cursor id to customCursor variable.

document.addEventListener('mouseenter', () => {
    customCursor.style.display = 'block';
}) // check if the cursor is entered the website page and display the custom cursor.

document.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
}) // check if the cursor is leaving the website page and hide the custom cursor.

const moveCursor = (e) => {
    const mouseY = e.clientY; // Get mouse Y position.
    const mouseX = e.clientX - 5; // Get mouse X position, and also offset it 5px (SVG messed the position).

    customCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`; // Follow the mouse based on the mouse position.

}

window.addEventListener('mousemove', moveCursor) // Execute the moveCursor function.