<template>

    <section class="container-song">
        <h1 class="title-result">Resultados</h1>
        <div class="song">
            <div class="box-song"  v-for="(data,index) in deezerData" :key="index">               
                <img class="img-song" :src="data.album.cover">
                <p>{{data.title}}</p>   
                <p>{{data.artist.name}}</p>
            </div>
        </div>
          
    </section>    

    
</template>

<script>
import axios from 'axios';
export default {
    name: 'songbook',
    created(){
       axios.get ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/908622995',
       {
          method: "GET",
          crossDomain: true
        })
        .then(response => {
        this.deezerData = response.data.tracks.data;
        console.log(this.data);
      });
    },
    data(){
      return{
           deezerData:'',
        
      }
    },
    
}
</script>

<style>
.container-song{
    width: 100%;
    margin-top: 20px;
}

.title-result{
    color: #E86060;
    padding-left: 40px;
}

.song {
    /* border: 2px solid red; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 0 0 30px ;

}
.box-song{
    border: 2px solid #3333;
    width: 180px;
    height: 240px;
    margin: 5px;
}
.img-song{
    width: 180px;
}

p{
    margin: 5px;
    font-size: 15px;
}
</style>