// import { obtenerProductos, obtenerProductoPorId } from './API/apiFakeStore.js';

// async function correrServidor() {
//     console.log("...corriendo servidor ...");

//     const argumentos = process.argv.slice(2);
//     console.log('Argumentos por defecto:', argumentos);

//     const comando = argumentos[0];//toma el primer argumento.
//     console.log('Comando:', comando);

//     const parametros = argumentos[1]; //toma el segundo argumento, como parámetro del comando.
//     console.log('Parámetros:', parametros);

//     switch (comando) {
//         case 'GET':
//             console.log('Comando GET...');

//             if (typeof parametros === 'string') {
//                 console.log('Parámetro recibido:', parametros);

//                 if (parametros === "products") {
//                     const productos = await obtenerProductos();
//                     console.log(':----: Listando todos los productos :----:');
                    
//                     if (productos && Array.isArray(productos)) {
//                         productos.forEach(producto => {
//                             console.log(`ID: ${producto.id} | 
//                                         Nombre: ${producto.title} | 
//                                         Precio: $${producto.price} | 
//                                         Descripción: ${producto.description} | 
//                                         Categoria: ${producto.category} |
//                                         Imagen: ${producto.image}`);
//                             console.log('--------------------------------------------------');
//                         });
                    
                    
//                     // productos.map((producto) => {
//                         // console.log(`ID: ${producto.id} | 
//                         //             Nombre: ${producto.title} | 
//                         //             Precio: $${producto.price} | 
//                         //             Descripción: ${producto.description} | 
//                         //             Categoria: ${producto.category} |
//                         //             Imagen: ${producto.image}`);
//                         // console.log('--------------------------------------------------');
//                     // }
//                     //);
//                     console.log(':----: Fin del listado :----:');
//                 }
//                 break;
//                 if (parametros.startsWith("products/")) {
//                     const id = parametros.split("/")[1];
//                     if (!id) {
//                         console.log('Falta el ID del producto.');
//                         break;
//                     }
//                     if (isNaN(id) || id < 1 || id > 20) {
//                         console.log('ID inválido. Debe ser un número entre 1 y 20.');
//                         break;
//                     }
//                     await obtenerProductoPorId(id);
//                     console.log(`Listando el producto con id: ${id}...`);
//                 }
//             } else {
//                 console.log('Falta el parámetro para el comando GET. Usa "products" o "products/{id}".');
//             }
//             break;
//         case 'POST':
//             if (parametros) {
//                 console.log(`Recibimos ${parametros} satisfactoriamente.`);
//             } else {
//                 console.log('Falta el dato para el comando POST.');
//             }
//             break;
//         case 'PUT':
//             if (parametros) {
//                 console.log(`Modificamos el item con id: ${parametros} satisfactoriamente.`);
//             } else {
//                 console.log('Falta el id para el comando PUT.');
//             }
//             break;
//         case 'DELETE':
//             if (parametros) {
//                 console.log(`El item con el id: ${parametros} se eliminó con éxito.`);
//             } else {
//                 console.log('Falta el id para el comando DELETE.');
//             }
//             break;
//         default:
//             console.log('Comando no reconocido. Usa "GET", "POST {data}", "PUT {id}" o "DELETE {id}".');
//             break;
//     }
// }

// correrServidor();


import { obtenerProductos, obtenerProductoPorId } from './API/apiFakeStore.js';

// Convertir la función principal a async para poder usar await
async function correrServidor() {
    console.log("...corriendo servidor ...");

    const argumentos = process.argv.slice(2);
    //console.log('Argumentos por defecto:', argumentos);

    const comando = argumentos[0];
    //console.log('Comando:', comando);

    const parametros = argumentos.slice(1);
    //console.log('Parámetros:', parametros);

    switch (comando) {
        case 'GET':
            console.log('Comando GET...');

            //if (typeof parametros === 'string') {
                console.log('Parámetro recibido:', parametros);

                if (parametros[0] === "products") {
                    console.log(':----: Listando todos los productos :----:');
                    
                    // Usar await para esperar que la promesa se resuelva
                    const productos = await obtenerProductos(); 
                    
    //                 if (productos && Array.isArray(productos)) {
    //                     productos.forEach(producto => {
    //                         console.log(`ID: ${producto.id}  
    // Nombre: ${producto.title}  
    // Precio: $${producto.price}  
    // Descripción: ${producto.description}  
    // Categoria: ${producto.category} 
    // Imagen: ${producto.image}`);
    // console.log('--------------------------------------------------');
    //                     });
    //                     console.log(':----: Fin del listado :----:');
    //                 } else {
    //                     console.log('No se pudieron obtener los productos.');
    //                 }

                if (productos && Array.isArray(productos)) {
                    productos.forEach(producto => {
                        const { id, title, price, description, category, image } = producto; 
                        console.log(`ID: ${id}  
                Nombre: ${title}  
                Precio: $${price}  
                Descripción: ${description}  
                Categoria: ${category} 
                Imagen: ${image}`);
                        console.log('--------------------------------------------------');
                    });
                    console.log(':----: Fin del listado :----:');
                } else {
                    console.log('No se pudieron obtener los productos.');
                }

                } else if (parametros.startsWith("products/")) { // Usa else if para que solo se ejecute uno de los bloques
                    const id = parametros.split("/")[1];
                    if (!id) {
                        console.log('Falta el ID del producto.');
                        break;
                    }
                    if (isNaN(id) || id < 1 || id > 20) {
                        console.log('ID inválido. Debe ser un número entre 1 y 20.');
                        break;
                    }
                    // Usar await para esperar la respuesta de obtenerProductoPorId
                    const producto = await obtenerProductoPorId(id);
                    if (producto) {
                        console.log(`Listando el producto con id: ${id}...`);
                        console.log(`ID: ${producto.id}  
    Nombre: ${producto.title}  
    Precio: $${producto.price}  
    Descripción: ${producto.description}  
    Categoria: ${producto.category} 
    Imagen: ${producto.image}`);
    console.log('--------------------------------------------------');
                    } else {
                        console.log(`No se encontró el producto con id: ${id}`);
                    }
                }
            //} else {
            //    console.log('Falta el parámetro para el comando GET. Usa "products" o "products/{id}".');
            //}
            break;

        case 'POST':
            console.log('Comando POST...');
            //   if (typeof parametros === 'string') {
                console.log('Parámetro recibido:', parametros);
            // } else {
                // console.log('Falta el dato para el comando POST.');
            
            if (parametros === "products") {
                console.log(':----: Agregando un nuevo producto :----:');

                //let productoNuevo = { title: 'Algodón', price: 29.99, description: 'Muy chuavechito chuavechito...', category: 'insumos', image: 'https://i.pravatar.cc' };
                console.log('Producto a agregar:', productoNuevo);
                await agregarProducto(productoNuevo);
                console.log(':----: Producto agregado :----:');

            }


        break;

        case 'PUT':
            break;

        case 'DELETE':
            break;

        default:
            console.log('Comando no reconocido. Usa "GET", "POST {data}", "PUT {id}" o "DELETE {id}".');
            break;
    }
}

correrServidor();