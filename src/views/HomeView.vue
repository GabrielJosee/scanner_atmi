<script setup>
</script>

<template>
  <main class="homepage">
    <section class="about">
      <div class="container">
        <h2>Tentang ATMI Cup</h2>
        <p>
          ATMI Cup adalah acara tahunan yang diselenggarakan oleh ATMI, yang mempertemukan peserta dari berbagai latar belakang untuk berlomba dalam berbagai cabang olahraga dan seni. Tujuan dari ATMI Cup adalah untuk menginspirasi dan mempererat hubungan antar peserta melalui kompetisi yang sehat dan kolaborasi dalam kegiatan seni, yang turut memperkaya budaya dan semangat kebersamaan.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>
        &copy; 2025 ATMI Cup. Semua hak cipta dilindungi. <a href="https://atmicup.id" target="_blank">Kunjungi Situs Resmi</a>
      </p>
    </footer>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #ffd700; /* Emas */
  --secondary-color: #1e1e1e;
  --accent-color: #ffffff;
  --font-family: 'Poppins', sans-serif;
}

body {
  font-family: var(--font-family);
  background: #f9f9f9;
  color: var(--secondary-color);
  line-height: 1.6;
}

.homepage {
  display: flex;
  flex-direction: column;
}
.about {
  padding: 60px 20px;
  text-align: center;
}

.about h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.about p {
  max-width: 800px;
  margin: auto;
  font-size: 1.1rem;
  line-height: 1.8;
}

/**** Footer ****/
.footer {
  background: var(--secondary-color);
  color: var(--accent-color);
  padding: 20px;
  text-align: center;
}

.footer a {
  color: var(--primary-color);
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

/**** Animations ****/
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
