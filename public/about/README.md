# About page assets

Add **Founder.png** (founder photo) in this directory so it is served at `/about/Founder.png`.

The About page uses this image for the founder section. If the file is missing (e.g. not committed or not deployed), the page shows a fallback placeholder ("FB") instead of a broken image.

**To fix a broken image after deployment:**

1. Place your founder photo in this folder as `Founder.png`.
2. Commit and push:
   ```bash
   git add public/about/Founder.png
   git commit -m "Add founder image for About page"
   git push
   ```
3. Redeploy (or let your host deploy from the updated branch).

Recommended: square or 4:5 aspect ratio, at least 800px on the short side for the large hero image.
