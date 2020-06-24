<template>
<div>
<div class="row" v-if="usersImages"></div>
<div class="row" v-if="errorMessage">
            <div class="alert alert-danger">{{ errorMessage }}</div>
        </div>
        <div class="row" v-if="successMessage">
            <div class="alert alert-success">{{ successMessage }}</div>
        </div>
<div class="row" v-if="usersImages">
    <div id="users-images" class="grid">
        <div class="grid-item user" v-for="image in usersImages" v-bind:key="image">
            <picture v-bind:id="image.id">
                <img v-bind:src="'image' + image.image.path"  v-bind:alt="image.description"/>
            </picture>
            <h5>{{ image.name }}</h5>
            <p>{{ image.description }}</p>
            <p><a href="/image?delete_image='image.id'" class="btn btn-primary btn-sm">Delete</a></p>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
</div>
</template>
<script>
export default {
  name: 'UsersImages',
  created () {
    this.fetchImages()
  },
  data () {
    return {
      apiRequest: new this.$request(),
      UsersImages: [],
      errors: ''
    }
  },
  methods: {
    fetchImages () {
      const endpoint = 'images'
      this.apiRequest.get(endpoint)
        .then((response) => {
          this.UsersImages = response
          this.errors = ''
        })
        .catch((errors) => {
          this.errors = errors
        })
    }
  }
}
</script>
