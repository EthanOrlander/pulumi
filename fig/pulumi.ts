const completionSpec: Fig.Spec = {
  name: "pulumi",
  description: "Pulumi command line",
  subcommands: [
    {
      name: ["cancel"],
      description: "Cancel a stack's currently running update, if any",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["config"],
      description: "Manage configuration",
      subcommands: [
        {
          name: ["cp"],
          description: "Copy config to another stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--config-file"],
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: [{ name: "config-file" }],
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: ["--show-secrets"],
              description:
                "Show secret values when listing config instead of displaying blinded values",
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["get"],
          description: "Get a single configuration value",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--config-file"],
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: [{ name: "config-file" }],
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: ["--show-secrets"],
              description:
                "Show secret values when listing config instead of displaying blinded values",
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["refresh"],
          description:
            "Update the local configuration based on the most recent deployment of the stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--config-file"],
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: [{ name: "config-file" }],
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: ["--show-secrets"],
              description:
                "Show secret values when listing config instead of displaying blinded values",
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["rm"],
          description: "Remove configuration value",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--config-file"],
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: [{ name: "config-file" }],
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: ["--show-secrets"],
              description:
                "Show secret values when listing config instead of displaying blinded values",
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["rm-all"],
          description: "Remove multiple configuration values",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--config-file"],
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: [{ name: "config-file" }],
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: ["--show-secrets"],
              description:
                "Show secret values when listing config instead of displaying blinded values",
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["set"],
          description: "Set configuration value",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--config-file"],
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: [{ name: "config-file" }],
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: ["--show-secrets"],
              description:
                "Show secret values when listing config instead of displaying blinded values",
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["set-all"],
          description: "Set multiple configuration values",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--config-file"],
              description:
                "Use the configuration values in the specified file rather than detecting the file name",
              args: [{ name: "config-file" }],
            },
            { name: ["--json", "-j"], description: "Emit output as JSON" },
            {
              name: ["--show-secrets"],
              description:
                "Show secret values when listing config instead of displaying blinded values",
            },
            {
              name: ["--stack", "-s"],
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: [{ name: "stack" }],
            },
          ],
        },
      ],
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["console"],
      description: "Opens the current stack in the Pulumi Console",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["destroy"],
      description: "Destroy an existing stack and its resources",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["import"],
      description: "Import resources into an existing stack",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["login"],
      description: "Log in to the Pulumi service",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["logout"],
      description: "Log out of the Pulumi service",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["logs"],
      description: "[PREVIEW] Show aggregated resource logs for a stack",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["new"],
      description: "Create a new Pulumi project",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["plugin"],
      description: "Manage language and resource provider plugins",
      subcommands: [
        {
          name: ["install"],
          description: "Install one or more plugins",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["ls"],
          description: "List plugins",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["rm"],
          description: "Remove one or more plugins from the download cache",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
      ],
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["policy"],
      description: "Manage resource policies",
      subcommands: [
        {
          name: ["disable"],
          description: "Disable a Policy Pack for a Pulumi organization",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["enable"],
          description: "Enable a Policy Pack for a Pulumi organization",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["group"],
          description: "Manage policy groups",
          subcommands: [
            {
              name: ["ls"],
              description: "List all Policy Groups for a Pulumi organization",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
          ],
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["ls"],
          description: "List all Policy Packs for a Pulumi organization",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["new"],
          description: "Create a new Pulumi Policy Pack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["publish"],
          description: "Publish a Policy Pack to the Pulumi service",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["rm"],
          description: "Removes a Policy Pack from a Pulumi organization",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["validate-config"],
          description: "Validate a Policy Pack configuration",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
      ],
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["pre", "preview"],
      description: "Show a preview of updates to a stack's resources",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["refresh"],
      description: "Refresh the resources in a stack",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["stack"],
      description: "Manage stacks",
      subcommands: [
        {
          name: ["change-secrets-provider"],
          description: "Change the secrets provider for the current stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["export"],
          description: "Export a stack's deployment to standard out",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["graph"],
          description: "Export a stack's dependency graph to a file",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["hist", "history"],
          description: "[PREVIEW] Display history for a stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["import"],
          description:
            "Import a deployment from standard in into an existing stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["init"],
          description:
            "Create an empty stack with the given name, ready for updates",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["ls"],
          description: "List stacks",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["output"],
          description: "Show a stack's output properties",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["rename"],
          description: "Rename an existing stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["rm"],
          description: "Remove a stack and its configuration",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["select"],
          description: "Switch the current workspace to the given stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
        {
          name: ["tag"],
          description: "Manage stack tags",
          subcommands: [
            {
              name: ["get"],
              description: "Get a single stack tag value",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: [{ name: "stack" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["ls"],
              description: "List all stack tags",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: [{ name: "stack" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["rm"],
              description: "Remove a stack tag",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: [{ name: "stack" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["set"],
              description: "Set a stack tag",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: [{ name: "stack" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
          ],
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
            {
              name: ["--show-ids", "-i"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            {
              name: ["--show-name"],
              description: "Display only the stack name",
            },
            {
              name: ["--show-secrets"],
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
              args: [{ name: "stack" }],
            },
          ],
        },
      ],
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["state"],
      description: "Edit the current stack's state",
      subcommands: [
        {
          name: ["delete"],
          description: "Deletes a resource from a stack's state",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["unprotect"],
          description: "Unprotect resources in a stack's state",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
      ],
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["update", "up"],
      description: "Create or update the resources in a stack",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["version"],
      description: "Print Pulumi's version number",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["watch"],
      description: "[PREVIEW] Continuously update the resources in a stack",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["whoami"],
      description: "Display the current logged-in user",
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
    {
      name: ["help"],
      description: "Help about any command",
      subcommands: [
        {
          name: ["cancel"],
          description: "Cancel a stack's currently running update, if any",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["config"],
          description: "Manage configuration",
          subcommands: [
            {
              name: ["cp"],
              description: "Copy config to another stack",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--config-file"],
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: [{ name: "config-file" }],
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: ["--show-secrets"],
                  description:
                    "Show secret values when listing config instead of displaying blinded values",
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["get"],
              description: "Get a single configuration value",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--config-file"],
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: [{ name: "config-file" }],
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: ["--show-secrets"],
                  description:
                    "Show secret values when listing config instead of displaying blinded values",
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["refresh"],
              description:
                "Update the local configuration based on the most recent deployment of the stack",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--config-file"],
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: [{ name: "config-file" }],
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: ["--show-secrets"],
                  description:
                    "Show secret values when listing config instead of displaying blinded values",
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["rm"],
              description: "Remove configuration value",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--config-file"],
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: [{ name: "config-file" }],
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: ["--show-secrets"],
                  description:
                    "Show secret values when listing config instead of displaying blinded values",
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["rm-all"],
              description: "Remove multiple configuration values",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--config-file"],
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: [{ name: "config-file" }],
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: ["--show-secrets"],
                  description:
                    "Show secret values when listing config instead of displaying blinded values",
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["set"],
              description: "Set configuration value",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--config-file"],
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: [{ name: "config-file" }],
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: ["--show-secrets"],
                  description:
                    "Show secret values when listing config instead of displaying blinded values",
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["set-all"],
              description: "Set multiple configuration values",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--config-file"],
                  description:
                    "Use the configuration values in the specified file rather than detecting the file name",
                  args: [{ name: "config-file" }],
                },
                { name: ["--json", "-j"], description: "Emit output as JSON" },
                {
                  name: ["--show-secrets"],
                  description:
                    "Show secret values when listing config instead of displaying blinded values",
                },
                {
                  name: ["--stack", "-s"],
                  description:
                    "The name of the stack to operate on. Defaults to the current stack",
                  args: [{ name: "stack" }],
                },
              ],
            },
          ],
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["console"],
          description: "Opens the current stack in the Pulumi Console",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["destroy"],
          description: "Destroy an existing stack and its resources",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["import"],
          description: "Import resources into an existing stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["login"],
          description: "Log in to the Pulumi service",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["logout"],
          description: "Log out of the Pulumi service",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["logs"],
          description: "[PREVIEW] Show aggregated resource logs for a stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["new"],
          description: "Create a new Pulumi project",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["plugin"],
          description: "Manage language and resource provider plugins",
          subcommands: [
            {
              name: ["install"],
              description: "Install one or more plugins",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["ls"],
              description: "List plugins",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["rm"],
              description: "Remove one or more plugins from the download cache",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
          ],
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["policy"],
          description: "Manage resource policies",
          subcommands: [
            {
              name: ["disable"],
              description: "Disable a Policy Pack for a Pulumi organization",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["enable"],
              description: "Enable a Policy Pack for a Pulumi organization",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["group"],
              description: "Manage policy groups",
              subcommands: [
                {
                  name: ["ls"],
                  description:
                    "List all Policy Groups for a Pulumi organization",
                  options: [
                    {
                      name: ["--color"],
                      description:
                        "Colorize output. Choices are: always, never, raw, auto",
                      args: [{ name: "color", default: "auto" }],
                    },
                    {
                      name: ["--cwd", "-C"],
                      description:
                        "Run pulumi as if it had been started in another directory",
                      args: [{ name: "cwd" }],
                    },
                    {
                      name: ["--disable-integrity-checking"],
                      description:
                        "Disable integrity checking of checkpoint files",
                    },
                    {
                      name: ["--emoji", "-e"],
                      description: "Enable emojis in the output",
                    },
                    {
                      name: ["--logflow"],
                      description:
                        "Flow log settings to child processes (like plugins)",
                    },
                    {
                      name: ["--logtostderr"],
                      description: "Log to stderr instead of to files",
                    },
                    {
                      name: ["--non-interactive"],
                      description: "Disable interactive mode for all commands",
                    },
                    {
                      name: ["--profiling"],
                      description:
                        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                      args: [{ name: "profiling" }],
                    },
                    {
                      name: ["--tracing"],
                      description:
                        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                      args: [{ name: "tracing" }],
                    },
                    {
                      name: ["--tracing-header"],
                      description:
                        "Include the tracing header with the given contents.",
                      args: [{ name: "tracing-header" }],
                    },
                    {
                      name: ["--verbose", "-v"],
                      description:
                        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                      args: [{ name: "verbose", default: "0" }],
                    },
                  ],
                },
              ],
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["ls"],
              description: "List all Policy Packs for a Pulumi organization",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["new"],
              description: "Create a new Pulumi Policy Pack",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["publish"],
              description: "Publish a Policy Pack to the Pulumi service",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["rm"],
              description: "Removes a Policy Pack from a Pulumi organization",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["validate-config"],
              description: "Validate a Policy Pack configuration",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
          ],
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["pre", "preview"],
          description: "Show a preview of updates to a stack's resources",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["refresh"],
          description: "Refresh the resources in a stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["stack"],
          description: "Manage stacks",
          subcommands: [
            {
              name: ["change-secrets-provider"],
              description: "Change the secrets provider for the current stack",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["export"],
              description: "Export a stack's deployment to standard out",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["graph"],
              description: "Export a stack's dependency graph to a file",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["hist", "history"],
              description: "[PREVIEW] Display history for a stack",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["import"],
              description:
                "Import a deployment from standard in into an existing stack",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["init"],
              description:
                "Create an empty stack with the given name, ready for updates",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["ls"],
              description: "List stacks",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["output"],
              description: "Show a stack's output properties",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["rename"],
              description: "Rename an existing stack",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["rm"],
              description: "Remove a stack and its configuration",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["select"],
              description: "Switch the current workspace to the given stack",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
            {
              name: ["tag"],
              description: "Manage stack tags",
              subcommands: [
                {
                  name: ["get"],
                  description: "Get a single stack tag value",
                  options: [
                    {
                      name: ["--color"],
                      description:
                        "Colorize output. Choices are: always, never, raw, auto",
                      args: [{ name: "color", default: "auto" }],
                    },
                    {
                      name: ["--cwd", "-C"],
                      description:
                        "Run pulumi as if it had been started in another directory",
                      args: [{ name: "cwd" }],
                    },
                    {
                      name: ["--disable-integrity-checking"],
                      description:
                        "Disable integrity checking of checkpoint files",
                    },
                    {
                      name: ["--emoji", "-e"],
                      description: "Enable emojis in the output",
                    },
                    {
                      name: ["--logflow"],
                      description:
                        "Flow log settings to child processes (like plugins)",
                    },
                    {
                      name: ["--logtostderr"],
                      description: "Log to stderr instead of to files",
                    },
                    {
                      name: ["--non-interactive"],
                      description: "Disable interactive mode for all commands",
                    },
                    {
                      name: ["--profiling"],
                      description:
                        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                      args: [{ name: "profiling" }],
                    },
                    {
                      name: ["--stack", "-s"],
                      description:
                        "The name of the stack to operate on. Defaults to the current stack",
                      args: [{ name: "stack" }],
                    },
                    {
                      name: ["--tracing"],
                      description:
                        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                      args: [{ name: "tracing" }],
                    },
                    {
                      name: ["--tracing-header"],
                      description:
                        "Include the tracing header with the given contents.",
                      args: [{ name: "tracing-header" }],
                    },
                    {
                      name: ["--verbose", "-v"],
                      description:
                        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                      args: [{ name: "verbose", default: "0" }],
                    },
                  ],
                },
                {
                  name: ["ls"],
                  description: "List all stack tags",
                  options: [
                    {
                      name: ["--color"],
                      description:
                        "Colorize output. Choices are: always, never, raw, auto",
                      args: [{ name: "color", default: "auto" }],
                    },
                    {
                      name: ["--cwd", "-C"],
                      description:
                        "Run pulumi as if it had been started in another directory",
                      args: [{ name: "cwd" }],
                    },
                    {
                      name: ["--disable-integrity-checking"],
                      description:
                        "Disable integrity checking of checkpoint files",
                    },
                    {
                      name: ["--emoji", "-e"],
                      description: "Enable emojis in the output",
                    },
                    {
                      name: ["--logflow"],
                      description:
                        "Flow log settings to child processes (like plugins)",
                    },
                    {
                      name: ["--logtostderr"],
                      description: "Log to stderr instead of to files",
                    },
                    {
                      name: ["--non-interactive"],
                      description: "Disable interactive mode for all commands",
                    },
                    {
                      name: ["--profiling"],
                      description:
                        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                      args: [{ name: "profiling" }],
                    },
                    {
                      name: ["--stack", "-s"],
                      description:
                        "The name of the stack to operate on. Defaults to the current stack",
                      args: [{ name: "stack" }],
                    },
                    {
                      name: ["--tracing"],
                      description:
                        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                      args: [{ name: "tracing" }],
                    },
                    {
                      name: ["--tracing-header"],
                      description:
                        "Include the tracing header with the given contents.",
                      args: [{ name: "tracing-header" }],
                    },
                    {
                      name: ["--verbose", "-v"],
                      description:
                        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                      args: [{ name: "verbose", default: "0" }],
                    },
                  ],
                },
                {
                  name: ["rm"],
                  description: "Remove a stack tag",
                  options: [
                    {
                      name: ["--color"],
                      description:
                        "Colorize output. Choices are: always, never, raw, auto",
                      args: [{ name: "color", default: "auto" }],
                    },
                    {
                      name: ["--cwd", "-C"],
                      description:
                        "Run pulumi as if it had been started in another directory",
                      args: [{ name: "cwd" }],
                    },
                    {
                      name: ["--disable-integrity-checking"],
                      description:
                        "Disable integrity checking of checkpoint files",
                    },
                    {
                      name: ["--emoji", "-e"],
                      description: "Enable emojis in the output",
                    },
                    {
                      name: ["--logflow"],
                      description:
                        "Flow log settings to child processes (like plugins)",
                    },
                    {
                      name: ["--logtostderr"],
                      description: "Log to stderr instead of to files",
                    },
                    {
                      name: ["--non-interactive"],
                      description: "Disable interactive mode for all commands",
                    },
                    {
                      name: ["--profiling"],
                      description:
                        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                      args: [{ name: "profiling" }],
                    },
                    {
                      name: ["--stack", "-s"],
                      description:
                        "The name of the stack to operate on. Defaults to the current stack",
                      args: [{ name: "stack" }],
                    },
                    {
                      name: ["--tracing"],
                      description:
                        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                      args: [{ name: "tracing" }],
                    },
                    {
                      name: ["--tracing-header"],
                      description:
                        "Include the tracing header with the given contents.",
                      args: [{ name: "tracing-header" }],
                    },
                    {
                      name: ["--verbose", "-v"],
                      description:
                        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                      args: [{ name: "verbose", default: "0" }],
                    },
                  ],
                },
                {
                  name: ["set"],
                  description: "Set a stack tag",
                  options: [
                    {
                      name: ["--color"],
                      description:
                        "Colorize output. Choices are: always, never, raw, auto",
                      args: [{ name: "color", default: "auto" }],
                    },
                    {
                      name: ["--cwd", "-C"],
                      description:
                        "Run pulumi as if it had been started in another directory",
                      args: [{ name: "cwd" }],
                    },
                    {
                      name: ["--disable-integrity-checking"],
                      description:
                        "Disable integrity checking of checkpoint files",
                    },
                    {
                      name: ["--emoji", "-e"],
                      description: "Enable emojis in the output",
                    },
                    {
                      name: ["--logflow"],
                      description:
                        "Flow log settings to child processes (like plugins)",
                    },
                    {
                      name: ["--logtostderr"],
                      description: "Log to stderr instead of to files",
                    },
                    {
                      name: ["--non-interactive"],
                      description: "Disable interactive mode for all commands",
                    },
                    {
                      name: ["--profiling"],
                      description:
                        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                      args: [{ name: "profiling" }],
                    },
                    {
                      name: ["--stack", "-s"],
                      description:
                        "The name of the stack to operate on. Defaults to the current stack",
                      args: [{ name: "stack" }],
                    },
                    {
                      name: ["--tracing"],
                      description:
                        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                      args: [{ name: "tracing" }],
                    },
                    {
                      name: ["--tracing-header"],
                      description:
                        "Include the tracing header with the given contents.",
                      args: [{ name: "tracing-header" }],
                    },
                    {
                      name: ["--verbose", "-v"],
                      description:
                        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                      args: [{ name: "verbose", default: "0" }],
                    },
                  ],
                },
              ],
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
                {
                  name: ["--show-ids", "-i"],
                  description:
                    "Display each resource's provider-assigned unique ID",
                },
                {
                  name: ["--show-name"],
                  description: "Display only the stack name",
                },
                {
                  name: ["--show-secrets"],
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
                  args: [{ name: "stack" }],
                },
              ],
            },
          ],
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["state"],
          description: "Edit the current stack's state",
          subcommands: [
            {
              name: ["delete"],
              description: "Deletes a resource from a stack's state",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
            {
              name: ["unprotect"],
              description: "Unprotect resources in a stack's state",
              options: [
                {
                  name: ["--color"],
                  description:
                    "Colorize output. Choices are: always, never, raw, auto",
                  args: [{ name: "color", default: "auto" }],
                },
                {
                  name: ["--cwd", "-C"],
                  description:
                    "Run pulumi as if it had been started in another directory",
                  args: [{ name: "cwd" }],
                },
                {
                  name: ["--disable-integrity-checking"],
                  description: "Disable integrity checking of checkpoint files",
                },
                {
                  name: ["--emoji", "-e"],
                  description: "Enable emojis in the output",
                },
                {
                  name: ["--logflow"],
                  description:
                    "Flow log settings to child processes (like plugins)",
                },
                {
                  name: ["--logtostderr"],
                  description: "Log to stderr instead of to files",
                },
                {
                  name: ["--non-interactive"],
                  description: "Disable interactive mode for all commands",
                },
                {
                  name: ["--profiling"],
                  description:
                    "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
                  args: [{ name: "profiling" }],
                },
                {
                  name: ["--tracing"],
                  description:
                    "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
                  args: [{ name: "tracing" }],
                },
                {
                  name: ["--tracing-header"],
                  description:
                    "Include the tracing header with the given contents.",
                  args: [{ name: "tracing-header" }],
                },
                {
                  name: ["--verbose", "-v"],
                  description:
                    "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
                  args: [{ name: "verbose", default: "0" }],
                },
              ],
            },
          ],
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["update", "up"],
          description: "Create or update the resources in a stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["version"],
          description: "Print Pulumi's version number",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["watch"],
          description: "[PREVIEW] Continuously update the resources in a stack",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
        {
          name: ["whoami"],
          description: "Display the current logged-in user",
          options: [
            {
              name: ["--color"],
              description:
                "Colorize output. Choices are: always, never, raw, auto",
              args: [{ name: "color", default: "auto" }],
            },
            {
              name: ["--cwd", "-C"],
              description:
                "Run pulumi as if it had been started in another directory",
              args: [{ name: "cwd" }],
            },
            {
              name: ["--disable-integrity-checking"],
              description: "Disable integrity checking of checkpoint files",
            },
            {
              name: ["--emoji", "-e"],
              description: "Enable emojis in the output",
            },
            {
              name: ["--logflow"],
              description:
                "Flow log settings to child processes (like plugins)",
            },
            {
              name: ["--logtostderr"],
              description: "Log to stderr instead of to files",
            },
            {
              name: ["--non-interactive"],
              description: "Disable interactive mode for all commands",
            },
            {
              name: ["--profiling"],
              description:
                "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
              args: [{ name: "profiling" }],
            },
            {
              name: ["--tracing"],
              description:
                "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
              args: [{ name: "tracing" }],
            },
            {
              name: ["--tracing-header"],
              description:
                "Include the tracing header with the given contents.",
              args: [{ name: "tracing-header" }],
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
              args: [{ name: "verbose", default: "0" }],
            },
          ],
        },
      ],
      options: [
        {
          name: ["--color"],
          description: "Colorize output. Choices are: always, never, raw, auto",
          args: [{ name: "color", default: "auto" }],
        },
        {
          name: ["--cwd", "-C"],
          description:
            "Run pulumi as if it had been started in another directory",
          args: [{ name: "cwd" }],
        },
        {
          name: ["--disable-integrity-checking"],
          description: "Disable integrity checking of checkpoint files",
        },
        { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
        {
          name: ["--logflow"],
          description: "Flow log settings to child processes (like plugins)",
        },
        {
          name: ["--logtostderr"],
          description: "Log to stderr instead of to files",
        },
        {
          name: ["--non-interactive"],
          description: "Disable interactive mode for all commands",
        },
        {
          name: ["--profiling"],
          description:
            "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
          args: [{ name: "profiling" }],
        },
        {
          name: ["--tracing"],
          description:
            "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
          args: [{ name: "tracing" }],
        },
        {
          name: ["--tracing-header"],
          description: "Include the tracing header with the given contents.",
          args: [{ name: "tracing-header" }],
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
          args: [{ name: "verbose", default: "0" }],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--color"],
      description: "Colorize output. Choices are: always, never, raw, auto",
      args: [{ name: "color", default: "auto" }],
    },
    {
      name: ["--cwd", "-C"],
      description: "Run pulumi as if it had been started in another directory",
      args: [{ name: "cwd" }],
    },
    {
      name: ["--disable-integrity-checking"],
      description: "Disable integrity checking of checkpoint files",
    },
    { name: ["--emoji", "-e"], description: "Enable emojis in the output" },
    {
      name: ["--logflow"],
      description: "Flow log settings to child processes (like plugins)",
    },
    {
      name: ["--logtostderr"],
      description: "Log to stderr instead of to files",
    },
    {
      name: ["--non-interactive"],
      description: "Disable interactive mode for all commands",
    },
    {
      name: ["--profiling"],
      description:
        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
      args: [{ name: "profiling" }],
    },
    {
      name: ["--tracing"],
      description:
        "Emit tracing to the specified endpoint. Use the `file:` scheme to write tracing data to a local file",
      args: [{ name: "tracing" }],
    },
    {
      name: ["--tracing-header"],
      description: "Include the tracing header with the given contents.",
      args: [{ name: "tracing-header" }],
    },
    {
      name: ["--verbose", "-v"],
      description:
        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
      args: [{ name: "verbose", default: "0" }],
    },
  ],
};
export default completionSpec;
