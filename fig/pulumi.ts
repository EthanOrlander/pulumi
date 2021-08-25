const completionSpec: Fig.Spec = {
    name: "pulumi",
    description: "Pulumi command line",
    subcommands: [
      {
        name: ["cancel"],
        description: "Cancel a stack's currently running update, if any",
        options: [
          {
            name: ["--stack", "-s"],
            description:
              "The name of the stack to operate on. Defaults to the current stack",
            args: [{ name: "stack" }],
          },
          {
            name: ["--yes", "-y"],
            description:
              "Skip confirmation prompts, and proceed with cancellation anyway",
          },
        ],
      },
      // completion command exists in my local dev version, but not in the release
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
          {
            name: ["cp"],
            description: "Copy config to another stack",
            options: [
              {
                name: ["--dest", "-d"],
                description: "The name of the new stack to copy the config to",
                args: [{ name: "dest" }],
              },
              {
                name: ["--path"],
                description:
                  "The key contains a path to a property in a map or list to set",
              },
            ],
          },
          {
            name: ["get"],
            description: "Get a single configuration value",
            options: [
              { name: ["--json", "-j"], description: "Emit output as JSON" },
              {
                name: ["--path"],
                description:
                  "The key contains a path to a property in a map or list to get",
              },
            ],
          },
          {
            name: ["refresh"],
            description:
              "Update the local configuration based on the most recent deployment of the stack",
            options: [
              {
                name: ["--force", "-f"],
                description:
                  "Overwrite configuration file, if it exists, without creating a backup",
              },
            ],
          },
          {
            name: ["rm"],
            description: "Remove configuration value",
            options: [
              {
                name: ["--path"],
                description:
                  "The key contains a path to a property in a map or list to remove",
              },
            ],
          },
          {
            name: ["rm-all"],
            description: "Remove multiple configuration values",
            options: [
              {
                name: ["--path"],
                description:
                  "Parse the keys as paths in a map or list rather than raw strings",
              },
            ],
          },
          {
            name: ["set"],
            description: "Set configuration value",
            options: [
              {
                name: ["--path"],
                description:
                  "The key contains a path to a property in a map or list to set",
              },
              {
                name: ["--plaintext"],
                description: "Save the value as plaintext (unencrypted)",
              },
              {
                name: ["--secret"],
                description:
                  "Encrypt the value instead of storing it in plaintext",
              },
            ],
          },
          {
            name: ["set-all"],
            description: "Set multiple configuration values",
            options: [
              {
                name: ["--path"],
                description:
                  "Parse the keys as paths in a map or list rather than raw strings",
              },
              {
                name: ["--plaintext"],
                description: "Marks a value as plaintext (unencrypted)",
                isRepeatable: true,
                args: [{ name: "plaintext", default: "[]" }],
              },
              {
                name: ["--secret"],
                description: "Marks a value as secret to be encrypted",
                isRepeatable: true,
                args: [{ name: "secret", default: "[]" }],
              },
            ],
          },
        ],
        options: [
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
        name: ["console"],
        description: "Opens the current stack in the Pulumi Console",
        options: [
          {
            name: ["--stack", "-s"],
            description: "The name of the stack to view",
            args: [{ name: "stack" }],
          },
        ],
      },
      {
        name: ["destroy"],
        description: "Destroy an existing stack and its resources",
        options: [
          {
            name: ["--config-file"],
            description:
              "Use the configuration values in the specified file rather than detecting the file name",
            args: [{ name: "config-file" }],
          },
          {
            name: ["--debug", "-d"],
            description:
              "Print detailed debugging output during resource operations",
          },
          {
            name: ["--diff"],
            description:
              "Display operation as a rich diff showing the overall change",
          },
          {
            name: ["--exec-agent"],
            description: "",
            args: [{ name: "exec-agent" }],
          },
          {
            name: ["--exec-kind"],
            description: "",
            args: [{ name: "exec-kind" }],
          },
          {
            name: ["--message", "-m"],
            description:
              "Optional message to associate with the destroy operation",
            args: [{ name: "message" }],
          },
          {
            name: ["--parallel", "-p"],
            description:
              "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
            args: [{ name: "parallel", default: "2147483647" }],
          },
          {
            name: ["--refresh", "-r"],
            description:
              "Refresh the state of the stack's resources before this update",
          },
          {
            name: ["--show-config"],
            description: "Show configuration keys and variables",
          },
          {
            name: ["--show-replacement-steps"],
            description:
              "Show detailed resource replacement creates and deletes instead of a single step",
          },
          {
            name: ["--show-sames"],
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
            args: [{ name: "stack" }],
          },
          {
            name: ["--suppress-outputs"],
            description:
              "Suppress display of stack outputs (in case they contain sensitive values)",
          },
          {
            name: ["--suppress-permalink"],
            description: "Suppress display of the state permalink",
            args: [{ name: "suppress-permalink" }],
          },
          {
            name: ["--target", "-t"],
            description:
              "Specify a single resource URN to destroy. All resources necessary to destroy this target will also be destroyed. Multiple resources can be specified using: --target urn1 --target urn2",
            isRepeatable: true,
            args: [{ name: "target", default: "[]" }],
          },
          {
            name: ["--target-dependents"],
            description:
              "Allows destroying of dependent targets discovered but not specified in --target list",
          },
          {
            name: ["--yes", "-y"],
            description:
              "Automatically approve and perform the destroy after previewing it",
          },
        ],
      },
      {
        name: ["import"],
        description: "Import resources into an existing stack",
        options: [
          {
            name: ["--config-file"],
            description:
              "Use the configuration values in the specified file rather than detecting the file name",
            args: [{ name: "config-file" }],
          },
          {
            name: ["--debug", "-d"],
            description:
              "Print detailed debugging output during resource operations",
          },
          {
            name: ["--diff"],
            description:
              "Display operation as a rich diff showing the overall change",
          },
          {
            name: ["--exec-agent"],
            description: "",
            args: [{ name: "exec-agent" }],
          },
          {
            name: ["--exec-kind"],
            description: "",
            args: [{ name: "exec-kind" }],
          },
          {
            name: ["--file", "-f"],
            description:
              "The path to a JSON-encoded file containing a list of resources to import",
            args: [{ name: "file" }],
          },
          {
            name: ["--message", "-m"],
            description:
              "Optional message to associate with the update operation",
            args: [{ name: "message" }],
          },
          {
            name: ["--out", "-o"],
            description:
              "The path to the file that will contain the generated resource declarations",
            args: [{ name: "out" }],
          },
          {
            name: ["--parallel", "-p"],
            description:
              "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
            args: [{ name: "parallel", default: "2147483647" }],
          },
          {
            name: ["--parent"],
            description:
              "The name and URN of the parent resource in the format name=urn, where name is the variable name of the parent resource",
            args: [{ name: "parent" }],
          },
          {
            name: ["--protect"],
            description:
              "Allow resources to be imported with protection from deletion enabled",
          },
          {
            name: ["--provider"],
            description:
              "The name and URN of the provider to use for the import in the format name=urn, where name is the variable name for the provider resource",
            args: [{ name: "provider" }],
          },
          {
            name: ["--skip-preview"],
            description: "Do not perform a preview before performing the refresh",
          },
          {
            name: ["--stack", "-s"],
            description:
              "The name of the stack to operate on. Defaults to the current stack",
            args: [{ name: "stack" }],
          },
          {
            name: ["--suppress-outputs"],
            description:
              "Suppress display of stack outputs (in case they contain sensitive values)",
          },
          {
            name: ["--suppress-permalink"],
            description: "Suppress display of the state permalink",
            args: [{ name: "suppress-permalink" }],
          },
          {
            name: ["--yes", "-y"],
            description:
              "Automatically approve and perform the refresh after previewing it",
          },
        ],
      },
      {
        name: ["login"],
        description: "Log in to the Pulumi service",
        options: [
          {
            name: ["--cloud-url", "-c"],
            description: "A cloud URL to log in to",
            args: [{ name: "cloud-url" }],
          },
          {
            name: ["--local", "-l"],
            description: "Use Pulumi in local-only mode",
          },
        ],
      },
      {
        name: ["logout"],
        description: "Log out of the Pulumi service",
        options: [
          { name: ["--all"], description: "Logout of all backends" },
          {
            name: ["--cloud-url", "-c"],
            description: "A cloud URL to log out of (defaults to current cloud)",
            args: [{ name: "cloud-url" }],
          },
          { name: ["--local", "-l"], description: "Log out of using local mode" },
        ],
      },
      {
        name: ["logs"],
        description: "[PREVIEW] Show aggregated resource logs for a stack",
        options: [
          {
            name: ["--config-file"],
            description:
              "Use the configuration values in the specified file rather than detecting the file name",
            args: [{ name: "config-file" }],
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
            args: [{ name: "resource" }],
          },
          {
            name: ["--since"],
            description:
              "Only return logs newer than a relative duration ('5s', '2m', '3h') or absolute timestamp.  Defaults to returning the last 1 hour of logs.",
            args: [{ name: "since", default: "1h" }],
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
        name: ["new"],
        description: "Create a new Pulumi project",
        options: [
          {
            name: ["--config", "-c"],
            description: "Config to save",
            isRepeatable: true,
            args: [{ name: "config", default: "[]" }],
          },
          {
            name: ["--config-path"],
            description:
              "Config keys contain a path to a property in a map or list to set",
          },
          {
            name: ["--description", "-d"],
            description:
              "The project description; if not specified, a prompt will request it",
            args: [{ name: "description" }],
          },
          {
            name: ["--dir"],
            description:
              "The location to place the generated project; if not specified, the current directory is used",
            args: [{ name: "dir" }],
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
            args: [{ name: "name" }],
          },
          {
            name: ["--offline", "-o"],
            description:
              "Use locally cached templates without making any network requests",
          },
          {
            name: ["--secrets-provider"],
            description:
              "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault)",
            args: [{ name: "secrets-provider", default: "default" }],
          },
          {
            name: ["--stack", "-s"],
            description:
              "The stack name; either an existing stack or stack to create; if not specified, a prompt will request it",
            args: [{ name: "stack" }],
          },
          {
            name: ["--yes", "-y"],
            description: "Skip prompts and proceed with default values",
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
                name: ["--exact"],
                description:
                  "Force installation of an exact version match (usually >= is accepted)",
              },
              {
                name: ["--file", "-f"],
                description:
                  "Install a plugin from a tarball file, instead of downloading it",
                args: [{ name: "file" }],
              },
              {
                name: ["--reinstall"],
                description: "Reinstall a plugin even if it already exists",
              },
              {
                name: ["--server"],
                description: "A URL to download plugins from",
                args: [{ name: "server" }],
              },
            ],
          },
          {
            name: ["ls"],
            description: "List plugins",
            options: [
              { name: ["--json", "-j"], description: "Emit output as JSON" },
              {
                name: ["--project", "-p"],
                description: "List only the plugins used by the current project",
              },
            ],
          },
          {
            name: ["rm"],
            description: "Remove one or more plugins from the download cache",
            options: [
              { name: ["--all", "-a"], description: "Remove all plugins" },
              {
                name: ["--yes", "-y"],
                description:
                  "Skip confirmation prompts, and proceed with removal anyway",
              },
            ],
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
                name: ["--policy-group"],
                description:
                  "The Policy Group for which the Policy Pack will be disabled; if not specified, the default Policy Group is used",
                args: [{ name: "policy-group" }],
              },
              {
                name: ["--version"],
                description:
                  "The version of the Policy Pack that will be disabled; if not specified, any enabled version of the Policy Pack will be disabled",
                args: [{ name: "version" }],
              },
            ],
          },
          {
            name: ["enable"],
            description: "Enable a Policy Pack for a Pulumi organization",
            options: [
              {
                name: ["--config"],
                description:
                  "The file path for the Policy Pack configuration file",
                args: [{ name: "config" }],
              },
              {
                name: ["--policy-group"],
                description:
                  "The Policy Group for which the Policy Pack will be enabled; if not specified, the default Policy Group is used",
                args: [{ name: "policy-group" }],
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
                  { name: ["--json", "-j"], description: "Emit output as JSON" },
                ],
              },
            ],
          },
          {
            name: ["ls"],
            description: "List all Policy Packs for a Pulumi organization",
            options: [
              { name: ["--json", "-j"], description: "Emit output as JSON" },
            ],
          },
          {
            name: ["new"],
            description: "Create a new Pulumi Policy Pack",
            options: [
              {
                name: ["--dir"],
                description:
                  "The location to place the generated Policy Pack; if not specified, the current directory is used",
                args: [{ name: "dir" }],
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
            ],
          },
          {
            name: ["publish"],
            description: "Publish a Policy Pack to the Pulumi service",
          },
          {
            name: ["rm"],
            description: "Removes a Policy Pack from a Pulumi organization",
            options: [
              {
                name: ["--yes", "-y"],
                description:
                  "Skip confirmation prompts, and proceed with removal anyway",
              },
            ],
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
            name: ["--client"],
            description:
              "The address of an existing language runtime host to connect to",
            args: [{ name: "client" }],
          },
          {
            name: ["--config", "-c"],
            description: "Config to use during the preview",
            isRepeatable: true,
            args: [{ name: "config", default: "[]" }],
          },
          {
            name: ["--config-file"],
            description:
              "Use the configuration values in the specified file rather than detecting the file name",
            args: [{ name: "config-file" }],
          },
          {
            name: ["--config-path"],
            description:
              "Config keys contain a path to a property in a map or list to set",
          },
          {
            name: ["--debug", "-d"],
            description:
              "Print detailed debugging output during resource operations",
          },
          {
            name: ["--diff"],
            description:
              "Display operation as a rich diff showing the overall change",
          },
          {
            name: ["--exec-agent"],
            description: "",
            args: [{ name: "exec-agent" }],
          },
          {
            name: ["--exec-kind"],
            description: "",
            args: [{ name: "exec-kind" }],
          },
          {
            name: ["--expect-no-changes"],
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
            args: [{ name: "message" }],
          },
          {
            name: ["--parallel", "-p"],
            description:
              "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
            args: [{ name: "parallel", default: "2147483647" }],
          },
          {
            name: ["--policy-pack"],
            description: "Run one or more policy packs as part of this update",
            args: [{ name: "policy-pack", default: "[]" }],
          },
          {
            name: ["--policy-pack-config"],
            description:
              'Path to JSON file containing the config for the policy pack of the corresponding "--policy-pack" flag',
            args: [{ name: "policy-pack-config", default: "[]" }],
          },
          {
            name: ["--refresh", "-r"],
            description:
              "Refresh the state of the stack's resources before this update",
          },
          {
            name: ["--replace"],
            description:
              "Specify resources to replace. Multiple resources can be specified using --replace urn1 --replace urn2",
            isRepeatable: true,
            args: [{ name: "replace", default: "[]" }],
          },
          {
            name: ["--show-config"],
            description: "Show configuration keys and variables",
          },
          {
            name: ["--show-reads"],
            description:
              "Show resources that are being read in, alongside those being managed directly in the stack",
          },
          {
            name: ["--show-replacement-steps"],
            description:
              "Show detailed resource replacement creates and deletes instead of a single step",
          },
          {
            name: ["--show-sames"],
            description:
              "Show resources that needn't be updated because they haven't changed, alongside those that do",
          },
          {
            name: ["--stack", "-s"],
            description:
              "The name of the stack to operate on. Defaults to the current stack",
            args: [{ name: "stack" }],
          },
          {
            name: ["--suppress-outputs"],
            description:
              "Suppress display of stack outputs (in case they contain sensitive values)",
          },
          {
            name: ["--suppress-permalink"],
            description: "Suppress display of the state permalink",
            args: [{ name: "suppress-permalink" }],
          },
          {
            name: ["--target", "-t"],
            description:
              "Specify a single resource URN to update. Other resources will not be updated. Multiple resources can be specified using --target urn1 --target urn2",
            isRepeatable: true,
            args: [{ name: "target", default: "[]" }],
          },
          {
            name: ["--target-dependents"],
            description:
              "Allows updating of dependent targets discovered but not specified in --target list",
          },
          {
            name: ["--target-replace"],
            description:
              "Specify a single resource URN to replace. Other resources will not be updated. Shorthand for --target urn --replace urn.",
            isRepeatable: true,
            args: [{ name: "target-replace", default: "[]" }],
          },
        ],
      },
      {
        name: ["refresh"],
        description: "Refresh the resources in a stack",
        options: [
          {
            name: ["--config-file"],
            description:
              "Use the configuration values in the specified file rather than detecting the file name",
            args: [{ name: "config-file" }],
          },
          {
            name: ["--debug", "-d"],
            description:
              "Print detailed debugging output during resource operations",
          },
          {
            name: ["--diff"],
            description:
              "Display operation as a rich diff showing the overall change",
          },
          {
            name: ["--exec-agent"],
            description: "",
            args: [{ name: "exec-agent" }],
          },
          {
            name: ["--exec-kind"],
            description: "",
            args: [{ name: "exec-kind" }],
          },
          {
            name: ["--expect-no-changes"],
            description:
              "Return an error if any changes occur during this update",
          },
          {
            name: ["--message", "-m"],
            description:
              "Optional message to associate with the update operation",
            args: [{ name: "message" }],
          },
          {
            name: ["--parallel", "-p"],
            description:
              "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
            args: [{ name: "parallel", default: "2147483647" }],
          },
          {
            name: ["--show-replacement-steps"],
            description:
              "Show detailed resource replacement creates and deletes instead of a single step",
          },
          {
            name: ["--show-sames"],
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
            args: [{ name: "stack" }],
          },
          {
            name: ["--suppress-outputs"],
            description:
              "Suppress display of stack outputs (in case they contain sensitive values)",
          },
          {
            name: ["--suppress-permalink"],
            description: "Suppress display of the state permalink",
            args: [{ name: "suppress-permalink" }],
          },
          {
            name: ["--target", "-t"],
            description:
              "Specify a single resource URN to refresh. Multiple resource can be specified using: --target urn1 --target urn2",
            isRepeatable: true,
            args: [{ name: "target", default: "[]" }],
          },
          {
            name: ["--yes", "-y"],
            description:
              "Automatically approve and perform the refresh after previewing it",
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
          },
          {
            name: ["export"],
            description: "Export a stack's deployment to standard out",
            options: [
              {
                name: ["--file"],
                description: "A filename to write stack output to",
                args: [{ name: "file" }],
              },
              {
                name: ["--show-secrets"],
                description:
                  "Emit secrets in plaintext in exported stack. Defaults to `false`",
              },
              {
                name: ["--version"],
                description:
                  "Previous stack version to export. (If unset, will export the latest.)",
                args: [{ name: "version" }],
              },
            ],
          },
          {
            name: ["graph"],
            description: "Export a stack's dependency graph to a file",
            options: [
              {
                name: ["--dependency-edge-color"],
                description: "Sets the color of dependency edges in the graph",
                args: [{ name: "dependency-edge-color", default: "#246C60" }],
              },
              {
                name: ["--ignore-dependency-edges"],
                description:
                  "Ignores edges introduced by dependency resource relationships",
              },
              {
                name: ["--ignore-parent-edges"],
                description:
                  "Ignores edges introduced by parent/child resource relationships",
              },
              {
                name: ["--parent-edge-color"],
                description: "Sets the color of parent edges in the graph",
                args: [{ name: "parent-edge-color", default: "#AA6639" }],
              },
            ],
          },
          {
            name: ["hist", "history"],
            description: "[PREVIEW] Display history for a stack",
            options: [
              {
                name: ["--full-dates"],
                description: "Show full dates, instead of relative dates",
              },
              { name: ["--json", "-j"], description: "Emit output as JSON" },
              {
                name: ["--page"],
                description: "Used with 'page-size' to paginate results",
                args: [{ name: "page", default: "1" }],
              },
              {
                name: ["--page-size"],
                description:
                  "Used with 'page' to control number of results returned",
                args: [{ name: "page-size", default: "10" }],
              },
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
            options: [
              {
                name: ["--file"],
                description: "A filename to read stack input from",
                args: [{ name: "file" }],
              },
              {
                name: ["--force", "-f"],
                description:
                  "Force the import to occur, even if apparent errors are discovered beforehand (not recommended)",
              },
            ],
          },
          {
            name: ["init"],
            description:
              "Create an empty stack with the given name, ready for updates",
            options: [
              {
                name: ["--copy-config-from"],
                description: "The name of the stack to copy existing config from",
                args: [{ name: "copy-config-from" }],
              },
              {
                name: ["--secrets-provider"],
                description:
                  "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault)",
                args: [{ name: "secrets-provider", default: "default" }],
              },
            ],
          },
          {
            name: ["ls"],
            description: "List stacks",
            options: [
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
                args: [{ name: "organization" }],
              },
              {
                name: ["--project", "-p"],
                description:
                  "Filter returned stacks to those with a specific project name",
                args: [{ name: "project" }],
              },
              {
                name: ["--tag", "-t"],
                description:
                  "Filter returned stacks to those in a specific tag (tag-name or tag-name=tag-value)",
                args: [{ name: "tag" }],
              },
            ],
          },
          {
            name: ["output"],
            description: "Show a stack's output properties",
            options: [
              { name: ["--json", "-j"], description: "Emit output as JSON" },
              {
                name: ["--show-secrets"],
                description:
                  "Display outputs which are marked as secret in plaintext",
              },
            ],
          },
          { name: ["rename"], description: "Rename an existing stack" },
          {
            name: ["rm"],
            description: "Remove a stack and its configuration",
            options: [
              {
                name: ["--force", "-f"],
                description:
                  "Forces deletion of the stack, leaving behind any resources managed by the stack",
              },
              {
                name: ["--preserve-config"],
                description:
                  "Do not delete the corresponding Pulumi.<stack-name>.yaml configuration file for the stack",
              },
              {
                name: ["--yes", "-y"],
                description:
                  "Skip confirmation prompts, and proceed with removal anyway",
              },
            ],
          },
          {
            name: ["select"],
            description: "Switch the current workspace to the given stack",
            options: [
              {
                name: ["--create", "-c"],
                description: "If selected stack does not exist, create it",
              },
              {
                name: ["--secrets-provider"],
                description:
                  "Use with --create flag, The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault)",
                args: [{ name: "secrets-provider", default: "default" }],
              },
            ],
          },
          {
            name: ["tag"],
            description: "Manage stack tags",
            subcommands: [
              { name: ["get"], description: "Get a single stack tag value" },
              {
                name: ["ls"],
                description: "List all stack tags",
                options: [
                  { name: ["--json", "-j"], description: "Emit output as JSON" },
                ],
              },
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
          {
            name: ["--stack", "-s"],
            description:
              "The name of the stack to operate on. Defaults to the current stack",
            args: [{ name: "stack" }],
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
              {
                name: ["--stack", "-s"],
                description:
                  "The name of the stack to operate on. Defaults to the current stack",
                args: [{ name: "stack" }],
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
              {
                name: ["--stack", "-s"],
                description:
                  "The name of the stack to operate on. Defaults to the current stack",
                args: [{ name: "stack" }],
              },
              { name: ["--yes", "-y"], description: "Skip confirmation prompts" },
            ],
          },
        ],
      },
      {
        name: ["update", "up"],
        description: "Create or update the resources in a stack",
        options: [
          {
            name: ["--client"],
            description:
              "The address of an existing language runtime host to connect to",
            args: [{ name: "client" }],
          },
          {
            name: ["--config", "-c"],
            description: "Config to use during the update",
            isRepeatable: true,
            args: [{ name: "config", default: "[]" }],
          },
          {
            name: ["--config-file"],
            description:
              "Use the configuration values in the specified file rather than detecting the file name",
            args: [{ name: "config-file" }],
          },
          {
            name: ["--config-path"],
            description:
              "Config keys contain a path to a property in a map or list to set",
          },
          {
            name: ["--debug", "-d"],
            description:
              "Print detailed debugging output during resource operations",
          },
          {
            name: ["--diff"],
            description:
              "Display operation as a rich diff showing the overall change",
          },
          {
            name: ["--exec-agent"],
            description: "",
            args: [{ name: "exec-agent" }],
          },
          {
            name: ["--exec-kind"],
            description: "",
            args: [{ name: "exec-kind" }],
          },
          {
            name: ["--expect-no-changes"],
            description:
              "Return an error if any changes occur during this update",
          },
          {
            name: ["--message", "-m"],
            description:
              "Optional message to associate with the update operation",
            args: [{ name: "message" }],
          },
          {
            name: ["--parallel", "-p"],
            description:
              "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
            args: [{ name: "parallel", default: "2147483647" }],
          },
          {
            name: ["--policy-pack"],
            description: "Run one or more policy packs as part of this update",
            args: [{ name: "policy-pack", default: "[]" }],
          },
          {
            name: ["--policy-pack-config"],
            description:
              'Path to JSON file containing the config for the policy pack of the corresponding "--policy-pack" flag',
            args: [{ name: "policy-pack-config", default: "[]" }],
          },
          {
            name: ["--refresh", "-r"],
            description:
              "Refresh the state of the stack's resources before this update",
          },
          {
            name: ["--replace"],
            description:
              "Specify resources to replace. Multiple resources can be specified using --replace urn1 --replace urn2",
            isRepeatable: true,
            args: [{ name: "replace", default: "[]" }],
          },
          {
            name: ["--secrets-provider"],
            description:
              "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault). Onlyused when creating a new stack from an existing template",
            args: [{ name: "secrets-provider", default: "default" }],
          },
          {
            name: ["--show-config"],
            description: "Show configuration keys and variables",
          },
          {
            name: ["--show-reads"],
            description:
              "Show resources that are being read in, alongside those being managed directly in the stack",
          },
          {
            name: ["--show-replacement-steps"],
            description:
              "Show detailed resource replacement creates and deletes instead of a single step",
          },
          {
            name: ["--show-sames"],
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
            args: [{ name: "stack" }],
          },
          {
            name: ["--suppress-outputs"],
            description:
              "Suppress display of stack outputs (in case they contain sensitive values)",
          },
          {
            name: ["--suppress-permalink"],
            description: "Suppress display of the state permalink",
            args: [{ name: "suppress-permalink" }],
          },
          {
            name: ["--target", "-t"],
            description:
              "Specify a single resource URN to update. Other resources will not be updated. Multiple resources can be specified using --target urn1 --target urn2",
            isRepeatable: true,
            args: [{ name: "target", default: "[]" }],
          },
          {
            name: ["--target-dependents"],
            description:
              "Allows updating of dependent targets discovered but not specified in --target list",
          },
          {
            name: ["--target-replace"],
            description:
              "Specify a single resource URN to replace. Other resources will not be updated. Shorthand for --target urn --replace urn.",
            isRepeatable: true,
            args: [{ name: "target-replace", default: "[]" }],
          },
          {
            name: ["--yes", "-y"],
            description:
              "Automatically approve and perform the update after previewing it",
          },
        ],
      },
      { name: ["version"], description: "Print Pulumi's version number" },
      {
        name: ["watch"],
        description: "[PREVIEW] Continuously update the resources in a stack",
        options: [
          {
            name: ["--config", "-c"],
            description: "Config to use during the update",
            isRepeatable: true,
            args: [{ name: "config", default: "[]" }],
          },
          {
            name: ["--config-file"],
            description:
              "Use the configuration values in the specified file rather than detecting the file name",
            args: [{ name: "config-file" }],
          },
          {
            name: ["--config-path"],
            description:
              "Config keys contain a path to a property in a map or list to set",
          },
          {
            name: ["--debug", "-d"],
            description:
              "Print detailed debugging output during resource operations",
          },
          {
            name: ["--exec-kind"],
            description: "",
            args: [{ name: "exec-kind" }],
          },
          {
            name: ["--message", "-m"],
            description:
              "Optional message to associate with each update operation",
            args: [{ name: "message" }],
          },
          {
            name: ["--parallel", "-p"],
            description:
              "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded.",
            args: [{ name: "parallel", default: "2147483647" }],
          },
          {
            name: ["--path"],
            description:
              "Specify one or more relative or absolute paths that need to be watched. A path can point to a folder or a file. Defaults to working directory",
            isRepeatable: true,
            args: [{ name: "path", default: "[]" }],
          },
          {
            name: ["--policy-pack"],
            description: "Run one or more policy packs as part of each update",
            args: [{ name: "policy-pack", default: "[]" }],
          },
          {
            name: ["--policy-pack-config"],
            description:
              'Path to JSON file containing the config for the policy pack of the corresponding "--policy-pack" flag',
            args: [{ name: "policy-pack-config", default: "[]" }],
          },
          {
            name: ["--refresh", "-r"],
            description:
              "Refresh the state of the stack's resources before each update",
          },
          {
            name: ["--secrets-provider"],
            description:
              "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault). Onlyused when creating a new stack from an existing template",
            args: [{ name: "secrets-provider", default: "default" }],
          },
          {
            name: ["--show-config"],
            description: "Show configuration keys and variables",
          },
          {
            name: ["--show-replacement-steps"],
            description:
              "Show detailed resource replacement creates and deletes instead of a single step",
          },
          {
            name: ["--show-sames"],
            description:
              "Show resources that don't need be updated because they haven't changed, alongside those that do",
          },
          {
            name: ["--stack", "-s"],
            description:
              "The name of the stack to operate on. Defaults to the current stack",
            args: [{ name: "stack" }],
          },
        ],
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
  
