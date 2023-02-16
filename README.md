# Builder.io SEO Review Plugin

Plugin for extracting and processing html content of iframed preview areas within Builder.io platform.

The plugin sends the extracted iframe content, sends it to the SEO Review Tools API (https://api.seoreviewtools.com/) for real-time analysis based on the users' keyword input.

The plugin then displays the SEO data organised and visually clear.

## Installation

1. Open your Builder.io account settings and add the plugin to your list of plugins using this link:

   - https://cdn.jsdelivr.net/gh/Michael-Webcomum/seo-review-plugin/dist/plugin.system.js?pluginId=seo-review-plugin

   - Note, the plugin works best when specifying the most recent version. This refers to the latest commit of the plugin on Github.
   - Simply add the commit on the end of the plugin repository name in the plugin link. /seo-review-plugin@12c848a/
   - Here is a full link example:

     https://cdn.jsdelivr.net/gh/Michael-Webcomum/seo-review-plugin@12c848a/dist/plugin.system.js?pluginId=seo-review-plugin

2. Copy your Builder.io Public API Key also found in your Builder.io account settings.

3. Open your list of plugins and click on 'Edit Plugin Settings' below the SEO Review Plugin. Copy paste your Public API Key and click 'Connect using your API Key'.

Now the SEO Review Plugin has been installed and giving the necessary key to function!

## Usage

1. Navigate to your desired Builder.io Space and open up a page.

2. Click on the triple dot settings button at the top of Builder.io's page and an option for 'Request SEO Review' should be visible!

3. The plugin will give a popup that asks you to 'Enter a keyword to test', enter a keyword you would like analysed on that particular page and click 'Ok'.

4. The plugin will load the SEO data and a modal will display with the full results.

5. At the bottom of the modal, there will be a notification bar confirming that the SEO review has been completed showing 'Done!' with an option to view the data saved as a historical data content entry.
