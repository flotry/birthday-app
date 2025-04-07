README.md

# 🎉 Birthday Reminder App

A simple containerized Node.js web application deployed on DigitalOcean Kubernetes (DOKS). This app is built to demonstrate scalable infrastructure, autoscaling, load balancing, and cost-optimized deployment.

---

## 🚀 Features

- Node.js web server using Express
- Dockerized and deployed via DigitalOcean Container Registry
- Kubernetes deployment with autoscaling
- Health checks for liveness and readiness
- Resource limits for cost control
- LoadBalancer service for external access

---

## 📁 Project Structure


birthday-app/ ├── index.js ├── package.json ├── Dockerfile ├── deployment.yaml ├── service.yaml └── README.md
yaml
Copy

---

## 🧱 Prerequisites

Make sure the following are installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [doctl](https://docs.digitalocean.com/reference/doctl/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- A DigitalOcean account

---

## ⚙️ Local Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/birthday-app.git
cd birthday-app

Install dependencies and run:


bash
Copy
npm install
node index.js

Visit http://localhost:3000

Docker Build & Test
bash
Copy
docker build -t birthday-app .
docker run -p 3000:3000 birthday-app



Push to DigitalOcean Container Registry
bash
Copy
doctl auth init
doctl registry create birthday-registry
doctl registry login

docker tag birthday-app registry.digitalocean.com/birthday-registry/birthday-app
docker push registry.digitalocean.com/birthday-registry/birthday-app


Deploy to DigitalOcean Kubernetes
Create a DOKS cluster:


bash
Copy
doctl kubernetes cluster create birthday-cluster --region nyc1 --count 3
doctl kubernetes cluster kubeconfig save birthday-cluster

Grant registry access to the cluster:


bash
Copy
doctl kubernetes cluster registry add birthday-cluster

Apply the deployment and service:


bash
Copy
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

Get the external IP:


bash
Copy
kubectl get svc birthday-service

Open in your browser to access the app.

Enable Autoscaling
Install metrics server:


bash
Copy
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

Create a Horizontal Pod Autoscaler (HPA):


bash
Copy
kubectl autoscale deployment birthday-app --cpu-percent=50 --min=2 --max=5
kubectl get hpa


Resource Limits
The app uses the following default limits in deployment.yaml:
yaml
Copy
resources:
  requests:
    cpu: "100m"
    memory: "128Mi"
  limits:
    cpu: "500m"
    memory: "256Mi"



