<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 border-b border-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="gradient-text">Installation Guide</span>
          </h1>
          <p class="text-xl text-gray-400">
            Get PgForge up and running in minutes on your system
          </p>
        </div>
      </div>
    </section>

    <!-- Installation Methods -->
    <section class="py-16">
      <div class="container mx-auto px-4 max-w-5xl">
        <!-- Binary Download -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Download Pre-built Binary</h2>
          <p class="text-gray-400 mb-6">
            Download the appropriate binary for your platform:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="feature-card">
              <h3 class="text-lg font-semibold mb-3">Linux (x86_64)</h3>
              <div class="code-block text-xs">
                <pre><span class="terminal-prompt">$</span> <span class="terminal-command">curl -L https://github.com/xar/pgforge.dev/releases/latest/download/pgforge-linux-x64 -o pgforge</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">chmod +x pgforge</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">sudo mv pgforge /usr/local/bin/</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge --version</span></pre>
              </div>
            </div>

            <div class="feature-card">
              <h3 class="text-lg font-semibold mb-3">macOS (Apple Silicon)</h3>
              <div class="code-block text-xs">
                <pre><span class="terminal-prompt">$</span> <span class="terminal-command">curl -L https://github.com/xar/pgforge.dev/releases/latest/download/pgforge-darwin-arm64 -o pgforge</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">chmod +x pgforge</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">sudo mv pgforge /usr/local/bin/</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge --version</span></pre>
              </div>
            </div>
          </div>

          <div
            class="mt-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg"
          >
            <p class="text-sm text-blue-300">
              <Icon name="lucide:info" class="inline-block w-4 h-4 mr-1" />
              View all available releases and platforms on the
              <a
                href="https://github.com/xar/pgforge.dev/releases"
                class="underline hover:text-blue-200"
                >GitHub releases page</a
              >
            </p>
          </div>
        </div>

        <!-- Quick Install Script -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Install Script</h2>
          <p class="text-gray-400 mb-6">
            Automatic platform detection and installation:
          </p>

          <div class="code-block">
            <pre><span class="terminal-prompt">$</span> <span class="terminal-command">curl -fsSL https://raw.githubusercontent.com/xar/pgforge.dev/main/install.sh | bash</span></pre>
          </div>
        </div>



        <!-- Getting Started -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Getting Started</h2>

          <div class="code-block">
            <pre><span class="terminal-comment"># Initialize and create your first instance</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge init</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge create mydb</span></pre>
          </div>
        </div>

      </div>
    </section>

    <!-- Next Steps -->
    <section class="py-12 border-t border-gray-800/50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-6">
          <span class="gradient-text">Next Steps</span>
        </h2>
        <div class="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/xar/pgforge.dev#readme"
            class="btn-terminal"
          >
            Documentation
          </a>
          <a
            href="https://github.com/xar/pgforge.dev/issues"
            class="btn-terminal"
          >
            Support
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Installation - PgForge",
  meta: [
    {
      name: "description",
      content:
        "Install PgForge on Linux, macOS, or Windows. Download pre-built binaries or use the install script.",
    },
  ],
});
</script>

