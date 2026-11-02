import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/config/site';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Dushyant Verma</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Software Engineer · Competitive Programmer · System Design Enthusiast
        </PageHeaderHeading>
        <PageHeaderDescription className="intro-copy">
          Hey there! I’m a backend-focused software engineer with 2.5+ years of
          experience building financial-sector systems with Java, Spring Boot,
          microservices, and AWS. In my current role, I lead a team delivering
          solutions for Sumitomo, a Japanese client. Beyond work, I explore new
          technologies through personal projects. I’m also a system design
          enthusiast and competitive programmer, with 1,000+ Data Structures and
          Algorithms problems solved. My advice: A solution should look good,
          run fast, and sometimes solve the problem as well.
        </PageHeaderDescription>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Core technologies">
          {['Java', 'Spring', 'Microservices'].map((technology) => (
            <Badge key={technology} variant="secondary">
              {technology}
            </Badge>
          ))}
        </div>
        <PageActions>
          {siteConfig.links.resume ? (
            <Button asChild size="sm" className="rounded-md">
              <Link href={siteConfig.links.resume} target="_blank" rel="noreferrer">
                Get Résumé
                <ExternalLink className="size-3" strokeWidth={2} />
              </Link>
            </Button>
          ) : (
            <Button size="sm" className="rounded-md" disabled>
              Résumé link needed
            </Button>
          )}
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href="/contact">
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/education"
        prevTitle="Previous"
        nextTitle="Education"
      />
    </>
  );
};
export default IntroductionPage;
