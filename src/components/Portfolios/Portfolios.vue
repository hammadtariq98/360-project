<template>
  <section class="container galerie">
        <div class="row">
            <div class="col-sm-12">
                <ul>
                    <li class="preview" v-bind:key="preview" v-for="preview in previews">
                        <a :href="preview.link" target="_blank">
                            <img :src="require(`./../../assets/images/thumbnails/${preview.imageUrl}`)" alt="Visionneuse 360 | Industrie – Semoir"/>
                            <i class="glyphicon far fa-play-circle"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </section>
</template>

<script>
export default {
   name: "Portfolios",
   props : {
       previews : Array
   }
}
</script>

<style>

</style>