const galeriaFotos = document.getElementById('galeriaFotos')

const carrito = JSON.parse(localStorage.getItem('guardarcarrilocals')) || [];

fotografias.forEach((fotos)=>{
    const contFotografico = document.createElement('artFotos');
          contFotografico.className = 'cardFotografia';
          contFotografico.innerHTML = `

        <img src='${fotos.img}'>
        <p>${fotos.nombre}</p>
        <p class='precio'>$${fotos.precio}</p>
        `;
        
        galeriaFotos.appendChild(contFotografico);

    const comprarBoton = document.createElement('button');
        comprarBoton.innerText = 'Comprar ahora';
        
        contFotografico.appendChild(comprarBoton);


        comprarBoton.addEventListener('click', () => {
            const repetir = carrito.find(repetirProducto => repetirProducto.id === fotos.id);
            
            repetir ? repetir.cantidad++ : carrito.push({
                id: fotos.id,
                nombre: fotos.nombre,
                precio: fotos.precio,
                img: fotos.img,
                cantidad: fotos.cantidad,
            });
            
            crearCarriContador();
            guardarEnStorage();
        });

});

const guardarEnStorage = ()=> {
    localStorage.setItem('guardarcarrilocals', JSON.stringify(carrito));
}



