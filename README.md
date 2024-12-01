<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<!-- PROJECT SHIELDS -->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL License][license-shield]][license-url] -->
[![MIT License](https://img.shields.io/badge/License-GPLv3-brightgreen.svg)](https://opensource.org/licenses/)
[![Issues](https://img.shields.io/github/issues-raw/acceleratescience/hands-on-llms.svg?maxAge=25000)](https://github.com/acceleratescience/resource-hub/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/acceleratescience/resource-hub.svg?style=flat)]()
[![GitHub pull requests](https://img.shields.io/github/issues-pr/acceleratescience/resource-hub.svg?style=flat)]()
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
<br>
[![GitHub stars](https://img.shields.io/github/stars/acceleratescience/resource-hub.svg?style=social&label=Star)]()
[![GitHub watchers](https://img.shields.io/github/watchers/acceleratescience/resource-hub.svg?style=social&label=Watch)]()
[![GitHub forks](https://img.shields.io/github/forks/acceleratescience/resource-hub.svg?style=social&label=Fork)](https://github.com/JonSnow/MyBadges)
[![GitHub followers](https://img.shields.io/github/followers/acceleratescience.svg?style=social&label=Follow)](https://github.com/JonSnow/MyBadges)
[![Twitter Follow](https://img.shields.io/twitter/follow/AccelerateSci.svg?style=social)](https://twitter.com/AccelerateSci)
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://acceleratescience.github.io/">
    <img src="./docs/imgs/full_acc.png" alt="Logo" height=80>
  </a>

  <h3 align="center">Accelerate Science Resource Hub</h3>

  <p align="justify">
    The Accelerate Science Resource Hub to support researchers across the University using AI in their work.
  </p>
  <p align="center">
    <!-- <a href="https://acceleratescience.github.io/diffusion-models/" style="font-size: 20px; text-decoration: none"><strong>Start »</strong></a>
    <br />
    <br /> -->
    <a href="https://github.com/acceleratescience/large-language-models/issues">Report Bug</a>
    ·
    <a href="https://github.com/acceleratescience/large-language-models/issues">Request Feature</a>
    <br />
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!---------------------------------------------------------------------------->

[Button Shield]: https://img.shields.io/badge/Shield_Buttons-37a779?style=for-the-badge

[License]: LICENSE
[Shield]: Types/Shield.md
[#]: #


<!---------------------------------[ Badges ]---------------------------------->

[Badge License]: https://img.shields.io/badge/-BY_SA_4.0-ae6c18.svg?style=for-the-badge&labelColor=EF9421&logoColor=white&logo=CreativeCommons
[Badge Likes]: https://img.shields.io/github/stars/MarkedDown/Buttons?style=for-the-badge&labelColor=d0ab23&color=b0901e&logoColor=white&logo=Trustpilot



## Current Site Map
The Resource Hub links to several Accelerate Science Workshops and their associated repos. Below is a clickable map that will take you to the appropriate site.

```mermaid
---
config:
  layout: elk
  look: handDrawn
  theme: dark

---
graph TD
    Res1[Site Repo]
    Res[Resource Hub]

    Train[Training]
    Soft[Software]
    Comm[Community]

    Z[Core Concepts]
    B[Intro to LLMs]
    C[Hands on LLMs]
    D[Diffusion Models]
    E[Packaging & Publishing]
    F[Intro to Docker]
    G[Hands on ML]

    Z1[Site Repo]
    B1[Site Repo]
    C1[Site Repo]
    D1[Site Repo]
    E1[Site Repo]
    F1[Site Repo]
    G1[Site Repo]
    

    M[Materials Repo]
    N[Materials Repo]
    N1[/Start\]
    N2[/Final\]

    subgraph hub[" "]
    direction LR
    Res -.-> Soft
    Res ---> Train
    Res -.-> Comm
    end

    hub --> Res1
    Train --> Z
    Train --> B
    Train --> C
    Train --> D
    Train --> E    
    Train --> F
    Train --> G

    Z --> Z1
    B --> B1
    C --> C1
    D --> D1
    E --> E1
    F --> F1
    G --> G1

    C ---> M
    E ---> N
    
    N --> N1
    N --> N2

    classDef siteRepo fill:#580a52,stroke:#333,stroke-width:4px;
    class Z1,B1,C1,D1,E1,F1,G1,Res1 siteRepo;

    classDef matRepo fill:#680d0d,stroke:#333,stroke-width:4px;
    class M,N,N1,N2 matRepo;

    click Res1 href "https://github.com/acceleratescience/resource-hub" _blank
    click Res href "https://docs.science.ai.cam.ac.uk/" _blank
    click Train href "https://docs.science.ai.cam.ac.uk/training/" _blank
    click Soft href "https://docs.science.ai.cam.ac.uk/software/" _blank
    click Comm href "https://docs.science.ai.cam.ac.uk/community/" _blank
    click Z href "https://docs.science.ai.cam.ac.uk/ai-core-concepts/" _blank
    click B href "https://docs.science.ai.cam.ac.uk/large-language-models/" _blank
    click C href "https://docs.science.ai.cam.ac.uk/large-language-models/" _blank
    click D href "https://docs.science.ai.cam.ac.uk/diffusion-models/" _blank
    click E href "https://docs.science.ai.cam.ac.uk/packaging-publishing/" _blank
    click F href "https://docs.science.ai.cam.ac.uk/docker-for-science/" _blank
    click G href "https://docs.science.ai.cam.ac.uk/training/" _blank
    click B1 href "https://github.com/acceleratescience/large-language-models" _blank
    click C1 href "https://github.com/acceleratescience/hands-on-llms" _blank
    click D1 href "https://github.com/acceleratescience/diffusion-models" _blank
    click E1 href "https://github.com/acceleratescience/packaging-publishing" _blank
    click F1 href "https://github.com/acceleratescience/docker-for-science" _blank
    click G1 href "https://docs.science.ai.cam.ac.uk/" _blank
    click M href "https://github.com/acceleratescience/hands-on-llms" _blank
    click N href "https://github.com/acceleratescience/packaging-publishing" _blank
    click N1 href "https://github.com/acceleratescience/packaging-publishing/tree/basic" _blank
    click N2 href "https://github.com/acceleratescience/packaging-publishing/tree/result" _blank
```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under a GNU GPL-3.0 License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/acceleratescience/resource-hub.svg?style=for-the-badge
[contributors-url]: https://github.com/acceleratescience/resource-hub/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/acceleratescience/resource-hub.svg?style=for-the-badge
[forks-url]: https://github.com/acceleratescience/packaging-publishing/network/members
[stars-shield]: https://img.shields.io/github/stars/acceleratescience/resource-hub.svg?style=for-the-badge
[stars-url]: https://github.com/acceleratescience/resource-hub/stargazers
[issues-shield]: https://img.shields.io/github/issues/acceleratescience/resource-hub.svg?style=for-the-badge
[issues-url]: https://github.com/acceleratescience/resource-hub/issues
[license-shield]: https://img.shields.io/github/license/acceleratescience/resource-hub.svg?style=for-the-badge
[license-url]: https://github.com/acceleratescience/resource-hub/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/company/accelerate-programme-for-scientific-discovery/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
