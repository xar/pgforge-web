<template>
  <div class="terminal-window max-w-4xl mx-auto">
    <div class="terminal-header">
      <div class="flex gap-1.5">
        <div class="terminal-button terminal-button-red"></div>
        <div class="terminal-button terminal-button-yellow"></div>
        <div class="terminal-button terminal-button-green"></div>
      </div>
      <div class="flex-1 text-center">
        <span class="text-gray-400 text-xs font-mono">pgforge@terminal</span>
      </div>
    </div>
    <div class="terminal-body min-h-[400px]">
      <div
        v-for="(line, index) in currentDemo.lines"
        :key="`${currentDemoIndex}-${index}`"
      >
        <div v-if="line.type === 'comment'" class="terminal-comment">
          {{ line.text }}
        </div>
        <div v-else-if="line.type === 'prompt'" class="flex items-start">
          <span class="terminal-prompt mr-2">$</span>
          <span
            v-if="shouldShowLine(index)"
            class="terminal-command"
            :class="{ 'typing-animation': isTypingLine(index) }"
          >
            {{ line.text }}
          </span>
          <span v-if="isCurrentLine(index)" class="terminal-cursor ml-1"></span>
        </div>
        <div
          v-else-if="line.type === 'output' && shouldShowLine(index)"
          :class="{
            'terminal-output': line.style === 'normal',
            'terminal-success': line.style === 'success',
            'terminal-error': line.style === 'error',
            'terminal-warning': line.style === 'warning',
          }"
          class="ml-2"
        >
          <pre>{{ line.text }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const demos = [
  {
    title: "Create a new instance",
    lines: [
      {
        type: "comment",
        text: "# Create a production-ready PostgreSQL instance",
      },
      { type: "prompt", text: "pgforge create myapp-db --template production" },
      {
        type: "output",
        text: "✓ Creating PostgreSQL instance: myapp-db",
        style: "success",
      },
      { type: "output", text: "✓ Using template: production", style: "normal" },
      { type: "output", text: "✓ PostgreSQL version: 15.3", style: "normal" },
      {
        type: "output",
        text: "✓ Generating SSL certificates...",
        style: "normal",
      },
      {
        type: "output",
        text: "✓ Configuring performance settings...",
        style: "normal",
      },
      {
        type: "output",
        text: "✓ Setting up automated backups...",
        style: "normal",
      },
      {
        type: "output",
        text: "✓ Instance created successfully!",
        style: "success",
      },
      {
        type: "output",
        text: "\nConnection: postgresql://localhost:5433/myapp_production",
        style: "normal",
      },
    ],
  },
  {
    title: "Manage multiple instances",
    lines: [
      { type: "comment", text: "# List all running instances" },
      { type: "prompt", text: "pgforge list --status running" },
      {
        type: "output",
        text: `NAME         VERSION  PORT   STATUS   UPTIME    CONNECTIONS
myapp-prod   15.3     5433   running  2d 14h    45/200
myapp-dev    15.3     5434   running  5d 3h     12/100
analytics    14.8     5435   running  12d 6h    89/300
testing      16.0     5436   running  1h 23m    5/50`,
        style: "normal",
      },
      { type: "prompt", text: "pgforge monitor myapp-prod" },
      {
        type: "output",
        text: `✓ Health: Healthy
✓ CPU: 12.5%  Memory: 1.2GB/4GB  Disk: 45.3GB/100GB
✓ Active Connections: 45  Idle: 12  Waiting: 0
✓ Queries/sec: 1,245  Avg response: 2.3ms`,
        style: "success",
      },
    ],
  },
  {
    title: "Backup and restore",
    lines: [
      { type: "comment", text: "# Create a backup before migration" },
      {
        type: "prompt",
        text: 'pgforge backup create myapp-prod --name "pre-migration-v2.0"',
      },
      {
        type: "output",
        text: "✓ Creating backup: pre-migration-v2.0",
        style: "success",
      },
      {
        type: "output",
        text: "  Format: custom (compressed)",
        style: "normal",
      },
      { type: "output", text: "  Size: 2.3GB → 487MB", style: "normal" },
      { type: "output", text: "✓ Backup completed in 45s", style: "success" },
      {
        type: "output",
        text: "\nBackup stored at: /var/backups/pgforge/myapp-prod/20250623-120000/",
        style: "normal",
      },
      { type: "prompt", text: "pgforge backup list myapp-prod" },
      {
        type: "output",
        text: `NAME                    SIZE    CREATED           RETENTION
pre-migration-v2.0      487MB   23 Jun 12:00      30d
daily-20250622          465MB   22 Jun 02:00      7d
daily-20250621          461MB   21 Jun 02:00      7d`,
        style: "normal",
      },
    ],
  },
  {
    title: "Configuration management",
    lines: [
      { type: "comment", text: "# Update instance configuration" },
      {
        type: "prompt",
        text: "pgforge config set myapp-prod spec.performance.sharedBuffers 512MB",
      },
      { type: "output", text: "✓ Configuration updated", style: "success" },
      {
        type: "output",
        text: "  sharedBuffers: 256MB → 512MB",
        style: "warning",
      },
      { type: "prompt", text: "pgforge config apply myapp-prod --restart" },
      {
        type: "output",
        text: "✓ Validating configuration...",
        style: "normal",
      },
      {
        type: "output",
        text: "✓ Creating backup before restart...",
        style: "normal",
      },
      {
        type: "output",
        text: "✓ Applying configuration changes...",
        style: "normal",
      },
      { type: "output", text: "✓ Restarting instance...", style: "normal" },
      {
        type: "output",
        text: "✓ Instance restarted successfully!",
        style: "success",
      },
    ],
  },
];

const currentDemoIndex = ref(0);
const currentLineIndex = ref(0);
const isTyping = ref(false);
let demoInterval = null;
let lineInterval = null;

const currentDemo = computed(() => demos[currentDemoIndex.value]);

const shouldShowLine = (index) => {
  return index <= currentLineIndex.value;
};

const isTypingLine = (index) => {
  return (
    index === currentLineIndex.value &&
    isTyping.value &&
    currentDemo.value.lines[index].type === "prompt"
  );
};

const isCurrentLine = (index) => {
  return (
    index === currentLineIndex.value &&
    isTyping.value &&
    currentDemo.value.lines[index].type === "prompt"
  );
};

const nextLine = () => {
  if (currentLineIndex.value < currentDemo.value.lines.length - 1) {
    currentLineIndex.value++;

    // Add typing effect for prompt lines
    const line = currentDemo.value.lines[currentLineIndex.value];
    if (line.type === "prompt") {
      isTyping.value = true;
      setTimeout(() => {
        isTyping.value = false;
      }, 1500);
    }
  } else {
    // Move to next demo
    setTimeout(() => {
      currentDemoIndex.value = (currentDemoIndex.value + 1) % demos.length;
      currentLineIndex.value = 0;
      isTyping.value = false;
    }, 3000);
  }
};

onMounted(() => {
  // Start the animation
  lineInterval = setInterval(nextLine, 2000);
});

onUnmounted(() => {
  if (lineInterval) clearInterval(lineInterval);
  if (demoInterval) clearInterval(demoInterval);
});
</script>

<style scoped>
.typing-animation {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 1.5s steps(40, end);
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
