<template>
    <div class="EditItem">
        <input
                type="text"
                aria-label="Change text"
                :value="value"
                @input="onChange"
                @keydown="onKeyDown"
        >
    </div>
</template>

<script>
  import {TodoItem} from '../types'

  export default {
    props: {
      item: {
        required: true,
        validator: TodoItem,
      },
    },
    data () {
      return {
        value: '',
      }
    },
    methods: {
      onChange (event) {
        const $input = event.target
        const {value} = $input
        this.value = value
      },
      onKeyDown (event) {
        if (event.key === 'Enter') {
          event.preventDefault()
          this.$emit('submit', this.value)
        } else if (event.key === 'Escape') {
          event.preventDefault()
          this.$emit('submit', null)
        }
      },
    },
  }
</script>
