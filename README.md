oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mynewcli
$ tg-bot COMMAND
running command...
$ tg-bot (--version)
mynewcli/0.0.0 linux-x64 node-v18.17.1
$ tg-bot --help [COMMAND]
USAGE
  $ tg-bot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tg-bot hello PERSON`](#tg-bot-hello-person)
* [`tg-bot hello world`](#tg-bot-hello-world)
* [`tg-bot help [COMMANDS]`](#tg-bot-help-commands)
* [`tg-bot plugins`](#tg-bot-plugins)
* [`tg-bot plugins:install PLUGIN...`](#tg-bot-pluginsinstall-plugin)
* [`tg-bot plugins:inspect PLUGIN...`](#tg-bot-pluginsinspect-plugin)
* [`tg-bot plugins:install PLUGIN...`](#tg-bot-pluginsinstall-plugin-1)
* [`tg-bot plugins:link PLUGIN`](#tg-bot-pluginslink-plugin)
* [`tg-bot plugins:uninstall PLUGIN...`](#tg-bot-pluginsuninstall-plugin)
* [`tg-bot plugins:uninstall PLUGIN...`](#tg-bot-pluginsuninstall-plugin-1)
* [`tg-bot plugins:uninstall PLUGIN...`](#tg-bot-pluginsuninstall-plugin-2)
* [`tg-bot plugins update`](#tg-bot-plugins-update)

## `tg-bot hello PERSON`

Say hello

```
USAGE
  $ tg-bot hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/eyineer/tg-bot/blob/v0.0.0/dist/commands/hello/index.ts)_

## `tg-bot hello world`

Say hello world

```
USAGE
  $ tg-bot hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ tg-bot hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/eyineer/tg-bot/blob/v0.0.0/dist/commands/hello/world.ts)_

## `tg-bot help [COMMANDS]`

Display help for tg-bot.

```
USAGE
  $ tg-bot help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for tg-bot.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.16/src/commands/help.ts)_

## `tg-bot plugins`

List installed plugins.

```
USAGE
  $ tg-bot plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ tg-bot plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/index.ts)_

## `tg-bot plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tg-bot plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ tg-bot plugins add

EXAMPLES
  $ tg-bot plugins:install myplugin 

  $ tg-bot plugins:install https://github.com/someuser/someplugin

  $ tg-bot plugins:install someuser/someplugin
```

## `tg-bot plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ tg-bot plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ tg-bot plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/inspect.ts)_

## `tg-bot plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tg-bot plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ tg-bot plugins add

EXAMPLES
  $ tg-bot plugins:install myplugin 

  $ tg-bot plugins:install https://github.com/someuser/someplugin

  $ tg-bot plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/install.ts)_

## `tg-bot plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ tg-bot plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ tg-bot plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/link.ts)_

## `tg-bot plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tg-bot plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tg-bot plugins unlink
  $ tg-bot plugins remove
```

## `tg-bot plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tg-bot plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tg-bot plugins unlink
  $ tg-bot plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/uninstall.ts)_

## `tg-bot plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tg-bot plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tg-bot plugins unlink
  $ tg-bot plugins remove
```

## `tg-bot plugins update`

Update installed plugins.

```
USAGE
  $ tg-bot plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/update.ts)_
<!-- commandsstop -->
