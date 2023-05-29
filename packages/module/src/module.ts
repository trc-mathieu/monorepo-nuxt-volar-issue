import { existsSync } from 'node:fs'
import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  resolvePath,
  useLogger,
} from '@nuxt/kit'
import defuFunc from 'defu'
import vuetify from 'vite-plugin-vuetify'
import { relative } from 'pathe'

import type { ConsolaInstance } from 'consola'
import type { ThemeDefinition } from 'vuetify/lib/framework.mjs'

const MODULE_NAME = 'module1'
const CONFIG_KEY = 'module'


export default defineNuxtModule({
  meta: {
    name: MODULE_NAME,
    configKey: CONFIG_KEY,
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults,
  async setup(moduleOptions, nuxt) {
    const resolver = createResolver(import.meta.url)
    const logger = useLogger(MODULE_NAME)
    if (!moduleOptions.isEnabled) {
      logger.info(`Skipping ${MODULE_NAME} setup, as module is disabled`)
      return
    }

    logger.info(`Registering ${MODULE_NAME} setup, as module is enabled`)
  
   
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    logger.success(`Module ${MODULE_NAME}'s registration done`)
  },
})