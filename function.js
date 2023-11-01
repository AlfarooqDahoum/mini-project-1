document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    
    display.innerHTML = `

        Key pressed: ${event.code} <br>
        Key: ${event.key} <br>
        Which: ${event.which}

    `;
});
