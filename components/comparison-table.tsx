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
    <div className="overflow-x-auto" aria-label="RPD Comparison">
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
  )
}
