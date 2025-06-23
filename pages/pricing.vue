<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 border-b border-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="gradient-text">Simple, Transparent Pricing</span>
          </h1>
          <p class="text-xl text-gray-400">
            Start free with open source. Scale with enterprise support when you
            need it.
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Tiers -->
    <section class="py-24">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Open Source -->
          <div
            class="feature-card border-2 border-gray-800 hover:border-gray-700"
          >
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold mb-2">Open Source</h3>
              <div class="text-4xl font-bold mb-4">
                <span class="gradient-text">$0</span>
              </div>
              <p class="text-gray-400">Forever free for everyone</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300"
                  >Unlimited PostgreSQL instances</span
                >
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">All core features included</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Configuration management</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Backup & recovery</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Basic monitoring</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Community support</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">MIT License</span>
              </li>
            </ul>

            <a
              href="https://github.com/pgforge/pgforge"
              class="btn-terminal w-full text-center"
            >
              Get Started
            </a>
          </div>

          <!-- Professional -->
          <div class="feature-card border-2 border-[#00ff41]/50 relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span
                class="bg-[#00ff41] text-black px-3 py-1 rounded text-sm font-semibold"
              >
                POPULAR
              </span>
            </div>

            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold mb-2">Professional</h3>
              <div class="text-4xl font-bold mb-4">
                <span class="gradient-text">$299</span>
                <span class="text-lg text-gray-400 font-normal">/month</span>
              </div>
              <p class="text-gray-400">For teams and growing businesses</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300"
                  ><strong>Everything in Open Source</strong></span
                >
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Priority email support</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Advanced monitoring dashboard</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300"
                  >Performance optimization tools</span
                >
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Automated security updates</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Team collaboration features</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Up to 10 team members</span>
              </li>
            </ul>

            <button class="btn-terminal-primary w-full text-center">
              Start Free Trial
            </button>
          </div>

          <!-- Enterprise -->
          <div
            class="feature-card border-2 border-gray-800 hover:border-gray-700"
          >
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold mb-2">Enterprise</h3>
              <div class="text-4xl font-bold mb-4">
                <span class="gradient-text">Custom</span>
              </div>
              <p class="text-gray-400">For large organizations</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300"
                  ><strong>Everything in Professional</strong></span
                >
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">24/7 dedicated support</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Custom integrations</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">SLA guarantees</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">On-premise deployment</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Compliance assistance</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:check"
                  class="w-5 h-5 text-[#00ff41] mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-300">Unlimited team members</span>
              </li>
            </ul>

            <button class="btn-terminal w-full text-center">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Comparison -->
    <section class="py-24 border-t border-gray-800/50">
      <div class="container mx-auto px-4 max-w-6xl">
        <h2 class="text-3xl font-bold text-center mb-12">
          <span class="gradient-text">Feature Comparison</span>
        </h2>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-800">
                <th class="text-left py-4 px-4 font-semibold">Features</th>
                <th class="text-center py-4 px-4 font-semibold">Open Source</th>
                <th class="text-center py-4 px-4 font-semibold">
                  Professional
                </th>
                <th class="text-center py-4 px-4 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-800/50">
              <tr>
                <td class="py-4 px-4 text-gray-300">PostgreSQL Instances</td>
                <td class="text-center py-4 px-4">Unlimited</td>
                <td class="text-center py-4 px-4">Unlimited</td>
                <td class="text-center py-4 px-4">Unlimited</td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-300">Version Management</td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-300">Backup & Recovery</td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-300">Basic Monitoring</td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-300">Advanced Monitoring</td>
                <td class="text-center py-4 px-4">
                  <Icon name="lucide:x" class="w-5 h-5 text-gray-600 inline" />
                </td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-300">Priority Support</td>
                <td class="text-center py-4 px-4">
                  <Icon name="lucide:x" class="w-5 h-5 text-gray-600 inline" />
                </td>
                <td class="text-center py-4 px-4">Email</td>
                <td class="text-center py-4 px-4">24/7</td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-300">Team Members</td>
                <td class="text-center py-4 px-4">-</td>
                <td class="text-center py-4 px-4">10</td>
                <td class="text-center py-4 px-4">Unlimited</td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-300">SLA</td>
                <td class="text-center py-4 px-4">
                  <Icon name="lucide:x" class="w-5 h-5 text-gray-600 inline" />
                </td>
                <td class="text-center py-4 px-4">
                  <Icon name="lucide:x" class="w-5 h-5 text-gray-600 inline" />
                </td>
                <td class="text-center py-4 px-4">
                  <Icon
                    name="lucide:check"
                    class="w-5 h-5 text-[#00ff41] inline"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 border-t border-gray-800/50">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="text-3xl font-bold text-center mb-12">
          <span class="gradient-text">Frequently Asked Questions</span>
        </h2>

        <div class="space-y-6">
          <div class="feature-card">
            <h3 class="text-lg font-semibold mb-2">
              Can I use PgForge in production?
            </h3>
            <p class="text-gray-400">
              Absolutely! PgForge is designed for production use. The
              open-source version includes all core features needed for
              production deployments. Professional and Enterprise tiers add
              enhanced support and monitoring capabilities.
            </p>
          </div>

          <div class="feature-card">
            <h3 class="text-lg font-semibold mb-2">
              What's included in the open-source version?
            </h3>
            <p class="text-gray-400">
              The open-source version includes all core features: instance
              management, version control, backup/recovery, basic monitoring,
              SSL support, and configuration management. It's fully functional
              for most use cases.
            </p>
          </div>

          <div class="feature-card">
            <h3 class="text-lg font-semibold mb-2">
              Can I switch between plans?
            </h3>
            <p class="text-gray-400">
              Yes! You can upgrade or downgrade your plan at any time. When
              upgrading, you'll get immediate access to premium features. When
              downgrading, you'll retain access until the end of your billing
              period.
            </p>
          </div>

          <div class="feature-card">
            <h3 class="text-lg font-semibold mb-2">
              Do you offer discounts for non-profits or education?
            </h3>
            <p class="text-gray-400">
              Yes, we offer 50% discounts for registered non-profits and
              educational institutions. Contact our sales team with proof of
              your organization's status to receive the discount.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 border-t border-gray-800/50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of developers using PgForge to manage PostgreSQL
          instances
        </p>
        <div class="flex gap-4 justify-center">
          <NuxtLink to="/install" class="btn-terminal-primary">
            Install PgForge
          </NuxtLink>
          <button class="btn-terminal">Talk to Sales</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Pricing - PgForge",
  meta: [
    {
      name: "description",
      content:
        "Simple, transparent pricing for PgForge. Start free with open source, scale with professional support when you need it.",
    },
  ],
});
</script>
