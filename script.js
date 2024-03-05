document.addEventListener("DOMContentLoaded", function() {

    const envelope = document.getElementById("envelope");

    const heartContainer = document.getElementById("heart-container");

    const loveMessages = [

        "TE AMO CON TODO DE MI CORAZON",

        "ERES EL AMOR DE MI VIDA",

        "JUNTOS HASTA EL FINAL",

        "ERES LA MEJOR, NENA"

    ];



    envelope.addEventListener("click", function() {

        const heartCount = Math.floor(Math.random() * 5) + 1; // Número aleatorio de corazones entre 1 y 5

        const randomIndex = Math.floor(Math.random() * loveMessages.length); // Índice aleatorio para seleccionar un mensaje

        const loveMessage = loveMessages[randomIndex];



        for (let i = 0; i < heartCount; i++) {

            const heart = document.createElement("div");

            heart.classList.add("heart");

            heart.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria

            heart.style.bottom = `${Math.random() * 50}%`; // Posición vertical aleatoria

            heart.style.animationDelay = `${Math.random() * 2}s`; // Retardo de animación aleatorio

            heartContainer.appendChild(heart);

        }



        // Mostrar el mensaje de amor aleatorio

        document.getElementById("love-message").innerText = loveMessage;

    });

});
