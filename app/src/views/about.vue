<template>
    <div class="box">
        <div class="logo">
            <img src="@/assets/images/coding-freak.gif" alt="">
        </div>
        <div class="word">
            <div class="title">
                <p>
                    Hi, 很高兴能和你在这里相遇~
                </p>
                <hr/>
            </div>

            <div class="linear-text">
                我很喜欢村上春树说过的一句话：“不必太纠结于当下，也不必太忧虑未来，人生没有无用的经历，当你经过一些事情之后，眼前的风景已经和从前不一样了。”这简简单单的一段话却蕴含了人生的真谛。
            </div>
            <div class="linear-text">
                成年人的世界，不存在永恒的靠山，你的靠山就是你的努力和独立。谁的人生不是荆棘前行，你跌倒的时候，懊恼的时候，品尝眼泪的时候，都请你不要轻言放弃，因为从来没有一种坚持会被辜负。
                每个人都会有一段异常艰难的时光 生活的窘迫，工作的失意，学业的压力，爱的惶惶不可终日
                挺过来的，人生就会豁然开朗，挺不过来的，时间也会教会你怎么与它们握手言和，所以你都不必害怕，你可以难过，可以不开心，但要有限度，你难过之后，该面对的还得要去面对，谁都有过难过的事，没有人会为你背负太多，只希望过了这个坎，一切都会越来越好。
            </div>
            <div class="linear-text">Those who go up the mountain should never look down on those who come down !</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "about"
}
</script>

<style scoped lang="scss">
.box {
  display: flex;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  .word {

    .title {
      margin-top: 100px;
      font-size: 28px;
      font-weight: 900;

      width: 380px;

      color: blue;
      @supports (-webkit-background-clip: text) or (background-clip: text) {
        background: linear-gradient(to right, rgb(143, 225, 240), rgb(244, 205, 232));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    }

    .linear-text {
      text-indent: 2em;
      color: rgb(65, 65, 66);
      padding-right: 80px;
      line-height: 30px;
      font-weight: 700;
    }

  }
}
</style>