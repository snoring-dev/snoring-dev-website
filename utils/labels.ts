const frLabels = {
  about_me: "A propos",
  technical_stack: "Stack Technique:",
  formation: "Formation",
  skills: "Compétences",
  lang: "Langues",
  exp: "Expériences",
};
const enLabels = {
  about_me: "About",
  technical_stack: "Technical stack:",
  formation: "Academic path",
  skills: "Skills",
  lang: "Languages",
  exp: "Work history",
};

const labels = new Map();

labels.set('en', enLabels);
labels.set('fr', frLabels);

export type LabelsMap = typeof frLabels;

export default labels;