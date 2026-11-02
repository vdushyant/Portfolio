import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { experiences } from '@/constants/experience';

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Building dependable services for financial workflows.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I work in financial services at Tata Consultancy Services, where I
          build Java and Spring Boot services, own project delivery, and improve
          engineering processes through automation.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={experiences} />

      <Pager
        prevHref="/education"
        nextHref="/projects"
        prevTitle="Education"
        nextTitle="Projects"
      />
    </>
  );
};
export default ExperiencePage;
