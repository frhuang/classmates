<template>
  <div class="view-list">
    <div v-for="list in detailLists" class="flag">
      <div class="avatar flag-item">
        <img :src="list.avatar" class="avatar-img">
        <i :class="{'female': list.gender =='0', 'male': list.gender == '1'}"></i>
      </div>
      <div class="flag-item">
        <div class="flag-title">{{list.username}}</div>
        <div class="flag-pro">
          <span>{{list.schools_text}}</span>
          <span>{{list.speciality_text}}</span>
          <span>{{list.syear}}级</span>
        </div>
        <div class="flag-pro">
          {{list.create_date}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      detailLists: Array
    }
  }
</script>
