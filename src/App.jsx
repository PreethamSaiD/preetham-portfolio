export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sky-400 uppercase tracking-[0.3em] text-sm mb-4">
              Application Production Support Engineer • SRE • Java Backend
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Deshabaktula <span className="text-sky-400">Preetham Sai</span>
            </h1>
            <p className="mt-6 text-slate-300 text-lg leading-8">
              Application Production Support Engineer and SME with 3+ years of experience in operating,
              debugging, and improving reliability of Java-based distributed systems.
              Specialized in application support, incident management, observability, latency analysis,
              and high-availability production systems.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-sky-500 hover:bg-sky-400 transition px-6 py-3 rounded-2xl text-black font-semibold shadow-lg shadow-sky-500/20">
                View Experience
              </button>
              <button className="border border-slate-700 hover:border-sky-400 transition px-6 py-3 rounded-2xl text-slate-200">
                Download Resume
              </button>
            </div>
          </div>

          <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-800">
            <div className="space-y-6">
              <div>
                <p className="text-slate-400 text-sm">Current Role</p>
                <h3 className="text-2xl font-semibold mt-1">
                  Software Engineer – Application Production Support Engineering / SRE
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Company</p>
                <h3 className="text-xl font-medium mt-1">Cognizant Technology Solutions</h3>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Specialization</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    'Java',
                    'Spring Boot',
                    'Microservices',
                    'Datadog',
                    'Splunk',
                    'SRE',
                    'CI/CD',
                    'RCA',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-800 border border-slate-700 px-3 py-2 rounded-xl text-sm text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <h3 className="text-lg mt-1">Hyderabad, India</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="w-24 h-1 bg-sky-400 rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-slate-300 leading-8 text-lg">
                Experienced in handling production incidents, diagnosing performance bottlenecks,
                and improving system reliability for enterprise-scale applications. Skilled in
                monitoring, debugging distributed systems, and collaborating with cross-functional
                teams to ensure seamless application continuity.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Incident Management',
                  'Distributed Systems',
                  'Latency Analysis',
                  'Performance Tuning',
                  'Observability',
                  'RCA',
                  'SLA/SLO Management',
                  'Reliability Engineering',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-slate-800 border border-slate-700 rounded-2xl p-4 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 md:px-16 py-20 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold">Professional Experience</h2>
            <div className="w-24 h-1 bg-sky-400 rounded-full mt-4"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Software Engineer (Production Engineering / SRE)
                  </h3>
                  <p className="text-sky-400 mt-2 text-lg">
                    Cognizant Technology Solutions – Liberty Mutual Insurance
                  </p>
                </div>
                <div className="text-slate-400">Sep 2022 – Present</div>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6 text-slate-300 leading-7">
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    Owned production support for Java-based microservices ensuring 99.9% availability.
                  </li>
                  <li>
                    Led incident lifecycle management including detection, triage, mitigation, and RCA.
                  </li>
                  <li>
                    Diagnosed P90/P99 latency spikes using logs, metrics, and tracing.
                  </li>
                  <li>
                    Investigated database queries, thread pools, and service latency issues.
                  </li>
                </ul>

                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    Built Datadog and Splunk dashboards for observability and monitoring.
                  </li>
                  <li>
                    Automated deployment workflows using Bamboo CI/CD pipelines.
                  </li>
                  <li>
                    Supported production deployments and managed change requests.
                  </li>
                  <li>
                    Participated in on-call rotations ensuring SLA adherence.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Full Stack Intern</h3>
                  <p className="text-sky-400 mt-2 text-lg">
                    Cognizant Technology Solutions
                  </p>
                </div>
                <div className="text-slate-400">Feb 2022 – Aug 2022</div>
              </div>

              <ul className="mt-8 space-y-3 list-disc list-inside text-slate-300 leading-7">
                <li>Developed backend microservices using Java and Spring Boot.</li>
                <li>Designed REST APIs for e-commerce workflows.</li>
                <li>Implemented service communication in microservices architecture.</li>
                <li>Optimized SQL queries for better performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold">Technical Skills</h2>
            <div className="w-24 h-1 bg-sky-400 rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Languages',
                items: ['Java', 'SQL', 'Shell Scripting', 'React JS'],
              },
              {
                title: 'Frameworks',
                items: ['Spring Boot', 'REST APIs'],
              },
              {
                title: 'Monitoring',
                items: ['Datadog', 'Splunk'],
              },
              {
                title: 'Tools',
                items: ['Git', 'Maven', 'Bamboo', 'Jira'],
              },
            ].map((section) => (
              <div
                key={section.title}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
              >
                <h3 className="text-2xl font-semibold mb-6 text-sky-400">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="bg-slate-800 rounded-xl px-4 py-3 text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-16 py-20 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold">Projects</h2>
            <div className="w-24 h-1 bg-sky-400 rounded-full mt-4"></div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">
                  E-Commerce Backend System
                </h3>
                <p className="text-sky-400 mt-2">
                  Java • Spring Boot • REST APIs • MySQL
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8 text-slate-300 leading-7">
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  Built backend microservices for catalog, inventory, and order management.
                </li>
                <li>
                  Designed scalable REST APIs for business workflows.
                </li>
              </ul>

              <ul className="space-y-3 list-disc list-inside">
                <li>
                  Integrated MySQL and optimized queries for better scalability.
                </li>
                <li>
                  Implemented debugging and error handling scenarios.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold">Education</h2>
            <div className="w-24 h-1 bg-sky-400 rounded-full mt-4"></div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
            <div>
              <h3 className="text-2xl font-bold">
                Bachelor of Technology – Information Technology
              </h3>
              <p className="text-sky-400 mt-2 text-lg">
                B V Raju Institute of Technology
              </p>
            </div>

            <div className="text-slate-300 text-lg">
              <p>2018 – 2022</p>
              <p className="mt-2">CGPA: 8.25 / 10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-12 border-t border-slate-800 text-center">
        <h3 className="text-3xl font-bold">
          Deshabaktula <span className="text-sky-400">Preetham Sai</span>
        </h3>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-7">
          Passionate about reliability engineering, distributed systems,
          production debugging, and building resilient enterprise applications.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <div className="border border-slate-700 px-5 py-3 rounded-2xl text-slate-300">
            Email - preetham1080@gmail.com
          </div>
          <div className="border border-slate-700 px-5 py-3 rounded-2xl text-slate-300">
            Phone Hidden
          </div>
          <div className="border border-slate-700 px-5 py-3 rounded-2xl text-slate-300">
            LinkedIn - https://www.linkedin.com/in/dpreethamsai2001/
          </div>
        </div>
      </footer>
    </div>
  );
}