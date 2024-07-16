<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-header">Поиск сотрудников</div>
    <BaseInput></BaseInput>
    <div class="sidebar-header">Результаты</div>
    <div class="results-wrappert">
      <UserCard></UserCard>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';
import UserCard from '@/components/UserCard.vue';

export default {
  name: 'App',
  components: {
    BaseInput,
    UserCard,
  },
};
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
    display: flex;
    flex-direction: column;
    width: 296px;
    height: 100%;
    border-right: 1px solid #DEDEDD;
    padding: 0 20px;
}
.sidebar-header {
    color: #333333;
    font-weight: 600;
    font-size: 16px;
    margin: 22px 0;
}
</style>
