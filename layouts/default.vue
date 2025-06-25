<template>
  <div class="min-h-screen bg-[#0a0a0a] text-gray-100 flex flex-col">
    <!-- Navigation -->
    <nav
      class="border-b border-gray-800/50 backdrop-blur-sm bg-black/50 sticky top-0 z-50"
    >
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center gap-3">
            <div
              class="w-8 h-8 bg-[#00ff41] rounded flex items-center justify-center"
            >
              <span class="text-black font-bold text-lg font-mono">PF</span>
            </div>
            <span class="text-lg font-mono font-semibold text-[#00ff41]"
              >PgForge</span
            >
          </NuxtLink>

          <div class="flex items-center gap-6">
            <NuxtLink
              to="/install"
              class="text-gray-400 hover:text-[#00ff41] transition-colors font-mono text-sm"
            >
              Install
            </NuxtLink>
            <a
              href="https://github.com/xar/pgforge.dev"
              target="_blank"
              rel="noopener"
              class="text-gray-400 hover:text-[#00ff41] transition-colors"
            >
              <Icon name="lucide:github" class="w-5 h-5" />
            </a>
            <a
              href="https://github.com/xar/pgforge.dev/releases/latest"
              class="btn-terminal-primary"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Simplified Footer -->
    <footer class="border-t border-gray-800/50 bg-black/50 mt-24">
      <div class="container mx-auto px-4 py-8">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-6 h-6 bg-[#00ff41] rounded flex items-center justify-center"
            >
              <span class="text-black font-bold text-sm font-mono">PF</span>
            </div>
            <span class="text-sm text-gray-400">
              PgForge - Open Source PostgreSQL Instance Manager
            </span>
          </div>

          <div class="flex items-center gap-6">
            <a
              href="https://github.com/xar/pgforge.dev"
              class="text-gray-400 hover:text-[#00ff41] text-sm font-mono"
            >
              GitHub
            </a>
            <a
              href="https://github.com/xar/pgforge.dev/issues"
              class="text-gray-400 hover:text-[#00ff41] text-sm font-mono"
            >
              Issues
            </a>
            <a
              href="https://github.com/xar/pgforge.dev/blob/main/LICENSE"
              class="text-gray-400 hover:text-[#00ff41] text-sm font-mono"
            >
              MIT License
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Chat Widget -->
    <ChatistoWidget />
  </div>
</template>
