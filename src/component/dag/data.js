export const data = {
  nodes: [
    {
      title: 'node1',
      error: true,
      nodeType: 'a',
      id: 'node1',
      nodeLevel: 2,
      desc: '成功率',
      state: 0,
    },
   
    {
      title: 'node2',
      error: false,
      nodeType: 'b',
      id: 'node2',
      nodeLevel: 0,
      desc: '成功率',
      state: 1
    },
    {
      title: 'node3',
      error: false,
      nodeType: 'a',
      id: 'node3',
      nodeLevel: 3,
      collapse: true,
      desc: '成功率成功率成功率成功率成功率88888899999000',
      state: 2
    },
    {
      title: 'node4',
      error: false,
      nodeType: 'a',
      id: 'node4',
      nodeLevel: 3,
      collapse: true,
      desc: '成功率',
      state: 3
    },
    {
      title: 'node5',
      error: false,
      nodeType: 'a',
      id: 'node5',
      nodeLevel: 3,
      collapse: true,
      desc: '成功率',
      state: 4
    }
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2'
    },
    {
      source: 'node2',
      target: 'node3'
    },
    
    {
       source: 'node3',
      target: 'node5'
    },
    {
       source: 'node3',
      target: 'node4'
    },
  ]
};