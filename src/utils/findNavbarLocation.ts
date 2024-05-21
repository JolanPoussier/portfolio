export const findNavbarLocation = (
  homeVisible: boolean,
  projectsVisible: boolean,
  aboutVisible: boolean,
  contactVisible: boolean
) => {
  if (homeVisible) {
    return "";
  } else if (aboutVisible) {
    return "about";
  } else if (projectsVisible) {
    return "projects";
  } else if (contactVisible) {
    return "contact";
  } else {
    return "";
  }
};
