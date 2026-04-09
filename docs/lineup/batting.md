# Batting Lineup Builder

The batting lineup builder suggests batting order based on OBP, power, and contact metrics from your season data.

## How the Order Is Built

The algorithm uses a traditional lineup construction approach:

| Spot | Priority Metric | Logic |
|------|----------------|-------|
| 1st | OBP | Get on base most consistently |
| 2nd | Contact + Speed | Make contact, move runners |
| 3rd | BA + Power | Best all-around hitter |
| 4th | Power (SLG) | Drive in runs |
| 5th | Power | Second power bat |
| 6th–7th | BA | Solid contact hitters |
| 8th–9th | Remaining | Lower-data players |

## Reordering the Lineup

Drag and drop any player card to change their spot in the order. Changes are reflected immediately in the stat comparison panel.

## Stat Comparison Panel

The panel on the right (or bottom on mobile) shows key metrics for every player in the lineup:
- BA (Batting Average)
- OBP (On-Base Percentage)
- SLG (Slugging)
- HR, RBI
- K% and BB%
- Recent form sparkline

Use this panel to evaluate your drag-and-drop changes against the data.

## Sparklines

Each player card shows a mini sparkline of their last 10 at-bats. This gives you a quick read on current hot/cold streaks independent of season totals. A player hitting .280 for the season but going 0-for-8 in their last two games may not be the right choice for the 3 hole today.

## Saving a Lineup

Tap **Save Lineup** to save the current configuration. Name the lineup (e.g. "Opening Day" or "Vs RHP") for reference. Saved lineups appear in the lineup history and can be recalled for future games.

## Game Day Share

Tap **Share** to send the batting lineup via text, email, or any messaging app using the Web Share API. The shared format includes player names and jersey numbers in batting order — easy to send to parents or post in the dugout.
