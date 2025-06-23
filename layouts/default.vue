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
              to="/docs"
              class="text-gray-400 hover:text-[#00ff41] transition-colors font-mono text-sm"
            >
              Docs
            </NuxtLink>
            <NuxtLink
              to="/features"
              class="text-gray-400 hover:text-[#00ff41] transition-colors font-mono text-sm"
            >
              Features
            </NuxtLink>
            <NuxtLink
              to="/pricing"
              class="text-gray-400 hover:text-[#00ff41] transition-colors font-mono text-sm"
            >
              Pricing
            </NuxtLink>
            <a
              href="https://github.com/pgforge/pgforge"
              target="_blank"
              rel="noopener"
              class="text-gray-400 hover:text-[#00ff41] transition-colors"
            >
              <Icon name="lucide:github" class="w-5 h-5" />
            </a>
            <NuxtLink to="/install" class="btn-terminal-primary">
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800/50 bg-black/50 mt-24">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-[#00ff41] rounded flex items-center justify-center"
              >
                <span class="text-black font-bold text-lg font-mono">PF</span>
              </div>
              <span class="text-lg font-mono font-semibold text-[#00ff41]"
                >PgForge</span
              >
            </div>
            <p class="text-gray-400 text-sm">
              Forge your PostgreSQL instances with precision
            </p>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4">Product</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/features"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >Features</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/pricing"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >Pricing</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/docs"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >Documentation</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/changelog"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >Changelog</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4">Resources</h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="https://github.com/pgforge/pgforge"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >GitHub</a
                >
              </li>
              <li>
                <NuxtLink
                  to="/community"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >Community</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/blog"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >Blog</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/support"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >Support</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4">Company</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/about"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >About</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >Contact</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/privacy"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >Privacy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/terms"
                  class="text-gray-400 hover:text-[#00ff41] text-sm"
                  >Terms</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between"
        >
          <p class="text-gray-500 text-sm font-mono">
            © 2025 PgForge. All rights reserved.
          </p>
          <div class="flex items-center gap-4">
            <a
              href="https://twitter.com/pgforge"
              class="text-gray-400 hover:text-[#00ff41]"
            >
              <Icon name="lucide:twitter" class="w-5 h-5" />
            </a>
            <a
              href="https://github.com/pgforge"
              class="text-gray-400 hover:text-[#00ff41]"
            >
              <Icon name="lucide:github" class="w-5 h-5" />
            </a>
            <a
              href="https://discord.gg/pgforge"
              class="text-gray-400 hover:text-[#00ff41]"
            >
              <Icon name="simple-icons:discord" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
