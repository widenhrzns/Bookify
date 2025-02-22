import { DivComponent } from "../../common/div-component";

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.element.innerHTML = "";
    this.element.classList.add("header");
    this.element.innerHTML = `
        <div>
            <img src="/static/logo.svg" alt="Логотип" />
        </div>
    `;
    return this.element;
  }
}
