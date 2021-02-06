<template>
<div>
    <nav class="fixed-top navbar-nav desktop-nav">
        <div class="container">
            <div class="row">
                <div class="col-sm-2">
                    <div class="logo"><router-link to="/"><img src="./../../assets/images/logo.png" alt="Logo Révolutionnez"></router-link></div>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-12">
                            <ul class="menu-secondaire">
                                <li><a href="apropos.html">À propos</a></li>
                                <li><a href="soumission.html">Soumission</a></li>
                                <li><a href="nous-joindre.html">Nous joindre</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <ul class="nav navbar-nav">
                                <li class="solo">
                                    <router-link to="/innovation">Innovation</router-link>
                                </li>
                                <li class="liste">
                                    <div class="dropdown">
                                        <a href="#" class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Animation 360 <span class="caret"></span></a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li><a href="animation360-visionneuse.html">Notre visionneuse</a></li>
                                            <li><a href="animation360-hologramme.html">Hologramme 360</a></li>
                                            <li><a href="animation360-dessin-technique.html">Dessin technique 360</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="liste">
                                    <div class="dropdown">
                                        <a href="#" class="dropdown-toggle" id="dropdownProduit" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Photos produit <span class="caret"></span></a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownProduit">
                                            <li><a href="produit-photos-unitaires-serie.html">Photos unitaires ou en série</a></li>
                                            <li><a href="produit-photos-haute-vitesse.html">Photos haute vitesse</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="liste">
                                    <div class="dropdown">
                                        <a href="#" class="dropdown-toggle" id="dropdownRealisation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Réalisations <span class="caret"></span></a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownRealisation">
                                            <li><a href="realisation-President.html">Portes et fenêtres Président</a></li>
                                            <li><a href="realisation-Fibrobec.html">Fibrobec</a></li>
                                            <li><a href="realisation-IASO.html">IASO</a></li>
                                            <li><a href="realisation-Sacsindustriels.html">Sacs industriels inc.</a></li>
                                            <li><a href="realisation-Innotag.html">Distributions Innotag</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </nav>
    <section class="container-fluid mobo-nav">
        <div class="row bande-top">
            <div class="col-12">
                <div class="row">
                    <div class="col-7 logo">
                        <router-link to="/">
                            <img src="./../../assets/images/logo.png" alt="Logo Révolutionnez"/>
                        </router-link>
                    </div>
                    <div class="col-5 navbar-header">
                        <div class="hamburger">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="assist"><a data-toggle="collapse" data-target=".navbar-collapse">MENU</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row section-menu">
            <div class="col-12">
                <div class="navbar-default">
                    <div class="collapse navbar-collapse">
                        <div class="col-12" style="padding:0;">
                            <div class="row menu">
                                <div class="col-12" style="padding:0;">
                                    <div class="row menu-secondaire">
                                        <div class="col-6 ms1"><a href="#">À propos</a></div>
                                        <div class="col-6 ms2"><a href="soumission.html">Soumission</a></div>
                                        <div class="col-6 ms3"><a href="nous-joindre.html">Nous joindre</a></div>
                                    </div>
                                    <div id="accordion">
                                        <div class="solo"><a href="innovation.html">Innovation</a></div>
                                        <div id="headingOne" class="title" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Animation 360<span class="caret"></span></div>
                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <ul>
                                                <li><a href="animation360-visionneuse.html">Notre visionneuse</a></li>
                                                <li><a href="animation360-hologramme.html">Hologramme 360</a></li>
                                                <li><a href="animation360-dessin-technique.html">Dessin technique 360</a></li>
                                            </ul>
                                        </div>
                                        <div id="headingTwo" class="title" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Photos produit<span class="caret"></span></div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <ul>
                                                <li><a href="#">Photos unitaires ou en série</a></li>
                                                <li><a href="produit-photos-haute-vitesse.html">Photos haute vitesse</a></li>
                                            </ul>
                                        </div>
                                        <div id="headingThree" class="title" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Réalisations<span class="caret"></span></div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion" >
                                            <ul>
                                                <li><a href="realisation-President.html">Portes et fenêtres Président</a></li>
                                                <li><a href="realisation-Fibrobec.html">Fibrobec</a></li>
                                                <li><a href="realisation-IASO.html">IASO</a></li>
                                                <li><a href="realisation-Sacsindustriels.html">Sacs industriels inc.</a></li>
                                                <li><a href="realisation-Innotag.html">Distributions Innotag</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name:"Header"
}
</script>
