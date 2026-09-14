# Legal Divorce Docs

Arizona divorce document preparation marketing site, built with React and Vite. Conversion-focused homepage with quick qualification, upfront pricing, and clear non-law-firm positioning.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints, usually http://localhost:5173.

## Scripts

- `npm run dev` — start the local Vite server
- `npm run build` — create a production build in `dist/`
- `npm run preview` — preview the production build

## Project structure

- `src/components/ui/` — reusable UI pieces (buttons, brand, dialog, icons)
- `src/components/layout/` — header, mobile nav, footer
- `src/components/sections/` — homepage sections
- `src/content.js` — copy, pricing, FAQ, and CLDP placeholders
- `src/styles.css` — layout and responsive styles
- `public/assets/` — logo and imagery

## Before launch

- Replace `CLDP_INFO` in `src/content.js` with the licensed preparer name and certification number
- Confirm exact services included in each package
- Connect Start My Divorce / Sign In to the live intake and portal
- Add verified Google reviews only (no fabricated testimonials)
- Confirm Privacy, Terms, Refund, and Disclaimer page destinations
