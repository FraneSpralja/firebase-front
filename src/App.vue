<template>
  <user-form />
  <hr>
  <collection-form />
</template>

<script>
import userForm from './components/user-form';
import collectionForm from './components/collection-form';

export default {
  components: {
    userForm,
    collectionForm
  },
  setup() {

  }
}

</script>

<style>

</style>
