# Publishing microservice to the cloud

## Basic Overview
In this project, we're publishing the Docker image to Google Cloud Platform using Artifact Registry. The image can then be pulled and run in a Docker container on any environment, ensuring easy deployment and portability of the microservice.

## Steps/Instructions
1. Login to gcloud first by using "gclould auth login", follow all the prompts when redirected to the browser

2. Setup your GCP project by using "gcloud config set project **(project_id)**"

3. Authenticate docker with GCP using "gcloud auth configure-docker"

4. Create an artifact registry for the repo
  - **Place this in the terminal and fill in the paranthesis:**
```base
gcloud artifacts repositories create my-repo --repository-format-=docker --location=(region)
```

5. Tag the calcapp image to the artifact repoitory
```base
docker tag calcapp (region)-docker.pkg.dev/(project_ID)/my-repo/calcapp:latest
```

6. Push the image to the artifact repository
```base
docker push (region)-docker.pkg.dev/(project_ID)/my-repo/calcapp:latest
```

7. Pull the calcapp image from the repo stored on the cloud repository
```base
docker pull (region)-docker.pkg.dev/**(project_ID)**/my-repo/calcapp:latest
```

8. Now, run the container with the pulled image from the cloud repo and map it to port 3040
```base
docker run -p 3040:3040 **(region)**-docker.pkg.dev/**(project_ID)**/my-repo/calcapp:latest" into the terminal
```

9. Test if the microservice is working by going to <http://localhost:3040/divide?n1=10&n2=2>
