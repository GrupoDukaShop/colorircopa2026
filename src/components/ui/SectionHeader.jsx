export function SectionHeader({ label, title, body, labelColor = 'green', titleColor = 'dark', center = true }) {
  const labelColors = {
    green: 'text-copa-green',
    gold:  'text-copa-gold',
    white: 'text-white/60',
  }
  const titleColors = {
    dark:  'text-navy-800',
    white: 'text-white',
    gold:  'text-copa-gold',
  }
  return (
    <div className={center ? 'text-center' : ''}>
      {label && (
        <span className={`text-[11px] font-bold tracking-[3px] uppercase block mb-2.5 ${labelColors[labelColor]}`}>
          {label}
        </span>
      )}
      <h2 className={`font-display text-[clamp(2.4rem,6vw,4rem)] leading-[.95] tracking-wide mb-3 ${titleColors[titleColor]}`}>
        {title}
      </h2>
      {body && (
        <p className={`text-base md:text-[17px] leading-relaxed font-medium max-w-[540px] ${center ? 'mx-auto' : ''} ${titleColor === 'white' ? 'text-white/75' : 'text-gray-500'}`}>
          {body}
        </p>
      )}
    </div>
  )
}
