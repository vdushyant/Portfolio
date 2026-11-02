export const dynamic = "force-dynamic";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { getViewsServerAction } from "../actions/getAndSetViewsServerAction";
import { getGitHubStatsServerAction } from "../actions/getGitHubStatsServerAction";
import GitHubGraphs from "./GitHubGraphs";
import Pager from "@/components/pager";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getCodingProblemStats } from "@/lib/coding-problem-stats";
import { Code2, Eye } from "lucide-react";

const StatCard = ({
  title,
  value,
  className = "",
  href,
}: {
  title: string;
  value: string | number;
  className?: string;
  href?: string;
}) => (
  <div className="h-full">
    {href ? (
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`card block h-full w-full rounded-xl border border-border/40 p-4 transition-transform duration-200 hover:scale-[1.02] ${className}`}
      >
        <StatCardContent title={title} value={value} />
      </Link>
    ) : (
      <div
        className={`card h-full w-full rounded-xl border border-border/40 p-4 ${className}`}
      >
        <StatCardContent title={title} value={value} />
      </div>
    )}
  </div>
);

const StatCardContent = ({ title, value }: { title: string; value: string | number }) => (
  <div className="card-content">
    <h3 className="text-lg font-semibold tracking-tight card-title text-muted-foreground">
      {title}
    </h3>
    <span className="text-4xl font-bold leading-tight tracking-tight card-value sm:text-5xl">
      {value}
    </span>
  </div>
);

const Stats = async () => {
  const [views, githubStats, codingStats] = await Promise.all([
    getViewsServerAction(),
    getGitHubStatsServerAction(),
    getCodingProblemStats(),
  ]);

  const additionalPlatformCount = 124;
  const totalProblemSolves =
    codingStats.leetcode !== null && codingStats.geeksforgeeks !== null
      ? codingStats.leetcode + codingStats.geeksforgeeks + additionalPlatformCount
      : "Unavailable";

  const githubStatCards = [
    {
      title: "Hireable",
      value: githubStats.hireable && "Yes",
      className: githubStats.hireable && "bg-green-500/20",
    },
    {
      title: "Total Public Repositories",
      value: githubStats.public_repos,
    },
    {
      title: "Current Company",
      value: githubStats.company,
    },
    {
      title: "Location",
      value: githubStats.location,
    },
  ];

  return (
    <>
      {/* About this portfolio */}
      <PageHeader>
        <PageHeaderHeading>Stats</PageHeaderHeading>
        <PageHeaderDescription>
          Coding platform totals and GitHub activity, with links to the public
          profile sources.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative flex min-h-80 flex-col overflow-hidden rounded-xl border border-border/40 bg-card/50 p-8 shadow-sm transition-all duration-300 hover:border-border/80 hover:shadow-md">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-60" />
          <div className="relative z-10 space-y-2">
            <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
              <Code2 className="size-5 text-primary/80" aria-hidden="true" />
              Total Questions
            </h3>
            <div className="h-px w-full bg-muted/60" />
          </div>
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-5 text-center">
            <p className="text-5xl font-bold text-primary">{totalProblemSolves}</p>
            <Link
              href={siteConfig.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="mt-4 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
            >
              LeetCode questions: {codingStats.leetcode ?? "Unavailable"}
            </Link>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 text-sm text-muted-foreground">
              <Link
                href={siteConfig.links.geeksforgeeks}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-4 hover:text-foreground"
              >
                GeeksforGeeks: {codingStats.geeksforgeeks ?? "Unavailable"}
              </Link>
              <span className="px-2">·</span>
              <span>CodeChef + Coding Ninjas: 124</span>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-80 flex-col overflow-hidden rounded-xl border border-border/40 bg-card/50 p-8 shadow-sm transition-all duration-300 hover:border-border/80 hover:shadow-md">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-60" />
          <div className="relative z-10 space-y-2">
            <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
              <Eye className="size-5 text-primary/80" aria-hidden="true" />
              Total Site Visits
            </h3>
            <div className="h-px w-full bg-muted/60" />
          </div>
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-5 text-center">
            {views.success ? (
              <>
                <p className="py-6 text-5xl font-bold text-primary" id="site-visits">
                  {views.message.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total recorded since tracking began</p>
              </>
            ) : (
              <p className="text-xl font-bold text-destructive">Failed to fetch site visits</p>
            )}
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        LeetCode and GeeksforGeeks counts refresh hourly. The 124 CodeChef and
        Coding Ninjas solves are the combined count you provided. Platform totals
        may include the same problem solved on more than one site.
      </p>

      <div className="mt-4 rounded-xl border border-border/40 p-5">
        <h3 className="text-lg font-semibold">Competitive programming</h3>
        <p className="mt-2 text-sm text-muted-foreground">LeetCode Biweekly Contest 125 · global rank 2,258 (top 7%) · rating 1,757.</p>
      </div>

      <div className="mt-4 rounded-xl border border-border/40 p-5">
        <h3 className="text-lg font-semibold">GitHub contributions</h3>
        <p className="mt-2 text-sm text-muted-foreground">More than 1,400 contributions are noted in my résumé. The activity calendar and profile metrics below are fetched from GitHub.</p>
        <Link className="mt-3 inline-block text-sm underline underline-offset-4" href={siteConfig.links.dsaRepository} target="_blank" rel="noreferrer">View my DSA repository</Link>
      </div>

      {/* About GitHub Stats */}
      <PageHeader className="mt-8 mb-4">
        <PageHeaderHeading>GitHub Stats</PageHeaderHeading>
        <PageHeaderDescription>
          Insights and metrics about my GitHub profile
        </PageHeaderDescription>
      </PageHeader>

      {/* GitHub Graphs */}
      <div className="flex items-center justify-center w-full p-4 mb-8 border border-border/40 rounded-xl">
        <GitHubGraphs />
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-1 gap-4 card-container md:grid-cols-3">
          {githubStatCards.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              value={card.value || "Limit Reached"}
              className={card.className}
            />
          ))}
        </div>
      </div>

      <Pager
        prevHref="/skills-tools"
        nextHref="/awards"
        prevTitle="Skills & Tools"
        nextTitle="Awards & Honours"
      />
    </>
  );
};

export default Stats;
