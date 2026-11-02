import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const AwardsPage = () => (
  <>
    <PageHeader>
      <PageHeaderHeading>Awards &amp; Honours</PageHeaderHeading>
      <PageHeaderDescription>
        Recognition for project ownership, teamwork, and contributions.
      </PageHeaderDescription>
    </PageHeader>

    <section className="mt-8 space-y-4">
      {[
        'Star of the Month',
        'Best Team Award',
        'Special Initiative Award',
      ].map((award) => (
        <article key={award} className="rounded-xl border border-border/50 p-5">
          <h2>{award}</h2>
          <p className="text-sm text-muted-foreground">
            Recognized for end-to-end project ownership, maintaining a defect
            rate below 5%, mentoring peers, teamwork, and process improvements.
          </p>
          <Link
            className="mt-3 inline-block text-sm underline underline-offset-4"
            href={siteConfig.links.awards}
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn honours
          </Link>
        </article>
      ))}
    </section>

    <Pager
      prevHref="/stats"
      nextHref="/contact"
      prevTitle="Stats"
      nextTitle="Contact"
    />
  </>
);

export default AwardsPage;
