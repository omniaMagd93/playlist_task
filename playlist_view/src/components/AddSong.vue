<template lang="html">

  <section class="add-song">
    <h1>Add Song</h1>


<div class="container center">

  <div class="form-group">
    <label for="name">Song Name</label>
    <input type="text" class="form-control" id="song_name"  placeholder="Enter Name" name="song_name" 
    v-model="form.song_name">
  </div>

    <button v-on:click="save_song()" class="btn btn-primary">Submit</button>
</div>


  </section>

</template>

<script lang="js">
  export default  {
    name: 'add-song',
    props: [],
    mounted() {

    },
    data() {
      return {
            error:[],
          form: {
          singer_id:this.$route.params.singer_id,
          song_name:""
        }
      }
    },
    methods: {

      save_song()
      {

        if(this.form.song_name == "")
      {
        alert("please enter singer name")
      }

      else
      {
        let data = JSON.stringify({
          singer_id: this.form.singer_id,
          song_name: this.form.song_name
        })


       this.axios.post('http://localhost:3000/songs/',data,{
         headers: {
            'Content-Type': 'application/json'
       }
        })
       .then(response => {
        this.$router.push("/songs/"+this.form.singer_id);
       })
       .catch(e => {
          this .errors.push(e)
       })

     }

      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .add-song {
    .center {
  margin: auto;
  width: 50%;
  border: 3px solid blue;
  padding: 10px;
}
  }
</style>
