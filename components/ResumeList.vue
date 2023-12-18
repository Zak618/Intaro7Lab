<template>
  <div class="container">
    <div class="row">
      <div class="col-sm border-2 border p-2 m-2">
        Новый ({{ this.resumeStatusLists['Новый'].length }})
        <draggable :list="resumeStatusLists['Новый']" :component-data="{ status: 'Новый' }" group="cards" itemKey="id"
                   @end="sendStatusUpdate">
          <template #item="{element}">
            <list-item v-model:name="element.name" v-model:id="element.id" v-model:src="element.photo" v-model:age="element.dateOfBirth" v-model:profession="element.profession"></list-item>
          </template>
        </draggable>
      </div>
      <div class="col-sm border-2 border p-2 m-2">
        Назначено собеседование ({{ this.resumeStatusLists['Назначено собеседование'].length }})
        <draggable :list="resumeStatusLists['Назначено собеседование']" :component-data="{ status: 'Назначено собеседование' }" group="cards" itemKey="id"
                   @end="sendStatusUpdate">
          <template #item="{element}">
            <list-item v-model:name="element.name" v-model:id="element.id" v-model:src="element.photo" v-model:age="element.dateOfBirth" v-model:profession="element.profession"></list-item>
          </template>
        </draggable>
      </div>
      <div class="col-sm border-2 border p-2 m-2">
        Принят ({{ this.resumeStatusLists['Принят'].length }})
        <draggable :list="resumeStatusLists['Принят']" :component-data="{ status: 'Принят' }" group="cards" itemKey="id"
                   @end="sendStatusUpdate">
          <template #item="{element}">
            <list-item v-model:name="element.name" v-model:id="element.id" v-model:src="element.photo" v-model:age="element.dateOfBirth" v-model:profession="element.profession"></list-item>
          </template>
        </draggable>

      </div>
      <div class="col-sm border-2 border p-2 m-2">
        Отказ ({{ this.resumeStatusLists['Отказ'].length }})
        <draggable :list="resumeStatusLists['Отказ']" :component-data="{ status: 'Отказ' }" group="cards" itemKey="id"
                   @end="sendStatusUpdate">
          <template #item="{element}">
            <list-item v-model:name="element.name" v-model:id="element.id" v-model:src="element.photo" v-model:age="element.dateOfBirth" v-model:profession="element.profession"></list-item>
          </template>
        </draggable>
      </div>
    </div>
  </div>


</template>

<script>
import draggable from 'vuedraggable'
import ListItem from "@/components/ListItems/ListItem";
import {ResumeApi} from "@/components/Api/ResumeApi";

export default {
  name: 'ResumeList',
  components: {ListItem, draggable},
  data() {
    return {
      options: ['Новый', 'Назначено собеседование', 'Принят', 'Отказ'],
      resumeStatusLists: {},
      itemList: {}
    }
  },
  methods: {
    // изменение статуса
    sendStatusUpdate(e) {
      const newStatus = e.to.getAttribute('status');
      ResumeApi.editResumeStatus(
          this.resumeStatusLists[newStatus][e.newIndex].id,
          JSON.stringify(newStatus)
      );

    },
    // обновление массива списков
    async updateLists() {
      for (const status of this.options) {
        this.resumeStatusLists[status] = [];
      }
      this.itemList = await ResumeApi.getResumeList();
    },
  },
  async created() {
    await this.updateLists();
    for (const item of this.itemList.result) {
      this.resumeStatusLists[item['status']].push(item);
    }
  },

}

</script>
