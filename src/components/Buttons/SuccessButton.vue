<template>
    <div>
      <div class="buttons">
        <button class="
          mx-2 
          rounded px-4 py-2 
          transition duration-300 
          ease-in-out 
          text-white border 
          bg-green-700 
          border-green-700 
          hover:bg-white 
          hover:text-green-700">
          <font-awesome-icon :icon="['fas', 'check']" /> 
          Success
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SucessButton'
  }
  </script>
  
