<template>
  <div class="container">
      <div class="box-play">
          <playlist />
          <div class="box-option"> 
               <searchsong />
               <songbook />       
          </div>
         
      </div>
     
      <player />
    
  </div>    
    
</template>

<script>

import playlist from "@/components/Playlist.vue";
import player from "@/components/Player.vue";
import songbook from "@/components/Songbook.vue";
import searchsong from "@/components/SearchSong.vue";

export default {
    name: "Home",
    components: {
        playlist,
        player,
        songbook,
        searchsong
  },
  data() {
    return {
      deezerData: ""
    };
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
.container  {
 
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Quicksand';
}
.box-play{
    display: flex;
    flex-direction: row;
}
.box-option{
       display: flex;
       flex-direction: column;
     
     
}
</style>