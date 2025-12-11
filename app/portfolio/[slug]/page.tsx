import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { portfolioProjects } from "@/data/portfolioData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PortfolioCaseStudyPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export default function PortfolioCaseStudyPage({
  params,
}: PortfolioCaseStudyPageProps) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow={project.businessType}
        title={project.title}
        subtitle={project.overview}
        actions={
          <Link
            href="/portfolio"
            className="text-xs font-medium text-primary underline-offset-2 hover:underline"
          >
            ← Back to all projects
          </Link>
        }
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] text-sm text-body/90">
          <div className="space-y-8">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-heading">Client situation</h2>
              <p>{project.clientSituation}</p>
            </section>
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-heading">Our solution</h2>
              <p>{project.solution}</p>
            </section>
            <section className="space-y-3">
              <h2 className="text-base font-semibold text-heading">Results</h2>
              <ul className="space-y-1 list-disc pl-5">
                {project.keyResults.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
              {project.resultsDetails.length > 0 && (
                <ul className="mt-2 space-y-1 list-disc pl-5 text-xs text-body/90">
                  {project.resultsDetails.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </section>
          </div>
          <aside className="space-y-5 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            {project.imageUrl && (
              <div className="overflow-hidden rounded-xl border border-black/5 bg-background/60">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-sm font-semibold text-heading">Services provided</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-body/90">
                {project.servicesProvided.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-heading">Key results</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-body/90">
                {project.keyResults.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-heading">Tech details</h3>
              <p className="mt-2 text-xs text-body/90">{project.techDetails}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-heading">Tags</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/5 px-2 py-1 text-[11px] font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
