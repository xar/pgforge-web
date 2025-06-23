<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 border-b border-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="gradient-text">Enterprise Features</span>
          </h1>
          <p class="text-xl text-gray-400">
            Everything you need to manage PostgreSQL instances at scale with
            confidence
          </p>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <!-- Instance Management -->
        <div class="mb-24">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Instance Management</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Create, manage, and orchestrate multiple PostgreSQL instances with
              different versions and configurations
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="feature-card">
              <Icon name="lucide:layers" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Multiple Instances</h3>
              <p class="text-gray-400 text-sm">
                Run multiple PostgreSQL instances simultaneously with automatic
                port management and resource isolation.
              </p>
            </div>

            <div class="feature-card">
              <Icon
                name="lucide:git-branch"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Version Management</h3>
              <p class="text-gray-400 text-sm">
                Install and manage multiple PostgreSQL versions. Upgrade
                instances with zero downtime.
              </p>
            </div>

            <div class="feature-card">
              <Icon
                name="lucide:file-text"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Templates</h3>
              <p class="text-gray-400 text-sm">
                Built-in templates for development, testing, and production.
                Create custom templates for your use cases.
              </p>
            </div>

            <div class="feature-card">
              <Icon name="lucide:cpu" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Resource Management</h3>
              <p class="text-gray-400 text-sm">
                Automatic resource allocation based on system capabilities.
                Fine-tune performance settings per instance.
              </p>
            </div>
          </div>
        </div>

        <!-- Security Features -->
        <div class="mb-24">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Security & Compliance</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade security features with compliance profiles for
              regulated industries
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="feature-card">
              <Icon name="lucide:lock" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">SSL/TLS Encryption</h3>
              <p class="text-gray-400 text-sm">
                Automatic SSL certificate generation and management. Support for
                custom certificates and modern cipher suites.
              </p>
            </div>

            <div class="feature-card">
              <Icon name="lucide:shield" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Authentication</h3>
              <p class="text-gray-400 text-sm">
                Support for MD5, SCRAM-SHA-256, peer authentication.
                Fine-grained host-based access control.
              </p>
            </div>

            <div class="feature-card">
              <Icon
                name="lucide:file-check"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Audit Logging</h3>
              <p class="text-gray-400 text-sm">
                Comprehensive audit logging with pgAudit integration. Track all
                database access and changes.
              </p>
            </div>

            <div class="feature-card">
              <Icon
                name="lucide:badge-check"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Compliance Profiles</h3>
              <p class="text-gray-400 text-sm">
                Pre-configured profiles for GDPR, HIPAA, SOX compliance. Custom
                compliance templates.
              </p>
            </div>
          </div>
        </div>

        <!-- Backup & Recovery -->
        <div class="mb-24">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Backup & Recovery</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Automated backup strategies with point-in-time recovery and
              disaster recovery procedures
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="feature-card">
              <Icon name="lucide:archive" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Automated Backups</h3>
              <p class="text-gray-400 text-sm">
                Schedule backups with cron expressions. Multiple backup formats
                and compression options.
              </p>
            </div>

            <div class="feature-card">
              <Icon name="lucide:clock-4" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Point-in-Time Recovery</h3>
              <p class="text-gray-400 text-sm">
                Restore to any point in time using WAL archiving. Minimal data
                loss in disaster scenarios.
              </p>
            </div>

            <div class="feature-card">
              <Icon
                name="lucide:refresh-ccw"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Incremental Backups</h3>
              <p class="text-gray-400 text-sm">
                Efficient incremental backups with WAL shipping. Reduce storage
                costs and backup time.
              </p>
            </div>

            <div class="feature-card">
              <Icon
                name="lucide:check-circle"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Backup Verification</h3>
              <p class="text-gray-400 text-sm">
                Automated backup testing and verification. Ensure backups are
                restorable when needed.
              </p>
            </div>
          </div>
        </div>

        <!-- Monitoring & Performance -->
        <div class="mb-24">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Monitoring & Performance</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Real-time monitoring with automatic performance tuning and
              comprehensive observability
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="feature-card">
              <Icon
                name="lucide:activity"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p class="text-gray-400 text-sm">
                Monitor connections, queries, resource usage in real-time.
                Built-in health checks and alerts.
              </p>
            </div>

            <div class="feature-card">
              <Icon
                name="lucide:trending-up"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Auto-tuning</h3>
              <p class="text-gray-400 text-sm">
                Automatic performance optimization based on workload.
                Intelligent resource allocation.
              </p>
            </div>

            <div class="feature-card">
              <Icon
                name="lucide:bar-chart-3"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Metrics Export</h3>
              <p class="text-gray-400 text-sm">
                Native Prometheus metrics export. Pre-built Grafana dashboards
                for visualization.
              </p>
            </div>

            <div class="feature-card">
              <Icon name="lucide:bell" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Alerting</h3>
              <p class="text-gray-400 text-sm">
                Configurable alerts for resource usage, performance issues.
                Webhook and email notifications.
              </p>
            </div>
          </div>
        </div>

        <!-- High Availability -->
        <div class="mb-24">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">High Availability</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Built-in replication, clustering, and failover capabilities for
              mission-critical deployments
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="feature-card">
              <Icon name="lucide:network" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Streaming Replication</h3>
              <p class="text-gray-400 text-sm">
                Easy setup of master-slave replication. Automatic standby server
                management.
              </p>
            </div>

            <div class="feature-card">
              <Icon
                name="lucide:git-pull-request"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Logical Replication</h3>
              <p class="text-gray-400 text-sm">
                Fine-grained replication with publication/subscription model.
                Selective data replication.
              </p>
            </div>

            <div class="feature-card">
              <Icon name="lucide:zap-off" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Automatic Failover</h3>
              <p class="text-gray-400 text-sm">
                Detect failures and promote standby servers automatically.
                Minimize downtime in failure scenarios.
              </p>
            </div>

            <div class="feature-card">
              <Icon name="lucide:scale" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Load Balancing</h3>
              <p class="text-gray-400 text-sm">
                Built-in connection pooling with pgBouncer. Distribute read
                queries across replicas.
              </p>
            </div>
          </div>
        </div>

        <!-- Developer Tools -->
        <div>
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Developer Tools</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Powerful tools and integrations to streamline your development
              workflow
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="feature-card">
              <Icon
                name="lucide:terminal"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Rich CLI</h3>
              <p class="text-gray-400 text-sm">
                Interactive commands with auto-completion. Helpful error
                messages and suggestions.
              </p>
            </div>

            <div class="feature-card">
              <Icon name="lucide:plug" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">API & SDKs</h3>
              <p class="text-gray-400 text-sm">
                REST and GraphQL APIs for automation. Official SDKs for popular
                programming languages.
              </p>
            </div>

            <div class="feature-card">
              <Icon
                name="lucide:git-merge"
                class="w-8 h-8 text-[#00ff41] mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">CI/CD Integration</h3>
              <p class="text-gray-400 text-sm">
                GitHub Actions, GitLab CI, Jenkins integration. Automated
                database provisioning in pipelines.
              </p>
            </div>

            <div class="feature-card">
              <Icon name="lucide:puzzle" class="w-8 h-8 text-[#00ff41] mb-4" />
              <h3 class="text-xl font-semibold mb-2">Plugin System</h3>
              <p class="text-gray-400 text-sm">
                Extensible architecture with plugin support. Community plugins
                for popular tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 border-t border-gray-800/50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Start using
          <span class="gradient-text">enterprise features</span> today
        </h2>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          PgForge brings enterprise-grade PostgreSQL management to your
          fingertips
        </p>
        <div class="flex gap-4 justify-center">
          <NuxtLink to="/install" class="btn-terminal-primary">
            Get Started
          </NuxtLink>
          <NuxtLink to="/pricing" class="btn-terminal"> View Pricing </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Features - PgForge",
  meta: [
    {
      name: "description",
      content:
        "Explore all features of PgForge: instance management, security, backup & recovery, monitoring, high availability, and developer tools.",
    },
  ],
});
</script>
