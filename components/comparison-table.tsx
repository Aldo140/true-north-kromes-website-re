export function ComparisonTable() {
  const comparisons = [
    {
      category: "Production Efficiency",
      traditional: "Low efficiency and slow production.",
      modern: "High efficiency with twice as fast as traditional casting.",
    },
    {
      category: "Skill & Process",
      traditional: "High skill requirement, complex and demanding manufacturing process with a long production cycle.",
      modern: "Low skill requirements and streamlined production process.",
    },
    {
      category: "Defects & Quality",
      traditional: "Poor casting flow that is prone to defects such as sand inclusions and air pockets, and susceptible to breakage.",
      modern: "No casting steps, free from sand inclusions and air pockets, excellent plasticity, and elasticity.",
    },
    {
      category: "Precision & Fit",
      traditional: "Low precision, easily misaligned with low fit accuracy.",
      modern: "High precision, capable of intricate and precise structures with high fit accuracy.",
    },
    {
      category: "Weight & Design",
      traditional: "Thicker profile and the thickness exceeding 0.6mm.",
      modern: "Lightweight and thin with wall thickness as low as 0.3mm.",
    },
    {
      category: "Environmental Impact",
      traditional: "Material wastage, significant waste and environmental pollution.",
      modern: "Material conservation and environmentally friendly.",
    },
    {
      category: "Biocompatibility",
      traditional: "High release of casting metal ions and relatively poor biocompatibility.",
      modern: "Highly compatible with biological systems.",
    },
  ]

  return (
    <div aria-label="RPD Comparison">
      <div className="border-y border-line-dark md:hidden">
        <div className="grid grid-cols-2 border-b border-line-dark" aria-hidden="true">
          <div className="flex min-h-11 items-center px-3 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/48">
            Cast process
          </div>
          <div className="flex min-h-11 items-center bg-ink px-3 font-mono text-[9px] uppercase tracking-[0.14em] text-gold">
            Printed process
          </div>
        </div>
        {comparisons.map((item, index) => (
          <article key={`mobile-${item.category}`} className="border-b border-line-dark last:border-b-0">
            <header className="flex min-h-12 items-center justify-between gap-3 px-3">
              <h3 className="text-[15px] font-medium leading-tight text-ink">{item.category}</h3>
              <span className="font-mono text-[9px] tabular-nums tracking-[0.14em] text-gold-dim" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </header>
            <dl className="grid grid-cols-2 items-stretch">
              <div className="px-3 py-4">
                <dt className="sr-only">Hand-casted RPD</dt>
                <dd className="text-[13px] leading-[1.55] text-ink/62">{item.traditional}</dd>
              </div>
              <div className="bg-ink px-3 py-4">
                <dt className="sr-only">3D Printed RPD</dt>
                <dd className="text-[13px] leading-[1.55] text-paper/88">{item.modern}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="hidden overflow-x-auto md:block">
      <table className="w-full min-w-[560px] border-collapse">
        <thead>
          <tr className="border-b border-gold-dim">
            <th className="w-1/4 py-3 pr-6 text-left align-bottom font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-ink">
              Criteria
            </th>
            <th className="w-[37.5%] py-3 pr-6 text-left align-bottom font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-ink/60">
              Hand-casted RPD
            </th>
            <th className="w-[37.5%] py-3 text-left align-bottom font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-ink">
              3D Printed RPD
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((item) => (
            <tr key={item.category} className="border-b border-line-dark align-top">
              <td className="py-4 pr-6 text-sm font-medium leading-relaxed text-ink">
                {item.category}
              </td>
              <td className="py-4 pr-6 text-sm leading-relaxed text-ink/60">
                {item.traditional}
              </td>
              <td className="py-4 text-sm leading-relaxed text-ink/85">
                {item.modern}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
