# Student-Performance-Analytics-Portal-Week-3

# EduTrack — Student Performance Analytics Portal

---

## 📌 Project Overview

EduTrack is a web-based Student Performance Analytics Portal designed to help educators and administrators monitor student academic performance, manage student records, and generate performance reports.

---

## 📄 Pages

| File | Page | Description |
|------|------|-------------|
| `login.html` | Login | Functional login with session auth, links to register and forgot password |
| `register.html` | Register | Full registration form with password strength meter and localStorage |
| `forgot-password.html` | Forgot Password | Email-based reset request with localStorage simulation |
| `reset-password.html` | Reset Password | New password form with strength meter and confirmation |
| `index.html` | Home | Animated stats, recent activity, quick links |
| `dashboard.html` | Dashboard | Dynamic cards, progress bars, schedule, assignments table |
| `report.html` | Performance Report | Grade distribution, subject scores, term history |
| `students.html` | Student Records | Registration form, sortable table, search, filter chips, advanced search |
| `profile.html` | Student Profile | Dynamic profile page loaded from URL parameter |
| `about.html` | About | Mission, platform stats, features, team |
| `contact.html` | Contact | Contact form with validation |

---

## ✅ Week 1 Requirements

- [x] Home Page
- [x] About Page
- [x] Student Dashboard Layout
- [x] Performance Report Layout
- [x] Contact Page
- [x] Navigation Menu — Left Black Sidebar
- [x] Footer Section
- [x] Responsive Design
- [x] Modern Layout
- [x] Cards and Statistics Section
- [x] Tables for Student Records
- [x] Forms for Student Data Entry
- [x] Mobile-Friendly Navigation
- [x] Professional Color Scheme

---

## ✅ Week 2 Requirements

- [x] Functional Login Form
- [x] Form Validation using JavaScript
- [x] Dynamic Dashboard Cards with animated counters
- [x] Student Information Tables — 11 columns
- [x] Search and Filter Functionality
- [x] Improved Mobile Responsiveness
- [x] Interactive Navigation Menu

---

## ✅ Week 3 Requirements

- [x] Login and Registration Pages
- [x] Forgot Password and Reset Password UI
- [x] Store User Information using Local Storage
- [x] Dynamic Student Profile Pages
- [x] Student Performance Cards using JavaScript
- [x] Sorting and Advanced Search Features
- [x] Improved UI Animations and User Experience
- [x] Full Responsive Compatibility — Desktop, Tablet, Mobile

---

## ⚙️ Features

**Authentication System**
- Login with session-based auth using sessionStorage
- Registration with localStorage to save user accounts
- Forgot password flow with email capture
- Reset password with new password and confirm
- Password strength meter — Weak, Medium, Strong
- Show/hide password toggle on all password fields
- Auth guard on every page — auto redirect to login
- Sign Out button in sidebar

**Navigation**
- Black left sidebar with active page highlighting
- Hover tooltips on each sidebar link
- Badge showing student count
- Mobile hamburger menu with auto-close
- Mobile bottom navigation bar — 5 tabs
- Interactive nav with smooth animations

**Dynamic Dashboard**
- Animated number counters on all stat cards
- Animated progress bars and trend bars
- Color-coded trend indicators — green, amber, red
- Fade-in card animations on page load
- Hover lift effect on cards

**Student Records**
- 10 students with full data
- 11 column table
- Live search bar with row highlighting
- Status filter chip buttons — All, Active, New, Warning, At-Risk
- Advanced search panel — filter by department, year, GPA range
- Sortable columns — click any header to sort ascending or descending
- Empty state message when no results
- Record count updates dynamically
- Pagination bar
- View button opens dynamic Student Profile page
- New students saved to localStorage

**Student Profile Page**
- Loads dynamically based on URL parameter
- Shows full student info, performance cards, subject scores
- Recent activity feed
- Edit profile button

**Forms and Validation**
- Login — email format, password length, wrong credentials error
- Register — all fields, email format, password strength, password match, terms checkbox
- Forgot password — email format validation
- Reset password — password length, password match, strength meter
- Student registration — 10 fields with live validation
- Contact form — 4 required fields
- All errors clear live as you type

**Responsive Design**
- Desktop — full sidebar + content layout
- Tablet — narrower sidebar, grid adjusts
- Mobile — hidden sidebar with hamburger, bottom nav bar
- All grids stack to single column on mobile
- Tables scroll horizontally on mobile

---

## 📁 Folder Structure

```
edutrack-portal-week3/
├── login.html              # Login Page
├── register.html           # Registration Page
├── forgot-password.html    # Forgot Password Page
├── reset-password.html     # Reset Password Page
├── index.html              # Home Page
├── dashboard.html          # Student Dashboard
├── report.html             # Performance Report
├── students.html           # Student Records
├── profile.html            # Dynamic Student Profile
├── about.html              # About Page
├── contact.html            # Contact Page
├── css/
│   └── style.css           # All styles for entire project
└── js/
    ├── nav.js              # Sidebar, mobile, toast, modal
    ├── dashboard.js        # Animated counters and progress bars
    ├── students.js         # Form, search, filter, sort, localStorage
    └── contact.js          # Contact form validation
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, Flexbox, Grid, animations, responsive |
| JavaScript ES6 | Validation, DOM, auth, animations, sorting, localStorage |
| localStorage | Store registered users and student data |
| sessionStorage | Session-based login authentication |
| Google Fonts — Inter | Typography |
| VS Code | Development environment |
| GitHub | Version control and project hosting |

---

## 🔐 Authentication Flow

```
login.html ──────────────────────────────────────┐
    ↓ (correct credentials)                       │
sessionStorage.setItem('loggedIn', 'true')        │
    ↓                                             │
index.html → dashboard → students → report        │
    ↓ (Sign Out)                                  │
sessionStorage.removeItem('loggedIn')             │
    ↓                                             │
login.html ◄─────────────────────────────────────┘

register.html → localStorage.setItem('edutrack_users')
forgot-password.html → localStorage.setItem('edutrack_reset_email')
reset-password.html  → localStorage.setItem('edutrack_password')
```

---

## 📊 Student Profile

Click **View** on any student in the table to open their dynamic profile page. The profile loads data based on the student ID in the URL and shows:
- Personal information
- Performance cards — GPA, Attendance, Assignments, Rank, Courses
- Subject score progress bars
- Recent activity feed

---

## 👤 Author

| Field | Details |
|-------|---------|
| **Name** | *Zeeshan Haider* |
| **Institution** | *Abasyn University Islamabad Campus* |
| **Internship** | Web Development Internship — Week 3 @Codiora House (Private) Limited|
| **Project** | EduTrack Student Performance Analytics Portal |
| **Year** | 2026 |
