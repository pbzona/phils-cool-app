export default function Home() {
  const metrics = [
    {
      label: "Quarterly revenue",
      value: "$2.48M",
      change: "+18.2% vs last quarter",
    },
    {
      label: "Net margin",
      value: "24.8%",
      change: "+2.1 pts improvement",
    },
    {
      label: "New enterprise logos",
      value: "312",
      change: "+14% month over month",
    },
    {
      label: "Customer churn",
      value: "1.9%",
      change: "Down 0.6 pts this month",
    },
  ];

  const revenueBars = [42, 56, 48, 64, 58, 74, 92, 84, 98, 88, 106, 118];

  const pipeline = [
    { stage: "Qualified", value: "$1.2M", width: "82%" },
    { stage: "Proposal", value: "$860K", width: "61%" },
    { stage: "Negotiation", value: "$540K", width: "43%" },
    { stage: "Committed", value: "$310K", width: "29%" },
  ];

  const regions = [
    { name: "North America", revenue: "$1.14M", growth: "+21%" },
    { name: "EMEA", revenue: "$690K", growth: "+16%" },
    { name: "APAC", revenue: "$420K", growth: "+24%" },
    { name: "LATAM", revenue: "$230K", growth: "+11%" },
  ];

  const initiatives = [
    {
      title: "Renewal risk contained",
      detail: "12 at-risk accounts were recovered after pricing and support escalations.",
    },
    {
      title: "Hiring ahead of plan",
      detail: "Revenue operations and customer success roles filled two weeks early.",
    },
    {
      title: "Inventory pressure rising",
      detail: "Lead times from two suppliers slipped and now require executive review.",
    },
  ];

  const activity = [
    "Board pack finalized for Friday's operating review.",
    "Marketing spend reallocated toward partner pipeline in EMEA.",
    "Finance approved the Q3 expansion budget for the Dallas office.",
    "Product launch readiness is green across sales enablement and support.",
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(180deg,_#0a0f1a_0%,_#0f172a_100%)] px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <section className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 px-6 py-6 text-white shadow-[0_32px_80px_rgba(15,23,42,0.32)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Live executive snapshot
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Northstar business dashboard
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                A boardroom view of revenue momentum, operational health, and the priorities shaping the next quarter.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[420px]">
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <p className="text-sm text-slate-400">Cash runway</p>
                <p className="mt-2 text-2xl font-semibold">19.4 months</p>
                <p className="mt-1 text-sm text-emerald-300">Healthy with current hiring plan</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <p className="text-sm text-slate-400">Pipeline coverage</p>
                <p className="mt-2 text-2xl font-semibold">3.6x</p>
                <p className="mt-1 text-sm text-sky-300">Ahead of quarterly target</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <p className="text-sm text-slate-400">Critical alerts</p>
                <p className="mt-2 text-2xl font-semibold">2</p>
                <p className="mt-1 text-sm text-amber-300">Supplier delay and one enterprise renewal</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-3xl border border-slate-700/50 bg-slate-900/80 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
            >
              <p className="text-sm font-medium text-slate-400">{metric.label}</p>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-50">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-emerald-400">{metric.change}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <article className="rounded-[28px] border border-slate-700/50 bg-slate-900/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-sky-400">Revenue trend</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50">
                  Monthly performance is compounding.
                </h2>
              </div>
              <p className="text-sm text-slate-400">Jan to Dec</p>
            </div>

            <div className="mt-8 flex h-72 items-end justify-between gap-2 rounded-3xl bg-slate-800/60 px-4 pb-4 pt-8">
              {revenueBars.map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center justify-end gap-3">
                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-sky-500 via-cyan-400 to-emerald-300"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs font-medium text-slate-500">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-emerald-950/50 border border-emerald-800/40 p-4">
                <p className="text-sm text-emerald-400">ARR growth</p>
                <p className="mt-2 text-2xl font-semibold text-emerald-200">+32%</p>
              </div>
              <div className="rounded-2xl bg-sky-950/50 border border-sky-800/40 p-4">
                <p className="text-sm text-sky-400">Average sales cycle</p>
                <p className="mt-2 text-2xl font-semibold text-sky-200">41 days</p>
              </div>
              <div className="rounded-2xl bg-violet-950/50 border border-violet-800/40 p-4">
                <p className="text-sm text-violet-400">Expansion revenue</p>
                <p className="mt-2 text-2xl font-semibold text-violet-200">$410K</p>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="rounded-[28px] border border-slate-700/50 bg-slate-900/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
              <p className="text-sm font-medium text-slate-400">Pipeline status</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50">
                Forecast confidence remains high.
              </h2>
              <div className="mt-6 space-y-5">
                {pipeline.map((item) => (
                  <div key={item.stage}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-200">{item.stage}</span>
                      <span className="text-slate-400">{item.value}</span>
                    </div>
                    <div className="mt-2 h-3 rounded-full bg-slate-800">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-700/50 bg-slate-900/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
              <p className="text-sm font-medium text-slate-400">Top priorities</p>
              <div className="mt-5 space-y-4">
                {initiatives.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-slate-800/60 p-4">
                    <p className="font-semibold text-slate-100">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[28px] border border-slate-700/50 bg-slate-900/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-400">Regional performance</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50">
                  Balanced growth across core markets.
                </h2>
              </div>
              <div className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300">
                Updated 8 mins ago
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="grid gap-3 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"
                >
                  <div>
                    <p className="font-semibold text-slate-100">{region.name}</p>
                    <p className="text-sm text-slate-400">Revenue contribution</p>
                  </div>
                  <p className="text-lg font-semibold text-slate-50">{region.revenue}</p>
                  <p className="text-sm font-medium text-emerald-400">{region.growth}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-slate-700/50 bg-slate-900/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
            <p className="text-sm font-medium text-slate-400">Executive notes</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50">
              Recent movement across the business.
            </h2>
            <div className="mt-6 space-y-3">
              {activity.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-slate-800/60 p-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-slate-800 border border-slate-700/50 p-5 text-white">
              <p className="text-sm text-slate-400">CEO outlook</p>
              <p className="mt-3 text-lg leading-8 text-slate-200">
                The company is growing efficiently, but next-quarter execution depends on protecting gross margin while keeping enterprise expansion velocity high.
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
