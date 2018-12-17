const _baseUrl = 'http://musicapi.duapp.com/api.php'
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic/'
//模拟请求地址
// this.$http.get(api.getL$rc(id)).then((res) => {
//     // 1、先判断是否有歌词
//     if (res.data.nolyric) {
//         this.afterLrc = [{'txt': '(⊙０⊙) 暂无歌词'}]
//     } else {
//         this.lyric = res.data.lrc.lyric
//         this.getLrc()
//     }
// }, (res) => {
//     console.log('lrc fail')
//     this.afterLrc = [{'txt': '加载歌词失败'}]
// })
export default {
  getPlayListByWhere (cat, order, offset, total, limit) {
    return _baseUrl + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit
  },
  getLrc (id) {
    return _baseUrl2 + '?type=lyric&id=' + id
  },
  getSong (id) {
    return _baseUrl + '?type=url&id=' + id
  },
  getPlayListDetail (id) {
    return _baseUrl2 + '?type=playlist&id=' + id
  },
  getMv (id) {
    return _baseUrl2 + '?type=mv&id=' + id
  },
  search (words) {
    return _baseUrl2 + '?type=search&s=' + words
  }
}


