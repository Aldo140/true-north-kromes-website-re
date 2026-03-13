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
    <section className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-28" aria-label="RPD Comparison">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <div className="mb-10 sm:mb-12">
          <h2 className="font-sans text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
            Comparison of Traditional RPDs and 3D Printed Ones
          </h2>
          <div className="mt-3 h-1 w-16 bg-[#4a90e2]" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#4a90e2]">
                <th className="px-4 py-3 sm:px-6 text-left text-sm font-semibold text-white w-1/3">Criteria</th>
                <th className="px-4 py-3 sm:px-6 text-left text-sm font-semibold text-white w-1/3">Hand-casted RPD</th>
                <th className="px-4 py-3 sm:px-6 text-left text-sm font-semibold text-white w-1/3">3D Printed RPD</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#e8f0f8]"}
                >
                  <td className="px-4 py-4 sm:px-6 text-sm font-medium text-[#1a1a1a]">
                    {item.category}
                  </td>
                  <td className="px-4 py-4 sm:px-6 text-sm text-[#52525b]">
                    {item.traditional}
                  </td>
                  <td className="px-4 py-4 sm:px-6 text-sm text-[#52525b]">
                    {item.modern}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
