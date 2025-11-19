<div align="center">

# 🌲 Root Companion App

**Tactical Field Assistant for Root: The Woodland Game**

![Root Companion](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-AGPL_v3-blue?style=for-the-badge)

*A comprehensive digital companion for Leder Games' Root: The Woodland Game, featuring advanced setup tools, faction guides, and gameplay utilities to enhance your woodland conquest experience.*

[🚀 Live Demo](https://root-companion-app.vercel.app) • [📖 Documentation](#documentation) • [🎮 Play Now](#getting-started)

</div>

## 🎮 Features

### **Advanced Setup System**
- **AdSet Draft**: Full implementation of the Advanced Setup variant from Law of Root
  - Reverse-order drafting mechanics
  - Dynamic pool system with militant/insurgent factions
  - Automatic faction assignment and balance checking
- **Reach Calculator**: Traditional faction selection based on reach values
- **Map Configuration**: Support for Lake Map, Mountain Map, and custom variants
- **4-Step Setup Wizard**: Unified interface for all game configurations

### **Faction Management Tools**
- **Interactive Faction Guides**: Phase-by-phase walkthroughs for all 8 factions
  - Setup instructions with automatic state management
  - Strategy sections with Player Aid insights
  - Clickable rule references and keyword definitions
- **Automated Item Trackers**:
  - **Vagabond Manager**: Item states (ready/exhausted/damaged) with automatic refresh calculation
  - **Hundreds Hoard**: Real-time stat calculation based on Rule 14.2.4
  - **Legendary Forge**: Track crafted items (2+ wood cost) protected from battle
- **Hirelings System**: Complete hireling management with flip state support
  - **Promoted/Demoted Cards**: Toggle between active control markers and passive abilities
  - **Control Marker Lifecycle**: Automatic end-turn decay with visual alerts
  - **Faction Hirelings**: Special allies with unique availability rules

### **Marauder Expansion Support**
- **Landmarks Manager**: Complete landmark selection and management
  - **Black Market**: Track face-down market cards with reveal functionality
  - **Legendary Forge**: Item crafting and management system
  - **Random Selection**: Quick 1-2 landmark randomizer for balanced games
  - **State Persistence**: All landmark choices and counts saved automatically

### **Battle & Rules Tools**
- **Battle Simulator 5.0**: Advanced combat calculator with complete rule integration
  - **Faction-Specific Rules**: Automatic Keepers armor, Alliance defense, Vagabond caps
  - **Advanced Battle Cards**: Armorers, Sappers, Brutal Tactics, Command Warren
  - **Battle Conditions**: Defenseless, Ambush, and environmental modifiers
  - **Real-time Calculations**: Instant hit results with detailed rule explanations
- **Comprehensive Glossary**: 50+ keyword definitions with clickable links
- **Deck Management**: Card comparison and rule reference tools

### **User Experience**
- **Mobile-First Design**: Touch-friendly interface with responsive layout
- **Dark Theme**: Eye-friendly design with faction-based ambient backgrounds
- **Glassmorphism UI**: Modern aesthetic with smooth animations
- **Offline Capability**: Local storage for game state persistence

### **Custom Theming Support**
The app supports custom theming with wood backgrounds and custom fonts for personalized gameplay experience:

#### **Adding Custom Assets**

1. **Wood Background**:
   ```bash
   # Add your wood texture image
   cp your-wood-bg.jpg public/assets/bg-wood.jpg
   ```

2. **Custom Font**:
   ```bash
   # Add your custom font file
   cp your-font.ttf public/fonts/root-font.ttf
   ```

#### **Automatic Theming**
- **Background**: Wood texture automatically applies to all pages
- **Headings**: Custom font applied to h1-h6 elements for themed headers
- **Readability**: Body text remains clean sans-serif for optimal readability
- **Responsive**: Theme works seamlessly across all screen sizes

#### **Theme Features**
- **Global Coverage**: Background visible on dashboard, setup, and all tool pages
- **Smart Typography**: Custom fonts only for headings, preserving text readability
- **Visual Polish**: Subtle overlays and blur effects for professional appearance

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn** package manager

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/your-username/root-companion-app.git
cd root-companion-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser
Navigate to http://localhost:3000
```

### Production Deployment

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

---

## 🏗️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Framework** | Next.js 14 (App Router) | React framework with SSR |
| **Language** | TypeScript 5+ | Type-safe development |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Icons** | Lucide React | Beautiful icon library |
| **State Management** | React Hooks + LocalStorage | Client-side persistence |
| **Deployment** | Docker support | Containerized deployment |

---

## 📋 Table of Contents

- [🎮 Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🏗️ Tech Stack](#-️-tech-stack)
- [🎯 Supported Factions](#-supported-factions)
- [📚 Usage Guide](#-usage-guide)
- [⚙️ Configuration](#️-configuration)
- [🐳 Deployment](#-deployment)
- [📁 Project Structure](#-project-structure)
- [📄 License](#-license)
- [🤝 Contributing](#-contributing)

## 🐳 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your project in the [Vercel Dashboard](https://vercel.com)
3. Connect your repository and deploy automatically

### Docker Deployment

```bash
# Build Docker image
docker build -t root-companion-app .

# Run container
docker run -p 3000:3000 root-companion-app
```

### Manual Deployment

```bash
# Build static files
npm run build

# The build output is in the .next directory
# Configure your web server to serve the application
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Dashboard (bento grid)
│   ├── play/[factionId]/  # Dynamic faction pages
│   ├── setup/             # Game setup wizard
│   └── tools/             # Utility pages
├── components/            # Reusable UI components
│   ├── TurnGuide.tsx      # Faction guide component
│   ├── SetupWizard.tsx    # Reach calculator
│   ├── AdSetDraft.tsx     # Advanced setup draft
│   └── faction/           # Faction-specific tools
├── data/                  # Static data
│   ├── guides/            # Faction guide data
│   ├── factions.ts        # Faction definitions
│   └── law_snippets.ts    # Rule definitions
└── utils/                 # Utility functions
    └── adsetLogic.ts      # Draft logic
```

## 🎯 Supported Factions

| Faction | Expansion | Playstyle |
|---------|-----------|------------|
| **Marquise de Cat** | Core | Military expansion |
| **Eyrie Dynasties** | Core | Aerial dominance |
| **Woodland Alliance** | Core | Guerrilla warfare |
| **Vagabond** | Core | Adventurer/Neutral |
| **Riverfolk Company** | Core | Economic warfare |
| **Lizard Cult** | Core | Religious conversion |
| **Duchy** | Core | Underground expansion |
| **Corvid Conspiracy** | Core | Espionage & sabotage |
| **Lord of the Hundreds** | Marauder | Barbarian conquest |
| **Keepers in Iron** | Marauder | Law enforcement |

## 📚 Usage Guide

### **🎯 Getting Started**

1. **Launch the App**: Open the dashboard and explore available tools
2. **Setup Your Game**: Use the setup wizard for faction selection and map configuration
3. **Access Faction Guides**: Click on "Faction Guides" for detailed strategy walkthroughs
4. **Track Game State**: Use specialized tools for your chosen faction

### **🛠️ Core Tools**

- **⚔️ Battle Simulator**: Calculate combat outcomes with faction-specific rules
- **📚 Glossary**: Quick reference for 50+ game keywords and rules
- **👥 Hirelings Manager**: Track neutral faction control and flip states
- **🗺️ Landmarks Manager**: Manage Marauder expansion landmarks
- **🎴 Deck Management**: Card comparison and rule reference

### **📖 Faction-Specific Features**

Each faction has dedicated tools:
- **Vagabond**: Item state tracker (ready/exhausted/damaged) with automatic refresh
- **Hundreds Hoard**: Real-time stat calculation based on crafted items
- **All Factions**: Phase-by-phase guides with interactive rule references

## 🔧 Configuration

### Environment Variables

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### Docker Configuration

The application is optimized for Docker deployment with:
- Multi-stage builds for optimal image size
- Non-root user execution for security
- Standalone output for containerization
- Health checks and proper signal handling

## 📄 License & Contact

**Author:** Lukáš Walek (<l.walek@proton.me>)

**License:** This project is licensed under the **GNU Affero General Public License v3.0**.

See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Bug Reports & Feature Requests

- Report bugs via [GitHub Issues](https://github.com/your-username/root-companion-app/issues)
- Feature requests are welcome and encouraged
- Please include detailed reproduction steps for bug reports

## 🎯 Game Disclaimer

This is an unofficial companion app for Root: The Woodland Game by Leder Games.
All game mechanics, terminology, and intellectual property belong to Leder Games.

This application is designed to enhance the playing experience and is not affiliated with or endorsed by Leder Games.

---

**Built with ❤️ for the Root community**