<template>
    <Header />
    <main id="page" class="fr joindre">
        <section class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6 contact">
                    <h2 class="tagline">Nous contacter</h2>
                    <div class="coordonnees">
                        <div><strong>Jean-Paul Robichaud</strong></div>
                        <div>Photographe 360</div>
                        <div>856, Bernard-Pilon</div>
                        <div>McMasterville (QC) J3G 5W8, Canada</div>
                        <div>450-467-6932</div>
                        <div><a href="mailto:jean-paul@revolutionnez.ca">jean-paul@revolutionnez.ca</a></div>
                    </div>
                    <iframe src="https://zfrmz.com/nUbd1ebTOz1TxycwECf5" scrolling="auto" frameborder="0" width="100%" height="100%"></iframe>
                </div>
                <div class="col-xs-12 col-md-6 rdv">
                    <h2 class="tagline">Prendre rendez-vous</h2>
                    <iframe src="https://rencontre.revolutionnez.ca/portal-embed#/customer/revolutionnez" scrolling="auto" frameborder="0" width="100%" height="100%"></iframe>
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
   name:"NousJoindre",
   components: {
    Header,
    Footer
  },
}
</script>

<style>

</style>