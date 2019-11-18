<!--  -->
<template>
  <div>
    <div class="container" id="container1"></div>
    <div class="container" id="container2"></div>
    <div class="container" id="container3"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    this.init();
    // this.debounce2()
  },

  methods: {
    init() {
      var count = 1;
      var container = document.getElementById("container1");
      function getUserAction() {
        console.log(this)
        container.innerHTML = count++;
      }

      function debounce(func, wait) {
        let timeout;
        return function() {
          var context = this;
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            func.apply(context);
          }, wait);
        };
      }
      container.onmousemove =  debounce(getUserAction, 1000);
    }
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background-color: #444;
  font-size: 30px;
  border: #fff solid;
}
</style>