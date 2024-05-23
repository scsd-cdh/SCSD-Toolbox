<template>
  <div>
    <h2>UI Button Components</h2>
  
    <div class="buttons">
      <button class="success-button">
        <font-awesome-icon :icon="['fas', 'check']" /> 
        Success
      </button>
      
      <button class="warning-button">
        <font-awesome-icon :icon="['fas', 'exclamation-triangle']" /> 
        Warning
      </button>
      
      <button class="fail-button">
        <font-awesome-icon :icon="['fas', 'xmark']" />
        Issue
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UIButtons'
}
</script>

<style scoped>
.success-button {
  @apply bg-green-700 text-white border border-green-700 
          rounded px-4 py-2 transition duration-300 ease-in-out mx-2;
}

.success-button:hover {
  @apply bg-white text-green-700;
}

.warning-button {
  @apply bg-yellow-500 text-white border border-yellow-500 
          rounded px-4 py-2 transition duration-300 ease-in-out mx-2;
}

.warning-button:hover {
  @apply bg-white text-yellow-500;
}

.fail-button {
  @apply bg-red-700 text-white border border-red-700 
          rounded px-4 py-2 transition duration-300 ease-in-out mx-2;
}

.fail-button:hover {
  @apply bg-white text-red-700;
}

</style>
