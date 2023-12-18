<template>
  <div class="input-group mb-3">
    <div class="btn btn-outline-secondary font-weight-bold font-monospace fs-2">{{ title }}</div>
    <input type="text" class="form-control fs-2" v-model="propModel" @input="onChange()" aria-describedby="basic-addon1">
  </div>
  <div class="text-danger" v-if="phoneValidationFailed">Неправильный формат номера телефона!</div>

</template>

<script>


export default {
  name: 'ResumeInput',
  data() {
    return {
      phoneValidationFailed: false
    }
  },
  props: ['value', 'title', 'validation', 'resumeValue'],
  computed: {
    propModel: {
      get () { return this.value },
      set (value) {
          this.$emit('update:value', value)
      },
    },
  },
  methods: {
    onChange() {
      this.phoneValidation();
      if (this.value === "" || this.phoneValidationFailed) {
        this.$emit('update:resumeValue', this.title)
      } else {
        this.$emit('update:resumeValue', this.value)
      }
    },
    // валидация телефона
    phoneValidation() {
      let regex = /^\d+$/;
      this.phoneValidationFailed = this.propModel.length < 6 || this.propModel.length > 12 || !String(this.value).match(regex);
      this.$emit('update:validation', !this.phoneValidationFailed);
    }
  }


}

</script>
