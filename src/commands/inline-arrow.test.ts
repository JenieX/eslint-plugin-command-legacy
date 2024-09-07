import { $, run } from './_test-utils'
import { inlineArrow as command } from './inline-arrow'

run(
  command,
  // no arrow function
  {
    code: $`
      ///inline-arrow
      const a = 1
    `,
    errors: ['command-error'],
  },
  // multi statement
  {
    code: $`
      /// inline-arrow
      export const foo = arg => {
        const a = 1
        return a
      }
    `,
    errors: ['command-error'],
  },
  {
    code: $`
      /// inline-arrow
      export const foo = <T = 1>(arg: Z): Bar => {
        return arg
      }
    `,
    output: $`
      export const foo = <T = 1>(arg: Z): Bar => arg
    `,
    errors: ['command-fix'],
  },
  // no return statement
  {
    code: $`
      ///inline-arrow
      const foo = () => {}
    `,
    output: $`
      const foo = () => undefined
    `,
    errors: ['command-fix'],
  },
  // without return argument
  {
    code: $`
      // /ia
      export default <T = 1>(arg: Z): Bar => { return }
    `,
    output: $`
      export default <T = 1>(arg: Z): Bar => undefined
    `,
    errors: ['command-fix'],
  },
  {
    code: $`
      /// inline-arrow
      export const foo = () => {
        return { a: 'b' } as any
      }
    `,
    output: $`
      export const foo = () => ({ a: 'b' } as any)
    `,
    errors: ['command-fix'],
  },
)
