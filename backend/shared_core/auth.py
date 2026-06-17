from fastapi import HTTPException, Security, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

security = HTTPBearer()

def get_current_user(credentials: HTTPAuthorizationCredentials = Security(security)):
    token = credentials.credentials
    # In a real scenario, we would validate the SSO OAuth token against the CRRU auth server
    if token == "mock-valid-token":
        return {"uid": "12345", "name": "Pornpot Sriprom", "role": "admin"}
    
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials or expired token",
        headers={"WWW-Authenticate": "Bearer"},
    )
