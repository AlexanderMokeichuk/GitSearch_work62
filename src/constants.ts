import Logo from "./assets/GitSearch.png";

export const BASE_URL = "https://api.github.com";
export const DEFAULT_USER_NAME = "AlexanderMokeichuk";

export const LOGO_STYLE = ({
  width: 40,
  height: 40,
  backgroundImage: `url(${Logo})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: 50
});
