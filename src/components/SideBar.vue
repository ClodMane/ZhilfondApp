<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-header">Поиск сотрудников</div>
    <BaseInput @input-change="onInput"></BaseInput>
    <div class="sidebar-header">Результаты</div>
    <div class="results-wrappert">
      <UserCard
        @mouseover.native="onMouseOver(item)"
        v-for="(item, i) in getUserList?.data"
        :key="i"
        :user="item"
      ></UserCard>
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
    ...mapActions('users', ['fetchUsers']),

    onMouseOver(user) {
      console.log(user);
      this.$emit('changeUser', user);
    },
    onInput(value) {
      const request = `?${value}`;
      this.fetchUsers(request);
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
.results-wrappert {
  overflow-y: auto;
}
</style>
