export const CARD_NODE = 'cardNode';
export const ItemState = {
  Active: 'hover',
  Selected: 'selecte'
};

// 执行状态 0待运行，1运行中，2运行成功，3运行失败，4暂停，5空跑
export const STATUS_MAP = {
  READY: 0,
  RUNNING: 1,
  SUCCESS: 2,
  FAILURE: 3,
  PAUSE: 4,
  EMPTY_RUN: 5
}

export const NODE_DEFAULT_COLOR = {
  [STATUS_MAP.READY]: {
    fillBoxColor: '#FFEEDD',
    strockColor: '#FFA042',
    fillRectColor: '#FFC78E',
    textColor:'#272727'
    
  },
  [STATUS_MAP.RUNNING]: {
    fillBoxColor: '#ECFFFF',
    strockColor: '#4DFFFF',
    fillRectColor: '#CAFFFF',
    textColor: '#272727'
  },
  [STATUS_MAP.SUCCESS]: {
    fillBoxColor: '#F0FFF0',
    strockColor: '#93FF93',
    fillRectColor: '#BBFFBB',
    textColor: '#272727'
  },
  [STATUS_MAP.FAILURE]: {
    fillBoxColor: '#FFECEC',
    strockColor: '#FF5151',
    fillRectColor: '#ff7575',
    textColor: '#272727'
  },
  [STATUS_MAP.PAUSE]: {
    fillBoxColor: '#FCFCFC',
    strockColor: '#BEBEBE',
    fillRectColor: '#d0d0d0',
    textColor: '#272727'
  },
  [STATUS_MAP.EMPTY_RUN]: {
    fillBoxColor: '#F1E1FF',
    strockColor: '#CA8EFF',
    fillRectColor: '#DCB5FF',
    textColor: '#272727'
  }
};

export const NODE_SELECT_COLOR = {
  [STATUS_MAP.READY]: {
    fillBoxColor: '#fff',
    strockColor: '#FF8000',
    fillRectColor: '#FF8000',
    textColor: '#fff'

  },
  [STATUS_MAP.RUNNING]: {
    fillBoxColor: '#fff',
    strockColor: '#00FFFF',
    fillRectColor: '#00FFFF',
    textColor: '#fff'
  },
  [STATUS_MAP.SUCCESS]: {
    fillBoxColor: '#fff',
    strockColor: '#00EC00',
    fillRectColor: '#00EC00',
    textColor: '#fff'
  },
  [STATUS_MAP.FAILURE]: {
    fillBoxColor: '#fff',
    strockColor: '#FF0000',
    fillRectColor: '#FF0000',
    textColor: '#fff'
  },
  [STATUS_MAP.PAUSE]: {
    fillBoxColor: '#fff',
    strockColor: '#ADADAD',
    fillRectColor: '#ADADAD',
    textColor: '#fff'
  },
  [STATUS_MAP.EMPTY_RUN]: {
    fillBoxColor: '#fff',
    strockColor: '#BE77FF',
    fillRectColor: '#BE77FF',
    textColor: '#fff'
  }
};
