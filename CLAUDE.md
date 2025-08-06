# Fly Swift Tail Blog Project Structure

## Overview
This is a Jekyll-based blog hosted at blog.flyswifttail.com with GitHub Pages integration.

## Technology Stack
- **Static Site Generator**: Jekyll
- **Theme**: Minima
- **Package Manager**: Bun
- **Ruby Version Manager**: mise
- **Formatting**: Prettier with Ruby, Liquid, ERB, and Tailwind CSS plugins

## Key Files
- `_config.yml` - Main Jekyll configuration
- `Gemfile` - Ruby dependencies (Jekyll, Minima theme, plugins)
- `package.json` - Node dependencies for Prettier plugins
- `mise.toml` - Development environment configuration and task runner
- `CNAME` - GitHub Pages custom domain configuration

## Jekyll Plugins
- jekyll-seo-tag - SEO optimization
- jekyll-sitemap - Sitemap generation
- jekyll-feed - RSS feed generation

## Development Tasks
Run these tasks using `mise run <task>`:
- `install` - Install Ruby dependencies
- `dev` - Start Jekyll dev server with live reload
- `build` - Build site for production
- `lazygit` - Launch lazygit for version control

## Project Structure

## Site Configuration
- **Title**: Fly Swift Tail Blog
- **URL**: https://blog.flyswifttail.com
- **Email**: contact@flyswifttail.com
- **Social**: @adamqureshi (Twitter), Fly-Swift-Tail (GitHub)
