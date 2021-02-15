<template>
   <Header />
    <main id="page" class="fr animation360-visionneuse">
        <section class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 description left">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link to="/">Accueil</router-link>
                        </li>
                        <li class="breadcrumb-item active">Animation 360</li>
                        <li class="breadcrumb-item active">Notre visionneuse</li>
                    </ol>
                    <h3>Animation 360</h3>
                    <h1>Notre visionneuse</h1>
                    <div class="visuel mobile-only mobo-nav">
                        <iframe src="assets/visionneuse/nutriSow/index.html" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <h4>Humanisez l’expérience de magasinage en ligne avec des fiches produits originales en y intégrant notre module 360°.</h4>
                    <div class="bloc">
                        <h2>Démarquez-vous de la concurrence avec une expérience interactive inégalée:</h2>
                        <div class="liste">
                            <ul>
                                <li>Reproduire l’expérience de magasinage en boutique</li>
                                <li>Voir le produit sous tous ces angles (ouvert, fermé, gamme de couleurs, détail technique...)</li>
                                <li>Donner l’impression de pouvoir toucher le produit comme en magasin</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bloc">
                        <h2>Quels sont les bénéfices des animations de produit en ligne&nbsp;?</h2>
                        <div class="liste">
                            <ul>
                                <li>Sécurise les clients dans leur processus d'achat</li>
                                <li>Augmente la confiance des clients</li>
                                <li>Converti plus de visiteurs en acheteurs</li>
                                <li>Diminue significativement le taux de retour du produit</li>
                            </ul>
                        </div>
                    </div>
                    <div class="CTA"><router-link to="/nous-joindre" class="btn btn-primary">Renseignez-vous</router-link></div>
                </div>
                <div class="col-sm-6 visuel desktop-only hidden-xs">
                    <iframe src="assets/visionneuse/nutriSow/index.html" scrolling="no" frameborder="0"></iframe>
                </div>
            </div>
        </section>
        <Portfolios :previews="previews" />
        <section class="container">
            <div class="row">
            
                <div class="col-sm-6 description left supp">
                    <div class="bloc">
                        <h2>Quels sont les avantages de notre produit 360° contrairement à une vidéo traditionnelle&nbsp;?</h2>
                        <div class="liste">
                            <ul>
                                <li>Coûts d’implantation plus accessibles ($)</li>
                                <li>Optimisée pour l’approche «Mobile First»</li>
                                <li>L’utilisateur peut zoomer, ouvrir, fermer ou faire pivoter le produit</li>
                                <li>Personnalisable aux caractéristiques du produit</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bloc">
                        <h2>Un grand choix de fonctionnalités complémentaires:</h2>
                        <div class="liste">
                            <ul>
                                <li>Visualisation du dessus du produit</li>
                                <li>Ajout de texte descriptif et de lien hypertexte</li>
                                <li>Insertion de GIF animé </li>
                                <li>Insertion de vidéo d’information</li>
                                <li>Insertion de fichier d’instruction (PDF)</li>
                                <li>Insertion de bande audio</li>
                                <li>Multilingues (français, anglais, espagnol)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                

                <div class="col-sm-6 description right">
                    <div class="bloc">
                        <h2>Comment créons-nous vos animations 360°&nbsp;?</h2>
                        <div class="liste">
                            <ul>
                                <li>Pour assurer une animation fluide, les <strong>produits</strong> sont placés sur une plaque tournante et photographiés en séquence de 40 photos sur une rotation complète de l’objet.</li>
                                <li>Pour les <strong>objets volumineux</strong> (ils sont photographiés à l'extérieur, à l'aide de notre équipement programmable qui détermine les angles pour la prise des photos.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bloc">
                        <h2>Quels sont les domaines d’applications&nbsp;?</h2>
                        <div class="liste">
                            <div>Très efficace pour le commerce en ligne dans les secteurs d’activités: </div>
                            <ul>
                                <li>Industries</li>
                                <li>Fabricants</li>
                                <li>Distributeurs</li>
                                <li>Commerces de détail</li>
                                <li>Restauration</li>
                                <li>Les agences de publicité</li>
                            </ul>
                        </div>
                    </div>
                    <div class="note">* Selon statista, la présentation d’animation est l’un des 10 facteurs les plus importants pour la conversion de vos clients.</div>
                </div>
                
            </div>
        </section>
        <section class="container CTA-bottom">
            <div class="row">
                <div class="col-xs-12">
                    <div class="CTA"><router-link to="/nous-joindre" class="btn btn-primary">Prendre rendez-vous</router-link></div>
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
   name:"Visionneuse",
   components: {
    Header,
    Footer,
    Portfolios,
  },
  data() {
    return {
      previews : [
        {link:"portfolio-frein",imageUrl: "animation-360-frein.jpg"}, 
        {link:"portfolio-alternateur",imageUrl: "animation-360-alternateur.jpg"}, 
        {link:"portfolio-bouquet",imageUrl: "animation-360-bouquet.jpg"}, 
        {link:"portfolio-bonnet-rouge",imageUrl: "animation-360-bonnet-rouge.jpg"},
        {link:"portfolio-fenetre",imageUrl: "animation-360-fenetre.jpg"}, 
        {link:"portfolio-gateau",imageUrl: "animation-360-gateau-1.jpg"}, 
        {link:"portfolio-lunette",imageUrl: "animation-360-lunette.jpg"}, 
        {link:"portfolio-NutriSow",imageUrl: "animation-360-NutriSow.jpg"}, 
        {link:"portfolio-serre_ass",imageUrl: "animation-360-serre_ass.jpg"}, 
        {link:"portfolio-soulier-sport",imageUrl: "animation-360-soulier-sport.jpg"},
        {link:"portfolio-velo",imageUrl: "animation-360-velo.jpg"},
        {link:"portfolio-veston",imageUrl: "animation-360-veston.jpg"} 
      ]
    }
  }
}
</script>

<style>

</style>