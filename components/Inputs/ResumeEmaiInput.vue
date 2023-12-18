<template>
  <div class="input-group mb-3">
    <div class="btn btn-outline-secondary font-weight-bold font-monospace fs-2">{{ title }}</div>
    <input type="text" class="form-control fs-2" v-model="propModel" @input="onChange()" aria-describedby="basic-addon1">
  </div>
  <div class="text-danger" v-if="emailValidationFailed">Неправильный формат электронной почты!</div>

</template>

<script>

export default {
  name: 'ResumeEmailInput',
  data() {
    return {
      emailValidationFailed: false
    }
  },
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
      this.emailValidation()
      if (this.value === "") {
        this.$emit('update:resumeValue', this.title)
      } else {
        this.$emit('update:resumeValue', this.value)
      }
    },
    // валидация почты
    emailValidation() {
      const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
      };
      this.emailValidationFailed = !validateEmail(this.value);
      this.$emit('update:validation', !this.emailValidationFailed);
    }
  }
}


</script>
