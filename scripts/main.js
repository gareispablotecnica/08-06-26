function verificarEdad(edad) {

    return new Promise((resolve, reject) => {

        console.log("⏳ Cargando...");

        setTimeout(() => {

            if (edad >= 18) {
                resolve("✅ Puede ingresar");
            } else {
                reject("❌ No puede ingresar");
            }

        }, 3000); // espera 3 segundos

    });

}

verificarEdad(20)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));