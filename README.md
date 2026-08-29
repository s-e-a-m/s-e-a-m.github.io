# s-e-a-m.github.io

The website of **SEAM** — Sustained Electro-Acoustic Music.

Jekyll, with the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) remote theme in the `dark` skin.
Served by GitHub Pages from `master`.

## Running it locally

```bash
bundle install
bundle exec jekyll serve
```

Always build locally and read the result before pushing: the site is the public face of three repositories.

## Documentation collections

The site is the single hub for the documentation of the SEAM projects.
Each project generates its own Markdown and copies it here; the site does not build anything from source itself.

| Collection | Folder | URL | Source |
|---|---|---|---|
| `libraries` | `_libraries/` | `/faust-libraries/` | repo `faust-libraries` — `make -C doc publish` |
| `sean` | `_sean/` | `/sean/` | repo `sean` — `make publish` |
| `ltm` | `_ltm/` | `/seam-ltm/` | repo `seam-ltm` — `make -C doc publish` |

The rule for public addresses: **the URL is the name of the repository**.
The one declared exception is the hub page `/docs/`, which belongs to no single repository because it is the index of all of them.

## Files you must not edit here

Everything under `_libraries/` is **generated**.
The front matter of each page says where it came from (`generated_from`, `generated_rev`) and the body opens with a `<!-- GENERATO … -->` comment.
Edit the source repository and publish again: the next `publish` overwrites anything changed here, silently.

`_data/navigation.yml` contains blocks delimited by `# BEGIN <name>` / `# END <name>` markers, written by the source repositories.
Outside the markers you write by hand; inside, you do not.

## GitHub Pages for the project repositories must stay off

When a project page and this user site claim the same path, **the project page wins**.
`s-e-a-m/faust-libraries` had Pages enabled and was serving its own README at `/faust-libraries/`, which is why the library reference had ended up at `/faustlibraries/`, without the hyphen.

Pages must remain disabled on `faust-libraries`, `sean` and `seam-ltm`.
Turning it back on would leave this site's pages built, uploaded and never served, with no visible error anywhere.
