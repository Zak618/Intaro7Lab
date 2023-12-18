<template>
  <div class="input-group mb-3">
    <div class="btn btn-outline-secondary font-weight-bold font-monospace fs-2">{{ title }}</div>
    <input type="text" class="form-control fs-2" v-model="propModel" @input="onChange()" aria-describedby="basic-addon1">
  </div>
</template>

<script>

export default {
  name: 'ResumeInput',
  itemList: [],
  props: ['value', 'title', 'resumeValue'],
  computed: {
    propModel: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('update:value', value)
      },
    },
  },
  methods: {
    onChange() {
      if (this.value === "") {
        this.$emit('update:resumeValue', this.title)
      } else {
        this.$emit('update:resumeValue', this.value)
      }
    },
  }
}


</script>
