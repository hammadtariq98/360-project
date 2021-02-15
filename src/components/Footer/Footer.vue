<template>
    <footer class="container">
        <div class="row">
            <div class="col-sm-12 logo"><img src="./../../assets/images/logo-footer.png" alt="Logo Révolutionnez"></div>
        </div>
        <div class="row contact">
            <div class="col-sm-12">
                Jean-Paul Robichaud &nbsp;|&nbsp; 856, Bernard-Pilon, McMasterville (QC) J3G 5W8, Canada &nbsp;|&nbsp; 450-467-6932 &nbsp;|&nbsp; <a href="mailto:jean-paul@revolutionnez.ca">jean-paul@revolutionnez.ca</a>
            </div>
        </div>
        <div class="row menu-footer">
            <div class="col-md-3">
                <h4>Révolutionnez</h4>
                <div><router-link to="/apropos">À propos</router-link></div>
                <div><router-link to="/innovation">Innovation</router-link></div>
                <div><router-link to="/partenaires">Partenaires</router-link></div>
                <div><router-link to="/politique-confidentialite">Politique de confidentialité</router-link></div>
            </div>
            <div class="col-md-3">
                <h4>Animation 360</h4>
                <div><router-link to="/animation360-visionneuse">Notre visionneuse</router-link></div>
                <div><router-link to="/animation360-hologramme">Hologramme 360</router-link></div>
                <div><router-link to="/animation360-dessin-technique">Dessin technique 360</router-link></div>
            </div>
            <div class="col-md-3">
                <h4>Photos produit</h4>
                <div><router-link to="/produit-photos-unitaires-serie">Photos unitaires ou en série</router-link></div>
                <div><router-link to="/produit-photos-haute-vitesse">Photos haute vitesse</router-link></div>
            </div>
            <div class="col-md-3">
                <h4>Réalisations</h4>
                <div><a href="realisation-President.html">Portes et fenêtres Président</a></div>
                <div><a href="realisation-Fibrobec.html">Fibrobec</a></div>
                <div><a href="realisation-IASO.html">IASO</a></div>
                <div><a href="realisation-Sacsindustriels.html">Sacs industriels inc.</a></div>
                <div><a href="realisation-Innotag.html">Distributions Innotag</a></div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 bottom">
                <img src="./../../assets/images/footer.jpg" alt="Footer | Photo haute vitesse" />
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>

</style>