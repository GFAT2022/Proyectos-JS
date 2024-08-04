
setTimeout(() => {
    
    Swal.fire({ 
        title: "NUEVO CURSO",
        text: "Te gustaría estudiar fotografía con nosotros?",
        showCancelButton: true,
        confirmButtonText: "Sí me gustaría",
        cancelButtonText: "No Gracias",
        reverseButtons: true,
        backdrop: 'swal2-backdrop-show',   
        footer: '<a href="https://www.youtube.com/watch?v=Ar_h-uwUvDs">"Proximamente. Click aca"</a>',
        imageUrl: "./imagenes/imag8.jpg",
        imageWidth: 200,
        imageHeight: 200,
        // imageAlt: "A tall image",
       
  });
    
}, 3000) 