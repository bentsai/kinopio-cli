#!/usr/bin/env bash

source .kinopio

http POST https://api.kinopio.club/card "Authorization: $KINOPIO_API_KEY" spaceId=$KINOPIO_SPACE_ID name="$*"
