# Lineup Builders

Diamond Analytics includes two lineup builders — Defensive Lineup and Batting Lineup — each using player performance data to make data-driven suggestions.

## Defensive Lineup Builder

The defensive lineup builder suggests optimal defensive alignments based on each player's fielding percentage at each position.

**How it works:**
1. Navigate to **Lineups → Defensive Lineup**
2. The algorithm fills positions using a priority spine: C → P → SS → 2B → 3B → 1B → CF → LF → RF
3. Players are placed at their strongest position based on FLD% data
4. Override any position by tapping it and selecting a different player
5. Locked manual selections are preserved when the lineup auto-updates

**Reading the suggestion:**
Each position shows the suggested player with their FLD% at that position. The overall defensive grade updates as you make changes.

**Availability tracking:**
Mark players as unavailable before building the lineup. Reasons include injury, absence, rest, pitch count limit, or other. Unavailable players are excluded from suggestions.

## Batting Lineup Builder

The batting lineup builder suggests batting order based on OBP (leadoff), power, and speed metrics.

**How it works:**
1. Navigate to **Lineups → Batting Lineup**
2. The algorithm places the highest OBP player in the leadoff spot
3. Remaining spots are filled based on a balance of power and contact metrics
4. Drag and drop players to reorder the lineup
5. The stat comparison panel shows key metrics for each player

**Sparklines:**
Each player card shows a mini trend chart of recent at-bat results — a quick visual of current form.

**Saving lineups:**
Save any lineup configuration for future reference. Saved lineups appear in your lineup history.

## Combined Game Day Card

The Game Day view shows both the defensive alignment and batting lineup on one screen that can be shared via the Web Share API or copied for printing.
