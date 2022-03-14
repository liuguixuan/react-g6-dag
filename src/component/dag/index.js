import React, { useEffect, useState } from 'react'
import G6 from '@antv/g6'

import './shape/node'
import './shape/edeg'
import './behaviour'

import NodeContextMenu from './contextMenu'

import { data } from './data'
import { CARD_NODE } from './constant'
import { globalStyle } from './style'

const ShowRelation = (props) => {
  let graph
  // 节点ContextMenu坐标
  const [showNodeContextMenu, setShowNodeContextMenu] = useState(false)
  const [nodeContextMenuX, setNodeContextMenuX] = useState(0)
  const [nodeContextMenuY, setNodeContextMenuY] = useState(0)

  const handleSetNodeContextMenu = () => {
    setShowNodeContextMenu(false)
  }
  useEffect(() => {
    if (!graph) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      graph = new G6.Graph({
        //挂载节点
        container: 'mountNode',
        width: props.width || window.innerWidth,
        height: props.height || window.innerHeight,
        groupByTypes: false,
        layout: {
          type: 'dagre',
          ranksep: 25,
          nodesep: 60,
          sortByCombo: false,
          nodeStrength: 30,
          edgeStrength: 0.1,
        },
        modes: {
          default: [
            { type: 'drag-canvas', allowDragOnItem: true }, //可拖拽
            'zoom-canvas', //可缩放
            'active-edge',
            'click-select',
          ],
        },
        defaultNode: {
          //使用自定义节点
          type: CARD_NODE,
          anchorPoints: [
            [0.5, 1],
            [0.5, 0],
          ],
        },
        defaultEdge: {
          type: 'likePolyLine', // 在数据中已经指定 type，这里无需再次指定
          style: globalStyle.edgeStyle,
        },
        defaultCombo: {
          type: 'rect',
          anchorPoints: [
            [0.5, 0],
            [0.5, 1],
          ],
          style: {
            fillOpacity: 0,
            fill: '#ccc',
            stroke: '#bbb',
          },
        },
        nodeStateStyles: {
          hover: {},
          select: {},
        },
        edgeStateStyles: {
          hover: globalStyle.edgeActiveStyle,
          selecte: globalStyle.edgeSelectedStyle,
        },
        fitCenter: true,
      })
    }
    graph.data(data)
    graph.render()
    graph.on('node:contextmenu', (evt) => {
      evt.preventDefault()
      const { canvasX, canvasY, item } = evt

      const model = item.getModel()
      const { x, y } = model
      const point = graph.getCanvasByPoint(x, y)

      console.log(canvasX, canvasY, evt)
      setNodeContextMenuX(canvasX-200)
      setNodeContextMenuY(canvasY)
      setShowNodeContextMenu(true)
    })
  }, [])
  return (
    <div>
      <div id="mountNode">
        {showNodeContextMenu && (
          <NodeContextMenu
            x={nodeContextMenuX}
            y={nodeContextMenuY}
            setNodeContextMenu={handleSetNodeContextMenu}
          />
        )}
      </div>
    </div>
  )
}

export default ShowRelation
