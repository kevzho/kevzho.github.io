---
layout: default
title: Home
---

<header class="hero" style="position: relative; height: 60vh; min-height: 400px; display: flex; align-items: center; justify-content: center; overflow: hidden; background: var(--bg-color);">
    <div id="particle-container">
      <div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div>
      <div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div>
      <div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div>
      <div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div>
      <div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div>
      <div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div>
    </div>

    <div class="hero-content">
      <h1 style="color: var(--primary); font-size: 4rem; margin: 0;">{{ site.author | default: "Kevin" }}</h1>
      <h2 style="color: var(--text-color); font-size: 2.2rem; margin: 0.5rem 0;">Data Scientist in Training</h2>
      <p style="color: var(--text-color); font-size: 1.4rem; opacity: 0.9; margin: 1rem 0 2.5rem;">{{ site.tagline | default: "Exploring patterns, predicting possibilities" }}</p>

      <div class="status-line">
        <span> <strong>Currently working on</strong>: PLForecast - A Premier League Predictive Dashboard</span>
      </div>

      <div class="cta-buttons">
        <a href="/projects/" class="cta-primary">View Projects</a>
        <a href="/insights/" class="cta-secondary">Read Insights</a>
      </div>
    </div>
</header>

