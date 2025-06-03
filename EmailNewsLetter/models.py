from pydantic import BaseModel, EmailStr

class SubscriberRequest(BaseModel):
    email: EmailStr
