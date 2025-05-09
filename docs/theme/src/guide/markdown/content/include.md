---
title: Include Files
icon: b:markdown
category:
  - Markdown
tag:
  - Code Demo
  - Include Files
---

Let the Markdown file in your VuePress site support including other files.

<!-- more -->

## Settings

```ts twoslash {5} title=".vuepress/theme.ts"
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  markdown: {
    include: true,
  },
});
```

## Syntax

Use `<!-- @include: filename -->` to include a file.

To partially import the file, you can specify the range of lines to be included:

- `<!-- @include: filename{start-end} -->`
- `<!-- @include: filename{start-} -->`
- `<!-- @include: filename{-end} -->`

Also, you can include file region:

- `<!-- @include: filename#region -->`

:::: info File region

File region is a concept in vscode, where the region content is surrounded by `#region` and `#endregion` comments.

Here are some examples:

::: code-tabs#language

@tab HTML

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- region snippet -->
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
      repellendus. Voluptatibus alias cupiditate at, fuga tenetur error officiis
      provident quisquam autem, porro facere! Neque quibusdam animi quaerat
      eligendi recusandae eaque.
    </p>
    <!-- endregion snippet -->
    <p>
      Veniam harum illum natus omnis necessitatibus numquam architecto eum
      dignissimos, quos a adipisci et non quam maxime repellendus alias ipsum,
      vero praesentium laborum commodi perferendis velit repellat? Vero,
      cupiditate sequi.
    </p>
  </body>
</html>
```

@tab Markdown

```md
## Hello world

<!-- #region snippet -->

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
inventore iure quo aut doloremque, ipsum ab voluptatem ipsa, velit laborum
illo quae omnis reiciendis hic, ut dolorem non debitis in!

<!-- #endregion snippet -->

Veniam harum illum natus omnis necessitatibus numquam architecto eum
dignissimos, quos a adipisci et non quam maxime repellendus alias ipsum,
vero praesentium laborum commodi perferendis velit repellat? Vero,
cupiditate sequi.
```

@tab TS

```ts
import MarkdownIt from "markdown-it";
import { include } from "@mdit/plugin-include";

// #region snippet
const mdIt = MarkdownIt().use(include, {
  // your options, currentPath is required
  currentPath: (env) => env.filePath,
});
// #endregion snippet

mdIt.render("<!-- @include: ./path/to/include/file.md -->", {
  filePath: "path/to/current/file.md",
});
```

@tab JS

```js
const MarkdownIt = require("markdown-it");
const { include } = require("@mdit/plugin-include");

// #region snippet
const mdIt = MarkdownIt().use(include, {
  // your options, currentPath is required
  currentPath: (env) => env.filePath,
});
// #endregion snippet

mdIt.render("<!-- @include: ./path/to/include/file.md -->", {
  filePath: "path/to/current/file.md",
});
```

@tab css

```css
html,
body {
  margin: 0;
  padding: 0;
}

/* #region snippet */
h1 {
  font-size: 1.5rem;
}
/* #endregion snippet */

h2 {
  font-size: 1.2rem;
}
```

@tab Less

```less
html,
body {
  margin: 0;
  padding: 0;
}

/* #region snippet */
h1 {
  font-size: 1.5rem;
}
/* #endregion snippet */

h2 {
  font-size: 1.2rem;
}
```

@tab Sass

```scss
html,
body {
  margin: 0;
  padding: 0;
}

/* #region snippet */
h1 {
  font-size: 1.5rem;
}
/* #endregion snippet */

h2 {
  font-size: 1.2rem;
}
```

@tab Java

```java
public class HelloWorld {
  // #region snippet
  public static void main(String args[]){
    System.out.println("Hello World");
  }
  // #endregion snippet
}
```

@tab Python

```py
class MyClass:
    msg = "world"

    #region snippet
    def sayHello(self):
        print("Hello " + self.msg + "!")
    #region snippet

    def sayBye(self):
        print("Bye " + self.msg + "!")
```

@tab Visual Basic

```vb
Imports System

Module Module1
   # Region snippet
   Sub Main()
     Console.WriteLine("Hello World!")
     Console.WriteLine("Press Enter Key to Exit.")
     Console.ReadLine()
   End Sub
   # EndRegion
End Module
```

@tab Bat

```bat
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
if '%errorlevel%' NEQ '0' (
echo Requesting administrative privileges...
goto UACPrompt
) else ( goto gotAdmin )

::#region snippet
:UACPrompt
echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"
"%temp%\getadmin.vbs"
exit /B
::#endregion snippet

:gotAdmin
if exist "%temp%\getadmin.vbs" ( del "%temp%\getadmin.vbs" )
pushd "%CD%"
CD /D "%~dp0"
```

@tab C\#

```cs
using System;

namespace HelloWorldApp {

    class Geeks {

        // #region snippet
        static void Main(string[] args) {

            // statement
            // printing Hello World!
            Console.WriteLine("Hello World!");

            // To prevents the screen from
            // running and closing quickly
            Console.ReadKey();
        }
        // #endregion snippet
    }
}
```

@tab C/C++

```cpp
#include <iostream>
#include <vector>

std::vector<int> v;

#pragma region snippet
int f() {
  for (int item : v) std::cout << item << std::endl;
  return v.size();
}
#pragma endregion snippet

int main() {
  int n, u;
  std::cin >> n;
  for (int i = 1; i <= n; ++i) {
    std::cin >> u;
    v.push_back(u);
  }
  std::cout << f();
  return 0;
}
```

:::

::::

## Demo

`<!-- @include: ./demo.snippet.md -->`:

<!-- @include: ./demo.snippet.md -->

`<!-- @include: ./demo.snippet.md{9-13} -->`:

<!-- @include: ./demo.snippet.md{9-13} -->

`<!-- @include: ./demo.snippet.md#snippet -->`:

<!-- @include: ./demo.snippet.md#snippet -->

## Advanced

You can also set an object to customize include filepath and include behavior.

```ts
interface IncludeOptions {
  /**
   * handle include filePath
   *
   * @default (path) => path
   */
  resolvePath?: (path: string, cwd: string | null) => string;
  /**
   * Whether deep include files in included Markdown files
   *
   * @default false
   */
  deep?: boolean;
  /**
   * Whether use `<!-- @include: xxx -->` instead of `@include: xxx` to include files
   *
   * @default true
   */
  useComment?: boolean;
  /**
   * Whether resolve the image related path in the included Markdown file
   *
   * @default true
   */
  resolveImagePath?: boolean;
  /**
   * Whether resolve the related file link path in the included Markdown file
   *
   * @default true
   */
  resolveLinkPath?: boolean;
}
```

E.g.: you can use `@src` as an alias for your source directory.

```ts twoslash {11-18} title=".vuepress/config.ts"
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  theme: hopeTheme({
    markdown: {
      // Add `@src` alias support
      include: {
        resolvePath: (file) => {
          if (file.startsWith("@src"))
            return file.replace("@src", path.resolve(__dirname, ".."));

          return file;
        },
      },
    },
  }),
});
```

Also, to place your Markdown files directly besides your actual files, but don't want them rendered as pages, you can set `pagePatterns` options in VuePress config. See [pagePatterns](https://vuejs.press/reference/config.html#pagepatterns) for more details.

```ts twoslash {6} title=".vuepress/config.ts"
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  // now any file with `.snippet.md` extension will not be rendered as a page
  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],

  theme: hopeTheme({
    markdown: {
      include: true,
    },
  }),
});
```
