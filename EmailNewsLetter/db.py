from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Get Mongo URI from .env
MONGO_URI = os.getenv('MONGO_URI')

# Validate Mongo URI
if not MONGO_URI:
    raise ValueError("MONGO_URI is not set in .env file")

# Create MongoDB client
client = MongoClient(MONGO_URI)

# Select database and collection
db = client["newsletter_db"]
subscribers_collection = db["subscribers"]
