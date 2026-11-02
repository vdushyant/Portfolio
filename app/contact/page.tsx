import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import ContactForm from './ContactForm';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Let’s talk about building something useful.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Email <Link className="underline underline-offset-4" href={siteConfig.links.email}>{siteConfig.links.email.replace('mailto:', '')}</Link> or call <Link className="underline underline-offset-4" href={siteConfig.links.phone}>{siteConfig.links.phone.replace('tel:', '')}</Link>. You can also find me on <Link className="underline underline-offset-4" href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link> and <Link className="underline underline-offset-4" href={siteConfig.links.github} target="_blank" rel="noreferrer">GitHub</Link>.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-4">
        <ContactForm /> 
      </div>

      <Pager
        prevHref="/awards"
        nextHref="/"
        prevTitle="Awards & Honours"
        nextTitle="Introduction"
      />
    </>
  );
};
export default ContactPage;
