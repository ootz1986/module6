<template>
  <div id="main">
    <div class="container">
      <div class="row">
        <h2>Your Images</h2>
        <router-link tag="row" to="/image/add">
                <a class="btn btn-primary text-center float-right">Upload an Image Now</a>
              </router-link>
      </div>
      <UsersImages />
      <div id="user-image-modal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body"></div>
          </div>
        </div>
      </div>
      <div id="others-images" class="container">
        <div class="row">
          <h2>Latest Images</h2>
        </div>
        <othersImages />
      </div>
    </div>
  </div>
</template>

<script>
import othersImages from '@/components/OthersImages.vue'
import UsersImages from '@/components/UsersImages.vue'
export default {
  name: 'images',
  components: {
    othersImages,
    UsersImages
  }
}
</script>
