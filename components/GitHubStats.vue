<template>
  <div class="inline-flex items-center gap-3 text-sm">
    <a
      v-if="!loading && !error"
      href="https://github.com/xar/pgforge.dev"
      class="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 border border-gray-800 rounded-md hover:border-[#00ff41]/50 transition-colors group"
      target="_blank"
      rel="noopener"
    >
      <Icon name="lucide:star" class="w-4 h-4 group-hover:text-[#00ff41]" />
      <span class="font-mono group-hover:text-[#00ff41]">{{ stars }}</span>
    </a>

    <a
      v-if="!loading && !error"
      href="https://github.com/xar/pgforge.dev/fork"
      class="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 border border-gray-800 rounded-md hover:border-[#00ff41]/50 transition-colors group"
      target="_blank"
      rel="noopener"
    >
      <Icon name="lucide:git-fork" class="w-4 h-4 group-hover:text-[#00ff41]" />
      <span class="font-mono group-hover:text-[#00ff41]">{{ forks }}</span>
    </a>

    <a
      v-if="!loading && !error"
      href="https://github.com/xar/pgforge.dev/issues"
      class="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 border border-gray-800 rounded-md hover:border-[#00ff41]/50 transition-colors group"
      target="_blank"
      rel="noopener"
    >
      <Icon
        name="lucide:circle-dot"
        class="w-4 h-4 group-hover:text-[#00ff41]"
      />
      <span class="font-mono group-hover:text-[#00ff41]">{{ openIssues }}</span>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const stars = ref(0);
const forks = ref(0);
const openIssues = ref(0);
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/xar/pgforge.dev"
    );
    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();
    stars.value = data.stargazers_count || 0;
    forks.value = data.forks_count || 0;
    openIssues.value = data.open_issues_count || 0;
  } catch (e) {
    error.value = true;
    console.error("Failed to fetch GitHub stats:", e);
  } finally {
    loading.value = false;
  }
});
</script>
