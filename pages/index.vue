<template>
  <div>
    <!-- Hero Section with Terminal Demo -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg"
    >
      <div class="container mx-auto px-4 py-20">
        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-7xl font-bold mb-6">
            <span class="gradient-text">PgForge</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 mb-4 font-mono">
            Forge your PostgreSQL instances with precision
          </p>
          <p class="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Modern CLI tool for PostgreSQL instance management.
          </p>
          <div class="flex gap-4 justify-center mb-6">
            <a
              href="https://github.com/xar/pgforge.dev/releases/latest"
              class="btn-terminal-primary"
            >
              Download Latest
            </a>
            <a href="https://github.com/xar/pgforge.dev" class="btn-terminal">
              View on GitHub
            </a>
          </div>
        </div>

        <!-- Terminal Demo -->
        <div class="mt-16">
          <TerminalDemo />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 border-t border-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold mb-4">
            <span class="gradient-text">Key Features</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div class="feature-card text-center">
            <Icon
              name="lucide:database"
              class="w-8 h-8 text-[#00ff41] mx-auto mb-3"
            />
            <h3 class="font-semibold mb-2">Multiple Instances</h3>
            <p class="text-gray-400 text-sm">
              Run different PostgreSQL versions simultaneously.
            </p>
          </div>

          <div class="feature-card text-center">
            <Icon
              name="lucide:file-code"
              class="w-8 h-8 text-[#00ff41] mx-auto mb-3"
            />
            <h3 class="font-semibold mb-2">YAML Configuration</h3>
            <p class="text-gray-400 text-sm">
              Declarative configuration with validation.
            </p>
          </div>

          <div class="feature-card text-center">
            <Icon
              name="lucide:terminal"
              class="w-8 h-8 text-[#00ff41] mx-auto mb-3"
            />
            <h3 class="font-semibold mb-2">CLI First</h3>
            <p class="text-gray-400 text-sm">
              Built for developers who love the terminal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Releases Section -->
    <section class="py-16 border-t border-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold mb-4">
            <span class="gradient-text">Latest Releases</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Stay up to date with the latest features, improvements, and bug
            fixes.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <GitHubReleases :limit="3" />
        </div>
      </div>
    </section>

    <!-- Installation Section -->
    <section class="py-16 border-t border-gray-800/50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-6">
          <span class="gradient-text">Quick Install</span>
        </h2>

        <div class="max-w-xl mx-auto mb-6">
          <div class="code-block">
            <pre
              class="text-sm"
            ><span class="terminal-comment"># Install script</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">curl -fsSL https://raw.githubusercontent.com/xar/pgforge.dev/main/install.sh | bash</span></pre>
          </div>
        </div>

        <NuxtLink to="/install" class="btn-terminal">
          Installation Guide
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page meta
useHead({
  title: "PgForge - PostgreSQL Instance Manager",
  meta: [
    {
      name: "description",
      content:
        "Modern CLI tool for creating, managing, and orchestrating multiple PostgreSQL instances. Run different versions simultaneously with enterprise-grade features.",
    },
  ],
});
</script>
