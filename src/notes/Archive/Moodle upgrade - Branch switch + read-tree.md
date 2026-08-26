> Pulling source files for plugins through `git read-tree` command

# Steps
- Switch to a branch with new version
- Pull in upgrades using `git read-tree`
- Run upgrade.php
# Process

1. **Switching to a New Version Branch**: Our first action is to switch to a new version branch. This step ensures we access the most recent features and security updates. The selected branch is chosen for its enhanced functionality and stability.
    
2. **Integrating Plugins Using `git read-tree`**: Next, we integrate additional plugins. This is done using the `git read-tree` command, an efficient method for merging plugin repositories into our main project tree. It facilitates the seamless addition of new features and capabilities.

# Problems
- `git read-tree` is a plumbing command, not meant for use by user on a daily basis. The key concern with `git read-tree` is that it operates directly on the index, bypassing the usual working directory and merge conflict resolution mechanisms. This lead to a less intuitive merging process, especially if there are conflicts with the existing content in your repository. The command used also required the precise knowledge of branches from which the files were effectively "copied".  This requires the upgrader to know what plugin version correlates with a certain branch. It's also difficult to switch to a different version of the plugin as this requires the deletion of the current files and their subsequent replacement. This creates unnecessary manual overhead for the maintainers.  