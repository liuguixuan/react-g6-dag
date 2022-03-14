/** 执行批量处理 */
export function executeBatch(graph, execute) {
  graph.setAutoPaint(false);

  execute();

  graph.paint();
  graph.setAutoPaint(true);
}