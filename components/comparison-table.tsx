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
      <div className="divide-y divide-line-dark border-y border-line-dark md:hidden">
        {comparisons.map((item) => (
          <article key={`mobile-${item.category}`} className="py-6">
            <h3 className="text-base font-medium text-ink">{item.category}</h3>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/42">Hand-casted RPD</dt>
                <dd className="mt-1.5 text-sm leading-6 text-ink/62">{item.traditional}</dd>
              </div>
              <div className="border-t border-line-dark pt-4">
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-gold-dim">3D Printed RPD</dt>
                <dd className="mt-1.5 text-sm leading-6 text-ink/82">{item.modern}</dd>
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
