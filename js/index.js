{
  const menuBtn = document.querySelector(".menu-btn");
  const navListItems = document.querySelectorAll(".nav-list a");
  const portfolioWrapper = document.querySelector(".portfolio-wrapper");

  const openMenu = () => {
    portfolioWrapper.classList.toggle("openMenu");
    navListItems.forEach((a) => {
      a.addEventListener("click", () => {
        portfolioWrapper.classList.remove("openMenu");
      });
    });
  };
  menuBtn.addEventListener("click", openMenu);
}

const projectsContent = document.querySelector(".projects-content");
let projects = [
  {
    project_name: "landing page",
    image:
      "https://images.unsplash.com/photo-1754404053324-8f910c2b7e2d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    project_name: "coffee",
    image:
      "https://images.unsplash.com/photo-1754404053324-8f910c2b7e2d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    project_name: "restaurant",
    image:
      "https://images.unsplash.com/photo-1754404053324-8f910c2b7e2d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const showProject = (name, img) => {
  console.log(name, img);
  let projectCard = `
  <div class="card-project">
              <div class="projects-details">
                <h2>${name}</h2>
                <div class="languages">
                  <span id="html">HTML</span>
                  <span id="css">CSS</span>
                  <span id="js">JAVASCIRP</span>
                </div>
                <a href="#" class="demo-link-projects">
                  visit
                  <i class="bi bi-arrow-up-right"></i>
                </a>
              </div>
              <div class="project-img-container">
                <img
                  src="${img}"
                  alt="project image"
                />
              </div>
            </div>
  `;
  projectsContent.innerHTML += projectCard;
};

projects.forEach((project) => {
  showProject(project.project_name, project.image);
});
