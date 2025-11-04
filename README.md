📱 React Native App (Expo Go)

A React Native mobile application built using Expo, providing a fast, modern development experience with cross-platform compatibility for both iOS and Android.

🚀 Tech Stack

⚛️ React Native — Cross-platform app framework

🧰 Expo — Development & build toolchain

💅 TypeScript / JavaScript — Strongly-typed component logic

🎨 React Native Safe Area Context — Handle device notches safely

🌈 Custom Theme System — Reusable typography, colors, spacing, layout

🏗️ Project Structure
ProjectName/
├── App.tsx # App entry point
├── package.json
├── tsconfig.json
│
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── typography/ # Text components (PrimaryTitle, etc.)
│ │ └── OtpInput.tsx # Custom OTP input component
│ │
│ ├── screens/ # App screens (e.g., OtpScreen)
│ │ └── OtpScreen.tsx
│ │
│ ├── theme/ # Centralized theme (colors, spacing, typography)
│ │ ├── colors.ts
│ │
│ ├── utils/ # Helpers (e.g., responsive scaling)
│ │ └── responsive.ts

⚙️ Prerequisites

Before you begin, make sure you have the following installed:

Node.js (v18 or newer) → https://nodejs.org

Expo CLI →

npm install -g expo-cli

Expo Go App installed on your phone:

📱 iOS → App Store

🤖 Android → Google Play

🧩 Installation

Clone this repository:

git clone https://github.com/Gaurav-Barde/bootcamp-otp
cd your-repo-name

Install dependencies:

npm install

# or

yarn install

Start the Expo development server:

npx expo start

This will open the Expo Dev Tools in your browser.

📲 Run the App

After running npx expo start, you’ll see a QR code in your terminal or browser.

For iOS:
Scan it with your iPhone camera or Expo Go app.

For Android:
Open Expo Go → Tap “Scan QR Code”.

💡 The app will automatically reload when you edit the code.
