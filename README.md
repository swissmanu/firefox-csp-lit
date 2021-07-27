# Reproduction Example for [lit#2025](https://github.com/lit/lit/issues/2025)

## Usage

1. Start Docker container:

```
docker run --it -rm -p 3000:80 ghcr.io/swissmanu/firefox-csp-lit:latest
```

2. Access http://localhost:3000

## Build

```
yarn build
docker build -t demo ./
docker run --it rm -p 3000:80 demo
```

