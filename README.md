# TP-PreEntrega-TT-Node2025
Proyecto del programa impartido por Talento Tech 2025. Backend de un e-commerce (usando FakeStore Api).

<!-- ejemplo de uso:

Obtener todos los productos:
    npm run start GET products

Obtener un producto solo (buscado por id):
    npm run start GET products/<productId>

    ejemplo:
    npm run start GET products/7

Crear un Producto Nuevo:
    npm run start POST products <title> <price> <category>

    ejemplo:
    npm run start POST products T-Shirt-Rex 300 remeras

Eliminar un Producto:
    npm run start DELETE products/<productId>

    ejempplo:
    Eliminar un Producto:
    npm run start DELETE products/11 -->

# TP-PreEntrega-TT-Node2025

Proyecto del programa **Talento Tech 2025**.  
Backend de un **E-Commerce** desarrollado en **Node.js**, utilizando la [FakeStore API](https://fakestoreapi.com/) como base de datos de prueba.

---

## 🚀 Requisitos Previos

- Node.js v18+  
- npm v9+

---

## ⚙️ Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/TP-PreEntrega-TT-Node2025.git
   cd TP-PreEntrega-TT-Node2025

Instalar dependencias:

npm install

📌 Uso

Los comandos se ejecutan con:

npm run start <METHOD> <endpoint> [params]

🔹 Obtener todos los productos
npm run start GET products

🔹 Obtener un producto por ID
npm run start GET products/<productId>


Ejemplo:

npm run start GET products/7

🔹 Crear un producto nuevo
npm run start POST products <title> <price> <category>


Ejemplo:

npm run start POST products T-Shirt-Rex 300 remeras

🔹 Eliminar un producto
npm run start DELETE products/<productId>


Ejemplo:

npm run start DELETE products/11

Notas

La API es solo de prueba (FakeStore API).

Los productos creados o eliminados no persisten después de reiniciar.
