# Understanding ERA in Diamond Analytics

## What is ERA?

Earned Run Average (ERA) measures how many earned runs a pitcher allows per game. Lower is better.

## Standard ERA Formula

ERA = (Earned Runs ÷ Innings Pitched) × Game Innings

## Age-Appropriate Calculation

Diamond Analytics adjusts ERA based on your team level because youth games use fewer innings than professional baseball:

| Level | Game Innings | ERA Formula |
|-------|-------------|-------------|
| 8U – 12U | 6 innings | (ER ÷ IP) × 6 |
| 13U – 18U | 7 innings | (ER ÷ IP) × 7 |
| Middle School | 7 innings | (ER ÷ IP) × 7 |
| High School | 7 innings | (ER ÷ IP) × 7 |

The ERA label throughout the app indicates which calculation is being used — for example **ERA (6-inn)** or **ERA (7-inn)**.

## Why This Matters

A pitcher who allows 2 earned runs over 3 innings has:
- **Standard (9-inn) ERA:** 6.00
- **Youth 7-inn ERA:** 4.67
- **Youth 6-inn ERA:** 4.00

Using age-appropriate innings gives a more accurate picture of performance relative to the game format actually being played.

## Earned vs Unearned Runs

Only **earned runs** count toward ERA. Runs that score due to errors are unearned and do not count. When logging pitching data, earnedRuns is recorded separately from total runs allowed.
