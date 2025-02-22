import { DivComponent } from "../../common/div-component";
import "./card-list.css";

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.element.innerHTML = `<div class="card_list__loader">Загрузка...</div>`;
      return this.element;
    }
    this.element.classList.add("card_list");
    this.element.innerHTML = `<h1>Найдено книг – ${this.parentState.list.length}</h1>`;
    return this.element;
  }
}
