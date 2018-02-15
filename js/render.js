(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Создает HTML элемент заданного типа с заданным CSS классом
     *
     * @param {string} type тип создаваемого HTML элемента
     * @param {string} className CSS класс
     * @param {string} [text] текст
     * @returns {HTMLElement[]} HTML элемент
     */
    function element(type, className, text) {
        var elem = document.createElement(type);
        elem.className = className;

        if (typeof text !== 'undefined') {
            elem.innerText = text;
        }

        return elem;
    }

    /**
     * Создает визуализацию карты по его схеме
     *
     * @param {number[][]} map карта островов
     * @returns {HTMLElement[]} HTML элементы (контейнер для исходных данных + контейнер для визуализации)
     */
    function render(map) {
        var containerElem = element('div', 'outer__map'),
            visualizeContainerElem = element('div', 'outer__visualize'),        
            rowElem,
            visualizeRowElem,            
            type,
            row,
            cell,
            x,
            y;

        containerElem.appendChild(element('h3', 'map__header', 'Исходные данные'));
        containerElem.appendChild(element('div', 'map__count', 'Количество островов: ' + root.SHRI_ISLANDS.COUNT));
        visualizeContainerElem.appendChild(element('h3', 'visualize__header', 'Визуализация алгоритма'));
        visualizeContainerElem.appendChild(element('div', 'visualize__count', 'Количество островов: ' + root.SHRI_ISLANDS.COUNT));

        for (y = 0; y < map.length; y++) {
            row = map[y];
            rowElem = element('div', 'map__row');
            visualizeRowElem = element('div', 'visualize__row');

            for (x = 0; x < row.length; x++) {
                cell = row[x];

                switch (cell) {
                    case WATER:
                        type = 'water';
                        break;

                    case ISLAND:
                        type = 'island';
                        break;

                    default:
                        type = undefined;
                }
                
                visualizeRowElem.appendChild(
                    element('div', 'visualize__cell', cell)
                );
                rowElem.appendChild(
                    element('div', 'map__cell' + (type ? ' map__cell_' + type : ''), cell)
                );
            }

            containerElem.appendChild(rowElem);
            visualizeContainerElem.appendChild(visualizeRowElem);
        }

        return [containerElem, visualizeContainerElem];
    }

    root.SHRI_ISLANDS.updateCount = function () {
        document.querySelector('.visualize__count').innerHTML = 'Количество островов: ' + (++root.SHRI_ISLANDS.COUNT);
    }

    root.SHRI_ISLANDS.render = render;
})(this);
