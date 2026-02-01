#!/bin/bash
# Health check script for CATE

API_URL=\

echo \"Checking CATE API health...\"

response=

if [ \ -eq 200 ]; then
    echo \"✅ API is healthy\"
    exit 0
else
    echo \"❌ API is down (HTTP \)\"
    exit 1
fi
