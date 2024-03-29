class Product {
    constructor(id, title, description, price, thumbnail, code, stock) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        // Validar que no se repita el campo "code"
        if (this.products.some(product => product.code === code)) {
            console.log(`Ya existe un producto con el código '${code}'.`);
            return;
        }

        const product = new Product(this.nextId++, title, description, price, thumbnail, code, stock);
        this.products.push(product);
        console.log(`Producto '${title}' agregado con éxito.`);
    }

    removeProduct(code) {
        const index = this.products.findIndex(product => product.code === code);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log(`Producto con código '${code}' eliminado.`);
        } else {
            console.log(`No se encontró ningún producto con el código '${code}'.`);
        }
    }

    searchProduct(code) {
        const product = this.products.find(product => product.code === code);
        if (product) {
            console.log("Producto encontrado:");
            console.log(`ID: ${product.id}`);
            console.log(`Título: ${product.title}`);
            console.log(`Descripción: ${product.description}`);
            console.log(`Precio: ${product.price}`);
            console.log(`Thumbnail: ${product.thumbnail}`);
            console.log(`Código: ${product.code}`);
            console.log(`Stock disponible: ${product.stock}`);
        } else {
            console.log(`No se encontró ningún producto con el código '${code}'.`);
        }
    }

    displayAllProducts() {
        if (this.products.length > 0) {
            console.log("Lista de productos disponibles:");
            this.products.forEach(product => {
                console.log(`ID: ${product.id}, Título: ${product.title}, Precio: ${product.price}, Stock: ${product.stock}`);
            });
        } else {
            console.log("No hay productos disponibles actualmente.");
        }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.log("Producto no encontrado.");
            return null;
        }
    }
}

// Ejemplo de uso
const manager = new ProductManager();

// Agregar algunos productos
manager.addProduct("Camisa", "Camisa de algodón", 25.99, "/path/to/camisa.jpg", "CAM001", 10);
manager.addProduct("Pantalón", "Pantalón vaquero", 39.99, "/path/to/pantalon.jpg", "PAN001", 5);
manager.addProduct("Zapatos", "Zapatos de cuero", 49.99, "/path/to/zapatos.jpg", "ZAP001", 8);

// Obtener un producto por ID
const product = manager.getProductById(2);
console.log("Producto obtenido por ID:", product);

// Intentar obtener un producto con un ID que no existe
manager.getProductById(10);