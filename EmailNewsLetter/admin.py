# from fastapi import APIRouter, HTTPException
# from db import subscribers_collection
# from emailer import send_email

# router = APIRouter()

# @router.post("/send-newsletter")
# async def send_newsletter(subject: str, body: str):
#     subscribers = list(subscribers_collection.find({}))
    
#     if not subscribers:
#         raise HTTPException(status_code=404, detail="No subscribers found.")
    
#     failed = []
#     for sub in subscribers:
#         try:
#             send_email(sub["email"], subject, body)
#         except Exception as e:
#             print(f"Failed to send to {sub['email']}: {e}")
#             failed.append(sub["email"])
    
#     return {
#         "message": f"Newsletter sent to {len(subscribers) - len(failed)} subscribers.",
#         "failed": failed if failed else "None"
#     }

from fastapi import APIRouter, HTTPException, Depends, Form
from db import subscribers_collection
from emailer import send_email
from auth import verify_token, create_access_token, ADMIN_CREDENTIALS

router = APIRouter()

@router.post("/login")
async def login(username: str = Form(...), password: str = Form(...)):
    if username != ADMIN_CREDENTIALS["username"] or password != ADMIN_CREDENTIALS["password"]:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_access_token({"sub": username})
    return {"access_token": token, "token_type": "bearer"}

@router.post("/send-newsletter")
async def send_newsletter(subject: str = Form(...), body: str = Form(...), _: str = Depends(verify_token)):
    subscribers = list(subscribers_collection.find({}))
    
    if not subscribers:
        raise HTTPException(status_code=404, detail="No subscribers found.")
    
    failed = []
    for sub in subscribers:
        try:
            send_email(sub["email"], subject, body)
        except Exception as e:
            print(f"Failed to send to {sub['email']}: {e}")
            failed.append(sub["email"])
    
    return {
        "message": f"Newsletter sent to {len(subscribers) - len(failed)} subscribers.",
        "failed": failed if failed else "None"
    }
