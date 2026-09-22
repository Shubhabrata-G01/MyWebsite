# Shubhabrata Ganguly — Portfolio & Freelance Services

A personal portfolio and freelance-services website for **Shubhabrata Ganguly** —
AI Manager, ML Engineer and Applied-AI consultant. Built to share when applying for
roles and to offer freelance services to clients.

**Live sections:** Hero · About · Services (4 pillars) · Experience · Projects · Skills · Contact

## Four service pillars

| Pillar | Covers |
| --- | --- |
| **ML & Data Science** | Machine learning, data science, financial data analysis, data modelling, KPI analysis, competition analysis |
| **Applied AI** | LLM, RAG, MCP, Claude/GenAI, agentic AI & agent building, AI application building, MLOps, AIOps, model deployment |
| **Product Management** | AI Product Management, roadmap design, product strategy, KPI & metric definition, competitive analysis, Agile/SAFe |
| **Quality Analysis** | AI QA, automation testing, software testing, performance testing, CI/CD quality gates, test strategy |

## Tech

Plain **HTML + CSS + JavaScript** — no build step, no dependencies. Fonts load from Google Fonts.

Two themes are included:

```
index.html        # WARM theme  — cream / teal / coral editorial style (default)
styles-warm.css   #   its styles
script-warm.js    #   filters, mobile nav, scroll reveals

index-dark.html   # DARK theme  — navy / electric-blue
styles.css        #   its styles
script.js         #   nav, scroll reveals, count-up stats

assets/img/       # banner + photos
assets/files/     # downloadable résumés
```

Each theme links to the other, so you can pick whichever you prefer as the site's `index.html`.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy with GitHub Pages (free hosting)

1. Push this repo to GitHub (branch already set up).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**.
4. Choose the branch (e.g. `main`) and folder `/ (root)`, then **Save**.
5. Your site goes live at `https://shubhabrata-g01.github.io/MyWebsite/`.

To use a custom domain (e.g. `www.ShubhabrataGanguly.com`), add it under
**Settings → Pages → Custom domain** and point a CNAME record at GitHub Pages.

## Update your résumés

Replace the files in `assets/files/` with the same names to keep the download links working.

---

Contact: [gangulyshubhabrata@gmail.com](mailto:gangulyshubhabrata@gmail.com) ·
[LinkedIn](https://www.linkedin.com/in/shubhabrata-ganguly-bb578a134) ·
[GitHub](https://github.com/Shubhabrata-G01)
