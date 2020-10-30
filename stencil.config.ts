import { Config } from '@stencil/core';

export const config: Config = {
  //写不好会404,真不知道为啥
  namespace: 'test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  bundles: [
    { components: ['stencil-test'] }
  ],
};
