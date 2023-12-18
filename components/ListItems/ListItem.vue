<template>
  <div class="card mt-3" style="width: 18rem;">
    <img :src="this.src" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ profession }}</p>
      <p class="card-text">{{ age }}</p>
      <a :href="'/edit/' + this.id" class="btn btn-primary">Редактировать</a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ListItem',
  props: ['profession', 'name', 'age', 'src', 'id']

}
</script>
