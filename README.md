# AI-Powered Personal Health Assistant

A modern, intelligent health monitoring and wellness guidance application built with Next.js 15, FastAPI, and AI-powered insights.

## 🚀 Features

- **Health Monitoring**: Track vital signs, symptoms, and health metrics
- **AI Insights**: Get personalized health recommendations 
- **Smart Alerts**: Receive timely reminders for medications and checkups
- **Modern UI**: Built with Next.js 15 and TailwindCSS v4
- **Fast API**: High-performance backend with FastAPI
- **Type Safety**: Full TypeScript support

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.4.1** with App Router
- **React 19.1.0** with latest features
- **TypeScript 5** for type safety
- **TailwindCSS v4** for styling
- **Axios** for API communication

### Backend
- **FastAPI 0.116.1** for high-performance API
- **Pydantic 2.11.7** for data validation
- **Uvicorn 0.35.0** as ASGI server
- **Python 3.12** with modern async support

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- Python 3.12+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sanjaynarasim03/AI-Powered-Personal-Health-Assistant.git
   cd AI-Powered-Personal-Health-Assistant
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Setup Python backend**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

4. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Development

1. **Start both frontend and backend**
   ```bash
   npm run dev:full
   ```

2. **Or start individually:**
   
   **Frontend only:**
   ```bash
   npm run dev
   ```
   
   **Backend only:**
   ```bash
   npm run dev:backend
   # Or manually:
   source venv/bin/activate && uvicorn main:app --reload
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## 📁 Project Structure

```
AI-Powered-Personal-Health-Assistant/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── src/                   # Source utilities
│   └── utils/
├── public/                # Static assets
├── main.py               # FastAPI backend
├── requirements.txt      # Python dependencies
├── package.json          # Node.js dependencies
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── .env.example          # Environment variables template
└── venv/                 # Python virtual environment
```

## 🔧 Available Scripts

- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run start` - Start frontend production server
- `npm run lint` - Run ESLint
- `npm run check` - Run linting and build checks
- `npm run dev:backend` - Start backend development server
- `npm run dev:full` - Start both frontend and backend
- `npm run clean` - Clean build artifacts
- `npm run typecheck` - Run TypeScript checks

## 🏥 API Endpoints

- `GET /` - API information
- `GET /ping` - Health check
- `GET /health/status` - Service status
- `GET /health/insights` - Get health insights
- `POST /health/metrics` - Add health metric
- `GET /health/metrics/{type}` - Get specific metrics

## 🔄 Recent Upgrades (v2.0.0)

### ✅ Completed Upgrades
- ✅ Updated to Next.js 15.4.1 with App Router
- ✅ Upgraded to React 19.1.0
- ✅ Updated to TailwindCSS v4
- ✅ Upgraded FastAPI to 0.116.1
- ✅ Updated Pydantic to 2.11.7
- ✅ Python virtual environment recreated with Python 3.12
- ✅ Fixed font loading issues (removed Google Fonts dependency)
- ✅ Added comprehensive development scripts
- ✅ Enhanced backend with health-specific endpoints
- ✅ Updated UI to reflect health assistant purpose
- ✅ Added CORS support for frontend-backend communication
- ✅ Created requirements.txt for Python dependencies
- ✅ Updated project documentation
- ✅ Added environment configuration files
- ✅ Enhanced .gitignore for both Node.js and Python

### 🛡️ Security & Performance
- Zero npm vulnerabilities detected
- Latest security patches applied
- Modern async/await patterns throughout
- Type-safe API contracts with Pydantic
- CORS properly configured

## 🔮 Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- Real-time health monitoring with WebSockets
- Machine learning model integration
- Mobile app development
- Advanced data visualization
- Integration with wearable devices
- Multi-language support

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.
