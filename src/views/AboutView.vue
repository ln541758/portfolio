<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: "HTML",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
          status: "Proficient",
        },
        {
          id: 2,
          name: "CSS",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
          status: "Proficient",
        },
        {
          id: 3,
          name: "JavaScript",
          imageUrl:
            "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
          status: "Proficient",
        },
        {
          id: 4,
          name: "TypeScript.js",
          imageUrl: "https://img.icons8.com/fluency/48/typescript--v1.png",
          status: "Proficient",
        },
        {
          id: 5,
          name: "VueJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp",
          status: "Proficient",
        },
        {
          id: 6,
          name: "NodeJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
          status: "Proficient",
        },
        {
          id: 7,
          name: "Express.js",
          imageUrl: "https://img.icons8.com/nolan/64/express-js.png",
          status: "Proficient",
        },
        {
          id: 8,
          name: "ReactJS",
          imageUrl:
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          status: "Proficient",
        },
        {
          id: 9,
          name: "Python",
          imageUrl: "https://img.icons8.com/color/48/python--v1.png",
          status: "Proficient",
        },
        {
          id: 10,
          name: "Java",
          imageUrl:
            "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
          status: "Proficient",
        },
        {
          id: 11,
          name: "C/C++",
          imageUrl: "https://img.icons8.com/fluency/48/c-plus-plus-logo.png",
          status: "Proficient",
        },
        {
          id: 12,
          name: "C#",
          imageUrl: "https://img.icons8.com/color/48/c-sharp-logo.png",
          status: "Proficient",
        },
        {
          id: 13,
          name: "Flask",
          imageUrl: "https://img.icons8.com/nolan/64/flask.png",
          status: "Proficient",
        },
        {
          id: 14,
          name: "React Native",
          imageUrl: "https://img.icons8.com/nolan/64/react-native.png",
          status: "Proficient",
        },
        {
          id: 15,
          name: "Firebase",
          imageUrl: "https://img.icons8.com/color/48/firebase.png",
          status: "Proficient",
        },
        {
          id: 16,
          name: "Rest API",
          imageUrl: "https://img.icons8.com/nolan/64/api-settings.png",
          status: "Proficient",
        },
        {
          id: 17,
          name: "Unity",
          imageUrl: "https://img.icons8.com/nolan/64/unity.png",
          status: "Proficient",
        },
        {
          id: 18,
          name: "Blender",
          imageUrl: "https://img.icons8.com/fluency/48/blender-3d.png",
          status: "Proficient",
        },
      ],
      tools: [
        {
          id: 1,
          name: "Git",
          imageUrl:
            "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
          status: "Version Control",
        },
        {
          id: 2,
          name: "GitHub",
          imageUrl: "https://img.icons8.com/nolan/64/github.png",
          status: "Git Hosting",
        },
        {
          id: 3,
          name: "NPM",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
          status: "Package Manager",
        },
        {
          id: 4,
          name: "MySQL",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
          status: "Database",
        },
        {
          id: 5,
          name: "MongoDB",
          imageUrl: "https://img.icons8.com/color/48/mongo-db.png",
          status: "Database",
        },
        {
          id: 6,
          name: "Firestore",
          imageUrl: "https://img.icons8.com/color/48/cloud-firestore.png",
          status: "Database",
        },
        {
          id: 7,
          name: "AWS",
          imageUrl: "https://img.icons8.com/color/48/amazon-web-services.png",
          status: "Cloud Services",
        },
        {
          id: 8,
          name: "Redis",
          imageUrl: "https://img.icons8.com/color/48/redis--v1.png",
          status: "Database",
        },
        {
          id: 9,
          name: "Maven",
          imageUrl: "https://img.icons8.com/water-color/50/maven-ios.png",
          status: "Management Tools",
        },
        {
          id: 10,
          name: "ArcGIS",
          imageUrl: "img/arcgis.png",
          status: "Data Analysis",
        },
        {
          id: 11,
          name: "SPSS",
          imageUrl: "img/spss.png",
          status: "Data Analysis",
        },
      ],
      design: [
        {
          id: 1,
          name: "Revit",
          imageUrl: "img/revit.png",
          status: "Architecture Design",
        },
        {
          id: 2,
          name: "Dynamo",
          imageUrl: "img/dynamo.png",
          status: "Visual Programming",
        },
        {
          id: 3,
          name: "Rhinoceros",
          imageUrl: "img/rhino.svg",
          status: "3D Modeling",
        },
        {
          id: 4,
          name: "Grasshopper",
          imageUrl: "img/grasshopper.png",
          status: "Parametric Design",
        },
        {
          id: 5,
          name: "Sketchup",
          imageUrl: "https://img.icons8.com/color/48/google-sketchup.png",
          status: "3D Modeling",
        },
        { id: 6, name: "Vray", imageUrl: "img/vray.png", status: "Rendering" },
        {
          id: 7,
          name: "Enscape",
          imageUrl: "img/enscape.png",
          status: "Real-Time Rendering",
        },
        {
          id: 8,
          name: "Lumion",
          imageUrl: "https://img.icons8.com/color/48/lumion.png",
          status: "Visualization",
        },
        {
          id: 9,
          name: "Photoshop",
          imageUrl: "https://img.icons8.com/color/48/adobe-photoshop--v1.png",
          status: "Image Editing",
        },
        {
          id: 10,
          name: "Illustrator",
          imageUrl: "https://img.icons8.com/color/48/adobe-illustrator--v1.png",
          status: "Vector Graphics",
        },
        {
          id: 11,
          name: "InDesign",
          imageUrl: "https://img.icons8.com/color/48/adobe-indesign--v1.png",
          status: "Layout Design",
        },
      ],
    };
  },
};
</script>
<template>
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5"
  >
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center"
        >
          About Me &nbsp;
          <div
            class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center md:px-10"
      >
        <!-- Left Image -->
        <img
          class="w-[500px] md:w-[400px] sm:w-[300px] rounded-full mb-3 fadein-up pict"
          src="img/003.jpg"
          alt="Foto"
        />

        <!-- Right Text Section -->
        <div
          class="mb-3 md:mb-7 fadein-left fadeins-1 max-w-prose mx-auto md:ml-8"
        >
          <!-- Name -->
          <h1 class="text-3xl md:text-3xl font-bold bg-gradient-to-r">
            Lilian <span class="font-normal">Lin</span>
          </h1>

          <!-- Subtitle -->
          <h2 class="text-base md:text-lg mt-2 bg-gradient-to-r">(Dr. Lin)</h2>

          <!-- Introduction -->
          <ul class="space-y-4 mt-5">
            <li
              class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent text-sm md:text-base"
            >
              I'm a passionate designer, software developer, and
              interdisciplinary researcher with a strong foundation in computer
              science, computer-aided design, and human-computer interaction.
            </li>
            <li
              class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent text-sm md:text-base"
            >
              I enjoy exploring new technologies, photography, traveling, and
              playing volleyball.
            </li>
            <li
              class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent text-sm md:text-base"
            >
              I am currently a Master of Computer Science student at
              Northeastern University Vancouver campus and a Software Engineer
              Intern at Kardium, where I contribute to innovative software
              solutions.
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>

  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center"
        >
          <div
            class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5"
          >
            <li class="mr-2">
              <button
                class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{
                  'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 1,
                }"
                @click="activeTab = 1"
              >
                Tech Stack
              </button>
            </li>
            <li class="mr-2">
              <button
                class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{
                  'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 2,
                }"
                @click="activeTab = 2"
              >
                Tools
              </button>
            </li>
            <li class="mr-2">
              <button
                class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{
                  'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 3,
                }"
                @click="activeTab = 3"
              >
                Design Software
              </button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div
            class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
          >
            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in"
                  v-if="item.imageUrl"
                >
                  <img
                    alt="HTML"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl"
                    style="color: transparent"
                  />
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div
                    class="tech font-medium text-secondary transition-all duration-300 translate-y-0"
                  >
                    {{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm"
                  >
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div
            class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
          >
            <div v-for="item in tools" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in"
                >
                  <img
                    alt="HTML"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl"
                    style="color: transparent"
                  />
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div
                    class="tech font-medium text-secondary transition-all duration-300 translate-y-0"
                  >
                    {{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm"
                  >
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="activeTab === 3">
          <div
            class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
          >
            <div v-for="item in design" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in"
                >
                  <img
                    alt="HTML"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl"
                    style="color: transparent"
                  />
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div
                    class="tech font-medium text-secondary transition-all duration-300 translate-y-0"
                  >
                    {{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm"
                  >
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  font-size: 1.1rem;
  line-height: 2.2rem;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}
.pict {
  box-shadow: 0px 0px 43px -9px rgba(255, 219, 112, 0.44);
}
</style>
