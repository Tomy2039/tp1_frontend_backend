document.getElementById('obtenerSaludo').addEventListener('click', () => {
    const nombre = document.getElementById('nombreInput').value;

    fetch(`http://localhost:3000/saludo/${nombre}`)
    .then(res => res.text())
    .then(mensaje => {
        document.getElementById('saludo').textContent = mensaje; 
    })
    .catch(err => {
        console.error('Error al conseguir el saludo:', err)
    });
});