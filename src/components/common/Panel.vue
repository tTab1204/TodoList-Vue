<template>
  <div class="container">
    <div class="header">
      <div class="progress">
        Not Started
        <div class="card-number">2</div>
      </div>
      <div class="dropdown-menu">생성순</div>
    </div>
    <Card />
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import Card from "@/components/common/Card.vue";

export default {
  components: {
    IconBase,

    Card,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: rem(350px);
  height: rem(610px);
  border-radius: rem(10px);
  background: $gray-02;
  padding: rem(22px) rem(26px);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: rem(19px);
}

.progress {
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: rem(20px);
  line-height: 130%;

  & > .card-number {
    font-size: rem(18px);
    font-weight: 500;
    color: $gray-05;
    margin-left: rem(10px);
  }
}

.dropdown-menu {
  display: flex;
  align-items: center;
  background: $white;
  border: 1px solid $gray-04;
  border-radius: rem(10px);
  font-size: rem(16px);

  padding: rem(7px) rem(14px);
}
</style>
