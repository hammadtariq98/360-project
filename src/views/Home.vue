<template>
  <Header />
  <main id="homepage">
    <div id="gist"></div>
    <section class="container intro">
      <div class="row">
        <div class="col-sm-6 expert">
          <h1>Spécialiste en photographie<br />et animation 360°</h1>
        </div>
        <div class="col-sm-6 services">
          <h2>
            <strong>Rehaussez votre commerce électronique</strong><br />Séduire
            - Capter - Convaincre
          </h2>
        </div>
      </div>
    </section>
    <!-- banner slider -->

    <section class="container section-carrousel">
      <div class="row carrousel">
        <div class="col-sm-12" style="padding: 0">
          <div class="slider">
            <splide class="p-0" :options="options">
              <splide-slide>
                <div class="slide slide1">
                  <div class="row">
                    <div class="col-sm-6 preview">
                      <img
                        src="./../assets/images/velo.gif"
                        alt="Caroussel | Animation 360 - Vélo"
                      />
                    </div>
                    <div class="col-sm-6 panneau">
                      <div class="row carrousel-intro">
                        <div class="col-sm-12" style="padding: 0">
                          <h2>Augmentez vos ventes en ligne</h2>
                          <h3>Intégrez des animations de produits 360°</h3>
                          <h4>• Améliorez l’expérience client</h4>
                          <h4>• Mettez vos produits en valeur</h4>
                          <h4>• Créez des ambiances conviviales</h4>
                          <div class="bouton">
                            <router-link
                              to="/animation360-visionneuse"
                              role="button"
                              class="btn btn-slider"
                              >Découvrez</router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </splide-slide>
              <splide-slide>
                <div class="slide slide2">
                  <div class="row">
                    <div class="col-sm-6 preview">
                      <img
                        src="./../assets/images/slide-HV.jpg"
                        alt="Caroussel | Photo haute vitesse"
                      />
                    </div>
                    <div class="col-sm-6 panneau">
                      <div class="row carrousel-intro">
                        <div class="col-sm-12" style="padding: 0">
                          <h2>Suscitez l’émotion</h2>
                          <h3>Avec des photos de produit haute vitesse</h3>
                          <h4>• Créez de la magie</h4>
                          <h4>• Illustrez l’invisible</h4>
                          <h4>• Captez l’attention</h4>
                          <div class="bouton">
                            <router-link
                              to="/produit-photos-haute-vitesse"
                              role="button"
                              class="btn btn-slider"
                              >Découvrez</router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </splide-slide>
              <splide-slide>
                <div class="slide slide3">
                  <div class="row">
                    <div class="col-sm-6 preview">
                      <img
                        src="./../assets/images/fenetre.gif"
                        alt="Caroussel | Animation 360 - Fenêtre"
                      />
                    </div>
                    <div class="col-sm-6 panneau">
                      <div class="row carrousel-intro">
                        <div class="col-sm-12" style="padding: 0">
                          <h2>Encouragez l’achat en ligne</h2>
                          <h3>Humanisez l’expérience virtuelle</h3>
                          <h4>• Imitez l’expérience en boutique</h4>
                          <h4>• Récréez le comportement naturel d’achat</h4>
                          <h4>• Donnez l’impression de toucher l’objet</h4>
                          <div class="bouton">
                            <router-link
                              to="/innovation"
                              role="button"
                              class="btn btn-slider"
                              >Découvrez</router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </splide-slide>
            </splide>
          </div>
        </div>
      </div>
    </section>
    <!-- Optez -->
    <section class="container-fluid options">
      <div class="row">
        <div class="col-sm-12" style="padding: 0">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="tagline">Optez pour l'innovation</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-4">
                <div class="boite">
                  <div class="sujet">
                    <div>Révolutionnez</div>
                    <div>vos ventes en ligne</div>
                  </div>
                  <div class="icone">
                    <img
                      src="./../assets/images/icone-Rev-360.png"
                      alt="Démarquez-vous | Animation 360°"
                    />
                  </div>
                  <h3>Animation 360°</h3>
                  <div class="bouton">
                    <router-link
                      to="/animation360-visionneuse"
                      role="button"
                      class="btn btn-outline-dark"
                      >Démarquez-vous</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="boite">
                  <div class="sujet">
                    <div>Révolutionnez</div>
                    <div>votre image</div>
                  </div>
                  <div class="icone">
                    <img
                      src="./../assets/images/icone-Rev-HV.png"
                      alt="Innovez | Photos haute vitesse"
                    />
                  </div>
                  <h3>Photos haute vitesse</h3>
                  <div class="bouton">
                    <router-link
                      to="/produit-photos-haute-vitesse"
                      role="button"
                      class="btn btn-outline-dark"
                      >Innovez</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="boite">
                  <div class="sujet">
                    <div>Révolutionnez</div>
                    <div>vos vitrines</div>
                  </div>
                  <div class="icone">
                    <img
                      src="./../assets/images/icone-Rev-holo.png"
                      alt="Propulsez vos produits | Hologramme 360°"
                    />
                  </div>
                  <h3>Hologramme 360°</h3>
                  <div class="bouton">
                    <router-link
                      to="/animation360-hologramme"
                      role="button"
                      class="btn btn-outline-dark"
                      >Propulsez vos produits</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- transition1 -->
    <section class="container-fluid transition1"></section>
    <!-- vision neuse -->
    <section class="container visionneuse">
      <div class="row">
        <div class="col-12">
          <h2>Notre visionneuse&nbsp;360°</h2>
        </div>

        <div class="col-12 col-sm-6 description">
          <div class="points">
            <ul>
              <li>
                Maximisée pour l’approche «Mobile First», elle s’adapte aux
                écrans des mobiles.
              </li>
              <li>
                Permet à l’utilisateur de faire pivoter, zoomer, ouvrir ou
                fermer le produit, pour l’observer dans ses moindres détails.
              </li>
              <li>Personnalisable selon les caractéristiques du produit</li>
            </ul>
          </div>
          <div class="bouton">
            <router-link
              to="/animation360-visionneuse"
              role="button"
              class="btn btn-slider"
              >Voir détails</router-link
            >
          </div>
        </div>
        <div class="col-sm-6 exemple">
          <!-- <div class="">
            <div class="app-figure" id="zoom-fig">
                <a id="spin-1" class="Magic360"
                    href="../../public/large/alternateur_L_00_00.jpg"
                ><img src="../../public/large/alternateur_L_00_00.jpg"></a>
            </div>
            <div class="api-controls">
                <button class="cfg-btn" onclick="Magic360.spin('spin-1');"><i class="far fa-play-circle"></i></button>
                <button class="cfg-btn" onclick="Magic360.pause('spin-1');"><i class="fas fa-stop-circle"></i></button>
                <span class="sep-sm"></span>
                <button class="cfg-btn" onclick="Magic360.spin('spin-1', -1);"><i class="fas fa-undo-alt"></i></button>
                <button class="cfg-btn" onclick="Magic360.spin('spin-1', 1);"><i class="fas fa-redo-alt"></i></button>
                <span class="sep"></span>
                <span class="sep-sm"></span>
                <button class="cfg-btn" onclick="Magic360.magnifyOn('spin-1');"><i class="fas fa-search-plus"></i></button>
                <button class="cfg-btn" onclick="Magic360.magnifyOff('spin-1');"><i class="fas fa-search-minus"></i></button>
                <button class="cfg-btn" onclick="Magic360.fullscreen('spin-1');"><i class="fas fa-expand"></i></button>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <!-- nous distingue -->
    <section class="container-fluid expertise">
      <div class="row">
        <div class="col-sm-12" style="padding: 0">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 detail">
                <h2 class="tagline petit">Ce qui nous distingue</h2>
                <ul>
                  <li>
                    Nous sommes constamment à l’affût des nouvelles
                    technologies.
                  </li>
                  <li>Nous développons nos propres outils automatisés.</li>
                  <li>
                    Nous avons conçu notre visionneuse 360° pour qu’elle
                    s’adapte sur le mobile.
                  </li>
                  <li>
                    Nous avons construit des équipements pour photographier des
                    petits produits jusqu’aux grandes machineries.
                  </li>
                </ul>
                <div class="bouton mobo-nav">
                  <router-link
                    to="/apropos"
                    role="button"
                    class="btn btn-slider"
                    >En savoir plus</router-link
                  >
                </div>
              </div>
              <div class="col-sm-6 detail">
                <h2 class="tagline petit">Pourquoi Révolutionnez&nbsp;?</h2>
                <ul>
                  <li>
                    Nous faisons la différence entre prendre une photo ou
                    réaliser une photo!
                  </li>
                  <li>
                    Nous maîtrisons les techniques de photo alliées à une grande
                    créativité.
                  </li>
                  <li>
                    Nous offrons un service personnalisé et clés en main tout au
                    long du projet.
                  </li>
                  <li>
                    Nous collaborons avec vous dans notre studio ou à l’endroit
                    de votre choix.
                  </li>
                </ul>
                <div class="bouton mobo-nav">
                  <router-link
                    to="/nous-joindre"
                    role="button"
                    class="btn btn-slider"
                    >Prendre RDV</router-link
                  >
                </div>
              </div>
            </div>
            <div class="row desktop-nav">
              <div class="col-sm-6">
                <div class="bouton">
                  <router-link
                    to="/apropos"
                    role="button"
                    class="btn btn-slider"
                    >En savoir plus</router-link
                  >
                </div>
              </div>
              <div class="col-sm-6">
                <div class="bouton">
                  <router-link
                    to="/nous-joindre"
                    role="button"
                    class="btn btn-slider"
                    >Prendre RDV</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- transition2 -->
    <section class="container-fluid transition2"></section>
    <!-- clients -->
    <section class="container clients">
      <div class="row">
        <h2 class="tagline">Ils nous ont fait confiance</h2>
      </div>
      <div class="row grille">
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/st-hilaire.png"
            alt="Client | Ville de Mont-St-Hilaire"
          />
        </div>
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/mcmasterville.png"
            alt="Client | McMasterville"
          />
        </div>
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/perform-art.png"
            alt="Client | Perform Art"
          />
        </div>
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/innotag.png"
            alt="Client | Innotag"
          />
        </div>
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/fibrobec.png"
            alt="Client | Fibrobec"
          />
        </div>
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/novatech.png"
            alt="Client | Novatech"
          />
        </div>
      </div>
      <div class="row grille">
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/voyages-en-direct-beloeil.png"
            alt="Client | Voyages en direct Beloeil"
          />
        </div>
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/aimantlavie.png"
            alt="Client | Aimant la vie"
          />
        </div>
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/president.jpg"
            alt="Client | Portes &amp; Fenêtres Président"
          />
        </div>
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/caecapital.jpg"
            alt="Client | CAE Capital"
          />
        </div>
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/monitrol.png"
            alt="Client | Monitrol"
          />
        </div>
        <div class="col-12 col-md-2 col-sm-4 logo">
          <img
            src="./../assets/images/clients/prefab.png"
            alt="Client | Prefab"
          />
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
// import { postscribe } from "postscribe";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Splide,
    SplideSlide,
  },
  // mounted: function () {
  //   postscribe('#gist', '<script src="https://gist.github.com/gautemo/d6b309c2bafe8f611f239b82f4f5501f.js"><script>')
  // },
//   mounted: function () {
//     postscribe(
//       "#gist",
//       /* eslint-disable-next-line */
//       `<script src='../assets/common/vendor.2ff63466.chunk.js'><script>``<script src='../assets/common/app.9043b21a.js'><script>`
//     );
//   },
  data() {
    return {
      options: {
        rewind: true,
        width: "100%",
        perPage: 1,
        gap: "1rem",
      },
    };
  },
};
</script>

<style>
</style>