<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="header-content">
  <img 
    alt="ATMI CUP" 
    class="logo" 
    src="https://atmicup-cdn.portbyte.id/logo_new.png" 
    width="150" 
    height="150" 
  />
  <HelloWorld msg="ATMI CUP" />
</div>


    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/scan" class="nav-link">Scaning</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #d4af37; /* Warna emas */
  --secondary-color: #1c1c1c; /* Hitam mewah */
  --accent-color: #f5f5f5; /* Warna netral terang */
  --border-color: rgba(255, 255, 255, 0.2);
  --font-family: 'Roboto', sans-serif;
  --font-family-header: 'Playfair Display', serif;
}

/* Header Styling */
header {
  background: linear-gradient(135deg, var(--primary-color), #b8860b);
  padding: 3rem 2rem;
  color: var(--accent-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border-bottom: 5px solid var(--primary-color);
  animation: fadeIn 1s ease;
}

.header-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
}

.logo {
  border-radius: 50%;
  border: 6px solid var(--accent-color);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
  width: 120px;
  height: 120px;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.logo:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.7);
}

h1 {
  font-family: var(--font-family-header);
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 1rem;
  color: var(--accent-color);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

/* Navigation Styling */
nav {
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  width: 100%;
}

.nav-link {
  background: linear-gradient(135deg, var(--primary-color), #b8860b);
  color: var(--accent-color);
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  padding: 14px 30px;
  border-radius: 50px;
  transition: background-color 0.4s ease, transform 0.3s ease;
  display: inline-block;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-color);
}

.nav-link:hover {
  background: linear-gradient(135deg, #ffd700, #d4af37);
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
}

.nav-link:active {
  background: #caa622;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  header {
    padding: 2rem 1rem;
    text-align: center;
  }

  .logo {
    width: 100px;
    height: 100px;
  }

  h1 {
    font-size: 1.8rem;
    margin-top: 1rem;
  }

  nav {
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
  }

  .nav-link {
    padding: 12px 20px;
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }
}

@media (min-width: 1024px) {
  header {
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 4rem;
  }

  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo {
    width: 150px;
    height: 150px;
  }

  nav {
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: flex-end;
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
