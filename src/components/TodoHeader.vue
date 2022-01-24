<template>
  <nav class="nav-container">
    <div class="logo-container">
      <div class="logo">TodoList</div>
      <div class="date">
        {{ $d(new Date(), "short", "ko-KR") }}
      </div>
    </div>
    <div class="nav-day">
      <strong>오늘은 금요일!</strong>
      하루만 버티면 주말입니다.
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  align-items: center;
  height: 100px;
  line-height: 130%;
  color: $gray-06;
  padding: 0 rem(170px);

  @media screen and (max-width: 480px) {
    height: 60px;
    padding: 0 rem(20px);
  }

  & > .logo-container {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
      width: 100%;
    }

    & > .logo {
      font-weight: 700;
      font-size: rem(23px);
      margin-right: 30px;

      @media screen and (max-width: 480px) {
        margin-right: 0;
      }
    }

    & > .date {
      font-size: rem(17px);
      color: $gray-05;
    }
  }

  & > .nav-day {
    margin-left: auto;
    font-size: rem(17px);

    @media screen and (max-width: 480px) {
      display: none;
    }
  }
}
</style>
