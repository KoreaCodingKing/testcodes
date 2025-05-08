from fastapi import FastAPI
from fastapi.responses import ORJSONResponse
from src.routes import profile, question

app = FastAPI(default_response_class=ORJSONResponse)

app.include_router(profile.router)

@app.get("/")
async def main():
    return ORJSONResponse({"status": 200})
