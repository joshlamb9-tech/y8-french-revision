#!/bin/bash

# Start local web server for Y8 French Revision site
# This is needed because the random sentence generator uses JavaScript fetch()
# which requires HTTP protocol (not file://)

echo "🚀 Starting Y8 French Revision site server..."
echo "📍 Site will be available at: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

cd "$(dirname "$0")"
python3 -m http.server 8000
