
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/test/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/test"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 433, hash: 'e4924d1dab07a48ae364c2563a6a45653b4e38bf01ccc54832a6883155040cf7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: 'b75ea49adc31008ea43a16453cd74dc94507daec23c1053c3e38db2c9e9c2fd1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21540, hash: '74200def6b7a46e8bdc8847f331cb248a982c38c0af961b5908b48dd4f01b259', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
