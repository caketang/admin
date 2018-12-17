import marked from 'marked';
export default function markdownTransform(data) {
  // 配置参数请参考 marked 的文档 https://github.com/chjj/marked
  return marked(data, {
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });
}