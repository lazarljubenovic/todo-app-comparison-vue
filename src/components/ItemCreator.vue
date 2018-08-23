<template>
    <form @submit="onSubmit">
        <label>
            <span>New item</span>
            <input type="text" name="text">
        </label>
        <button type="submit">
            Add
        </button>
    </form>
</template>

<script>
  export default {
    methods: {
      onSubmit (event) {
        event.preventDefault()
        const $form = event.target
        const $input = $form.elements.namedItem('text')
        const {value} = $input
        const trimmed = value.trim()
        if (trimmed.length === 0) return
        this.$emit('add', trimmed)
        $input.value = ''
      },
    },
  }
</script>
