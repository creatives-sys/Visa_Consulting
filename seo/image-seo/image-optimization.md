# Image SEO Manifesto & Asset Optimization Manifest
**Target Entity:** Globalvista International LLP

This manifest defines the image naming, descriptive alt text, and deployment standards to maximize visibility in Google Images and support generative search summaries.

---

## 1. Web-Optimized Hyphenated Naming Conventions
- **Guideline**: Image filenames must be lowercase, hyphen-delimited, descriptive, and contain primary LSI entity keywords.
- **Corporate Standard**:
  * *Bad*: `service1.jpg`, `service-2.jpg`, `banner-i.jpg`
  * *Good*: `expert-university-selection-admission-guidance.jpg`, `study-in-germany-consultants-kochi.jpg`

---

## 2. Image Asset Manifest & Semantic Alt Tag Map

| Source Filename | SEO-Optimized Production Filename | Target Landing Page | Target Semantic Alt Text |
| :--- | :--- | :--- | :--- |
| `service1.jpg` | `expert-university-selection-admission-guidance.jpg` | `university-selection-admission-guidance.html` | "Expert University Selection and Admission Guidance counselling session at Globalvista International Ernakulam Office" |
| `service-2.jpg` | `university-application-support-assistance.jpg` | `service-details-2.html` | "Study abroad consultants in Kochi providing end-to-end university application support and SOP documentation guidance" |
| `service-3.jpg` | `student-visa-application-guidance.jpg` | `service-details-3.html` | "Expert student visa application assistance and interview preparation by top foreign education consultants in Kerala" |
| `service-4.jpg` | `student-accommodation-assistance-abroad.jpg` | `service-details-4.html` | "Secure and budget-friendly student accommodation assistance services in Germany, Ireland, and Austria by Globalvista team" |
| `service-5.jpg` | `airport-pickup-arrival-support.jpg` | `service-details-5.html` | "On-ground student support services including reliable airport pickup and safe arrival transfer in Europe" |
| `service-6.jpg` | `pre-departure-post-arrival-guidance.jpg` | `service-details-6.html` | "Comprehensive pre-departure briefing and post-arrival settlement guidance for international students by Kochi consultants" |
| `service7.jpg` | `german-language-course-visa-support.jpg` | `service-details-7.html` | "German language learning visa application guidance and intensive course registration support directly in Germany" |
| `service8.jpg` | `family-reunion-visa-germany.jpg` | `service-details-8.html` | "German family reunion visa documentation and processing support by best German consultancy in Kerala" |
| `service9.jpg` | `germany-opportunity-card-chancenkarte.jpg` | `service-details-9.html` | "Germany Opportunity Card Chancenkarte points-based search visa application assistance by Kerala experts" |
| `banner-i.jpg` | `study-in-germany-consultants-kochi.jpg` | `study-in-germany.html` | "Study in Germany public universities and Ausbildung programs guidance by expert Kochi education consultants" |
| `banner-s.jpg` | `study-in-ireland-consultants-ernakulam.jpg` | `study-in-ireland.html` | "Study in Ireland universities, tuition fees, and scholarship applications guidance in Ernakulam" |
| `banner-j.jpeg` | `study-in-austria-agency-kerala.jpeg` | `study-in-austria.html` | "Study in Austria affordable university admissions and student resident permit consulting in Kerala" |
| `whychooseus.jpg` | `why-choose-us-study-abroad-consultants.jpg` | `index.html` (Homepage) | "Why choose Globalvista International study abroad consultants in Kochi Kerala corporate office" |
| `faq.jpg` | `frequently-asked-questions-block-account.jpg` | `index.html` (Homepage) | "Frequently asked questions on Germany Ausbildung block account and student visas answered by consultants" |
| `a1Kgt.jpg` | `consultancy-near-me-for-abroad-studies.jpg` | `index.html` (Homepage) | "Globalvista International best study abroad education consultancy near me in Kerala providing free counselling" |
| `images/austria/main.jpg` | `images/austria/study-in-austria-universities-vienna.jpg` | `study-in-austria.html` | "Study in Austria: Top public university admissions and student residence permit guidance by Globalvista International" |
| `images/germany/main-2.jpg` | `images/germany/study-in-germany-public-universities.jpg` | `study-in-germany.html` | "Study in Germany: Free public university admissions and Ausbildung dual vocational training options" |
| `images/ireland/main.jpg` | `images/ireland/study-in-ireland-universities-dublin.jpg` | `study-in-ireland.html` | "Study in Ireland: Admissions guidance for top universities in Dublin, tuition fees, and scholarship applications" |

---

## 3. High-Performance Deployment Guidelines
Follow these three technical parameters during image compilation:

1. **Format Conversions**: Compile all `.jpg` / `.png` imagery into next-generation format files: **`.webp`** or **`.avif`** (achieves up to 70% compression savings without quality loss).
2. **Native Lazy Loading**: Add native `loading="lazy"` attributes to all non-above-the-fold image HTML tags to improve Largest Contentful Paint (LCP) performance scores.
3. **Responsive Width Definitions**: Always declare explicit width and height dimensions to prevent Layout Shift (CLS) penalties:
   * Example: `<img src="images/homepage/service-2.jpg" alt="Description" loading="lazy" width="370" height="240" />`
