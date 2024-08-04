const API_BASE = 'https://fakestoreapi.com/users/'


fetch(API_BASE)
    .then((respuesta) =>{
        return respuesta.json();
        
    })

    .then((data)=>{
        console.log(data)
        const container = document.querySelector("#container")

        data.forEach((product) => {
            const div = document.createElement ("div")
            div.innerHTML = ` 
                
                <p>${product.email}</p>
            `
            container.appendChild(div)
        })

    })

    .catch((error)=>{
        console.log(error)
    })
