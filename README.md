# Ronen Acharya website (static HTML/CSS/JS)

Open `index.html` to preview. No build step needed.

## Get your images offline
`python tools/download_images.py` saves all Site123 images into `assets/images/`. Until then, pages fall back to the Site123 copies.

## Finish the long pages
Open these files and paste the rest of the text where marked `PASTE THE REMAINING TEXT`:
`article-digital-nepal.html`, `article-youth.html`, `tutorial-arduino-intro.html`, `tutorial-dht11.html`.
Add the Nepali text to `article-servo.html`, and put `mhas.pdf` in `assets/pdfs/`.

## Contact form
It opens the visitor's email app. For a real inbox form, make a free form at formspree.io, then set
`<form action="https://formspree.io/f/YOUR_ID" method="POST">` in `contact.html` and remove the submit block in `js/main.js`.

## Connect your domain (free hosting)
1. Netlify or Cloudflare Pages: drag this folder in to publish.
2. Add your domain in the host's Domains settings.
3. At your registrar, set the DNS records the host shows (usually a CNAME for `www` and an A/ALIAS record for the root).
4. Wait for DNS (minutes to a few hours); HTTPS is automatic.
