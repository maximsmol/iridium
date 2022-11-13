set shell := ["/usr/bin/env", "bash", "-c"]
set positional-arguments

@default:
  just --list --unsorted

# >>> Tools
dev:
  yarn run vite dev

# todo(maximsmol): prod build
# todo(maximsmol): setup eslint
# todo(maximsmol): figure out i18n
# todo(maximsmol): setup CI (tsc + eslint + stylelint etc.s)
