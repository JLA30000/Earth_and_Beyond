export default function PageHero({
  image,
  align = 'left',
  minHeight = '70vh',
  wide = false,
  className = '',
  contentClassName = '',
  children,
}) {
  return (
    <section
      className={`page-hero ${className}`.trim()}
      style={{ backgroundImage: `url(${image})`, minHeight }}
    >
      <div className={`page-hero__inner page-hero__inner--${align}`}>
        {children ? (
          <div
            className={`page-hero__copy${wide ? ' page-hero__copy--wide' : ''}${contentClassName ? ` ${contentClassName}` : ''}`}
          >
            {children}
          </div>
        ) : (
          <div className="hero-spacer" aria-hidden="true" />
        )}
      </div>
    </section>
  );
}
