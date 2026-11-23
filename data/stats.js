/* ============================================================
   SURVEY RESULTS — feeds results.html
   Regenerate from your survey export with:
       python3 tools/make_stats.py path/to/survey-export.csv
   While isSample is true, the page shows a clear "SAMPLE DATA"
   label on every chart. The numbers below are made up so the team
   can see the layout — they are NOT real responses.
   Real results only display once at least 25 people respond
   (protects anonymity: small groups can identify people).
   ============================================================ */
window.STATS = {
  isSample: true,
  minResponses: 25,
  updated: "",
  total: 120,

  experienced: { // "check all that apply" — counts of people who checked each
    answered: 112,
    counts: { "Harassment": 78, "Sexual harassment": 64, "Sexual assault": 31, "Reprisal": 45, "None": 9 }
  },
  reported: {
    counts: { "Yes - restricted": 14, "Yes - unrestricted": 26, "Yes - IG / EO": 12, "No": 51, "Prefer not to say": 9 }
  },
  leadership_help: {
    counts: { "Yes": 12, "Somewhat": 23, "No": 48, "Made it worse": 21 }
  },
  had_lawyer: {
    counts: { "Yes - military": 18, "Yes - civilian": 7, "No - couldn't afford": 33, "No - didn't know how": 38, "No - other": 10 }
  },
  needs: {
    answered: 108,
    counts: { "Legal representation": 61, "Counseling / therapy": 70, "Holistic / alternative care": 39, "VA claim help": 47, "Community / peers": 58, "Policy change": 52 }
  },
  climate: { // 1 strongly disagree … 5 strongly agree
    safe_reporting:        { 1: 30, 2: 28, 3: 18, 4: 14, 5: 6 },
    trust_command:         { 1: 34, 2: 27, 3: 15, 4: 13, 5: 7 },
    retaliation_protected: { 1: 38, 2: 26, 3: 17, 4: 9,  5: 5 },
    know_outside_help:     { 1: 25, 2: 30, 3: 16, 4: 17, 5: 8 }
  }
};
