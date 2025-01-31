# VA Relationship Website

This repository is designed to create a web application with an ASP.NET Core backend and a Vue.js frontend. The application aims to provide a platform for managing and visualizing various relationship data.

## Technologies Used

- **ASP.NET Core**: Backend framework for building web applications and services.
- **Vue.js**: Frontend framework for building user interfaces.
- **Docker**: Containerization platform for deploying the application.

## Project Structure

- `Web/Controllers`: Contains controllers for handling login and serving the main application.
- `Web/VueApp`: Contains Vue.js components and configuration files.
- `Web/Dockerfile`: Sets up a Docker container for the application.
- `Web/Web.csproj`: Defines the .NET project configuration.
- `Web/VueApp/package.json`: Lists dependencies and scripts for the Vue.js application.
- `Web/VueApp/README.md`: Provides setup and development instructions for the Vue.js application.

## Setup and Running the Project

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [GitHub](https://github.com/)

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Draud-Egomann/va-relationship-website.git
    cd va-relationship-website
    ```

2. **Setup the backend**:
    ```bash
    cd Web
    dotnet restore
    dotnet build
    ```

3. **Setup the frontend**:
    ```bash
    cd VueApp
    yarn install
    yarn build
    ```

4. **Run the application**:
    ```bash
    cd ..
    dotnet run
    ```

5. **Run the application with Docker**:
    ```bash
    docker build -t va-relationship-website .
    docker run -p 8080:80 va-relationship-website
    ```

6. **Access the application**:
    Open your browser and navigate to `http://localhost:8080`.

For more detailed instructions, refer to the `Web/VueApp/README.md` file.
