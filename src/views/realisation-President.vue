<template>
   <Header />
   <main id="page" class="fr realisation President">
      <section class="container">
         <div class="row">
            <div class="col-sm-6 description left">
               <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                     <router-link to="/">Accueil</router-link>
                  </li>
                  <li class="breadcrumb-item active">Réalisations</li>
                  <li class="breadcrumb-item active">Portes et Fenêtres Président</li>
               </ol>
               <h3>Réalisations</h3>
               <h1>Portes et Fenêtres Président</h1>
               <div class="visuel mobile-only mobo-nav">
                  <iframe src="./../assets/visionneuse/fenetre-PORTES-FENETRES-PRESIDENT-realisation/index.html" scrolling="no" frameborder="0"></iframe>
               </div>
               <h4>Révolutionnez a su se démarquer par sa solution innovante d’animation des fenêtres 360°.</h4>
               <div class="bloc">
                  <h2>Client</h2>
                  <div class="details">
                        <p>Portes et Fenêtres Président</p>
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
                        <p>Le client nous a demandé de photographier leurs fenêtres en vinyle blanc pour les présenter sur leur site web.</p>
                  </div>
               </div>
               <div class="bloc">
                  <h2>Contexte</h2>
                  <div class="details">
                     <p>Révolutionnez se demande comment faire ressortir une fenêtre blanche sur un fond blanc pour attirer l'attention des visiteurs en ligne?</p>
                     <p>Nous pensions qu’il serait plus efficace de montrer des animations, pour bien voir la mécanique de la fenêtre et créer du mouvement pour attirer l’attention des clients potentiels.</p>
                     <p>Nous avons donc construit notre premier plateau tournant d’un diamètre de 5 pieds, pour prendre des photos de tous les angles.</p>
                     <p>De plus nous avons pris soin d’animer le battant en plus de la rotation 360°. Nous avons fait le montage de plus de 48 photos et nous l’avons mis en ligne, pour que le client puisse voir le résultat.</p>
                     <p>Le client a rapidement répondu et s’est exprimé avec 3 lettres seulement «<strong>WOW</strong>»</p>
                  </div>
               </div>
               <div class="CTA">
                  <router-link to="/nous-joindre" class="btn btn-primary">Nous joindre</router-link>
               </div>
            </div>
            <div class="col-sm-6 visuel desktop-only desktop-nav">
               <iframe src="./../assets/visionneuse/fenetre-PORTES-FENETRES-PRESIDENT-realisation/index.html" scrolling="no" frameborder="0"></iframe>
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