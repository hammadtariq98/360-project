<template>
   <Header /> 
   <main id="page" class="fr realisation Sacsindustriels">
      <section class="container">
         <div class="row">
               <div class="col-sm-6 description left">
                  <ol class="breadcrumb">
                     <li class="breadcrumb-item">
                        <router-link to="/">Accueil</router-link>
                     </li>  
                     <li class="breadcrumb-item active">Réalisations</li>
                     <li class="breadcrumb-item active">Sacs industriels inc.</li>
                  </ol>
                  <h3>Réalisations</h3>
                  <h1>Sacs industriels inc.</h1>
                  <div class="visuel mobile-only mobo-nav">
                     <iframe src="./../assets/visionneuse/panier-hologramme-SAC-INDUSTRIELS-realisation/index.html" scrolling="no" frameborder="0"></iframe>
                  </div>
                  <h4>Révolutionnez a été en mesure de combler le besoin du client grâce à ses connaissances techniques et sa capacité à résoudre des problèmes.</h4>
                  <div class="bloc">
                     <h2>Client</h2>
                     <div class="details">
                           <p>Sacs industriels inc.</p>
                     </div>
                  </div>
                  
                  <div class="bloc">
                     <h2>Service</h2>
                     <div class="details">
                           <p>Création de contenu pour une Hélice holographique.</p>
                     </div>
                  </div>
                  
                  <div class="bloc">
                     <h2>Année</h2>
                     <div class="details">
                           <p>2020</p>
                     </div>
                  </div>
                  <div class="bloc">
                     <h2>Demande du client</h2>
                     <div class="details">
                           <p>Réaliser des animations 360° de leurs machines agricoles.</p>
                     </div>
                  </div>
                  <div class="bloc">
                     <h2>Contexte</h2>
                     <div class="details">
                           <p>Révolutionnez a recherché pour le client les spécifications techniques de leur Hélice holographique</p>
                           <p>Puis nous avons créé des animations 360° de leurs items et s’assurant de décentrer la rotation pour donner du moment dans le but d’attirer l’attention et diriger les visiteurs vers leur kiosque. </p>
                           <p>Suite à production des animations 360°, nous avons travaillé et assemblé les images pour qu’elles s’adaptent au format vidéo du projecteur.</p>
                     </div>
                  </div>
                  <div class="CTA">
                     <router-link to="/nous-joindre" class="btn btn-primary">Nous joindre</router-link>
                  </div>
            </div>
            <div class="col-sm-6 visuel desktop-only desktop-nav">
               <iframe src="./../assets/visionneuse/panier-hologramme-SAC-INDUSTRIELS-realisation/index.html" scrolling="no" frameborder="0"></iframe>
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