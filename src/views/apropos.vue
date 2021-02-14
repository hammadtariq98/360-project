<template>
    <Header />
    <main id="page" class="fr apropos">
        <section class="container">
            <div class="row">
                <div class="col-xs-12 description">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link to="/">Accueil</router-link>
                        </li>
                        <li class="breadcrumb-item active">À propos</li>
                    </ol>
                    <h1>À propos</h1>
                    <h4>Jean-Paul Robichaud, photographe multidisciplinaire, accrédité PPOC chez Révolutionnez. Un autodidacte passionné, ingénieux, inventeur, créateur et toujours à l’affût des nouvelles technologies pour faciliter l’échange entre les commerçants et leurs clients pour augmenter leurs ventes en ligne.</h4>
                </div>               
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 description left">
                    <div class="bloc">
                        <h2>Notre vision</h2>
                        <div class="liste">
                            <ul>
                            <li>Penser Mobile First</li>
                            <li>Élaborer des méthodes créatives</li>
                            <li>Voir et penser autrement</li>
                            <li>Être à l’affût des progrès technologiques</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 description right">
                    <div class="bloc">
                        <h2>Nos valeurs</h2>
                        <div class="liste">
                            <ul>
                            <li>Le respect</li>
                            <li>L’honnêteté</li>
                            <li>L’intégrité</li>
                            <li>La collaboration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 description centre">
                    <div class="bloc">
                        <h2>Notre histoire</h2>
                        <div class="details">
                            <p>Notre entreprise cumule plus de 40 ans d’expérience combinée dans le domaine de la photographie commerciale et de l’ébénisterie. Nous avons plus de 130 différents mandats à notre actif. </p>
                            <p>Dès 2017, nous avons pris un virage technologique d’envergure. Grâce aux animations de produits 360°, de nombreux clients ont pu accroître la visibilité de leurs produits en ligne. Notre désir constant d’innover et d’offrir un produit distinctif de haute qualité nous a permis de bâtir un outil de présentation puissant, performant et personnalisable.</p>
                            <p>Cette technologie répond à une problématique bien simple: comment faire ressortir rapidement les attributs d’un produit tout en favorisant une expérience conviviale en ligne? Comment réussir à capter l’attention de nos visiteurs qui se veut sélective, restreinte et privilégiée?</p>
                            <p>C’est exactement la problématique qu’a rencontré Portes et Fenêtres Président en 2017. Notre équipe a alors su développer une technique unique d’animation du produit fluide et continue.</p>
                        </div>
                    </div>
                </div>               
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 description left">
                    <div class="bloc">
                        <h2>Nos services</h2>
                        <div class="liste">
                            <ul>
                                <li>Animation 360° interactive</li>
                                    <div class="liste2">
                                        <ul>
                                            <li>Produit volumineux (machinerie lourde)</li>
                                            <li>Produit régulier</li>
                                        </ul>
                                    </div>
                                <li>Photo de produit</li>
                                <li>Photo haute vitesse</li>
                                <li>Hologramme</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 description right">
                    <div class="bloc">
                        <h2>Notre approche client personnalisée</h2>
                        <div class="details">
                            <p>Nous savons que chaque entreprise a des besoins spécifiques et qu’elle mérite une attention particulière, ainsi chacun de nos clients reçoit un service personnalisé tout au long du projet.</p>
                            <p>Nos services sont exécutés dans notre studios, sur votre lieu de travail ou dans tout autre emplacement de votre choix.</p>
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

export default {
   name:"DessinTechnique",
   components: {
    Header,
    Footer
  },
}
</script>

<style>

</style>