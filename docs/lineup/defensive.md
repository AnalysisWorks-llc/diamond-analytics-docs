# Defensive Lineup Builder

The defensive lineup builder uses each player's fielding percentage at each position to suggest the strongest possible defensive alignment.

## How Positions Are Filled

The algorithm fills positions in priority order:
**C → P → SS → 2B → 3B → 1B → CF → LF → RF**

This priority order reflects the defensive importance of each position. The best defenders go to the most demanding spots first.

For each position the algorithm selects the player with the highest FLD% who:
- Has played that position at least once this season
- Is not already placed at another position
- Is not marked as unavailable

## Overriding the Suggestion

Tap any position to manually select a different player. Manual selections are **locked** — they are preserved when the lineup refreshes. Lock icon appears on locked positions.

To unlock a position and return it to the algorithm's suggestion tap the lock icon.

## Availability Management

Before building a lineup mark unavailable players:

1. Tap **Manage Availability**
2. Tap each unavailable player and select a reason:
   - Injury
   - Absent
   - Rest
   - Pitch count limit (set a count limit to automatically flag when threshold is reached)
   - Other
3. Tap **Done**

Unavailable players appear grayed out and are excluded from suggestions.

## Game Day Pitch Count Tracking

The pitch count limit availability reason integrates with live game data. When a pitcher reaches their configured pitch count limit the app automatically flags them as unavailable in the lineup builder. This helps coaches comply with pitch count rules without manual tracking.

## Minimum Data Requirements

The defensive lineup builder works best with sufficient fielding data:
- Players with no fielding data at a position can still be placed manually
- The algorithm only places players automatically at positions where they have logged fielding chances

Early in a season the lineup builder may have limited data — build it manually until sufficient game data accumulates.
