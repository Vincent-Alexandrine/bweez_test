/*
  getTheme(string) -> theme
  addTheme(string, theme) -> void || true || promise
  removeTheme(string) -> void || true || promise

  validateTheme(theme) -> boolean
*/

const themesMap = new Map();

class ThemeService {
  static instance;

  constructor() {
    if (ThemeService.instance)
      return ThemeService.instance;

    ThemeService.instance = this;
  }

  get(name) {
    return themesMap.get(name);
  }

  add({ name, ...theme }) {
    themesMap.set(name, theme);
  }

  names() {
    return [...themesMap.keys()];
  }

  remove(name) {
    return themesMap.delete(name);
  }
}

const singleton = new ThemeService();

export default singleton;
