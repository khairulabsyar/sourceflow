# SourceFlow - Modern Recruitment Website

A beautiful, modern recruitment website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and an intuitive user experience for job seekers and employers.

## 🚀 Features

### ✨ **Modern Design & UX**

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion powered scroll-triggered and interactive animations
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance Optimized**: Next.js Image optimization and lazy loading

### 🎯 **Key Sections**

- **Hero Section**: Eye-catching landing with search functionality and animated stats
- **Client Showcase**: Trusted company logos with loading states and error handling
- **Latest Jobs**: Interactive job carousel with smooth slide transitions and staggered animations
- **Navigation**: Responsive header with dropdown menus and mobile-friendly navigation
- **Footer**: Comprehensive links and social media integration

### 🔧 **Technical Highlights**

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth, performant animations
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Reusable, maintainable component structure
- **Constants Management**: Centralized data management for easy updates

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Development**: ESLint, TypeScript strict mode

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Clients.tsx    # Client logos
│   │   └── LatestJobs.tsx # Job listings
│   └── ui/                # Reusable UI components
│       ├── AnimateOnScroll.tsx
│       ├── Button.tsx
│       ├── JobCard.tsx
│       └── SearchBar.tsx
└── lib/
    └── constants/         # Centralized data
        └── index.tsx      # All constants and data
```

## 🎨 Design Features

### **Color Scheme**

- Primary Blue: `#064EA4`
- Accent Orange: `#F99D76`
- Accent Yellow: `#FCDF69`
- Background Blue: `#D7E7FB`

### **Job Card Variants**

- **Featured**: Blue gradient with special badge
- **Yellow**: Bright yellow background
- **Gray**: Clean gray background
- **Peach**: Soft peach background

### **Animation Highlights**

- Scroll-triggered animations with `AnimateOnScroll` component
- Staggered card animations in job listings
- Smooth slide transitions between job sets
- Interactive button hover and tap effects
- Loading states with skeleton placeholders

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd SourceFlow
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

### **Adding New Jobs**

Update the jobs array in `src/lib/constants/index.tsx`:

```typescript
export const jobs = [
  {
    id: 'unique-id',
    title: 'Job Title',
    company: 'Company Name',
    location: 'Location',
    salary: '$XX,XXX - $XX,XXX',
    type: 'Full-time',
    description: 'Job description...',
    postedDate: 'X days ago',
  },
];
```

### **Customizing Animations**

Modify animation variants in components or create new ones in the constants file.

### **Updating Company Logos**

Add new companies to the `companies` array in constants:

```typescript
export const companies = [
  {
    name: 'Company Name',
    logo: '/logos/company-logo.png',
  },
];
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
