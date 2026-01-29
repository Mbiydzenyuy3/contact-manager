# KITH - Contact Manager

<div align="center">
  <img src="./public/logo.png" width="200" alt="KITH Logo">
</div>

<p align="center">
  <strong>Never forget how you met.</strong>
</p>

<p align="center">
  KITH is a modern contact management application that helps you keep track of your professional and personal connections. Remember the context of how you met someone, store their contact details, and organize them by groups for easy access.
</p>

<p align="center">
  <a href="https://contact-manager-app-kith.vercel.app/"> Live Demo</a> •
  <a href="https://github.com/Mbiydzenyuy3/contact-manager"> Repository</a>
</p>

## ✨ Features

- **User Authentication**: Secure login and registration using Supabase
- **Contact Management**: Add, edit, delete, and search contacts
- **Contact Parsing**: Paste email signatures or LinkedIn profiles to automatically extract contact information
- **Group Organization**: Categorize contacts into groups (Professional, Personal, Business, Family, Friends)
- **Context Tracking**: Store how and where you met each contact
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Progressive Web App (PWA)**: Installable and works offline
- **Real-time Sync**: Data synchronized across devices via Supabase

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **State Management**: Redux Toolkit
- **Backend**: Supabase (Database & Authentication)
- **Styling**: Tailwind CSS
- **Forms**: Formik with Yup validation
- **Animations**: Framer Motion
- **Icons**: Heroicons, React Icons
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Vercel

## 🚀 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git

### Clone the Repository

```bash
git clone https://github.com/Mbiydzenyuy3/contact-manager.git
cd contact-manager
```

### Install Dependencies

```bash
npm install
```

### Environment Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Copy your Supabase URL and anon key
3. Create a `.env` file in the root directory and add:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📖 Usage

1. **Sign Up/Login**: Create an account or log in to access your contacts
2. **Add Contacts**: Click "Add Contact" to create new entries with name, email, phone, group, and context
3. **Parse Contacts**: On the home page, paste email signatures or contact info to automatically extract details
4. **Search & Filter**: Use the search bar and group filter to find specific contacts
5. **Edit/Delete**: Manage your contacts with edit and delete options

## 🔗 Links

- **Repository**: [https://github.com/Mbiydzenyuy3/contact-manager](https://github.com/Mbiydzenyuy3/contact-manager)
- **Live Demo**: [https://contact-manager-app-virid.vercel.app/](https://contact-manager-app-virid.vercel.app/)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write clear, concise commit messages
- Test your changes thoroughly
- Update documentation as needed
