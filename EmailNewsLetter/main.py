from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from models import SubscriberRequest
from db import subscribers_collection
from emailer import send_email
from admin import router as admin_router

app = FastAPI(
    title="TertiaryGuide Newsletter",
    description="Subscribe to our newsletter and stay updated with the latest news and promotions.",
    version="1.0.0",
    contact={
        "name": "TertiaryGuide",
        "url": "https://www.tertiaryguide.com",
        "email": "info@tertiaryguide.com",
    },
    license_info={
        "name": "MIT License",
        "url": "https://opensource.org/licenses/MIT",
    },
)

origins = [
    "http://localhost:5173",  # React frontend
    "http://localhost:8000",  # FastAPI backend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"], 
    
)

app.include_router(admin_router, prefix="/admin", tags=["Admin"])

@app.post("/subscribe", status_code=status.HTTP_201_CREATED)
async def subscribe(request: SubscriberRequest):
    email = request.email

    if subscribers_collection.find_one({"email": email}):
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Email already subscribed.")

    subscribers_collection.insert_one({"email": email}) 

    send_email(
        to_email=email,
        subject="Welcome to Our Newsletter!",
        body="Thanks for subscribing to our newsletter. You'll now get updates from us!"
    )

    return {"message": "Subscription successful."}
