import React from 'react'
import loadable from '@loadable/component'
import Loading from '@src/components/stateless/Loading'

const SignIn = loadable(() => import('../pages/signin'), { fallback: <Loading /> })
const SignUp = loadable(() => import('../pages/signup'), { fallback: <Loading /> })
const Layout = loadable(() => import('../pages/layout'), { fallback: <Loading /> })
const Home = loadable(() => import('../pages/home'), { fallback: <Loading /> })
const Demo = loadable(() => import('../pages/demo'), { fallback: <Loading /> })
const Coupons = loadable(() => import('../pages/coupons'), { fallback: <Loading /> })
const CouponsHome = loadable(() => import('../pages/coupons/home'), { fallback: <Loading /> })
const CouponsAdd = loadable(() => import('../pages/coupons/add'), { fallback: <Loading /> })
const CouponsEdit = loadable(() => import('../pages/coupons/edit'), { fallback: <Loading /> })
const CouponsDetail = loadable(() => import('../pages/coupons/detail'), { fallback: <Loading /> })
const Product = loadable(() => import('../pages/product'), { fallback: <Loading /> })
const Error = loadable(() => import('../pages/error'), { fallback: <Loading /> })
const Dashboard = loadable(() => import('../pages/dashboard'), { fallback: <Loading /> })
const ParallaxVert = loadable(() => import('../pages/parallax'), { fallback: <Loading /> })
const DemoChoroplethMap = loadable(() => import('../pages/chinamap'), { fallback: <Loading /> })
const QrCode = loadable(() => import('../pages/qrGenerate'), { fallback: <Loading /> })
const ReactPlayerDemo = loadable(() => import('../pages/reactPlayer'), { fallback: <Loading /> })
const Landing = loadable(() => import('../pages/landing'), { fallback: <Loading /> })
const NoMatch = loadable(() => import('../components/stateless/NoMatch'), { fallback: <Loading /> })
// import basicRouter from './basic'
// import couponsRouter from './coupons'
// import productRouter from './product'

const rootRouter = [
  {
    path: '/',
    name: '首页',
    key: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        name: '首页',
        key: '/',
        element: <Home />,
      },
      {
        index: false,
        path: 'demo',
        name: 'Demo',
        key: '/demo',
        element: <Demo />,
      },
      {
        index: false,
        path: 'parallax',
        name: 'Parallax',
        key: '/parallax',
        element: <ParallaxVert />,
      },
      {
        index: false,
        path: 'qrcode',
        name: 'QrGenerate',
        key: '/qrcode',
        element: <QrCode />,
      },
      {
        index: false,
        path: 'player',
        name: 'React Player',
        key: '/player',
        element: <ReactPlayerDemo />,
      },
      {
        index: false,
        path: 'choropleth',
        name: 'AntV',
        key: '/choropleth',
        element: <DemoChoroplethMap />,
      },
      {
        index: false,
        path: 'coupons',
        name: '前端技术栈',
        isSubMenu: true, // 是否是子菜单 proSecNav
        key: '/coupons',
        element: <Coupons />,
        children: [
          {
            index: false,
            path: 'home',
            name: 'React',
            key: '/coupons/home',
            element: <CouponsHome />,
          },
          {
            index: false,
            name: 'Vue',
            path: 'add',
            key: '/coupons/add',
            element: <CouponsAdd />,
          },
          {
            index: false,
            path: 'edit',
            name: 'Angular',
            key: '/coupons/edit',
            element: <CouponsEdit />,
          },
          {
            index: false,
            path: 'detail',
            name: 'Node',
            key: '/coupons/detail',
            element: <CouponsDetail />,
          },
        ],
      },
      {
        index: false,
        path: 'product',
        name: '后端技术栈',
        key: '/product',
        element: <Product />,
      },
      {
        index: false,
        path: 'error',
        name: 'Error',
        key: '/error',
        element: <Error />,
      },
      {
        path: '*',
        name: 'No Match',
        key: '*',
        element: <NoMatch />,
      },
    ],
  },
  {
    index: false,
    path: 'signin',
    name: '登录',
    key: '/signin',
    element: <SignIn />,
  },
  {
    index: false,
    path: 'signup',
    name: '注册',
    key: '/signup',
    element: <SignUp />,
  },
  {
    index: false,
    path: 'dashboard/*',
    name: 'Dashboard',
    key: '/dashboard',
    element: <Dashboard />,
  },
  {
    index: false,
    path: 'landing',
    name: 'Landing Page',
    key: '/landing',
    element: <Landing />,
  },
  // {
  //   path: '*',
  //   name: 'No Match',
  //   element: <NoMatch />,
  // },
]

export default rootRouter
