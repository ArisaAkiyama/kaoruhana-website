# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-12-31

### Added
- **Story Section** - New section featuring:
  - Episode tabs for all 13 episodes
  - Animated filmstrip displaying episode screenshots
  - YouTube video player integration for each episode
  - Episode preview card with rotating play button (matching Movie Section design)
  - Synopsis and staff information display
- **Episode Images** - Added image folders (id_1 through id_13) with screenshots for each episode

### Changed
- Episode preview card now uses Movie Section design with:
  - Larger card (600px, 16:9 aspect ratio)
  - Hover effects with shadow and lift animation
  - Play icon with rotating dashed circle

## [1.0.0] - 2025-12-29

### Added
- **Loading Screen** - Animated logo entrance with progress bar
- **Hero Slider** - Ken Burns effect background with fade animations
- **Navbar** - Auto-hide functionality with random color hover effect
- **Movie Section** - Minimal clean slider design with:
  - Single centered slide
  - Rotating play button with dashed circle and star
  - Slide counter (01/05)
  - Vue transition animations
- **Character Carousel** - Interactive character showcase with:
  - Expression images
  - STAMP animation for headers
  - Responsive mobile layout
- **News Section** - Latest anime news grid
- **Gallery Section** - Image gallery with lightbox viewer
- **Star Animation** - Floating stars background effect
- **Footer** - Social links and copyright

### Responsive Design
- Multiple breakpoints for tablet and mobile
- Hidden decorative elements on small screens
- Optimized layouts for all device sizes

### Technical
- Vue.js 3 with Composition API
- GSAP animations throughout
- Custom CSS with glassmorphism effects
- YouTube video integration
