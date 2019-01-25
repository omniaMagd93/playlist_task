<template lang="html">

  <section class="songs">
    <h1>songs</h1>
    

    <div class="container">
        <router-link :to="`/add-song/${$route.params.singer_id}`"  type="button" class="btn btn-primary btn-lg">
          add new song
        </router-link>
     </div>
  

<div class="container">
  <ul v-if="singer_songs && singer_songs.length" class="list-group">
    <li v-for="singer_song of singer_songs" class="list-group-item">
        <p>{{ singer_song.song_name }}</p>
    </li>
  </ul>
</div>


  </section>

</template>

<script lang="js">
  export default  {
    name: 'songs',
    props: [],
    mounted() {
                var singer = this.$route.params.singer_id
             this.axios.get(`http://localhost:3000/singer/songs/${singer}`)
    .then(response => {      
      this.singer_songs = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    },
    data() {
      return {
        errors: [],
        singer_songs: []
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .songs {

  }
</style>
