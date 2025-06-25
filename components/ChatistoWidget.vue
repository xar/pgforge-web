<template></template>

<script setup lang="ts">
const { isReady, loadingError, loadChatisto, openChat } = useChatisto();

// Load Chatisto when component mounts (client-side only)
onMounted(async () => {
  if (process.client) {
    try {
      await loadChatisto();
    } catch (error) {
      console.error("Failed to load Chatisto widget", error);
    }
  }
});

const handleChatToggle = () => {
  if (isReady.value) {
    openChat();
  }
};
</script>
