import { DivComponent } from "../../common/div-component";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.element.classList.add("search");
    this.element.innerHTML = `
    <div class="search__wrapper">
      <input
        type="text"
        placeholder="Найти книгу или автора...."
        class="search__input"
        value="${this.state.searchQuery ? this.state.searchQuery : ""}"
      />
      <img src="./static/search.svg" alt="Поиск иконка" />
    </div>
    <button aria-label="Искать" >
      <img src="./static/search-white.svg" alt="Поиск белая иконка" />
    </button>
    `;
    return this.element;
  }
}
