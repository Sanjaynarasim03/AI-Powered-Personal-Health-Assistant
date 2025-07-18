from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

app = FastAPI(
    title="AI-Powered Personal Health Assistant API",
    description="Backend API for health monitoring and wellness guidance",
    version="2.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data models
class HealthMetric(BaseModel):
    metric_type: str
    value: float
    unit: str
    timestamp: datetime = datetime.now()

class HealthInsight(BaseModel):
    title: str
    description: str
    category: str
    priority: str

@app.get("/")
def read_root():
    return {"message": "AI-Powered Personal Health Assistant API v2.0"}

@app.get("/ping")
def ping():
    return {"message": "pong"}

@app.get("/health/status")
def health_status():
    return {
        "status": "healthy",
        "version": "2.0.0",
        "services": {
            "api": "running",
            "ai_engine": "ready",
            "database": "connected"
        }
    }

@app.get("/health/insights", response_model=List[HealthInsight])
def get_health_insights():
    return [
        HealthInsight(
            title="Stay Hydrated",
            description="Drink at least 8 glasses of water daily to maintain optimal health",
            category="nutrition",
            priority="medium"
        ),
        HealthInsight(
            title="Regular Exercise",
            description="Aim for 30 minutes of moderate exercise 5 days a week",
            category="fitness",
            priority="high"
        ),
        HealthInsight(
            title="Sleep Schedule",
            description="Maintain a consistent sleep schedule with 7-9 hours per night",
            category="sleep",
            priority="high"
        )
    ]

@app.post("/health/metrics")
def add_health_metric(metric: HealthMetric):
    return {
        "message": "Health metric recorded successfully",
        "metric": metric,
        "ai_analysis": "Normal range - continue monitoring"
    }

@app.get("/health/metrics/{metric_type}")
def get_health_metrics(metric_type: str):
    return {
        "metric_type": metric_type,
        "recent_values": [
            {"value": 120, "timestamp": "2024-01-15T10:00:00"},
            {"value": 118, "timestamp": "2024-01-14T10:00:00"},
            {"value": 122, "timestamp": "2024-01-13T10:00:00"}
        ],
        "trend": "stable",
        "recommendation": "Values are within normal range"
    }
