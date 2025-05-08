from pydantic import BaseModel

class ProfileBody(BaseModel):
    name: str
    email: str
    age: int
    id: str
    
class ProfileRes(BaseModel):
    id: str
    name: str
    email: str
    age: int