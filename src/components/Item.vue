<template>
    <div class="Item">
        <EditItem
            v-if="isEditMode"
            :item="item"
            @submit="onEditSubmit"
        />

        <div v-else :class="className">
            <span>{{ item.text }}</span>
            <button @click="$emit('toggle', $event)">{{ toggleText }}</button>
            <button @click="onEditClick" v-if="!item.isCompleted">Edit</button>
        </div>
    </div>
</template>

<script>
  import EditItem from './EditItem'
  import {TodoItem} from '../types'

  export default {
    components: {
      EditItem,
    },
    props: {
      item: {
        required: true,
        validator: TodoItem,
      },
    },
    data () {
      return {
        isEditMode: false,
      }
    },
    computed: {
      toggleText () {
        return this.item.isCompleted ? `Undo` : `Done`
      },
      className () {
        return this.item.isCompleted ? 'complete' : ''
      },
    },
    methods: {
      onEditClick () {
        this.isEditMode = true
      },
      onEditSubmit (text) {
        this.isEditMode = false
        if (text != null) {
          const data = {id: this.item.id, text}
          this.$emit('edit', data)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
    .complete {
        span {
            text-decoration: line-through;
        }
    }
</style>
