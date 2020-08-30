window.addEventListener("DOMContentLoaded", () => {
  const imageList = Array.from(document.querySelectorAll(".material-item"));
  console.log(imageList);
  const modal = document.querySelector(".modal-content");
  const modalImage = document.querySelector(".modal-image");
  const closeButton = document.querySelector(".modal-button-close");
  const nextButton = document.querySelector(".modal-button-right");
  const prevButton = document.querySelector(".modal-button-left");
  const imageNum = imageList.length - 1;
  let num = 0;
  let nextImageNum = 0;
  let prevImageNum = 0;

  /*
  =   代入
  ==  大体同じとき　数字の1と文字の１：大体同じ2つ 1 + 2 = 3 / '1' + '2' = '12' / '2020' + '08' + '16' = '20200816'
  === 完全に同じ　1と1, '1'と'1', 1 ≠ '1'
  true: 正しい
  false: 違うよ
  */
  // imageList[]この中をループ
  imageList.forEach((image) => {
    // image...imageListから今注目してる１つ！
    image.addEventListener("click", (e) => {
      // image（注目してるやつ）をクリックしたら発動の関数
      num = imageList.findIndex((list) => list === image);
      console.log(num);
      nextImageNum = num === imageNum ? 0 : num + 1;
      prevImageNum = num === 0 ? imageNum : num - 1;
      // モーダル 表示
      modal.classList.add("is-show");
      const showImage = imageList[num];
      modalImage.innerHTML = showImage.innerHTML;
    });
  });
  closeButton.addEventListener("click", (e) => {
    modal.classList.remove("is-show");
  });
  nextButton.addEventListener("click", (e) => {
    num = nextImageNum;
    nextImageNum = num === imageNum ? 0 : num + 1;
    prevImageNum = num === 0 ? imageNum : num - 1;
    const showImage = imageList[num];
    modalImage.innerHTML = showImage.innerHTML;
  });
  prevButton.addEventListener("click", (e) => {
    num = prevImageNum;
    nextImageNum = num === imageNum ? 0 : num + 1;
    prevImageNum = num === 0 ? imageNum : num - 1;
    const showImage = imageList[num];
    modalImage.innerHTML = showImage.innerHTML;
  });
});
