<template>
    <div>
      <div class="buttons">
        <button class="
          mx-2 
          rounded px-4 py-2 
          transition duration-100
          text-white border 
          bg-yellow-500 
          border-yellow-500 
          hover:bg-white 
          hover:text-yellow-500">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']" /> 
          {{ text }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WarningButton',
    props: {
      text: {
        type: String,
        default: 'Warning',
      },
    },
  }
  </script>
  