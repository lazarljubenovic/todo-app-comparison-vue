<template>
    <div class="App">
        <List
                :items="visibleItems"
                :totalItemsCount="items.length"
                @add="addItem"
                @toggle="toggle"
                @edit="edit"
        />
        <Filters
                :filter="selectedFilter"
                @filterChange="changeFilter"
        />
    </div>
</template>

<script>
  import List from './components/List'
  import Filters from './components/Filters'

  let counter = 0

  export default {
    name: 'app',
    components: {
      List,
      Filters,
    },
    data () {
      return {
        items: [],
        selectedFilter: 'all',
      }
    },
    computed: {
      visibleItems () {
        switch (this.selectedFilter) {
          case 'all':
            return this.items
          case 'complete':
            return this.items.filter(item => item.isCompleted)
          case 'incomplete':
            return this.items.filter(item => !item.isCompleted)
        }
      },
    },
    methods: {
      addItem (itemText) {
        const trimmed = itemText.trim()
        if (trimmed.length === 0) return
        const newItem = {
          id: counter++,
          text: trimmed,
          isCompleted: false,
        }
        this.items = [...this.items, newItem]
      },
      toggle (id) {
        const index = this.items.findIndex(item => item.id === id)
        if (index === -1) {
          throw new Error(`Item with ID ${id} not found.`)
        }
        const oldItem = this.items[index]
        const newItem = {...oldItem, isCompleted: !oldItem.isCompleted}
        const before = this.items.slice(0, index)
        const after = this.items.slice(index + 1)
        this.items = [...before, newItem, ...after]
      },
      edit ({id, text}) {
        const index = this.items.findIndex(item => item.id === id)
        if (index === -1) {
          throw new Error(`Item with ID ${id} not found.`)
        }
        const oldItem = this.items[index]
        const newItem = {...oldItem, text}
        const before = this.items.slice(0, index)
        const after = this.items.slice(index + 1)
        this.items = [...before, newItem, ...after]
      },
      changeFilter (filter) {
        this.selectedFilter = filter
      },
    },
  }
</script>
