class Alumnos {
    constructor(id, nombre, apellido, sexo, edad){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.sexo = sexo
        this.edad = edad
    }
}

let alumnosCoder = []
const alumno1 = new Alumnos (1, "Santiago", "Rodriguez", "Masculino", 27)
alumnosCoder.push(alumno1)
const alumno2 = new Alumnos (2, "Estefania", "Martinez", "Femenino", 26)
alumnosCoder.push(alumno2)
const alumno3 = new Alumnos (3, "Nicolas", "Jaime", "Masculino", 30)
alumnosCoder.push(alumno3)
const alumno4 = new Alumnos (4, "Julieta", "Maidana", "Femenino", 25)
alumnosCoder.push(alumno4)
const alumno5 = new Alumnos (5, "Vanina", "Franqui", "Femenino", 21)
alumnosCoder.push(alumno5)
const alumno6 = new Alumnos (6, "Eugenia", "Leslie", "Femenino", 24)
alumnosCoder.push(alumno6)

console.log(alumnosCoder);

class Profesores {
    constructor (id, nombre, apellido, edad, asignatura){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.asignatura = asignatura
    }
}

let profesoresCoder = []
const profesor1 = new Profesores (1, "Gloria", "Martinez", 36, "Desarrollo Web")
profesoresCoder.push(profesor1)
const profesor2 = new Profesores (2, "Jose", "Rodriguez",31, "Javascript")
profesoresCoder.push(profesor2)
const profesor3 = new Profesores (3, "Belen", "Escobar", 32, "React Js")
profesoresCoder.push(profesor3)
const profesor4 = new Profesores (4, "Mateo", "Suarez", 28, "Programacion Backend")
profesoresCoder.push(profesor4)

console.log(profesoresCoder);



let nombreProfesor = prompt("Bienvenido profe. Ingrese su nombre")
alert (`Bienvenido ${nombreProfesor}`)
console.log(nombreProfesor);
let numeroCredencial = parseInt(prompt(`${nombreProfesor} Ingrese su credencial`))
console.log(numeroCredencial);

let nombreAlumno = prompt(`Ingrese el nombre completo del alumno`)
console.log(nombreAlumno);
let nota1 = parseInt(prompt(`Ingrese la nota del primer parcial de ${nombreAlumno}`))
console.log(nota1);
let nota2 = parseInt(prompt(`Ingrese la nota del segundo parcial de ${nombreAlumno}`))
console.log(nota2);
let nota3 = parseInt(prompt(`Ingrese la nota del tercer parcial de ${nombreAlumno}`))
console.log(nota3);
function notaFinal() {
    let resultado = nota1 + nota2 + nota3
    console.log(resultado);
    let promedio = resultado / 3
    console.log("el promedio del alumno es " + promedio);

    if (promedio >= 7){
        alert(`El alumno ${nombreAlumno} promocionó la materia con un promedio de ${promedio} por lo que no tiene que rendir final`)
    } else if (promedio >= 4){
        alert (`El alumno ${nombreAlumno} aprobó la materia pero debera rendir final ya que alcanzó un promedio de ${promedio}`)
    } else {
        alert (`El alumno ${nombreAlumno} desaprobó la materia y deberá recursarla ya que alcanzó un promedio de ${promedio}`)
    }
}
notaFinal()



