<template>
  <div class="row" v-if="othersImages">
      <div class="col" v-if="errors">
          <div class="alert alert-danger">{{ errors }}</div>
      </div>
      <div id="others-images" class="card-columns">
          <div class="card other" v-for="image in othersImages" v-bind:key="image">
              <picture v-bind:id="'image' + image.id">
                  <img v-bind:src="image.image.path"  v-bind:alt="image.description"/>
              </picture>
              <h5>{{ image.name }}</h5>
              <p>{{ image.description }}</p>
          </div>
          <div class="clearfix"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'othersImages',
  created () {
    this.fetchImages()
  },
  data () {
    return {
      apiRequest: new this.$request(),
      othersImages: [],
      errors: ''
    }
  },
  methods: {
    fetchImages () {
      const endpoint = 'images'
      this.apiRequest.get(endpoint)
        .then((response) => {
          this.othersImages = response
          this.errors = ''
        })
        .catch((errors) => {
          this.errors = errors
        })
    }
  }
}
</script>
