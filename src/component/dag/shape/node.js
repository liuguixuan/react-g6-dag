import G6 from '@antv/g6'
import { CARD_NODE, NODE_DEFAULT_COLOR, NODE_SELECT_COLOR, ItemState } from '../constant'
const ICON_MAP = {
  a: 'https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*0HC-SawWYUoAAAAAAAAAAABkARQnAQ',
  b: 'https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*sxK0RJ1UhNkAAAAAAAAAAABkARQnAQ',
};

const nodeOption = {
  drawShape(cfg, group) {
    const { state } = cfg;
    const r = 2;
    const shape = group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 200,
        height: 48,
        stroke: NODE_DEFAULT_COLOR[state].strockColor,
        fill: NODE_DEFAULT_COLOR[state].fillBoxColor,
        shadowColor: NODE_DEFAULT_COLOR[state].strockColor,
        radius: r,
        fillOpacity: 0.7
      },
      name: `main-box-${state}`,
      draggable: true
    });



    group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 200,
        height: 24,
        fill: NODE_DEFAULT_COLOR[state].fillRectColor,
        radius: [r, r, 0, 0],

      },
      name: `title-box-${state}`,
      draggable: true
    });

    // left icon
    group.addShape('image', {
      attrs: {
        x: 4,
        y: 3,
        height: 14,
        width: 14,
        cursor: 'pointer',
        img: ICON_MAP[cfg.nodeType || 'app'],
      },
      name: 'node-icon',
    });
    // title text
    group.addShape('text', {
      attrs: {
        fontSize: 12,
        fontWeight: 500,
        textBaseline: 'top',
        y: 4,
        x: 24,
        lineHeight: 24,
        text: cfg.title,
        fill: NODE_DEFAULT_COLOR[state].textColor,
      },
      name: 'title',
    });

    let descX, descText, descL = cfg.desc.length;
    if (descL * 12 > 200) {
      descX = 2;
      descText = cfg.desc.slice(0, Math.floor((200 - 2) / 12)) + '...'
    } else {
      descX = (200 - descL * 12) / 2;
      descText = cfg.desc
    }
    group.addShape('text', {
      attrs: {
        fontSize: 12,
        textBaseline: 'top',
        y: 28,
        x: descX,
        lineHeight: 24,
        text: descText,
        fill: 'rgba(0,0,0, 0.4)',
      },
      name: `desc`,
    });

    return shape;
  },
  setState(name, value, item) {
    const group = item.getContainer();
    const keyShape = item.getKeyShape();
    const { state } = item.getModel();
    const { attrs } = keyShape;

    group.sort();

    if (name == 'hover' && value) {
      keyShape.attr({ ...attrs, shadowOffset: 2, shadowBlur: 2, fillOpacity: 0.1 })
    } else if (name == 'hover') {
      keyShape.attr({ ...attrs, fillOpacity: 0.7, shadowOffset: 0, shadowBlur: 0 })
    }

    if (name == ItemState.Selected) {
      const firstShape = group.getChildByIndex(0);
      const { attrs: firstAttr } = firstShape;
      const secondShape = group.getChildByIndex(1);
      const { attrs: secondAttr } = secondShape;
      const thirdShape = group.getChildByIndex(2);
      const { attrs: thirdAttr } = thirdShape;
      const forthShape = group.getChildByIndex(3);
      const { attrs: forthAttr } = forthShape;

      if (value) {
        firstShape.attr({ ...firstAttr, shadowColor: NODE_SELECT_COLOR[state].strockColor, stroke: NODE_SELECT_COLOR[state].strockColor, fill: NODE_SELECT_COLOR[state].fillBoxColor, fillOpacity: 1, shadowOffset: 2, shadowBlur: 2 })
        secondShape.attr({ ...secondAttr, fill: NODE_SELECT_COLOR[state].fillRectColor });
        forthShape.attr({ ...forthAttr, fill: NODE_SELECT_COLOR[state].textColor });
      } else {
        firstShape.attr({ ...firstAttr, shadowColor: NODE_DEFAULT_COLOR[state].strockColor, stroke: NODE_DEFAULT_COLOR[state].strockColor, fill: NODE_DEFAULT_COLOR[state].fillBoxColor, fillOpacity: 0.7, shadowOffset: 0, shadowBlur: 0 })
        secondShape.attr({ ...secondAttr, fill: NODE_DEFAULT_COLOR[state].fillRectColor });
        forthShape.attr({ ...forthAttr, fill: NODE_DEFAULT_COLOR[state].textColor });
      }
    }

  }
};

G6.registerNode(CARD_NODE, nodeOption, 'single-node');