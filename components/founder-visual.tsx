export function FounderVisual() {
  return (
    <div
      className="founder-visual relative aspect-[4/3] overflow-hidden bg-[hsl(var(--secondary))]"
      role="img"
      aria-label="An animated visual showing a website moving from idea to launch"
    >
      <div className="founder-visual-grid" aria-hidden="true" />
      <div className="founder-visual-orbit founder-visual-orbit-one" aria-hidden="true" />
      <div className="founder-visual-orbit founder-visual-orbit-two" aria-hidden="true" />
      <div className="founder-visual-panel founder-visual-panel-main" aria-hidden="true">
        <div className="founder-visual-panel-bar"><span /><span /><span /></div>
        <div className="founder-visual-panel-copy">
          <span className="founder-visual-kicker">Dream Pixel</span>
          <span className="founder-visual-line founder-visual-line-wide" />
          <span className="founder-visual-line founder-visual-line-short" />
        </div>
        <div className="founder-visual-panel-footer"><span>strategy</span><span>design</span><span>growth</span></div>
      </div>
      <div className="founder-visual-card founder-visual-card-found" aria-hidden="true">
        <span className="founder-visual-card-dot" />
        <span>found</span>
      </div>
      <div className="founder-visual-card founder-visual-card-remembered" aria-hidden="true">
        <span className="founder-visual-card-dot" />
        <span>remembered</span>
      </div>
      <div className="founder-visual-caption">Websites with a point of view</div>
    </div>
  )
}
