<template>
   <Header />
   <main  id="page" class="fr realisation IASO">
      <section class="container">
         <div class="row">
               <div class="col-sm-6 description left">
                  <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                           <router-link to="/">Accueil</router-link>
                        </li>
                     <li class="breadcrumb-item active">Réalisations</li>
                     <li class="breadcrumb-item active">IASOx</li>
                  </ol>
                  <h3>Réalisations</h3>
                  <h1>IASO</h1>
                  <div class="visuel mobile-only mobo-nav">
                     <iframe src="assets/visionneuse/bonnet-IASO-realisation/index.html" scrolling="no" frameborder="0"></iframe>
                  </div>
                  <h4>Révolutionnez a su adapter sa façon de faire et ses équipements pour présenter des animations 360° des bonnets de chimio portés par une personne.</h4>
                  <div class="bloc">
                     <h2>Client</h2>
                     <div class="details">
                           <p>IASO</p>
                     </div>
                  </div>
                  <div class="bloc">
                     <h2>Service</h2>
                     <div class="details">
                           <p>Création d’animation 360° pour présenter ses bonnets de chimio.</p>
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
                           <p>La cliente nous a demandé de photographier ses bonnets de chimio en bambou naturel portés par une personne pour les vendre sur son site Web.</p>
                     </div>
                  </div>
                  <div class="bloc">
                     <h2>Contexte</h2>
                     <div class="details">
                           <p>Révolutionnez a dû prévoir une installation particulière pour garder la rotation de la personne toujours centrée.</p>
                           <p>Présenter des bonnets demande de cadrer les photos d’assez près, ce qui demande beaucoup de précision dans la préparation et une discipline de la part du modèle.</p>
                           <p>La séance s’est réalisée en studio dans une ambiance de grande humanité. Partager l’intimité d’une femme qui a perdu ses cheveux, sentir son bonheur d’être et sa joie de vivre est inspirant pour moi. Ça m’aide à garder en mémoire que nous tous vulnérables.</p>
                           <p>Avec une préparation adéquate, nous avons été en mesure de présenter les bonnets de chimio dans une rotation complète ainsi que leurs détails.</p>
                     </div>
                  </div>
                  <div class="CTA">
                        <router-link to="/nous-joindre" class="btn btn-primary">Nous joindre</router-link>
                  </div>
            </div>
            <div class="col-sm-6 visuel desktop-only desktop-nav">
               <iframe src="assets/visionneuse/bonnet-IASO-realisation/index.html" scrolling="no" frameborder="0"></iframe>
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
   name:"UnitairesSerie",
   components: {
    Header,
    Footer,
    Portfolios
  },
  data() {
    return {
      previews : [
        {link:"portfolio-bandeau", imageUrl:"animation-360-bandeau.jpg"},
        {link:"portfolio-bonnet", imageUrl:"animation-360-bonnet.jpg"},
        {link:"portfolio-bonnet-rouge", imageUrl:"animation-360-bonnet-rouge.jpg"}
      ],
    }
  },
}
</script>

<style>

</style>