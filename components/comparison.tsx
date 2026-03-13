export function Comparison() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-label="3D Printed vs Traditional RPD Comparison">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <h2 className="font-sans text-[clamp(1.5rem,3vw,2.5rem)] font-medium text-[#1a1a1a]">
          3D Printed vs Traditional RPD
        </h2>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#52525b]">
                <th className="border border-[#52525b] px-4 py-4 text-left text-sm font-medium text-white">
                  Hand-casted RPD
                </th>
                <th className="border border-[#52525b] px-4 py-4 text-left text-sm font-medium text-white">
                  3D Printed RPD
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-4 text-sm text-[#71717a]">
                  Low efficiency and slow production.
                </td>
                <td className="border border-[#e5e5e5] bg-[#f0f9ff] px-4 py-4 text-sm text-[#52525b]">
                  High efficiency with twice as fast as traditional casting.
                </td>
              </tr>
              <tr>
                <td className="border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-4 text-sm text-[#71717a]">
                  High skill requirement, complex and demanding manufacturing process with a long production cycle.
                </td>
                <td className="border border-[#e5e5e5] bg-[#f0f9ff] px-4 py-4 text-sm text-[#52525b]">
                  Low skill requirements and streamlined production process.
                </td>
              </tr>
              <tr>
                <td className="border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-4 text-sm text-[#71717a]">
                  Poor casting flow that is prone to defects such as sand inclusions and air pockets, and susceptible to breakage.
                </td>
                <td className="border border-[#e5e5e5] bg-[#f0f9ff] px-4 py-4 text-sm text-[#52525b]">
                  No casting steps, free from sand inclusions and air pockets, excellent plasticity, and elasticity.
                </td>
              </tr>
              <tr>
                <td className="border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-4 text-sm text-[#71717a]">
                  Low precision, easily misaligned with low fit accuracy.
                </td>
                <td className="border border-[#e5e5e5] bg-[#f0f9ff] px-4 py-4 text-sm text-[#52525b]">
                  High precision, capable of intricate and precise structures with high fit accuracy.
                </td>
              </tr>
              <tr>
                <td className="border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-4 text-sm text-[#71717a]">
                  Thicker profile and the thickness exceeding 0.6mm.
                </td>
                <td className="border border-[#e5e5e5] bg-[#f0f9ff] px-4 py-4 text-sm text-[#52525b]">
                  Lightweight and thin with wall thickness as low as 0.3mm.
                </td>
              </tr>
              <tr>
                <td className="border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-4 text-sm text-[#71717a]">
                  Material wastage, significant waste and environmental pollution.
                </td>
                <td className="border border-[#e5e5e5] bg-[#f0f9ff] px-4 py-4 text-sm text-[#52525b]">
                  Material conservation and environmentally friendly.
                </td>
              </tr>
              <tr>
                <td className="border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-4 text-sm text-[#71717a]">
                  High release of casting metal ions and relatively poor biocompatibility.
                </td>
                <td className="border border-[#e5e5e5] bg-[#f0f9ff] px-4 py-4 text-sm text-[#52525b]">
                  Highly compatible with biological systems.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
