// ==========================================================================
// BASE DE DATOS LOCAL Y ESTADO DE APLICACIÓN
// ==========================================================================
const estudiantesIniciales = [
  { id: 1, cedula: "V-34694229", nombre: "Maryoris Sarahi Portilla Soomai", seccion: "Primer año seccion A" },

  { id: 2, cedula: "V-3482822", nombre: "Zahir Uziel Leon Salazar", seccion: "Primer año seccion A" },

  {id: 3, cedula: "V-34828931", nombre: "Howard Isaac Escalona Gonzalez", seccion: "Primer año seccion A"},

  {id: 4, cedula: "V-34855119", nombre: "Maria Valentina Romero Herrera", seccion: "Primer año seccion A"},

  {id: 5, cedula: "V-34894853", nombre: "Abraham Josue Call Marcano", seccion: "Primer año seccion A"},
  
  {id: 6, cedula: "V-35009788", nombre: "Dhilan Josue Calderon Boyce", seccion: "Primer año seccion A"},
 
  {id: 7, cedula: "V-35039769", nombre: "Maria Fernanda Cedeño Cortez", seccion: "Primer año seccion A"},

  {id: 8, cedula: "V-35093006", nombre: "Astins Gabriell Muñoz Morales", seccion: "Primer año seccion A"},

  {id: 9, cedula: "V-35131815", nombre: "Keyler Daniel Wells Palmares", seccion: "Primer año seccion A"},

  {id: 10, cedula: "V-36230054", nombre: "Jascyel Waleska Bettermin Bolwine", seccion: "Primer año seccion A"},
  
  {id: 11, cedula: "V-36237587", nombre: "Anthonella Juliett Ortega Bolwine", seccion: "Primer año seccion A"},
  
  {id: 12, cedula: "V-36298646", nombre: "Kheilyn Alejadra Marquez Carreño", seccion: "Primer año seccion A"},
  
  {id: 13, cedula: "V-36394939", nombre: "Adrian David Gutierrez Baeza", seccion: "Primer año seccion A"},
  
  {id: 14, cedula: "V-36396897", nombre: "Geimilys Karisbel Gascon Polo", seccion: "Primer año seccion A"},
  
  {id: 15, cedula: "V-36765014", nombre: "Yeikert Alejandro Brito Valderrey", seccion: "Primer año seccion A"},
  
  {id: 16, cedula: "V-36765646", nombre: "Aletza Jiovanna Kochmansky Contreras", seccion: "Primer año seccion A"},

  {id: 17, cedula: "V-36849555", nombre: "Mabel Paola Ramonys Jimenez", seccion: "Primer año seccion A"},
  
  {id: 18, cedula: "V-36940752", nombre: "Jorgelis Valentina Rodriguez Palomo", seccion: "Primer año seccion A"},

  {id: 19, cedula: "V-37044134", nombre: "Marianela Jose Davalillo Leon", seccion: "Primer año seccion A"},
  
  {id: 20, cedula: "V-37341117", nombre: "Eudismarys Esther Mata Palomares", seccion: "Primer año seccion A"},
  
  {id: 21, cedula: "V-37460645", nombre: "Aroon Sebastian Guevara Ramirez", seccion: "Primer año seccion A"},
  
  {id: 22, cedula: "V-33866403", nombre: "Nicolas Alberto Salazar Rondon", seccion: "Primer año seccion B"},
  
  {id: 23, cedula: "V-34794396", nombre: "Diosmar Alexander Arteaga Marcano", seccion: "Primer año seccion B"},

  {id: 24, cedula: "V-35020454", nombre: "Javierlys Josefina Salazar Mayo", seccion: "Primer año seccion B"},

  {id: 25, cedula: "V-35084536", nombre: "Jhuliannys Eliamar Valentina Rodriguez Marquez", seccion: "Primer año seccion B"},

  {id: 26, cedula: "V-35113889", nombre: "Williams Alberto Mendoza Marcano", seccion: "Primer año seccion B"},

  {id: 27, cedula: "V-35155676", nombre: "Jose Miguel Idrogo Moreno", seccion: "Primer año seccion B"},

  {id: 28, cedula: "V-36104817", nombre: "Robert Jose Rodriguez Brito", seccion: "Primer año seccion B"},

  {id: 29, cedula: "V-36203616", nombre: "Isaias Daniel Reyes Giovetti", seccion: "Primer año seccion B"},

  {id: 30, cedula: "V-36247886", nombre: "Yoimar Sofia Marcano Torres", seccion: "Primer año seccion B"},

  {id: 31, cedula: "V-36249573", nombre: "Ronnibeth Sharlot Urquia Brito", seccion: "Primer año seccion B"},

  {id: 32, cedula: "V-36251674", nombre: "Rogervis Nicoll Brito Brito", seccion: "Primer año seccion B"},

  {id: 33, cedula: "V-36421276", nombre: "Miranda Edecia Colina Moya", seccion: "Primer año seccion B"},

  {id: 34, cedula: "V-36432829", nombre: "Andreilismar Valentina Tocore Tocore", seccion: "Primer año seccion B"},
  
  {id: 35, cedula: "V-36907540", nombre: "Yarley Carolina Zabala Diaz", seccion: "Primer año seccion B"},

  {id: 36, cedula: "V-36959322", nombre: "Mauricio Javier Dominguez Rojas", seccion: "Primer año seccion B"},

  {id: 37, cedula: "V-37015246", nombre: "Rosibania Trudis Ivette Gonzalez Zapata", seccion: "Primer año seccion B"},

  {id: 38, cedula: "V-37142192", nombre: "Anabella Sofia Leon Lima", seccion: "Primer año seccion B"},

  {id: 39, cedula: "V-11318658489", nombre: "Jose Angel Urrieta Gonzalez", seccion: "Primer año seccion B"},

  {id: 40, cedula: "V-11324119398", nombre: "Nicole Gisell Lopez Martinez", seccion: "Primer año seccion B"},

  {id: 41, cedula: "V-11325512624", nombre: "Angel Adrian Dimas Luces", seccion: "Primer año seccion B"},

  {id: 42, cedula: "V-11425125753", nombre: "Karlis Alejandra Ferman Rosquel", seccion: "Primer año seccion B"},
  
  {id: 43, cedula: "V-34780516", nombre: "Maria Fernanda Rodriguez Moreno", seccion: "Primer año seccion C"},

  {id: 44, cedula: "V-34780553", nombre: "Jannelys Gabriela Lopez Perez", seccion: "Primer año seccion C"},

  {id: 45, cedula: "V-36100826", nombre: "Henry Ramon Velazquez Perez", seccion: "Primer año seccion C"},

  {id: 46, cedula: "V-36108035", nombre: "Isaac David Santoyo Danzer", seccion: "Primer año seccion C"},

  {id: 47, cedula: "V-36606089", nombre: "Zulismar Gabriela Palomo Silva", seccion: "Primer año seccion C"},

  {id: 48, cedula: "V-37556308", nombre: "Leoskarly Nikol Cabral Sarmiento", seccion: "Primer año seccion C"},

  {id: 49, cedula: "V-11319858390", nombre: "Fabian Alejandro Frutille Baquero", seccion: "Primer año seccion C"},

  {id: 50, cedula: "V-11321385005", nombre: "Samira Sthefania Olivares Gurra", seccion: "Primer año seccion C"},
  
  {id: 51, cedula: "V-34154240", nombre: "Jasep Alcangel Idrogo Moreno", seccion: "Segundo año seccion A"},

  {id: 52, cedula: "V-34285119", nombre: "Jhonny Alejandro Rendayyo Montenegro", seccion: "Segundo año seccion A"},

  {id: 53, cedula: "V-34285130", nombre: "Melanis Anthonella Mata Farfan", seccion: "Segundo año seccion A"},

  {id: 54, cedula: "V-34296539", nombre: "Deixy Alejandra Urquia Bermudez", seccion: "Segundo año seccion A"},

  {id: 55, cedula: "V-34423362", nombre: "Orangel Jose Urrieta Gonzalez", seccion: "Segundo año seccion A"},

  {id: 56, cedula: "V-34423390", nombre: "Jhojan Orlando Albeiro Rodriguez Rodriguez", seccion: "Segundo año seccion A"},

  {id: 57, cedula: "V-34470400", nombre: "Querub Jocabeth Guzman Beria", seccion: "Segundo año seccion A"},

  {id: 58, cedula: "V-34470441", nombre: "Moises Samuel Valenzuela Casanova", seccion: "Segundo año seccion A"},

  {id: 59, cedula: "V-34474342", nombre: "Samme Del Jesus Gonzalez Celis", seccion: "Segundo año seccion A"},

  {id: 60, cedula: "V-34484470", nombre: "Randy Josue Jimenez Reyna", seccion: "Segundo año seccion A"},

  {id: 61, cedula: "V-34544429", nombre: "Dianlet Gabriela Rondon Wells", seccion: "Segundo año seccion A"},
 
  {id: 62, cedula: "V-34553656", nombre: "Robert Daniels Zambrano Baeza", seccion: "Segundo año seccion A"},
 
  {id: 63, cedula: "V-34692249", nombre: "Efranluis Jesus Silvia Guzman", seccion: "Segundo año seccion A"},
 
  {id: 64, cedula: "V-34710852", nombre: "Belinda Johanna Verde Rodriguez", seccion: "Segundo año seccion A"},

  {id: 65, cedula: "V-34721159", nombre: "Jesus Santiago Velasquez Marcano", seccion: "Segundo año seccion A"},

  {id: 66, cedula: "V-34781031", nombre: "Jesuliangel Del Valle Carrion Zulueta", seccion: "Segundo año seccion A"},

  {id: 67, cedula: "V-34794381", nombre: "Ana Victoria Cedeño Zapata", seccion: "Segundo año seccion A"},

  {id: 68, cedula: "V-34858038", nombre: "Emily Carolina Lopez Romero", seccion: "Segundo año seccion A"},

  {id: 69, cedula: "V-34942003", nombre: "Luciano Jonas Medina Muñoz", seccion: "Segundo año seccion A"},

  {id: 70, cedula: "V-35000728", nombre: "Dariannys Sharaid Bolivar Rondon", seccion: "Segundo año seccion A"},

  {id: 71, cedula: "V-35039776", nombre: "Ana Cristina Bompart Figuera", seccion: "Segundo año seccion A"},

  {id: 72, cedula: "V-35131810", nombre: "Arianna Sophia Marcano Garrido", seccion: "Segundo año seccion A"},

  {id: 73, cedula: "V-35146248", nombre: "Chairitt Vanessa Figuera Robles", seccion: "Segundo año seccion A"},

  {id: 74, cedula: "V-35180052", nombre: "Dairismar Cirianny Gonzalez Cerrano", seccion: "Segundo año seccion A"},

  {id: 75, cedula: "V-36129816", nombre: "Leonardo Elias Rodriguez Mendoza", seccion: "Segundo año seccion A"},

  {id: 76, cedula: "V-36180114", nombre: "Lisandrys Del Valle Colina Gomez", seccion: "Segundo año seccion A"},

  {id: 77, cedula: "V-36296168", nombre: "Sonismar Sofia Gomez Gonzalez", seccion: "Segundo año seccion A"},

  {id: 78, cedula: "V-36358208", nombre: "Greidys Victoria Calderon Flores", seccion: "Segundo año seccion A"},

  {id: 79, cedula: "V-36504998", nombre: "Pedro Jose Manuel Bermudez Rivero", seccion: "Segundo año seccion A"},

  {id: 80, cedula: "V-36504998", nombre: "Elias Gabriel Davalillo Rivero", seccion: "Segundo año seccion A"},

  {id: 81, cedula: "V-36550624", nombre: "Antonella Giovanna Del Valle Avila Narvaez", seccion: "Segundo año seccion A"},

  {id: 82, cedula: "V-36638448", nombre: "Isaac Enrique Martinez Borrome", seccion: "Segundo año seccion A"},

  {id: 83, cedula: "V-36965689", nombre: "Joseliandrys Del Valle Almea Mata", seccion: "Segundo año seccion A"},

  {id: 84, cedula: "V-11120160984", nombre: "Reyber Alejandro Rojas Leon", seccion: "Segundo año seccion A"},

  {id: 85, cedula: "V-34023375", nombre: "Leisly Desire Velasquez Perez", seccion: "Segundo año seccion B"},

  {id: 86, cedula: "V-34141266", nombre: "Cleudomal Jose Guariguata Davalillo", seccion: "Segundo año seccion B"},

  {id: 87, cedula: "V-34196928", nombre: "Frederick Gabriel Marcano Jaimez", seccion: "Segundo año seccion B"},

  {id: 88, cedula: "V-34561305", nombre: "Andreilys Elizabeth Nolasco Bonaldy", seccion: "Segundo año seccion B"},

  {id: 89, cedula: "V-34778147", nombre: "Erick John Jaime Gonzalez ", seccion: "Segundo año seccion B"},

  {id: 90, cedula: "V-34905697", nombre: "Ashley Sophia Obdola Naranjo", seccion: "Segundo año seccion B"},

  {id: 91, cedula: "V-36018351", nombre: "Fabian Alejandro Hernandez Martinez", seccion: "Segundo año seccion B"},

  {id: 92, cedula: "V-36145249", nombre: "Wiliam Jose Rojas Danzer", seccion: "Segundo año seccion B"},

  {id: 93, cedula: "V-36153186", nombre: "Jesseannys Gabriela Diaz Moreno", seccion: "Segundo año seccion B"},

  {id: 94, cedula: "V-36565395", nombre: "Roxana Valentina Pacheco Palomo", seccion: "Segundo año seccion B"},

  {id: 95, cedula: "V-37132564", nombre: "Camilo Eduardo Araque Herrera", seccion: "Segundo año seccion B"},

  {id: 96, cedula: "V-37507591", nombre: "Mary Alejandra Carrero Diaz", seccion: "Segundo año seccion B"},

  {id: 97, cedula: "V-11115335862", nombre: "Antonella Jonielys Flores Giralda", seccion: "Segundo año seccion B"},

  {id: 98, cedula: "V-11218073541", nombre: "Kleviannys Alina Palomares Martinez", seccion: "Segundo año seccion B"},

  {id: 99, cedula: "V-11219859622", nombre: "Michell Liliannys Meza Leon", seccion: "Segundo año seccion B"},

  {id: 100, cedula: "V-11221096890", nombre: "Josman Octavio Bermudez Acosta", seccion: "Segundo año seccion B"},

  {id: 101, cedula: "V-11221385005", nombre: "Kamila Sofia Olivares Guerra", seccion: "Segundo año seccion B"},

  {id: 102, cedula: "V-11320160059", nombre: "Jhade Danilys Milanos Diaz", seccion: "Segundo año seccion B"},

  {id: 103, cedula: "V-33729393", nombre: "Ivana Jeanly Jimenez Purgarita", seccion: "Tercer año seccion U"},

  {id: 104, cedula: "V-33941112", nombre: "Rene Alejandro Delgado Pinto", seccion: "Tercer año seccion U"},

  {id: 105, cedula: "V-33949632", nombre: "Jose Alejandro Correa Martinez", seccion: "Tercer año seccion U"},

  {id: 106, cedula: "V-34023386", nombre: "Darignis Carixa Marcano Hernandez", seccion: "Tercer año seccion U"},

  {id: 107, cedula: "V-34023390", nombre: "Natasha Ashleannys Del Valle Fernandez Martinez", seccion: "Tercer año seccion U"},

  {id: 108, cedula: "V-34029368", nombre: "Alejandro Josue Carrion Bolaños", seccion: "Tercer año seccion U"},

  {id: 109, cedula: "V-34029377", nombre: "Gabriela Alexandra Herrera Martinez", seccion: "Tercer año seccion U"},

  {id: 110, cedula: "V-34029384", nombre: "Lisyeli Eluney Brito Morillo", seccion: "Tercer año seccion U"},

  {id: 111, cedula: "V-34036725", nombre: "Dionnys Emiliano Salguera Prada", seccion: "Tercer año seccion U"},

  {id: 112, cedula: "V-34056469", nombre: "Jessi Del Jesus Carrasquel Berra", seccion: "Tercer año seccion U"},

  {id: 113, cedula: "V-34056487", nombre: "Mayha Victoria Lopez Ramirez", seccion: "Tercer año seccion U"},

  {id: 114, cedula: "V-34056489", nombre: "Jean Franco Reyes Malpica", seccion: "Tercer año seccion U"},

  {id: 115, cedula: "V-34070313", nombre: "Jesus Manuel Pacheco Palomo", seccion: "Tercer año seccion U"},

  {id: 116, cedula: "V-34070345", nombre: "Lucio Jonas Medina Muñoz", seccion: "Tercer año seccion U"},

  {id: 117, cedula: "V-34112968", nombre: "Anthony Davier Robles Quintero", seccion: "Tercer año seccion U"},

  {id: 118, cedula: "V-34127348", nombre: "Yadmerys Celiannys Mata Benavides", seccion: "Tercer año seccion U"},

  {id: 119, cedula: "V-34149656", nombre: "Carlos Beltran Vasquez Gonzalez", seccion: "Tercer año seccion U"},

  {id: 120, cedula: "V-34189234", nombre: "Aida Rosangela Malave Gonzalez", seccion: "Tercer año seccion U"},

  {id: 121, cedula: "V-34207682", nombre: "Yorger Jose Martinez Rodriguez", seccion: "Tercer año seccion U"},

  {id: 122, cedula: "V-34211059", nombre: "Gabriel Emilio Gomez Jimenez", seccion: "Tercer año seccion U"},

  {id: 123, cedula: "V-34211065", nombre: "Bibiannys Del Jesus Brito Gutierrez", seccion: "Tercer año seccion U"},

  {id: 124, cedula: "V-34474299", nombre: "Miguel Henrique Estaba Figuera", seccion: "Tercer año seccion U"},

  {id: 125, cedula: "V-34593527", nombre: "Josue David Rivera Romero", seccion: "Tercer año seccion U"},

  {id: 126, cedula: "V-34601810", nombre: "Daniel Antonio Rivero Gomez", seccion: "Tercer año seccion U"},

  {id: 127, cedula: "V-34650113", nombre: "Jesus Antonio Silva Lopez", seccion: "Tercer año seccion U"},

  {id: 128, cedula: "V-34853479", nombre: "Yoselin Anahelys Heredia Valenzuela", seccion: "Tercer año seccion U"},

  {id: 129, cedula: "V-35151722", nombre: "Emiliano Rafael Zambrano Celis", seccion: "Tercer año seccion U"},

  {id: 130, cedula: "V-11116215202", nombre: "Litjania De Los Angeles Gonzalez Sarabia", seccion: "Tercer año seccion U"},

  {id: 131, cedula: "V-11125672992", nombre: "Jexulys Ariannys Fernandez Perez", seccion: "Tercer año seccion U"},
  
  {id: 132, cedula: "V-11221082784", nombre: "Sebastian Jose Moreno Mendoza", seccion: "Tercer año seccion U"}
];

// Cargar desde localStorage o usar arreglo base si no hay datos guardados
let estudiantes = JSON.parse(localStorage.getItem('registroEstudiantes')) || estudiantesIniciales;

function guardarDatos() {
  localStorage.setItem('registroEstudiantes', JSON.stringify(estudiantes));
}

// Credenciales por defecto
const USUARIO_CORRECTO = "admin";
const PASSWORD_CORRECTO = "ColegioSimonBolivar";

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  
  // Elementos DOM
  const pantallaLogin = document.getElementById("pantalla-login");
  const sistemaPrincipal = document.getElementById("sistema-principal");
  const loginForm = document.getElementById("login-form");
  const loginError = document.getElementById("login-error");
  const btnLogout = document.getElementById("btn-logout");
  const registroForm = document.getElementById("registro-estudiante-form");
  const btnImprimir = document.getElementById("btn-imprimir-main");

  // 1. MANEJO DE LOGIN
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userVal = document.getElementById("usuario").value.trim();
    const passVal = document.getElementById("password").value.trim();

    if (userVal === USUARIO_CORRECTO && passVal === PASSWORD_CORRECTO) {
      loginError.textContent = "";
      pantallaLogin.classList.add("oculto");
      sistemaPrincipal.classList.remove("oculto");
      renderizarTabla();
    } else {
      loginError.textContent = "Usuario o contraseña incorrectos.";
    }
  });

  // 2. LOGOUT
  btnLogout.addEventListener("click", () => {
    sistemaPrincipal.classList.add("oculto");
    pantallaLogin.classList.remove("oculto");
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
  });

  // 3. AGREGAR ESTUDIANTE
  registroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const cedula = document.getElementById("cedula").value.trim();
    const seccion = document.getElementById("seccion").value.trim();

    const nuevoEstudiante = {
      id: Date.now(),
      cedula,
      nombre,
      seccion
    };

    estudiantes.push(nuevoEstudiante);
    guardarDatos(); // Guardar cambios en el navegador
    registroForm.reset();
    renderizarTabla();
  });

  // 4. BINDING IMPRESIÓN A OFFICE / LINUX
  btnImprimir.addEventListener("click", () => {
    window.print();
  });
});

// ==========================================================================
// RENDERS
// ==========================================================================
function renderizarTabla() {
  const tbody = document.getElementById("tabla-cuerpo");
  tbody.innerHTML = "";

  estudiantes.forEach((est, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${est.cedula}</td>
      <td>${est.nombre}</td>
      <td>${est.seccion}</td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td class="col-acciones">
        <button class="btn-eliminar" onclick="eliminarEstudiante(${est.id})">Eliminar</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function eliminarEstudiante(id) {
  estudiantes = estudiantes.filter(est => est.id !== id);
  guardarDatos(); // Guardar cambios en el navegador
  renderizarTabla();
}