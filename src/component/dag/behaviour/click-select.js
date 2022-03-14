import G6 from '@antv/g6'

import { ItemState } from '../constant'
import { executeBatch } from "../utils";

G6.registerBehavior('click-select', {
  getEvents() {
    return {
      'node:click': 'handleNodeClick',
      'edge:click': 'handleEdgeClick',
      'canvas:click': 'handleCanvasClick'
    };
  },
  handleNodeClick(ev) {
    
    const { graph } = this;
    const item = ev.item;
    const edgeItems = item.getInEdges() || [];
    const sonEdgeItems = item.getOutEdges() || [];

    this.findParents(edgeItems);
    this.findSons(sonEdgeItems);
    
    graph.setItemState(item, ItemState.Selected, true);
 
  },
  handleEdgeClick(e) {
    const item = e.item;
    const { graph } = this;
    
    graph.setItemState(item, ItemState.Selected, true);
  },
  handleCanvasClick() {
    this.clearSelectedState();
  },
  clearSelectedState(shouldUpdate = () => true) {
    const { graph } = this;
    
    const selectedNodes = graph.findAllByState('node', ItemState.Selected);
    const selectedEdges = graph.findAllByState('edge', ItemState.Selected);
    
    executeBatch(graph, () => {
      [...selectedNodes, ...selectedEdges].forEach(item => {
        if (shouldUpdate(item)) {
          graph.setItemState(item, ItemState.Selected, false);
        }
      })
    });
  },
  findParents(edgeItems) {
    const { graph } = this;
    
    edgeItems.length &&
      edgeItems.forEach((edgeItem) => {
        graph.setItemState(edgeItem, ItemState.Selected, true);
      })
  },
  findSons(edgeItems) {
    const { graph } = this;
    
    edgeItems.length &&
      edgeItems.forEach((edgeItem) => {
        graph.setItemState(edgeItem, ItemState.Selected, true);
      })
  }
})
