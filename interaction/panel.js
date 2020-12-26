class Panel {
  constructor() {
    this.scale = 0
    this.angle = 0
  }
  draw() {
    ctx.fillStyle = "rgba(255,0,0,0.7)"

    // 캔버스 transform 사용시 초기화 해줘야함
    ctx.resetTransform()
    // ctx.setTransform(1, 0, 0, 1, 0, 0)

    ctx.translate(oX, oY)

    ctx.scale(this.scale, this.scale)

    ctx.translate(-oX, -oY)

    ctx.rotate(canUtil.toRadian(this.angle))

    ctx.fillRect(oX - 150, oY - 150, 300, 300)

    ctx.resetTransform()
    ctx.fillStyle = "#fff"
  }

  showContent() {
    ctx.fillStyle = "#fff"
    ctx.fillText(selectedBox.index, oX, oY)
  }
}
