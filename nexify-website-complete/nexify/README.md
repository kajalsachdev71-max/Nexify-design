# Nexify Design Website — Setup Guide
## For Non-Technical Users — Read This First!

---

## WHAT IS IN THIS FOLDER

```
nexify-website/
│
├── index.html          ← YOUR HOMEPAGE (main website)
├── blog.html           ← Blog listing page (all articles)
├── post.html           ← Individual article page (opens full articles)
├── robots.txt          ← SEO file (tells Google how to crawl)
├── sitemap.xml         ← SEO file (tells Google all your pages)
├── netlify.toml        ← Netlify configuration (do not edit)
│
├── css/
│   └── style.css       ← All website design/colours/layout
│
├── js/
│   ├── main.js         ← Website behaviour (menu, forms, etc)
│   └── posts.js        ← ALL YOUR BLOG POSTS LIVE HERE
│
├── admin/
│   ├── index.html      ← Decap CMS admin panel (your editing dashboard)
│   └── config.yml      ← What fields appear in your admin panel
│
├── _posts/             ← Blog post files (managed by Decap CMS)
├── _data/              ← Website content data files
│   ├── settings.json   ← Site name, email, phone, social links
│   ├── hero.json       ← Hero section text
│   ├── about.json      ← About section content
│   ├── services.json   ← Services cards
│   ├── testimonials.json ← Client testimonials
│   └── why.json        ← "Why Choose Us" cards
│
└── images/
    └── uploads/        ← Images you upload via admin panel go here
```

---

## STEP 1 — CREATE A GITHUB ACCOUNT (FREE)

1. Go to **github.com**
2. Click "Sign up" — it is completely free
3. Create your account

---

## STEP 2 — UPLOAD YOUR WEBSITE TO GITHUB

1. Click the **+** icon (top right) → **New repository**
2. Name it: `nexify-design`
3. Make it **Public**
4. Click **Create repository**
5. Click **uploading an existing file**
6. Drag and drop ALL files and folders from this package
7. Click **Commit changes**

---

## STEP 3 — CONNECT TO NETLIFY (FREE)

1. Go to **netlify.com** → Sign up with your GitHub account
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** → Select your `nexify-design` repository
4. Click **Deploy site** — your site goes live in 2 minutes!
5. You will get a URL like `random-name.netlify.app`

---

## STEP 4 — CONNECT YOUR GODADDY DOMAIN

1. In Netlify → **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Type: `nexifydesign.in` → Click **Verify**
4. Netlify shows you DNS records — copy them
5. Go to **GoDaddy** → **My Domains** → **DNS**
6. Add the records Netlify gave you
7. Wait 10-30 minutes → your domain is live!

---

## STEP 5 — SET UP DECAP CMS ADMIN PANEL

This lets you edit your website without touching any code.

### 5a — Enable Netlify Identity
1. In Netlify → **Site settings** → **Identity** → **Enable Identity**
2. Under **Registration** → select **Invite only**
3. Under **Services** → **Git Gateway** → **Enable Git Gateway**

### 5b — Invite yourself as admin
1. In Netlify → **Identity** → **Invite users**
2. Type your email → Send invitation
3. Check your email → click the link → set a password

### 5c — Access your admin panel
1. Go to: `https://nexifydesign.in/admin`
2. Log in with your email and password
3. You can now edit EVERYTHING from here!

---

## HOW TO ADD A NEW BLOG POST (from admin panel)

1. Go to `nexifydesign.in/admin`
2. Log in
3. Click **Blog Posts** in the left menu
4. Click **New Blog Post**
5. Fill in all fields:
   - **Title** — your article headline
   - **Category** — choose from dropdown
   - **SEO Meta Title** — what Google shows (50-60 characters)
   - **SEO Meta Description** — what Google shows below title (150-160 characters)
   - **Focus Keyword** — main keyword you want to rank for
   - **Excerpt** — short summary shown on blog listing
   - **Full Article Content** — write your full article here (like Google Docs)
6. Click **Publish** — your post goes live!
7. The article opens fully on YOUR website — no external links

---

## HOW TO EDIT WEBSITE CONTENT (from admin panel)

1. Go to `nexifydesign.in/admin`
2. Log in
3. In the left menu:
   - **Site Settings** → change email, phone, social media links
   - **Hero Section** → change headline, buttons, badge text
   - **About Section** → change company description and stats
   - **Services** → edit service cards
   - **Testimonials** → add/edit client reviews
   - **Why Choose Us** → edit the 6 cards

---

## HOW TO EDIT MANUALLY (if you prefer)

### To update contact details:
Open `index.html` in any text editor (Notepad works)
Search for `hello@nexifydesign.in` and replace with your real email
Search for `+91 XXXXX XXXXX` and replace with your real phone number
Search for `91XXXXXXXXXX` and replace with your WhatsApp number (no + or spaces)

### To add a blog post manually:
Open `js/posts.js`
Copy one of the existing post entries (from `"slug": {` to the closing `},`)
Change the slug, title, date, and body content
Save the file and upload to GitHub — Netlify updates automatically

---

## HOW TO UPDATE YOUR WEBSITE AFTER CHANGES

Every time you change a file in GitHub:
1. Your change is detected by Netlify automatically
2. Website updates within 1-2 minutes
3. No manual re-uploading needed

---

## SEO CHECKLIST

After going live, do these things for good Google rankings:

- [ ] Submit sitemap to Google Search Console: `https://nexifydesign.in/sitemap.xml`
- [ ] Set up Google Analytics (free — google.com/analytics)
- [ ] Fill in SEO fields for every blog post you write
- [ ] Add your business to Google Business Profile (free)
- [ ] Build backlinks by listing on Justdial, Sulekha, and industry directories

---

## NEED HELP?

If anything is unclear, just ask! Every file is clearly named and separated so you can find and edit exactly what you need.
