<template>
    <div class="header">
      <RouterLink to="/">
        <h1>Nerdy Stitch</h1>
      </RouterLink>
        
    </div>
</template>

<script>
export default {
  name: "PageHeader"
}
</script>

<style>
.header {
  display: flex;
  padding-left: 20px;
  background: #073b4c;
  color: white;
  margin-bottom: 60px;
}
</style>