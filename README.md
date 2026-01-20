# Echo Assistant

A monorepo for the Echo Assistant project, built with Next.js, Convex, and Vapi AI.

## Project Structure

This project uses [Turbo](https://turbo.build/) for monorepo management and [pnpm](https://pnpm.io/) for dependency management.

```text
.
├── apps/
│   ├── web/          # Main web application (Next.js, Clerk, Convex)
│   └── widget/       # Widget application (Next.js, Vapi AI)
└── packages/
    ├── backend/      # Convex backend functions and schema
    ├── ui/           # Shared UI components (shadcn/ui)
    ├── math/         # Shared utility functions
    ├── eslint-config/# Shared ESLint configurations
    └── typescript-config/ # Shared TypeScript configurations
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database / Backend**: Convex
- **Authentication**: Clerk
- **AI / Voice**: Vapi AI (in `widget` app)
- **UI Components**: shadcn/ui
- **Monitoring**: Sentry
- **Package Manager**: pnpm

## Getting Started

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Environment Setup**:

    Ensure you have the necessary environment variables set up in your applications (Convex, Clerk, Vapi).

3. **Run Development Server**:

   To run the entire monorepo:

   ```bash
   pnpm dev
   ```

   This will start all applications and packages in development mode via Turbo.

## Commands

- `pnpm dev`: Start development servers.
- `pnpm build`: Build all applications and packages.
- `pnpm lint`: Lint code across the workspace.
- `pnpm format`: Format code using Prettier.

## Packages

### Apps
- **web**: The primary dashboard and interface.
- **widget**: A widget implementation leveraging Vapi AI for voice interactions.

### Shared Packages
- **@workspace/ui**: Reusable React components.
- **@workspace/backend**: Convex backend definitions.
- **@workspace/math**: Utility functions.
