FROM python:3.14-rc-slim

WORKDIR /app

# Install system dependencies for postgresql compiling if needed
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8001

CMD ["uvicorn", "academic_service.main:app", "--host", "0.0.0.0", "--port", "8001"]
