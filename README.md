# Vite + React Starter Kit

Welcome to the *Vite + React Starter Kit!* This repository provides you with a solid foundation for developing web applications using React, along with a selection of popular tools and libraries to enhance your development workflow. It follows best practices for folder structure, ensuring a clean and organized codebase.

## Branches
This repository comprises distinct branches, each serving a specific purpose. Below is a list of these branches, ordered according to their contextual relevance. All branches are built upon Vite, with TypeScript being both implemented and configured.

**lite:** This branch establishes a foundational Vite project equipped with essential linting tools such as ESLint, Stylelint, Commitizen, and Husky. It serves as a minimal project structure, necessitating the addition and configuration of packages tailored to your project's requirements.

**folder-tree:** An extension of the lite branch, this variant adheres to best-practice folder structures.

**main:** Positioned as a minimal starter kit, this branch encompasses the elements of the lite branch and integrates the restructured folder-tree branch. Additionally, it incorporates a router. Ideal for those seeking a streamlined starter kit with optimal folder structure and routing functionality.

**dev:** Building upon the main branch, the dev branch represents a feature-rich version. It includes pre-configured packages and libraries essential for initiating projects. In addition to the packages from the main branch, the following are integrated and ready for use:

- Mantine
- Redux
- Tabler Icon
- React-Intl
- TailwindCSS

**pro-features:** This branch surpasses the dev branch by incorporating PRO features that are readily deployable in your projects. It introduces functionalities such as Authentication, diverse Layout options, useful custom hooks, project configuration via a single config file, and other features vital for most projects. Noteworthy, this branch is currently in the beta version, with plans for continuous feature additions, as well as potential refactoring and editing of existing features.

## TODOs
- [ ] Update README.md for all branches
- [ ] Develop exclusive CLI to work with this kit
- [ ] Develop Home Page
- [ ] Add more features!

## Getting Started

To use this starter kit, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone git@github.com:hamidyfine/vite-react-starter-kit.git
   // or
   git clone https://github.com/hamidyfine/vite-react-starter-kit.git
   ```

2. Navigate to the project directory:

   ```bash
   cd vite-react-starter-kit
   ```

3. Switch to the desired branch.

4. Install the dependencies using your preferred package manager. For example, using npm:

   ```bash
   npm install
   // or
   yarn
   ```

5. Start the development server:

   ```bash
   npm run dev
   // or
   yarn dev
   ```

6. Open your browser and visit `http://localhost:4000` to see the application running.

## Scripts

The following scripts are available to streamline your development workflow:

- **`npm run dev`** or **`yarn dev`**: Starts the development server and provides hot reloading for an optimized development experience.
- **`npm run build`** or **`yarn build`**: Builds the application for production, generating optimized and minified assets.
- **`npm run lint`** or **`yarn lint`**: Lints your codebase using ESLint and StyleLint to enforce code quality and conventions.

## Contributing

Contributions are welcome! If you encounter any issues, have suggestions, or would like to contribute improvements to the starter kit, please feel free to submit a pull request.

## License

This starter kit is open source and released under the [MIT License](LICENSE). You are free to use, modify, and distribute the code
