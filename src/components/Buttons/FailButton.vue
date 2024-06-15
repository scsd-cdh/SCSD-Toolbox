<template>
    <div>
      <div class="buttons">
        <button class="
          mx-2 
          rounded px-4 py-2 
          transition duration-100
          text-white border 
          bg-red-700 
          border-red-700 
          hover:bg-white 
          hover:text-red-700">
          <font-awesome-icon :icon="['fas', 'xmark']" />
          {{ text }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FailButton',
    props: {
      text: {
        type: String,
        default: 'Issue',
      },
    },
  }
  </script>
  