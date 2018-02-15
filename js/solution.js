(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    async function solution(map) {
        var visualizing = root.SHRI_ISLANDS.VISUALIZING;

        var findIsland = async (i, j) => {            
            if (i < 0 || i >= map.length) return false;
            if (j < 0 || j >= map[i].length) return false;
            
            if (visualizing) {
                root.SHRI_ISLANDS.renderer.handlePoint([i, j]);            
                await root.SHRI_ISLANDS.renderer.animationDelay();
            }

            if (map[i][j]) {
                map[i][j] = 0;

                await findIsland(i + 1, j);
                await findIsland(i - 1, j);
                await findIsland(i, j + 1);
                await findIsland(i, j - 1);
            }
        }


        for(var i = 0; i < map.length; i++) {
            for(var j = 0; j < map[i].length; j++) {
                if (map[i][j]) {
                    visualizing ? root.SHRI_ISLANDS.updateCount() : root.SHRI_ISLANDS.COUNT++;
                    await findIsland(i,j);
                } else if (visualizing) {
                    root.SHRI_ISLANDS.renderer.handlePoint([i,j]);                    
                    await root.SHRI_ISLANDS.renderer.animationDelay();
                }
            }
        }

        return root.SHRI_ISLANDS.COUNT;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
