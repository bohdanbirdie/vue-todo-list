<template>
  <a-layout
    id="components-layout-demo-top"
    class="layout"
    :style="{ minHeight: '100vh' }"
  >
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', marginTop: '24px' }">
        <router-view />
      </div>
    </a-layout-content>
  </a-layout>
</template>
