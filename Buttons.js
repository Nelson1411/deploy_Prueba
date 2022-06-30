const bot = require("./Bot")

const buttons = {
    MuestraProductos: {
      label: "Productos",
      command: "/MostrarProductos",
    },
    MetodoDePago: {
        label: "Metodo de Pago",
        command: "/MetodoDePago",
      },
    Efectivo: {
        label: "Efectivo",
        command: "/Efectivo",
      },
    Transferencia: {
        label: "Transferencia",
        command: "/Transferencia",
      },
    Cripto: {
        label: "Cripto",
        command: "/Cripto",
      } ,
    BuscarProducto: {
        label: "Buscar Producto",
        command: "/BuscarProducto",
      },
    AgregarAlCarrito: {
        label: "Agregar al carrito",
        command: "/AgregarAlCarrito",
      },
    ZonasDeServicio: {
        label: "Zonas de servicio",
        command: "/ZonasDeServicio",
      },
    Delivery: {
        label: "Delivery",
        command: "/Delivery"
    },
    Volver: {
        label: "Volver",
        command: "/MenuPrincipal"
    }  
} 

// Menu Principal
const MenuPrincipal = bot.inlineKeyboard([
        
  // Botones del Menu principal
  [bot.inlineButton(buttons.MuestraProductos.label, {callback: buttons.MuestraProductos.command})],

  [bot.inlineButton(buttons.MetodoDePago.label, {callback: buttons.MetodoDePago.command})],

  [bot.inlineButton(buttons.Delivery.label, {callback: buttons.Delivery.command})],

  [bot.inlineButton(buttons.ZonasDeServicio.label, {callback: buttons.ZonasDeServicio.command})],

]);
//botones de productos
const MenuDeProductos = bot.inlineKeyboard([
[bot.inlineButton(buttons.BuscarProducto.label, {callback: buttons.BuscarProducto.command,})],

[bot.inlineButton(buttons.AgregarAlCarrito.label, {callback: buttons.AgregarAlCarrito.command,})],

[bot.inlineButton(buttons.Volver.label, {callback: buttons.Volver.command,})],
]);

module.exports = {
  MenuDeProductos,
  MenuPrincipal
}