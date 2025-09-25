import Grid from "@/components/home/Grid";
import aboutData from "@/constants/about.json";

// ----------------- Types -----------------
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  values: string[];
}

export interface HistoryItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface AboutData {
  companyInfo: CompanyInfo;
  history: HistoryItem[];
  team: TeamMember[];
  stats: Stat[];
}

const data: AboutData = aboutData as AboutData;

// ----------------- Components -----------------

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-white text-center">
    <span className="border-b-4 border-[#4A6B48] pb-1">{children}</span>
  </h2>
);

const CompanyInfoSection = ({ name, tagline, description }: CompanyInfo) => (
  <section className="text-center py-12 bg-[#4A6B48] text-white">
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold">{name}</h1>
      <p className="text-xl mt-2">{tagline}</p>
      <p className="mt-4">{description}</p>
    </div>
  </section>
);

const MissionSection = ({
  mission,
  values,
}: Pick<CompanyInfo, "mission" | "values">) => (
  <section className="py-12 max-w-4xl mx-auto px-4">
    <SectionHeading>Our Mission</SectionHeading>
    <p className="mt-6 text-white text-center">{mission}</p>
    <ul className="mt-6 space-y-2 list-disc pl-6 text-[#4A6B48]">
      {values.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  </section>
);

const HistorySection = ({ history }: { history: HistoryItem[] }) => (
  <section className="py-12 px-4">
    <SectionHeading>Our History</SectionHeading>
    <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {history.map((item, i) => (
        <div
          key={i}
          className="p-6 bg-[#111] text-white rounded-lg shadow-md border border-[#4A6B48]"
        >
          {item.image.endsWith(".mp4") ? (
            <video
              src={item.image}
              autoPlay
              muted
              loop
              playsInline
              className="rounded-md w-full h-40 object-cover"
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="rounded-md w-full h-40 object-cover"
            />
          )}
          <h3 className="text-lg font-bold mt-4 text-[#4A6B48]">
            {item.year} — {item.title}
          </h3>
          <p className="text-white mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const TeamSection = ({ team }: { team: TeamMember[] }) => (
  <section className="py-12 px-4">
    <SectionHeading>Our Team</SectionHeading>
    <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {team.map((m, i) => (
        <div
          key={i}
          className="text-center p-6 bg-[#111] border border-[#4A6B48] rounded-lg shadow-md"
        >
          <img
            src={m.image}
            alt={m.name}
            className="rounded-full w-28 h-28 mx-auto object-cover border-4 border-[#4A6B48]"
          />
          <h3 className="font-bold mt-3 text-white">{m.name}</h3>
          <p className="text-sm text-[#4A6B48]">{m.position}</p>
          <p className="text-white mt-2">{m.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

const StatsSection = ({ stats }: { stats: Stat[] }) => (
  <section className="py-12 px-4 bg-[#111]">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
      {stats.map((s, i) => (
        <div key={i} className="p-4">
          <p className="text-3xl font-bold text-[#4A6B48]">{s.number}</p>
          <p className="text-white">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

// ----------------- Page -----------------

export default function AboutPage() {
  const { companyInfo, history, team, stats } = data;

  return (
    <main className="min-h-screen bg-black text-white">
      <CompanyInfoSection {...companyInfo} />
      <MissionSection
        mission={companyInfo.mission}
        values={companyInfo.values}
      />
      <HistorySection history={history} />
      <TeamSection team={team} />
      <StatsSection stats={stats} />
      <Grid />
    </main>
  );
}
