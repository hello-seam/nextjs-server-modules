export interface BuildOptions {
  dir: string
}
export const build = async ({ dir }: BuildOptions) => {
  console.log({ dir })
  try {
    require.resolve(`${dir}/node_modules/next`)
  } catch (e) {
    throw new Error(
      `Couldn't find next module, it might not be installed in your project. I checked the path: "${dir}/node_modules/next"`
    )
  }
  const nextBuild = require(`${dir}/node_modules/next/dist/build/index`).default

  await nextBuild(dir, null, false, false, false)

  const nextDir = `${dir}/.next`
  const staticDir = `${nextDir}/static`
  const pagesDir = `${nextDir}/server/pages`
}

export default build
