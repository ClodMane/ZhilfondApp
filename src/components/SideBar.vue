<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-header">Поиск сотрудников</div>
    <BaseInput @input-change="onInput"></BaseInput>
    <div class="sidebar-header">Результаты</div>
    <div class="results-wrapper">
      <div v-if="getUserList">
        <div v-if="getUserList?.data.length">
          <UserCard
            @mouseover.native="onMouseOver(item)"
            v-for="(item, i) in getUserList?.data"
            :key="i"
            :user="item"
          ></UserCard>
        </div>
        <div v-else class="alt-text">ничего не найдено</div>
      </div>
      <div v-else class="alt-text">начните поиск</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseInput from '@/components/BaseInput.vue';
import UserCard from '@/components/UserCard.vue';

export default {
  name: 'SideBar',
  components: {
    BaseInput,
    UserCard,
  },
  computed: {
    ...mapGetters('users', ['getUserList']),
  },
  methods: {
    ...mapActions({
      fetchUsers: 'users/fetchUsers',
      setActivePreloader: 'preloader/setActivePreloader',
    }),

    onMouseOver(user) {
      console.log(user);
      this.$emit('changeUser', user);
    },
    async onInput(value) {
      const request = `?${value}`;
      this.setActivePreloader(true);
      await this.fetchUsers(request);
      this.setActivePreloader(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
    display: flex;
    flex-direction: column;
    width: 374px;
    min-width: 374px;
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
.results-wrapper {
  overflow-y: auto;
  padding: 10px;
}
.alt-text {
    color: #76787D;
    font-size: 14px;
  }
</style>
