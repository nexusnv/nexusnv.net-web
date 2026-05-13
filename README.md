# NexusNV Web

Simple placeholder website for [NexusNV](https://github.com/nexusnv), owned by
[Azahari Zaman](https://github.com/azaharizaman).

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

```bash
npm run lint
npm run build
```

## Deployment

This repository includes a production `Dockerfile` and a GitHub Actions workflow at `.github/workflows/deploy.yml`.

### GitHub Secrets

The deployment workflow requires the following secrets:

- `SSH_HOST` — Cloudflare tunnel host address
- `SSH_PORT` — SSH port on the remote target
- `SSH_USERNAME` — SSH username for the remote server
- `SSH_PRIVATE_KEY_FILENAME` — filename passed to the runner for the private key
- `SSH_PRIVATE_KEY_VALUE` — private SSH key contents
- `REMOTE_APP_PATH` — remote directory where the app is deployed
- `CONTAINER_NAME` — Docker container/image name used on remote host
- `SERVICE_TOKEN_ID` — optional Cloudflare service token ID
- `SERVICE_TOKEN_SECRET` — optional Cloudflare service token secret

### Portainer stack file

A Portainer stack file is also included at `portainer-stack.yml` for deploying the site with:

- image `nexusnv-web:latest`
- container name `nexusnv-web`
- ports `3000:3000`
- restart policy `always`

### Build and deployment flow

1. Push changes to `main`.
2. GitHub Actions runs lint and `npm run build`.
3. The Cloudflare SSH action connects through the tunnel.
4. The remote server builds the Docker image and restarts the container.
