# JSONStore
 A simple json-based storage (for like settings)

 ## The goods
 1. Easy as pie
 2. ES6-built
 3. 0% OF TONS DEPENDENCIES!!! (means only needed other's help (not lots of them))

 ## Install
 From Git (Clone):
 1. Clone this repo `git clone https://github.com/shahoob/JSONStore.git`
 2. Copy the cloned git repo folder to your `project`'s `node_modules` folder
 3 `npm i` or `npm install` (NOTE: Don't delete the cloned repo!!! or your `project` fails to run)
 Done.
 From Git (Release):
 1. Download any release you want ;-) (The latest is recommended)
 2. Put the downloaded release to anywere (in your `project`'s folder.)
 3. `npm i` or `npm install` (NOTE: Don't delete the downloaded release!!! or your `project` fails to run)
 Done
 From [npm](https://npmjs.com) (Recommended):
 1. `npm i jsonstore` or `npm install jsonstore`
 Wow. Only 1 step!

 ## API Docs
 There in the wiki page.

 ## What's new?
 In `1.0.1`:
 JSONStore had `TypeError`s while trying to create and remove items.
 This case has been patched
 ### New Functions
 none
 ### Fixes
 1. Remove the keyword `delete` and align the removed items with `undefined`.
 2. Use `Object.defineProperty` instead of this `obj[key] = value;`, Which caused `TypeError` Errors.

 ## Notes
 The test in this module seems only works on windows.
 You may want to help this project to include not only support for Linux, but also macOS.

 ## Coming up features

 ### `In-memory` Storage type
 Because it uses only memory (not storing into a file),
 All OSes can run it!
 It has the same syntax,
 Only creating a storage is that there's no requirement to put the path for storing it.
 Trying to include the path will only have the same thing.
