function esResValido(response, idNum) {
    if (!response.ok) {
        console.log(`APIFS->Respuesta no OK al obtener el producto con ID ${idNum}. Código: ${response.status}`);
        //throw new Error(`APIFS->Error HTTP: ${response.status}`);
        return false;
    }
    return true;
}

const urlAPI = 'https://fakestoreapi.com/products';
const configGet = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
};
const configPost = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
};
const configDel = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
};
const configPut = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
};


export async function obtenerProductos() {
    try {
        const response = await fetch(urlAPI, configGet);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('ApiFS->Error al obtener los productos:', error);
    }
}

export async function obtenerProductoPorId(id) {
    try {
        let idNum = parseInt(id);
        const response = await fetch(`${urlAPI}/${idNum}`, configGet);
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
        const configConBody = {
            ...configPost,
            body: JSON.stringify(producto)
        }
        const response = await fetch(urlAPI, configConBody);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('ApiFS->Error al agregar el producto:', error);
    }
}

export async function eliminarProducto(id) {
    try {
        let idNum = parseInt(id);
        const response = await fetch(`${urlAPI}/${idNum}`, configDel);
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
        const configConBody = {
            ...configPut,
            body: JSON.stringify(productoActualizado)
        };
        const response = await fetch(`${urlAPI}/${idNum}`, configConBody);
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
