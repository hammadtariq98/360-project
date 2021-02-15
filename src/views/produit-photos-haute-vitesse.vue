<template>
    <Header />
    <main id="page" class="fr produit-photos-haute-vitesse">
        <section class="container">
            <div class="row">
                <div class="col-sm-6 description left">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link to="/">Accueil</router-link>
                        </li>
                        <li class="breadcrumb-item active">Photos produit</li>
                        <li class="breadcrumb-item active">Photos haute vitesse</li>
                    </ol>
                    <h3>Photos produit</h3>
                    <h1>Photos haute vitesse</h1>
                    <div class="col-sm-6 visuel mobile-only mobo-nav">
                        <img src="assets/images/background-produit-photos-haute-vitesse.jpg" alt="Photo haute vitesse – fraise dans un bol incliné avec explosion de chocolat liquide">
                    </div>
                    <h4>Suscitez l’émotion, faites de la magie, illustrez l’invisible avec des photos haute vitesse</h4>
                    <div class="bloc">
                        <h2>Qu’est-ce qui est unique avec la photo haute vitesse&nbsp;?</h2>
                        <div class="liste">
                            <ul>
                                <li>Mettre en mouvement les liquides (eau, cocktail, bière, cidre, vin, champagne).</li>
                                <li>Figer des aliments solides volant dans l'espace.</li>
                                <li>Rendre visible des mouvements trop rapides pour notre vision</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="bloc">
                        <h2>Quels sont les domaines d’applications&nbsp;?</h2>
                        <div class="liste">
                            <ul>
                                <li>Très adapter pour la photographie «lifestyle» et d’aliment en mouvement.</li>
                                <li>Restauration</li>
                                <li>Hôtel</li>
                                <li>Traiteur</li>
                                <li>Agence de publicité</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="CTA">
                        <router-link to="/nous-joindre" class="btn btn-primary">Prendre rendez-vous</router-link>
                    </div>

                </div>
                
                <div class="col-sm-6 visuel desktop-only desktop-nav">
                    <img src="./../assets/images/background-produit-photos-haute-vitesse.jpg" alt="Photo haute vitesse – fraise dans un bol incliné avec explosion de chocolat liquide">
                </div>
                
            </div>
        </section>
        <Portfolios :previews="previews" />
        <section class="container">
            <div class="row">
            
                <div class="col-sm-6 description left">
                    <div class="bloc">
                        <h2>Comment réalisons-nous la photo haute vitesse&nbsp;?</h2>
                        <div class="liste">
                        <ul>
                            <li>Nous avons conçu un appareil unique qui permet de synchroniser la caméra et le coup de flash à un moment précis. Les photos faites à un huit millièmes de seconde permettent de créer un effet visuel en mouvement.</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 description right">
                    <div class="bloc">
                        <h2>Témoignage</h2>
                        <div class="temoignage">
                            <div>«&nbsp;L'image étant à l'origine de la première impression, il est un élément incontournable en design. Je cherchais donc un photographe créatif et novateur pour moi et mes partenaires. J'ai trouvé le #1 chez Révolutionnez&nbsp;: Jean-Paul Robichaud.&nbsp;»</div>
                            <div class="signature">- Nathalie R. Gascon, Consultante en management</div>
                        </div>
                    </div>
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
   name:"HauteVitesse",
   components: {
    Header,
    Footer,
    Portfolios
  },
  data() {
    return {
      previews : [
        {link:"th-HV-DSC3593.jpg", imageUrl:"th-HV-DSC3593.jpg"},
        {link:"th-HV-DSC6749.jpg", imageUrl:"th-HV-DSC6749.jpg"},
        {link:"th-HV-DSC3604.jpg", imageUrl:"th-HV-DSC3604.jpg"},
        {link:"th-HV-DSC7472.jpg", imageUrl:"th-HV-DSC7472.jpg"},
        {link:"th-HV-DSC5373.jpg", imageUrl:"th-HV-DSC5373.jpg"},
        {link:"th-HV-rembrandt-360-023.jpg", imageUrl:"th-HV-rembrandt-360-023.jpg"},
        {link:"th-HV-DSC6513.jpg", imageUrl:"th-HV-DSC6513.jpg"},
        {link:"th-HV-rembrandt-360-029.jpg", imageUrl:"th-HV-rembrandt-360-029.jpg"},
        {link:"th-HV-rembrandt-360-025.jpg", imageUrl:"th-HV-rembrandt-360-025.jpg"},
        {link:"th-HV-rembrandt-360-030.jpg", imageUrl:"th-HV-rembrandt-360-030.jpg"},
        {link:"th-HV-rembrandt_Web_0124.jpg", imageUrl:"th-HV-rembrandt_Web_0124.jpg"},
        {link:"th-HV-rembrandt_Web_013.jpg", imageUrl:"th-HV-rembrandt_Web_013.jpg"},
        {link:"th-HV-rembrandt_Web_023.jpg", imageUrl:"th-HV-rembrandt_Web_023.jpg"},
        {link:"th-HV-rembrandt-0120.jpg", imageUrl:"th-HV-rembrandt-0120.jpg"},
        {link:"th-HV-rembrandt-1003.jpg", imageUrl:"th-HV-rembrandt-1003.jpg"},
        {link:"th-HV-rembrandt-360-024.jpg", imageUrl:"th-HV-rembrandt-360-024.jpg"},
        {link:"th-HV-rembrandt-1005.jpg", imageUrl:"th-HV-rembrandt-1005.jpg"},
      ],
    }
  },
}
</script>

<style>

</style>