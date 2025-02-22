import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
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
    this.element.innerHTML = `<h1>Найдено книг – ${this.parentState.numFound}</h1>`;
    for (const card of this.parentState.list) {
      this.element.append(new Card(this.appState, card).render());
    }
    return this.element;
  }
}
