<template v-for="(education, index) in this.educationsMutation">
    <resume-education :key="education" @change="onChange" v-model:education="this.educationsMutation[index]"/>
</template>

<script>

import ResumeEducation from "@/components/EducationBlock/ResumeEducation";
export default {
  name: 'ResumeEducationList',
  data() {
    return {
      education: {
        value: "Среднее",
        resumeValue : "Среднее образование",
        nextEducation: false,
        count: 0,
        optional: Array,
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
        },
      },
    }
  },

  props: {
    educations: Array
  },
  components: {
    ResumeEducation
  },
  created() {
    this.educationsMutation = this.educations;
  },
  computed: {
    educationsMutation() {
      return this.educations;
    }
  },
  methods: {
    onChange:function() {
      if (this.educationsMutation[this.educationsMutation.length - 1].nextEducation === true && this.educationsMutation[this.educationsMutation.length - 1].haveNextEducation === false) {
        this.educationsMutation[this.educationsMutation.length - 1].nextEducation = false
        this.educationsMutation[this.educationsMutation.length - 1].haveNextEducation = true
        this.educationsMutation.push(this.education)
      }
      if (this.educationsMutation[this.educationsMutation.length - 1].deleteEducation === true && this.educationsMutation[this.educationsMutation.length - 1].haveNextEducation === true) {
        this.educationsMutation[this.educationsMutation.length - 1].deleteEducation = false
        this.educationsMutation[this.educationsMutation.length - 1].haveNextEducation = false
        this.educationsMutation.push(this.education)
      }
      this.$emit('educations', this.educationsMutation)
    },
  }
}

</script>
