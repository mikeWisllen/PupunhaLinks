import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'

import { LinksPage } from '@/features/links/LinksPage'

const rootRoute = createRootRoute({ component: Outlet })

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LinksPage,
})

// Qualquer caminho desconhecido cai na página de links.
const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({ routeTree, defaultNotFoundComponent: LinksPage })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
