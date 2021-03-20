<template>
  <div class="p-2 h5">
    {{attribute.name}}: {{attribute.value}}
  </div>
</template>

<script>
export default {
  name: 'TextContainer',
  props: {
    attribute: Object
  }
}
</script>

