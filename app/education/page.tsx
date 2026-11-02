import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Computer Science and Engineering · Indian Institute of Information Technology and Management, Gwalior
        </PageHeaderHeading>
        <PageHeaderDescription>
          I earned a Bachelor of Technology in Computer Science and Engineering
          from the Indian Institute of Information Technology and Management
          in Gwalior.
        </PageHeaderDescription>

        <PageHeaderDescription>
          My coursework in data structures, operating systems, computer
          networks, and databases supports my work in backend engineering.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/"
        nextHref="/experience"
        prevTitle="Introduction"
        nextTitle="Experience"
      />
    </>
  );
};
export default EducationPage;
