export function renderFilters(categories) {
return `
    <li>
    <button class="filter-btn active" data-category="">
        Всі
    </button>
    </li>
    ${categories
    .map(({ name }) => `
        <li>
        <button class="filter-btn" data-category="${name}">
            ${name}
        </button>
        </li>
    `)
    .join('')}
`;
}

export function renderAnimals(animals = []) {
  return animals.map(animal => {
    const categoriesMarkup = animal.categories
    .map(c => `<span class="pet-tag">${c.name}</span>`)
    .join('');

    return `
    <li class="pet-card">
        <img src="${animal.image}" alt="${animal.name}">

        <p class="pet-type">${animal.species}</p>

        <h3 class="pet-name">${animal.name}</h3>

        <div class="pet-tags">
        ${categoriesMarkup}
        </div>

        <p class="pet-meta">
        ${animal.age} · ${animal.gender}
        </p>

        <p class="pet-desc">
        ${animal.shortDescription}
        </p>

        <button class="pet-btn">
        Дізнатись більше
        </button>
    </li>
    `;
}).join('');
}