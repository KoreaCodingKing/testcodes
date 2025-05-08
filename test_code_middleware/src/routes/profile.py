from fastapi import APIRouter
from fastapi.responses import ORJSONResponse

from src.models.profile import Profile, ProfileRes

router = APIRouter(
    prefix="/profile",
    tags=['profile']
)

@router.post("/prodfile", response_model=ProfileRes)
async def createUser(
    profile: Profile,
):
    print(profile)
    return ORJSONResponse(content=profile, status_code=200)