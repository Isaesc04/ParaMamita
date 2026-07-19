function mostrarCarta() {

    const carta = document.getElementById("carta");

    if (carta.style.display === "block") {

        carta.style.display = "none";

    } else {

        carta.style.display = "block";

        carta.scrollIntoView({
            behavior: "smooth"
        });

    }

}

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * window.innerWidth + "px";

    corazon.style.top = window.innerHeight + "px";

    corazon.style.fontSize = (20 + Math.random() * 40) + "px";

    corazon.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(corazon);

    setTimeout(function () {
        corazon.remove();
    }, 8000);

}

// Corazones flotando constantemente
setInterval(crearCorazon, 500);

function lluvia() {

    for (let i = 0; i < 120; i++) {

        setTimeout(function () {

            crearCorazon();

        }, i * 50);

    }

}

// Mensaje sorpresa al cargar la página
window.onload = function () {

    setTimeout(function () {

        alert("❤️ Bienvenida mamá ❤️\n\nEsta página fue creada con todo mi amor especialmente para ti.");

    }, 800);

};