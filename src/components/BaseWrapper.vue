<template>
  <div class="main-wrapper">
    <SideBar @changeUser="onChangeUser"></SideBar>
    <BaseCard v-if="Object.keys(user).length !== 0" :user="user"></BaseCard>
    <div v-else class="alt-text">
      Выберите сотрудника, чтобы посмотреть его профиль
    </div>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'App',
  components: {
    BaseCard,
    SideBar,
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onChangeUser(data) {
      this.user = data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '.././assets/main.scss';

.main-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 576px;
  background: #FDFDFD;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0000001A;
}
.alt-text {
  display: flex;
  justify-content: center; // Центрирование по горизонтали
  align-items: center; // Центрирование по вертикали
  width: 100%; // Занять всю ширину контейнера
  height: 100%; // Занять всю высоту контейнера
  text-align: center;
  color: #76787D;
  font-size: 14px;
}
</style>
