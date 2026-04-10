# 📁 Portfolio Project Instructions

## 🧭 Project Structure

This project is organized into three main files:

| File | Purpose |
|------|---------|
| `index.html` | Page structure and content |
| `styles.css` | All styling |
| `script.js` | Interactive behavior and filtering logic |

---

## 🧩 Editing the **Projects Section**

The Projects section lives inside:

```
index.html → #projects
```

Each project card is inside:

```
<div class="pj-grid">
```

Every card looks like:

```
<div class="pc" data-cat="Category">
```

---

## ✏️ What You Should Update Per Project

Update these fields inside each `.pc` card:

| Element | What to change |
|--------|----------------|
| `<img src="">` | Project image path |
| `<img alt="">` | Image description |
| `.ptags` | Technologies used |
| `.ptitle` | Project title |
| `.pdesc` | Short description |
| `data-cat` | Filter category |

---

## 🧪 Example Project Card

```html
<div class="pc rv" data-cat="Web">
  <div class="pc-img">
    <img src="pIMG5.jpg" alt="Example Project"
      onerror="this.parentElement.innerHTML='<svg width=38 height=38 viewBox=&quot;0 0 24 24&quot; fill=none stroke=&quot;#7a7268&quot; stroke-width=&quot;0.75&quot;><rect x=&quot;3&quot; y=&quot;3&quot; width=&quot;18&quot; height=&quot;18&quot; rx=&quot;2&quot;/><circle cx=&quot;8.5&quot; cy=&quot;8.5&quot; r=&quot;1.5&quot;/><path d=&quot;M21 15l-5-5L5 21&quot;/></svg>'">
  </div>

  <div class="pc-body">
    <div class="ptags">
      <span class="ptag">React</span>
      <span class="ptag">UI</span>
    </div>

    <div class="ptitle">
      Example Project
    </div>

    <div class="pdesc">
      Short description of the project and its value.
    </div>

    <div class="parrow">
      View project <span>→</span>
    </div>
  </div>
</div>
```

---

## ➕ Adding a New Project

Follow these steps:

1. Copy an existing `.pc` block
2. Paste it inside:

```
#projects → .pj-grid
```

3. Update:

- image
- title
- description
- tags
- category (`data-cat`)

Example:

```
data-cat="Web"
```

---

## 🏷 Available Categories

Default categories:

```
Design
Web
App
```

You can create new ones if needed.

---

## ➕ Adding a New Category Filter Button

If you introduce a new category:

Example:

```
data-cat="AI"
```

Then also add a matching filter button inside:

```
.ftabs
```

Important rule:

```
Button label MUST exactly match data-cat value
```

Example:

```
AI → data-cat="AI"
```

---

## ⚙️ Filtering System (script.js)

Filtering works using:

```
doFilter(cat, this)
```

So category names must stay consistent across:

- filter buttons
- project cards

---

## 💡 Tips for Contributors

✔ Keep descriptions short  
✔ Use consistent tag names  
✔ Optimize images before adding  
✔ Match category names exactly  
✔ Test filter buttons after edits  

---

## ✅ Quick Checklist Before Commit

- [ ] Image added
- [ ] Title updated
- [ ] Description updated
- [ ] Tags added
- [ ] Category correct
- [ ] Filter button exists (if new category)
- [ ] Filtering still works

---