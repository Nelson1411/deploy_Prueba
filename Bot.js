const TeleBot = require('telebot');
const axios = require('axios');
//Token
const token = require('./Token')

const bot = new TeleBot( {
    token:token,
    usePlugins: ['commandButton']
});
module.exports = bot

const { ObtenerProductos, UsersPost, FnMenuPrincipal } = require("./functions")

WaitUserinput = false

bot.on([`/help`], (msg) => msg.reply.text(`Bot prueba para hacer facturas de una tienda.`))
bot.on([`/autor`], (msg) => msg.reply.text(`autor: @bensondr`))

//Función para buscar un producto específico.
async function BuscarProducto (msg) {
    if(WaitUserinput){
        //const replyMarkup = ResultadoProducto
        bot.sendMessage(msg.from.id, "Buscando Producto...")
        try{
            const res = await axios.get(`https://fakestoreapi.com/products/${msg.text}`)
        
        const producto = `${res.data.title}\n\n ${res.data.description}\n\n ${res.data.price}$\n\n ${res.data.image} `
        bot.sendMessage(msg.from.id, producto)
        WaitUserinput = false
        }catch(error) {
            bot.sendMessage(msg.from.id, "No se encontró el producto.")
            WaitUserinput = false
        }
    }
}
 
bot.on(["/start","/hello"], UsersPost)



bot.on("/MostrarProductos", ObtenerProductos);

bot.on(["/MenuPrincipal"], FnMenuPrincipal) 

bot.on(["/BuscarProducto"], (msg) => {
    let id = msg.from.id
    bot.sendMessage(id, "Para mostrarle el producto que busca, indique un número de código del 1 al 20, por favor:")
    WaitUserinput = true
})

bot.on(/^1?\d$|^20$/, BuscarProducto);

// Button callback
bot.on('callbackQuery', (msg) => {

    console.log('callbackQuery data:', msg.data);
    bot.answerCallbackQuery(msg.id);

});

bot.start()