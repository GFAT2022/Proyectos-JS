const contCarrito = document.getElementById('modeloDeContenedor');
const cardCarrito = document.getElementById('modeloDeOverly');
const botonCarrito = document.getElementById('carrito-boton');
const carritoContador = document.getElementById('carritoContador')


const crearCarrito = () => {    
    contCarrito.innerHTML = ""; 
    contCarrito.style.display = 'block'
    cardCarrito.style.display = 'block'
const carritoHeader = document.createElement('div');
    
const cierreCarrito = document.createElement('div');
     cierreCarrito.innerText = "❌";
     cierreCarrito.className = "modoDeCierre";
     carritoHeader.appendChild(cierreCarrito);   

     cierreCarrito.addEventListener("click", () => {
     contCarrito.style.display = "none";
     cardCarrito.style.display = "none";       
});


const tituloDeCarrito = document.createElement("div");
     tituloDeCarrito.innerText="Carrito de Compras";
     tituloDeCarrito.className="tituloCarri";
     carritoHeader.appendChild(tituloDeCarrito);
     contCarrito.appendChild(carritoHeader)
     
     botonCarrito.addEventListener('click', crearCarrito)
    

    //modal body
    carrito.forEach((fotos)=> {
        const fotoEnCarrito =document.createElement('div');
              fotoEnCarrito.className = 'fotoInCarrito'
              fotoEnCarrito.innerHTML = `
                <div class="carritoConFotos">
                  <img class="productImg" src="${fotos.img}" />
                  <div class="productInfo">
                    <h4>${fotos.nombre}</h4>
                  </div>

                  <div class="cantidadFoto">
                    <button class="disminuirBoton">-</button>
                    <span class="cantidadEntrada">${fotos.cantidad}</span>
                    <button class="aumentarBoton">+</button>
                  </div>

                  <div class="price">${fotos.precio * fotos.cantidad}$ </div>
                  <div class="borrarFoto">❌</div>
                </div>    

                `;

            contCarrito.appendChild(fotoEnCarrito);
        

        const disminuir = fotoEnCarrito.querySelector(".disminuirBoton");
        disminuir.addEventListener("click", () => {
            if(fotos.cantidad !==1){
                fotos.cantidad --;
                crearCarrito();
                }
                crearCarriContador();
                guardarEnStorage();
            });
            const incrementar = fotoEnCarrito.querySelector(".aumentarBoton");
            incrementar.addEventListener("click", () => {
                fotos.cantidad ++;
                crearCarrito();
                crearCarriContador();
                guardarEnStorage();
                
            });


        const borrarProducto = fotoEnCarrito.querySelector('.borrarFoto');
        borrarProducto.addEventListener('click', ()=>{
            borrarFotosDelCarri(fotos.id)
        })
    });



    const total = carrito.reduce((acumulador, laFotoDelCarri)=> acumulador+laFotoDelCarri.precio*laFotoDelCarri.cantidad, 0);

    const footerCarrito = document.createElement('div');
        footerCarrito.className = 'foter-carrito'
        footerCarrito.innerHTML = `
           
            <div class="precioTotal">Total a pagar: $${total}</div>
            <button class="pagar" id="pagarYa">COMPRAR</button>
            

            `;
        contCarrito.appendChild(footerCarrito);


        
    const pagoFinal = document.querySelector("#pagarYa")

        pagoFinal.addEventListener("click",()=> {
        
            Swal.fire({
                title: "Métodos de pago",
                text: "Elija su método de pago",
                confirmButtonText: "VISA",
                cancelButtonText: "MASTER",
                showCancelButton: true,       
            });
        })   
};  

botonCarrito.addEventListener('click', crearCarrito)

const borrarFotosDelCarri = (id)=> {
    const BuscarIdFoto = carrito.findIndex((fotos)=>fotos.id === id);
    carrito.splice(BuscarIdFoto,1);
    crearCarrito();
    crearCarriContador();
    guardarEnStorage();   
};

const crearCarriContador = ()=> {
    const totalCarriContador = carrito.reduce((acumulador, laFotoDelCarri)=> acumulador+laFotoDelCarri.cantidad, 0);
        if (totalCarriContador > 0){
            carritoContador.style.display = "block";
            carritoContador.innerText = totalCarriContador;
         }else{
            carritoContador.style.display= "none";
        }
};

crearCarriContador();






