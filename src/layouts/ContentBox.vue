<template>
  <div class="container-content">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContentBox'
}
</script>

<style>
  .container-content {
      min-height: 800px;
      width: 100%;
      background-color:	#F5F5F5;
      margin-top: -50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
</style>