function menu(){
    var menuComponent = document.getElementById("menuComponent");
    menuComponent.innerHTML = `
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <a class="navbar-brand" href="index.html">
            <img src="img/Foto_perfil.jpg" alt="Foto Perfil" style="width:60px;">
            Sebastian Garzon
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="portafolio.html">Portafolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="acerca_de_mi.html">Acerca de mi</a>
                </li>
            </ul>
        </div>
    </nav>
`;
}

function pieDePagina(){
    var fecha = new Date().getFullYear();
    console.log(fecha);
    var pieDePagina = document.getElementById("pieDePaginaComponent");
    pieDePagina.innerHTML = `
    <footer class="footer">
    <hr>
    <div class="row">
        <div class="col-md-4 col-xs-12 text-center center-block">
            <p>&copy; ${fecha} - Sebastian Garzon</p>
        </div>
        <div class="col-md-4 col-xs-6 text-center center-block">
            <p><u class="text-info">
                    <a href="mailto:sebastiangarzon2001@gmail.com"><img src="img/gmail-logo.png">sebastiangarzon2001@gmail.com</a>
                </u>
            </p>
        </div>
        <div class="col-md-4 col-xs-6 text-center center-block">
            <p>Sigueme en mis redes sociales</p>
            <a href="https://www.instagram.com/sebas_racrag/" target="_blank"><img src="img/ins.png" /></a>
            <a href="https://www.facebook.com/profile.php?id=100035645201775" target="_blank"><img src="img/fb.png" /></a>
            <a href="https://api.whatsapp.com/send?phone=573228623317&text=" target="_blank"><img src="img/wa.png" /></a>
            <a href="https://www.youtube.com/channel/UC2l5lWbPD5Knl6o9jADAQBg" target="_blank"><img src="img/yt.png" /></a>
        </div>
    </div>
    </footer>
`;
}