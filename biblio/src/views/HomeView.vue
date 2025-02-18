<template>
  <div>
    <Navbar />
    <main>
<!-- SLIDER SĀKUMS SLIDER SĀKUMS SLIDER SĀKUMS SLIDER SĀKUMS SLIDER SĀKUMS -->

      <div class="slideshow-container">
        <div class="mySlides fade" v-for="(slide, index) in slides" :key="index" :class="{ active: index === currentSlide }">
          <div class="numbertext">{{ index + 1 }} / {{ slides.length }}</div>
          <img :src="slide.src" alt="Slide Image" />
          <div class="text">{{ slide.caption }}</div>
        </div>
        <a class="prev" @click="changeSlide(-1)">&#10094;</a>
        <a class="next" @click="changeSlide(1)">&#10095;</a>
      </div>
      <br />
      <div style="text-align:center">
        <span class="dot" v-for="(slide, index) in slides" :key="index" @click="currentSlide = index" :class="{ active: index === currentSlide }"></span>
      </div>
<!-- SLIDER BEIGAS SLIDER BEIGAS SLIDER BEIGAS SLIDER BEIGAS SLIDER BEIGAS -->
      <div class="intro-text">
        "Lasīt grāmatas ir kā ceļot laikā un telpā – un šeit Tu vari atrast savu nākamo galamērķi!"
      </div>

      <div class="virsraksti">
        Populārākie Žanri
      </div>
      <div class="genre-section">
        <div v-for="genre in genres" :key="genre.name" class="genre-card" @click="selectGenre(genre.name)">
          <img :src="genre.image" :alt="genre.name" class="genre-image" />
          <div class="genre-name">{{ genre.name }}</div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      currentSlide: 0,
      slides: [
        { src: "/img/hand-drawn-book-club-facebook-cover-b.png" },
        { src: "/img/hand-drawn-book-club-twitch-banner-template.png" },
        { src: "/img/1.jpg" },
      ],
      genres: [
        { name: "Fantāzija", image: "/img/fantasy.jpg" },
        { name: "Detektīvi", image: "/img/detective.jpg" },
        { name: "Romāni", image: "/img/romance.jpg" },
        { name: "Zinātniskā fantastika", image: "/img/scifi.jpg" },
        { name: "Vēsturiskie", image: "/img/history.jpg" },
      ],
    };
  },
  methods: {
    changeSlide(n) {
      this.currentSlide = (this.currentSlide + n + this.slides.length) % this.slides.length;
    },
    showSlides() {
      this.changeSlide(1);
    },
    selectGenre(genre) {
      console.log("Selected genre:", genre);
    },
  },
  mounted() {
    setInterval(this.showSlides, 3000);
  },
};
</script>

<style scoped>
/* SLIDER SAKUMS SLIDER SAKUMS SLIDER SAKUMS SLIDER SAKUMS SLIDER SAKUMS */
* {
  box-sizing: border-box;
}

.main-content {
  padding-top: 150px; /* Increased value to move the slideshow lower */
}

/* Slideshow container */
.slideshow-container {
  padding: 0;
  max-width: 1200px;
  height: 500px; /* Increased height for a bigger display */
  position: relative;
  margin: 40px auto; /* Moves it down */
  margin-bottom: 0;
  border: 2px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* background: linear-gradient(to bottom, #D8C4B6,#D8C4B6); Smooth background */
}

/* Hide the images by default */
.mySlides {
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.mySlides img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensures full image visibility */
  object-position: center; /* Centers the image */
  background-color:#F5EFE7; /* Adds a background in case the image doesn't fill */
}

@media (max-width: 768px) {
  .slideshow-container {
    height: 300px; /* Reduce size on mobile */
  }

  .mySlides img {
    height: 100%;
    object-fit: contain;
  }
}

/* Show the active slide */
.mySlides.active {
  display: block;
}

/* Style for the images */
.slide-image {
  width: 100%; /* Ensure the image takes up the full width of the container */
  height: 100%; /* Maintain aspect ratio */
  object-fit: cover; /* Ensure images cover the area without distortion */
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.5); Semi-transparent background for better readability */
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  
  position: relative;
  top: -3px; /* Move the dots slightly up */
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from { opacity: .4 }
  to { opacity: 1 }
}
/* SLIDER BEIGAS SLIDER BEIGAS SLIDER BEIGAS SLIDER BEIGAS SLIDER BEIGAS */
.intro-text {
  font-size: 32px; /* Lielāki burti */
  font-weight: bold; /* Treknraksts */
  text-align: center;
  max-width: 700px;
  padding: 30px;
  margin: 50px auto;
  border-radius: 15px;
  color: rgb(3, 1, 1);
  
  /* Interesants gradienta fons */
  
}

.virsraksti {
  font-size: 24px; /* Lielāki burti */
  font-weight: bold; /* Treknraksts */
  text-align: left; /* Teksts ir kreisajā pusē */
  margin-left: 0; /* Atstāj nulles attālumu no kreisās malas */
  padding-left: 20px; /* Nedaudz ievilkums, lai nebūtu tieši pie malas */
  color: #213555; /* Teksta krāsa */
  position: relative; /* Lai varētu izmantot pseido-elementu */

  /* Līnija zem teksta */
}

.virsraksti::after {
  content: "";
  position: absolute;
  bottom: 10px; /* Attālums no teksta līdz līnijai */
  margin-left: 20px; /* Increase the margin to move the line to the right */
  width: 40%;
  height: 2px; /* Līnijas biezums */
  background-color: #213555; /* Līnijas krāsa */
}
.genre-section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 20px;
}

.genre-card {
  width: 180px;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.genre-card:hover {
  transform: scale(1.05);
}

.genre-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.genre-name {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}

</style>
