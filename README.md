# Some Kinopio scripts

## Shell script for adding a card

### Requirements

```
brew install httpie
```

### Usage

Set `KINOPIO_API_KEY` and `KINOPIO_SPACE_ID` inside `.kinopio`

```bash
./ko-create-card.sh <card name>
```

## Make a space directory

This adds a card for every space with a link to the space. It uses needle.

```bash
yarn
./kinopio-directory.js
```
