@echo off
:: Preview static-site on Windows using bundled Node server
if not exist preview-server.js (
  echo preview-server.js not found
  exit /b 1
)
node preview-server.js %1
