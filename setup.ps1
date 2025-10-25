Write-Host ">>> Installing backend deps..." -ForegroundColor Cyan
Push-Location server
npm install
Pop-Location

Write-Host ">>> Installing frontend deps..." -ForegroundColor Cyan
Push-Location client
npm install
Pop-Location

Write-Host ">>> Starting backend (PORT=5000)" -ForegroundColor Cyan
Start-Process powershell -ArgumentList 'cd server; npm run dev'

Start-Sleep -Seconds 2
Write-Host ">>> Starting frontend (Vite on 5173)" -ForegroundColor Cyan
Start-Process powershell -ArgumentList 'cd client; npm run dev'