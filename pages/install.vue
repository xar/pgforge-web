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
        <!-- Quick Install -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Quick Install</h2>
          <p class="text-gray-400 mb-6">
            The fastest way to install PgForge on Linux and macOS:
          </p>

          <div class="terminal-window">
            <div class="terminal-header">
              <div class="flex gap-1.5">
                <div class="terminal-button terminal-button-red"></div>
                <div class="terminal-button terminal-button-yellow"></div>
                <div class="terminal-button terminal-button-green"></div>
              </div>
              <div class="flex-1 text-center">
                <span class="text-gray-400 text-xs font-mono"
                  >Install Script</span
                >
              </div>
            </div>
            <div class="terminal-body">
              <pre><span class="terminal-prompt">$</span> <span class="terminal-command">curl -fsSL https://get.pgforge.dev | bash</span></pre>
            </div>
          </div>

          <div
            class="mt-4 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg"
          >
            <p class="text-sm text-blue-300">
              <Icon name="lucide:info" class="inline-block w-4 h-4 mr-1" />
              The install script will detect your OS and install the appropriate
              version
            </p>
          </div>
        </div>

        <!-- Package Managers -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Package Managers</h2>

          <div class="space-y-6">
            <!-- Homebrew -->
            <div>
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <Icon name="simple-icons:homebrew" class="w-5 h-5" />
                Homebrew (macOS/Linux)
              </h3>
              <div class="code-block">
                <pre><span class="terminal-prompt">$</span> <span class="terminal-command">brew install pgforge</span></pre>
              </div>
            </div>

            <!-- APT -->
            <div>
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <Icon name="simple-icons:ubuntu" class="w-5 h-5" />
                APT (Ubuntu/Debian)
              </h3>
              <div class="code-block">
                <pre><span class="terminal-comment"># Add PgForge repository</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">curl -fsSL https://pkg.pgforge.dev/pgforge.gpg | sudo apt-key add -</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">echo "deb https://pkg.pgforge.dev stable main" | sudo tee /etc/apt/sources.list.d/pgforge.list</span>

<span class="terminal-comment"># Install PgForge</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">sudo apt update</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">sudo apt install pgforge</span></pre>
              </div>
            </div>

            <!-- YUM -->
            <div>
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <Icon name="simple-icons:redhat" class="w-5 h-5" />
                YUM/DNF (RHEL/CentOS/Fedora)
              </h3>
              <div class="code-block">
                <pre><span class="terminal-comment"># Add PgForge repository</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">sudo rpm --import https://pkg.pgforge.dev/pgforge.gpg</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">sudo curl -o /etc/yum.repos.d/pgforge.repo https://pkg.pgforge.dev/pgforge.repo</span>

<span class="terminal-comment"># Install PgForge</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">sudo yum install pgforge</span></pre>
              </div>
            </div>
          </div>
        </div>

        <!-- Manual Installation -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Manual Installation</h2>
          <p class="text-gray-400 mb-6">
            Download and install the binary manually:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="feature-card">
              <h3 class="text-lg font-semibold mb-3">Linux (x86_64)</h3>
              <div class="code-block text-xs">
                <pre><span class="terminal-prompt">$</span> <span class="terminal-command">wget https://github.com/pgforge/pgforge/releases/latest/download/pgforge-linux-amd64.tar.gz</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">tar -xzf pgforge-linux-amd64.tar.gz</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">sudo mv pgforge /usr/local/bin/</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge --version</span></pre>
              </div>
            </div>

            <div class="feature-card">
              <h3 class="text-lg font-semibold mb-3">macOS (Apple Silicon)</h3>
              <div class="code-block text-xs">
                <pre><span class="terminal-prompt">$</span> <span class="terminal-command">wget https://github.com/pgforge/pgforge/releases/latest/download/pgforge-darwin-arm64.tar.gz</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">tar -xzf pgforge-darwin-arm64.tar.gz</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">sudo mv pgforge /usr/local/bin/</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge --version</span></pre>
              </div>
            </div>
          </div>
        </div>

        <!-- System Requirements -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">System Requirements</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="feature-card">
              <h3 class="text-lg font-semibold mb-3">Operating Systems</h3>
              <ul class="space-y-2 text-sm text-gray-400">
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-[#00ff41]" />
                  Linux (Ubuntu 18.04+, CentOS 7+, Debian 9+)
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-[#00ff41]" />
                  macOS 12+ (Monterey or later)
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-[#00ff41]" />
                  Windows 10+ (via WSL2)
                </li>
              </ul>
            </div>

            <div class="feature-card">
              <h3 class="text-lg font-semibold mb-3">Hardware Requirements</h3>
              <ul class="space-y-2 text-sm text-gray-400">
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-[#00ff41]" />
                  CPU: x86_64 or ARM64 architecture
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-[#00ff41]" />
                  RAM: 2GB minimum, 4GB+ recommended
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-[#00ff41]" />
                  Disk: 1GB for PgForge + space for instances
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Post Installation -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Post Installation</h2>

          <div class="space-y-8">
            <!-- Initialize -->
            <div>
              <h3 class="text-lg font-semibold mb-3">1. Initialize PgForge</h3>
              <div class="code-block">
                <pre><span class="terminal-prompt">$</span> <span class="terminal-command">pgforge init</span>

<span class="terminal-success">✓ Creating configuration directory: ~/.pgforge</span>
<span class="terminal-success">✓ Initializing global configuration</span>
<span class="terminal-success">✓ Setting up system dependencies</span>
<span class="terminal-success">✓ PgForge initialized successfully!</span></pre>
              </div>
            </div>

            <!-- System Check -->
            <div>
              <h3 class="text-lg font-semibold mb-3">2. Verify Installation</h3>
              <div class="code-block">
                <pre><span class="terminal-prompt">$</span> <span class="terminal-command">pgforge system check</span>

<span class="terminal-success">✓ PgForge version: 1.0.0</span>
<span class="terminal-success">✓ Runtime: Bun 1.0.25</span>
<span class="terminal-success">✓ System: Linux x86_64</span>
<span class="terminal-success">✓ PostgreSQL binaries: Found</span>
<span class="terminal-success">✓ Available versions: 15.3, 14.8, 13.11</span>
<span class="terminal-success">✓ All checks passed!</span></pre>
              </div>
            </div>

            <!-- First Instance -->
            <div>
              <h3 class="text-lg font-semibold mb-3">
                3. Create Your First Instance
              </h3>
              <div class="code-block">
                <pre><span class="terminal-prompt">$</span> <span class="terminal-command">pgforge create my-first-db</span>

<span class="terminal-output">? Select PostgreSQL version: </span><span class="terminal-success">15.3</span>
<span class="terminal-output">? Select template: </span><span class="terminal-success">development</span>
<span class="terminal-output">? Port (auto-detected): </span><span class="terminal-success">5433</span>

<span class="terminal-success">✓ Creating instance: my-first-db</span>
<span class="terminal-success">✓ Instance created and started!</span>

<span class="terminal-output">Connection string:</span>
<span class="terminal-command">postgresql://postgres@localhost:5433/postgres</span></pre>
              </div>
            </div>
          </div>
        </div>

        <!-- Troubleshooting -->
        <div>
          <h2 class="text-2xl font-bold mb-6">Troubleshooting</h2>

          <div class="space-y-6">
            <div class="feature-card">
              <h3 class="text-lg font-semibold mb-2">Permission Denied</h3>
              <p class="text-gray-400 text-sm mb-3">
                If you get permission errors during installation:
              </p>
              <div class="code-block text-sm">
                <pre><span class="terminal-comment"># Make sure the binary is executable</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">chmod +x /usr/local/bin/pgforge</span>

<span class="terminal-comment"># Add to PATH if needed</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bashrc</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">source ~/.bashrc</span></pre>
              </div>
            </div>

            <div class="feature-card">
              <h3 class="text-lg font-semibold mb-2">PostgreSQL Not Found</h3>
              <p class="text-gray-400 text-sm mb-3">
                If PostgreSQL binaries are not found:
              </p>
              <div class="code-block text-sm">
                <pre><span class="terminal-comment"># Install PostgreSQL client tools</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge system setup --install-postgresql</span>

<span class="terminal-comment"># Or manually install PostgreSQL</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">sudo apt install postgresql-client-15  # Ubuntu/Debian</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">brew install postgresql@15             # macOS</span></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Steps -->
    <section class="py-16 border-t border-gray-800/50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">
          <span class="gradient-text">Next Steps</span>
        </h2>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Now that PgForge is installed, explore what you can do
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/docs" class="btn-terminal">
            Read Documentation
          </NuxtLink>
          <NuxtLink to="/docs/quickstart" class="btn-terminal">
            Quick Start Guide
          </NuxtLink>
          <a
            href="https://github.com/pgforge/pgforge/tree/main/examples"
            class="btn-terminal"
          >
            View Examples
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
        "Install PgForge on Linux, macOS, or Windows. Quick install scripts, package managers, and manual installation guides.",
    },
  ],
});
</script>
