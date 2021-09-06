const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

const moduleFileExtensions = ['js', 'ts', 'jsx', 'tsx', 'json']

const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find((extension) =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  )
  if (extension) {
    return resolveFn(`${filePath}.${extension}`)
  }

  return resolveFn(`${filePath}.js`)
}

module.exports = {
  // entry
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('dist'),
  appSrc: resolveApp('src'),
  public: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  appPackageJson: resolveApp('package.json'),
  proxySetup: resolveApp('src/setupProxy.js'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  swSrc: resolveModule(resolveApp, 'src/wervice-worker'),
}
