<template>
  <div class="hello">
    <h1>Hello</h1>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";

export default {
  name: 'HelloWorld',
  setup(){
    onMounted(()=>{
      axios.get('/api/users')
          .then(res => console.log(res))
          .catch((err) => {
            throw err;
          });
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
