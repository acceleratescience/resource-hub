FROM mcr.microsoft.com/devcontainers/javascript-node:18

# Install additional tools that might be helpful
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends git-lfs \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install global node packages
RUN npm install -g svelte-check npm-check-updates

# Set up fish shell (optional - remove if not needed)
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends fish \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*