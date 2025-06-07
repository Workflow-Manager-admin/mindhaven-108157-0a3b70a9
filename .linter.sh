#!/bin/bash
cd /home/kavia/workspace/code-generation/mindhaven-108157-0a3b70a9/mindhaven_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

