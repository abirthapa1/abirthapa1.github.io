import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import abir from "./abir.png";
import profile_img from "./profile_img.png";
import automation from "./automation.png";
import cloud from "./cloud.png";
import devops from "./devops.png";
import vscode from "./vscode.png";
import terraform from "./terraform.png";
import docker from "./docker.png";
import git from "./git.png";
import kubernetes from "./kubernetes.png";
import grafana from "./grafana.png";
import aws from "./aws.png";
import github_actions from "./github_actions.png";
import right_arrow_white from "./right-arrow-white.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  abir,
  automation,
  cloud,
  devops,
  vscode,
  terraform,
  docker,
  git,
  kubernetes,
  grafana,
  aws,
  github_actions,
  right_arrow_white,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Portfolio website",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Threat Aware SOC",
    description: "Kubernetes application",
    bgImage: "/work-2.png",
  },
  {
    title: "Birthday Website",
    description: "Using typescript",
    bgImage: "/work-3.png",
  },
  {
    title: "EKS Automation",
    description: "CI/CD Pipeline",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    icon: assets.cloud,
    title: "Cloud Engineer",
    description: "Designing and implementing scalable cloud infrastructure...",
    link: "",
  },
  {
    icon: assets.devops,
    title: "DevOps pipeline",
    description: "Setting up of CI/CD pipelines in Github actions, Jenkins...",
    link: "",
  },
  {
    icon: assets.automation,
    title: "Automation & scripting",
    description: "Automating daily tasks using python, bash or powershell...",
    link: "",
  },
  {
    icon: assets.web_icon,
    title: "Web development",
    description: "Making responsive, user friendly and dynamic websites...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "HTML, CSS, JavaScript (React), Next Js, Python, Java, Go (basic), MYSQL, Bash",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description:
      "Bachelors of Science(Honours) in Computer Science, Post-Graduate Diploma in Cloud Operations",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Developer Tools",
    description:
      "AWS, GCP, Azure, Docker, Kubernetes, Terraform, Git, Helm, Ansible, Grafana",
  },
];

export const toolsData = [
  assets.vscode,
  assets.terraform,
  assets.kubernetes,
  assets.docker,
  assets.git,
  assets.grafana,
  assets.aws,
  assets.github_actions,
];
