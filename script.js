let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Ocular el menu una vez que se selecciona una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("figma");
        habilidades[3].classList.add("powerbi");
        habilidades[4].classList.add("msoffice");
        habilidades[5].classList.add("python");
        habilidades[6].classList.add("wordpress");
        habilidades[7].classList.add("mysql");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajoenequipo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("dedicacion");
        habilidades[12].classList.add("gestiondeconflictos");
        habilidades[13].classList.add("manejodelestres");
        habilidades[14].classList.add("liderazgo");
        habilidades[15].classList.add("adaptabilidad");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//Funcionamiento del boton de descargaDeCV
document.getElementById('descargarCV').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = './CV/CV. 2023 SOTO SANA NICOLL STHEFFANY.pdf';
    link.download = 'CV_SotoSanaNicoll.pdf';
    link.click();
});