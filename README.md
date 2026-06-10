# Ali Asgar Kanchwala — Personal Website

## Files

```
website/
├── index.html          ← Main CV/portfolio page
├── blog.html           ← Blog listing page
├── write.html          ← Blog Writing page
├── css/style.css       ← All styles
├── js/main.js          ← Navigation + interactions
└── blog/
    ├── posts.js        ← ⭐ Add new blog posts here
    └── template.html  ← Copy this to create a new post
```

---

## Hosting for Free (GitHub Pages)

This is the simplest, completely free option.

### First-time setup (~10 minutes)

1. Create a free account at https://github.com
2. Create a new repository named exactly: `yourusername.github.io`
   - E.g. if your GitHub username is `ali-kanch7`, name it `ali-kanch7.github.io`
3. Upload all website files to that repo (drag and drop in the browser)
4. Go to Settings → Pages → set Source to "Deploy from branch: main"
5. Your site is live at `https://ali-kanch7.github.io` within 2 minutes

### Updating the site

- Edit files on your computer
- Go to your GitHub repo → click the file → click the pencil icon to edit
- Or install GitHub Desktop app for easier drag-and-drop updates

### Custom domain (when you're ready to buy one)
- Buy a `.com` domain (Namecheap is cheapest, ~$10/year)
- In GitHub Pages settings → add your custom domain
- At your domain registrar, add a CNAME record pointing to `ali-kanch7.github.io`
- Free HTTPS is included automatically

---

## Writing a Blog Post

### Step 1 — Create the HTML file
1. Copy `blog/template.html`
2. Rename it to `blog/your-post-title.html` (use hyphens, no spaces)
3. Edit the content between the `<div class="post-body">` tags
4. Update the title, category tag, date, and read time at the top

### Step 2 — Register it in posts.js
Open `blog/posts.js` and add an entry to the `blogPosts` array:

```js
const blogPosts = [
  {
    slug:     "zero-trust-enterprise",          // must match your filename (without .html)
    title:    "Implementing Zero Trust in an Enterprise Network",
    tag:      "Security",
    excerpt:  "After rolling out ZTNA across a campus network, here's what I learned.",
    date:     "June 2025",
    readTime: "7 min read"
  },
  // ... more posts
];
```

That's it. The blog listing page reads from this array automatically.

---

## Contact Form

The contact form currently shows a success message on submit but doesn't actually send email (no server required). To make it send real emails for free:

1. Go to https://formspree.io and sign up (free tier = 50 submissions/month)
2. Create a form and get your form endpoint URL
3. In `index.html`, find the `<form>` tag and change it to:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
4. Remove the `onsubmit="handleContact(event)"` attribute too
