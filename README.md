# monorepo-nuxt-volar-issue

## Repo describing an issue with volar extension within a monorepo.

Tried with Vue.volar v1.7.8 and v1.6.5

Here's the output of `nuxi info`

- Operating System: Linux
- Node Version: v18.15.0
- Nuxt Version: 3.5.2
- Nitro Version: 2.4.1
- Package Manager: pnpm@8.5.0
- Builder: vite

I attended the Nuxt workshop last week at the Vue conference and met @danielroe there. I showed him the issue I have within a monorepo and he suggested that I speak with @johnsoncodehk about this.

Here is a reproducible example->[Monorepo-Nuxt-Volar](https://github.com/trc-mathieu/monorepo-nuxt-volar-issue)

I have an `apps/` folder and a `packages` folder with Nuxt apps and Nuxt modules and use `pnpm workspaces`.

If you select the file `/packages/module2/module-clone.ts`, it shows in the VS code information bar the `No tsconfig`. It seems pretty random and I haven't figured out what the problem is and would really appreciate your help on this.
If you select the `/packages/module2/module.ts`, the `tsconfig` file is found in the right folder.

Same behaviour for other files like

- `/packages/module2/runtime/plugin.ts` -> No tsconfig
- `/packages/module2/runtime/AComponent.vue` -> No tsconfig

Strangely, all the files within `apps/` have a proper `tsconfig` match.

> Note: I tried on windows and linux and I see the same issue. In another project that I am working on, sometimes selecting a file within a nuxt module would point to the tsconfig file at a completely different level like `/apps/appX`, by-passing the module tsconfig file. Maybe some caching issue on volar side?
