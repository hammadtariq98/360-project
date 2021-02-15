<template>
    <Header />
    <main id="page" class="fr produit-photos-unitaires">
        <section class="container">
            <div class="row">
                <div class="col-sm-6 description left">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link to="/">Accueil</router-link>
                        </li>
                        <li class="breadcrumb-item active">Photos produit</li>
                        <li class="breadcrumb-item active">Photos unitaires ou en série</li>
                    </ol>
                    <h3>Photos produit</h3>
                    <h1>Photos unitaires ou en série</h1>
                    <div class="visuel mobile-only mobo-nav">
                        <img src="./../assets/images/background-produit-photos-unitaires.png" alt="Photo de produit, montre-bracelet couleur or et cadran noir">
                    </div>
                    <h4>Le pouvoir des photos de produits sur l’image projetée par votre entreprise. Les images ont la capacité de vous mettre en valeur, ou de vous discréditer.</h4>
                    <div class="bloc">
                        <h2>Qu’est-ce qu’une bonne image en commerce électronique&nbsp;?</h2>
                        <div class="liste">
                            <ul>
                                <li>Mets votre produit de l’avant</li>
                                <li>Démontre la qualité du produit</li>
                                <li>Permet de voir les détails</li>
                                <li>Suscite l’émotion et incite à l'action d’achat</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bloc">
                        <h2>Pourquoi faire appel à un professionnel&nbsp;?</h2>
                        <div class="liste">
                            <ul>
                                <li>L’image est la première chose que votre acheteur regarde et qui peut provoquer l’acte d’achat si le visuel est bien choisi.</li>
                                <li>Les internautes sont passés maîtres dans la recherche de produit et d’achat en ligne et ils s’attendent à une expérience d’achat similaire à ce qu’ils vivent chez les grands de ce monde, Amazon, Apple, Microsoft...</li>
                                <li>Optez donc pour des visuels de qualité professionnelle et évitez les photos trop petites, mal cadrées ou pixelliser.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="CTA">
                        <router-link to="/nous-joindre" class="btn btn-primary">Renseignez-vous</router-link>
                    </div>
                </div>
                <div class="col-sm-6 visuel desktop-only hidden-xs">
                    <img src="./../assets/images/background-produit-photos-unitaires.png" alt="Photo de produit, montre-bracelet couleur or et cadran noir">
                </div>
            </div>
        </section>
        <Portfolios :previews="previews" />
        <section class="container">
            <div class="row">
                <div class="col-sm-6 description left">
                    <div class="bloc">
                        <h2>Pourquoi nous choisir&nbsp;?</h2>
                        <div class="liste">
                            <ul>
                                <li>Pour notre grande expertise à mettre en valeur vos produits par la lumière.</li>
                                <li>Nous disposons d’équipement de pointe pour réaliser des séries photo de haute qualité, sous tous les angles, dont des plateaux tournants utilisés pour les photos 360°.</li>
                                <li>Nous avons conçu des équipements spécialisés pour photographier des produits lustrés.</li>
                                <li>Nous avons des accréditations des Photographes professionnels du Canada (PPOC)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 description right">
                    <div class="bloc">
                        <h2>Témoignage</h2>
                        <div class="temoignage">
                            <div>«&nbsp;J'aimerais souligner le professionnalisme de l'équipe de Révolutionnez.&nbsp;»</div>
                            <div class="signature">- Jean-Luc Beaudoin, Fonction administrateur, Aimant La Vie</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container CTA-bottom">
            <div class="row">
                <div class="col-xs-12">
                    <div class="CTA">
                        <router-link to="/nous-joindre" class="btn btn-primary">Prendre rendez-vous</router-link>
                    </div>
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
   name:"UnitairesSerie",
   components: {
    Header,
    Footer,
    Portfolios
  },
  data() {
    return {
      previews : [
        {link:"th-unit-rembrandt-6547", imageUrl:"th-unit-rembrandt-6547.jpg"},
        {link:"th-unit-rembrandt-0168.jpg", imageUrl:"th-unit-rembrandt-0168.jpg"},
        {link:"th-unit-rembrandt-6028.jpg", imageUrl:"th-unit-rembrandt-6028.jpg"},
        {link:"th-unit-rembrandt-6540", imageUrl:"th-unit-rembrandt-6540.jpg"},
        {link:"th-unit-rembrandt-6546", imageUrl:"th-unit-rembrandt-6546.jpg"},
        {link:"th-unit-ROB_9704", imageUrl:"th-unit-ROB_9704.jpg"},
        {link:"th-unit-rembrandt-6549", imageUrl:"th-unit-rembrandt-6549.jpg"},
        {link:"th-unit-rembrandt-6558", imageUrl:"th-unit-rembrandt-6558.jpg"},
        {link:"th-unit-DSC0927", imageUrl:"th-unit-DSC0927.jpg"},
        {link:"th-unit-rembrandt-0154", imageUrl:"th-unit-rembrandt-0154.jpg"},
        {link:"th-unit-rembrandt-6588", imageUrl:"th-unit-rembrandt-6588.jpg"},
        {link:"th-unit-ROB_1366", imageUrl:"th-unit-ROB_1366.jpg"},
      ],
    }
  },
}
</script>

<style>

</style>