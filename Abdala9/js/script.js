class CAutor {
  constructor() {
    this.autores = [];
  }

  agregarAutor(nombre, apellido, nacionalidad, mejorObra, anioPublicacion, edadPublicacion) {
    const IdAutor = Math.floor(Math.random() * 1000) + 1;
    this.autores.push({
      IdAutor,
      nombre,
      apellido,
      nacionalidad,
      mejorObra,
      anioPublicacion,
      edadPublicacion
    });
  }

  generarTablaAutores() {
    const tablaBody = document.querySelector('#autorTable tbody');
    tablaBody.innerHTML = '';

    this.autores.forEach(autor => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${autor.nombre}</td>
        <td>${autor.apellido}</td>
        <td>${autor.nacionalidad}</td>
        <td>${autor.mejorObra}</td>
        <td>${autor.anioPublicacion}</td>
        <td>${autor.edadPublicacion}</td>
      `;
      tablaBody.appendChild(fila);
    });
  }

  listarAutoresArgentinos() {
    const autoresArgentinos = this.autores.filter(autor => autor.nacionalidad.toLowerCase() === 'argentino');
    const nombresArgentinos = autoresArgentinos.map(autor => `${autor.nombre} ${autor.apellido}`);
    return nombresArgentinos;
  }

  listarPublicacion() {
    const autoresEnPeriodo = this.autores.filter(autor => autor.anioPublicacion >= 1960 && autor.anioPublicacion <= 1980);
    const nombresAutoresEnPeriodo = autoresEnPeriodo.map(autor => `${autor.nombre} ${autor.apellido}`);
    return nombresAutoresEnPeriodo;
  }

  calcularPromedioEdadPublicacion() {
    const sumaEdades = this.autores.reduce((total, autor) => total + autor.edadPublicacion, 0);
    const promedio = sumaEdades / this.autores.length;

    return promedio;
  }

  listarTodosLosAutores() {
    return this.autores.map(autor => `${autor.nombre} ${autor.apellido}`);
  }

}


const bibliotecaAutores = new CAutor();


bibliotecaAutores.agregarAutor("Gabriel", "García Márquez", "Colombiano", "Cien años de soledad", 1967, 40);
bibliotecaAutores.agregarAutor("Julio", "Cortázar", "Argentino", "Rayuela", 1963, 48);
bibliotecaAutores.agregarAutor("Isabel", "Allende", "Chilena", "La casa de los espíritus", 1982, 40);
bibliotecaAutores.agregarAutor("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45);
bibliotecaAutores.agregarAutor("Clarice", "Lispector", "Brasileña", "La hora de la estrella", 1977, 56);
bibliotecaAutores.agregarAutor("Juan", "Rulfo", "Mexicano", "Pedro Páramo", 1955, 38);
bibliotecaAutores.agregarAutor("Carlos", "Fuentes", "Mexicano", "La región más transparente", 1958, 29);
bibliotecaAutores.agregarAutor("Eduardo", "Galeano", "Uruguayo", "Las venas abiertas de América Latina", 1971, 31);


bibliotecaAutores.generarTablaAutores();


document.getElementById("resultado1").textContent = "Autores Argentinos: " + bibliotecaAutores.listarAutoresArgentinos();


document.getElementById("resultado2").textContent = "Autores que publicaron entre 1960 a 1980: " + bibliotecaAutores.listarPublicacion();


document.getElementById("resultado3").textContent = "Promedio de edad al publicar: " + bibliotecaAutores.calcularPromedioEdadPublicacion();

document.getElementById("resultado4").textContent = "Autores: " + bibliotecaAutores.listarTodosLosAutores();