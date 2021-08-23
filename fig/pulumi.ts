const completionSpec: Fig.Spec = {
  name: "pulumi",
  description: "Pulumi command line",
  subcommands: [
    {
      name: ["cancel"],
      description: "Cancel a stack's currently running update, if any",
    },
    {
      name: ["completion"],
      description: "generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: ["bash"],
          description: "generate the autocompletion script for bash",
          options: [
            {
              name: ["--no-descriptions"],
              description: "disable completion descriptions",
            },
          ],
        },
        {
          name: ["fish"],
          description: "generate the autocompletion script for fish",
          options: [
            {
              name: ["--no-descriptions"],
              description: "disable completion descriptions",
            },
          ],
        },
        {
          name: ["powershell"],
          description: "generate the autocompletion script for powershell",
          options: [
            {
              name: ["--no-descriptions"],
              description: "disable completion descriptions",
            },
          ],
        },
        {
          name: ["zsh"],
          description: "generate the autocompletion script for zsh",
          options: [
            {
              name: ["--no-descriptions"],
              description: "disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: ["config"],
      description: "Manage configuration",
      subcommands: [
        { name: ["cp"], description: "Copy config to another stack" },
        {
          name: ["get"],
          description: "Get a single configuration value",
          options: [
            { name: ["--json", "-j"], description: "Emit output as JSON" },
          ],
        },
        {
          name: ["refresh"],
          description:
            "Update the local configuration based on the most recent deployment of the stack",
        },
        { name: ["rm"], description: "Remove configuration value" },
        {
          name: ["rm-all"],
          description: "Remove multiple configuration values",
        },
        { name: ["set"], description: "Set configuration value" },
        { name: ["set-all"], description: "Set multiple configuration values" },
      ],
      options: [
        { name: ["--json", "-j"], description: "Emit output as JSON" },
        {
          name: ["--show-secrets"],
          description:
            "Show secret values when listing config instead of displaying blinded values",
        },
      ],
    },
    {
      name: ["console"],
      description: "Opens the current stack in the Pulumi Console",
    },
    {
      name: ["destroy"],
      description: "Destroy an existing stack and its resources",
    },
    {
      name: ["import"],
      description: "Import resources into an existing stack",
    },
    { name: ["login"], description: "Log in to the Pulumi service" },
    { name: ["logout"], description: "Log out of the Pulumi service" },
    {
      name: ["logs"],
      description: "[PREVIEW] Show aggregated resource logs for a stack",
    },
    { name: ["new"], description: "Create a new Pulumi project" },
    {
      name: ["plugin"],
      description: "Manage language and resource provider plugins",
      subcommands: [
        { name: ["install"], description: "Install one or more plugins" },
        { name: ["ls"], description: "List plugins" },
        {
          name: ["rm"],
          description: "Remove one or more plugins from the download cache",
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
        },
        {
          name: ["enable"],
          description: "Enable a Policy Pack for a Pulumi organization",
        },
        {
          name: ["group"],
          description: "Manage policy groups",
          subcommands: [
            {
              name: ["ls"],
              description: "List all Policy Groups for a Pulumi organization",
            },
          ],
        },
        {
          name: ["ls"],
          description: "List all Policy Packs for a Pulumi organization",
        },
        { name: ["new"], description: "Create a new Pulumi Policy Pack" },
        {
          name: ["publish"],
          description: "Publish a Policy Pack to the Pulumi service",
        },
        {
          name: ["rm"],
          description: "Removes a Policy Pack from a Pulumi organization",
        },
        {
          name: ["validate-config"],
          description: "Validate a Policy Pack configuration",
          options: [
            {
              name: ["--config"],
              description:
                "The file path for the Policy Pack configuration file",
              args: [{ name: "config" }],
            },
          ],
        },
      ],
    },
    {
      name: ["pre", "preview"],
      description: "Show a preview of updates to a stack's resources",
      options: [
        {
          name: ["--json", "-j"],
          description:
            "Serialize the preview diffs, operations, and overall output as JSON",
        },
      ],
    },
    { name: ["refresh"], description: "Refresh the resources in a stack" },
    {
      name: ["stack"],
      description: "Manage stacks",
      subcommands: [
        {
          name: ["change-secrets-provider"],
          description: "Change the secrets provider for the current stack",
        },
        {
          name: ["export"],
          description: "Export a stack's deployment to standard out",
          options: [
            {
              name: ["--show-secrets"],
              description:
                "Emit secrets in plaintext in exported stack. Defaults to `false`",
            },
          ],
        },
        {
          name: ["graph"],
          description: "Export a stack's dependency graph to a file",
        },
        {
          name: ["hist", "history"],
          description: "[PREVIEW] Display history for a stack",
          options: [
            {
              name: ["--show-secrets"],
              description:
                "Show secret values when listing config instead of displaying blinded values",
            },
          ],
        },
        {
          name: ["import"],
          description:
            "Import a deployment from standard in into an existing stack",
        },
        {
          name: ["init"],
          description:
            "Create an empty stack with the given name, ready for updates",
        },
        { name: ["ls"], description: "List stacks" },
        { name: ["output"], description: "Show a stack's output properties" },
        { name: ["rename"], description: "Rename an existing stack" },
        { name: ["rm"], description: "Remove a stack and its configuration" },
        {
          name: ["select"],
          description: "Switch the current workspace to the given stack",
        },
        {
          name: ["tag"],
          description: "Manage stack tags",
          subcommands: [
            { name: ["get"], description: "Get a single stack tag value" },
            { name: ["ls"], description: "List all stack tags" },
            { name: ["rm"], description: "Remove a stack tag" },
            { name: ["set"], description: "Set a stack tag" },
          ],
        },
      ],
      options: [
        {
          name: ["--show-ids", "-i"],
          description: "Display each resource's provider-assigned unique ID",
        },
        { name: ["--show-name"], description: "Display only the stack name" },
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
              name: ["--force"],
              description: "Force deletion of protected resources",
            },
            { name: ["--yes", "-y"], description: "Skip confirmation prompts" },
          ],
        },
        {
          name: ["unprotect"],
          description: "Unprotect resources in a stack's state",
          options: [
            {
              name: ["--all"],
              description: "Unprotect all resources in the checkpoint",
            },
            { name: ["--yes", "-y"], description: "Skip confirmation prompts" },
          ],
        },
      ],
    },
    {
      name: ["update", "up"],
      description: "Create or update the resources in a stack",
    },
    { name: ["version"], description: "Print Pulumi's version number" },
    {
      name: ["watch"],
      description: "[PREVIEW] Continuously update the resources in a stack",
    },
    { name: ["whoami"], description: "Display the current logged-in user" },
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
