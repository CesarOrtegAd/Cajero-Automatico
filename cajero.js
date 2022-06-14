var cuentas = [
    {
        "nombre": "Hiromi",
        saldo: 200,
        password: 'helloworld'
    },
    {
        nombre: "Luis",
        saldo: 290,
        password: 'l33t'
    },
    {
        nombre: "Carlos",
        saldo: 67,
        password: 'l23'
    }
]

var opnueva, opcion, contraseña
var nuevoSaldo = 0, ingreso, retiro
var intentos = 2
//INGRESANDO A CUENTA
var user = prompt("Ingrese el usuario de su cuenta")
cuentas.forEach(object => {
    if (object.nombre == user) {
        contraseña = prompt("Ingrese su contraseña")
        //INTENTOS DE CONTRASEÑA
        if (object.password != contraseña) {
            while (object.password != contraseña) {
                alert("Intento " + intentos)
                contraseña = prompt("Ingrese de nuevo su contraseña")
                intentos++
            }
            if (object.password == contraseña) {
                alert("Bienvenido(a) " + object.nombre)
                opcion = prompt("Ingrese una opción\n" +
                    "1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto")
                if (opcion == 1) {
                    alert("Su saldo actual es de $" + object.saldo)
                } else if (opcion == 2) {
                    ingreso = prompt("Ingreso\nIngrese el monto: $")
                    ingreso = Number(ingreso)
                    nuevoSaldo = object.saldo + ingreso
                    alert("Su nuevo saldo es de $" + nuevoSaldo)
                    object.saldo = nuevoSaldo
                } else if (opcion == 3) {
                    retiro = prompt("Retiro\nIngrese el monto: $")
                    retiro = Number(retiro)
                    nuevoSaldo = object.saldo - retiro
                    alert("Su nuevo saldo es de $" + nuevoSaldo)
                    object.saldo = nuevoSaldo
                }
                //NUEVA OPERACIÓN
                opnueva = prompt("¿Desea hacer otra operación?\n1 = Si | 2 = No")
                while (opnueva == 1) {
                    opcion = prompt("Ingrese una opción\n" +
                        "1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto")
                    if (opcion == 1) {
                        alert("Su saldo actual es de $" + object.saldo)
                    } else if (opcion == 2) {
                        ingreso = prompt("Ingrese el monto: $")
                        ingreso = Number(ingreso)
                        nuevoSaldo = object.saldo + ingreso
                        alert("Su nuevo saldo es de $" + nuevoSaldo)
                        object.saldo = nuevoSaldo
                    } else if (opcion == 3) {
                        retiro = prompt("Retiro\nIngrese el monto: $")
                        retiro = Number(retiro)
                        nuevoSaldo = object.saldo - retiro
                        alert("Su nuevo saldo es de $" + nuevoSaldo)
                        object.saldo = nuevoSaldo
                    }
                    opnueva = prompt("¿Desea hacer otra operación?\n1 = Si | 2 = No")
                }
                alert("QUE TENGAS BUEN DÍA")
            }
            //CONTRASEÑA VALIDA
        } else {
            alert("Bienvenido(a) " + object.nombre)
            opcion = prompt("Ingrese una opción\n" +
                "1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto")
            if (opcion == 1) {
                alert("Su saldo actual es de $" + object.saldo)
            } else if (opcion == 2) {
                ingreso = prompt("Ingrese el monto: $")
                ingreso = Number(ingreso)
                nuevoSaldo = object.saldo + ingreso
                alert("Su nuevo saldo es de $" + nuevoSaldo)
                object.saldo = nuevoSaldo
            } else if (opcion == 3) {
                retiro = prompt("Retiro\nIngrese el monto: $")
                retiro = Number(retiro)
                nuevoSaldo = object.saldo - retiro
                alert("Su nuevo saldo es de $" + nuevoSaldo)
                object.saldo = nuevoSaldo
            }
            opnueva = prompt("¿Desea hacer otra operación?\n1 = Si | 2 = No")
            while (opnueva == 1) {
                opcion = prompt("Ingrese una opción\n" +
                    "1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto")
                if (opcion == 1) {
                    alert("Su saldo actual es de $" + object.saldo)
                } else if (opcion == 2) {
                    ingreso = prompt("Ingrese el monto: $")
                    ingreso = Number(ingreso)
                    nuevoSaldo = object.saldo + ingreso
                    alert("Su nuevo saldo es de $" + nuevoSaldo)
                    object.saldo = nuevoSaldo
                } else if (opcion == 3) {
                    retiro = prompt("Retiro\nIngrese el monto: $")
                    retiro = Number(retiro)
                    nuevoSaldo = object.saldo - retiro
                    alert("Su nuevo saldo es de $" + nuevoSaldo)
                    object.saldo = nuevoSaldoda
                }
                opnueva = prompt("¿Desea hacer otra operación?\n1 = Si | 2 = No")
            }
            alert("QUE TENGAS BUEN DÍA")
        }
    }else{
        console.log("LA CUENTA NO EXISTE!!")
    }
})