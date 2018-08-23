<template>
    <div class="List">
        <p v-if="isEmpty" class="empty">
            The list is empty.
        </p>
        <p v-else-if="isItemsEmpty">
            No items to show for this filter.<br>
            There are {{ totalItemsCount }} items in total.
        </p>
        <ol v-else>
            <li v-for="item of items" :key="item.id">
                <Item
                        :item="item"
                        @toggle="$emit('toggle', item.id)"
                        @edit="$emit('edit', $event)"
                />
            </li>
        </ol>

        <ItemCreator @add="$emit('add', $event)"/>
    </div>
</template>

<script>
  import Item from './Item'
  import ItemCreator from './ItemCreator'
  import {TodoItem} from '../types'

  export default {
    components: {
      Item,
      ItemCreator,
    },
    props: {
      items: {
        required: true,
        validator: value => Array.isArray(value) && value.every(TodoItem),
      },
      totalItemsCount: {
        required: true,
        type: Number,
      },
    },
    computed: {
      isEmpty () {
        return this.totalItemsCount === 0
      },
      isItemsEmpty () {
        return this.items.length === 0
      },
    },
  }
</script>

<style scoped lang="scss">
</style>
