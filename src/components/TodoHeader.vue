<template>
  <nav class="nav-container">
    <div class="logo-container">
      <div class="logo">TodoList</div>
      <div class="date">
        {{ $d(new Date(), "short", "ko-KR") }}
      </div>
    </div>
    <div class="nav-day">
      <strong>오늘은 {{ day }}요일!</strong>
    </div>
  </nav>
</template>

<script>
import { days } from "@/constants";
export default {
  data() {
    return {
      day: "",
    };
  },

  created() {
    this.getDay();
  },

  methods: {
    getDay() {
      const now = new Date();
      const today = now.getDay();
      this.day = days[today];
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid $gray-04;
  line-height: 130%;
  color: $gray-06;
  padding: 0 rem(170px);

  @media screen and (max-width: 780px) {
    height: 60px;
    padding: 0 rem(20px);
  }

  & > .logo-container {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
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

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
}
</style>
