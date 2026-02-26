# AGO Logistics – React Application

---

## 📁 Project Structure

```
src/
├── data/                   # All content as plain JS data
│   ├── navigation.js       # Nav links + footer columns
│   ├── services.jsx        # 6 services + highlights
│   ├── stats.js            # Homepage stats + about highlights
│   ├── blog.js             # Blog posts with full body content
│   └── contact.js          # Office locations + contact reasons
│
├── hooks/                  # Custom React hooks
│   ├── useScrollReveal.js  # IntersectionObserver → "reveal" classes
│   ├── useCountUp.js       # Animated number counting on scroll
│   └── useActiveNav.js     # Active route detection for Navbar
│
├── media/                  # svg media
│
├── components/             # Reusable UI components
│   ├── components.css      # ← ONE global CSS file for ALL components
│   ├── Navbar.jsx          # Sticky + transparent hero state, mobile menu
│   ├── Footer.jsx          # Newsletter + links + socials
│   ├── Button.jsx          # primary / outline / outline-dark variants
│   ├── SectionHeader.jsx   # Eyebrow + title + body, center variant
│   ├── ServiceCard.jsx     # Image, icon, features, link
│   ├── BlogCard.jsx        # Image, meta, excerpt, read-more
│   ├── StatCard.jsx        # Count-up animated stat
│   ├── FeatureCard.jsx     # Icon + title + body card
│   └── PageHero.jsx        # Inner-page hero banner
│
├── pages/                  # Route-level page components
│   ├── pages.css           # ← ONE global CSS file for ALL pages
│   ├── Home.jsx            # Hero, Stats, Services, About, Blog, CTA
│   ├── About.jsx           # Intro, Highlights, Why AGO
│   ├── Services.jsx        # Grid of all 6 services
│   ├── ServiceDetail.jsx   # Individual service + sidebar
│   ├── Contact.jsx         # Office cards + contact form
│   ├── Blog.jsx            # Featured post + blog grid
│   └── BlogPost.jsx        # Full article + sidebar + related
│
├── App.jsx                 # Router setup + layout
├── main.jsx                # React DOM entry
└── index.css               # Global reset + design tokens (CSS vars)
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

---




