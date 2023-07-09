//Este código selecciona el elemento del documento con el id "header" y le asigna un bloque de código HTML para construir el HEADER.
// Luego de innerHTM = está la notación /*html*/ que sirve para diferenciar las etiquetas dentro de un template strig siempre y cuando se disponga de la extención es6-string-html v2.12.1

document.getElementById("header").innerHTML = /*html*/`
<nav id="navbar">
    <div id="logo">
        <a href="./index.html" id="logo">
            <img src="./img/Logo.png" alt="Logo" widt="100" height="100"/>
        </a>
        <h1>
            Brisa <br/>
            de Otoño
        </h1>
    </div>
    <div id="navbar-centrado">
        <a href="./index.html">Home</a>
        <a class="active" href="./tienda.html">Tienda</a>
        <a href="./contact.html">Contacto</a>
        <a href="./ComoComprar.html">Cómo comprar</a>
        <a href="./productos.html">Stock</a>
    </div>
    <div id="navbar-derecha">
        <a class="boton-carrito" href="carrito.html">
        Carrito<i class="fa-solid fa-cart-shopping"></i>
        <samp class="numerito">0</samp>
        </a>
    </div>
</nav>`

//Este código selecciona el elemento del documento con el id "footer" y le asigna un bloque de código HTML para construir el FOOTER.
document.getElementById("footer").innerHTML= /*html*/`
<section>
    <a href=""><img src="./img/iconos/instagram.png" alt="" /></a>
    <div class="elemento-footer">
        <h5>TELÉFONO</h5>
        <p>+54 911 1234 5678</p>
    </div>
    <div class="elemento-footer">
        <h5>UBICACIÓN</h5>
        <p>Buenos Aires, Argentina</p>
    </div>
    <div class="elemento-footer">
        <h5>EMAIL</h5>
        <p>brisadeotoño@gmail.com</p>
    </div>
    <div class="elemento-footer">
        <p>© 2023 by</p>
        <h5>Grupo_18</h5>
    </div>
</section>
`

//Este código selecciona el elemento del documento con el id "carrusel" y le asigna un bloque de código HTML para construir el CARRUSEL. La función "slider()" se encarga de que el Id "carrusel" muestre una imagen del conjunto "slides" y la función "setInterval(slider,2000), ejecuta la función "slider()" cada 2000ms

const slides = [
        "./img/carrusel/1.jpg",
        "./img/carrusel/2.jpg",
        "./img/carrusel/3.jpg",
        "./img/carrusel/4.jpg"
    ];

var Start=1;
function slider(){
    
    if (Start < slides.length){
        Start++;
    }
    else{
        Start=1;
    }
    document.getElementById("carrusel").innerHTML = `
    <img src=${slides[Start-1]} alt="">
    `;
    
}
setInterval(slider,2000);
