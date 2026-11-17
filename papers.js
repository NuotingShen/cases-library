/* =========================================================================
  科研论文 / RESEARCH PAPERS（同行评审的论文）

  添加一条：复制下面任意一段 { ... }, 粘贴到列表里，再修改内容。
  注意：
  - 每段用 { 开头，用 }, 结尾（最后的逗号不能少）
  - 文字要放在双引号 " " 里
  - year 是数字，不加引号
  - integration 可以有多个值，放在方括号里，用逗号隔开
  - id 不能和 papers.js、cases.js 里的任何一条重复

  可以填的值：
  category:      "Pure Overlay" | "Overlay (Physical tokens on display)" | "Next to a physical object"
                    | "Actuated + Overlay" | "Actuated"
  flow:          "Digital → Physical" | "Physical → Digital" | "Bidirectional"
                    谁影响谁：数字改变实体 / 实体（或人对实体的操作）改变数字 / 两个方向都有
  integration:   物理部分和数字部分怎么结合（可以有多个值，放在方括号里）
                    "Projection on top"      投影仪把画面投在实体上
                    "AR overlay"             AR 眼镜/平板把虚拟内容叠在实体上或周围
                    "Screen underneath"      实体放在屏幕（桌面屏、iPad）上面
                    "Separate screen / app"  数字部分是旁边另一块屏幕、控制器或手机/电脑 app，没有对齐叠加
                    "Built-in"               LED、马达、传感器等装在实体里面
                    "Sensing around"         摄像头、激光扫描、动作传感器等放在实体周围，读取实体或人的动作
  collaboration: "Individual" | "Presentation" | "Shared" | "Collaboration"

  图片：把图片放进 images 文件夹，命名为 id.jpg（例如 images/uplift.jpg），或者用 image: "图片链接"
   ========================================================================= */

const PAPERS = [

  {
    id: "participatory-mapping-markers",
    title: "Toward Low-Barrier Participatory Mapping Workshops: Designing Marker-Based Tangible Interactions for Projected Tabletops",
    authors: "Masoudifard et al.",
    year: 2026,
    category: "Pure Overlay",
    physical: "Printed fiducial markers moved on a tabletop",
    digital: "Off-the-shelf projector and camera turn ordinary surfaces into interactive displays",
    combination: "A camera tracks the printed markers that people move on the table; the projector shows the map and feedback on the same surface.",
    flow: "Bidirectional",
    integration: ["Projection on top", "Sensing around"],
    collaboration: "Collaboration",
    encodesData: "No",
    url: "https://doi.org/10.1145/3821402.3830147",
    notes: "NordiCHI 2026 Adjunct (poster). Participatory mapping workshops without specialized hardware. Joint work.",
    image:"https://dl.acm.org/cms/10.1145/3821402.3830147/asset/be03797b-ea2c-4dd2-aa15-72745f12421b/assets/images/medium/nordichi26adjunct-61-fig1.jpg",
  },

  {
    id: "tangiblenet",
    title: "TangibleNet: Synchronous Network Data Storytelling through Tangible Interactions in Augmented Reality",
    authors: "Takahira et al.",
    year: 2025,
    category: "Pure Overlay",
    physical: "Double-sided magnets",
    digital: "Projector-based AR prototype",
    combination: "Projected content is overlaid on and around the physical magnets, which serve as tangible elements.",
    flow: "Bidirectional",
    integration: ["Projection on top"],
    collaboration: "Presentation",
    encodesData: "No",
    url: "https://doi.org/10.1145/3706598.3714265",
    notes: "CHI 2025. One person operates and explains to an audience. Interviews with professionals + workshops with 14 HCI/VIS researchers; evaluation N=12.",
    image:"https://dl.acm.org/cms/10.1145/3706598.3714265/asset/cf932d28-ffae-459c-be06-49c8a2af1cb6/assets/images/medium/chi25-1170-fig45.jpg",
  },

  {
    id: "augmented-urban-models",
    title: "Augmented urban models: Investigating how data layout and link to the physical referent impact visual search in augmented reality",
    authors: "Benkhelifa et al.",
    year: 2025,
    category: "Pure Overlay",
    physical: "Urban physical 3D model",
    digital: "Virtual 2D data windows, AR (see-through head-mounted display)",
    combination: "AR places virtual data windows on and around the physical urban model.",
    flow: "Digital → Physical",
    integration: ["AR overlay"],
    collaboration: "Individual",
    encodesData: "No",
    url: "https://doi.org/10.1016/j.ijhcs.2025.103556",
    notes: "IJHCS 2025. Design space of window layouts and links between virtual data and the physical referent.",
    image:'https://ars.els-cdn.com/content/image/1-s2.0-S1071581925001132-gr6.jpg',
  },

  {
    id: "physical-referent",
    title: "Exploiting Physical Referent Features as Input for Multidimensional Data Selection in Augmented Reality",
    authors: "Perelman et al.",
    year: 2024,
    category: "Pure Overlay",
    physical: "Physical referent (the object the data is about)",
    digital: "AR, space-time cube",
    combination: "AR visualization is anchored to the physical referent; the referent's edges, faces and corners are used as input to select data.",
    flow: "Bidirectional",
    integration: ["AR overlay"],
    collaboration: "Individual",
    encodesData: "No",
    url: "https://doi.org/10.1145/3648613",
    notes: "ACM TOCHI 2024. Physical object used as input; compared with mid-air gestures.",
    image:"https://dl.acm.org/cms/10.1145/3648613/asset/2c888924-7171-4a1e-8558-0d542734df16/assets/images/medium/tochi-2022-0078-f14.jpg",
  },

  {
    id: "printed-dataviz",
    title: "Exploring Interactions with Printed Data Visualizations in Augmented Reality",
    authors: "Tong et al.",
    year: 2023,
    category: "Pure Overlay",
    physical: "Paper sheets (printed data)",
    digital: "AR dynamic updates (HoloLens 2)",
    combination: "AR overlays dynamic updates on top of the static printed data; touching, folding, tilting or stacking the paper triggers commands.",
    flow: "Bidirectional",
    integration: ["AR overlay"],
    collaboration: "Individual",
    encodesData: "Yes",
    url: "https://doi.org/10.1109/TVCG.2022.3209386",
    notes: "IEEE TVCG 2023 (VIS 2022). Design space of 81 paper interactions from workshops (N=20); user study N=12.",
    image:"https://vis.cse.ust.hk/groups/xr-vis/assets/paper_teaser/2022_arpaperinteraction.jpg",
  },

  {
    id: "multitouch-querying",
    title: "Multi-Touch Querying on Data Physicalizations in Immersive AR",
    authors: "Herman et al.",
    year: 2021,
    category: "Pure Overlay",
    physical: "3D printed terrain models, anatomical scans, or abstract data",
    digital: "AR overlay to display results",
    combination: "Touching the physical model triggers queries; results appear as an AR overlay on the model.",
    flow: "Bidirectional",
    integration: ["AR overlay", "Built-in"],
    collaboration: "Individual",
    encodesData: "Yes",
    url: "https://doi.org/10.1145/3488542",
    notes: "PACM HCI (ISS) 2021. Applied to climate simulation data with feedback from domain scientists.",
    image:"https://dl.acm.org/cms/asset/9b8ae7cd-03ca-4128-be85-508bcd2c3e19/3488542.key.jpg",
  },

  {
    id: "uplift",
    title: "Uplift: A Tangible and Immersive Tabletop System for Casual Collaborative Visual Analytics",
    authors: "Ens et al.",
    year: 2021,
    category: "Pure Overlay",
    physical: "3D model on a central tabletop display with tangible interaction",
    digital: "Augmented reality, mid-air data visualisation",
    combination: "Tangible objects on the tabletop control the model; AR shows synchronized mid-air visualizations above the table.",
    flow: "Bidirectional",
    integration: ["Screen underneath", "AR overlay"],
    collaboration: "Collaboration",
    encodesData: "Partly",
    url: "https://doi.org/10.1109/TVCG.2020.3030334",
    notes: "IEEE TVCG 2021 (VIS 2020). Multiple people analyze together with synchronized AR views. Campus microgrid, co-designed with building management and energy stakeholders.",
    image:"https://www.sgratzl.com/publication/uplift/featured.png",
  },

  {
    id: "crowdcollab",
    title: "CrowdCollab: A Multi-user, Multi-perspective Collaborative Tool for Crowd Planning",
    authors: "van den Bogaard et al.",
    year: 2025,
    category: "Overlay (Physical tokens on display)",
    physical: "Tangibles on a portable tabletop",
    digital: "Tabletop display + handheld display",
    combination: "Tangibles are placed on a tabletop display that shows the plan underneath them; a handheld display gives another view of the same plan.",
    flow: "Bidirectional",
    integration: ["Screen underneath", "Separate screen / app"],
    collaboration: "Collaboration",
    encodesData: "Not sure",
    url: "https://doi.org/10.1145/3689050.3706007",
    notes: "TEI 2025. Joint work on crowd planning, multiple users and perspectives. To check: what the tangibles represent and how the handheld view is linked to the tabletop.",
    image:"https://dl.acm.org/cms/10.1145/3689050.3706007/asset/700d5743-c809-4385-a11b-79356684deb7/assets/images/medium/tei25-97-fig1.jpg",
  },

  {
    id: "physlens",
    title: "PhysLens: Enrich Data Physicalization through a Lens of Details",
    authors: "Miao et al.",
    year: 2025,
    category: "Next to a physical object",
    physical: "Data physicalization artifact encoding indoor environmental data",
    digital: "PhysLens: a separate digital interface showing data-mapping details",
    combination: "A digital interface placed next to the physicalization explains its data mapping and details.",
    flow: "Digital → Physical",
    integration: ["Separate screen / app"],
    collaboration: "Individual",
    encodesData: "Yes",
    url: "https://doi.org/10.1145/3715668.3736358",
    notes: "DIS 2025 Companion. Semi-lab study N=16. To check: whether the flow is bidirectional (IoT control is mentioned as future work).",
    image:"https://dl.acm.org/cms/10.1145/3715668.3736358/asset/e3cea8e2-a704-4118-beb8-ba66ca2b2291/assets/images/medium/dis25companion-79-fig1.jpg",
  },

  {
    id: "augmented-dynamic-dataphys",
    title: "Augmented Dynamic Data Physicalization: Blending Shape-Changing Data Sculptures With Virtual Content for Interactive Visualization",
    authors: "Engert et al.",
    year: 2025,
    category: "Actuated + Overlay",
    physical: "Shape-changing physical data representations (mid-air data sculptures)",
    digital: "High-resolution virtual content, AR",
    combination: "Shape-changing physical data is combined with AR virtual content (scales, labels, context) aligned to it.",
    flow: "Digital → Physical",
    integration: ["Built-in", "AR overlay"],
    collaboration: "Individual",
    encodesData: "Yes",
    url: "https://doi.org/10.1109/TVCG.2025.3547432",
    notes: "IEEE TVCG 2025. Use cases: personal information hubs, interactive exhibitions, immersive analytics. To check: whether the physical part is also used as input; the exhibition use case may count as Shared.",
    image:"https://ieeexplore.ieee.org/ielx8/2945/11151252/10930699/graphical_abstract/tvcg-gagraphic-3547432.jpg",
  },

  {
    id: "emerge",
    title: "EMERGE: Exploring Interactions with Physically Dynamic Bar Charts",
    authors: "Taher et al.",
    year: 2015,
    category: "Actuated + Overlay",
    physical: "10x10 interactive bar chart",
    digital: "Projection, RGB LEDs, Arduino, touch detection",
    combination: "Motorized bars change height; projection and LEDs add color and highlights; touching the bars acts as input.",
    flow: "Bidirectional",
    integration: ["Built-in", "Projection on top"],
    collaboration: "Individual",
    encodesData: "Yes",
    url: "https://doi.org/10.1145/2702123.2702604",
    notes: "CHI 2015. Interactions for annotation, filtering, organization and navigation; user study N=17.",
    image:"https://dl.acm.org/cms/asset/e8ad5c03-302a-4952-8f07-3d58e8010c25/2702123.2702604.key.jpg",
  },

  {
    id: "emerge-followup",
    title: "Investigating the Use of a Dynamic Physical Bar Chart for Data Exploration and Presentation",
    authors: "Taher et al.",
    year: 2017,
    category: "Actuated + Overlay",
    physical: "10x10 interactive bar chart",
    digital: "Touch screen, motors and software, RGB LEDs",
    combination: "Motors drive the bar heights; a separate touch screen controls the chart; LEDs highlight bars.",
    flow: "Bidirectional",
    integration: ["Built-in", "Separate screen / app"],
    collaboration: "Individual",
    encodesData: "Yes",
    url: "https://doi.org/10.1109/TVCG.2016.2598498",
    notes: "IEEE TVCG 2017 (VIS 2016). Follow-up to EMERGE. N=16 non-experts explored a dataset and prepared a short presentation. To check: collaboration could also be Presentation.",
    image:"https://i.ytimg.com/vi/Yj5WmbOc5bY/maxresdefault.jpg",
  },

  {
    id: "colocated-shape-changing-bar-chart",
    title: "Exploring Co-located Interactions with a Shape-Changing Bar Chart",
    authors: "Sturdee et al.",
    year: 2023,
    category: "Actuated",
    physical: "Shape-changing physical bar chart",
    digital: "Motors and control software",
    combination: "A dynamic physical bar chart used by co-located groups; compared with earlier single-user studies.",
    flow: "Digital → Physical",
    integration: ["Built-in"],
    collaboration: "Collaboration",
    encodesData: "Yes",
    url: "https://doi.org/10.1145/3544548.3581214",
    notes: "CHI 2023. Co-located users showed non-interactive gestures, mirroring of the physicalization, and new hand gestures. To check: whether it has a digital display layer or touch input (if so, category and flow change).",
    image:"https://dl.acm.org/cms/10.1145/3544548.3581214/asset/d840c0ec-fcf0-4a30-b9e1-2d44c0b5b947/assets/images/medium/chi23-527-fig1.jpg",
  },

];
