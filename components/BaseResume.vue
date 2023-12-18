<template>
  <div class="d-flex flex-row flex-nowrap">
    <div class="container col-6 d-flex flex-column flex-nowrap">

      <field-input v-model:title="valuesMutation.profession.title" v-model:value="valuesMutation.profession.value" v-model:resume-value="valuesMutation.profession.resumeValue"/>
      <field-city-input v-model:city-id="valuesMutation.education.institution.cityId" v-model:title="valuesMutation.city.title"
                        v-model:value="valuesMutation.city.value" v-model:resume-value="valuesMutation.city.resumeValue"/>
      <field-input v-model:title="valuesMutation.name.title" v-model:value="valuesMutation.name.value" v-model:resume-value="valuesMutation.name.resumeValue"/>
      <field-phone-input v-model:title="valuesMutation.phone.title" v-model:resume-value="valuesMutation.phone.resumeValue"
                         v-model:value="valuesMutation.phone.value" v-model:validation="valuesMutation.phone.validation"/>
      <field-email-input v-model:title="valuesMutation.email.title" v-model:value="valuesMutation.email.value" v-model:resume-value="valuesMutation.email.resumeValue"/>
      <field-date-input v-model:title="valuesMutation.birthdate.title" v-model:value="valuesMutation.birthdate.value" v-model:resume-value="valuesMutation.birthdate.resumeValue"/>

      <field-select v-model:options="valuesMutation.status.options" v-model:value="valuesMutation.status.value" v-model:resume-value="valuesMutation.status.resumeValue"/>

      <resume-main-education v-model:education="valuesMutation.education"/>
      <resume-education v-for="(optionalEducation, index) in values.education.optionalEducations" @add-to-array="addItemToArray"
                        @delete-from-array="deleteItemFromArray" v-model:education-array-length="valuesMutation.education.optionalEducations.length"
                        v-bind:key="index" v-model:education-array="valuesMutation.education" v-bind:educationItemId="index"
                        v-model:education="optionalEducation.education"/>


      <field-number-input v-model:title="valuesMutation.salary.title" v-model:value="valuesMutation.salary.value" v-model:resume-value="valuesMutation.salary.resumeValue"/>
      <field-input v-model:title="valuesMutation.skills.title" v-model:value="valuesMutation.skills.value" v-model:resume-value="valuesMutation.skills.resumeValue"/>
      <field-big-input v-model:title="valuesMutation.about.title" v-model:value="valuesMutation.about.value" v-model:resume-value="valuesMutation.about.resumeValue"/>
      <field-input v-model:title="valuesMutation.photo.title" v-model:value="valuesMutation.photo.value" v-model:resume-value="valuesMutation.photo.resumeValue"/>

    </div>

    <resume-view v-model:data="valuesMutation"/>
  </div>
</template>

<script>

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

import ResumeInput from "@/components/Inputs/ResumeInput"
import ResumePhoneInput from "@/components/Inputs/ResumePhoneInput";
import ResumeBigInput from "@/components/Inputs/ResumeBigInput";
import ResumeView from "@/components/View/ResumeView.vue";
import ResumeEducation from "@/components/EducationBlock/ResumeEducation";
import ResumeSelect from "@/components/Inputs/ResumeSelect";
import ResumeCityInput from "@/components/Inputs/ResumeCityInput";
import ResumeDatePicker from "@/components/Inputs/ResumeDatePicker";
import ResumeEmailInput from "@/components/Inputs/ResumeEmaiInput";
import ResumeNumberInput from "@/components/Inputs/ResumeNumberInput";
import ResumeMainEducation from "@/components/EducationBlock/ResumeMainEducation";
export default {
  name: 'baseResume',
  components: {
    'field-number-input' : ResumeNumberInput,
    'field-email-input' : ResumeEmailInput,
    'field-date-input' : ResumeDatePicker,
    'resume-education' : ResumeEducation,
    'resume-main-education': ResumeMainEducation,
    'field-input' : ResumeInput,
    'field-phone-input' : ResumePhoneInput,
    'field-big-input' : ResumeBigInput,
    'resume-view' : ResumeView,
    'field-select' : ResumeSelect,
    'field-city-input' : ResumeCityInput,
  },
  props: ['values'],
  created() {
    this.valuesMutation = this.values;
  },
  computed: {
    valuesMutation() {
      return this.values;
    }
  },
  methods: {
    onChange:function() {
      this.$emit('values', this.valuesMutation)
    },
    // Метод для добавления нового образования
    addItemToArray:function(){
      this.valuesMutation.education.optionalEducations.push(JSON.parse(JSON.stringify(optionalEducation)))
      this.onChange()
    },
    // Метод для удаления последнего образования
    deleteItemFromArray:function(){
      this.valuesMutation.education.optionalEducations.pop()
      this.onChange()

    },
  }

}

</script>
