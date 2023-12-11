# Posts Microservices Project

Welcome to the Posts Microservices project, a demonstration of microservices architecture and container orchestration using React, Nodejs, Docker and Kubernetes. This project is designed to handle user posts and comments with embedded moderation. The application is divided into six microservices: posts, comments, query, moderation, event-bus, and client.

## Project Overview

### Microservices Structure

1. **Posts Service**: Manages user posts.
2. **Comments Service**: Handles user comments.
3. **Query Service**: Provides querying capabilities.
4. **Moderation Service**: Embeds moderation functionality.
5. **Event-Bus Service**: Facilitates asynchronous communication between microservices.
6. **Client Service**: Frontend application built in React.

### Container Orchestration

- Kubernetes is used for container orchestration.
- The application runs in pods within a Kubernetes cluster.
- Communication between microservices uses Kubernetes ClusterIP for internal communication and NodePort for external access.
- Kubernetes Ingress Nginx is employed for load balancing.

### CI/CD with Skaffold

- Skaffold is utilized for Continuous Integration and Continuous Deployment (CI/CD).
- Ensure Skaffold is installed on your local machine.
- Run `skaffold dev` to initiate container building from Docker images.

<img width="400" alt="scaffold logs" src="https://github.com/akhmadmamirov/posts-microservices/assets/105142060/dc5ff549-5dca-4aaf-adaa-76dc249bcf53">

### Project Structure

- **Client**: Contains the frontend application (React).
- **Services**: Implemented in Node.js. Install dependencies before running.
- **Infra/k8s**: Holds Kubernetes deployment and service configuration files. Modify the image name (`akhmadillobek`) with your Docker ID in all `.yaml` files.

### Async Communication

- Event-bus facilitates asynchronous communication between microservices.

### Ingress Nginx Configuration

- Ingress Nginx assumes the cluster is run in `posts.com`.
- For development, modify your local machine host file to include `127.0.0.1 posts.com`.

## Getting Started

1. Install dependencies for services and the client.
2. Ensure Kubernetes is set up and running.
3. Modify your Docker ID in the `.yaml` files under `infra/k8s`.
4. Update your local machine's host file for development.
5. Install Skaffold and run `skaffold dev` for starting up application.

<img width="350" height="300" alt="skaffold logs" src="https://github.com/akhmadmamirov/posts-microservices/assets/105142060/6e3e1330-e326-463c-8b92-90bd4a424d87">
<img width="350" height="300" alt="skaffold logs" src="https://github.com/akhmadmamirov/posts-microservices/assets/105142060/cadc0d7d-c20b-4cad-a17c-75d689f91621">


## Development

Feel free to play and share your insights with me through my Linkedin page provided in my profile.

Mentor: Stephen Grider

