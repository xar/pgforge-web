<template>
  <div class="space-y-4">
    <div v-if="loading" class="text-center">
      <div class="inline-block animate-pulse">
        <Icon
          name="lucide:loader-2"
          class="w-6 h-6 text-[#00ff41] animate-spin"
        />
      </div>
    </div>

    <div v-else-if="error" class="text-red-400 text-sm">
      Failed to load releases
    </div>

    <div v-else-if="releases.length > 0" class="space-y-4">
      <div v-for="release in releases" :key="release.id" class="feature-card">
        <div class="flex items-start justify-between mb-3">
          <div>
            <h3 class="text-lg font-semibold flex items-center gap-2">
              {{ release.name || release.tag_name }}
              <span
                v-if="release.prerelease"
                class="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded"
              >
                Pre-release
              </span>
              <span
                v-if="isLatest(release)"
                class="text-xs bg-[#00ff41]/20 text-[#00ff41] px-2 py-0.5 rounded"
              >
                Latest
              </span>
            </h3>
            <p class="text-sm text-gray-500 mt-1">
              Released {{ formatDate(release.published_at) }}
            </p>
          </div>
        </div>

        <div
          v-if="release.body"
          class="text-sm text-gray-400 mb-4 prose prose-invert max-w-none"
        >
          <div v-html="parseMarkdown(release.body)"></div>
        </div>

        <div
          v-if="release.assets && release.assets.length > 0"
          class="space-y-2"
        >
          <h4 class="text-sm font-semibold text-gray-300">Downloads:</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <a
              v-for="asset in release.assets"
              :key="asset.id"
              :href="asset.browser_download_url"
              class="flex items-center justify-between p-3 bg-black/50 border border-gray-800 rounded hover:border-[#00ff41]/50 transition-colors group"
            >
              <span class="text-sm font-mono group-hover:text-[#00ff41]">{{
                asset.name
              }}</span>
              <span class="text-xs text-gray-500">{{
                formatSize(asset.size)
              }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-gray-500 text-center">
      No releases available yet
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  limit: {
    type: Number,
    default: 3,
  },
});

const releases = ref([]);
const loading = ref(true);
const error = ref(false);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const formatSize = (bytes) => {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
};

const isLatest = (release) => {
  return releases.value.indexOf(release) === 0;
};

const parseMarkdown = (text) => {
  // Simple markdown parsing for release notes
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^### (.*$)/gim, '<h4 class="font-semibold mt-3 mb-1">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 class="font-semibold mt-4 mb-2">$1</h3>')
    .replace(/^# (.*$)/gim, '<h2 class="font-bold mt-4 mb-2">$1</h2>')
    .replace(/\n\n/g, '</p><p class="mb-2">')
    .replace(/^/, '<p class="mb-2">')
    .replace(/$/, "</p>")
    .replace(
      /`([^`]+)`/g,
      '<code class="px-1 py-0.5 bg-gray-800 rounded text-[#00ff41]">$1</code>'
    )
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[#00ff41] hover:underline" target="_blank">$1</a>'
    );
};

onMounted(async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/xar/pgforge.dev/releases"
    );
    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();
    releases.value = data.slice(0, props.limit);
  } catch (e) {
    error.value = true;
    console.error("Failed to fetch releases:", e);
  } finally {
    loading.value = false;
  }
});
</script>
