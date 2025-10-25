#!/usr/bin/env bash
set -e

echo ">>> Installing backend deps..."
cd server
npm install
cd ..

echo ">>> Installing frontend deps..."
cd client
npm install
cd ..

echo ">>> Starting backend (PORT=5000)"
( cd server && npm run dev ) &

sleep 2
echo ">>> Starting frontend (Vite on 5173)"
( cd client && npm run dev )