// Generated by CoffeeScript 1.3.3
(function() {

  define(["./indexer", "thirdparty/Three", "thirdparty/sugar"], function(Indexer) {
    var Three, csgToThree;
    Three = THREE;
    return csgToThree = function(solid) {
      var geometry, i, indexer, indices, polygon, v, vertex, _i, _j, _len, _ref, _ref1;
      geometry = new Three.Geometry;
      indexer = new Indexer;
      _ref = solid.toPolygons();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        polygon = _ref[_i];
        indices = (function() {
          var _j, _len1, _ref1, _results;
          _ref1 = polygon.vertices;
          _results = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            vertex = _ref1[_j];
            _results.push(indexer.add(vertex));
          }
          return _results;
        })();
        for (i = _j = 2, _ref1 = indices.length; 2 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 2 <= _ref1 ? ++_j : --_j) {
          geometry.faces.push(new Three.Face3(indices[0], indices[i - 1], indices[i], new Three.Vector3().copy(polygon.plane.normal)));
        }
      }
      geometry.vertices = (function() {
        var _k, _len1, _ref2, _results;
        _ref2 = indexer.unique;
        _results = [];
        for (_k = 0, _len1 = _ref2.length; _k < _len1; _k++) {
          v = _ref2[_k];
          _results.push(new Three.Vector3(v.pos.x, v.pos.y, v.pos.z));
        }
        return _results;
      })();
      return geometry;
    };
  });

}).call(this);
