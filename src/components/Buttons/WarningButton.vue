<template>
    <div>
      <div class="buttons">
        <button class="
        mx-2 
        rounded px-4 py-2 
        transition duration-300 ease-in-out 
        text-white border 
        bg-yellow-500 
        border-yellow-500 
        hover:bg-white 
        hover:text-yellow-500">
        <font-awesome-icon :icon="['fas', 'exclamation-triangle']" /> 
        Warning
      </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WarningButton'
  }
  </script>
  