<template>
  <div class="input-container">
    <input
      type="text"
      class="input"
      placeholder="Введите Id или имя"
      @input="handleDebouncedInput"
    />
  </div>
</template>

<script>
import debounce from 'lodash/debounce';

export default {
  name: 'BaseInput',
  data() {
    return {
      inputValue: '',
      handleDebouncedInput: null,
      readyValue: '',
    };
  },
  created() {
    this.handleDebouncedInput = debounce(value => {
      this.handleInput(value);
    }, 1000);
  },
  methods: {
    handleInput(value) {
      this.prepareValue(value.target.value);
      this.$emit('input-change', this.readyValue);
    },
    prepareValue(value) {
      this.readyValue = value
        .split(', ')
        .map(item => {
          if (isNaN(+item)) {
            return `username=${item.trim()}`;
          } else {
            return `id=${item.trim()}`;
          }
        })
        .join('&');
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  width: 100%;
}

.input {
  width: 100%;
//   height: 46px;
  padding: 16px 15px;
  border-radius: 8px;
  border: 1.5px solid #E9ECEF;
  background: #fff;
  color: #76787D;
//   transition: $default-transition;

  &::placeholder {
    color: #76787D;
  }

}
</style>
