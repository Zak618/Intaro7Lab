<template>
  <div class="input-group mb-3">
    <div class="input-group-text font-weight-bold font-monospace fs-2">{{ title }}</div>
    <input list="university" type="text" class="form-control fs-2" v-model="propModel" @input="onChange()" aria-describedby="basic-addon1">
    <datalist id="university">
      <option v-for="item in this.itemList" v-bind:key="item.id" v-bind:value="item.title"></option>
    </datalist>
  </div>
</template>

<script>

import {Api} from "@/components/Api/Api";

export default {
  name: 'ResumeInput',
  itemList: [],
  props: ['value', 'title', 'resumeValue', 'cityId'],
  computed: {
    propModel: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('update:value', value)
        if (this.value === "") {
          this.$emit('update:resumeValue', this.title)
        } else {
          this.$emit('update:resumeValue', this.value)
        }
      },
    },
  },
  methods: {
    async onChange() {
      this.itemList = await Api.getUniversities(this.propModel, this.cityId.id);

    },
  }
}


</script>
