
// -------- Language packs --------
const i18n = {
  en: {
    nav_about: "About",
    nav_exp: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_edu: "Education",
    nav_contact: "Contact",
    hero_title: "AI Engineer",
    hero_lead:
      "Delivering scalable AI solutions NLP, Computer Vision, and LLMs with a focus on operability, reliability, and business impact.",
    cta_projects: "View Projects",
    cta_contact: "Contact Me",
    photo_hint: "Replace the photo by uploading <b>assets/profile.jpg</b> (.jpg/.png) via your hosting File Manager.",
    about_title: "About Me",
    about_p1:
      "AI Engineer with 2+ years of experience building & operating end‑to‑end AI systems. Strengths: FastAPI microservices, LLM & RAG integration (Qdrant/Elasticsearch), and inference optimization (quantization, distillation).",
    about_p2:
      "Track record: modular agents (OCR Correction, Daily Summary, Analytical, Conversational), sentiment API in production (gRPC + monitoring/logging), fine‑tuning Qwen3‑0.6B for Indonesian summarization, and CV pipelines (OpenCV/YOLO) for audience analytics.",
    exp_title: "Work Experience",
    exp_binokular_1: "Designed & implemented modular AI Agents (FastAPI) for document automation, media monitoring, content, and analytics reporting.",
    exp_binokular_2: "Built SEO Content Agent (multilingual) and Daily Summary Agent (trend reports).",
    exp_binokular_3: "Integrated Qdrant + RAG for semantic search & analytics.",
    exp_binokular_4: "Fine‑tuned Qwen3‑0.6B (Indonesian summaries); sentiment API in production (gRPC, monitoring/logging).",
    exp_binokular_5: "Resource efficiency via quantization/distillation; OCR + CV (OpenCV/YOLO) for audience analytics.",
    exp_upwork_1: "Delivered FastAPI microservices & production AI for e‑commerce, content, and analytics.",
    exp_upwork_2: "Custom AI agents for SEO content automation, chat‑history analytics API, recipe/content agent.",
    exp_upwork_3: "Integrated FastAPI + MySQL + cloud deployments; automated workflows.",
    exp_cloufina_1: "Face login liveness detection (multi‑factor) on FastAPI for security & anti‑spoofing.",
    exp_cloufina_2: "Customer scoring engine & RAG document insight chatbot (FastAPI + Qdrant/Elasticsearch).",
    exp_cloufina_3: "Hotel FAQ/booking chatbot (lower latency, better UX).",
    exp_cai_1: "Content recommendation model (Bisa AI Academy) to improve engagement & discovery.",
    exp_cai_2: "Botpress chatbot & ML model API integrations (client‑server).",
    proj_title: "Selected Projects",
    proj_omni: "Modular 9‑agent suite; includes SEO content generation, daily summaries, and OCR correction unified under a production‑ready multi‑agent orchestration.",
    proj_sentiment: "Production sentiment‑analysis API using Transformers (gRPC + monitoring/logging), low‑latency, multilingual.",
    proj_newsclf: "News category classification: multi‑topic (e.g., business, sports, technology).",
    proj_n8n: "Analytics automation: AI chatbot integrated with internal services to derive insights from Qdrant data (multi‑step workflow).",
    proj_rag: "Document‑aware conversational assistant (RAG) for fast, accurate answers.",
    proj_face: "Secure authentication with multi‑factor verification; reduces spoofing.",
    proj_virtual_items: "Virtual‑item transaction system integrated with a payment gateway and WhatsApp chatbot for notifications/support designed to follow platform policies and payment compliance.",
    skills_title: "Skills",
    skills_lang: "Languages & Frameworks",
    skills_platform: "Platforms & Data",
    skills_focus: "Focus Areas",
    edu_title: "Education & Organizations",
    edu_uny: "B.Eng. in Mechatronics — Yogyakarta State University (GPA 3.57), 2018–2023",
    edu_uny_robotik: "UNY Robotics Team (2018–2022)",
    edu_uny_berprestasi: "Outstanding Student (2020–2022)",
    edu_pkm: "Student Creativity Program (PKM) - Karsa Cipta (KC) Autonomous Smart Vehicle, 2021.",
    edu_orbit: "Orbit Future Academy (2022): TensorFlow, Computer Vision, and LSTM for time‑series.",
    ach_title: "Achievements",
    ach_kibo: "4th place — Kibo‑RPC International (2021) & 1st — Kibo‑RPC Indonesia Preliminary (2021).",
    ach_opt: "Significant AI system efficiency gains via optimization.",
    contact_title: "Contact",
    contact_desc: "Open to collaboration or freelance in evenings & weekends. Reach me at:",
    foot_hint: "Static version — perfect for shared hosting (cPanel/DirectAdmin)."
  },
  id: {
    nav_about: "Tentang",
    nav_exp: "Pengalaman",
    nav_projects: "Projek",
    nav_skills: "Keahlian",
    nav_edu: "Pendidikan",
    nav_contact: "Kontak",
    hero_title: "AI Engineer",
    hero_lead:
      "Menghadirkan solusi AI yang dapat diskalakan NLP, Computer Vision, dan LLM dengan fokus pada kemudahan operasional, reliabilitas, dan dampak bisnis.",
    cta_projects: "Lihat Projek",
    cta_contact: "Hubungi Saya",
    photo_hint: "Untuk mengganti foto: unggah <b>assets/profile.jpg</b> (format .jpg/.png) via File Manager cPanel.",
    about_title: "Tentang Saya",
    about_p1:
      "Saya adalah AI Engineer dengan pengalaman 2+ tahun membangun dan mengoperasikan sistem AI end‑to‑end. Keahlian: arsitektur microservice FastAPI, integrasi LLM & RAG (Qdrant/Elasticsearch), dan optimisasi inferensi (quantization, distillation).",
    about_p2:
      "Rekam jejak: agen modular (OCR Correction, Daily Summary, Analytical, Conversational), sentiment API production (gRPC + monitoring/logging), fine‑tuning Qwen3‑0.6B untuk ringkasan Bahasa Indonesia, dan pipeline CV (OpenCV/YOLO) untuk analitik audiens.",
    exp_title: "Pengalaman Kerja",
    exp_binokular_1: "Merancang & menerapkan AI Agent modular (FastAPI) untuk otomasi dokumen, monitoring media, konten, dan pelaporan.",
    exp_binokular_2: "SEO Content Agent (multibahasa) dan Daily Summary Agent (laporan tren).",
    exp_binokular_3: "Integrasi Qdrant + RAG untuk pencarian semantik & analitik.",
    exp_binokular_4: "Fine‑tuning Qwen3‑0.6B (ringkas Bahasa Indonesia), sentiment API production (gRPC, monitoring/logging).",
    exp_binokular_5: "Optimisasi resource (quantization, distillation), OCR + CV (OpenCV/YOLO) untuk analitik audiens.",
    exp_upwork_1: "Delivery microservice FastAPI & solusi AI production untuk e‑commerce, konten, dan analitik.",
    exp_upwork_2: "Custom AI agent untuk SEO content automation (multibahasa), chat history analytics API, recipe/content agent.",
    exp_upwork_3: "Integrasi FastAPI + MySQL + cloud deployment; otomasi workflow.",
    exp_cloufina_1: "Face login liveness detection (multi‑faktor) di FastAPI untuk keamanan & anti‑spoofing.",
    exp_cloufina_2: "Customer scoring engine & RAG document insight chatbot (FastAPI + Qdrant/Elasticsearch).",
    exp_cloufina_3: "Hotel FAQ/booking chatbot (latensi rendah, pengalaman lebih baik).",
    exp_cai_1: "Model rekomendasi konten (Bisa AI Academy) untuk engagement & discovery.",
    exp_cai_2: "Chatbot Botpress & integrasi API model ML client‑server.",
    proj_title: "Projek Terpilih",
    proj_omni: "Suite 9 agen modular; termasuk SEO content generation, daily summary, dan OCR correction disatukan dalam orkestrasi multi‑agent yang siap produksi.",
    proj_sentiment: "API analisis sentimen produksi berbasis Transformers (gRPC + monitoring/logging), latensi rendah, multibahasa.",
    proj_newsclf: "Klasifikasi berita multi‑kategori untuk berbagai topik (mis. bisnis, olahraga, teknologi).",
    proj_n8n: "Otomasi analitik: integrasi chatbot AI dengan layanan internal untuk menganalisis insight dari data di Qdrant (workflow multi‑step).",
    proj_rag: "Percakapan berbasis dokumen internal (RAG), akses cepat & jawaban akurat.",
    proj_face: "Autentikasi aman dengan verifikasi multi‑faktor & penurunan spoofing.",
    proj_virtual_items: "Sistem transaksi item virtual terintegrasi dengan payment gateway dan chatbot WhatsApp untuk otomasi notifikasi/dukungan dirancang mematuhi kebijakan platform & kepatuhan pembayaran.",
    skills_title: "Keahlian",
    skills_lang: "Bahasa & Framework",
    skills_platform: "Platform & Data",
    skills_focus: "Fokus",
    edu_title: "Pendidikan & Organisasi",
    edu_uny: "S1 Teknik Mekatronika — Universitas Negeri Yogyakarta (IPK 3.57), 2018–2023",
    edu_uny_robotik: "Tim Robotik UNY (2018–2022)",
    edu_uny_berprestasi: "Mahasiswa Berprestasi (2020–2022)",
    edu_pkm: "Program Kreativitas Mahasiswa (PKM) - Karsa Cipta (KC) Autonomous Smart Vehicle, 2021.",
    edu_orbit: "Orbit Future Academy (2022): TensorFlow, Computer Vision, LSTM untuk deret waktu.",
    ach_title: "Pencapaian",
    ach_kibo: "4th place Kibo‑RPC Internasional (2021) & Juara 1 Kibo‑RPC Indonesia Preliminary (2021).",
    ach_opt: "Optimasi sistem AI hingga efisiensi resource signifikan.",
    contact_title: "Kontak",
    contact_desc: "Terbuka untuk kolaborasi atau freelance malam & akhir pekan. Silakan hubungi saya:",
  },
};

// Apply language to all [data-i18n] elements
function applyLang(lang){
  const pack = i18n[lang] || i18n.id;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(pack[key]) el.innerHTML = pack[key];
  });
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

// Theme + Language toggles + smooth scroll + contact form handler
(function(){
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'light'){ root.classList.add('light'); }
  document.getElementById('themeToggle').addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });

  // language init
  const savedLang = localStorage.getItem('lang') || 'id';
  applyLang(savedLang);
  document.querySelectorAll('.lang').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // smooth scroll
  document.querySelectorAll('a[href^=\"#\"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth'});
        history.pushState(null, '', id);
      }
    });
  });

  // Contact form (Formspree-compatible, mailto fallback)
  const FORM_ENDPOINT = ""; // e.g., "https://formspree.io/f/xxxxabcd"
  const form = document.getElementById('contactForm');
  if(form){
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = (localStorage.getItem('lang') || 'id') === 'en' ? 'Sending...' : 'Mengirim...';
      const data = new FormData(form);
      if(!FORM_ENDPOINT){
        const name = encodeURIComponent(data.get('name') || '');
        const subj = encodeURIComponent(data.get('subject') || 'Contact from portfolio');
        const body = encodeURIComponent(`Nama: ${name}\\nEmail: ${data.get('email')}\\n\\n${data.get('message')}`);
        window.location.href = `mailto:farizalmustaqim45@gmail.com?subject=${subj}&body=${body}`;
        status.textContent = (localStorage.getItem('lang') || 'id') === 'en' ? 'Opening email client...' : 'Membuka aplikasi email...';
        return;
      }
      try {
        const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { 'Accept': 'application/json' }});
        if(res.ok){
          form.reset();
          status.textContent = (localStorage.getItem('lang') || 'id') === 'en' ? 'Message sent. Thank you!' : 'Pesan terkirim. Terima kasih!';
        } else {
          status.textContent = (localStorage.getItem('lang') || 'id') === 'en' ? 'Failed to send. Please try again later.' : 'Gagal mengirim. Coba lagi nanti.';
        }
      } catch {
        status.textContent = (localStorage.getItem('lang') || 'id') === 'en' ? 'Network error.' : 'Terjadi kesalahan jaringan.';
      }
    });
  }
})();
