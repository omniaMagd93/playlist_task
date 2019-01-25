<template lang="html">

  <section class="add-singer">
    <h1>Add Singer</h1>


<div class="container center">

  <div class="form-group">
    <label for="name">Singer Name</label>
    <input type="text" class="form-control singer_input" id="singer_name"  placeholder="Enter Name" name="singer_name" v-model="form.singer_name">
  </div>

    <button v-on:click="save_singer()" class="btn btn-primary">Submit</button>
</div>

  </section>

</template>

<script lang="js">
  export default  {
    name: 'add-singer',
    props: [],
    mounted() {

    },
    data() {
      return {
         error:[],
          form: {
          singer_name:""
        }
      }
    },
    methods: {
         save_singer()
         {

         if(this.form.singer_name == "")
      {
        alert("please enter singer name")
      }
      else
      {
        let data = JSON.stringify({
          singer_name: this.form.singer_name
       })

        
       this.axios.post('http://localhost:3000/singers/',data,{
         headers: {
            'Content-Type': 'application/json'
       }
        })
       .then(response => {
        this.$router.push('/');
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
  .add-singer {
    .center {
  margin: auto;
  width: 50%;
  border: 3px solid blue;
  padding: 10px;
}
   .name{
    text-align: margin auto 0;
   }
  }
</style>
