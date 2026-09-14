const express = require("express");
const os = require("os");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || "development";

app.get("/", (req, res) => {
  const hostname = os.hostname();
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to SaraJS.in</title>
    <!-- Bootstrap CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #f1f5f9;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }
        .welcome-card {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            padding: 3rem 2.5rem;
            max-width: 680px;
            width: 100%;
            animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .icon-wrapper {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            width: 72px;
            height: 72px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);
            display: inline-flex;
        }
        .highlight-badge {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 14px;
            padding: 0.85rem 1.25rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            transition: all 0.3s ease;
        }
        .highlight-badge:hover {
            background: rgba(255, 255, 255, 0.06);
            border-color: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
        }
        .tech-tag {
            font-size: 0.82rem;
            padding: 0.4rem 0.85rem;
            border-radius: 10px;
            background: rgba(59, 130, 246, 0.08);
            color: #60a5fa;
            border: 1px solid rgba(59, 130, 246, 0.15);
            font-weight: 600;
            letter-spacing: 0.3px;
        }
        .badge-pulse {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(16, 185, 129, 0.1);
            color: #34d399;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 12px;
            border: 1px solid rgba(16, 185, 129, 0.2);
            text-transform: uppercase;
        }
        .pulse-dot {
            width: 6px;
            height: 6px;
            background-color: #10b981;
            border-radius: 50%;
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
            animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
    </style>
</head>
<body>
    <div class="welcome-card text-center">
        <div class="mb-2">
            <span class="badge-pulse">
                <span class="pulse-dot"></span> Active & Secure
            </span>
        </div>
        <div>
            <div class="icon-wrapper text-white">
                <i class="bi bi-cloud-check-fill"></i>
            </div>
        </div>
        <h1 class="fw-extrabold mb-3" style="font-size: 2.85rem; font-weight: 800; background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            Welcome to SaraJS.in
        </h1>
        <p class="text-secondary fs-5 mb-5" style="font-weight: 300;">
            Your modern cloud application is fully deployed, SSL secured, and running at production-grade on Azure Kubernetes Service (AKS).
        </p>
        
        <div class="row g-3 mb-5 text-start">
            <div class="col-md-6">
                <div class="highlight-badge">
                    <i class="bi bi-cpu-fill text-primary" style="font-size: 1.5rem;"></i>
                    <div>
                        <div class="text-secondary small" style="font-size: 0.75rem;">ENVIRONMENT</div>
                        <div class="fw-bold text-white text-capitalize" style="font-size: 1rem;">${APP_ENV}</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="highlight-badge">
                    <i class="bi bi-terminal-fill text-success" style="font-size: 1.5rem;"></i>
                    <div>
                        <div class="text-secondary small" style="font-size: 0.75rem;">APP VERSION</div>
                        <div class="fw-bold text-white" style="font-size: 1rem;">1.0.0</div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="highlight-badge">
                    <i class="bi bi-hdd-network-fill text-info" style="font-size: 1.5rem;"></i>
                    <div>
                        <div class="text-secondary small" style="font-size: 0.75rem;">ACTIVE REPLICA (AKS POD HOSTNAME)</div>
                        <div class="fw-bold text-white text-break" style="font-family: monospace; font-size: 0.95rem;">${hostname}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-5 text-start">
            <div class="text-secondary mb-3 fw-bold" style="font-size: 0.75rem; letter-spacing: 1px;">TECHNOLOGY STACK</div>
            <div class="d-flex flex-wrap gap-2">
                <span class="tech-tag">Azure AKS</span>
                <span class="tech-tag">Ingress Nginx</span>
                <span class="tech-tag">Cert-Manager</span>
                <span class="tech-tag">Let's Encrypt SSL</span>
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">Express</span>
                <span class="tech-tag">Docker</span>
            </div>
        </div>

        <hr class="border-secondary my-4" style="opacity: 0.15;">
        <div class="d-flex justify-content-between align-items-center text-secondary" style="font-size: 0.8rem;">
            <div><i class="bi bi-shield-lock-fill text-success me-1"></i> SSL Secured via cert-manager</div>
            <div>Built with ❤️ by AI Assistant</div>
        </div>
    </div>
</body>
</html>`);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.get("/ready", (req, res) => {
  res.status(200).json({
    status: "ready"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Application running on port ${PORT}`);
  console.log(`Environment: ${APP_ENV}`);
});
