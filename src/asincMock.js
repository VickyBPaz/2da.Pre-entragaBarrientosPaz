
// // Array con objetos - Servicios de Dr. House
const products = [
    {
        id: "1",
        name: "Mantenimiento integral",
        category: "Services Mantenimiento",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBeaTdtW2Oh4fsAkybsm1mmEiqefMMbD6xQ&usqp=CAU",
        price: 15000,
        stock: 10,
        description: "Mantenimiento preventivo y Correctivo",
    },
    {
        id: "2",
        name: "Cerrajeria y Mobiliario",
        category: "Services Cerrajeria",
        img: "https://image.shutterstock.com/image-photo/wood-door-locksmith-maintain-silver-260nw-382330354.jpg",
        price: 7500,
        stock: 10,
        description: "Reparaciones Puertas Cerrajeria",
    },
        {
        id: "3",
        name: "Electricidad",
        category: "Services Electricidad",
        img: "https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 4500,
        stock: 10,
        description: "Cableados, Instalaciones Electricas, Enchufes y tomacorrientes",
    },
    
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}