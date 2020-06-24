<template>
<div>
  <div id="main">
    <div class="container">
      <div class="row">
          <h2>Add An Image</h2>
      </div>
    </div>
    <AddImage />
</div>

</div>

</template>

<script>
import AddImage from '@/components/addImage.vue'
export default {
  name: 'add-image',
  components: {
    AddImage
  }
}
</script>
