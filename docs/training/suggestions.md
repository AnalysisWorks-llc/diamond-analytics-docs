# How Suggestions Work

The training suggestion engine continuously monitors player analytics against thresholds and surfaces issues that warrant attention.

## What Triggers a Suggestion

Suggestions are generated when a metric falls below its configured threshold and the player has enough data for the stat to be meaningful. Examples:

| Metric | Default Threshold | Priority |
|--------|------------------|----------|
| Batting average below .200 | 20+ AB | High |
| Strike rate below 55% | 30+ pitches | High |
| Walk rate above 15% | 20+ PA | Medium |
| Fielding % below .850 | 15+ chances | Medium |
| Mechanics element below 1.5 average | 3+ assessments | High |
| Stolen base % below 60% | 5+ attempts | Low |

Thresholds are fully customizable per team through **Settings → Analytics Settings**.

## Priority Levels

**High** — significant performance issue affecting game outcomes. Address immediately.

**Medium** — developing issue that needs attention before it becomes a larger problem.

**Low** — area for improvement that won't significantly affect game outcomes in the short term.

## Suggestion Cards

Each suggestion card shows:
- Player name and jersey number
- The specific metric and current value
- The threshold and how far below it the player is
- A suggested focus area
- **Create Training Plan** button
- **Find Drills** button (opens YouTube drill search)
- **Dismiss** (X) button

## When Suggestions Reappear

Dismissed suggestions come back after 30 days. They also come back earlier if the underlying metric declines by more than 10% since dismissal. This ensures that a genuinely improving issue does not keep resurging while a worsening problem always gets attention.

## Suggestions vs Coach Judgment

Suggestions are data-driven starting points, not directives. A coach may have context the analytics do not — a player recovering from an injury, a recent mechanics adjustment that just needs time to show up in results, or a player who is already working on a specific issue. Dismiss suggestions freely when they do not reflect your actual development priorities.
