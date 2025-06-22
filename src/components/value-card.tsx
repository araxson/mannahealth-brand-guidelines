interface ValueCardProps {
  title: string
  description: string
}

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}
