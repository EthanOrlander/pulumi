const completionSpec: Fig.Spec = {
  name: "pulumi",
  description: "Pulumi command line",
  subcommands: [
    {
      name: "cancel",
      description: "Cancel a stack's currently running update, if any",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: ["--stack", "-s"],
          description:
            "The name of the stack to operate on. Defaults to the current stack",
          args: { name: "stack" },
        },
        {
          name: ["--yes", "-y"],
          description:
            "Skip confirmation prompts, and proceed with cancellation anyway",
        },
        { name: ["--help", "-h"], description: "help for cancel" },
      ],
    },
    {
      name: "config",
      description: "Manage configuration",
      subcommands: [
        {
          name: "cp",
          description: "Copy config to another stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: "--config-file",
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: { name: "config-file" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: ["--dest", "-d"],
              description: "The name of the new stack to copy the config to",
              args: { name: "dest" },
            },
            {
              name: "--path",
              description:
                "The key contains a path to a property in a map or list to set",
            },
            { name: ["--help", "-h"], description: "help for cp" },
          ],
        },
        {
          name: "get",
          description: "Get a single configuration value",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: "--config-file",
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: { name: "config-file" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: "--path",
              description:
                "The key contains a path to a property in a map or list to get",
            },
            { name: ["--help", "-h"], description: "help for get" },
          ],
        },
        {
          name: "refresh",
          description:
            "Update the local configuration based on the most recent deployment of the stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: "--config-file",
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: { name: "config-file" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: ["--force", "-f"],
              description:
                "Overwrite configuration file, if it exists, without creating a backup",
            },
            { name: ["--help", "-h"], description: "help for refresh" },
          ],
        },
        {
          name: "rm",
          description: "Remove configuration value",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: "--config-file",
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: { name: "config-file" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--path",
              description:
                "The key contains a path to a property in a map or list to remove",
            },
            { name: ["--help", "-h"], description: "help for rm" },
          ],
        },
        {
          name: "rm-all",
          description: "Remove multiple configuration values",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: "--config-file",
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: { name: "config-file" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--path",
              description:
                "Parse the keys as paths in a map or list rather than raw strings",
            },
            { name: ["--help", "-h"], description: "help for rm-all" },
          ],
        },
        {
          name: "set",
          description: "Set configuration value",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: "--config-file",
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: { name: "config-file" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--path",
              description:
                "The key contains a path to a property in a map or list to set",
            },
            {
              name: "--plaintext",
              description: "Save the value as plaintext (unencrypted)",
            },
            {
              name: "--secret",
              description:
                "Encrypt the value instead of storing it in plaintext",
            },
            { name: ["--help", "-h"], description: "help for set" },
          ],
        },
        {
          name: "set-all",
          description: "Set multiple configuration values",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: "--config-file",
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: { name: "config-file" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--path",
              description:
                "Parse the keys as paths in a map or list rather than raw strings",
            },
            {
              name: "--plaintext",
              description: "Marks a value as plaintext (unencrypted)",
              isRepeatable: true,
              args: { name: "plaintext" },
            },
            {
              name: "--secret",
              description: "Marks a value as secret to be encrypted",
              isRepeatable: true,
              args: { name: "secret" },
            },
            { name: ["--help", "-h"], description: "help for set-all" },
          ],
        },
      ],
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: "--config-file",
          description:
            "Use the configuration values in the specified file rather than detecting the file name",
          args: { name: "config-file" },
        },
        { name: ["--json", "-j"], description: "Emit output as JSON" },
        {
          name: "--show-secrets",
          description:
            "Show secret values when listing config instead of displaying blinded values",
        },
        {
          name: ["--stack", "-s"],
          description:
            "The name of the stack to operate on. Defaults to the current stack",
          args: { name: "stack" },
        },
        { name: ["--help", "-h"], description: "help for config" },
      ],
    },
    {
      name: "console",
      description: "Opens the current stack in the Pulumi Console",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: ["--stack", "-s"],
          description: "The name of the stack to view",
          args: { name: "stack" },
        },
        { name: ["--help", "-h"], description: "help for console" },
      ],
    },
    {
      name: "destroy",
      description: "Destroy an existing stack and its resources",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: "--config-file",
          description:
            "Use the configuration values in the specified file rather than detecting the file name",
          args: { name: "config-file" },
        },
        {
          name: ["--debug", "-d"],
          description:
            "Print detailed debugging output during resource operations",
        },
        {
          name: "--diff",
          description:
            "Display operation as a rich diff showing the overall change",
        },
        { name: "--exec-agent", description: "", args: { name: "exec-agent" } },
        { name: "--exec-kind", description: "", args: { name: "exec-kind" } },
        {
          name: ["--message", "-m"],
          description:
            "Optional message to associate with the destroy operation",
          args: { name: "message" },
        },
        {
          name: ["--parallel", "-p"],
          description:
            "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
          args: { name: "parallel", default: "2147483647" },
        },
        {
          name: ["--refresh", "-r"],
          description:
            "Refresh the state of the stack's resources before this update",
        },
        {
          name: "--show-config",
          description: "Show configuration keys and variables",
        },
        {
          name: "--show-replacement-steps",
          description:
            "Show detailed resource replacement creates and deletes instead of a single step",
        },
        {
          name: "--show-sames",
          description:
            "Show resources that don't need to be updated because they haven't changed, alongside those that do",
        },
        {
          name: ["--skip-preview", "-f"],
          description: "Do not perform a preview before performing the destroy",
        },
        {
          name: ["--stack", "-s"],
          description:
            "The name of the stack to operate on. Defaults to the current stack",
          args: { name: "stack" },
        },
        {
          name: "--suppress-outputs",
          description:
            "Suppress display of stack outputs (in case they contain sensitive values)",
        },
        {
          name: "--suppress-permalink",
          description: "Suppress display of the state permalink",
          args: { name: "suppress-permalink" },
        },
        {
          name: ["--target", "-t"],
          description:
            "Specify a single resource URN to destroy. All resources necessary to destroy this target will also be destroyed. Multiple resources can be specified using: --target urn1 --target urn2",
          isRepeatable: true,
          args: { name: "target" },
        },
        {
          name: "--target-dependents",
          description:
            "Allows destroying of dependent targets discovered but not specified in --target list",
        },
        {
          name: ["--yes", "-y"],
          description:
            "Automatically approve and perform the destroy after previewing it",
        },
        { name: ["--help", "-h"], description: "help for destroy" },
      ],
    },
    {
      name: "import",
      description: "Import resources into an existing stack",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: "--config-file",
          description:
            "Use the configuration values in the specified file rather than detecting the file name",
          args: { name: "config-file" },
        },
        {
          name: ["--debug", "-d"],
          description:
            "Print detailed debugging output during resource operations",
        },
        {
          name: "--diff",
          description:
            "Display operation as a rich diff showing the overall change",
        },
        { name: "--exec-agent", description: "", args: { name: "exec-agent" } },
        { name: "--exec-kind", description: "", args: { name: "exec-kind" } },
        {
          name: ["--file", "-f"],
          description:
            "The path to a JSON-encoded file containing a list of resources to import",
          args: { name: "file" },
        },
        {
          name: ["--message", "-m"],
          description:
            "Optional message to associate with the update operation",
          args: { name: "message" },
        },
        {
          name: ["--out", "-o"],
          description:
            "The path to the file that will contain the generated resource declarations",
          args: { name: "out" },
        },
        {
          name: ["--parallel", "-p"],
          description:
            "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
          args: { name: "parallel", default: "2147483647" },
        },
        {
          name: "--parent",
          description:
            "The name and URN of the parent resource in the format name=urn, where name is the variable name of the parent resource",
          args: { name: "parent" },
        },
        {
          name: "--protect",
          description:
            "Allow resources to be imported with protection from deletion enabled",
        },
        {
          name: "--provider",
          description:
            "The name and URN of the provider to use for the import in the format name=urn, where name is the variable name for the provider resource",
          args: { name: "provider" },
        },
        {
          name: "--skip-preview",
          description: "Do not perform a preview before performing the refresh",
        },
        {
          name: ["--stack", "-s"],
          description:
            "The name of the stack to operate on. Defaults to the current stack",
          args: { name: "stack" },
        },
        {
          name: "--suppress-outputs",
          description:
            "Suppress display of stack outputs (in case they contain sensitive values)",
        },
        {
          name: "--suppress-permalink",
          description: "Suppress display of the state permalink",
          args: { name: "suppress-permalink" },
        },
        {
          name: ["--yes", "-y"],
          description:
            "Automatically approve and perform the refresh after previewing it",
        },
        { name: ["--help", "-h"], description: "help for import" },
      ],
    },
    {
      name: "login",
      description: "Log in to the Pulumi service",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: ["--cloud-url", "-c"],
          description: "A cloud URL to log in to",
          args: { name: "cloud-url" },
        },
        {
          name: ["--local", "-l"],
          description: "Use Pulumi in local-only mode",
        },
        { name: ["--help", "-h"], description: "help for login" },
      ],
    },
    {
      name: "logout",
      description: "Log out of the Pulumi service",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        { name: "--all", description: "Logout of all backends" },
        {
          name: ["--cloud-url", "-c"],
          description: "A cloud URL to log out of (defaults to current cloud)",
          args: { name: "cloud-url" },
        },
        { name: ["--local", "-l"], description: "Log out of using local mode" },
        { name: ["--help", "-h"], description: "help for logout" },
      ],
    },
    {
      name: "logs",
      description: "[PREVIEW] Show aggregated resource logs for a stack",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: "--config-file",
          description:
            "Use the configuration values in the specified file rather than detecting the file name",
          args: { name: "config-file" },
        },
        {
          name: ["--follow", "-f"],
          description: "Follow the log stream in real time (like tail -f)",
        },
        { name: ["--json", "-j"], description: "Emit output as JSON" },
        {
          name: ["--resource", "-r"],
          description:
            "Only return logs for the requested resource ('name', 'type::name' or full URN).  Defaults to returning all logs.",
          args: { name: "resource" },
        },
        {
          name: "--since",
          description:
            "Only return logs newer than a relative duration ('5s', '2m', '3h') or absolute timestamp.  Defaults to returning the last 1 hour of logs.",
          args: { name: "since", default: "1h" },
        },
        {
          name: ["--stack", "-s"],
          description:
            "The name of the stack to operate on. Defaults to the current stack",
          args: { name: "stack" },
        },
        { name: ["--help", "-h"], description: "help for logs" },
      ],
    },
    {
      name: "new",
      description: "Create a new Pulumi project",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: ["--config", "-c"],
          description: "Config to save",
          isRepeatable: true,
          args: { name: "config" },
        },
        {
          name: "--config-path",
          description:
            "Config keys contain a path to a property in a map or list to set",
        },
        {
          name: ["--description", "-d"],
          description:
            "The project description; if not specified, a prompt will request it",
          args: { name: "description" },
        },
        {
          name: "--dir",
          description:
            "The location to place the generated project; if not specified, the current directory is used",
          args: { name: "dir" },
        },
        {
          name: ["--force", "-f"],
          description:
            "Forces content to be generated even if it would change existing files",
        },
        {
          name: ["--generate-only", "-g"],
          description:
            "Generate the project only; do not create a stack, save config, or install dependencies",
        },
        {
          name: ["--name", "-n"],
          description:
            "The project name; if not specified, a prompt will request it",
          args: { name: "name" },
        },
        {
          name: ["--offline", "-o"],
          description:
            "Use locally cached templates without making any network requests",
        },
        {
          name: "--secrets-provider",
          description:
            "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault)",
          args: { name: "secrets-provider", default: "default" },
        },
        {
          name: ["--stack", "-s"],
          description:
            "The stack name; either an existing stack or stack to create; if not specified, a prompt will request it",
          args: { name: "stack" },
        },
        {
          name: ["--yes", "-y"],
          description: "Skip prompts and proceed with default values",
        },
        { name: ["--help", "-h"], description: "help for new" },
      ],
    },
    {
      name: "plugin",
      description: "Manage language and resource provider plugins",
      subcommands: [
        {
          name: "install",
          description: "Install one or more plugins",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--exact",
              description:
                "Force installation of an exact version match (usually >= is accepted)",
            },
            {
              name: ["--file", "-f"],
              description:
                "Install a plugin from a tarball file, instead of downloading it",
              args: { name: "file" },
            },
            {
              name: "--reinstall",
              description: "Reinstall a plugin even if it already exists",
            },
            {
              name: "--server",
              description: "A URL to download plugins from",
              args: { name: "server" },
            },
            { name: ["--help", "-h"], description: "help for install" },
          ],
        },
        {
          name: "ls",
          description: "List plugins",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: ["--project", "-p"],
              description: "List only the plugins used by the current project",
            },
            { name: ["--help", "-h"], description: "help for ls" },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more plugins from the download cache",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--all", "-a"], description: "Remove all plugins" },
            {
              name: ["--yes", "-y"],
              description:
                "Skip confirmation prompts, and proceed with removal anyway",
            },
            { name: ["--help", "-h"], description: "help for rm" },
          ],
        },
      ],
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        { name: ["--help", "-h"], description: "help for plugin" },
      ],
    },
    {
      name: "policy",
      description: "Manage resource policies",
      subcommands: [
        {
          name: "disable",
          description: "Disable a Policy Pack for a Pulumi organization",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--policy-group",
              description:
                "The Policy Group for which the Policy Pack will be disabled; if not specified, the default Policy Group is used",
              args: { name: "policy-group" },
            },
            {
              name: "--version",
              description:
                "The version of the Policy Pack that will be disabled; if not specified, any enabled version of the Policy Pack will be disabled",
              args: { name: "version" },
            },
            { name: ["--help", "-h"], description: "help for disable" },
          ],
        },
        {
          name: "enable",
          description: "Enable a Policy Pack for a Pulumi organization",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--config",
              description:
                "The file path for the Policy Pack configuration file",
              args: { name: "config" },
            },
            {
              name: "--policy-group",
              description:
                "The Policy Group for which the Policy Pack will be enabled; if not specified, the default Policy Group is used",
              args: { name: "policy-group" },
            },
            { name: ["--help", "-h"], description: "help for enable" },
          ],
        },
        {
          name: "group",
          description: "Manage policy groups",
          subcommands: [
            {
              name: "ls",
              description: "List all Policy Groups for a Pulumi organization",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                { name: ["--help", "-h"], description: "help for ls" },
              ],
            },
          ],
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for group" },
          ],
        },
        {
          name: "ls",
          description: "List all Policy Packs for a Pulumi organization",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            { name: ["--help", "-h"], description: "help for ls" },
          ],
        },
        {
          name: "new",
          description: "Create a new Pulumi Policy Pack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--dir",
              description:
                "The location to place the generated Policy Pack; if not specified, the current directory is used",
              args: { name: "dir" },
            },
            {
              name: ["--force", "-f"],
              description:
                "Forces content to be generated even if it would change existing files",
            },
            {
              name: ["--generate-only", "-g"],
              description:
                "Generate the Policy Pack only; do not install dependencies",
            },
            {
              name: ["--offline", "-o"],
              description:
                "Use locally cached templates without making any network requests",
            },
            { name: ["--help", "-h"], description: "help for new" },
          ],
        },
        {
          name: "publish",
          description: "Publish a Policy Pack to the Pulumi service",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for publish" },
          ],
        },
        {
          name: "rm",
          description: "Removes a Policy Pack from a Pulumi organization",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: ["--yes", "-y"],
              description:
                "Skip confirmation prompts, and proceed with removal anyway",
            },
            { name: ["--help", "-h"], description: "help for rm" },
          ],
        },
        {
          name: "validate-config",
          description: "Validate a Policy Pack configuration",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--config",
              description:
                "The file path for the Policy Pack configuration file",
              args: { name: "config" },
              isRequired: true,
            },
            { name: ["--help", "-h"], description: "help for validate-config" },
          ],
        },
      ],
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        { name: ["--help", "-h"], description: "help for policy" },
      ],
    },
    {
      name: ["pre", "preview"],
      description: "Show a preview of updates to a stack's resources",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: "--client",
          description:
            "The address of an existing language runtime host to connect to",
          args: { name: "client" },
        },
        {
          name: ["--config", "-c"],
          description: "Config to use during the preview",
          isRepeatable: true,
          args: { name: "config" },
        },
        {
          name: "--config-file",
          description:
            "Use the configuration values in the specified file rather than detecting the file name",
          args: { name: "config-file" },
        },
        {
          name: "--config-path",
          description:
            "Config keys contain a path to a property in a map or list to set",
        },
        {
          name: ["--debug", "-d"],
          description:
            "Print detailed debugging output during resource operations",
        },
        {
          name: "--diff",
          description:
            "Display operation as a rich diff showing the overall change",
        },
        { name: "--exec-agent", description: "", args: { name: "exec-agent" } },
        { name: "--exec-kind", description: "", args: { name: "exec-kind" } },
        {
          name: "--expect-no-changes",
          description:
            "Return an error if any changes are proposed by this preview",
        },
        {
          name: ["--json", "-j"],
          description:
            "Serialize the preview diffs, operations, and overall output as JSON",
        },
        {
          name: ["--message", "-m"],
          description:
            "Optional message to associate with the preview operation",
          args: { name: "message" },
        },
        {
          name: ["--parallel", "-p"],
          description:
            "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
          args: { name: "parallel", default: "2147483647" },
        },
        {
          name: "--policy-pack",
          description: "Run one or more policy packs as part of this update",
          args: { name: "policy-pack" },
        },
        {
          name: "--policy-pack-config",
          description:
            'Path to JSON file containing the config for the policy pack of the corresponding "--policy-pack" flag',
          args: { name: "policy-pack-config" },
        },
        {
          name: ["--refresh", "-r"],
          description:
            "Refresh the state of the stack's resources before this update",
        },
        {
          name: "--replace",
          description:
            "Specify resources to replace. Multiple resources can be specified using --replace urn1 --replace urn2",
          isRepeatable: true,
          args: { name: "replace" },
        },
        {
          name: "--show-config",
          description: "Show configuration keys and variables",
        },
        {
          name: "--show-reads",
          description:
            "Show resources that are being read in, alongside those being managed directly in the stack",
        },
        {
          name: "--show-replacement-steps",
          description:
            "Show detailed resource replacement creates and deletes instead of a single step",
        },
        {
          name: "--show-sames",
          description:
            "Show resources that needn't be updated because they haven't changed, alongside those that do",
        },
        {
          name: ["--stack", "-s"],
          description:
            "The name of the stack to operate on. Defaults to the current stack",
          args: { name: "stack" },
        },
        {
          name: "--suppress-outputs",
          description:
            "Suppress display of stack outputs (in case they contain sensitive values)",
        },
        {
          name: "--suppress-permalink",
          description: "Suppress display of the state permalink",
          args: { name: "suppress-permalink" },
        },
        {
          name: ["--target", "-t"],
          description:
            "Specify a single resource URN to update. Other resources will not be updated. Multiple resources can be specified using --target urn1 --target urn2",
          isRepeatable: true,
          args: { name: "target" },
        },
        {
          name: "--target-dependents",
          description:
            "Allows updating of dependent targets discovered but not specified in --target list",
        },
        {
          name: "--target-replace",
          description:
            "Specify a single resource URN to replace. Other resources will not be updated. Shorthand for --target urn --replace urn.",
          isRepeatable: true,
          args: { name: "target-replace" },
        },
        { name: ["--help", "-h"], description: "help for preview" },
      ],
    },
    {
      name: "refresh",
      description: "Refresh the resources in a stack",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: "--config-file",
          description:
            "Use the configuration values in the specified file rather than detecting the file name",
          args: { name: "config-file" },
        },
        {
          name: ["--debug", "-d"],
          description:
            "Print detailed debugging output during resource operations",
        },
        {
          name: "--diff",
          description:
            "Display operation as a rich diff showing the overall change",
        },
        { name: "--exec-agent", description: "", args: { name: "exec-agent" } },
        { name: "--exec-kind", description: "", args: { name: "exec-kind" } },
        {
          name: "--expect-no-changes",
          description:
            "Return an error if any changes occur during this update",
        },
        {
          name: ["--message", "-m"],
          description:
            "Optional message to associate with the update operation",
          args: { name: "message" },
        },
        {
          name: ["--parallel", "-p"],
          description:
            "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
          args: { name: "parallel", default: "2147483647" },
        },
        {
          name: "--show-replacement-steps",
          description:
            "Show detailed resource replacement creates and deletes instead of a single step",
        },
        {
          name: "--show-sames",
          description:
            "Show resources that needn't be updated because they haven't changed, alongside those that do",
        },
        {
          name: ["--skip-preview", "-f"],
          description: "Do not perform a preview before performing the refresh",
        },
        {
          name: ["--stack", "-s"],
          description:
            "The name of the stack to operate on. Defaults to the current stack",
          args: { name: "stack" },
        },
        {
          name: "--suppress-outputs",
          description:
            "Suppress display of stack outputs (in case they contain sensitive values)",
        },
        {
          name: "--suppress-permalink",
          description: "Suppress display of the state permalink",
          args: { name: "suppress-permalink" },
        },
        {
          name: ["--target", "-t"],
          description:
            "Specify a single resource URN to refresh. Multiple resource can be specified using: --target urn1 --target urn2",
          isRepeatable: true,
          args: { name: "target" },
        },
        {
          name: ["--yes", "-y"],
          description:
            "Automatically approve and perform the refresh after previewing it",
        },
        { name: ["--help", "-h"], description: "help for refresh" },
      ],
    },
    {
      name: "stack",
      description: "Manage stacks",
      subcommands: [
        {
          name: "change-secrets-provider",
          description: "Change the secrets provider for the current stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: ["--help", "-h"],
              description: "help for change-secrets-provider",
            },
          ],
        },
        {
          name: "export",
          description: "Export a stack's deployment to standard out",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--file",
              description: "A filename to write stack output to",
              args: { name: "file" },
            },
            {
              name: "--show-secrets",
              description:
                "Emit secrets in plaintext in exported stack. Defaults to `false`",
            },
            {
              name: "--version",
              description:
                "Previous stack version to export. (If unset, will export the latest.)",
              args: { name: "version" },
            },
            { name: ["--help", "-h"], description: "help for export" },
          ],
        },
        {
          name: "graph",
          description: "Export a stack's dependency graph to a file",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--dependency-edge-color",
              description: "Sets the color of dependency edges in the graph",
              args: { name: "dependency-edge-color", default: "#246C60" },
            },
            {
              name: "--ignore-dependency-edges",
              description:
                "Ignores edges introduced by dependency resource relationships",
            },
            {
              name: "--ignore-parent-edges",
              description:
                "Ignores edges introduced by parent/child resource relationships",
            },
            {
              name: "--parent-edge-color",
              description: "Sets the color of parent edges in the graph",
              args: { name: "parent-edge-color", default: "#AA6639" },
            },
            { name: ["--help", "-h"], description: "help for graph" },
          ],
        },
        {
          name: ["hist", "history"],
          description: "[PREVIEW] Display history for a stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--full-dates",
              description: "Show full dates, instead of relative dates",
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: "--page",
              description: "Used with 'page-size' to paginate results",
              args: { name: "page", default: "1" },
            },
            {
              name: "--page-size",
              description:
                "Used with 'page' to control number of results returned",
              args: { name: "page-size", default: "10" },
            },
            {
              name: "--show-secrets",
              description:
                "Show secret values when listing config instead of displaying blinded values",
            },
            { name: ["--help", "-h"], description: "help for history" },
          ],
        },
        {
          name: "import",
          description:
            "Import a deployment from standard in into an existing stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--file",
              description: "A filename to read stack input from",
              args: { name: "file" },
            },
            {
              name: ["--force", "-f"],
              description:
                "Force the import to occur, even if apparent errors are discovered beforehand (not recommended)",
            },
            { name: ["--help", "-h"], description: "help for import" },
          ],
        },
        {
          name: "init",
          description:
            "Create an empty stack with the given name, ready for updates",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--copy-config-from",
              description: "The name of the stack to copy existing config from",
              args: { name: "copy-config-from" },
            },
            {
              name: "--secrets-provider",
              description:
                "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault)",
              args: { name: "secrets-provider", default: "default" },
            },
            { name: ["--help", "-h"], description: "help for init" },
          ],
        },
        {
          name: "ls",
          description: "List stacks",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: ["--all", "-a"],
              description:
                "List all stacks instead of just stacks for the current project",
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: ["--organization", "-o"],
              description:
                "Filter returned stacks to those in a specific organization",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Filter returned stacks to those with a specific project name",
              args: { name: "project" },
            },
            {
              name: ["--tag", "-t"],
              description:
                "Filter returned stacks to those in a specific tag (tag-name or tag-name=tag-value)",
              args: { name: "tag" },
            },
            { name: ["--help", "-h"], description: "help for ls" },
          ],
        },
        {
          name: "output",
          description: "Show a stack's output properties",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: "--show-secrets",
              description:
                "Display outputs which are marked as secret in plaintext",
            },
            { name: ["--help", "-h"], description: "help for output" },
          ],
        },
        {
          name: "rename",
          description: "Rename an existing stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for rename" },
          ],
        },
        {
          name: "rm",
          description: "Remove a stack and its configuration",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: ["--force", "-f"],
              description:
                "Forces deletion of the stack, leaving behind any resources managed by the stack",
            },
            {
              name: "--preserve-config",
              description:
                "Do not delete the corresponding Pulumi.<stack-name>.yaml configuration file for the stack",
            },
            {
              name: ["--yes", "-y"],
              description:
                "Skip confirmation prompts, and proceed with removal anyway",
            },
            { name: ["--help", "-h"], description: "help for rm" },
          ],
        },
        {
          name: "select",
          description: "Switch the current workspace to the given stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: ["--create", "-c"],
              description: "If selected stack does not exist, create it",
            },
            {
              name: "--secrets-provider",
              description:
                "Use with --create flag, The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault)",
              args: { name: "secrets-provider", default: "default" },
            },
            { name: ["--help", "-h"], description: "help for select" },
          ],
        },
        {
          name: "tag",
          description: "Manage stack tags",
          subcommands: [
            {
              name: "get",
              description: "Get a single stack tag value",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--help", "-h"], description: "help for get" },
              ],
            },
            {
              name: "ls",
              description: "List all stack tags",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                { name: ["--help", "-h"], description: "help for ls" },
              ],
            },
            {
              name: "rm",
              description: "Remove a stack tag",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--help", "-h"], description: "help for rm" },
              ],
            },
            {
              name: "set",
              description: "Set a stack tag",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--help", "-h"], description: "help for set" },
              ],
            },
          ],
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for tag" },
          ],
        },
      ],
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: ["--show-ids", "-i"],
          description: "Display each resource's provider-assigned unique ID",
        },
        { name: "--show-name", description: "Display only the stack name" },
        {
          name: "--show-secrets",
          description:
            "Display stack outputs which are marked as secret in plaintext",
        },
        {
          name: ["--show-urns", "-u"],
          description:
            "Display each resource's Pulumi-assigned globally unique URN",
        },
        {
          name: ["--stack", "-s"],
          description:
            "The name of the stack to operate on. Defaults to the current stack",
          args: { name: "stack" },
        },
        { name: ["--help", "-h"], description: "help for stack" },
      ],
    },
    {
      name: "state",
      description: "Edit the current stack's state",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a resource from a stack's state",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--force",
              description: "Force deletion of protected resources",
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            { name: ["--yes", "-y"], description: "Skip confirmation prompts" },
            { name: ["--help", "-h"], description: "help for delete" },
          ],
        },
        {
          name: "unprotect",
          description: "Unprotect resources in a stack's state",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            {
              name: "--all",
              description: "Unprotect all resources in the checkpoint",
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack" },
            },
            { name: ["--yes", "-y"], description: "Skip confirmation prompts" },
            { name: ["--help", "-h"], description: "help for unprotect" },
          ],
        },
      ],
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        { name: ["--help", "-h"], description: "help for state" },
      ],
    },
    {
      name: ["update", "up"],
      description: "Create or update the resources in a stack",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: "--client",
          description:
            "The address of an existing language runtime host to connect to",
          args: { name: "client" },
        },
        {
          name: ["--config", "-c"],
          description: "Config to use during the update",
          isRepeatable: true,
          args: { name: "config" },
        },
        {
          name: "--config-file",
          description:
            "Use the configuration values in the specified file rather than detecting the file name",
          args: { name: "config-file" },
        },
        {
          name: "--config-path",
          description:
            "Config keys contain a path to a property in a map or list to set",
        },
        {
          name: ["--debug", "-d"],
          description:
            "Print detailed debugging output during resource operations",
        },
        {
          name: "--diff",
          description:
            "Display operation as a rich diff showing the overall change",
        },
        { name: "--exec-agent", description: "", args: { name: "exec-agent" } },
        { name: "--exec-kind", description: "", args: { name: "exec-kind" } },
        {
          name: "--expect-no-changes",
          description:
            "Return an error if any changes occur during this update",
        },
        {
          name: ["--message", "-m"],
          description:
            "Optional message to associate with the update operation",
          args: { name: "message" },
        },
        {
          name: ["--parallel", "-p"],
          description:
            "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
          args: { name: "parallel", default: "2147483647" },
        },
        {
          name: "--policy-pack",
          description: "Run one or more policy packs as part of this update",
          args: { name: "policy-pack" },
        },
        {
          name: "--policy-pack-config",
          description:
            'Path to JSON file containing the config for the policy pack of the corresponding "--policy-pack" flag',
          args: { name: "policy-pack-config" },
        },
        {
          name: ["--refresh", "-r"],
          description:
            "Refresh the state of the stack's resources before this update",
        },
        {
          name: "--replace",
          description:
            "Specify resources to replace. Multiple resources can be specified using --replace urn1 --replace urn2",
          isRepeatable: true,
          args: { name: "replace" },
        },
        {
          name: "--secrets-provider",
          description:
            "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault). Onlyused when creating a new stack from an existing template",
          args: { name: "secrets-provider", default: "default" },
        },
        {
          name: "--show-config",
          description: "Show configuration keys and variables",
        },
        {
          name: "--show-reads",
          description:
            "Show resources that are being read in, alongside those being managed directly in the stack",
        },
        {
          name: "--show-replacement-steps",
          description:
            "Show detailed resource replacement creates and deletes instead of a single step",
        },
        {
          name: "--show-sames",
          description:
            "Show resources that don't need be updated because they haven't changed, alongside those that do",
        },
        {
          name: ["--skip-preview", "-f"],
          description: "Do not perform a preview before performing the update",
        },
        {
          name: ["--stack", "-s"],
          description:
            "The name of the stack to operate on. Defaults to the current stack",
          args: { name: "stack" },
        },
        {
          name: "--suppress-outputs",
          description:
            "Suppress display of stack outputs (in case they contain sensitive values)",
        },
        {
          name: "--suppress-permalink",
          description: "Suppress display of the state permalink",
          args: { name: "suppress-permalink" },
        },
        {
          name: ["--target", "-t"],
          description:
            "Specify a single resource URN to update. Other resources will not be updated. Multiple resources can be specified using --target urn1 --target urn2",
          isRepeatable: true,
          args: { name: "target" },
        },
        {
          name: "--target-dependents",
          description:
            "Allows updating of dependent targets discovered but not specified in --target list",
        },
        {
          name: "--target-replace",
          description:
            "Specify a single resource URN to replace. Other resources will not be updated. Shorthand for --target urn --replace urn.",
          isRepeatable: true,
          args: { name: "target-replace" },
        },
        {
          name: ["--yes", "-y"],
          description:
            "Automatically approve and perform the update after previewing it",
        },
        { name: ["--help", "-h"], description: "help for up" },
      ],
    },
    {
      name: "version",
      description: "Print Pulumi's version number",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        { name: ["--help", "-h"], description: "help for version" },
      ],
    },
    {
      name: "watch",
      description: "[PREVIEW] Continuously update the resources in a stack",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        {
          name: ["--config", "-c"],
          description: "Config to use during the update",
          isRepeatable: true,
          args: { name: "config" },
        },
        {
          name: "--config-file",
          description:
            "Use the configuration values in the specified file rather than detecting the file name",
          args: { name: "config-file" },
        },
        {
          name: "--config-path",
          description:
            "Config keys contain a path to a property in a map or list to set",
        },
        {
          name: ["--debug", "-d"],
          description:
            "Print detailed debugging output during resource operations",
        },
        { name: "--exec-kind", description: "", args: { name: "exec-kind" } },
        {
          name: ["--message", "-m"],
          description:
            "Optional message to associate with each update operation",
          args: { name: "message" },
        },
        {
          name: ["--parallel", "-p"],
          description:
            "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
          args: { name: "parallel", default: "2147483647" },
        },
        {
          name: "--path",
          description:
            "Specify one or more relative or absolute paths that need to be watched. A path can point to a folder or a file. Defaults to working directory",
          isRepeatable: true,
          args: { name: "path" },
        },
        {
          name: "--policy-pack",
          description: "Run one or more policy packs as part of each update",
          args: { name: "policy-pack" },
        },
        {
          name: "--policy-pack-config",
          description:
            'Path to JSON file containing the config for the policy pack of the corresponding "--policy-pack" flag',
          args: { name: "policy-pack-config" },
        },
        {
          name: ["--refresh", "-r"],
          description:
            "Refresh the state of the stack's resources before each update",
        },
        {
          name: "--secrets-provider",
          description:
            "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault). Onlyused when creating a new stack from an existing template",
          args: { name: "secrets-provider", default: "default" },
        },
        {
          name: "--show-config",
          description: "Show configuration keys and variables",
        },
        {
          name: "--show-replacement-steps",
          description:
            "Show detailed resource replacement creates and deletes instead of a single step",
        },
        {
          name: "--show-sames",
          description:
            "Show resources that don't need be updated because they haven't changed, alongside those that do",
        },
        {
          name: ["--stack", "-s"],
          description:
            "The name of the stack to operate on. Defaults to the current stack",
          args: { name: "stack" },
        },
        { name: ["--help", "-h"], description: "help for watch" },
      ],
    },
    {
      name: "whoami",
      description: "Display the current logged-in user",
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        { name: ["--help", "-h"], description: "help for whoami" },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a stack's currently running update, if any",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "config",
          description: "Manage configuration",
          subcommands: [
            {
              name: "cp",
              description: "Copy config to another stack",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: "--config-file",
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: { name: "config-file" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: ["--dest", "-d"],
                  description:
                    "The name of the new stack to copy the config to",
                  args: { name: "dest" },
                },
                {
                  name: "--path",
                  description:
                    "The key contains a path to a property in a map or list to set",
                },
                { name: ["--help", "-h"], description: "help for cp" },
              ],
            },
            {
              name: "get",
              description: "Get a single configuration value",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: "--config-file",
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: { name: "config-file" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: "--path",
                  description:
                    "The key contains a path to a property in a map or list to get",
                },
                { name: ["--help", "-h"], description: "help for get" },
              ],
            },
            {
              name: "refresh",
              description:
                "Update the local configuration based on the most recent deployment of the stack",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: "--config-file",
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: { name: "config-file" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: ["--force", "-f"],
                  description:
                    "Overwrite configuration file, if it exists, without creating a backup",
                },
                { name: ["--help", "-h"], description: "help for refresh" },
              ],
            },
            {
              name: "rm",
              description: "Remove configuration value",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: "--config-file",
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: { name: "config-file" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--path",
                  description:
                    "The key contains a path to a property in a map or list to remove",
                },
                { name: ["--help", "-h"], description: "help for rm" },
              ],
            },
            {
              name: "rm-all",
              description: "Remove multiple configuration values",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: "--config-file",
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: { name: "config-file" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--path",
                  description:
                    "Parse the keys as paths in a map or list rather than raw strings",
                },
                { name: ["--help", "-h"], description: "help for rm-all" },
              ],
            },
            {
              name: "set",
              description: "Set configuration value",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: "--config-file",
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: { name: "config-file" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--path",
                  description:
                    "The key contains a path to a property in a map or list to set",
                },
                {
                  name: "--plaintext",
                  description: "Save the value as plaintext (unencrypted)",
                },
                {
                  name: "--secret",
                  description:
                    "Encrypt the value instead of storing it in plaintext",
                },
                { name: ["--help", "-h"], description: "help for set" },
              ],
            },
            {
              name: "set-all",
              description: "Set multiple configuration values",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: "--config-file",
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: { name: "config-file" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--path",
                  description:
                    "Parse the keys as paths in a map or list rather than raw strings",
                },
                {
                  name: "--plaintext",
                  description: "Marks a value as plaintext (unencrypted)",
                  isRepeatable: true,
                  args: { name: "plaintext" },
                },
                {
                  name: "--secret",
                  description: "Marks a value as secret to be encrypted",
                  isRepeatable: true,
                  args: { name: "secret" },
                },
                { name: ["--help", "-h"], description: "help for set-all" },
              ],
            },
          ],
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "console",
          description: "Opens the current stack in the Pulumi Console",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "destroy",
          description: "Destroy an existing stack and its resources",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "import",
          description: "Import resources into an existing stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "login",
          description: "Log in to the Pulumi service",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "logout",
          description: "Log out of the Pulumi service",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "logs",
          description: "[PREVIEW] Show aggregated resource logs for a stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "new",
          description: "Create a new Pulumi project",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "plugin",
          description: "Manage language and resource provider plugins",
          subcommands: [
            {
              name: "install",
              description: "Install one or more plugins",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--exact",
                  description:
                    "Force installation of an exact version match (usually >= is accepted)",
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "Install a plugin from a tarball file, instead of downloading it",
                  args: { name: "file" },
                },
                {
                  name: "--reinstall",
                  description: "Reinstall a plugin even if it already exists",
                },
                {
                  name: "--server",
                  description: "A URL to download plugins from",
                  args: { name: "server" },
                },
                { name: ["--help", "-h"], description: "help for install" },
              ],
            },
            {
              name: "ls",
              description: "List plugins",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: ["--project", "-p"],
                  description:
                    "List only the plugins used by the current project",
                },
                { name: ["--help", "-h"], description: "help for ls" },
              ],
            },
            {
              name: "rm",
              description: "Remove one or more plugins from the download cache",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--all", "-a"], description: "Remove all plugins" },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Skip confirmation prompts, and proceed with removal anyway",
                },
                { name: ["--help", "-h"], description: "help for rm" },
              ],
            },
          ],
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "policy",
          description: "Manage resource policies",
          subcommands: [
            {
              name: "disable",
              description: "Disable a Policy Pack for a Pulumi organization",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--policy-group",
                  description:
                    "The Policy Group for which the Policy Pack will be disabled; if not specified, the default Policy Group is used",
                  args: { name: "policy-group" },
                },
                {
                  name: "--version",
                  description:
                    "The version of the Policy Pack that will be disabled; if not specified, any enabled version of the Policy Pack will be disabled",
                  args: { name: "version" },
                },
                { name: ["--help", "-h"], description: "help for disable" },
              ],
            },
            {
              name: "enable",
              description: "Enable a Policy Pack for a Pulumi organization",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--config",
                  description:
                    "The file path for the Policy Pack configuration file",
                  args: { name: "config" },
                },
                {
                  name: "--policy-group",
                  description:
                    "The Policy Group for which the Policy Pack will be enabled; if not specified, the default Policy Group is used",
                  args: { name: "policy-group" },
                },
                { name: ["--help", "-h"], description: "help for enable" },
              ],
            },
            {
              name: "group",
              description: "Manage policy groups",
              subcommands: [
                {
                  name: "ls",
                  description:
                    "List all Policy Groups for a Pulumi organization",
                  options: [
                    {
                      name: "--color",
                      description:
                        "Colorize output. Choices are: always, never, raw, auto",
                      args: { name: "color", default: "auto" },
                    },
                    {
                      name: ["--cwd", "-C"],
                      description:
                        "Run pulumi as if it had been started in another directory",
                      args: { name: "cwd" },
                    },
                    {
                      name: "--disable-integrity-checking",
                      description:
                        "Disable integrity checking of checkpoint files",
                    },
                    {
                      name: ["--emoji", "-e"],
                      description: "Enable emojis in the output",
                    },
                    {
                      name: "--logflow",
                      description:
                        "Flow log settings to child processes (like plugins)",
                    },
                    {
                      name: "--logtostderr",
                      description: "Log to stderr instead of to files",
                    },
                    {
                      name: "--non-interactive",
                      description: "Disable interactive mode for all commands",
                    },
                    {
                      name: "--profiling",
                      description:
                        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                      args: { name: "profiling" },
                    },
                    {
                      name: "--tracing",
                      description:
                        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                      args: { name: "tracing" },
                    },
                    {
                      name: "--tracing-header",
                      description:
                        "Include the tracing header with the given contents.",
                      args: { name: "tracing-header" },
                    },
                    {
                      name: ["--verbose", "-v"],
                      description:
                        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                      args: { name: "verbose", default: "0" },
                    },
                    {
                      name: ["--json", "-j"],
                      description: "Emit output as JSON",
                    },
                    { name: ["--help", "-h"], description: "help for ls" },
                  ],
                },
              ],
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--help", "-h"], description: "help for group" },
              ],
            },
            {
              name: "ls",
              description: "List all Policy Packs for a Pulumi organization",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                { name: ["--help", "-h"], description: "help for ls" },
              ],
            },
            {
              name: "new",
              description: "Create a new Pulumi Policy Pack",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--dir",
                  description:
                    "The location to place the generated Policy Pack; if not specified, the current directory is used",
                  args: { name: "dir" },
                },
                {
                  name: ["--force", "-f"],
                  description:
                    "Forces content to be generated even if it would change existing files",
                },
                {
                  name: ["--generate-only", "-g"],
                  description:
                    "Generate the Policy Pack only; do not install dependencies",
                },
                {
                  name: ["--offline", "-o"],
                  description:
                    "Use locally cached templates without making any network requests",
                },
                { name: ["--help", "-h"], description: "help for new" },
              ],
            },
            {
              name: "publish",
              description: "Publish a Policy Pack to the Pulumi service",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--help", "-h"], description: "help for publish" },
              ],
            },
            {
              name: "rm",
              description: "Removes a Policy Pack from a Pulumi organization",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Skip confirmation prompts, and proceed with removal anyway",
                },
                { name: ["--help", "-h"], description: "help for rm" },
              ],
            },
            {
              name: "validate-config",
              description: "Validate a Policy Pack configuration",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--config",
                  description:
                    "The file path for the Policy Pack configuration file",
                  args: { name: "config" },
                  isRequired: true,
                },
                {
                  name: ["--help", "-h"],
                  description: "help for validate-config",
                },
              ],
            },
          ],
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: ["pre", "preview"],
          description: "Show a preview of updates to a stack's resources",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "refresh",
          description: "Refresh the resources in a stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "stack",
          description: "Manage stacks",
          subcommands: [
            {
              name: "change-secrets-provider",
              description: "Change the secrets provider for the current stack",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: ["--help", "-h"],
                  description: "help for change-secrets-provider",
                },
              ],
            },
            {
              name: "export",
              description: "Export a stack's deployment to standard out",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--file",
                  description: "A filename to write stack output to",
                  args: { name: "file" },
                },
                {
                  name: "--show-secrets",
                  description:
                    "Emit secrets in plaintext in exported stack. Defaults to `false`",
                },
                {
                  name: "--version",
                  description:
                    "Previous stack version to export. (If unset, will export the latest.)",
                  args: { name: "version" },
                },
                { name: ["--help", "-h"], description: "help for export" },
              ],
            },
            {
              name: "graph",
              description: "Export a stack's dependency graph to a file",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--dependency-edge-color",
                  description:
                    "Sets the color of dependency edges in the graph",
                  args: { name: "dependency-edge-color", default: "#246C60" },
                },
                {
                  name: "--ignore-dependency-edges",
                  description:
                    "Ignores edges introduced by dependency resource relationships",
                },
                {
                  name: "--ignore-parent-edges",
                  description:
                    "Ignores edges introduced by parent/child resource relationships",
                },
                {
                  name: "--parent-edge-color",
                  description: "Sets the color of parent edges in the graph",
                  args: { name: "parent-edge-color", default: "#AA6639" },
                },
                { name: ["--help", "-h"], description: "help for graph" },
              ],
            },
            {
              name: ["hist", "history"],
              description: "[PREVIEW] Display history for a stack",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--full-dates",
                  description: "Show full dates, instead of relative dates",
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: "--page",
                  description: "Used with 'page-size' to paginate results",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--page-size",
                  description:
                    "Used with 'page' to control number of results returned",
                  args: { name: "page-size", default: "10" },
                },
                {
                  name: "--show-secrets",
                  description:
                    "Show secret values when listing config instead of displaying blinded values",
                },
                { name: ["--help", "-h"], description: "help for history" },
              ],
            },
            {
              name: "import",
              description:
                "Import a deployment from standard in into an existing stack",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--file",
                  description: "A filename to read stack input from",
                  args: { name: "file" },
                },
                {
                  name: ["--force", "-f"],
                  description:
                    "Force the import to occur, even if apparent errors are discovered beforehand (not recommended)",
                },
                { name: ["--help", "-h"], description: "help for import" },
              ],
            },
            {
              name: "init",
              description:
                "Create an empty stack with the given name, ready for updates",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--copy-config-from",
                  description:
                    "The name of the stack to copy existing config from",
                  args: { name: "copy-config-from" },
                },
                {
                  name: "--secrets-provider",
                  description:
                    "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault)",
                  args: { name: "secrets-provider", default: "default" },
                },
                { name: ["--help", "-h"], description: "help for init" },
              ],
            },
            {
              name: "ls",
              description: "List stacks",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: ["--all", "-a"],
                  description:
                    "List all stacks instead of just stacks for the current project",
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: ["--organization", "-o"],
                  description:
                    "Filter returned stacks to those in a specific organization",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Filter returned stacks to those with a specific project name",
                  args: { name: "project" },
                },
                {
                  name: ["--tag", "-t"],
                  description:
                    "Filter returned stacks to those in a specific tag (tag-name or tag-name=tag-value)",
                  args: { name: "tag" },
                },
                { name: ["--help", "-h"], description: "help for ls" },
              ],
            },
            {
              name: "output",
              description: "Show a stack's output properties",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: "--show-secrets",
                  description:
                    "Display outputs which are marked as secret in plaintext",
                },
                { name: ["--help", "-h"], description: "help for output" },
              ],
            },
            {
              name: "rename",
              description: "Rename an existing stack",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--help", "-h"], description: "help for rename" },
              ],
            },
            {
              name: "rm",
              description: "Remove a stack and its configuration",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: ["--force", "-f"],
                  description:
                    "Forces deletion of the stack, leaving behind any resources managed by the stack",
                },
                {
                  name: "--preserve-config",
                  description:
                    "Do not delete the corresponding Pulumi.<stack-name>.yaml configuration file for the stack",
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Skip confirmation prompts, and proceed with removal anyway",
                },
                { name: ["--help", "-h"], description: "help for rm" },
              ],
            },
            {
              name: "select",
              description: "Switch the current workspace to the given stack",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: ["--create", "-c"],
                  description: "If selected stack does not exist, create it",
                },
                {
                  name: "--secrets-provider",
                  description:
                    "Use with --create flag, The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault)",
                  args: { name: "secrets-provider", default: "default" },
                },
                { name: ["--help", "-h"], description: "help for select" },
              ],
            },
            {
              name: "tag",
              description: "Manage stack tags",
              subcommands: [
                {
                  name: "get",
                  description: "Get a single stack tag value",
                  options: [
                    {
                      name: "--color",
                      description:
                        "Colorize output. Choices are: always, never, raw, auto",
                      args: { name: "color", default: "auto" },
                    },
                    {
                      name: ["--cwd", "-C"],
                      description:
                        "Run pulumi as if it had been started in another directory",
                      args: { name: "cwd" },
                    },
                    {
                      name: "--disable-integrity-checking",
                      description:
                        "Disable integrity checking of checkpoint files",
                    },
                    {
                      name: ["--emoji", "-e"],
                      description: "Enable emojis in the output",
                    },
                    {
                      name: "--logflow",
                      description:
                        "Flow log settings to child processes (like plugins)",
                    },
                    {
                      name: "--logtostderr",
                      description: "Log to stderr instead of to files",
                    },
                    {
                      name: "--non-interactive",
                      description: "Disable interactive mode for all commands",
                    },
                    {
                      name: "--profiling",
                      description:
                        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                      args: { name: "profiling" },
                    },
                    {
                      name: ["--stack", "-s"],
                      description:
                        "The name of the stack to operate on. Defaults to the current stack",
                      args: { name: "stack" },
                    },
                    {
                      name: "--tracing",
                      description:
                        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                      args: { name: "tracing" },
                    },
                    {
                      name: "--tracing-header",
                      description:
                        "Include the tracing header with the given contents.",
                      args: { name: "tracing-header" },
                    },
                    {
                      name: ["--verbose", "-v"],
                      description:
                        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                      args: { name: "verbose", default: "0" },
                    },
                    { name: ["--help", "-h"], description: "help for get" },
                  ],
                },
                {
                  name: "ls",
                  description: "List all stack tags",
                  options: [
                    {
                      name: "--color",
                      description:
                        "Colorize output. Choices are: always, never, raw, auto",
                      args: { name: "color", default: "auto" },
                    },
                    {
                      name: ["--cwd", "-C"],
                      description:
                        "Run pulumi as if it had been started in another directory",
                      args: { name: "cwd" },
                    },
                    {
                      name: "--disable-integrity-checking",
                      description:
                        "Disable integrity checking of checkpoint files",
                    },
                    {
                      name: ["--emoji", "-e"],
                      description: "Enable emojis in the output",
                    },
                    {
                      name: "--logflow",
                      description:
                        "Flow log settings to child processes (like plugins)",
                    },
                    {
                      name: "--logtostderr",
                      description: "Log to stderr instead of to files",
                    },
                    {
                      name: "--non-interactive",
                      description: "Disable interactive mode for all commands",
                    },
                    {
                      name: "--profiling",
                      description:
                        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                      args: { name: "profiling" },
                    },
                    {
                      name: ["--stack", "-s"],
                      description:
                        "The name of the stack to operate on. Defaults to the current stack",
                      args: { name: "stack" },
                    },
                    {
                      name: "--tracing",
                      description:
                        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                      args: { name: "tracing" },
                    },
                    {
                      name: "--tracing-header",
                      description:
                        "Include the tracing header with the given contents.",
                      args: { name: "tracing-header" },
                    },
                    {
                      name: ["--verbose", "-v"],
                      description:
                        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                      args: { name: "verbose", default: "0" },
                    },
                    {
                      name: ["--json", "-j"],
                      description: "Emit output as JSON",
                    },
                    { name: ["--help", "-h"], description: "help for ls" },
                  ],
                },
                {
                  name: "rm",
                  description: "Remove a stack tag",
                  options: [
                    {
                      name: "--color",
                      description:
                        "Colorize output. Choices are: always, never, raw, auto",
                      args: { name: "color", default: "auto" },
                    },
                    {
                      name: ["--cwd", "-C"],
                      description:
                        "Run pulumi as if it had been started in another directory",
                      args: { name: "cwd" },
                    },
                    {
                      name: "--disable-integrity-checking",
                      description:
                        "Disable integrity checking of checkpoint files",
                    },
                    {
                      name: ["--emoji", "-e"],
                      description: "Enable emojis in the output",
                    },
                    {
                      name: "--logflow",
                      description:
                        "Flow log settings to child processes (like plugins)",
                    },
                    {
                      name: "--logtostderr",
                      description: "Log to stderr instead of to files",
                    },
                    {
                      name: "--non-interactive",
                      description: "Disable interactive mode for all commands",
                    },
                    {
                      name: "--profiling",
                      description:
                        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                      args: { name: "profiling" },
                    },
                    {
                      name: ["--stack", "-s"],
                      description:
                        "The name of the stack to operate on. Defaults to the current stack",
                      args: { name: "stack" },
                    },
                    {
                      name: "--tracing",
                      description:
                        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                      args: { name: "tracing" },
                    },
                    {
                      name: "--tracing-header",
                      description:
                        "Include the tracing header with the given contents.",
                      args: { name: "tracing-header" },
                    },
                    {
                      name: ["--verbose", "-v"],
                      description:
                        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                      args: { name: "verbose", default: "0" },
                    },
                    { name: ["--help", "-h"], description: "help for rm" },
                  ],
                },
                {
                  name: "set",
                  description: "Set a stack tag",
                  options: [
                    {
                      name: "--color",
                      description:
                        "Colorize output. Choices are: always, never, raw, auto",
                      args: { name: "color", default: "auto" },
                    },
                    {
                      name: ["--cwd", "-C"],
                      description:
                        "Run pulumi as if it had been started in another directory",
                      args: { name: "cwd" },
                    },
                    {
                      name: "--disable-integrity-checking",
                      description:
                        "Disable integrity checking of checkpoint files",
                    },
                    {
                      name: ["--emoji", "-e"],
                      description: "Enable emojis in the output",
                    },
                    {
                      name: "--logflow",
                      description:
                        "Flow log settings to child processes (like plugins)",
                    },
                    {
                      name: "--logtostderr",
                      description: "Log to stderr instead of to files",
                    },
                    {
                      name: "--non-interactive",
                      description: "Disable interactive mode for all commands",
                    },
                    {
                      name: "--profiling",
                      description:
                        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                      args: { name: "profiling" },
                    },
                    {
                      name: ["--stack", "-s"],
                      description:
                        "The name of the stack to operate on. Defaults to the current stack",
                      args: { name: "stack" },
                    },
                    {
                      name: "--tracing",
                      description:
                        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                      args: { name: "tracing" },
                    },
                    {
                      name: "--tracing-header",
                      description:
                        "Include the tracing header with the given contents.",
                      args: { name: "tracing-header" },
                    },
                    {
                      name: ["--verbose", "-v"],
                      description:
                        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                      args: { name: "verbose", default: "0" },
                    },
                    { name: ["--help", "-h"], description: "help for set" },
                  ],
                },
              ],
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                { name: ["--help", "-h"], description: "help for tag" },
              ],
            },
          ],
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "state",
          description: "Edit the current stack's state",
          subcommands: [
            {
              name: "delete",
              description: "Deletes a resource from a stack's state",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--force",
                  description: "Force deletion of protected resources",
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Skip confirmation prompts",
                },
                { name: ["--help", "-h"], description: "help for delete" },
              ],
            },
            {
              name: "unprotect",
              description: "Unprotect resources in a stack's state",
              options: [
                {
                  name: "--color",
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: { name: "color", default: "auto" },
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: { name: "cwd" },
                },
                {
                  name: "--disable-integrity-checking",
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: "--logflow",
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: "--logtostderr",
                  description: "Log to stderr instead of to files",
                },
                {
                  name: "--non-interactive",
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: "--profiling",
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: { name: "profiling" },
                },
                {
                  name: "--tracing",
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: { name: "tracing" },
                },
                {
                  name: "--tracing-header",
                  description:
                    "Include the tracing header with the given contents.",
                  args: { name: "tracing-header" },
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: { name: "verbose", default: "0" },
                },
                {
                  name: "--all",
                  description: "Unprotect all resources in the checkpoint",
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: { name: "stack" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Skip confirmation prompts",
                },
                { name: ["--help", "-h"], description: "help for unprotect" },
              ],
            },
          ],
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: ["update", "up"],
          description: "Create or update the resources in a stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "version",
          description: "Print Pulumi's version number",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "watch",
          description: "[PREVIEW] Continuously update the resources in a stack",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
        {
          name: "whoami",
          description: "Display the current logged-in user",
          options: [
            {
              name: "--color",
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: { name: "color", default: "auto" },
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: { name: "cwd" },
            },
            {
              name: "--disable-integrity-checking",
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: "--logflow",
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: "--logtostderr",
              description: "Log to stderr instead of to files",
            },
            {
              name: "--non-interactive",
              description: "Disable interactive mode for all commands",
            },
            {
              name: "--profiling",
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: { name: "profiling" },
            },
            {
              name: "--tracing",
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: { name: "tracing" },
            },
            {
              name: "--tracing-header",
              description:
                "Include the tracing header with the given contents.",
              args: { name: "tracing-header" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: { name: "verbose", default: "0" },
            },
            { name: ["--help", "-h"], description: "help for whoami" },
          ],
        },
      ],
      options: [
        {
          name: "--color",
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: { name: "color", default: "auto" },
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: { name: "cwd" },
        },
        {
          name: "--disable-integrity-checking",
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: "--logflow",
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: "--logtostderr",
          description: "Log to stderr instead of to files",
        },
        {
          name: "--non-interactive",
          description: "Disable interactive mode for all commands",
        },
        {
          name: "--profiling",
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: { name: "profiling" },
        },
        {
          name: "--tracing",
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: { name: "tracing" },
        },
        {
          name: "--tracing-header",
          description: "Include the tracing header with the given contents.",
          args: { name: "tracing-header" },
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: { name: "verbose", default: "0" },
        },
        { name: ["--help", "-h"], description: "help for help" },
      ],
    },
  ],
  options: [
    {
      name: "--color",
      description: "Colorize output. Choices are: always, never, raw, auto",
      args: { name: "color", default: "auto" },
    },
    {
      name: ["--cwd", "-C"],
      description: "Run pulumi as if it had been started in another directory",
      args: { name: "cwd" },
    },
    {
      name: "--disable-integrity-checking",
      description: "Disable integrity checking of checkpoint files",
    },
    { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
    {
      name: "--logflow",
      description: "Flow log settings to child processes (like plugins)",
    },
    { name: "--logtostderr", description: "Log to stderr instead of to files" },
    {
      name: "--non-interactive",
      description: "Disable interactive mode for all commands",
    },
    {
      name: "--profiling",
      description:
        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
      args: { name: "profiling" },
    },
    {
      name: "--tracing",
      description:
        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
      args: { name: "tracing" },
    },
    {
      name: "--tracing-header",
      description: "Include the tracing header with the given contents.",
      args: { name: "tracing-header" },
    },
    {
      name: ["--verbose", "-v"],
      description:
        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
      args: { name: "verbose", default: "0" },
    },
    { name: ["--help", "-h"], description: "help for pulumi" },
  ],
};

export default completionSpec;
