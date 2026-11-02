import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { skillGroups } from '@/constants';
import { Code2 } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  SiAmazonec2,
  SiAmazonrds,
  SiAmazons3,
  SiAmazonwebservices,
  SiC,
  SiCplusplus,
  SiDocker,
  SiFlyway,
  SiGit,
  SiGithub,
  SiGnubash,
  SiHibernate,
  SiJunit5,
  SiMongodb,
  SiOracle,
  SiPostgresql,
  SiPostman,
  SiRailway,
  SiRedis,
  SiSonarcloud,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
} from 'react-icons/si';
import {
  siAmazonec2,
  siAmazonrds,
  siAmazons3,
  siAmazonwebservices,
  siC,
  siCplusplus,
  siDocker,
  siFlyway,
  siGit,
  siGithub,
  siGnubash,
  siHibernate,
  siJunit5,
  siMongodb,
  siPostgresql,
  siPostman,
  siRailway,
  siRedis,
  siSonarcloud,
  siSpring,
  siSpringboot,
  siSpringsecurity,
} from 'simple-icons';

const skillIcons: Record<string, IconType> = {
  C: SiC,
  'C++': SiCplusplus,
  Bash: SiGnubash,
  'Spring Boot': SiSpringboot,
  'Spring Web': SiSpring,
  'Spring Security': SiSpringsecurity,
  Hibernate: SiHibernate,
  AWS: SiAmazonwebservices,
  'AWS EC2': SiAmazonec2,
  'AWS S3': SiAmazons3,
  'AWS CloudFront': SiAmazonwebservices,
  'Amazon RDS': SiAmazonrds,
  Oracle: SiOracle,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Flyway: SiFlyway,
  Docker: SiDocker,
  Railway: SiRailway,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  JUnit: SiJunit5,
  SonarCloud: SiSonarcloud,
};

const skills = skillGroups.flatMap((group) => group.items);

const skillColors: Record<string, string> = {
  C: `#${siC.hex}`,
  'C++': `#${siCplusplus.hex}`,
  Bash: `#${siGnubash.hex}`,
  'Spring Boot': `#${siSpringboot.hex}`,
  'Spring Web': `#${siSpring.hex}`,
  'Spring Security': `#${siSpringsecurity.hex}`,
  Hibernate: `#${siHibernate.hex}`,
  AWS: `#${siAmazonwebservices.hex}`,
  'AWS EC2': `#${siAmazonec2.hex}`,
  'AWS S3': `#${siAmazons3.hex}`,
  'AWS CloudFront': `#${siAmazonwebservices.hex}`,
  'Amazon RDS': `#${siAmazonrds.hex}`,
  Oracle: '#F80000',
  PostgreSQL: `#${siPostgresql.hex}`,
  MongoDB: `#${siMongodb.hex}`,
  Redis: `#${siRedis.hex}`,
  Flyway: `#${siFlyway.hex}`,
  Docker: `#${siDocker.hex}`,
  Railway: `#${siRailway.hex}`,
  Git: `#${siGit.hex}`,
  GitHub: `#${siGithub.hex}`,
  Postman: `#${siPostman.hex}`,
  JUnit: `#${siJunit5.hex}`,
  SonarCloud: `#${siSonarcloud.hex}`,
};

const SkillsToolsPage = () => (
  <>
    <PageHeader>
      <PageHeaderHeading>Skills &amp; Tools</PageHeaderHeading>
      <PageHeaderHeading className="mt-2 text-muted-foreground">
        The tools I use to build, scale, and ship.
      </PageHeaderHeading>
      <PageHeaderDescription>
        From Java services and microservices to AWS, databases, and testing,
        these are the technologies and concepts I work with.
      </PageHeaderDescription>
    </PageHeader>

    <div
      id="badges"
      className="my-8 flex flex-wrap items-center justify-center gap-3"
      role="list"
      aria-label="Skills and technologies"
    >
      {skills.map((skill) => {
        const Icon = skillIcons[skill];

        return (
          <Badge
            key={skill}
            variant="outline"
            role="listitem"
            className="inline-flex items-center gap-2 rounded-lg border-border/50 bg-foreground px-4 py-2.5 text-background shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-foreground/90"
          >
            <span
              style={{ color: skillColors[skill] ?? '#64748b' }}
              aria-hidden="true"
            >
              {Icon ? <Icon className="size-4" /> : <Code2 className="size-4" />}
            </span>
            {skill}
          </Badge>
        );
      })}
    </div>

    <Pager
      prevHref="/projects"
      nextHref="/stats"
      prevTitle="Projects"
      nextTitle="Stats"
    />
  </>
);

export default SkillsToolsPage;
