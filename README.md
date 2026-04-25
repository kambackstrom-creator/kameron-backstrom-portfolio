# Kameron Backstrom — Portfolio

Personal portfolio site. Single-page tabbed layout, mobile-responsive, deeply linkable.

## File Structure

```
portfolio/
├── index.html       ← all content
├── styles.css       ← all styling
├── script.js        ← nav, tabs, mobile menu
├── images/          ← all images (replace placeholders here)
└── README.md
```

## Replacing Placeholders with Real Images

Drop your real images into the `/images/` folder using these exact filenames:

| Filename | Used For | Recommended Size |
|---|---|---|
| `headshot.jpg` | Hero portrait | 400×400 (square) |
| `social-preview.jpg` | Link preview when shared on LinkedIn, iMessage, etc. | 1200×630 |
| `netflix-spoils.jpg` | Next on Netflix 2026 thumbnail | 800×500 |
| `netflix-discover.jpg` | Netflix Spoils thumbnail | 800×500 |
| `train-dreams.jpg` | Train Dreams poster | 600×800 (vertical) |
| `ruth-boaz.jpg` | Ruth & Boaz poster | 600×800 |
| `wrong-paris.jpg` | The Wrong Paris poster | 600×800 |
| `calabasas-confidential.jpg` | Calabasas Confidential series | 600×800 |
| `apple-awards-2023.jpg` | App Store Awards 2023 | 800×500 |
| `apple-awards-2024.jpg` | App Store Awards 2024 | 800×500 |
| `hbo-day-and-date.jpg` | HBO Max Warner Bros. day-and-date 2021 banner | 1200×500 (wide) |
| `chapman-board.jpg` | Alumni Board photo | 1200×500 (wide) |
| `love-marketing-week.jpg` | Love Marketing Week panel | 800×500 |
| `long-beach-panel.jpg` | Long Beach State panel | 800×500 |
| `chapman-recognition.jpg` | Chapman Top Employer photo | 1200×500 |
| `overwatch-league.jpg` | Overwatch League banner | 1200×525 |

If you use different filenames, update the `<img src="...">` references in `index.html`.

## Deeply Linkable URLs

Every section and Work Highlights tab has its own shareable URL:

- `kameronbackstrom.com/#about`
- `kameronbackstrom.com/#career`
- `kameronbackstrom.com/#work` (defaults to Netflix tab)
- `kameronbackstrom.com/#work/netflix`
- `kameronbackstrom.com/#work/apple`
- `kameronbackstrom.com/#work/hbomax`
- `kameronbackstrom.com/#work/blizzard`
- `kameronbackstrom.com/#industry`
- `kameronbackstrom.com/#skills`
- `kameronbackstrom.com/#contact`

When applying for an Apple-aligned role, send the recruiter `#work/apple` to land them straight on that tab.

## Deploying to GitHub Pages

1. Create a repo named `kameronbackstrom.github.io` (or any name).
2. Push these files to the `main` branch.
3. Settings → Pages → Source: `main` branch, root folder.
4. Site goes live at `https://kameronbackstrom.github.io` (or `username.github.io/repo-name`).
5. To use a custom domain, add a `CNAME` file with your domain and configure DNS at GoDaddy.

## Deploying to GoDaddy

1. Log in to GoDaddy → cPanel or Web Hosting file manager.
2. Upload `index.html`, `styles.css`, `script.js`, and the `/images/` folder to your `public_html` (or root web) directory.
3. The site is live immediately.

## Updating Content

Most edits are straightforward in `index.html`:

- **Adding a new role:** copy a `.timeline-item` block in the Career section
- **New Work Highlight tab:** add a `<button>` to `.work-tabs` and a matching `<div class="work-panel" id="work-newname">` block
- **New skill:** add an `<li>` to the appropriate `.skill-card`

For new sections entirely, follow the existing `<section>` pattern and add a corresponding `<a>` to `.nav-list`.
