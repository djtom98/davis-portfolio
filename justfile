# davis-portfolio justfile
# Usage: just <recipe>

# List available recipes
default:
    @just --list

# Install dependencies
install:
    npm install

# Start dev server
dev:
    npm run dev

# Production build
build:
    npm run build

# Build and preview the static output locally
preview: build
    npx serve out -l 3001

# Type-check without emitting
typecheck:
    npx tsc --noEmit

# Lint
lint:
    npm run lint