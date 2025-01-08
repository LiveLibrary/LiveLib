![Nuxoki Screenshot](https://res.cloudinary.com/dpvsklksg/image/upload/Eco-Assets/Screenshot_2025-01-08_at_5.05.32_p.m._eiibo1.png)

# Nuxoki - Nuxt UI Minimal Template

Demo here: https://nuxoki.vercel.app/

A minimal and sleek Nuxt 3 template designed to seamlessly integrate the **Flexoxi color palette**, perfect for developers looking to create clean, fast, and visually stunning web projects. This template leverages Nuxt 3's power to deliver an optimized and modern development experience while showcasing the vibrant Flexoxi colors.

## Built with Nuxt 3 and the Flexoxi Color Palette:

- **Nuxt UI v3** for a better development and UX.
- **Nuxt 3** for a streamlined development experience with server-side rendering (SSR).
- **Flexoxi Color Palette** integration for vibrant and modern color choices.
- **Tailwind CSS** for a responsive and clean design.
- **Pinia** for simple and effective state management.
- Fully compatible with Nuxt v4 modern folder structure for better scalability and maintenance.

For more information about Nuxt 3, visit the [official Nuxt website](https://nuxt.com).

For more information about Flexoxi, visit the [official Flexoxi website](https://stephango.com/flexoki).

## Features

- Nuxt UI v3 to leverage the theme
- Nuxt 3 with SSR support
- Flexoxi color palette integration
- Pinia for state management
- Tailwind CSS for styling and responsiveness
- Minimal and clean design
- SEO-ready with meta tags
- Dark mode support

## Project Setup

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/{username}/nuxoki.git
    cd nuxoki
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

### Development

Start the development server:

```sh
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Build

To build the project for production:

```sh
npm run build
# or
yarn build
```

### Deployment

After building the project, you can deploy the `dist` directory to your preferred hosting service.

## Project Structure

- `nuxt.config.ts`: Nuxt configuration file.
- `app/`: Contains the main application files.
  - `components/`: Vue components.
  - `layouts/`: Layout components.
  - `pages/`: Page components.
  - `stores/`: Pinia stores.
  - `assets/css/`: CSS files.
- `public/`: Static assets.

## Usage

### State Management

This project uses Pinia for state management. Example store:

```typescript
export const useIndexStore = defineStore('useIndexStore', {
    state: () => ({
        name: ''
    }),
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useIndexStore, import.meta.hot))
}
```

### Components

- `AppLogo`: Displays the application logo.
- `AppSwitchMode`: Toggles between dark and light mode.
- `AppSwitchPrimaryColor`: Switches the primary color theme to the Flexoxi palette.
- `FlexokiPalette`: Elements tho show all colors.

### Pages

- `index.vue`: The main landing page.
- `about.vue`: The about page.

### Layouts

- `default.vue`: The default layout for the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.