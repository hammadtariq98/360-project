<template>
    <Header />
    <main id="page" class="fr animation360-dessin-technique">
        <section class="container">
            <div class="row">
                <div class="col-sm-6 description left">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link to="/">Accueil</router-link>
                        </li>
                        <li class="breadcrumb-item active">Animation 360</li>
                        <li class="breadcrumb-item active">Dessin technique 360</li>
                    </ol>
                    <h3>Animation 360</h3>
                    <h1>Dessin technique 360</h1>
                    <div class="visuel mobile-only mobo-nav">
                        <iframe src="assets/visionneuse/pelle/index.html" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <h4>Animez vos dessins techniques si vous devez faire une étude de marché et que vous peaufinez encore votre prototype.</h4>
                    <div class="bloc">
                        <h2>Quel est l’avantage&nbsp;?</h2>
                        <div class="liste">
                        <ul>
                            <li>L’animation vous permet de présenter et tester votre nouveau produit avant même que sa conception ne soit achevée.</li>
                            <li>Elle vous fait gagner du temps et vous aligne sur le meilleur concept.</li>
                        </ul>
                        </div>
                    </div>
                    <div class="bloc">
                        <h2>Comment créons-nous vos animations 360°&nbsp;?</h2>
                        <div class="liste">
                            <ul>
                                <li>Nous utilisons des images fournies par le concepteur et développées dans le logiciel AutoCad ou tout autre logiciel semblable.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bloc">
                        <h2>Quels sont les domaines d’applications&nbsp;?</h2>
                        <div class="liste">
                        <ul>
                            <li>Fabricant</li>
                            <li>Design industriel</li>
                        </ul>
                        </div>
                    </div>
                    <div class="CTA">
                        <router-link to="/nous-joindre" class="btn btn-primary">Prendre rendez-vous</router-link>
                    </div>
                </div>
                <div class="col-sm-6 visuel desktop-only  desktop-nav">
                    <iframe src="assets/visionneuse/pelle/index.html" scrolling="no" frameborder="0"></iframe>
                </div>
            </div>
        </section> 
        <Portfolios :previews="previews" />
    </main>
    <Footer />
</template>

<script>
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import Portfolios from '../components/Portfolios/Portfolios.vue';

export default {
   name:"DessinTechnique",
   components: {
    Header,
    Footer,
    Portfolios,
  },
  data() {
    return {
      previews : [
        {link:"portfolio-pelle",imageUrl: "animation-360-pelle.jpg"},
      ]
    }
  }
}
</script>


<style>

</style>