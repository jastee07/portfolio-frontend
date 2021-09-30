#!/usr/bin/env bash
set -eE

# default for development
dev_api="http://0.0.0.0:3000"

# set to API_URL env var or default if not present
api_url="${API_URL:-$dev_api}"

# create JSON data
json=$(cat <<-END
    {
        "API_URL": "$api_url"
    }
END
)

# safe it to config.json
echo "creating src/config.json"
echo "$json" > "src/config.json"