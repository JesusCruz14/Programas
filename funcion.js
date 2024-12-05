function mostrarSeccion(id) {
    const secciones = document.querySelectorAll(".seccion");
    secciones.forEach((seccion) => {
      seccion.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
  }
  
  function crearLista() {
    const tamano = parseInt(document.getElementById("tamano").value);
    const area = document.getElementById("burbuja-area");
    area.innerHTML = ""; // Limpia los inputs previos
    for (let i = 0; i < tamano; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.className = "elemento";
      input.placeholder = `Elemento ${i + 1}`;
      area.appendChild(input);
      area.appendChild(document.createElement("br"));
    }
  }
  
  function ordenarBurbuja() {
    const elementos = Array.from(document.querySelectorAll(".elemento")).map((e) => Number(e.value));
    const orden = document.getElementById("orden").value;
    for (let i = 0; i < elementos.length - 1; i++) {
      for (let j = 0; j < elementos.length - i - 1; j++) {
        if ((orden === "asc" && elementos[j] > elementos[j + 1]) || 
            (orden === "desc" && elementos[j] < elementos[j + 1])) {
          [elementos[j], elementos[j + 1]] = [elementos[j + 1], elementos[j]];
        }
      }
    }
    document.getElementById("resultado").innerText = `Lista ordenada: ${elementos.join(", ")}`;
  }
  
  function ordenarNombres() {
    const nombres = Array.from(document.querySelectorAll(".nombre")).map((e) => e.value);
    const nombresOrdenados = nombres.sort();
    const resultado = nombresOrdenados.map((nombre) => `${nombre} (${nombre.length} letras)`).join("<br>");
    document.getElementById("resultado-nombres").innerHTML = resultado;
  }
  
  function calcular() {
    const ecuacion = document.getElementById("ecuacion").value;
    const validChars = /^[0-9+\-*/().\s]+$/; // Expresión regular para validar solo números y operadores básicos
  
    if (validChars.test(ecuacion)) {
      const resultado = eval(ecuacion);
      document.getElementById("resultado-calculadora").innerText = `Resultado: ${resultado}`;
    } else {
      document.getElementById("resultado-calculadora").innerText = "Ecuación inválida. Solo usa números y operadores básicos.";
    }
  }
  