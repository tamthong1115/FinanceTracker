## eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

---

## tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

---

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

---

## tsconfig.app.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

---

## vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

---

## tsconfig.node.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

---

## index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## package.json

```json
{
  "name": "frontend-finance-tracker",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.6.0",
    "@fortawesome/free-brands-svg-icons": "^6.6.0",
    "@fortawesome/free-regular-svg-icons": "^6.6.0",
    "@fortawesome/free-solid-svg-icons": "^6.6.0",
    "@material-tailwind/react": "^2.1.10",
    "axios": "^1.7.7",
    "font-awesome": "^4.7.0",
    "lucide-react": "^0.451.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-router-dom": "^6.27.0",
    "react-slick": "^0.30.2",
    "slick-carousel": "^1.8.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.11.1",
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.0",
    "@types/react-router-dom": "^5.3.3",
    "@types/react-slick": "^0.23.13",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.11.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.12",
    "globals": "^15.9.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.7.0",
    "vite": "^5.4.8"
  }
}
```

---

## postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## src/vite-env.d.ts

```ts
/// <reference types="vite/client" />
```

---

## src/main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## src/index.css

```css
@import "styles/custom.css";
@import "slick-carousel/slick/slick.css";
@import "slick-carousel/slick/slick-theme.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --height__base: 80vh;
  --width__base: 100vw;
}
/*trang About us*/
.story {
  padding: 2rem;
  border-radius: 1rem;
}
.green-circle {
  width: 300px; /* Độ rộng của khung */
  height: 300px; /* Chiều cao của khung */
  background-color: #00c98e; /* Màu xanh */
  border-radius: 50%; /* Tạo hình tròn */
  position: absolute; /* Đặt vị trí tuyệt đối */
  z-index: -1; /* Đặt vị trí phía sau nội dung */
}

.grey {
  background-color: #d3d3d3;
}

.story__content {
  padding: 1rem;
}

.story__title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333; /* Màu chữ đậm */
}

@keyframes textAnimation {
  0%,
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-10px);
  }
}

.story__bg {
  background-size: cover;
  background-position: center;
}

.story__bg--big {
  height: 300px;
  background-image: url("/path/to/big-image.jpg");
}

.story__bg--small {
  height: 150px;
  background-image: url("/path/to/small-image.jpg");
}

.story__bg--team {
  height: 200px;
  background-image: url("/path/to/team-image.jpg");
}
.team-section {
  text-align: center;
  padding: 50px;
  background-color: #f9f9f9;
}

.team-section h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.team-section p {
  font-style: italic;
  color: #555;
  margin-bottom: 40px;
}

.team-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.team-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
}

.team-card img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.team-card h3 {
  font-size: 1.5rem;
  margin: 15px 0 10px;
}

.team-card p {
  color: #888;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  margin: 0 10px;
  font-size: 1.5rem;
  color: #555;
  text-decoration: none;
}

.social-links a:hover {
  color: #00c98e;
}
.team-card img {
  display: block;
  margin: 0 auto; /* Căn giữa hình ảnh theo chiều ngang */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.contact-form {
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-top: 3rem;
}

.contact-form__title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-control {
  margin-bottom: 1.5rem;
}

.form-control__input,
.form-control__textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
}

.form-control__input:focus,
.form-control__textarea:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.button--primary {
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  display: inline-block;
}

.button--primary:hover {
  background-color: #218838;
}

.valid-feedback {
  color: #28a745;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
/* Contact Form Styles */
.contact-form {
  background-color: #f7fafc; /* Light gray background */
  padding: 2rem;
  border-radius: 1rem; /* Larger rounded corners */
  margin-top: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05); /* Soft shadow */
}

.contact-form__title {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center; /* Center the title */
  color: #333;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-control {
  display: flex;
  flex-direction: column;
}

.form-control label {
  font-size: 0.875rem; /* Slightly smaller label */
  font-weight: 500;
  color: #666; /* Lighter gray for label */
}

.form-control__input,
.form-control__textarea {
  margin-top: 0.5rem;
  padding: 0.75rem 1rem; /* More padding for larger input fields */
  width: 100%;
  border: none; /* No visible border */
  border-radius: 2rem; /* Very round input fields */
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1); /* Subtle outline shadow */
  background-color: #fff; /* White background for input */
}

.form-control__input:focus,
.form-control__textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.5); /* Soft green focus effect */
}

.form-control__textarea {
  resize: none; /* Prevent textarea from being resized */
  height: 8rem; /* Fixed height for textarea */
}

.button--primary {
  background-color: #38a169; /* Green button */
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 2rem;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto; /* Center the button */
}

.button--primary:hover {
  background-color: #2f855a; /* Darker green on hover */
}

.d-flex {
  display: flex;
}

.w-100 {
  width: 100%;
}

.justify-content-center {
  justify-content: center;
}
```

---

## src/App.tsx

```tsx
import {
  Routes,
  BrowserRouter as Router,
  Route,
  // Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout.tsx";

// pages
import Home from "./pages/Home/Home.tsx";
import LoginForm from "./pages/LoginAndRegister/LoginForm";
import RegisterForm from "./pages/LoginAndRegister/RegisterForm.tsx";
import AboutUs from "./pages/AboutUs/AboutUs.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <LoginForm />
            </Layout>
          }
        />

        <Route
          path="/register"
          element={
            <Layout>
              <RegisterForm />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />

          <Route path={"/dashboard"} element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

## src/layouts/Layout.tsx

```tsx
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Define the prop types
type LayoutProps = {
  children: PropTypes.ReactNodeLike;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4">
          <Header />
        </div>
      </header>
      <main className="flex-1 container py-10">{children}</main>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
```

---

## src/pages/Home/Home.tsx

```tsx
import SlideShow from "../../components/SlideShow/SlideShow.js";
import PropTypes from "prop-types";
import CommunitySlider from "../../components/SlideShow/SlickSlide-OurCommunity.js";

type FeatureCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

type OurFeatureProps = {
  imgSrc: string;
  ourTitle: string;
  ourDescription: string;
};

const FeatureCard = ({ imageSrc, title, description }: FeatureCardProps) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-left relative w-80 h-64">
    <div className="absolute -top-6 left-6 bg-white rounded-full bg-amber-200 p-2 shadow-md">
      <img src={imageSrc} alt="Feature icon" className="w-12 h-12" />
    </div>
    <h3 className="text-lg font-bold mb-2 mt-12">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const OurFeature = ({ imgSrc, ourTitle, ourDescription }: OurFeatureProps) => (
  <div className="text-left mb-4 mx-auto w-64 h-auto ">
    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border mb-2">
      <img src={imgSrc} alt={ourTitle} className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold mb-2">{ourTitle}</h3>
    <p className="text-gray-600">{ourDescription}</p>
  </div>
);

const Home = () => {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //   };

  return (
    <div className="text-center h-max mx-0 px-0">
      <div className="text-center h-screen">
        <SlideShow />
      </div>

      <div className="flex flex-col md:flex-row justify-between text-left items-center md md:items-start p-8 w-lvw">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="group bg-white p-6 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 scale-150 rounded-full relative  items-center justify-center flex group-hover:bg-gray-100">
                <img
                  src="/img/icons8-professional-100-basic.png"
                  alt="First Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="/img/icons8-professional-100-colorBlue.png"
                  alt="Second Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white ">
              Professional Consultants
            </h3>
            <p className="text-gray-600 group-hover:text-white ">
              The team of professional consultants provides in-depth and
              tailored advice based on your financial situation, helping you
              make smart and secure investment decisions.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 scale-150 rounded-full relative  items-center justify-center flex group-hover:bg-gray-100">
                <img
                  src="/img/icons8-chart-100-colorBasic.png"
                  alt="First Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="/img/icons8-chart-100-colorBlue.png"
                  alt="Second Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white ">
              Comprehensive Services
            </h3>
            <p className="text-gray-600 group-hover:text-white ">
              With comprehensive services, you can automate financial
              management, optimize savings, and receive detailed reports on your
              financial situation anytime, anywhere.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 scale-150 rounded-full relative  items-center justify-center flex group-hover:bg-gray-100">
                <img
                  src="/img/icons8-add-dollar-100-colorBasic.png"
                  alt="First Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="/img/icons8-add-dollar-100-colorBlue.png"
                  alt="Second Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white ">
              A Culture that Delivers
            </h3>
            <p className="text-gray-600 group-hover:text-white ">
              A culture committed to delivering financial results in our
              services helps customers feel secure and confident in their
              personal financial management process.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 scale-150 rounded-full relative  items-center justify-center flex group-hover:bg-gray-100">
                <img
                  src="/img/icons8-company-100-colorBasic.png"
                  alt="First Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="/img/icons8-related-companies-100-colorBlue.png"
                  alt="Second Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white ">
              Industry Experience
            </h3>
            <p className="text-gray-600 group-hover:text-white ">
              With many years of experience in the financial industry, we
              understand the challenges our clients face and are always ready to
              provide the most suitable solutions.
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 hidden md:block">
          <h2 className="text-gray-600 text-sm uppercase mb-2">
            About Our Corporation
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            More than 40M+ Trusted Our Financial & Consultation Institution
          </h1>
          <p className="text-gray-600 mb-4">
            At Our Corporation, we pride ourselves on over a decade of
            experience in the financial and consultation industry. Our dedicated
            team of experts is committed to providing personalized solutions
            tailored to meet the unique needs of each client.
          </p>
          <p className="text-gray-600 mb-4">
            With a focus on integrity and transparency, we have earned the trust
            of millions who rely on us for sound financial advice and strategic
            planning.
          </p>
          <p className="text-gray-600 mb-4">
            {" "}
            Whether you're looking to optimize your investments, manage your
            budget, or navigate complex financial landscapes, we are here to
            guide you every step of the way.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-screen min-h-screen bg-gradient-to-b from-white to-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-28 justify-evenly flex">
          <FeatureCard
            imageSrc="img/icons8-in-progress.gif"
            title="Have perfect control"
            description="over all your cash expenses, bank accounts, E-Wallets and crypto wallets."
          />
          <FeatureCard
            imageSrc="img/icons8-chart-100.png"
            title="Get a quick overview"
            description="about your total incomes and expenses at a glance and in one place."
          />
          <FeatureCard
            imageSrc="img/icons8-money-bag-100.png"
            title="Use our smart budgets"
            description="to save money for a new car, dreamy vacation or top university."
          />
        </div>
      </div>

      <div className="bg-white p-8 w-screen h-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Features <span className="font-normal">our users love</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <OurFeature
            imgSrc="img/icons8-wallet-100.png"
            ourTitle="Shared wallets"
            ourDescription="are popular among couples, families and roommates who handle their finances in Spendee."
          />
          <OurFeature
            imgSrc="img/icons8-bank-100.png"
            ourTitle="Connecting bank accounts"
            ourDescription="to Spendee is preferred by people paying mostly by card."
          />
          <OurFeature
            imgSrc="img/icons8-user-100.png"
            ourTitle="Customize Spendee"
            ourDescription="Customize your categories, add a picture or a location to every expense."
          />
          <OurFeature
            imgSrc="img/icons8-currencies-100.png"
            ourTitle="Multiple currencies"
            ourDescription="are favoured by travellers and digital nomads managing money in more currencies."
          />
          <OurFeature
            imgSrc="img/icons8-google-alerts-100.png"
            ourTitle="Alerts and reminders"
            ourDescription="will notify you to pay the bill or not to exceed the budget."
          />
          <OurFeature
            imgSrc="img/icons8-sync-100.png"
            ourTitle="Sync and backup"
            ourDescription="is valuable for everyone using Spendee across devices and sharing Spendee with others."
          />
        </div>
      </div>

      <div className="w-screen mx-auto py-16 w-screen ">
        <div className="text-center mb-12">
          <h2 className="text-sm text-gray-400 uppercase">Testimonial</h2>
          <h1 className="text-4xl font-bold text-gray-800">Happy Customers</h1>
        </div>

        <CommunitySlider />
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
OurFeature.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  ourTitle: PropTypes.string.isRequired,
  ourDescription: PropTypes.string.isRequired,
};

export default Home;
```

---

## src/pages/AboutUs/AboutUs.tsx

```tsx
import ContactForm from "../../components/ContactForm/ContactForm";

const AboutUs = () => {
  return (
    <div>
    
    <div className="container mx-auto p-8 flex items-center justify-center">
      <div className="text-center text-5xl w-full lg:w-2/3 text-gray-700">
      Finance Tracker helps <b>you <br></br> to get your money into shape.</b>
      </div>
    </div>
    <div className="green-circle right-0"></div>
    <div className="story circle">
      <div className="container mx-auto p-8">
      <div className="row flex flex-wrap">
          <div className="col-12 lg:col-6">
            <div className="story__content flex flex-col lg:flex-row items-start">
              <div className="flex-1">
                <h3 className="story__title text-2xl font-bold mb-4 text-gray-700">
                  In Finance Tracker, we all come to work every day to <b>enable people make smart decisions about their money every day.</b>
                </h3>
                <p className="mb-4 text-gray-700">
                  We believe that managing finance should be as effortless as shopping online. It should be done anytime, anywhere and in few clicks.
                </p>
                <p className="mb-4 text-gray-700">
                  What started as a simple expense tracker for a small group of people has grown into personal finance app that brings beauty to finance of thousands users from almost every country in the world.
                </p>
              </div>
              <img src="/img/dd1.jpg" alt="team" className="story__team w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-4" />
            </div>
          </div>
        </div>
         <div className="green-circle left-0"></div>
        <div className="row flex flex-wrap items-center">
        <div className="col-12 lg:col-6">
            <div className="story__content ml-auto flex flex-col lg:flex-row items-center lg:items-start">
            <img src="/img/dd2.jpg" alt="team" className="story__team w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-4 lg:mr-2" />
              <div className="flex-1">
                <h3 className="story__title  text-2xl font-bold mb-4 text-gray-700">
                  We want to make your <b>financial life stress-free.</b>
                </h3>
                <p className=" mb-4 text-gray-700">
                  Finance Tracker helps you to get your finances into the shape so that you don't need to stress about every dollar that you spend. If you know how much and what on you spend, it is easier to change your financial habits, if you feel like that's what you need.
                </p>
                <p className=" mb-4 text-gray-700">
                  Having a complete picture of your finances in one place, make them easier to manage. Our mission here is to help you leave your financial ghosts behind, overcome your financial fears and treat yourself with financial wisdom instead.
                </p>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="team-section">
  <h2>Meet the team</h2>
   
  <div className="team-cards">
    <div className="team-card">
      <img src="/img/dd3.jpg" alt="Tam Thông" />
      <h3>Tam Thông</h3>
      <p>Leader</p>
      <div className="social-links">
        <a href="mailto:david@example.com">✉</a>
      </div>
    </div>

    <div className="team-card">
      <img src="/img/dd4.jpg" alt="Gia Bảo" />
      <h3>Gia Bảo</h3>
      <p>Contributor</p>
      <div className="social-links">
        <a href="mailto:2251120334@ut.edu.vn">✉</a>
      </div>
    </div>

    <div className="team-card">
      <img src="/img/dd5.jpg" alt="Ngọc Đặng" />
      <h3>Ngọc Đặng</h3>
      <p>Contributor</p>
      <div className="social-links">
        <a href="mailto:pavla@example.com">✉</a>
      </div>
    </div>
    <div className="team-card">
      <img src="/img/dd6.jpg" alt="Vũ Hoàng" />
      <h3>Vũ Hoàng</h3>
      <p>Contributor</p>
      <div className="social-links">
        <a href="mailto:pavla@example.com">✉</a>
      </div>
    </div>
    <div className="green-circle right-0"></div>
    </div>
      
  </div>
  <ContactForm />
</div>

  );
};

export default AboutUs;```

---

## src/pages/Dashboard/Dashboard.tsx

```tsx
import {useState} from 'react';
import {Header} from "../../components/main/Header";
import {Sidebar} from "../../components/main/Sidebar";
import {Transaction} from "../../components/main/Transaction/Transaction";
import Goals from "../../components/main/Goals/Goals";
import Reports from "../../components/main/Reports/Reports";
import {Budget} from "../../components/main/Budget/Budget";
import Accounts from "../../components/main/Accounts/Accounts";
import {Setting} from "../../components/main/Setting/Setting";


// export { Transaction, Budget, Goals, Reports, Dashboard };

// BalanceWidget Component
const BalanceWidget = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Tổng số dư</h2>
    <p className="text-3xl font-bold text-green-600">$10,234.56</p>
  </div>
);

// IncomeExpenseWidget Component
const IncomeExpenseWidget = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Thu chi tháng này</h2>
    <div className="flex justify-between">
      <div>
        <p className="text-sm text-gray-600">Thu</p>
        <p className="text-xl font-semibold text-green-600">+$5,678.90</p>
      </div>
      <div>
        <p className="text-sm text-gray-600">Chi</p>
        <p className="text-xl font-semibold text-red-600">-$3,456.78</p>
      </div>
    </div>
  </div>
);

// SavingsGoalWidget Component
const SavingsGoalWidget = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Mục tiêu tiết kiệm</h2>
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
            Tiến độ
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-blue-600">
            70%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
        <div
          style={{ width: "70%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
        ></div>
      </div>
    </div>
  </div>
);


// DashboardContent Component
const DashboardContent = ({ activeItem, isSidebarExpanded }) => {
  const contentClass = `transition-all duration-300 p-6 bg-gray-100 min-h-screen ${isSidebarExpanded ? 'ml-64' : 'ml-20'}`;

  switch (activeItem) {
    case 'Giao dịch':
      return <div className={contentClass}><Transaction /></div>;
    case 'Ngân sách':
      return <div className={contentClass}><Budget /></div>;
    case 'Mục tiêu':
      return <div className={contentClass}><Goals /></div>;
    case 'Báo cáo':
      return <div className={contentClass}><Reports /></div>;
    case 'Tài khoản':
      return <div className={contentClass}><Accounts /></div>;
    case 'Cài đặt':
      // return <div className={contentClass}><Setting /></div>;
    default:
      return (
          <div className={contentClass}>
            <h2 className="text-2xl font-bold mb-4">Tổng quan</h2>
            {/* Thêm nội dung tổng quan ở đây */}
          </div>
      );
  }
};

// Main Dashboard Component
const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('Tổng quan');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
      <div className="flex bg-gray-100">
        <Sidebar
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isExpanded={isSidebarExpanded}
            setIsExpanded={setIsSidebarExpanded}
        />
        <div className="flex-1 flex flex-col">
          <Header isSidebarExpanded={isSidebarExpanded} />
          <DashboardContent activeItem={activeItem} isSidebarExpanded={isSidebarExpanded} />
        </div>
      </div>
  );
};

export default Dashboard;```

---

## src/pages/LoginAndRegister/LoginForm.tsx

```tsx
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { LoginType } from "../../types/auth";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    mode: "onBlur",
  });

  return (
    <div className="font-[sans-serif] min-h-screen">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-4 h-full">
        <div className="max-md:order-1 lg:col-span-2 md:h-90% w-full bg-[#000842] md:rounded-tr-xl md:rounded-br-xl lg:p-12 p-8">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:w-[70%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="w-full p-6">
          <form>
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
              <p className="text-sm mt-4 text-gray-800">
                Don&apos;t have an account{" "}
                <Link
                  to="/register"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>

            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
                Email
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Enter email"
                    {...register("email", { required: "Email is required" })}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </label>
            </div>

            <div className="mt-4">
              <label className="text-gray-800 text-[15px] mb-2 block">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                  placeholder="Enter password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="javascript:void(0);"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="button"
                className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Sign in
              </button>
            </div>

            <div className="my-4 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-800 text-center">or</p>
              <hr className="w-full border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                className="inline"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00"
                />
                <path
                  fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58"
                />
                <path
                  fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52"
                />
                <path
                  fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6"
                />
                <path
                  fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48"
                />
                <path
                  fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132"
                />
              </svg>
              Continue with google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
```

---

## src/pages/LoginAndRegister/RegisterForm.tsx

```tsx
import { Link } from "react-router-dom";

const RegisterForm = () => (
  <div className="font-[sans-serif] min-h-screen">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-4 h-full">
      <div className="max-md:order-1 lg:col-span-2 md:h-90% w-full bg-[#000842] md:rounded-xl md:rounded-br-xl lg:p-12 p-8">
        <img
          src="header/sign-in.png"
          className="lg:w-[70%] w-full h-full object-contain block mx-auto"
          alt="login-image"
        />
      </div>

      <div className="w-full p-6">
        <form>
          <div className="mb-8">
            <h3 className="text-gray-800 text-3xl font-extrabold">Register</h3>
            <p className="text-sm mt-4 text-gray-800">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Sign In here
              </Link>
            </p>
          </div>

          <div>
            <label className="text-gray-800 text-[15px] mb-2 block">
              Email
            </label>
            <div className="relative flex items-center">
              <input
                name="email"
                type="text"
                required
                className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-gray-800 text-[15px] mb-2 block">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required
                className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-gray-800 text-[15px] mb-2 block">
              Confirm Password
            </label>
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required
                className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="button"
              className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Sign up
            </button>
          </div>

          <div className="my-4 flex items-center gap-4">
            <hr className="w-full border-gray-300" />
            <p className="text-sm text-gray-800 text-center">or</p>
            <hr className="w-full border-gray-300" />
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              className="inline"
              viewBox="0 0 512 512"
            >
              <path
                fill="#fbbd00"
                d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                data-original="#fbbd00"
              />
              <path
                fill="#0f9d58"
                d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                data-original="#0f9d58"
              />
              <path
                fill="#31aa52"
                d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                data-original="#31aa52"
              />
              <path
                fill="#3c79e6"
                d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                data-original="#3c79e6"
              />
              <path
                fill="#cf2d48"
                d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                data-original="#cf2d48"
              />
              <path
                fill="#eb4132"
                d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                data-original="#eb4132"
              />
            </svg>
            Continue with google
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default RegisterForm;
```

---

## src/components/Input.tsx

```tsx
import React from "react";

interface InputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoComplete?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  required = false,
  autoComplete,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default Input;
```

---

## src/components/Button.tsx

```tsx
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
```

---

## src/components/main/Header.tsx

```tsx
import {Bell} from "lucide-react";
import SearchBar from "./SearchBar";

export const Header = ({isSidebarExpanded}) => (
    <header
        className={`bg-white shadow-md p-4 flex items-center justify-between transition-all duration-300 ${isSidebarExpanded ? 'ml-64' : 'ml-20'}`}>
        <div className="w-1/4"></div>
        <SearchBar />
        <div className="w-1/4 flex items-center justify-end space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-200">
                <Bell size={24}/>
            </button>
            <img
                src="/avatar.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
            />
        </div>
    </header>
);```

---

## src/components/main/Sidebar.tsx

```tsx
import {useState} from "react";
import {
    BarChart2,
    ChevronLeft,
    ChevronRight,
    DollarSign,
    LayoutDashboard,
    Settings,
    Tag,
    Target,
    Wallet
} from "lucide-react";

export const Sidebar = ({activeItem, setActiveItem}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const navItems = [
        {icon: <LayoutDashboard size={24}/>, text: 'Tổng quan', href: '#'},
        {icon: <DollarSign size={24}/>, text: 'Giao dịch', href: '#'},
        {icon: <Tag size={24}/>, text: 'Ngân sách', href: '#'},
        {icon: <Target size={24}/>, text: 'Mục tiêu', href: '#'},
        {icon: <BarChart2 size={24}/>, text: 'Báo cáo', href: '#'},
        {icon: <Wallet size={24}/>, text: 'Tài khoản', href: '#'},
    ];

    return (
        <nav
            className={`bg-white shadow-lg fixed h-full z-10 flex flex-col justify-between transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}>
            <div>
                <div className="p-4 flex items-center justify-between">
                    <img src="/icon.png" alt="Logo" className="w-12 h-12"/>
                    {isExpanded && <span className="font-bold text-xl">FinanceApp</span>}
                </div>
                <ul className="mt-6">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative">
                            <a
                                href={item.href}
                                className={`flex items-center py-4 px-6 text-gray-700 hover:bg-gray-100 ${
                                    activeItem === item.text ? 'bg-blue-100 text-blue-600' : ''
                                }`}
                                onClick={() => setActiveItem(item.text)}
                            >
                                {item.icon}
                                {isExpanded && <span className="ml-4">{item.text}</span>}
                            </a>
                            {!isExpanded && (
                                <span
                                    className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                  {item.text}
                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative">
                <a
                    href="#"
                    className={`flex items-center py-4 px-6 text-gray-700 hover:bg-gray-100 ${
                        activeItem === 'Cài đặt' ? 'bg-blue-100 text-blue-600' : ''
                    }`}
                    onClick={() => setActiveItem('Cài đặt')}
                >
                    <Settings size={24}/>
                    {isExpanded && <span className="ml-4">Cài đặt</span>}
                </a>
                {!isExpanded && (
                    <span
                        className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            Cài đặt
          </span>
                )}
            </div>
            <button
                className="absolute top-1/2 -right-3 bg-white rounded-full p-1 shadow-md"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? <ChevronLeft size={20}/> : <ChevronRight size={20}/>}
            </button>
        </nav>
    );
};

export default Sidebar;```

---

## src/components/main/SearchBar.tsx

```tsx
import {useState} from "react";
import {Search, X} from "lucide-react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Mô phỏng tìm kiếm (thay thế bằng logic tìm kiếm thực tế)
        const results = [
            {type: 'transaction', title: 'Mua sắm tại siêu thị', amount: -50},
            {type: 'goal', title: 'Tiết kiệm cho kỳ nghỉ', progress: 70},
            {type: 'budget', title: 'Ngân sách ăn uống', remaining: 200},
        ].filter(item =>
            item.title.toLowerCase().includes(term.toLowerCase())
        );

        setSearchResults(results);
    };

    return (
        <div className="relative w-full max-w-xl">
            <input
                type="text"
                placeholder="Tìm kiếm giao dịch, mục tiêu, ngân sách..."
                className="w-full pl-10 pr-4 py-2 border rounded-full"
                value={searchTerm}
                onChange={handleSearch}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20}/>
            {searchTerm && (
                <button
                    className="absolute right-3 top-2.5 text-gray-400"
                    onClick={() => {
                        setSearchTerm('');
                        setSearchResults([]);
                    }}
                >
                    <X size={20}/>
                </button>
            )}
            {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-md shadow-lg z-10">
                    {searchResults.map((result, index) => (
                        <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                            {result.type === 'transaction' && (
                                <p>{result.title} - {result.amount > 0 ? '+' : ''}{result.amount}đ</p>
                            )}
                            {result.type === 'goal' && (
                                <p>{result.title} - Tiến độ: {result.progress}%</p>
                            )}
                            {result.type === 'budget' && (
                                <p>{result.title} - Còn lại: {result.remaining}đ</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;```

---

## src/components/main/Budget/Budget.tsx

```tsx
import {useState} from "react";
import {Plus} from "lucide-react";

export const Budget = () => {
    const [budgets, setBudgets] = useState([
        {id: 1, category: 'Ăn uống', limit: 3000000, spent: 2500000},
        {id: 2, category: 'Mua sắm', limit: 2000000, spent: 1800000},
        // Thêm các ngân sách mẫu khác
    ]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Ngân sách</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center mb-4">
                <Plus size={20} className="mr-2"/>
                Thêm ngân sách
            </button>
            {budgets.map(budget => (
                <div key={budget.id} className="mb-4 p-4 border rounded-md">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">{budget.category}</h3>
                        <span>{budget.spent.toLocaleString()} đ / {budget.limit.toLocaleString()} đ</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{width: `${(budget.spent / budget.limit) * 100}%`}}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};```

---

## src/components/main/Reports/Reports.tsx

```tsx
import {BarChart, Download, PieChart} from "lucide-react";

const Reports = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Báo cáo tài chính</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-md">
                    <h3 className="text-lg font-semibold mb-2">Thu chi theo thời gian</h3>
                    <BarChart size={200} className="mx-auto"/>
                    <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center w-full">
                        <Download size={20} className="mr-2"/>
                        Tải xuống
                    </button>
                </div>
                <div className="p-4 border rounded-md">
                    <h3 className="text-lg font-semibold mb-2">Chi tiêu theo danh mục</h3>
                    <PieChart size={200} className="mx-auto"/>
                    <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center w-full">
                        <Download size={20} className="mr-2"/>
                        Tải xuống
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reports;```

---

## src/components/main/Goals/Goals.tsx

```tsx
import {useState} from "react";
import {Plus} from "lucide-react";

const Goals = () => {
    const [goals, setGoals] = useState([
        {id: 1, name: 'Mua nhà', target: 1000000000, current: 250000000, deadline: '2025-12-31'},
        {id: 2, name: 'Du lịch Châu Âu', target: 50000000, current: 30000000, deadline: '2024-06-30'},
        // Thêm các mục tiêu mẫu khác
    ]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Mục tiêu tài chính</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center mb-4">
                <Plus size={20} className="mr-2"/>
                Thêm mục tiêu
            </button>
            {goals.map(goal => (
                <div key={goal.id} className="mb-4 p-4 border rounded-md">
                    <h3 className="text-lg font-semibold mb-2">{goal.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">Hạn: {goal.deadline}</p>
                    <div className="flex justify-between items-center mb-2">
                        <span>{goal.current.toLocaleString()} đ</span>
                        <span>{goal.target.toLocaleString()} đ</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-green-600 h-2.5 rounded-full"
                            style={{width: `${(goal.current / goal.target) * 100}%`}}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Goals;```

---

## src/components/main/Transaction/Transaction.tsx

```tsx
import {useState} from "react";
import {Edit2, Filter, Plus, Trash2} from "lucide-react";

export const Transaction = () => {
    const [transactions, setTransactions] = useState([
        {id: 1, date: '2024-02-15', description: 'Lương tháng 2', amount: 10000000, type: 'income'},
        {id: 2, date: '2024-02-16', description: 'Mua sắm', amount: -500000, type: 'expense'},
        // Thêm các giao dịch mẫu khác
    ]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Giao dịch</h2>
            <div className="mb-4 flex justify-between items-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                    <Plus size={20} className="mr-2"/>
                    Thêm giao dịch
                </button>
                <button className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
                    <Filter size={20} className="mr-2"/>
                    Lọc
                </button>
            </div>
            <table className="w-full">
                <thead>
                <tr className="bg-gray-100">
                    <th className="text-left p-2">Ngày</th>
                    <th className="text-left p-2">Mô tả</th>
                    <th className="text-right p-2">Số tiền</th>
                    <th className="text-center p-2">Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id} className="border-b">
                        <td className="p-2">{transaction.date}</td>
                        <td className="p-2">{transaction.description}</td>
                        <td className={`p-2 text-right ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.amount.toLocaleString()} đ
                        </td>
                        <td className="p-2 text-center">
                            <button className="text-blue-500 mr-2"><Edit2 size={16}/></button>
                            <button className="text-red-500"><Trash2 size={16}/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};```

---

## src/components/main/Accounts/Accounts.tsx

```tsx
import {useState} from "react";
import {Edit2, Plus, Trash2} from "lucide-react";

const Accounts = () => {
    const [accounts, setAccounts] = useState([
        {id: 1, name: 'Tài khoản chính', balance: 15000000},
        {id: 2, name: 'Tiết kiệm', balance: 50000000},
        // Thêm các tài khoản mẫu khác
    ]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Quản lý tài khoản</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center mb-4">
                <Plus size={20} className="mr-2"/>
                Thêm tài khoản
            </button>
            {accounts.map(account => (
                <div key={account.id} className="mb-4 p-4 border rounded-md flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold">{account.name}</h3>
                        <p className="text-2xl font-bold text-green-600">{account.balance.toLocaleString()} đ</p>
                    </div>
                    <div>
                        <button className="text-blue-500 mr-2"><Edit2 size={20}/></button>
                        <button className="text-red-500"><Trash2 size={20}/></button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accounts;```

---

## src/components/main/Setting/Setting.tsx

```tsx
```

---

## src/components/Hero/Hero.tsx

```tsx
const Hero = () => {
    return (
      <section className="bg-gray-800 text-white p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Finance Tracker</h2>
          <p className="text-lg mb-8">Discover amazing features and functionalities.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;```

---

## src/components/ContactForm/ContactForm.tsx

```tsx
const ContactForm = () => {
  return (
    <div className="contact-form bg-gray-100 p-8 rounded-lg mt-8">
      <h2 className="contact-form__title text-2xl font-bold mb-4">
        Get in touch with us
      </h2>
      <form name="get_in_touch" method="post" noValidate>
        <div className="form-group mb-4">
          <div className="form-control">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="get_in_touch_name"
              name="get_in_touch[name]"
              required
              className="form-control__input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              aria-describedby="name"
              placeholder="Your name"
            />
          </div>
        </div>

        <div className="form-group mb-4">
          <div className="form-control">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="get_in_touch_email"
              name="get_in_touch[email]"
              required
              className="form-control__input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your email address"
            />
          </div>
        </div>

        <div className="form-group mb-4">
          <div className="form-control">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="get_in_touch_message"
              name="get_in_touch[message]"
              required
              className="form-control__textarea mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your message"
            ></textarea>
          </div>
        </div>

        <div className="d-flex w-100 justify-content-center">
          <button
            type="submit"
            id="get_in_touch_send"
            name="get_in_touch[send]"
            className="button button--primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
```

---

## src/components/Footer/NewsletterSignup.tsx

```tsx
import React, { useState, FormEvent, ChangeEvent } from "react";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý logic đăng ký nhận bản tin ở đây
    console.log("Đăng ký với email:", email);
    setEmail("");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h3 className="footer-heading">Newsletter Signup</h3>
      <p className="mt-4 text-base text-gray-300">
        Get the latest financial tips and product updates.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
            type="email"
            name="email-address"
            id="email-address"
            autoComplete="email"
            required
            value={email}
            onChange={handleEmailChange}
            className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
            placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
              type="submit"
              className="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignup;
```

---

## src/components/Footer/FooterLinks.tsx

```tsx
import React from "react";
import { Link } from "react-router-dom";

interface LinkItem {
  text: string;
  url: string;
}

interface FooterSectionProps {
  title: string;
  links: LinkItem[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="footer-heading">{title}</h3>
    <ul className="mt-4 space-y-4">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.url} className="footer-link">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterLinks: React.FC = () => {
  const sections: FooterSectionProps[] = [
    {
      title: "Solutions",
      links: [
        { text: "Budget Management", url: "/budget" },
        { text: "Investments", url: "/investments" },
        { text: "Savings", url: "/savings" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "FAQ", url: "/faq" },
        { text: "Help Center", url: "/help" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "/about" },
        { text: "Blog", url: "/blog" },
        { text: "Careers", url: "/careers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "/privacy" },
        { text: "Terms of Use", url: "/terms" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
      {sections.map((section, index) => (
        <FooterSection key={index} title={section.title} links={section.links} />
      ))}
    </div>
  );
};

export default FooterLinks;
```

---

## src/components/Footer/Copyright.tsx

```tsx
import React from "react";

const Copyright: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
      &copy; {currentYear} FinanceTracker. All rights reserved.
    </p>
  );
};

export default Copyright;
```

---

## src/components/Footer/Footer.tsx

```tsx
import React from "react";
import FooterLinks from "./FooterLinks";
import NewsletterSignup from "./NewsletterSignup";
import SocialLinks from "./SocialLinks";
import Copyright from "./Copyright";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <FooterLinks />
          <div className="mt-8 xl:mt-0">
            <NewsletterSignup />
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <SocialLinks />
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## src/components/Footer/SocialLinks.tsx

```tsx
import React from "react";
import { FacebookIcon, TwitterIcon, GitHubIcon } from "./Icons";

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, ariaLabel, icon }) => (
  <a href={href} className="social-link" aria-label={ariaLabel}>
    {icon}
  </a>
);

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLinkProps[] = [
    {
      href: "#",
      ariaLabel: "Facebook",
      icon: <FacebookIcon />,
    },
    {
      href: "#",
      ariaLabel: "Twitter",
      icon: <TwitterIcon />,
    },
    {
      href: "#",
      ariaLabel: "GitHub",
      icon: <GitHubIcon />,
    },
  ];

  return (
    <div className="flex space-x-6 md:order-2">
      {socialLinks.map((link, index) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;
```

---

## src/components/Footer/Icons.tsx

```tsx
import React from "react";

export const FacebookIcon: React.FC = () => (
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

export const TwitterIcon: React.FC = () => (
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

export const GitHubIcon: React.FC = () => (
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);
```

---

## src/components/SlideShow/SlideShow.tsx

```tsx
import  React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";


interface Background {
    url: string;
    title: string;
}

const SlideShow : React.FC = () => {
    const backgrounds: Background[] = [
        { url: 'img/Finace-tracker-background.webp', title: 'Build Your Financial Plan With Our Specialists' },
        { url: 'img/Finace-tracker-background2.webp', title: 'We\'re Always Here To Give Financial Help!' },
    ];

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
    };
    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 3000);
        return () => clearInterval(intervalId);
    },[])

    return (
        <div className="slideshow px-0 mx-0">
            <div
                className="relative bg-cover bg-center"
                style={{backgroundImage: `url(${backgrounds[currentSlide].url})`, width: '100vw', height: '75vh'}}
            >
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-4/5 w-full text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">{backgrounds[currentSlide].title}</h1>
                    <p className="text-lg mb-8">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.
                    </p>
                    <button
                        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition duration-300">
                        <Link to="/">GET STARTED -&gt; </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default SlideShow;



```

---

## src/components/SlideShow/SlickSlide-OurCommunity.tsx

```tsx
import React from "react";
import Slider from "react-slick";

interface Testimonial {
  name: string;
  img: string;
  review: string;
}

const CommunityData: Testimonial[] = [
  {
    name: `John Smith`,
    img: `dd6.jpg`,
    review: `I am using this app for more than two years and I could not be happier with the service I got.`,
  },
  {
    name: `Emily Tran`,
    img: `dd5.jpg`,
    review: `This app has transformed the way I manage my finances! The budgeting tools are intuitive and
         have helped me save more than I ever thought possible.`,
  },
  {
    name: `David Nguyen`,
    img: `dd4.jpg`,
    review: `I love the clean interface and the ease of use. It's made tracking my spending so much simpler. I can't imagine going back to my old methods!`,
  },
  {
    name: `Sophia Le`,
    img: `dd3.jpg`,
    review: `The personalized financial insights are incredible! I've learned so much about my spending habits, and I'm on my way to reaching my financial goals!`,
  },
  {
    name: `Michael Pham`,
    img: `dd1.jpg`,
    review: `This app is a game-changer! The shared wallet feature is perfect for managing expenses with my partner. It keeps us both on the same page!`,
  },
  {
    name: `Anna Vu`,
    img: `dd2.jpg`,
    review: `I appreciate the robust reporting features. I can easily see where my money goes each month, and it motivates me to stick to my budget!`,
  },
];

const CommunitySlider: React.FC = () => {
  const settings: import("react-slick").Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: CommunityData.length < 3 ? CommunityData.length : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <div className="w-3/4 m-auto mt-20">
        <Slider {...settings}>
          {CommunityData.map((testimonial, index) => (
              <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg bg-gray-200 mx-auto`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <img
                        src="/img/icons8-get-quote-100-colorWhite.png"
                        className="w-8 h-8"
                        alt=""
                    />
                  </div>
                </div>

                <p className="mb-4 text-gray-600">{testimonial.review}</p>
                <div className="flex items-center">
                  <img
                      src={`/img/${testimonial.img}`}
                      alt={`Profile picture of ${testimonial.name}`}
                      className="w-12 h-12 rounded-full mr-4"
                  />
                  {/*Name*/}
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">User</p>
                  </div>

                </div>
              </div>
          ))}
        </Slider>
      </div>
  );
};

export default CommunitySlider;

```

---

## src/components/auth/Register.tsx

```tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormWrapper from "./FormWrapper";
import Input from "./../Input";
import Button from "./../Button";
import SocialLogin from "./SocialLogin";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp");
      return;
    }

    try {
      console.log("Đăng ký với:", name, email, password);
    } catch (err) {
      setError("Đăng ký thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <FormWrapper title="Đăng ký tài khoản mới">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          id="name"
          name="name"
          type="text"
          label="Họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
        />

        <Input
          id="email"
          name="email"
          type="email"
          label="Địa chỉ email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />

        <Input
          id="confirm-password"
          name="confirm-password"
          type="password"
          label="Xác nhận mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          autoComplete="new-password"
        />

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <Button type="submit" fullWidth>
          Đăng ký
        </Button>
      </form>

      <SocialLogin />

      <div className="mt-6">
        <p className="text-center text-sm text-gray-600">
          Đã có tài khoản?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </FormWrapper>
  );
};

export default Register;
```

---

## src/components/Header/Header.tsx

```tsx
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex border-b bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between px-10 py-3 gap-4 w-full">
        <a href="javascript:void(0)">
          <img src="icon.png" alt="logo" className="w-14" />
        </a>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            onClick={handleToggleMenu}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img src="icon.png" alt="logo" className="w-36" />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <Link
                to={"/"}
                className="hover:text-blue-600 text-[15px] font-bold text-blue-600 block"
              >
                Home
              </Link>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Pages
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    About
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Contact
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Login
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Sign up
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Blog
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Foods
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Sale
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Marketing
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Investment
                  </a>
                </li>
              </ul>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
              >
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-8 max-lg:ml-auto">
          {/* login and register */}
          <Link to="/login" className="btn">
            Login
          </Link>

          <button onClick={handleToggleMenu} className={"lg:hidden"}>
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

    </header>
  );
};

export default Header;
```

---

## src/types/auth.ts

```ts
export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  name: string;
  email: string;
  password: string;
};
```

---

## src/styles/custom.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .nav-link {
    @apply text-base font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out;
  }

  .nav-button {
    @apply inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out;
  }

  .mobile-menu-button {
    @apply inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500;
  }

  .logo-text {
    @apply ml-2 text-xl font-bold text-gray-800;
  }

  .footer-heading {
    @apply text-sm font-semibold text-gray-400 uppercase tracking-wider;
  }

  .footer-link {
    @apply text-base text-gray-300 hover:text-white;
  }

  .social-link {
    @apply text-gray-400 hover:text-gray-300;
  }
}
```

---

