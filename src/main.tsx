import { ViteReactSSG } from 'vite-react-ssg'
import type { RouteRecord } from 'vite-react-ssg'
import '@fontsource/dm-serif-display/latin-400.css'
import '@fontsource-variable/montserrat/wght.css'
import './styles.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Privacy from './pages/Privacy'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/components/Layout.tsx',
    children: [
      { index: true, element: <Home />, entry: 'src/pages/Home.tsx' },
      { path: 'privacidade', element: <Privacy />, entry: 'src/pages/Privacy.tsx' },
    ],
  },
]

export const createRoot = ViteReactSSG({ routes })
