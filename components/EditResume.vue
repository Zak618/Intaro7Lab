<template>
  <BaseResume v-model:values="values"/>
  <button class="btn btn-primary col-8 mt-3 mb-3" @click="sendResume()">Отправить резюме</button>
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

import {ResumeApi} from "@/components/Api/ResumeApi";
import BaseResume from "@/components/BaseResume";

export default {
  name: 'mainResume',
  components: {
    BaseResume,
  },
  props: ['id'],
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
  async mounted() {
    await this.getResume();
    const result = this.resumeData["result"];
    this.values.profession.value = result["profession"]
    this.values.profession.resumeValue = this.values.profession.value
    this.values.phone.value = result["telephone"]
    this.values.phone.resumeValue = this.values.phone.value
    this.values.email.value = result["email"]
    this.values.email.resumeValue = this.values.email.value
    this.values.about.value = result["about"]
    this.values.about.resumeValue = this.values.about.value
    this.values.city.value = result["city"]
    this.values.city.resumeValue = this.values.city.value
    this.values.name.value = result["name"]
    this.values.name.resumeValue = this.values.name.value
    this.values.birthdate.value = result["dateOfBirth"]
    this.values.birthdate.resumeValue = this.values.birthdate.value
    this.values.photo.value = result["photo"]
    this.values.photo.resumeValue = this.values.photo.value
    this.values.skills.value = result["skills"]
    this.values.skills.resumeValue = this.values.skills.value
    this.values.salary.value = result["salary"]
    this.values.salary.resumeValue = this.values.salary.value
    if (result["optional"] !== null) {
      this.values.education.showEducation = true;
      this.values.education.institution.value = result["optional"][0]['institution'];
      this.values.education.institution.resumeValue = this.values.education.institution.value
      this.values.education.faculty.value = result["optional"][0]['faculty'];
      this.values.education.faculty.resumeValue = this.values.education.faculty.value
      this.values.education.specialization.value = result["optional"][0]['specialization'];
      this.values.education.specialization.resumeValue = this.values.education.specialization.value
      this.values.education.endYear.value = result["optional"][0]['endYear'];
      this.values.education.endYear.resumeValue = this.values.education.endYear.value

    }
    for (let i = 1; i < result["optional"].length; i++) {
      this.values.education.secondEducationEnabled = true;
      this.values.education.optionalEducations.push(JSON.parse(JSON.stringify(optionalEducation)))
      this.values.education.optionalEducations[i-1].education.institution.value = result["optional"][i]['institution'];
      this.values.education.optionalEducations[i-1].education.institution.resumeValue = this.values.education.institution.value
      this.values.education.optionalEducations[i-1].education.faculty.value = result["optional"][i]['faculty'];
      this.values.education.optionalEducations[i-1].education.faculty.resumeValue = this.values.education.faculty.value
      this.values.education.optionalEducations[i-1].education.specialization.value = result["optional"][i]['specialization'];
      this.values.education.optionalEducations[i-1].education.specialization.resumeValue = this.values.education.specialization.value
      this.values.education.optionalEducations[i-1].education.endYear.value = result["optional"][i]['endYear'];
      this.values.education.optionalEducations[i-1].education.endYear.resumeValue = this.values.education.endYear.value
    }
    this.values.education.value = result["education"]
    this.values.education.resumeValue = this.values.education.value
    this.values.status.value = result["status"]
    this.values.status.resumeValue = this.values.status.value
    this.values.profession.value = result["profession"]
    this.values.profession.resumeValue = this.values.profession.value

  },
  methods: {
    // запрос на получение резюме
    async getResume() {
      this.resumeData = await ResumeApi.getResume(this.id);
    },
    // Запрос на изменение резюме
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

      await ResumeApi.editResume(this.id, jsonResume)

      window.location.href = 'http://localhost:8080/home'

    }
  }

}

</script>
