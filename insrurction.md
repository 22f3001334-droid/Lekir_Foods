Use this as the **updated Codex prompt**. It clearly tells Codex to recreate the visual image intentionally, not accidentally merge sections.

---

## Codex Prompt: Recreate Lerk Foods Website Design from Reference Image

Build a **Next.js + React + Tailwind CSS** website that recreates the provided Lerk Foods reference design, but with a cleaner and more intentional section structure.

The goal is to recreate the same **royal dark luxury catering website feel** shown in the image:

```txt
Mood:
Dark, royal, premium, cinematic, elegant, hospitality-focused.

Brand:
Lerk Foods — luxury catering and dining service.

Visual style:
- Dark blue / black base
- Burgundy feature sections
- Gold typography and borders
- Premium food photography
- Elegant spacing
- Thin decorative gold lines
- Circular gold ornaments
- Luxury hotel/catering feel
```

---

# Important Design Intention

The reference image is good, but one problem exists:

The middle area is visually clubbed together.

In the recreated website, these sections must be **intentionally separated**:

```txt
1. All-Day Dining at Kans One Hotel
2. Our Approach to Food Quality
3. Curated Menus for Every Event
4. Centrally Located Catering in Chennai
```

Do not make them look like one continuous block.

Each section must have:

```txt
- Its own vertical spacing
- Its own background treatment
- Its own image area
- Its own CTA or visual anchor
- Clear separation from the next section
```

---

# Tech Stack

Use:

```txt
Next.js App Router
React
TypeScript
Tailwind CSS
Framer Motion
lucide-react
```

---

# Fonts

Use:

```txt
Headers: Constantia
Body: Poppins
Logo wordmark: Cormorant Garamond
```

If Constantia is not available through Google Fonts, use CSS fallback:

```css
font-family: Constantia, Georgia, serif;
```

Use Poppins from Google Fonts.

Use Cormorant Garamond from Google Fonts.

---

# Color Palette

Use these exact colors:

```txt
Dark Blue: #0f1015
Dark Burgundy: #330013
Light Burgundy: #520016
Grey: #1b1c21
```

Gold gradient:

```txt
#e0ba66
#feed93
#d8b25f
#f4d28a
#fff9bc
```

Create reusable CSS utilities:

```css
.gold-gradient-text
.gold-gradient-bg
.gold-border
.royal-card
.cinematic-overlay
.section-padding
```

---

# Page Structure

Create this home page:

```txt
1. Header / Navbar
2. Hero Section
3. What Lerk Foods Does
4. Why People Choose Lerk
5. Catering Services for Every Occasion
6. All-Day Dining at Kans One Hotel
7. Our Approach to Food Quality
8. Curated Menus for Every Event
9. Centrally Located Catering in Chennai
10. Stats Strip
11. Testimonials
12. FAQ
13. Footer CTA
14. Footer
```

---

# Header

Recreate the premium navbar from the image.

Header requirements:

```txt
Left: Lerk Foods logo/wordmark
Center/right navigation:
- Home
- About Us
- Services
- Menus
- Gallery
- Blog
- Contact Us

Right button:
Plan Your Event
```

Style:

```txt
Transparent over hero
Gold active link
Thin gold bordered CTA button
Small elegant typography
```

---

# Hero Section

Recreate the hero from the image.

Layout:

```txt
Full-width hero
Left side: text content
Right side: luxury dining table / candle / flower image
Dark overlay
Gold decorative arc/circle
```

Content:

```txt
Eyebrow:
Luxury Catering in Chennai

Heading:
Crafted for Taste,
Designed for Experience.

Paragraph:
Lerk Foods delivers premium outdoor catering, corporate catering, and banquet dining from Kans One Hotel, combining refined flavours, structured execution, and consistent quality across every event.

Supporting text:
From weddings and birthdays to corporate events and festive gatherings, we focus on one thing above everything else — food that people remember.

Buttons:
Plan Your Event
View Menus
```

The word “Designed for Experience” should use gold gradient text.

---

# Section 1: What Lerk Foods Does

Heading:

```txt
Premium Catering Services
in Chennai by Lerk Foods
```

Content:

```txt
Lerk Foods is a Chennai-based catering and hospitality brand offering:
```

Bullet points:

```txt
Luxury outdoor catering for weddings and large-scale events
Corporate catering for meetings, conferences, and office functions
Banquet dining and event support at Kans One Hotel
Custom menus for birthdays, private parties, and festive celebrations
```

Layout:

```txt
Left text
Right plated food image
Dark background
Gold bullet icons
Circular badge on right:
EXCELLENCE IN EVERY DETAIL
```

---

# Section 2: Why People Choose Lerk

Recreate this as a burgundy horizontal trust strip.

Background:

```txt
Dark Burgundy #330013
```

Heading:

```txt
Why Lerk Foods is Trusted
for Catering in Chennai
```

Trust cards:

```txt
Consistent taste across large volumes
Clean and structured kitchen processes
Professional buffet and plated presentation
Reliable service for time-sensitive events
Experience handling weddings, corporate events, and private gatherings
```

Style:

```txt
Gold icons
Thin vertical dividers
Compact premium cards
```

---

# Section 3: Catering Services for Every Occasion

Heading:

```txt
Catering Services
for Every Occasion
```

Cards:

```txt
Luxury Wedding Catering
Corporate Catering Services
Birthday & Private Party Catering
Festive & Special Event Catering
```

Each card:

```txt
Image at top
Gold icon overlay
Heading
Description
Dark card background
Thin gold border
Hover lift effect
```

Use 4-column layout on desktop, 2-column on tablet, 1-column on mobile.

---

# Section 4: All-Day Dining at Kans One Hotel

This section must be separated clearly.

Heading:

```txt
All-Day Dining at
Kans One Hotel, Pallavaram
```

Content:

```txt
Lerk Foods operates the dining experience at Kans One Hotel, serving guests and visitors throughout the day.
```

Bullets:

```txt
Breakfast, lunch, and dinner menus
Clean, consistent, and well-prepared food
Suitable for hotel guests, business travellers, and walk-in diners
```

CTA:

```txt
Explore Dining
```

Layout:

```txt
Two-column layout
Left text
Right restaurant interior image
Background: #0f1015
Large top and bottom padding
Subtle gold divider line before and after section
```

---

# Section 5: Our Approach to Food Quality

This section must be separated clearly.

Heading:

```txt
Our Approach to
Food Quality
```

Content:

```txt
Lerk Foods combines culinary precision with hotel-level kitchen systems to deliver consistent, high-quality catering and dining experiences in Chennai.
```

Bullets:

```txt
Ingredient selection focused on freshness and reliability
Standardised recipes to maintain taste consistency
Controlled batch cooking for large events
Professional plating and buffet styling
Calm execution under pressure
```

Layout:

```txt
Two-column layout
Left content
Right chef/plating image
Background: #1b1c21
Circular badge:
QUALITY YOU CAN TRUST
```

Important:

```txt
This should not be in the same grid as All-Day Dining.
It should have its own section wrapper and spacing.
```

---

# Section 6: Curated Menus for Every Event

This section must be separated clearly.

Heading:

```txt
Curated Menus
for Every Event
```

Content:

```txt
Our menus are designed to balance flavour, variety, and service practicality.
```

Bullets:

```txt
South Indian and North Indian options
Multi-cuisine selections
Customisable catering menus
Event-specific menu planning
```

CTA:

```txt
View Full Menu
```

Add a small form card:

```txt
Name
Phone
Event Type
Guest Count
Button: Get Menu Suggestions
```

Layout:

```txt
Background: #520016
Left food spread image
Right text + form card
This section should feel different from the previous section.
```

---

# Section 7: Centrally Located Catering in Chennai

This section must be separated clearly.

Heading:

```txt
Centrally Located
Catering in Chennai
```

Content:

```txt
Operating from Kans One Hotel in Pallavaram, Lerk Foods is well-positioned to serve:
```

Locations:

```txt
Pallavaram
Chromepet
Airport zone
South Chennai
Corporate hubs and residential areas
```

CTA:

```txt
Contact Lerk Foods
```

Layout:

```txt
Background: #330013
Right side map-style graphic
Gold route lines
Location markers
Center card:
LERK FOODS
KANS ONE HOTEL
PALLAVARAM
```

Important:

```txt
Do not merge this section with Curated Menus.
It should have its own full-width section with independent spacing.
```

---

# Stats Strip

Recreate the stats row.

Stats:

```txt
10+ Years of Catering Excellence
500+ Events Completed
50K+ Guests Served
100% Commitment to Quality
```

Style:

```txt
Dark background
Large white/gold numbers
Thin gold dividers
Animated count-up on scroll
```

---

# Testimonials

Use 3 testimonial cards.

Content:

```txt
“The food, service, and overall experience were exceptional. Our guests are still talking about it.”
Priya & Arjun
Wedding Celebration

“Lerk Foods handled our corporate event seamlessly. Punctual, professional, and the food was excellent.”
Ravi Menon
Operations Manager

“From planning to execution, everything was perfect. Highly recommended for any special occasion.”
Sneha Reddy
Private Event
```

---

# FAQ Section

Use accordion layout.

Questions:

```txt
What catering services does Lerk Foods provide in Chennai?
Where is Lerk Foods located?
Do you provide outdoor catering?
Can I customise the catering menu?
Do you provide catering for corporate events in Chennai?
What are the best luxury outdoor catering services in Chennai?
Does Lerk Foods provide wedding catering in Chennai?
Can Lerk Foods handle large-scale banquet and event catering?
```

---

# Footer CTA

Content:

```txt
Let’s Create an Experience
Your Guests Will Remember.
```

Button:

```txt
Plan Your Event
```

Footer details:

```txt
Lerk Foods
Kans One Hotel, 12 GST Road, Pallavaram, Chennai - 600043
hello@lerkfoods.com
www.lerkfoods.com
Social icons
```

---

# Visual Requirements

The final page must look close to the reference image, but more polished.

Use:

```txt
Dark cinematic image overlays
Gold gradient headings
Thin decorative circles
Subtle glow behind hero and CTA
Premium card borders
Large spacing between independent sections
Smooth scroll reveal animations
```

Do not use bright white backgrounds.

Do not make the page look like a normal restaurant template.

It should look like a **premium catering brand website**.

---

# Animation Requirements

Use Framer Motion:

```txt
Hero text fade-up
Cards stagger reveal
Images slow zoom on hover
Stats count-up
FAQ smooth expand/collapse
CTA subtle glow pulse
```

Keep animations subtle and classy.

---

# Responsiveness

Mobile:

```txt
Stack all two-column sections vertically
Navbar becomes hamburger
Buttons full width where needed
Cards become one column
Hero image becomes background
```

Desktop:

```txt
Cinematic wide layout
Large hero
4-card service grid
Alternating image/text sections
```

---

# Final Acceptance Criteria

The website is complete only if:

```txt
1. It visually recreates the uploaded Lerk Foods design.
2. It uses the exact intended royal dark + burgundy + gold theme.
3. The marked clubbed area is separated into four independent sections.
4. Each separated section has its own layout, spacing, image, and CTA/visual anchor.
5. The site feels premium, not generic.
6. The typography follows the provided font rules.
7. The site is responsive.
8. The home page content is SEO-friendly.
9. FAQ content is crawlable.
10. The code is clean, component-based, and easy to extend.
```

---

Add this line at the end of the Codex prompt:

```txt
Most important: recreate the reference image intentionally, but improve the middle marked area by separating the clubbed content into standalone premium sections with clear visual rhythm.
```
