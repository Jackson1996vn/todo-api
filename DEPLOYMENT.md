# Deployment Guide

This project includes a GitHub Actions CI/CD pipeline that automatically builds, tests, and deploys your Todo API.

## 🚀 GitHub Actions Workflow

The workflow (`ci-cd.yml`) is triggered on every push to the `main` branch and consists of two jobs:

### Job 1: Build and Test
1. **Checkout repository** - Gets the latest code
2. **Setup Node.js** - Installs Node.js v20
3. **Install dependencies** - Runs `npm ci` for clean install
4. **Run unit tests** - Executes `npm test`
5. **Build project** - Runs `npm run build`

### Job 2: Deploy to Render
- Automatically deploys to Render after successful build and tests
- Requires Render credentials (see setup below)

## 📦 Free Deployment Options

### Option 1: Render (Recommended)

Render offers free hosting for web services with:
- Automatic deployments from GitHub
- Free SSL certificates
- 750 hours/month free tier

#### Setup Steps:

1. **Create a Render account**
   - Go to [render.com](https://render.com)
   - Sign up with your GitHub account

2. **Create a new Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `Jackson1996vn/todo-api`
   - Configure the service:
     - **Name**: `todo-api`
     - **Environment**: `Node`
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm run start:prod`
     - **Instance Type**: `Free`

3. **Get Render API credentials**
   - Go to [Account Settings](https://dashboard.render.com/u/settings)
   - Click "API Keys" → "Create API Key"
   - Copy the API key
   - Go to your Web Service → Settings
   - Copy the Service ID from the URL (e.g., `srv-xxxxx`)

4. **Add secrets to GitHub**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Add two secrets:
     - `RENDER_API_KEY`: Your Render API key
     - `RENDER_SERVICE_ID`: Your Render service ID

5. **Deploy automatically**
   - Push to main branch
   - GitHub Actions will trigger deployment
   - Your API will be live at: `https://todo-api-xxxx.onrender.com`

#### Manual Deployment (Alternative):

If you prefer manual deployment without GitHub Actions:

1. In Render dashboard, click "Manual Deploy" → "Deploy latest commit"
2. Or use the provided `render.yaml` for Blueprint deployment:
   - Click "New +" → "Blueprint"
   - Connect repository and select `render.yaml`

### Option 2: Railway

Railway offers:
- $5 free credit/month
- Easy GitHub integration
- Automatic SSL

#### Setup Steps:

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. New Project → Deploy from GitHub repo
4. Select `Jackson1996vn/todo-api`
5. Railway will auto-detect NestJS and deploy
6. Add environment variables if needed:
   - `NODE_ENV=production`
   - `PORT=3000`

### Option 3: Fly.io

Fly.io offers:
- Free tier with 3 shared-cpu VMs
- Global deployment

#### Setup Steps:

1. Install Fly CLI: `curl -L https://fly.io/install.sh | sh`
2. Login: `fly auth login`
3. Launch: `fly launch` (follow prompts)
4. Deploy: `fly deploy`

### Option 4: Vercel

Vercel supports Node.js APIs:
- Serverless functions
- Automatic HTTPS
- Free tier available

Note: You'll need to adapt the project structure for Vercel's serverless format.

## 🔧 Environment Variables

For production deployment, you may want to add:

```env
NODE_ENV=production
PORT=3000
```

## 📊 Monitoring Deployment

### GitHub Actions
- Go to your repository → "Actions" tab
- Click on the latest workflow run
- View logs for build, test, and deployment steps

### Render Dashboard
- View deployment logs in real-time
- Monitor service health and metrics
- View deployment history

## 🧪 Testing the Deployed API

Once deployed, test your API:

```bash
# Get all todos
curl https://your-api-url.onrender.com/todos

# Get specific todo
curl https://your-api-url.onrender.com/todos/1

# Create a todo
curl -X POST https://your-api-url.onrender.com/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Deploy API","description":"Deploy to production","completed":false}'

# Update a todo
curl -X PUT https://your-api-url.onrender.com/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'

# Delete a todo
curl -X DELETE https://your-api-url.onrender.com/todos/1
```

## 🔄 Continuous Deployment

Every push to `main` branch will:
1. ✅ Run automated tests
2. ✅ Build the application
3. ✅ Deploy to Render (if configured)

## 📝 Notes

- Free tier services may have cold starts (first request takes longer)
- Render free tier spins down after 15 minutes of inactivity
- Consider upgrading to paid tier for production workloads
- Set up monitoring and error tracking for production apps

## 🆘 Troubleshooting

### Build fails in CI
- Check GitHub Actions logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Tests fail
- Run tests locally: `npm test`
- Check test configuration in `package.json`
- Review test logs in GitHub Actions

### Deployment fails
- Verify Render API credentials in GitHub Secrets
- Check Render dashboard for error logs
- Ensure build and start commands are correct

### API not responding
- Check service status in Render dashboard
- Verify environment variables
- Check application logs for errors

