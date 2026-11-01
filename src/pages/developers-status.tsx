import { SEOHead } from '@/components/seo-head';
import {
  DocPage,
  DocHeader,
  DocSection,
  DocText,
  DocCard,
} from '@/components/docs';
import { opsMetadata } from '@/data/ops.generated';

const platformChecks = [
  {
    label: 'Website',
    href: '/home',
    value: 'Public docs and catalog UI',
  },
  {
    label: 'Developers',
    href: '/developers',
    value: 'Developer entry point',
  },
  {
    label: 'API status',
    href: '/api/v1/status',
    value: 'Machine-readable platform metadata',
  },
  {
    label: 'OpenAPI',
    href: '/openapi.json',
    value: 'HTTP contract',
  },
  {
    label: 'llms.txt',
    href: '/llms.txt',
    value: 'Agent overview',
  },
  {
    label: 'Sitemap',
    href: '/sitemap.xml',
    value: 'Public URL inventory',
  },
];

const mcpChecks = [
  {
    label: 'Discovery root',
    href: '/mcp',
    value: 'Remote MCP metadata',
  },
  {
    label: 'Health',
    href: '/api/health',
    value: 'Read-only MCP health signal',
  },
  {
    label: 'llms.txt',
    href: '/llms.txt',
    value: 'Short MCP overview',
  },
  {
    label: 'MCP endpoint',
    href: '/api/mcp',
    value: 'Streamable HTTP transport',
  },
];

export default function DevelopersStatusPage() {
  return (
    <>
      <SEOHead
        title="Status, Endpoints and Integrations"
        description="Operational overview for Piston UI and Piston UI MCP, including version metadata, public endpoints, and ChatGPT/Claude connection guidance."
        keywords="watermelon ui status, watermelon ui mcp, chatgpt mcp, claude mcp, watermelon api status"
      />

      <DocPage>
        <DocHeader
          title="Piston UI Status & Integrations"
          description="A small ops surface for the public platform and hosted MCP endpoints."
        />

        <DocSection title="Current Build">
          <DocCard className="space-y-3">
            <DocText className="max-w-none">
              <strong>Product:</strong> Piston UI
              <br />
              <strong>Package version:</strong> {opsMetadata.packageVersion}
              <br />
              <strong>Branch:</strong> {opsMetadata.branch}
              <br />
              <strong>Source revision:</strong>{' '}
              <code>{opsMetadata.shortSha}</code>
              <br />
              <strong>Last source commit:</strong> {opsMetadata.committedAt}
              <br />
              <strong>Last generated build metadata:</strong>{' '}
              {opsMetadata.generatedAt}
            </DocText>
            <DocText>
              This page intentionally shows source and build metadata instead of
              a guessed uptime percentage. For machine-readable status, use{' '}
              <a
                href="/api/v1/status"
                className="bg-muted rounded-sm px-2 py-px text-black dark:text-white"
              >
                /api/v1/status
              </a>
              . For MCP runtime health, use{' '}
              <a
                href="/api/health"
                className="bg-muted rounded-sm px-2 py-px text-black dark:text-white"
              >
                /api/health
              </a>
              .
            </DocText>
          </DocCard>
        </DocSection>

        <DocSection title="Platform Endpoints">
          <DocCard className="space-y-4">
            {platformChecks.map((check) => (
              <DocText key={check.href} className="max-w-none">
                <a
                  href={check.href}
                  className="bg-muted rounded-sm px-2 py-px text-black dark:text-white"
                >
                  {check.label}
                </a>{' '}
                {check.value}
              </DocText>
            ))}
          </DocCard>
        </DocSection>

        <DocSection title="MCP Endpoints">
          <DocCard className="space-y-4">
            {mcpChecks.map((check) => (
              <DocText key={check.href} className="max-w-none">
                <a
                  href={check.href}
                  className="bg-muted rounded-sm px-2 py-px text-black dark:text-white"
                >
                  {check.label}
                </a>{' '}
                {check.value}
              </DocText>
            ))}
          </DocCard>
        </DocSection>

        <DocSection title="Connect From ChatGPT Or Claude">
          <DocText>
            If your ChatGPT or Claude client supports remote MCP, add a new MCP
            server and use <code>/api/mcp</code> as the
            server URL. Once connected, ask the model to call{' '}
            <code>catalog_summary</code>, <code>list_catalog_entries</code>, or{' '}
            <code>get_catalog_entry</code> instead of scraping the site
            manually.
          </DocText>
          <DocText>
            If your client only supports local MCP servers, clone{' '}
            <a
              href="https://github.com/PistonUI/watermelon-platform"
              className="bg-muted rounded-sm px-2 py-px text-black dark:text-white"
            >
              watermelon-platform
            </a>{' '}
            and run <code>bun run mcp</code> from the repository root. That
            local mode is better when you want source-aware development
            workflows or to test changes before deployment.
          </DocText>
        </DocSection>
      </DocPage>
    </>
  );
}
