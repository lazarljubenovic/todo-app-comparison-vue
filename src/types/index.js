/**
 * @return {boolean}
 */
export function TodoItem (value) {
  return typeof value.id === 'number' && typeof value.text === 'string' && typeof value.isCompleted === 'boolean'
}

/**
 * @return {boolean}
 */
export function Filter (value) {
  return ['all', 'complete', 'incomplete'].includes(value)
}
