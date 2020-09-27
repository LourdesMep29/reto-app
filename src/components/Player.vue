<template>

    <section class="footer-player">
        <div class="info-player">
            <img class="img-player" src="../assets/logo.png">
            <div>
              <p>Cancion</p>  
              <p>Artista</p>
            </div>
        </div>
        <div class="reproductor">
            <font-awesome-icon icon="step-backward" class="icon-backward"/>
            <font-awesome-icon icon="play-circle" class="icon-play"/>
            <font-awesome-icon icon="step-forward" class="icon-forward"/>
        </div>
        <div class="box-slider">
            <img>
            <div class="slider"> ------
                <!-- <div class="progress"></div>
                <div class="indicator"></div> -->
            </div>
        </div>
        

    </section>    

    
</template>

<script>
export default {
     name: 'player',
}
</script>

<style>
.footer-player{
    background-color: #EB5757;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: white;
   
}
.info-player{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 50px;
}
.img-player{
    width: 100px;
}

.reproductor{
    font-size: 40px;
    margin: 0 50px;
}
.icon-backward, .icon-play, .icon-forward{
    margin: 0 10px;
}
 .slider{
    margin: 0 50px;
}

/*.progress{
    background: yellow;
    height: 100%;
    position: absolute;
    width: 100%;
}

.indicator{
    border: 1px solid red;
    height: 100%;
    margin-left: -5%;
    left: 100%;
    position: absolute;
    width: 10%;
} */
</style>