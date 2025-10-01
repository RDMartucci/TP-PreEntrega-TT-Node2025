function esResValido(response, idNum) {
    if (!response.ok) {
        console.log(`APIFS->Respuesta no OK al obtener el producto con ID ${idNum}. Código: ${response.status}`);
        //throw new Error(`APIFS->Error HTTP: ${response.status}`);
        return false;
    } 
    return true;
}

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
        return data;
    } catch (error) {
        console.error('ApiFS->Error al obtener los productos:', error);
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
        const response = await fetch(`${urlAPI}/${idNum}`, config);
        if (!esResValido(response, idNum)) {
            return null;
        } else {
            const data = await response.json();
            return data;
        }

    } catch (error) {
        console.error(`APIFS->Error al obtener el producto con ID ${id}:`);
        if (error.message.includes('Unexpected end of JSON input')) {
            console.log('Producto no existe');
            return null;
        }
        return null;
    }
}

export async function agregarProducto(producto) {
    try {
        const urlAPI = 'https://fakestoreapi.com/products';
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        };

        const response = await fetch(urlAPI, config);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('ApiFS->Error al agregar el producto:', error);
    }
}

export async function eliminarProducto(id) {
    try {
        const urlAPI = 'https://fakestoreapi.com/products';
        let idNum = parseInt(id);
        const config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(`${urlAPI}/${idNum}`, config);
        if (!esResValido(response, idNum)) {
            return null;
        } else {
            const data = await response.json();
            return data;
        }

    } catch (error) {
        console.error(`APIFS->Error al obtener el producto con ID ${id}:`);
        if (error.message.includes('Unexpected end of JSON input')) {
            console.log('Producto no existe');
            return null;
        }
    }
}

export async function actualizarProducto(id, productoActualizado) {
    try {
        let idNum = parseInt(id);
        const urlAPI = 'https://fakestoreapi.com/products';
        const config = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productoActualizado)
        };
        const response = await fetch(`${urlAPI}/${idNum}`, config);
        if (!esResValido(response, idNum)) {
            return null;
        } else {
            const data = await response.json();
            return data;
        }

    } catch (error) {
        console.error(`APIFS->Error al obtener el producto con ID ${idNum}:`);
        if (error.message.includes('Unexpected end of JSON input')) {
            console.log('Producto no existe');
            return null;
        }
    }
}
