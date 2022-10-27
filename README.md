# Builder.io SEO Review Plugin

Plugin for extracting and processing html content of iframed preview areas within Builder.io platform.

The plugin sends the extracted iframe content, sends it to the SEO Review Tools API (https://api.seoreviewtools.com/) for real-time analysis based on the users' keyword input.

The plugin then displays the SEO data organised and visually clear.

## Installation

- `npm install`
- `npm run start`

Now the plugin will be running on `https://cdn.jsdelivr.net/gh/Michael-Webcomum/seo-review-plugin/dist/plugin.system.js?pluginId=seo-review-plugin`

- Go to your Builder account settings, and add the local plugin to your list of plugins:

```
https://cdn.jsdelivr.net/gh/Michael-Webcomum/seo-review-plugin/dist/plugin.system.js?pluginId=seo-review-plugin
```

\*\*\* Notice the pluginId param in the path above, it's necessary to save the plugin settings.
