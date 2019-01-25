<template lang="html">

  <section class="singers">
    <h1>Home</h1>
    
     <div class="container">

        <router-link to="add-singer"  type="button" class="btn btn-primary btn-lg">add new singer</router-link>

     </div>
  

<div class="container">
  <ul v-if="singers && singers.length" class="list-group">
    <li v-for="singer of singers" class="list-group-item">
       <router-link :to="`/songs/${singer.id}`" >{{singer.singer_name}}</router-link>
    </li>
  </ul>
</div>

  </section>

</template>

<script lang="js">
  export default  {
    name: 'singers',
    props: [],
    mounted() {

             this.axios.get(`http://localhost:3000/singers`)
    .then(response => {
      
      this.singers = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    },
    data() {
      return {
      singers: [],
      errors: []
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .singers {

  }
</style>
