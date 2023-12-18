<template>
  <BaseResume v-model:values="values"/>
  <button class="btn btn-primary col-8 mt-3 mb-3" @click="sendResume()">Отправить резюме</button>
</template>

<script>


import {ResumeApi} from "@/components/Api/ResumeApi";
import BaseResume from "@/components/BaseResume";
export default {
  name: 'mainResume',
  components: {
    BaseResume,
  },
  data() {
    return {
      values: {
        profession: {
          title: 'Профессия',
          value: '',
          resumeValue: 'Профессия'
        },
        city: {
          title: 'Город',
          value: '',
          resumeValue: 'Город'
        },
        name: {
          title: 'ФИО',
          value: '',
          resumeValue: 'ФИО'
        },
        phone: {
          title: 'Номер телефона',
          value: '',
          validation: false,
          resumeValue: 'Номер телефона'
        },
        email: {
          title: 'Email',
          value: '',
          resumeValue: 'Email'
        },
        birthdate: {
          title: 'Дата рождения',
          value: '',
          resumeValue: 'Дата рождения'
        },
        salary: {
          title: 'Желаемая зарплата',
          value: '',
          resumeValue: 'Желаемая зарплата'
        },
        skills: {
          title: 'Ключевые навыки',
          value: '',
          resumeValue: 'Ключевые навыки'
        },
        about: {
          title: 'О себе',
          value: '',
          resumeValue: 'О себе'
        },
        photo: {
          title: 'Ссылка на фото',
          value: '',
          resumeValue: ''
        },
        status: {
          options : ['Новый', 'Назначено собеседование', 'Принят', 'Отказ'],
          value: 'Новый',
          resumeValue: 'Новый'
        },
        education: {
          value: "Среднее",
          resumeValue : "Среднее образование",
          showEducation: false,
          secondEducationEnabled: false,
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
          optionalEducations: []
        },
      }
    }
  },
  methods: {
    // Добавление резюме
    async sendResume() {
      let resumeToSend = {};
      resumeToSend.profession = this.values.profession
      resumeToSend.telephone = this.values.phone
      resumeToSend.email = this.values.email
      resumeToSend.about = this.values.about
      resumeToSend.city = this.values.city
      resumeToSend.name = this.values.name
      resumeToSend.education = this.values.education
      resumeToSend.dateOfBirth = this.values.birthdate
      resumeToSend.photo = this.values.photo
      resumeToSend.skills = this.values.skills
      resumeToSend.salary = this.values.salary
      resumeToSend.status = this.values.status
      resumeToSend.optional = this.values.education.optionalEducations
      let jsonResume = JSON.stringify(resumeToSend)

      await ResumeApi.postResume(jsonResume)

      window.location.href = 'http://localhost:8080/home'
    }
  }

}

</script>
