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


function nuevoProfesor(){
    let nombreProfesor = prompt("Bienvenido profe, ingrese su nombre para iniciar")
    let apellidoProfesor = prompt("Ingrese ahora su apellido")
    let edadProfesor = parseInt(prompt("Ingrese su edad"))
    let asignaturaProfesor = prompt("Ingrese la materia que dicta")
    let profesorCreado = new Profesores (profesoresCoder.length+1,nombreProfesor, apellidoProfesor, edadProfesor, asignaturaProfesor)
    profesoresCoder.push(profesorCreado)
}
nuevoProfesor()

function nuevoAlumno(){
    let  alumnoIngresado = prompt("Ingrese nombre de alumno")
    let apellidoIngresado = prompt("Ingrese apellido de alumno")
    let generoAlumno = prompt("Ingrese genero de alumno")
    let edadAlumno = parseInt(prompt("Ingrese edad alumno"))
    let alumnoCreado = new Alumnos(alumnosCoder.length+1,alumnoIngresado,apellidoIngresado,generoAlumno,edadAlumno,)
    alumnosCoder.push(alumnoCreado)
    let nota1 = parseInt(prompt(`Ingrese la nota del primer parcial de ${alumnoIngresado}`))
    console.log(nota1);
    let nota2 = parseInt(prompt(`Ingrese la nota del segundo parcial de ${alumnoIngresado}`))
    console.log(nota2);
    let nota3 = parseInt(prompt(`Ingrese la nota del tercer parcial de ${alumnoIngresado}`))
    console.log(nota3);
    function notaFinal() {
    let resultado = nota1 + nota2 + nota3
    console.log(resultado);
    let promedio = resultado / 3
    console.log("el promedio del alumno es " + promedio);

    if (promedio >= 7){
        alert(`El alumno ${alumnoIngresado} promocionó la materia con un promedio de ${promedio} por lo que no tiene que rendir final`)
    } else if (promedio >= 4){
        alert (`El alumno ${alumnoIngresado} aprobó la materia pero debera rendir final ya que alcanzó un promedio de ${promedio}`)
    } else {
        alert (`El alumno ${alumnoIngresado} desaprobó la materia y deberá recursarla ya que alcanzó un promedio de ${promedio}`)
    }
}
notaFinal()
}
nuevoAlumno()



//Utilice Filter para averiguar todas los alumnos de Coder que son mujeres 
let busqueda1 = alumnosCoder.filter((alumnos)=>alumnos.sexo == "Femenino")
console.log(busqueda1);


//Utilice every para verificar si todos los profesores de Coder son mayores a 25
let busqueda2 = profesoresCoder.every((profesores)=>profesores.edad > 25)
console.log(busqueda2);


//Utilice sort para ordenar de menor a mayor a los profesores, segun su edad, y a los alumnos de mayor a menor
console.log(profesoresCoder.sort((a,b)=> (a.edad - b.edad)));

console.log(alumnosCoder.sort((a,b)=> (b.edad - a.edad)));


