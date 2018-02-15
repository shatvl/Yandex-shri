(function (root) {
    var SHRI_ISLANDS = {};

    SHRI_ISLANDS.WATER = 0;
    SHRI_ISLANDS.ISLAND = 1;
    SHRI_ISLANDS.COUNT = 0;
    SHRI_ISLANDS.VISUALIZING = false;

    SHRI_ISLANDS.MAP = [
        [1, 0, 0, 1, 0, 1],
        [0, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 0, 1, 0, 0],
        [1, 0, 1, 0, 1, 1]
    ];

    root.SHRI_ISLANDS = SHRI_ISLANDS;
})(this);
