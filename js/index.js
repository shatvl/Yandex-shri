(async function (root) {
    var map = root.SHRI_ISLANDS.MAP,
        containers = root.SHRI_ISLANDS.render(map),
        output = document.querySelector('.outer');
   
    Array.prototype.copyMatrix = function() {
        var matrix = [];
        for(var i = 0; i < this.length; i++) {
            matrix[i] = this[i].slice(0);
        }

        return matrix;
    }

    containers.forEach((container) => output.appendChild(container));
    //solution without visualize
    var count = await root.SHRI_ISLANDS.solution(map.copyMatrix());
    document.querySelector('.map__count').innerHTML = 'Количество островов: ' + count;
    root.SHRI_ISLANDS.COUNT = 0;
    await root.SHRI_ISLANDS.visualizeSolution(map.copyMatrix());
})(this);
