<template>
  <div class="input-group mb-3 mt-3">
    <field-select v-model:options="options" v-model:value="educationMutation.value" v-model:resume-value="educationMutation.resumeValue" @change="onEducationChange()"/>
    <div class="input-group p-3 border border-2 m-2 border-success rounded-5" v-if="education.showEducation">
      <field-university-input
          v-model:title="educationMutation.institution.title" v-model:value="educationMutation.institution.value"
          v-model:resume-value="educationMutation.institution.resumeValue" v-model:city-id="educationMutation.institution.cityId" @change="onChange()"/>
      <field-input v-model:title="educationMutation.faculty.title" v-model:value="educationMutation.faculty.value" v-model:resume-value="educationMutation.faculty.resumeValue" @change="onChange()"/>
      <field-input v-model:title="educationMutation.specialization.title" v-model:value="educationMutation.specialization.value" v-model:resume-value="educationMutation.specialization.resumeValue" @change="onChange()"/>
      <resume-number-input v-model:title="educationMutation.endYear.title" v-model:value="educationMutation.endYear.value" v-model:resume-value="educationMutation.endYear.resumeValue" @change="onChange()"/>
      <button v-if="education.secondEducationEnabled === false" class="btn btn-success" @click="onClick()">Добавить образование</button>
      <button v-if="education.optionalEducations.length === 1" class="btn btn-danger" @click="deleteEducation()">Удалить образование</button>

    </div>
  </div>
</template>

<script>

import ResumeNumberInput from "@/components/Inputs/ResumeNumberInput";
const optionalEducation =  {
  education : {
    value: "Среднее",
    resumeValue: "Среднее образование",
    institution: {
      title: 'Учебное заведение',
      value: '',
      resumeValue: 'Учебное заведение',
      cityId: 1
    },
    faculty: {
      title: 'Факультет',
      value: '',
      resumeValue: 'Факультет'
    },
    specialization: {
      title: 'Специализация',
      value: '',
      resumeValue: 'Специализация'
    },
    endYear: {
      title: 'Год окончания',
      value: '',
      resumeValue: 'Год окончания'
    }
  },
}

import ResumeInput from "@/components/Inputs/ResumeInput";
import ResumeSelect from "@/components/Inputs/ResumeSelect";
import ResumeInstitutionInput from "@/components/EducationBlock/EducationInputs/ResumeInstitutionInput";
export default {
  name: 'ResumeMainEducation',
  data() {
    return {
      options : ['Среднее', 'Среднее специальное', 'Неоконченное высшее', 'Высшее'],

    }
  },
  props: {
    education: Object
  },
  components: {
    ResumeNumberInput,
    'field-input' : ResumeInput,
    'field-select' : ResumeSelect,
    'field-university-input' : ResumeInstitutionInput
  },
  created() {
    this.educationMutation = this.education;
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
      this.educationMutation.secondEducationEnabled = true;
      this.educationMutation.optionalEducations.push(optionalEducation);
      this.$emit('education', this.educationMutation)
    },
    // удалить доп образование
    deleteEducation:function() {
      this.educationMutation.secondEducationEnabled = false;
      this.educationMutation.optionalEducations = [];
      this.$emit('education', this.educationMutation)
    },
    // при изменении поля образование
    onEducationChange:function () {
      this.educationMutation.showEducation = this.educationMutation.value !== "Среднее";
      this.educationMutation.resumeValue = this.educationMutation.value + " образование";
      this.$emit('education', this.educationMutation)

    },

  }
}

</script>
