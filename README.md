# Astro Facebook Stylex Plugin

## NOTES

This isn't intended for production usage but just to show case a way of working with Astro and Stylexjs.

All this is just experimental.

## Overview

This Astro plugin provides an easy and efficient way to integrate Facebook's Stylex library into your Astro projects. Stylex is a CSS-in-JS library developed by Facebook that offers a unique approach to styling components in a consistent and scalable way.

## Features

- **Seamless Integration:** Quickly add Stylex to your Astro projects.
- **Optimized Performance:** Ensures minimal impact on load times and performance.
- **Customizable:** Easily adapt Stylex to fit your project's design requirements.

## Installation

To install the plugin, run the following command in your Astro project:

```bash
npm install @sfroment/astro-stylex @stylexjs/stylex@beta
```

## Usage

After installing the plugin, add it to your `astro.config.mjs` file:

```javascript
import { defineConfig } from 'astro/config';
import stylexIntegration from "@sfroment/astro-stylex";

export default defineConfig({
  // other configurations...
  plugins: [stylexIntegration()],
});
```

