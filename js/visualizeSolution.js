(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    const CURRENT_POINT_CLASSNAME = 'current';
    const WATER_POINT_CLASSNAME = 'water';
    const ISLAND_POINT_CLASSNAME = 'island';

    var Renderer = function() {
        //step delay
        this.animationDelay = () => {
            return new Promise((res) => setTimeout(res, 500));
        };
        this.currentPoint = (function() {
            let point,
                addPostCurrentEffect = () => {
                    var classType = point.innerHTML == root.SHRI_ISLANDS.WATER 
                                    ? WATER_POINT_CLASSNAME
                                    : ISLAND_POINT_CLASSNAME;
                    point.classList.add(classType);
            };

            return { 
                setCurrentPoint: (newPoint) => {
                    if (point && point.classList.contains(CURRENT_POINT_CLASSNAME)) {
                        point.classList.remove(CURRENT_POINT_CLASSNAME);
                        addPostCurrentEffect();
                    }
                    point = newPoint
                },
                getCurrentPoint: () => point,
                addCurrentEffect: () => {
                    if (!point.classList.contains(CURRENT_POINT_CLASSNAME)) {
                        point.classList.add(CURRENT_POINT_CLASSNAME);
                    }
                }
            }
        })();
        this.handlePoint = (point) => {
            let row = document.querySelectorAll('.visualize__row')[point[0]],
            cell = row.querySelectorAll('.visualize__cell')[point[1]];
            this.currentPoint.setCurrentPoint(cell);
            this.currentPoint.addCurrentEffect();
        };
    };
    root.SHRI_ISLANDS.__proto__.renderer = new Renderer();

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     * 
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     */
    async function visualizeSolution(map) {
        root.SHRI_ISLANDS.VISUALIZING = true;
        await root.SHRI_ISLANDS.solution(map);
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
