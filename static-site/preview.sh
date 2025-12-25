#!/usr/bin/env bash
# Preview static-site using bundled Node server
if [ ! -f preview-server.js ]; then
  echo "preview-server.js not found"
  exit 1
fi
PORT=${1:-5000}
node preview-server.js "$PORT"
