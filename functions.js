const bot = require('./Bot');
const { apiObtenerProductos, apiPostUsers } = require("./apiMongoDB")
const { MenuDeProductos, MenuPrincipal } = require("./Buttons")

async function ObtenerProductos(msg) {
    let id = msg.from.id
    const replyMarkup = MenuDeProductos

    try{
        const Productos = await apiObtenerProductos();
        bot.sendMessage(id, Productos, { replyMarkup })
    } catch(error) {
        return console.log(error)
    }
}

async function UsersPost(msg) {
    const replyMarkup = MenuPrincipal
    await apiPostUsers(msg)
    UserId = msg.from.id
    bot.sendMessage(UserId, "Bienvenido a nuestra tienda.\nseleccione una de las siguientes opciones", { replyMarkup })
}

function FnMenuPrincipal(msg) {
    const replyMarkup = MenuPrincipal
    bot.sendMessage(msg.from.id, "seleccione una de las siguientes opciones", {replyMarkup})
};


module.exports={
    ObtenerProductos,
    UsersPost,
    FnMenuPrincipal
}