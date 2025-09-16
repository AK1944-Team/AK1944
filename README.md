# Światowy Związek Żołnierzy Armii Krajowej — Official Website

<a href="https://ak1944.pl">
  <img src="https://ak1944.pl/_next/image?url=%2Fimages%2FLogo_SZZAK.png&w=256&q=75" alt="Logo AK 1944">
</a>

**🌐 <a href="https://ak1944.pl">Visit page: ak1944.pl</a>**

## About the project

This project is a modern version of the official website for the World Union of Home Army Soldiers (ŚŻŻAK). The goal is:

- Commemorating AK heroes and promoting history
- Making valuable historical content accessible in an approachable form
- Preserving memory of the past using modern technologies
- Creating an engaging, responsive, and easy-to-navigate website

We are a team of young developers who are developing this project on a charitable basis, using our skills so that the history of the Home Army is accessible to future generations.

## 🛠️ Technologies

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Axe](https://img.shields.io/badge/Axe-2E2E2E?style=for-the-badge&logo=axe&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Payload](https://img.shields.io/badge/Payload-000000?style=for-the-badge&logo=payload&logoColor=white)

## 🚀 How to run the project locally?

```bash
git clone https://github.com/Delicadency/AK1944.git
cd AK1944
npm install
npm run dev

# Open http://localhost:3000 in browser.
```

## 🔧 Environment Variables

Copy the `.env.example` file to `.env.local` and fill in the required values.

cp .env.example .env.local

### Required Variables

#### Database Configuration

| Variable       | Description                               | Required |
| -------------- | ----------------------------------------- | -------- |
| `DATABASE_URI` | MongoDB connection string or database URL | ✅ Yes   |

#### Security Configuration

| Variable         | Description                               | Required |
| ---------------- | ----------------------------------------- | -------- |
| `PAYLOAD_SECRET` | Secret key for Payload CMS authentication | ✅ Yes   |

#### Stripe Configuration

Variables needed for Stripe payment processing:

| Variable                             | Description                                    | Required |
| ------------------------------------ | ---------------------------------------------- | -------- |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key - used on the frontend  | ✅ Yes   |
| `STRIPE_SECRET_KEY`                  | Stripe secret key - used in backend/API routes | ✅ Yes   |

#### Vercel Analytics (Optional)

If you're using Vercel Analytics and Speed Insights:

| Variable                 | Description               | Required |
| ------------------------ | ------------------------- | -------- |
| `NEXT_PUBLIC_VERCEL_URL` | Application URL on Vercel | ❌ No    |

### Environment Setup

#### 1. Development (.env.local)

```bash
# Database Configuration
DATABASE_URI=mongodb://localhost:27017/ak1944

# Security Configuration
PAYLOAD_SECRET=your_payload_secret_key_here

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
```

#### 2. Production

For production environment, remember to:

- Use production database URL for `DATABASE_URI`
- Generate a secure random string for `PAYLOAD_SECRET` (minimum 32 characters)
- Use live Stripe keys (`pk_live_...` and `sk_live_...`)
- Configure variables in your hosting platform (Vercel, Netlify, etc.)

#### 3. Getting Required Values

**Database URI**

- For MongoDB: Use connection string format `mongodb://username:password@host:port/database`
- For MongoDB Atlas: Get connection string from your cluster dashboard
- For local development: `mongodb://localhost:27017/ak1944`

**Payload Secret**

Generate a secure random string for authentication:

```bash
# Generate secure random string
openssl rand -base64 32
```

**Stripe Keys**

1. Log in to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Go to **Developers** → **API keys**
3. Copy the publishable key to `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
4. Copy the secret key to `STRIPE_SECRET_KEY`

> ⚠️ **Security Warning**: Never commit the `.env.local` file to your repository. It's automatically ignored by `.gitignore`. Keep your `DATABASE_URI`, `PAYLOAD_SECRET`, and `STRIPE_SECRET_KEY` confidential.

### Verifying Configuration

After setting up the variables, you can verify everything works correctly:

```bash
npm run dev
```

The application should start without any environment variable related errors. Check the console for any missing or invalid configuration warnings.

## ♿ Accessibility (WCAG 2.1 Level AA)

We ensure our website is accessible to all users by implementing:

- **Semantic HTML & ARIA attributes** - proper HTML5 tags and ARIA labels for better screen reader support
- **High contrast mode** - toggle between light/dark themes with WCAG-compliant contrast ratios
- **Responsive Web Design (RWD)** - fully responsive from mobile to 4K displays with touch-friendly elements
- **Full keyboard navigation** - accessible without mouse, with visible focus indicators

All features are regularly tested with Axe DevTools to maintain accessibility standards.

## 📁 Project Structure

```
AK1944/
├── .github/               # GitHub workflows and configs
├── .husky/                # Git hooks for code quality
├── .next/                 # Next.js build output
├── .storybook/            # Storybook configuration
├── node_modules/          # Dependencies
├── public/                # Static assets
│   ├── images/            # Image files
│   ├── favicon.ico        # Site favicon
│   └── vercel.svg         # Vercel logo
├── src/                   # Source code
│   ├── app/               # Next.js App Router
│   ├── components/        # Reusable UI components
│   ├── context/           # React Context providers
│   ├── data/              # Static data files
│   ├── dataAccess/        # Data fetching logic
│   ├── hooks/             # Custom React hooks
│   ├── icons/             # SVG icons
│   ├── mocks/             # Mock data for testing
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Helper functions
├── .env.example           # Environment variables template
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore file
├── jest.config.js         # Jest testing config
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── tailwind.config.ts     # Tailwind CSS config
└── tsconfig.json          # TypeScript config
```

### Naming Convention

- **Components**: PascalCase (`HeroSection.tsx`, `NavigationBar.tsx`)
- **Files**: camelCase (`useAuth.ts`, `formatDate.ts`)
- **Folders**: kebab-case (`about-us`, `contact-form`)
- **CSS Modules**: camelCase (`styles.module.css`)

## 🤝 Contributing

We welcome contributions to help preserve and share the history! If you'd like to submit a Pull Request, please ensure your code meets our standards:

### Code Quality Requirements:

- **Code formatting** - All code must be formatted with Prettier (run `npm run format`)
- **Linting** - Code must pass ESLint checks without errors (run `npm run lint`)
- **Styling** - Use only Tailwind CSS utility classes as defined in our `tailwind.config.ts`
- **Accessibility** - All new features must be WCAG 2.1 Level AA compliant:
  - Test with keyboard navigation
  - Verify proper ARIA attributes
  - Check contrast ratios
  - Test with screen readers

### Before submitting PR:

```bash
npm run lint
npm run format
npm run test
```

## 👥 Contributors & Supporters

We are grateful to all the people who have contributed to this project and helped preserve the history of the AK.

### 🎨 UX/UI Design Team

- [Karolina Bożemska](https://www.linkedin.com/in/karolina-bo%C5%BCemska/) - UX/UI Designer
- [Julia Luksa](https://linkedin.com/in/julia-luksa) - UX/UI Designer
- [Olga Skibińska](https://linkedin.com/in/olga-skibinska) - UX/UI Designer

### 💻 Development Team

- [Agata Kamińska](https://www.linkedin.com/in/agata-kuklinska/) - Lead Developer
- [Jakub Wąsik](https://www.linkedin.com/in/jacob-wasik/) - Lead Developer
- [Vincent Słomiński](https://www.linkedin.com/in/vincent-slominski/) - Developer
- [Bartek Brański](https://www.linkedin.com/in/barteknr1/) - Developer
- [Bartosz Jarzyło](https://www.linkedin.com/in/bartosz-jarzylo/) - Developer
- [Agnieszka Iwan](https://www.linkedin.com/in/agnieszka-iwan2/) - Developer
- [Jakub Pawlak](https://www.linkedin.com/in/jakub-pawlak-frontend-dev/) - Developer
- [Piotr Drechsler](https://www.linkedin.com/in/piotr-drechsler/) - Developer

### 🧪 Quality Assurance Team

- [Edyta Malicka](https://www.linkedin.com/in/edytamalicka/) - QA Tester
- [Anna Oszkodar-Balcer](https://www.linkedin.com/in/annaob/) - QA Tester
- [Wojciech Kasprzyk](https://www.linkedin.com/in/wojciech-kasprzyk88/) - QA Tester

### 📦 Product Management

- [Maciej Małozięć](https://www.linkedin.com/in/maloziec/) - Product Owner

_Want to contribute? Check out our [Contributing Guidelines](#-contributing) and join our mission to preserve history through technology._

## 📄 License

This project is proprietary software. All rights reserved.

**Copyright © 2025 Światowy Związek Żołnierzy Armii Krajowej (ŚŻŻAK)**

### Restrictions:

- **No copying** - The source code cannot be copied or reproduced
- **No distribution** - The code cannot be distributed in any form
- **No commercial use** - The code cannot be used for commercial purposes
- **No derivative works** - You may not create derivative works based on this code

### Permitted use:

- Viewing the code for educational purposes only
- Contributing to this repository via Pull Requests (contributions become property of ŚŻŻAK)

For any questions regarding the use of this code, please contact the Światowy Związek Żołnierzy Armii Krajowej.

All content, logos, and materials are protected by copyright and are the property of ŚŻŻAK.

```

```
