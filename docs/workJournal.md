# LA Homelessness Initiative — Work Journal

Running log of build work: what was done, why, and where it landed.
Chronological — newest entry at the bottom.

The convention is in [CLAUDE.md](../CLAUDE.md) under "The work journal". In
short: every working session appends a dated entry, prose over bullets, why
over what, and history is never edited to be right — a later entry corrects an
earlier one and says so.

---

## 2026-09-05 — Journal opened, and 89 commits of history summarised rather than reconstructed (`chore/work-journal`)

The journal starts today, so this first entry is a **backfill**: a coarse
summary written from the commit log, not from memory. Detail below this line is
trustworthy; detail above it is not, and nothing here should be cited as though
someone wrote it down at the time. For anything before 2026-09-05 the commit log
is the record.

**What this repo is.** A bespoke single-page SvelteKit site — `<title>Hearts and
Minds` — making the case on homelessness in Los Angeles County: six full-screen
frames the visitor advances through, an emergency-help modal, a "myths" panel
whose claims shatter on click, animated statistics, and a wall of partner
organisations. There is no CMS. Every word is hard-coded in
`src/routes/+page.svelte`, all 2,613 lines of it; `$lib/stores/activeFrame` holds
which frame is showing and `Panel.svelte` translates the rest off-screen.

**The eras.** 89 commits, one author, in two very different modes. **67 land in
ten weeks of 2024** (20 in May, 38 in June, 9 in July) — the original hand-built
animation work, with commit messages to match: "shattering first pass", "moved
the bench up", "moving svgs up on mobiel for toolbar", "bob". Then the site sits
still: **one commit in all of 2025**, adding `robots.txt`. It returns in
**2026-06** (14) and **2026-07** (7), and that burst is fleet adoption rather
than feature work — the Svelte 5 stack (#1), the org's reusable CI workflow and
renovate preset (#3), Node 24 and pnpm 11 (#5), Typekit folded into the shared
kit `noj4tji` and loaded async (#6, #7), the contact form moved off reCAPTCHA +
SendGrid onto central ingest (#8), a11y labelling (#9), then `/health` (#15) and
a smoke suite (#16). One content change hides in there: `ed67a26` re-framed the
copy from youth mental health to county-wide.

**The naming has never agreed with itself.** Repo `la-homelessness-initiative`,
Netlify site `la-homelessness-general`, page title "Hearts and Minds",
`.env.example` forms slug `youth-mental-health` — all one site. Nothing breaks;
it just costs a few minutes every time someone hunts for the deploy.

**State as of this entry.** `main` at `5c59adc` (2026-08-02), unmoved since, no
open PRs. The checkout was parked on `ci/wire-smoke-tests` at `20e8f83` —
squash-merged as #21 on 2026-07-16 and nine commits behind `main` — clean tree,
nothing in flight, so this branch was cut from `origin/main` instead: a PR off
that stale base would have proposed reverting nine merged commits, the
security-advisory clearance in #25 among them. Half a dozen abandoned
`renovate/*` branches remain on the remote with no PRs attached.

**What changed today.** `CLAUDE.md` and this file, nothing else.
