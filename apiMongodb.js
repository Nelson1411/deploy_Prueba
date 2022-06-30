const axios = require("axios")

const apiMongoDB = axios.create({
    baseURL: 'http://localhost:8888/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });

const PRODUCTO_GET = "ProductoGet"
const USERS_POST = "UsersPost"

async function apiObtenerProductos () { 

    try{
        const res = await apiMongoDB.get(PRODUCTO_GET)

        const productos = res.data.map(function(Producto) {
            return `${Producto.id} - ${Producto.title} ${Producto.price}`
        })
        .join("\n")

        console.log(productos)

        return productos

        } catch(error) {
        console.log(error)
        }
    }

async function apiPostUsers(msg) {
    UserId = msg.from.id
    UserFirstName = msg.from.first_name
    UserLastName = msg.from.last_name
    Username = msg.from.username

    try {

        await apiMongoDB.post(USERS_POST, {
            UserId,
            UserFirstName,
            UserLastName,
            Username
        })
    } catch(error){
        console.log(error)
    }

}

module.exports = {
    apiObtenerProductos,
    apiPostUsers
}