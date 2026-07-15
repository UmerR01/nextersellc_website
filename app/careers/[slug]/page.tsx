import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import JobDetailPage from "@/components/careers/JobDetailPage";
import { getCareerJob, getCareerJobSlugs } from "@/data/careerJobs";

type JobPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCareerJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getCareerJob(slug);

  if (!job) return {};

  return {
    title: `${job.title} | Careers at Nexterse LLC`,
    description: job.summary,
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getCareerJob(slug);

  if (!job) notFound();

  return (
    <>
      <Header forceSolid />
      <main>
        <JobDetailPage job={job} />
      </main>
    </>
  );
}
