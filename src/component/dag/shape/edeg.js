import G6 from '@antv/g6'

G6.registerEdge('likePolyLine', {
  draw(cfg, group) {
    const startPoint = cfg.startPoint;
    const endPoint = cfg.endPoint;
    const endArrow = {
      path: 'M 0,0 L 8, 4 L 8,0 L 8, -4 Z',
      fill: '#C7C7C7',
      d: 0,
    };
    let shape;

    if (startPoint.x === endPoint.x) {
      shape = group.addShape('path', {
        attrs: {
          stroke: '#C7C7C7',
          endArrow,
          path: [
            ['M', startPoint.x, startPoint.y],
            ['L', endPoint.x, endPoint.y]
          ]
        }
      })
    }
    if (startPoint.x > endPoint.x || startPoint.x < endPoint.x) {
      const Xdiff = endPoint.x - startPoint.x;

      const cpOffset = 8;
      const offset = Xdiff < 0 ? cpOffset : -cpOffset;

      shape = group.addShape('path', {
        attrs: {
          stroke: '#C7C7C7',
          endArrow,
          path: [
            ['M', startPoint.x, startPoint.y],
            ['L', startPoint.x, (startPoint.y + endPoint.y) / 2 - cpOffset],
            ['Q',
              startPoint.x,
              (startPoint.y + endPoint.y) / 2 ,
              startPoint.x- offset,
              (startPoint.y + endPoint.y) / 2 ,
            ],
            ['L', endPoint.x + offset, (startPoint.y + endPoint.y) / 2],
            ['Q',
              endPoint.x,
              (startPoint.y + endPoint.y) / 2 ,
              endPoint.x,
              (startPoint.y + endPoint.y) / 2+ cpOffset ,
            ],
            ['L', endPoint.x, endPoint.y],
          ]
          
        }
      })
    }
    return shape;
  }
})