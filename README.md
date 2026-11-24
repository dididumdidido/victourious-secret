# Victorious Secret (VS)

Helping service members and veterans affected by harassment, sexual harassment, or assault **take back their power and find small victories on the road to healing.**

A plain HTML/CSS/JS site — no build step. Hosted free on GitHub Pages.

## Pages
| File | What it is |
|---|---|
| `index.html` | Home — mission, how it works, quick facts |
| `resources.html` | Searchable directory (filter by state + type of help) |
| `survey.html` | Anonymous survey (no name or email) + optional DEOCS-style climate step + separate opt-in |
| `results.html` | Survey results in plain-language ring charts and bars |
| `providers.html` | Application for lawyers / clinicians / practitioners |
| `stories.html` | Stories — coming soon, with sharing guidelines and career-risk notice |
| `petition.html` | Policy petition — coming soon |
| `about.html` | Name meaning, what we do / don't do, team roles |

## How to edit
- **Add a directory listing:** open `data/resources.js` and copy one `{ ... }` block. Verify every detail before publishing.
- **Site name, email, form connections:** top of `assets/main.js` (`SITE` settings).
- **Colors and fonts:** top of `assets/style.css`.

## Updating survey results
1. Export survey responses as CSV from your form service.
2. Run `python3 tools/make_stats.py path/to/export.csv` — this rewrites `data/stats.js`.
3. Commit and push. Results only appear once 25+ people have answered (so no one can be identified). Until then `data/stats.js` holds clearly-labeled SAMPLE numbers.

## Turning the forms on
Forms run in *preview mode* until connected (nothing is sent). To collect responses:
1. Create a free account at [formspree.io](https://formspree.io) and make three forms: survey, provider, newsletter.
2. In each form's settings, turn off IP address collection so the survey stays truly anonymous.
3. Paste each form URL into `SITE.forms` in `assets/main.js`.

## Publishing on GitHub Pages
Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save. The site appears at `https://<username>.github.io/<repo-name>/` within a minute or two.

## Before going public
- [ ] Team review of copy, mission, and name
- [ ] Verify every directory listing
- [ ] Policy/legal check (Amanda) on nonprofit constraints and what can be said publicly
- [ ] Connect forms and a privacy-respecting inbox
- [ ] Add logo
