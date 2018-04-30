const list = []
for (let i = 0; i < 20; i++) {
  const obj = {
    id: i + 1,
    imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1106007789,1634881763&fm=27&gp=0.jpg',
    subTitle: `车友生活${i + 1}`,
    startAt: i + 1,
    title: `第${i + 1}不成功的寻路之旅，开着高尔夫6去探索山路。`,
    publisher: `张${i + 1}`,
    viewNum: i + 1,
    commentNum: i + 1,
    favoriteNum: i + 1
  }
  list.push(obj)
}

export { list }