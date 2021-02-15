<template>
   <Header />
   <main id="page" class="fr realisation Fibrobec">
      <section class="container">
         <div class="row">
               <div class="col-sm-6 description left">
                  <ol class="breadcrumb">
                     <li class="breadcrumb-item">
                        <router-link to="/">Accueil</router-link>
                     </li>
                     <li class="breadcrumb-item active">Réalisations</li>
                     <li class="breadcrumb-item active">Fibrobec</li>
                  </ol>
                  <h3>Réalisations</h3>
                  <h1>Fibrobec</h1>
                  <div class="visuel mobile-only mobo-nav">
                     <iframe src="./../assets/visionneuse/wild-FIBROBEC-realisation/index.html" scrolling="no" frameborder="0"></iframe>
                  </div>
                  <h4>Révolutionnez a su se démarquer par ses équipements spécialisés d’animation 360° tout en réduisant le temps et les coûts.</h4>
                  <div class="bloc">
                     <h2>Client</h2>
                     <div class="details">
                           <p>Fibrobec</p>
                     </div>
                  </div>
                  <div class="bloc">
                     <h2>Service</h2>
                     <div class="details">
                           <p>Création d’animation de produits 360° pour site Web</p>
                     </div>
                  </div>
                  <div class="bloc">
                     <h2>Année</h2>
                     <div class="details">
                           <p>2018</p>
                     </div>
                  </div>
                  <div class="bloc">
                     <h2>Demande du client</h2>
                     <div class="details">
                           <p>Le client nous a demandé de photographier leurs boîtes de fibre de verre pour des camionnettes.</p>
                     </div>
                  </div>
                  <div class="bloc">
                     <h2>Contexte</h2>
                     <div class="details">
                           <p>Révolutionnez se demande comment photographier sur 360 degrés des produits de grandes tailles tout en demeurant dans de coûts raisonnables.</p>
                           <p>Leurs produits étaient tous présentés sur des camions et vus seulement de l’arrière, il n’était pas possible pour les visiteurs de voir l'intégralité des boîtes de fibre de verre.</p>
                           <p>Nous avons donc construit les équipements assistés par microcontrôleur pour faire la prise de vue en tournant autour du produit.</p>
                           <p>Les photos ont été prises à l’extérieur dans leur enclos d’entreposage. Nous avons ajouté des images pour animer l’ouverture des portes et présenter l’intérieur.</p>
                           <p>En utilisant nos équipements, nous avons réduit les coûts, nous avons réalisé les photos des 9 items en seulement 4 heures en utilisant leurs supports de manutention.</p>
                           <p>Leur première séance avait été réalisée sur deux jours en installant un studio temporaire à l’intérieur de l’usine et des véhicules comme support.</p>
                     </div>
                  </div>
                  <div class="CTA">
                        <router-link to="/nous-joindre" class="btn btn-primary">Nous joindre</router-link>
                  </div>
            </div>
               <div class="col-sm-6 visuel desktop-only desktop-nav">
                  <iframe src="./../assets/visionneuse/wild-FIBROBEC-realisation/index.html" scrolling="no" frameborder="0"></iframe>
            </div>
         </div>
      </section>
   </main>
   <Footer />
</template>

<script>
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
// import Portfolios from '../components/Portfolios/Portfolios.vue';

export default {
   name:"UnitairesSerie",
   components: {
    Header,
    Footer,
  },
}
</script>

<style>

</style>