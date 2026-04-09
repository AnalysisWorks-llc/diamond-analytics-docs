# Fielding Logger

The Fielding Logger records defensive plays — who fielded the ball, how, and the result. This data drives fielding percentage, zone tendency charts, and throwing accuracy analytics.

## Required Field — Position

**You must select a position before logging a fielding play.** The position tells the analytics engine which player was responsible for the ball. If no position is selected the play cannot be saved.

## Logging a Fielding Play

1. Select the **fielder** from the player selector
2. Select the **position** being played
3. Select the **ball type** — how the ball arrived
4. Select the **fielding zone** — where relative to the player the ball was hit
5. Select **Catch** or **Error** for the fielding result
6. If a throw was made select the **throw zone** and **throw result**
7. Toggle **Double Play** if applicable
8. The record saves when you tap the throw result button

## Ball Types

| Type | Description |
|------|-------------|
| Ground Ball | Ball hit on the ground |
| Line Drive | Ball hit on a line |
| Fly Ball | Ball hit in the air |

## Fielding Zones

The fielding zone grid shows 9 positions relative to the fielder:

```
Behind Left | Behind | Behind Right
Left        | Player | Right
Front Left  | Front  | Front Right
```

Select where the ball was relative to the fielder when they fielded it.

## Throw Zones

The throw zone grid shows 9 directional zones for the throw:

```
High Left | High  | High Right
Left      | Player| Right
Low Left  | Low   | Low Right
```

Select the direction and height of the throw.

## Special Plays

**Double Play (DP)** — toggle before saving to mark the play as a double play. Does not save automatically — must still complete the throw result.

**Passed Ball (PB)** — for catchers only. Toggle to mark a passed ball. This counts as an error in the catcher's fielding percentage calculation.

## Automatic Navigation

When a pitch is logged as **Hit in Play** in the Pitching Logger the app automatically navigates to the Fielding Logger. After logging the fielding play return to the Game Hub manually — multiple fielding plays can result from one ball in play (for example a bobble followed by a recovery throw).
