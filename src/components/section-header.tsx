interface SectionHeaderProps {
  number: string
  title: string
  subtitle: string
  color: string
}

export function SectionHeader({ number, title, subtitle, color }: SectionHeaderProps) {
  return (
    <div className={`${color} text-white p-12`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-6">
          <div className="text-6xl font-bold opacity-50">{number}</div>
          <div>
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <p className="text-xl opacity-90">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
