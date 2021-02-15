<template>
   <Header />
   <main id="page" class="fr realisation Innotag">
      <section class="container">
         <div class="row">
            <div class="col-sm-6 description left">
               <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                     <router-link to="/">Accueil</router-link>
                  </li>
                  <li class="breadcrumb-item active">Réalisations</li>
                  <li class="breadcrumb-item active">Distributions Innotag</li>
               </ol>
               <h3>Réalisations</h3>
               <h1>Distributions Innotag</h1>
               <div class="visuel mobile-only mobo-nav">
                  <iframe src="./../assets/visionneuse/semoir-Innotag-Distributions-realisation/index.html" scrolling="no" frameborder="0"></iframe>
               </div>
               <h4>Grâce à beaucoup de recherches et d’innovation <em>Révolutionnez</em> est la seule entreprise possédant l’expertise et les équipements adaptés aux grands produits.</h4>
               <div class="bloc">
                  <h2>Client</h2>
                  <div class="details">
                        <p>Distributions Innotag</p>
                  </div>
               </div>
               <div class="bloc">
                  <h2>Service</h2>
                  <div class="details">
                        <p>Création d’animation 360° de machineries de grandes tailles.</p>
                  </div>
               </div>
               <div class="bloc">
                  <h2>Année</h2>
                  <div class="details">
                        <p>2019</p>
                  </div>
               </div>
               <div class="bloc">
                  <h2>Demande du client</h2>
                  <div class="details">
                        <p>Le client nous a demandé de photographier ses machineries agricoles pour les présenter sur son site Web.</p>
                  </div>
               </div>
               <div class="bloc">
                  <h2>Contexte</h2>
                  <div class="details">
                     <p>Révolutionnez a utilisé ses équipements automatisés, développés et construits à l’interne pour faire les 40 photos nécessaires à des rotations plus fluides sur le net.</p>
                     <p>Les séances ont été réalisées à l’intérieur du bâtiment de l’entreprise pour faciliter le positionnement des machines.</p>
                     <p>Le client avait accès à toutes ses ressources pour la préparation et le positionnement de ses produits.</p>
                     <p>Nous nous sommes synchronisés entre la préparation et la livraison pour la prise de vue, ce qui a eu comme effet de minimiser ses dépenses.</p>
                  </div>
               </div>
               <div class="CTA">
                  <router-link to="/nous-joindre" class="btn btn-primary">Nous joindre</router-link>
               </div>
            </div>
            <div class="col-sm-6 visuel desktop-only desktop-nav">
               <iframe src="assets/visionneuse/semoir-Innotag-Distributions-realisation/index.html" scrolling="no" frameborder="0"></iframe>
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