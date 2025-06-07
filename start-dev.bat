@echo off
echo Stopping any existing containers...
docker compose down

echo Building and starting containers...
docker compose up --build

pause
