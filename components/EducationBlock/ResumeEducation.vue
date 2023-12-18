<template>
  <div class="input-group mb-3 mt-3">
    <div class="input-group p-3 border border-2 m-2 border-success rounded-5">
      <field-university-input
          v-model:title="educationMutation.institution.title" v-model:value="educationMutation.institution.value"
          v-model:resume-value="educationMutation.institution.resumeValue" v-model:city-id="educationMutation.institution.cityId" @change="onChange()"/>
      <field-input v-model:title="educationMutation.faculty.title" v-model:value="educationMutation.faculty.value" v-model:resume-value="educationMutation.faculty.resumeValue" @change="onChange()"/>
      <field-input v-model:title="educationMutation.specialization.title" v-model:value="educationMutation.specialization.value" v-model:resume-value="educationMutation.specialization.resumeValue" @change="onChange()"/>
      <resume-number-input v-model:title="educationMutation.endYear.title" v-model:value="educationMutation.endYear.value" v-model:resume-value="educationMutation.endYear.resumeValue" @change="onChange()"/>
      <button v-if="educationArrayLength - 1 === educationItemId" class="btn btn-success" @click="onClick()">Добавить образование</button>
      <button v-if="educationArrayLength - 2 === educationItemId" class="btn btn-danger" @click="deleteEducation()">Удалить образование</button>

    </div>
  </div>
</template>

<script>

import ResumeInput from "@/components/Inputs/ResumeInput";
import ResumeInstitutionInput from "@/components/EducationBlock/EducationInputs/ResumeInstitutionInput";
import ResumeNumberInput from "@/components/Inputs/ResumeNumberInput";
export default {
  name: 'ResumeEducation',
  data() {
    return {
    }
  },
  props: {
    education: Object,
    educationArrayLength : Number,
    educationItemId: Number,
    educationArray: Array
  },
  components: {
    ResumeNumberInput,
    'field-input' : ResumeInput,
    'field-university-input' : ResumeInstitutionInput
  },
  created() {
    this.educationMutation = this.education;
    console.log(this.educationItemId);
  },
  computed: {
    educationMutation() {
        return this.education;
    }
  },
  methods: {
    onChange:function() {
      this.$emit('education', this.educationMutation)
    },
    // добавить доп образование
    onClick:function() {
      this.$emit('add-to-array')
      console.log(this.educationItemId);
      console.log(this.educationArrayLength);

    },
    // удалить доп образование
    deleteEducation:function() {
      this.$emit('delete-from-array')
    },
  }
}

</script>
