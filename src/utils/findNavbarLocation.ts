export const findNavbarLocation = (
  homeVisible: boolean,
  projectsVisible: boolean
) => {
  if (homeVisible) {
    return '';
  } else if (projectsVisible) {
    return 'projects';
  } else {
    return 'about';
  }
};
