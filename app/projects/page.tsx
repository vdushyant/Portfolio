import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/constants/projects';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Selected products built for mentorship, journaling, and personal finance.
        </PageHeaderHeading>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 card-container">
        {projects.map((project, index) => (
          <Card
            title={project.overview}
            key={index}
            className="relative w-full transition-all duration-300 cursor-pointer isolate hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="leading-6">{project.title}</CardTitle>
              <CardDescription className="flex flex-col gap-2">
                {project.tagline}
                <div className="relative z-10 flex flex-wrap gap-2 pt-2">
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/projects/${project.slug}`}>Details</Link>
                  </Button>
                  {project.links.live && <Button asChild size="sm" variant="ghost">
                    <Link href={project.links.live} target="_blank" rel="noreferrer">Live demo <ExternalLink className="ml-1 size-3" /></Link>
                  </Button>}
                  {project.links.github && <Button asChild size="sm" variant="ghost">
                    <Link href={project.links.github} target="_blank" rel="noreferrer">GitHub <ExternalLink className="ml-1 size-3" /></Link>
                  </Button>}
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Pager
        prevHref="/experience"
        nextHref="/skills-tools"
        prevTitle="Experience"
        nextTitle="Skills & Tools"
      />
    </>
  );
};
export default ProjectsPage;
