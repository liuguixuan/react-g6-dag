import G6 from '@antv/g6'
export const globalStyle = {
  edgeStyle: {
    radius: 10,
    offset: 10,
    stroke: '#ccc',
    lineWidth: 1,
    lineAppendWidth: 5,
    endArrow: {
      path: G6.Arrow.triangle(6, 9, 1),
      d: 1,
      fill: '#ccc',
    },
  },
  edgeActiveStyle: {
    lineWidth: 2,
    stroke: '#ccc',
    endArrow: {
      path: G6.Arrow.triangle(8, 12, 1),
      d: 1,
      fill: '#ccc',
    },
  },
  edgeSelectedStyle: {
    lineWidth: 2,
    stroke: '#006BFF',
    endArrow: {
      path: G6.Arrow.triangle(8, 12, 1),
      d: 1,
      fill: '#006BFF',
    },
  }
  
}