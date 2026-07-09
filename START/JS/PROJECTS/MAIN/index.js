export const MAIN=()=>{

    document.querySelector("body").innerHTML=`

        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Elite Shipping | Elite Robust Ontology Projects</title>

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

        <style>

        *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Poppins',sans-serif;
        scroll-behavior:smooth;
        }

        body{
        background:#f5f7fb;
        color:#222;
        }

        /* Navigation */

        nav{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:18px 10%;
        background:rgba(0,51,102,.9);
        backdrop-filter:blur(12px);
        z-index:1000;
        }

        nav h2{
        color:#fff;
        }

        nav ul{
        display:flex;
        list-style:none;
        gap:30px;
        }

        nav a{
        color:white;
        text-decoration:none;
        transition:.3s;
        }

        nav a:hover{
        color:#66d9ff;
        }

        /* Hero */

        .hero{

        height:100vh;

        background:
        linear-gradient(rgba(0,35,80,.75),rgba(0,35,80,.75)),
        url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80");

        background-size:cover;
        background-position:center;

        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
        color:white;
        padding:20px;
        }

        .hero-content{
        max-width:900px;
        }

        .hero h1{
        font-size:4rem;
        margin-bottom:20px;
        }

        .hero p{
        font-size:1.2rem;
        line-height:1.8;
        }

        .buttons{
        margin-top:35px;
        }

        .btn{

        display:inline-block;
        padding:15px 35px;
        margin:10px;
        border-radius:40px;
        text-decoration:none;
        font-weight:bold;
        transition:.3s;
        }

        .primary{
        background:#00b894;
        color:white;
        }

        .primary:hover{
        transform:translateY(-3px);
        }

        .secondary{
        border:2px solid white;
        color:white;
        }

        .secondary:hover{
        background:white;
        color:#003366;
        }

        section{
        padding:90px 10%;
        }

        .title{
        text-align:center;
        font-size:2.5rem;
        margin-bottom:60px;
        color:#003366;
        }

        .grid{

        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
        gap:30px;

        }

        .card{

        background:white;
        padding:35px;
        border-radius:18px;
        box-shadow:0 10px 25px rgba(0,0,0,.08);
        transition:.4s;

        }

        .card:hover{
        transform:translateY(-10px);
        }

        .card h3{
        margin-bottom:15px;
        color:#003366;
        }

        .stats{

        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
        gap:30px;
        text-align:center;

        }

        .stat{

        background:#003366;
        color:white;
        padding:40px;
        border-radius:15px;

        }

        .stat h2{
        font-size:3rem;
        }

        footer{

        background:#001d3d;
        color:white;
        text-align:center;
        padding:50px 20px;

        }

        footer a{
        color:#66d9ff;
        text-decoration:none;
        }

        @media(max-width:768px){

        .hero h1{
        font-size:2.6rem;
        }

        nav{
        padding:15px 20px;
        }

        nav ul{
        display:none;
        }

        }

        </style>

        </head>

        <body>

        <nav>

        <h2>Elite Shipping</h2>

        <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>

        </nav>

        <section class="hero">

        <div class="hero-content">

        <h1>Elite Shipping</h1>

        <p>

        Elite Robust Ontology Projects for Web and Systems.

        Building scalable knowledge platforms, semantic technologies,
        cloud hosting, enterprise systems, AI-ready infrastructures,
        and modern web solutions.

        </p>

        <div class="buttons">

        <a class="btn primary"
        href="https://eliteship.github.io/">

        Visit Hosting Server

        </a>

        <a class="btn secondary"

        href="#services">

        Explore Services

        </a>

        </div>

        </div>

        </section>

        <section id="about">

        <h2 class="title">

        About Elite Shipping

        </h2>

        <div class="grid">

        <div class="card">

        <h3>Mission</h3>

        <p>

        Deliver reliable hosting and robust ontology solutions that empower
        organizations to build scalable web platforms and intelligent systems.

        </p>

        </div>

        <div class="card">

        <h3>Vision</h3>

        <p>

        Become a trusted global platform for semantic technologies,
        enterprise applications, cloud infrastructure, and digital innovation.

        </p>

        </div>

        <div class="card">

        <h3>Technology</h3>

        <p>

        Cloud Hosting • GitHub Pages • Web Applications • APIs •
        Knowledge Graphs • AI Integration • Semantic Web

        </p>

        </div>

        </div>

        </section>

        <section id="services">

        <h2 class="title">

        Our Services

        </h2>

        <div class="grid">

        <div class="card">
        <h3>🌐 Website Hosting</h3>
        <p>Reliable hosting for static and dynamic web applications.</p>
        </div>

        <div class="card">
        <h3>☁ Cloud Infrastructure</h3>
        <p>Fast deployment using modern cloud technologies.</p>
        </div>

        <div class="card">
        <h3>🧠 Ontology Engineering</h3>
        <p>Knowledge graphs, linked data, semantic web architecture.</p>
        </div>

        <div class="card">
        <h3>⚙ Enterprise Systems</h3>
        <p>Modern information systems for organizations.</p>
        </div>

        <div class="card">
        <h3>📊 Data Integration</h3>
        <p>Connecting enterprise data into intelligent platforms.</p>
        </div>

        <div class="card">
        <h3>🤖 AI Ready Solutions</h3>
        <p>Infrastructure designed for AI and automation projects.</p>
        </div>

        </div>

        </section>

        <section id="projects">

        <h2 class="title">

        Platform Statistics

        </h2>

        <div class="stats">

        <div class="stat">
        <h2>99.9%</h2>
        <p>Server Availability</p>
        </div>

        <div class="stat">
        <h2>24/7</h2>
        <p>Hosting Support</p>
        </div>

        <div class="stat">
        <h2>Secure</h2>
        <p>Cloud Infrastructure</p>
        </div>

        <div class="stat">
        <h2>Global</h2>
        <p>Accessibility</p>
        </div>

        </div>

        </section>

        <section id="contact">

        <h2 class="title">

        Connect With Elite Shipping

        </h2>

        <div class="card" style="max-width:800px;margin:auto;text-align:center;">

        <h3>Hosting Platform</h3>

        <p>

        Launch your ontology projects, semantic web applications,
        enterprise software, and modern digital solutions.

        </p>

        <br>

        <a class="btn primary"

        href="https://eliteship.github.io/">

        Open Elite Hosting

        </a>

        </div>

        </section>

        <footer>

        <h2>Elite Shipping</h2>

        <br>

        <p>

        Elite Robust Ontology Projects for Web and Systems

        </p>

        <br>

        <p>

        Website:
        <a href="https://eliteship.github.io/">

        https://eliteship.github.io/

        </a>

        </p>

        <br>

        <p>

        © 2026 Elite Shipping. All Rights Reserved.

        </p>

        </footer>

        </body>
        </html>
    
    `;

};