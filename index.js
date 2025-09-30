import { obtenerProductos, obtenerProductoPorId, agregarProducto, eliminarProducto, actualizarProducto } from './API/apiFakeStore.js';

async function correrServidor() {
    console.log("...corriendo servidor ...");
    const argumentos = process.argv.slice(2);
    const comando = argumentos[0] ? argumentos[0].toUpperCase() : null;
    const parametros = argumentos.slice(1);
    if (parametros.length === 0) {
        console.log(`Falta el parámetro para el comando ${comando} ingresado!`);
        return;
    }

    switch (comando) {
        case 'GET':
            if (parametros[0] === "products") {
                console.log(':----: Listando todos los productos :----:');

                const productos = await obtenerProductos();
                if (productos && Array.isArray(productos)) {
                    productos.forEach(producto => {
                        const { id, title, price, description, category, image } = producto;
                        console.log(`ID.........: ${id}`);  
                        console.log(`Nombre.....: ${title}`);  
                        console.log(`Precio.....: $ ${price}`); 
                        console.log(`Descripción: ${description}`);  
                        console.log(`Categoría..: ${category}`); 
                        console.log(`Imagen.....: ${image}`);
                        console.log('--------------------------------------------------');

                    });
                    console.log(':----: Fin del listado :----:');
                } else {
                    console.log('No se pudieron obtener los productos.');
                }

            }
            if (parametros[0] && parametros[0].startsWith("products/")) {
                const id = parametros[0].split("/")[1];
                if (!id) {
                    console.log('Falta el ID del producto.');
                    break;
                }
                if (isNaN(id) || id < 1) {
                    console.log('ID inválido. Debe ser un número mayor a 1.');
                    break;
                }
                const producto = await obtenerProductoPorId(id);
                if (producto) {
                    console.log(`Mostrando el producto con id: ${id}...:`);
                    console.log(`ID.........: ${producto.id}`);  
                    console.log(`Nombre.....: ${producto.title}`);  
                    console.log(`Precio.....: $ ${producto.price}`); 
                    console.log(`Descripción: ${producto.description}`);  
                    console.log(`Categoria..: ${producto.category}`); 
                    console.log(`Imagen.....: ${producto.image}`);
                    console.log('--------------------------------------------------');
                }
            } else if (parametros[0] !== "products") {
                console.log('Falta el parámetro para el comando GET. Usa "products" o "products/{id}".');
            }
            break;

        case 'POST':
            //console.log(`Comando ${comando}...`);
            //console.log('Parámetro recibido:', parametros);
            if (parametros[0] === "products" && parametros.length > 1) {
                console.log('Agregando un nuevo producto...');
                const nombre = parametros[1];
                const precio = parametros[2];
                const categoria = parametros[3];
                let productoNuevo = {
                    title: `${nombre}`,
                    price: `${precio}`,
                    category: `${categoria}`,
                };
                await agregarProducto(productoNuevo);
                console.log(':----: Producto agregado Correctamente :----:');
            } else {
                console.log('Falta el dato para el comando POST. Usa "products {nombre} {precio} {categoria}".');
            }
            break;

        case 'DELETE':
            if (parametros[0] && parametros[0].startsWith("products/")) {
                const id = parametros[0].split("/")[1];
                if (!id) {
                    console.log('Falta el ID del producto.');
                    break;
                }
                if (isNaN(id) || id < 1) {
                    console.log('ID inválido. Debe ser un número mayor a 1.');
                    break;
                }
                const prodEliminado = await eliminarProducto(id);
                if (prodEliminado) {
                    console.log(`Producto con id: ${id} eliminado correctamente.`);
                    break;
                }
            } else {
                console.log('Falta el parámetro para el comando DELETE. Usa "products/{id}".'); // Agregué un else para feedback
            }

            break;

        case 'PUT':
            if( parametros[0] && parametros[0].startsWith("products/") && parametros.length > 1) {
                const id = parametros[0].split("/")[1];
                if (!id) {
                    console.log('Falta el ID del producto.');
                    break;
                }
                if (isNaN(id) || id < 1) {
                    console.log('ID inválido. Debe ser un número mayor a 1.');
                    break;
                }
                const nombre = parametros[1];
                const precio = parametros[2];
                const categoria = parametros[3];
                let productoActualizado = {
                    id: parseInt(id),
                    title: `${nombre}`,
                    price: `${precio}`,
                    category: `${categoria}`,
                };
                const prodActualizado = await actualizarProducto(id, productoActualizado);
                if (prodActualizado) {
                    console.log(`Producto con id: ${id} actualizado correctamente.`);
                    break;
                }
            } else {
                console.log('Falta el parámetro para el comando PUT. Usa "products/{id} {nombre} {precio} {categoria}".'); // Agregué un else para feedback
            }
            
            break;

        default:
            console.log('Comando no reconocido. Usa "GET", "POST {data}", "PUT {id}" o "DELETE {id}".');
            break;
    }
}

correrServidor();