<template>
  <div class="card-container">
    <div class="header">밥 먹기</div>

    <div class="footer">
      <button>시작</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 128px;
  border: 1px solid $gray-04;
  border-radius: rem(10px);
  background: $white;
  padding: rem(20px);

  & > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > .footer {
    display: flex;
    justify-content: flex-end;

    & > button {
      background: $gray-05;
      color: $white;
      border-radius: rem(5px);
      padding: rem(5px) rem(11px);
      cursor: pointer;
    }
  }
}
</style>
