[ ]

Make landing page for localhost shortened links.

-   Add `landingPage` column to Supabase table `ShortcodeLink`
-   The `landingPage` can contain custom markdown content for the landing page
-   The `#url` header is replaced with the the `url` value from the table _(or randomly choose one if multiple)_
-   Shortener logic is in `/src/app/[shortcode]/page.tsx` using Supabase table `ShortcodeLink`
-   When the `landingPage` column is `null` (by default), keep the existing logic as is.

---

[ ]

Shortened links with Landing pages should measure both views and clicks.

-   Add column `ShortcodeLinkClick.navigatedAt` _(simmilar to `ShortcodeLinkClick.clickedAt`)_ which records the timestamp when user loads the landing page
-   When user clicks the link on the landing page, update the existing `ShortcodeLinkClick.clickedAt` timestamp
-   When user just loads the landing page, only `navigatedAt` is set and `clickedAt` remains `null`
-   Shortener logic is in `/src/app/[shortcode]/page.tsx` using Supabase table `ShortcodeLink`
-   When the `landingPage` column is `null` (by default), keep the existing logic as is.

---

[ ]

Shortened links with Landing pages should have nice Open Graph metadata for better sharing on social media.

-   This applies to the `ShortcodeLink` with `landingPage` defined
-   Have `og:title`, `og:description`, and `og:image` meta tags for better link previews
-   Have `title`, `description` meta tags for SEO
-   Create these meta tags dynamically based on the `landingPage` content
-   Shortener logic is in `/src/app/[shortcode]/page.tsx` using Supabase table `ShortcodeLink`
