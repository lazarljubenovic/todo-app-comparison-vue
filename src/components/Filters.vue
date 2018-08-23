<template>
    <div class="Filters">
        <button type="button" :class="isSelectedAll" @click="$emit('filterChange', 'all')">All</button>
        <button type="button" :class="isSelectedComplete" @click="$emit('filterChange', 'complete')">Complete</button>
        <button type="button" :class="isSelectedIncomplete" @click="$emit('filterChange', 'incomplete')">Incomplete
        </button>
    </div>
</template>

<script>
  import {Filter} from '../types'

  export default {
    props: {
      filter: {
        required: true,
        validator: Filter,
      },
    },
    computed: {
      isSelectedAll () {
        return this.filter === 'all' ? 'selected' : ''
      },
      isSelectedComplete () {
        return this.filter === 'complete' ? 'selected' : ''
      },
      isSelectedIncomplete () {
        return this.filter === 'incomplete' ? 'selected' : ''
      },
    },
  }
</script>

<style lang="scss" scoped>
    .selected {
        font-weight: bold;
        text-decoration: underline;
    }
</style>
