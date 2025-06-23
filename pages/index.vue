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
          <p class="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
            Modern CLI tool for creating, managing, and orchestrating multiple
            PostgreSQL instances. Run different versions and configurations
            simultaneously with enterprise-grade features.
          </p>
          <div class="flex gap-4 justify-center">
            <NuxtLink to="/install" class="btn-terminal-primary">
              Get Started
            </NuxtLink>
            <a href="https://github.com/pgforge/pgforge" class="btn-terminal">
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

    <!-- Core Philosophy Section -->
    <section class="py-24 border-t border-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="gradient-text">Core Philosophy</span>
          </h2>
          <p class="text-xl text-gray-400">
            Built for developers who demand precision and control
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="feature-card">
            <div
              class="w-12 h-12 bg-[#00ff41]/20 rounded-lg flex items-center justify-center mb-4"
            >
              <Icon name="lucide:database" class="w-6 h-6 text-[#00ff41]" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Instance-First</h3>
            <p class="text-gray-400">
              Manage instances, not just versions. Run multiple PostgreSQL
              instances with different configurations simultaneously.
            </p>
          </div>

          <div class="feature-card">
            <div
              class="w-12 h-12 bg-[#00ff41]/20 rounded-lg flex items-center justify-center mb-4"
            >
              <Icon name="lucide:file-code" class="w-6 h-6 text-[#00ff41]" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Configuration as Code</h3>
            <p class="text-gray-400">
              YAML-based declarative configuration with schema validation,
              templates, and version control.
            </p>
          </div>

          <div class="feature-card">
            <div
              class="w-12 h-12 bg-[#00ff41]/20 rounded-lg flex items-center justify-center mb-4"
            >
              <Icon name="lucide:shield-check" class="w-6 h-6 text-[#00ff41]" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Security by Default</h3>
            <p class="text-gray-400">
              Automated SSL certificates, secure defaults, comprehensive audit
              logging, and compliance profiles.
            </p>
          </div>

          <div class="feature-card">
            <div
              class="w-12 h-12 bg-[#00ff41]/20 rounded-lg flex items-center justify-center mb-4"
            >
              <Icon name="lucide:terminal" class="w-6 h-6 text-[#00ff41]" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Developer Experience</h3>
            <p class="text-gray-400">
              Interactive setup, rich CLI interface, helpful error messages, and
              comprehensive documentation.
            </p>
          </div>

          <div class="feature-card">
            <div
              class="w-12 h-12 bg-[#00ff41]/20 rounded-lg flex items-center justify-center mb-4"
            >
              <Icon
                name="lucide:package-check"
                class="w-6 h-6 text-[#00ff41]"
              />
            </div>
            <h3 class="text-xl font-semibold mb-3">Production Ready</h3>
            <p class="text-gray-400">
              Enterprise features including backup automation, monitoring, log
              management, and high availability.
            </p>
          </div>

          <div class="feature-card">
            <div
              class="w-12 h-12 bg-[#00ff41]/20 rounded-lg flex items-center justify-center mb-4"
            >
              <Icon name="lucide:zap" class="w-6 h-6 text-[#00ff41]" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p class="text-gray-400">
              Native performance, efficient resource usage, and optimized for
              modern hardware.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features Section -->
    <section class="py-24 border-t border-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="gradient-text">Powerful Features</span>
          </h2>
          <p class="text-xl text-gray-400">
            Everything you need to manage PostgreSQL at scale
          </p>
        </div>

        <div class="space-y-24">
          <!-- Instance Management -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold mb-4">Instance Management</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300"
                    >Create and manage multiple PostgreSQL instances</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300"
                    >Run different versions simultaneously</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300"
                    >Automatic port and resource management</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300"
                    >Built-in templates for common use cases</span
                  >
                </li>
              </ul>
            </div>
            <div class="code-block">
              <pre
                class="text-sm"
              ><span class="terminal-comment"># Create instances from templates</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge create prod-db --template production</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge create dev-db --template development</span>

<span class="terminal-comment"># Manage instances</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge start prod-db</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge stop dev-db</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge restart --all</span></pre>
            </div>
          </div>

          <!-- Configuration Management -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="code-block">
                <pre
                  class="text-sm"
                ><span class="terminal-comment"># myapp-prod.yaml</span>
<span class="text-purple-400">apiVersion:</span> <span class="text-green-400">v1</span>
<span class="text-purple-400">kind:</span> <span class="text-green-400">PostgreSQLInstance</span>
<span class="text-purple-400">metadata:</span>
  <span class="text-purple-400">name:</span> <span class="text-green-400">myapp-prod</span>
<span class="text-purple-400">spec:</span>
  <span class="text-purple-400">version:</span> <span class="text-green-400">"15.3"</span>
  <span class="text-purple-400">network:</span>
    <span class="text-purple-400">port:</span> <span class="text-cyan-400">5433</span>
    <span class="text-purple-400">maxConnections:</span> <span class="text-cyan-400">200</span>
  <span class="text-purple-400">security:</span>
    <span class="text-purple-400">ssl:</span>
      <span class="text-purple-400">enabled:</span> <span class="text-cyan-400">true</span>
  <span class="text-purple-400">backup:</span>
    <span class="text-purple-400">enabled:</span> <span class="text-cyan-400">true</span>
    <span class="text-purple-400">schedule:</span> <span class="text-green-400">"0 2 * * *"</span></pre>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold mb-4">Configuration as Code</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300"
                    >Declarative YAML configuration</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300">Version control friendly</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300"
                    >Schema validation and auto-completion</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300"
                    >Template inheritance and variables</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- Monitoring & Performance -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold mb-4">Monitoring & Performance</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300"
                    >Real-time performance monitoring</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300"
                    >Automatic performance tuning</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300"
                    >Prometheus and Grafana integration</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-300">Alerting and health checks</span>
                </li>
              </ul>
            </div>
            <div class="code-block">
              <pre
                class="text-sm"
              ><span class="terminal-prompt">$</span> <span class="terminal-command">pgforge monitor myapp-prod</span>

<span class="terminal-success">✓ Health: Healthy</span>
<span class="terminal-success">✓ Uptime: 15d 7h 23m</span>

<span class="terminal-output">Resources:</span>
  CPU: 23.5%  Memory: 2.1GB/8GB  Disk: 67.2GB/200GB

<span class="terminal-output">Connections:</span>
  Active: 87  Idle: 23  Waiting: 0  Max: 200

<span class="terminal-output">Performance:</span>
  Queries/sec: 2,341  Cache hit: 98.7%
  Avg response: 1.2ms  Slow queries: 3</pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Section -->
    <section class="py-24 border-t border-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="gradient-text">Get Started in Minutes</span>
          </h2>
          <p class="text-xl text-gray-400">
            Install PgForge and create your first instance
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="flex gap-1.5">
                <div class="terminal-button terminal-button-red"></div>
                <div class="terminal-button terminal-button-yellow"></div>
                <div class="terminal-button terminal-button-green"></div>
              </div>
              <div class="flex-1 text-center">
                <span class="text-gray-400 text-xs font-mono"
                  >Quick Install</span
                >
              </div>
            </div>
            <div class="terminal-body">
              <pre><span class="terminal-comment"># Install PgForge</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">curl -fsSL https://get.pgforge.dev | bash</span>

<span class="terminal-comment"># Initialize PgForge</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge init</span>

<span class="terminal-comment"># Create your first instance</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge create my-first-db</span>

<span class="terminal-comment"># Connect to your instance</span>
<span class="terminal-prompt">$</span> <span class="terminal-command">pgforge connect my-first-db</span></pre>
            </div>
          </div>

          <div class="mt-8 text-center">
            <NuxtLink to="/docs/installation" class="btn-terminal-primary">
              View Installation Guide
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 border-t border-gray-800/50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to <span class="gradient-text">forge</span> your PostgreSQL
          instances?
        </h2>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of developers using PgForge to manage PostgreSQL with
          confidence
        </p>
        <div class="flex gap-4 justify-center">
          <NuxtLink to="/install" class="btn-terminal-primary">
            Get Started Free
          </NuxtLink>
          <a href="https://github.com/pgforge/pgforge" class="btn-terminal">
            Star on GitHub
          </a>
        </div>
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
