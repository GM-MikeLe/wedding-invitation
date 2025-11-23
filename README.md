# Wedding Invitation Website

A beautiful and elegant wedding invitation website built with Next.js, React, and Tailwind CSS.

## Features

- **Animated Envelope**: Interactive envelope animation that opens to reveal the invitation
- **Countdown Timer**: Real-time countdown to the wedding day
- **Responsive Design**: Optimized for mobile viewing (500px width)
- **Smooth Animations**: Slide and fade animations for elegant transitions
- **Image Gallery**: Beautiful couple photos
- **Location Details**: Wedding venue information with map link
- **Music Control**: Toggle background music on/off

## Getting Started

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Wedding Details

Edit `/app/page.tsx` to customize:

- **Guest Name**: Line 61 - Change "Tên khách mời"
- **Wedding Date**: Line 12 - Update `weddingDate` variable
- **Time and Date Display**: Line 67 - Update the displayed time and date
- **Lunar Date**: Line 70 - Update the Vietnamese lunar date
- **Venue Name**: Line 81 - Change "Resort Lan Rừng"
- **Venue Address**: Line 85 - Update the address
- **Map Link**: Line 90 - Update Google Maps URL

### Update Images

Replace the image URLs in `/app/page.tsx`:

- **Couple Photo**: Line 119 - Main wedding photo
- **Decorative Elements**: Lines 38-58 - Flower decorations
- **Bottom Decorations**: Lines 145-159 - Bottom decorative images

### Update Message

Edit the invitation message at line 100 in `/app/page.tsx`.

### Styling

- **Colors**: Edit `/tailwind.config.ts` to change color scheme
- **Fonts**: Update font families in `/app/globals.css`
- **Animations**: Modify animation keyframes in `/app/globals.css`

## Technology Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component
- **Animations**: CSS animations and transitions

## Project Structure

```
wedding-invitation/
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main page component
├── components/
│   ├── Countdown.tsx     # Countdown timer component
│   └── EnvelopeAnimation.tsx  # Envelope animation component
├── public/               # Static assets (if needed)
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Deployment

This project can be easily deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

## License

This project is open source and available for personal use.
