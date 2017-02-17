var requireDir = require('require-dir');

// all tasks in /tasks including subfolders
requireDir('./tasks', { recurse: true });
