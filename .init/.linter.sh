#!/bin/bash
cd /home/kavia/workspace/code-generation/learnbridge-offline-education-platform-159970-159979/app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

