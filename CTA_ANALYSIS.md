# NAACUS Website CTA Analysis & User Needs Assessment

**Date:** December 23, 2025  
**Purpose:** Understand user journey, identify pain points, and inform website restructuring

---

## Executive Summary

The website currently has **22 primary CTAs** distributed across 10+ components. The CTAs reveal three primary user segments and suggest the need for better information hierarchy and user pathways.

**Key Finding:** Users are driven to 4 main actions, but the journey to each action varies in clarity and prominence.

---

## Primary User Actions & CTAs

### 1. **MEMBERSHIP (Strongest Signal)**
- **Location:** Hero, MemberBenefits sections
- **CTAs:**
  - "Join Our Community" (Hero primary CTA)
  - "Become a Member" (MemberBenefits)
  - "Membership Form" (Header nav)
- **Button Appearance:** Primary/Featured styling
- **Placement:** Hero section, multiple sections
- **Insight:** Users are most interested in joining/belonging
- **What Users Need:** Clear path to membership, benefits clarity, social proof

---

### 2. **VOLUNTEER (Strong Signal)**
- **Location:** Hero, MemberBenefits sections
- **CTAs:**
  - "Get Involved" / "Become a Volunteer" (Hero secondary)
  - "Become a Volunteer" (MemberBenefits)
  - "Volunteer Form" (Header nav)
- **Button Appearance:** Secondary styling
- **Insight:** Secondary action to membership, appeals to service-oriented users
- **What Users Need:** Role clarity, time commitment details, impact stories

---

### 3. **EVENTS & CONFERENCES (Moderate Signal)**
- **Location:** Conference, Conference2027Teaser, Events
- **CTAs:**
  - "Stay Informed" (Conference 2025)
  - "Stay in the Loop" (Conference 2027 Teaser)
  - Events navigation (Header, Footer)
- **Button Appearance:** Featured (#E8D4C0 tan button)
- **Insight:** Time-sensitive, creates urgency
- **What Users Need:** Event calendar, registration details, dates/locations

---

### 4. **CONTACT & INFORMATION (Weakest Signal)**
- **Location:** Gallery, Resources, Ministries sections
- **CTAs:**
  - "Contact Us to Share" (Gallery)
  - "Get In Touch" (Contact form)
  - Contact link (Footer, multiple sections)
- **Button Appearance:** Generic
- **Insight:** Used as fallback/catch-all action
- **What Users Need:** Clear communication channels, faster response paths

---

## CTA Distribution Map

```
HEADER (Navigation)
├── Donate (Donation Dialog) - Standalone
├── Membership nav
├── Volunteer nav
├── Fellowship-Ministries nav
├── Programs/Activities nav
├── Events nav
├── Gallery nav
├── Resources nav
└── Contact nav

HERO SECTION
├── Primary: "Join Our Community" → /membership
└── Secondary: "Learn Our Mission" + "Get Involved" → /about + /volunteer

MEMBER BENEFITS
├── "Become a Member" → /membership
└── "Become a Volunteer" → /volunteer

CONFERENCE 2025
└── "Stay Informed" → scroll to contact

CONFERENCE 2027 TEASER
└── "Stay in the Loop" → scroll to newsletter

GALLERY
└── "Contact Us to Share" → scroll to contact

MINISTRIES
├── Ministry email links (Direct mailto)
└── CTA text (No button - just text)

RESOURCES
└── Implicit: "Download" button on each resource

FOOTER
├── Navigation links (All 10+ pages)
├── "Join Our Community" link
├── "Participate in Programs" link
└── "Contact Us" highlighted CTA
```

---

## User Insights by CTA Type

### 🎯 Primary Actions (70% of emphasis)
**Membership & Volunteer**
- Represent the core value proposition
- Heavy promotion from multiple entry points
- Clear benefits listed (Community, Events, Resources, etc.)

**User Needs:**
- Understand exact membership/volunteer requirements
- See testimonials & member stories
- Know time commitment & benefits immediately
- Easy registration process

---

### 📅 Secondary Actions (20% of emphasis)
**Events & Conferences**
- Drive attendance & engagement
- Time-sensitive content
- Creates FOMO (Fear of Missing Out)

**User Needs:**
- Upcoming event list with dates
- What to expect at events
- Registration information
- Past event highlights (proof of quality)

---

### 💬 Tertiary Actions (10% of emphasis)
**Contact, Resources, Specific Ministries**
- Support role, not driver
- Many navigation touches but no primary button emphasis
- Used for specific questions, not onboarding

**User Needs:**
- Fast access to specific information
- Direct contact for ministry questions (Email links good!)
- Resource downloads
- Specific program details

---

## Website Structure Issues Revealed by CTA Analysis

### ⚠️ **Issue 1: No Clear "Browse/Explore" Path**
**Problem:** Website jumps users to "Join" without exploration
**Evidence:** 
- Hero immediately asks for membership
- No "Explore First" or "Learn More" primary pathway
- Contact section is catch-all, not strategic

**Recommendation:** 
- Add "Explore Our Community" pathway
- Show content → interest → action flow
- Add testimonials/stories BEFORE membership CTA

---

### ⚠️ **Issue 2: Navigation vs. CTAs Disconnect**
**Problem:** Header has 10+ nav items but only 4 real CTAs
**Evidence:**
- "Ministries" in nav but CTA is just email links
- "Resources" nav but no resource CTA in Resources page
- "Gallery" nav but CTA is generic "Contact Us"

**Recommendation:**
- Each section should have own conversion CTA
- Not just informational pages
- Example: Gallery → "Join our community to see more photos"

---

### ⚠️ **Issue 3: Weak Middle Funnel**
**Problem:** No pathway for "Curious → Interested → Member"
**Evidence:**
- Hero → Membership (too fast)
- Benefit cards but no "See More" CTA
- Leadership page has no CTA
- Testimonials section has no engagement CTA

**Recommendation:**
- Add engagement questions ("What matters to you?")
- Create guided pathways ("Interested in Ministries? Start here")
- Add "Next Steps" sections

---

### ⚠️ **Issue 4: Ministry Information Scattered**
**Problem:** Ministries page shows 12 options with only email CTA
**Evidence:**
- Ministry cards have emails (good)
- No "Join This Ministry" CTA
- Users must email to engage
- No filtering by interests

**Recommendation:**
- Add "Learn More" expanded info for each
- Collect ministry interests on volunteer form
- Create "Find Your Ministry" quiz/selector

---

## User Journey Mapping

### 🟢 **Path 1: Membership Seekers** (Most Supported)
```
Home → Hero (Membership CTA) → Membership Page ✅
Home → MemberBenefits → "Become Member" button ✅
Clear, supported, multiple entry points
```

### 🟢 **Path 2: Volunteer Seekers** (Well-Supported)
```
Home → Hero (Get Involved) → Volunteer Page ✅
Home → MemberBenefits → "Become Volunteer" button ✅
About → Values → Volunteer ✅
```

### 🟡 **Path 3: Event Attendees** (Moderately Supported)
```
Home → Conference 2025 → "Stay Informed" → Contact ⚠️
Home → Events nav → Events Page ✅
Issue: No direct "Register for Event" CTA
```

### 🔴 **Path 4: Ministry Explorers** (Poorly Supported)
```
Home → Ministries nav → 12 Ministry Options → Email Only 🔴
No pathway to: Learn More → Express Interest → Get Engaged
Missing: Ministry matching, filtering, engagement
```

### 🔴 **Path 5: Resource Seekers** (Weak Support)
```
Home → Resources nav → Resource Cards → Download? 🔴
No CTA on Resources page itself
Users must scroll to contact to ask questions
```

---

## Recommended Restructuring

### 1. **Create Interest-Based Entry Points**
Instead of just "Join":
```
"What are you interested in?"
├── I want to grow my faith
├── I want to serve in ministry
├── I want to connect with community
├── I want to learn about events
└── I want to volunteer
```

Each leads to relevant section with tailored CTAs.

---

### 2. **Add "Discover Your Path" Section**
- Place early in user journey (After Hero, Before Benefits)
- Let users self-select interest
- Personalize remaining page experience
- Show relevant testimonials & next steps

---

### 3. **Strengthen Weak-Signal CTAs**
| Page | Current CTA | Recommended CTA |
|------|-------------|-----------------|
| Ministries | Email only | "Explore This Ministry" + Email |
| Leadership | None | "Get Leadership Updates" |
| Gallery | "Contact to Share" | "Add Your Story" button |
| Resources | Implicit | "Download & Join" (bundles resource with membership) |
| Testimonials | None | "Share Your Story" |

---

### 4. **Create Ministry Engagement Path**
```
Current: Ministries Page → Email
Proposed:
1. Browse 12 ministries with descriptions
2. "Learn More" opens ministry details
3. "Join This Ministry" button → saves to profile
4. On Volunteer Form: Pre-checked interests
5. After joining: "Next ministry to explore"
```

---

### 5. **Add Mid-Funnel Conversion Points**
Missing elements between Interest & Action:
- **Story/Testimonial Section** → "Share Your Story" CTA
- **FAQ Section** → Each answer has "Ready? Start Here" CTA
- **Benefit Comparison** → "See Which Path is Right for You" CTA
- **Committee Pages** → "Join This Committee" CTAs

---

## CTA Messaging Opportunities

### Current Messaging
- Very action-focused ("Join," "Become," "Download")
- Good for ready users, weak for explorers

### Recommended Addition
- **Exploratory:** "Learn More," "Discover," "See What Fits"
- **Community-focused:** "Find Your Community," "Connect With Others"
- **Value-focused:** "Make an Impact," "Grow Your Faith," "Serve Your Community"
- **Specific:** "Attend Conference," "Join Ministry," "Download Guide"

---

## Button Color & Prominence Analysis

### Current Hierarchy
1. **White/Light (Hero Primary)** → Membership "Join" ⭐⭐⭐⭐⭐
2. **Tan #E8D4C0 (Featured)** → Events/Conference ⭐⭐⭐⭐
3. **Blue (Secondary)** → Volunteer, Learn More ⭐⭐⭐
4. **Plain Link** → Navigation, Email ⭐⭐

### Issue
Tan color reserved for events, but membership is bigger action.

### Recommendation
- White/Light = Primary action (Keep Hero)
- Blue Primary = Membership secondary (upgrade importance)
- Tan = Time-sensitive/Events (Keep current)
- Links = Exploratory (OK)

---

## Conclusions & Strategic Recommendations

### What Users Need (Ranked by CTA Signal)
1. **Clear Path to Belonging** (Membership/Community) 
2. **Ways to Serve** (Volunteer/Ministry)
3. **Event/Conference Info** (Dates, Registration)
4. **Contact/Support** (Questions, Info)

### Current State: 70% Optimized for #1 & #2, 20% for #3, 10% for #4

### To Improve Overall Conversion:
1. **Strengthen exploration** before action (Add guided discovery)
2. **Create ministry pathway** (Not just emails)
3. **Add mid-funnel CTAs** (Testimonials, stories, FAQ)
4. **Improve weak sections** (Resources, Gallery, Leadership)
5. **Personalize experience** (Interest-based routing)

### Expected Outcomes
- Higher initial engagement (More exploratory action)
- Better conversion (Clear next steps at each stage)
- Stronger ministry participation (Not just volunteers, but engaged ministry members)
- Improved retention (Ongoing CTAs, not just onboarding)

---

## Next Steps
1. **Audit conversion rates** by entry point
2. **Track user drop-off points** (Where do users leave?)
3. **Test new CTAs** on lower-traffic pages first
4. **A/B test messaging** (Action vs. Discovery focused)
5. **Build interest-based segments** for personalization
