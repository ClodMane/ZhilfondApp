<template>
  <div class="card-wrapper">
    <div class="image-wrapper">
      <div class="image-block"></div>
    </div>
    <div class="information-block">
      <div class="information-block__main">
        <div class="row"><div class="row-bold head">Имя Фамилия</div></div>
        <div class="row">
          <div class="row-bold">email:</div>
          <div class="row-text">Текст email</div>
        </div>
        <div class="row">
          <div class="row-bold">phone:</div>
          <div class="row-text">Т79996249642</div>
        </div>
      </div>
      <div class="information-block__description">
        <div class="row">
          <div class="row-bold head description">О себе:</div>
        </div>
        <div class="row">
          <div class="row-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '.././assets/main.scss';

.card-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 30px;
}
.image-wrapper {
  display: block;
  width: 424px;
  height: 286px;
}
.image-block {
    width: 100%;
    height: 100%;
    background-image: url('.././assets/images/rectangle 4.svg');
}
.information-block {
    width: 100%;
    height: 100%;
    max-width: 440px;
}
.row {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
}
.row-bold {
  color: $heading-text;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
}
.row-text {
    width: 100%;
    max-width: 440px;
}
.head {
    font-size: 16px;
    color: #000;
}
.description {
    padding: 20px 0 25px;
    }
.information-block {
    margin-left: 61px;
}
</style>
