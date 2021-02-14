<template>
  <Header />
    <main id="page">
      <section class="container">
        <div class="row">
            <div class="col-sm-6 description left">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link to="/">Accueil</router-link>
                    </li>
                    <li class="breadcrumb-item active">Innovation</li>
                </ol>
              <h1>Innovation</h1>
                <h4>Chez Révolutionnez, l’innovation est au centre de notre processus de création. Nous sommes concepteurs de nos propres technologies innovantes.</h4>
                <div class="bloc">
                    <h2>Inventeur et concepteur de nos propres technologies pour la présentation de produit en commerce électronique</h2>
                    <div class="details">
                        <div class="liste">
                            <ul>
                                <li><strong>Visionneuse interactive 360°</strong> pour la présentation d’animation de produit 360°</li>
                                <li><strong>Système de prise de vue pour les produits de grandes tailles</strong> incluant stabilisateur de caméra</li>
                                <li><strong>Système analogique pour les photos haute vitesse</strong> (bientôt contrôlé numériquement)</li>
                                <li>Deux plateaux tournants manuels</li>
                                <li>Trois plateaux tournants contrôlés numériquement</li>
                            </ul>
                        </div>
                        <p>Nous innovons et travaillons constamment à l’amélioration de nos outils de pointes afin de maximiser la présentation de vos produits.</p>
                    </div>
                </div>
                <div class="CTA">
                    <a href="nous-joindre.html" class="btn btn-primary">Nous joindre</a>
                </div>
        </div>
            <div class="col-sm-6 visuel desktop-only hidden-xs">
              <iframe src="#" scrolling="no" frameborder="0"></iframe>
            </div>
        </div>
      </section>
      <!-- Portfolio  -->
      <Portfolios :previews="previews" />
      <!-- divider section -->
      <section class="container">
        <div class="row">
          <div class="col-sm-6 description left">
              <div class="bloc">
                  <h2>Nos outils en cours de conception</h2>
                  <div class="liste">
                      <ul>
                        <li>Automatisation du système de haute-vitesse avec microcontrôleur</li>
                        <li>Module de synchronisation de 5 caméras pour prise de vue multiple</li>
                        <li>«Slider motorisé timelapse»</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="col-sm-6 description right">
              <div class="bloc">
                  <h2>Nos développements futurs</h2>
                  <div class="liste">
                    <ul>
                      <li>Offrir un service de location d’Hélice holographique pour les salons.</li>
                      <li>Offrir un service de projection holographique pour les vitrines.</li>
                      <li>Offrir un service de location d’écran tactile sur pied pour les salons.</li>
                    </ul>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <section class="container CTA-bottom">
        <div class="row">
          <div class="col-xs-12">
              <div class="CTA"><a href="nous-joindre.html" class="btn btn-primary">Prendre rendez-vous</a></div>
          </div>
        </div>
      </section>
    </main>
  <Footer />
</template>

<script>
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import Portfolios from '../components/Portfolios/Portfolios.vue';

export default {
  name: "Innovation",
  components: {
    Header,
    Footer,
    Portfolios
  },
  data() {
    return {
      previews : [
        {link:"portfolio-semoir", imageUrl:"animation-360-semoir.jpg"},
        {link:"portfolio-spyder", imageUrl:"animation-360-spyder.jpg"},
        {link:"portfolio-balance-trieuse", imageUrl:"animation-360-balance-trieuse.jpg"},
        {link:"portfolio-sideBySide", imageUrl:"animation-360-sideBySide.jpg"},
      ]
    }
  }
}
</script>

<style>

</style>