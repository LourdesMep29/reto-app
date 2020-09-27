
<template>
<section class="box-playlist">
    <img class="logo" src="../assets/foxbel-music.png"/>
    <div>
        <h1 class="title"> Mi libreria </h1>
        <ul class="option-list"> 
            <li>Artistas</li>
            <li>Albums </li>
            <li>Canciones </li>
            <li>Estaciones</li>
        </ul>
    </div>

    <div>
        <h1 class="title"> Playlist </h1>
        <ul class="option-list"> 
            <li>Metal</li>
            <li>Para Bailar </li>
            <li>Rock 90s </li>
            <li>Baladas</li>
        </ul>
    </div>


</section>
</template>



<script>

export default {
    name: 'playlist',
   
}
</script>

<style>

.box-playlist {
    background: #662323;
    width: 330px;
    color: white;
    height: 870px;
}
.logo{
   width: 240px;
   margin: 45px 20px 10px 30px;
}
.option-list{
    list-style: none;
}
.title{
    margin-left: 40px;
}
li{
    margin-bottom: 10px;
}
</style>