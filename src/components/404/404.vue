<template>
  <section id="hero1" class="hero">
    <div class="inner">
      <div class="copy">
      <h1>Not Found</h1>
      <p>Sorry this page does not exist or it has been modified!</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style>
#hero1 {
  background: url("../../assets/images/desole.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.hero, .content{
  text-align:center; 
  position:relative;
  width: 100%;
}
.inner{
  min-height:100vh;
  position: relative;
}

.hero .inner{
  background: rgba(0,0,0,0.7) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAD0lEQVQIW2NkQABjRmQOAAM+AGkQsDBSAAAAAElFTkSuQmCC) repeat;}
.copy{
  position:absolute; 
  top:50%; 
  height:10em; 
  margin-top:-5em; 
  width:100%;
}

.hero h1, .hero p{ 
  color:#fff;
}

.content h1, .content p{
  color:#333;
}

h1{
  margin:0px;
  font-weight:400;
  font-size: 40px;
  padding:0px 20px;
}

p{
  font-size:24px;
  padding:0px 20px;
}
</style>