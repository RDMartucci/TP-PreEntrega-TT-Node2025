export async function obtenerProductos() {
    try {
        const urlAPI = 'https://fakestoreapi.com/products';
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(urlAPI, config);
        const data = await response.json();
        //console.log('Productos obtenidos:', data);

        return data;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

export async function obtenerProductoPorId(id) {
    try {
        const urlAPI = 'https://fakestoreapi.com/products';
        let idNum = parseInt(id);
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        
        if (isNaN(idNum) || idNum < 1 || idNum > 20) {
            throw new Error('ID inválido. Debe ser un número entre 1 y 20.');
        }
        //const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const response = await fetch(`${urlAPI}/${idNum}`, config);
        const data = await response.json();
        //console.log('Producto obtenido:', data);

        return data;
    } catch (error) {
        console.error(`Error al obtener el producto con ID ${id}:`, error);
    }
}

export async function agregarProducto(producto) {
    //const product = { title: 'New Product', price: 29.99 };
    try {
        const urlAPI = 'https://fakestoreapi.com/products';
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        };

        const response = await fetch(urlAPI, config);
        const data = await response.json();
        console.log('Producto agregado:', data);

        return data;
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }
}

export async function eliminarProducto(id) {
    try {
        const urlAPI = 'https://fakestoreapi.com/products';
        let idNum = parseInt(id);
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        };
        if (isNaN(idNum) || idNum < 1 || idNum > 20) {
            throw new Error('ID inválido. Debe ser un número entre 1 y 20.');
        }
        const response = await fetch(`${urlAPI}/${idNum}`, config);
        const data = await response.json();
        console.log('Producto eliminado:', data);

        return data;
    } catch (error) {
        console.error(`Error al eliminar el producto con ID ${id}:`, error);
    }
}