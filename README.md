# Microservices with Nest.js and Docker (RabbitMQ)

## Getting Started

These instructions will guide you through setting up and running the project on your local machine.

### Prerequisites

- Docker
- Docker Compose

### Environment Configuration

1.  **Create `.env` files:**

    - Start by copying the `.env.example` file to create your own configuration files.
    - Example: `cp .env.example .env`
    - Modify the `.env` files with your specific environment variables.

    ```bash
    # Example .env file contents:
    VARIABLE_NAME=your_value
    ANOTHER_VARIABLE=another_value
    ```

    - **Important:** Do not commit your `.env` files to version control. Add them to your `.gitignore`.

### Docker Setup

1.  **Build and run the Docker containers:**

    - From the root directory of the project, run the following command:

      ```bash
      docker-compose up --build -V
      ```

    - **Explanation of flags:**
      - `--build`: Builds the Docker images if they don't exist or if there are changes in the `Dockerfile`.
      - `-V`: Mounts named volumes. This flag is important for persistent data.
      - `up`: Starts the services defined in your `docker-compose.yml` file.

2.  **Accessing the application:**

    - Once the containers are running, you can access the application through the ports defined in your `docker-compose.yml` file.
    - For example, if you mapped port `8080` in your `docker-compose.yml`, you can access the application at `http://localhost:3002`.

    **See the documentation for more details.**

    ```bash
    yarn doc
    ```

### Stopping the Containers

To stop the Docker containers, run the following command:

```bash
docker-compose down -V
```
