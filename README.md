## React Authentication with Supabase

A small exercise project built with **React-Vite** and **Supabase** to explore implementing user authentication using **OAuth providers** such as **Google** and **GitHub**.

This project demonstrates how to:

- Configure Supabase authentication.
- Connect OAuth providers (Google and GitHub).

---

### Features

- Sign in with Google or GitHub using Supabase Auth.
- Simple session handling and logout.
- Environment variable management for Supabase credentials.

---

### Setup Instructions

#### 1. Clone the repository

```bash
git clone https://github.com/dumitrescuvlad/React-Authentication-Supabase.git
cd React-Authentication-Supabase
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Configure environment variables

Create a `.env` file in the project root with the following:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these keys in your **Supabase Dashboard** under **Project Settings → API**.

#### 4. Set up OAuth providers

- **Google:** Go to [Google Cloud Console](https://console.cloud.google.com), enable OAuth, and add redirect URLs (e.g. `http://localhost:5173/`).
- **GitHub:** Go to [GitHub Developer Settings → OAuth Apps](https://github.com/settings/developers) and register your app with the same redirect URL.

Enable both providers in your **Supabase Dashboard → Authentication → Providers**.

#### 5. Run the app

```bash
npm run dev
```

Then open the webpage in your browser.

---
