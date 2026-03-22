export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  imageUrl: string
  githubUrl: string
  demoUrl: string | null
  tags: string[]
  date: string
  featured?: boolean
}

export const allProjects: Project[] = [
  {
    id: "gold-trading-algorithm",
    title: "Gold Trading Algorithm",
    description:
      "A fully backtested algorithmic trading system for gold futures with Monte Carlo simulation, prop firm analysis, and live Telegram signals.",
    longDescription:
      "Built an end-to-end algorithmic trading system in Python targeting gold futures. The system uses a custom scoring model based on technical indicators to generate daily trade signals. I implemented a full OHLC-realistic backtester that distinguishes ambiguous trades from clear wins/losses, achieving a validated 21–31% return over two years with a 1.15 Sharpe ratio. The system includes Monte Carlo simulation (10,000 runs) showing a 75.9% prop firm evaluation pass rate, with an expected value of +$1,107 per $130 evaluation. Features include live signal generation via the Telegram Bot API, stress testing across multiple risk parameters, and detailed outcome distribution analysis. The entire pipeline runs from a single CLI with flags for backtest, realistic mode, Monte Carlo, prop firm sizing, and live trading.",
    imageUrl: "/images/gold-algo.png",
    githubUrl: "https://github.com/SergioWater/Algo",
    demoUrl: null,
    tags: ["Python", "Algorithmic Trading", "Monte Carlo", "Telegram API", "Financial Engineering"],
    date: "2026-03-19",
    featured: true,
  },
  {
    id: "statboard",
    title: "STATBOARD — AI Sports Leaderboard",
    description:
      "A real-time AI-powered leaderboard system for indoor sportsplexes, using computer vision and UWB wristbands to auto-track player stats.",
    longDescription:
      "STATBOARD is a startup concept I designed and prototyped that brings real-time stat tracking to indoor sports facilities like soccer and hockey arenas. The system uses computer vision (YOLO-based player detection) combined with UWB wristband IDs to automatically identify players and track their performance metrics — goals, assists, distance covered, speed, and positioning. I built a web prototype for the leaderboard display and created a full business pitch including market analysis, revenue projections, and technical architecture. The platform is designed to integrate with existing facility infrastructure and provide both players and facility owners with actionable performance data.",
    imageUrl: "/images/statboard.png",
    githubUrl: "https://github.com/SergioWater",
    demoUrl: null,
    tags: ["Python", "Computer Vision", "YOLO", "UWB", "Startup", "AI"],
    date: "2026-03-22",
    featured: true,
  },
  {
    id: "soccer-video-analysis",
    title: "Soccer Video Analysis Pipeline",
    description:
      "ML pipeline using YOLO and SoccerNet data to track players, detect behaviors, and analyze full 90-minute soccer matches.",
    longDescription:
      "Built a complete machine learning pipeline for soccer video understanding using the SoccerNet tracking dataset. The system trains a YOLO model for player detection, runs multi-object tracking (ByteTrack) to maintain consistent player IDs across frames, and performs behavior analysis by counting players within defined regions of interest (ROIs). The pipeline processes both 30-second clips and full 45-minute halves, outputting frame-level tracking data and behavior counts. I implemented evaluation metrics including HOTA@0.5 for tracking accuracy, MAE and nMAE for behavior counting, and PTBS for temporal boundary detection. The entire workflow was developed with structured workspace rules for AI-assisted development using Antigravity IDE.",
    imageUrl: "/images/soccer-analysis.png",
    githubUrl: "https://github.com/SergioWater",
    demoUrl: null,
    tags: ["Python", "YOLO", "Computer Vision", "Machine Learning", "SoccerNet"],
    date: "2026-03-11",
    featured: true,
  },
  {
    id: "roblox-game",
    title: "Roblox Survival Game",
    description:
      "A Roblox survival tycoon game with procedural tower generation, custom character physics, and drop zone mechanics built in Luau.",
    longDescription:
      "Designed and developed a Roblox survival tycoon game featuring procedural tower generation with climb lanes, boulder hazards, and a cylindrical drop shaft with multiplier zones. I wrote custom character movement scripts with tuned WalkSpeed and air control for precise gameplay feel. The game includes procedural geometry generation (helix spirals, titan stairs, torus structures) using CFrame math, a tycoon economy system with server-validated payouts, and VIP monetization through gamepasses. Built entirely in Luau with Roblox Studio, utilizing DataStoreService for persistent player data and RemoteEvents for secure client-server communication.",
    imageUrl: "/images/roblox-game.png",
    githubUrl: "https://github.com/SergioWater/rectangledropzone",
    demoUrl: null,
    tags: ["Luau", "Roblox Studio", "Game Development", "Procedural Generation"],
    date: "2026-02-15",
    featured: false,
  },
  {
    id: "police-data-with-threads",
    title: "Police Data with Threads",
    description:
      "A multi-threaded C program that analyzes police response times, utilizing mutex locks to protect critical sections during statistical calculations on 500K+ records.",
    longDescription:
      "This assignment required writing a C program to analyze police data, implementing multi-threaded processing of fixed-length records. The program processes a header file that specifies field sizes, reads data records, and then performs statistical analysis of police response times across different categories and districts. I designed and implemented a multi-threaded C program that analyzes police response times, utilizing mutex locks to protect critical sections during statistical calculations on 500K+ records. I engineered a data processing system with batch reading that effectively distributed workload across threads, reducing memory usage while maintaining thread safety through synchronization. Additionally, I developed statistical analysis functionality calculating min/max, quartiles, and standard deviation across police districts, implementing outlier detection using IQR methodology for accurate response time analysis.",
    imageUrl: "/images/thread-police.png",
    githubUrl: "https://github.com/SergioWater/Police-Data-with-Threads",
    demoUrl: null,
    tags: ["C", "Multi-threading", "Data Analysis", "Performance Optimization", "Mutex Locks"],
    date: "2023-09-15",
    featured: false,
  },
  {
    id: "autonomous-vehicle-simulation",
    title: "Advanced Autonomous Vehicle Simulation",
    description:
      "A sophisticated simulation environment for testing autonomous vehicle algorithms with realistic physics and sensor models, featuring NEAT algorithms.",
    longDescription:
      "The Advanced Autonomous Vehicle Simulation is a comprehensive platform I developed for testing and validating autonomous driving algorithms in a controlled virtual environment. I developed advanced collision detection and radar sensor capabilities and integrated NEAT algorithms to boost neural network performance — resulting in a 15% increase in autonomous driving accuracy. I enhanced an open-source vehicle simulator by upgrading its resolution to 4K (3840x2160) and refining vehicle dynamics for greater realism. The simulation features realistic physics simulations, accurate sensor models (including LIDAR, radar, and cameras), and various environmental conditions to test vehicle behavior. This project demonstrates my expertise in simulation development, computer vision, and artificial intelligence applied to autonomous systems.",
    imageUrl: "/images/ai_neat_car.png",
    githubUrl: "https://github.com/SergioWater/ai_neat_car",
    demoUrl: null,
    tags: ["Python", "Machine Learning", "Computer Vision", "NEAT", "Simulation"],
    date: "2022-12-10",
    featured: true,
  },
  {
    id: "multiplayer-uno",
    title: "Online Multiplayer Uno",
    description:
      "A real-time online multiplayer Uno card game built as a team project with live game state synchronization.",
    longDescription:
      "Collaborated with a team to build an online multiplayer Uno card game featuring real-time game state synchronization across multiple players. The application handles turn-based logic, card validation, special card effects (Skip, Reverse, Draw Two, Wild, Wild Draw Four), and player lobby management. We implemented WebSocket connections for real-time updates so all players see card plays instantly. The project demonstrates collaborative software development practices including version control workflows, task delegation, and code review. Built with a focus on clean game state management and responsive UI that works across different screen sizes.",
    imageUrl: "/images/uno-game.png",
    githubUrl: "https://github.com/SergioWater/project-team-dj",
    demoUrl: null,
    tags: ["JavaScript", "WebSockets", "Multiplayer", "Team Project"],
    date: "2024-10-15",
    featured: false,
  },
  {
    id: "automatic-note",
    title: "Automatic Note",
    description:
      "An application using Python and Whisper API to transcribe audio in real-time with multi-threaded audio capture.",
    longDescription:
      "Automatic Note is an innovative application I created using Python and the Whisper API to transcribe audio and print it to a text file. I engineered a multi-threaded audio capture system using PyAudio and a custom Tee class to concurrently log real-time terminal output and session timestamps, ensuring streamlined debugging and session management. The application automatically processes audio streams, handles silence detection, and outputs clean transcriptions. This project showcases my skills in working with AI APIs, multi-threaded Python programming, and building practical developer tools.",
    imageUrl: "/images/real-time-audio-recorder.png",
    githubUrl: "https://github.com/SergioWater/real-time-audio-recorder",
    demoUrl: null,
    tags: ["Python", "Whisper API", "Multi-threading", "AI", "Audio Processing"],
    date: "2025-01-15",
    featured: false,
  },
  {
    id: "discord-clone",
    title: "Discord Clone",
    description:
      "A recreation of the Discord chat application with real-time messaging, channel creation, and user authentication.",
    longDescription:
      "This Discord clone project was built to showcase my ability to create complex, interactive user interfaces with real-time functionality. The application features user authentication, channel creation, direct messaging, and voice chat capabilities. I implemented WebSocket connections for real-time updates and used React for the frontend interface. The project demonstrates my understanding of modern web development practices and my ability to recreate complex applications.",
    imageUrl: "/images/discord-clone.png",
    githubUrl: "https://github.com/SergioWater/Discord-Clone",
    demoUrl: null,
    tags: ["React", "Socket.io", "Tailwind CSS", "Firebase"],
    date: "2023-05-15",
    featured: false,
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    description:
      "A replica of the Netflix interface with responsive layouts and TMDB API integration for real movie data.",
    longDescription:
      "This Netflix clone project demonstrates my frontend development skills and my ability to work with external APIs. The application features a responsive design that mimics the Netflix user interface, with movie and TV show listings, search functionality, and user authentication. I integrated with The Movie Database (TMDB) API to fetch real movie data and implemented custom video players for trailers. The project showcases my attention to detail in recreating complex user interfaces.",
    imageUrl: "/images/netflix-clone.png",
    githubUrl: "https://github.com/SergioWater/NetflixClone",
    demoUrl: null,
    tags: ["React", "API Integration", "CSS", "TMDB API"],
    date: "2023-03-10",
    featured: false,
  },
  {
    id: "crypto-price",
    title: "Crypto Price Tracker",
    description:
      "A real-time cryptocurrency price tracker with interactive charts and portfolio tracking using CoinGecko API.",
    longDescription:
      "The Crypto Price project is a real-time cryptocurrency tracking application that provides users with up-to-date information on cryptocurrency prices, market caps, and trading volumes. The application features interactive charts built with Chart.js, price alerts, and portfolio tracking capabilities. I integrated with the CoinGecko API for reliable cryptocurrency data. This project showcases my skills in working with complex financial data and creating intuitive data visualizations.",
    imageUrl: "/images/crypto-price.png",
    githubUrl: "https://github.com/SergioWater/cryptoPrice",
    demoUrl: null,
    tags: ["JavaScript", "Chart.js", "CoinGecko API", "Finance"],
    date: "2023-01-20",
    featured: false,
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A weather application providing real-time weather data for any location with geolocation support.",
    longDescription:
      "The Weather App is a responsive web application that provides users with accurate, real-time weather information for any location worldwide. The app features current weather conditions, hourly and daily forecasts, and location-based weather detection. I implemented geolocation services to automatically detect the user's location and integrated with the OpenWeather API for reliable weather data. This project showcases my skills in creating practical, user-friendly applications.",
    imageUrl: "/images/weather-app.png",
    githubUrl: "https://github.com/SergioWater/WeatherApp",
    demoUrl: null,
    tags: ["React", "OpenWeather API", "Geolocation"],
    date: "2022-11-05",
    featured: false,
  },
]

export const featuredProjects = allProjects.filter((p) => p.featured)
