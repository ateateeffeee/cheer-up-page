# Project Name

A brief description of your project. This project dynamically generates random adverbs and includes a Spotify player in the mobile footer.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these steps to set up and start working on the project.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install the latest LTS version of Node.js from [Node.js official website](https://nodejs.org/).
- **Yarn**: Install Yarn by following the instructions [here](https://yarnpkg.com/getting-started/install).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install dependencies** using Yarn:

   ```bash
   yarn install
   ```

   This will install all project dependencies listed in the `package.json` file and generate a `yarn.lock` file.

### Usage

To run the project locally:

1. **Start the development server**:

   ```bash
   yarn start
   ```

   This will start the development server, and you can access the project at `http://localhost:3000`.

2. **Build the project** for production:

   ```bash
   yarn build
   ```

   This will create a production build of the project inside the `build/` directory.

### Development

#### File Structure

- `src/`: Contains the main source code for the project.
- `public/`: Static files, including the HTML template.
- `adverbs.json`: A list of adverbs used in the homepage.

#### Key Components

- **AdverbGenerator**: Dynamically selects and displays a random adverb on the homepage.
- **Footer**: Contains the Spotify player, which is only visible on mobile screens.

### Environment Variables

If your project requires any environment variables, describe them here, including how to configure them (e.g., creating a `.env` file).

```bash
REACT_APP_API_KEY=yourapikeyhere
```

### Linting and Formatting

The project uses `ESLint` and `Prettier` for linting and formatting. To check for linting errors or format the codebase, run:

```bash
yarn lint
yarn format
```

### Testing

If your project includes testing, describe how to run the tests here.

```bash
yarn test
```

### Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. **Fork the repository**.
2. **Create a branch**: 

   ```bash
   git checkout -b feature/new-feature
   ```
3. **Commit your changes**: 

   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**: 

   ```bash
   git push origin feature/new-feature
   ```
5. **Submit a pull request**.

### License

This project uses the following license: [MIT](LICENSE).
