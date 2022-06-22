import * as auth0 from '@pulumi/auth0'
import * as pulumi from '@pulumi/pulumi'

interface MyConfig {
  readonly foo: string
}

const config = new pulumi.Config().requireObject<MyConfig>('config')

console.log('config.foo', config.foo)

const connection = new auth0.Connection('connection', {
  strategy: 'auth0',
  options: {
    bruteForceProtection: true,
    enabledDatabaseCustomization: true,
    passwordPolicy: 'excellent',
  },
})
