<template>
  <header>
    <slot></slot>
    <slot name="nav"></slot>
  </header>
</template>

<style scoped>
  header {
    letter-spacing: 1px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-bottom: 1px solid grey;
  }
</style>