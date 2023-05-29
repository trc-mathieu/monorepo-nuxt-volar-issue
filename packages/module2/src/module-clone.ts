import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  useLogger,
} from '@nuxt/kit'

const MODULE_NAME = 'nuxt-module2'
const CONFIG_KEY = 'module2'


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
  async setup(moduleOptions, nuxt) {
    const resolver = createResolver(import.meta.url)
    const logger = useLogger(MODULE_NAME)


    logger.info(`Registering ${MODULE_NAME} setup, as module is enabled`)
    // Setup runtime config
    logger.info(JSON.stringify(moduleOptions))
 
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    logger.success(`Module ${MODULE_NAME}'s registration done`)
  },
})

