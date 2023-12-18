<template>
  <select class="btn btn-outline-secondary form-select form-select-lg fs-2 font-weight-bold font-monospace" v-model="propModel" @change="onChange()" aria-label=".form-select-lg example">
    <option v-for="option in options" v-bind:key="option.id">{{ option }}</option>
  </select>
</template>

<script>


export default {
  name: 'ResumeInput',
  props: ['value', 'options', 'resumeValue'],
  computed: {
    propModel: {
      get () { return this.value },
      set (value) { this.$emit('update:value', value) },
    },
  },
  methods: {
    onChange() {
      console.log(this.value);
      if (this.value === "") {
        this.$emit('update:resumeValue', this.title)
      } else {
        this.$emit('update:resumeValue', this.value)
      }
    }
  }

}

</script>
