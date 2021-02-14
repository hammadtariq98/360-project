<template>
    <Header />
    <main id="page" class="fr animation360-hologramme">
        <section class="container">
            <div class="row">
                <div class="col-sm-6 description left">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link to="/">Accueil</router-link>
                        </li>
                        <li class="breadcrumb-item active">Animation 360</li>
                        <li class="breadcrumb-item active">Hologramme 360</li>
                    </ol>
                    <h3>Animation 360</h3>
                    <h1>Hologramme 360</h1>
                    <div class="visuel mobile-only mobo-nav">
                        <iframe src="assets/visionneuse/enveloppe-hologramme/index.html" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <h4>Une manière innovante pour présenter un produit virtuellement et en 3D tout en offrant une expérience immersive aux visiteurs. Ils auront l’impression de vivre avec le produit.</h4>
                    <div class="bloc">
                        <h2>Dans quel cas les utiliser&nbsp;?</h2>
                        <div class="liste">
                            <ul>
                                <li>C’est l’outil idéal pour faire des publicités 3D et attirer l'attention de vos prospects.</li>
                                <li>C’est aussi très adapté pour présenter des objets volumineux, <strong>comme une machinerie lourde</strong> dans une salle d’exposition sans avoir à la déplacer physiquement.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bloc">
                        <h2>Quels sont les domaines d’applications&nbsp;?</h2>
                        <div class="liste">
                            <ul>
                                <li>Centre commercial</li>
                                <li>Vitrine de boutique</li>
                                <li>Salle d’exposition</li>
                                <li>Événement</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bloc">
                        <h2>Comment réalisons-nous vos hologrammes 360°&nbsp;?</h2>
                        <div class="details">À partir d’une animation 360° nous préparons un fichier pour le projeter avec une hélice holographique qui crée l’illusion d’un produit 3D qui flotte et bouge dans les airs.</div>
                    </div>
                    <div class="CTA">
                        <a href="nous-joindre.html" class="btn btn-primary">Prendre rendez-vous</a>
                    </div>
                </div>
                <div class="col-sm-6 visuel desktop-only desktop-nav">
                    <iframe src="assets/visionneuse/enveloppe-hologramme/index.html" scrolling="no" frameborder="0"></iframe>
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
   name:"Hologramme",
   components: {
    Header,
    Footer,
    Portfolios,
  },
  data() {
    return {
      previews : [
        {link:"portfolio-enveloppe-hologramme", imageUrl:"animation-360-enveloppe.jpg"},
        {link:"portfolio-panier-hologramme", imageUrl:"animation-360-panier.jpg"},
        {link:"portfolio-plat-hologramme", imageUrl:"animation-360-plat.jpg"},
      ]
    }
  }
}
</script>

<style>

</style>