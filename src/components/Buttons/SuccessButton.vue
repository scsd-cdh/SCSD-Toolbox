<template>
    <div>
      <div class="buttons">
        <button class="
          mx-2 
          rounded px-4 py-2 
          transition duration-100 
          text-white border 
          bg-green-700 
          border-green-700 
          hover:bg-white 
          hover:text-green-700">
          <font-awesome-icon :icon="['fas', 'check']" /> 
          {{ text }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SucessButton',
    props: {
      text: {
        type: String,
        default: 'Success',
      },
    },
  }
  </script>
  
