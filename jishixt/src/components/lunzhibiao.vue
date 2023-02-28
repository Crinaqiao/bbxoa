<<template>
    <div>
            <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>轮值表</el-breadcrumb-item>
      <el-breadcrumb-item>值班列表</el-breadcrumb-item>
    </el-breadcrumb>
<!-- 值日 -->
    <div class="promo" id="promo">
      <div class="content">
        值班内容：保证黄老师桌面、大圆桌的整洁；<br>饮水机水槽、地面的干净；倒垃圾。
      </div>
        <ul class="photo">
            <li class="it active">
                <div class="jtzr">劳 动 最 光 荣</div>
                <ul class="zrmd"><li>李嘉琪</li>
                <li>麦钰欣</li>
                <li>陆洁茹</li></ul>
              <div class="imgs">
              <div class="img1"><img src="../assets/images/sb.png" alt=""></div>
               <div class="img2"><img src="../assets/images/bj.png" alt=""></div>
              <div class="img3"><img src="../assets/images/ljt.png" alt="" ></div>
              <div class="img4"><img src="../assets/images/tuoba.png" alt=""></div>
              </div>
            </li>
            <li class="it">
                <div class="jtzr">劳 动 最 光 荣</div>
                <ul class="zrmd"><li>林伟斌</li>
                <li>贝坤龙</li>
                <li>陆健成</li></ul>
              <div class="imgs">
              <div class="img1"><img src="../assets/images/sb.png" alt=""></div>
               <div class="img2"><img src="../assets/images/bj.png" alt=""></div>
              <div class="img3"><img src="../assets/images/ljt.png" alt="" ></div>
              <div class="img4"><img src="../assets/images/tuoba.png" alt=""></div>
              </div>
            </li>
            <li class="it">
                <div class="jtzr">劳 动 最 光 荣</div>
                <ul class="zrmd"><li>张竞泽</li>
                <li>张梓力</li>
                <li>王志</li></ul>
              <div class="imgs">
              <div class="img1"><img src="../assets/images/sb.png" alt=""></div>
               <div class="img2"><img src="../assets/images/bj.png" alt=""></div>
              <div class="img3"><img src="../assets/images/ljt.png" alt="" ></div>
              <div class="img4"><img src="../assets/images/tuoba.png" alt=""></div>
              </div>
            </li>
            <li class="it">
                <div class="jtzr">劳 动 最 光 荣</div>
                <ul class="zrmd"><li>马佳帆</li>
                <li></li>
                <li>黄晓巧</li></ul>
              <div class="imgs">
              <div class="img1"><img src="../assets/images/sb.png" alt=""></div>
               <div class="img2"><img src="../assets/images/bj.png" alt=""></div>
              <div class="img3"><img src="../assets/images/ljt.png" alt="" ></div>
              <div class="img4"><img src="../assets/images/tuoba.png" alt=""></div>
              </div>
            </li>
            <li class="it">
                <div class="jtzr">劳 动 最 光 荣</div>
                <ul class="zrmd"><li>黄业峰</li>
                <li>郑凯豪</li>
                <li>谭柏洋</li></ul>
              <div class="imgs">
              <div class="img1"><img src="../assets/images/sb.png" alt=""></div>
               <div class="img2"><img src="../assets/images/bj.png" alt=""></div>
              <div class="img3"><img src="../assets/images/ljt.png" alt="" ></div>
              <div class="img4"><img src="../assets/images/tuoba.png" alt=""></div>
              </div>
            </li>
             <li class="it">
                <div class="jtzr">劳 动 最 光 荣</div>
                <ul class="zrmd"><li>郑宇健</li>
                <li>郑世祺</li>
                <li>张垲锋</li></ul>
              <div class="imgs">
              <div class="img1"><img src="../assets/images/sb.png" alt=""></div>
               <div class="img2"><img src="../assets/images/bj.png" alt=""></div>
              <div class="img3"><img src="../assets/images/ljt.png" alt="" ></div>
              <div class="img4"><img src="../assets/images/tuoba.png" alt=""></div>
              </div>
            </li> <li class="it">
                <div class="jtzr">劳 动 最 光 荣</div>
                <ul class="zrmd"><li>蔡振棋</li>
                <li>熊若宸</li>
                <li>陈志坤</li></ul>
              <div class="imgs">
              <div class="img1"><img src="../assets/images/sb.png" alt=""></div>
               <div class="img2"><img src="../assets/images/bj.png" alt=""></div>
              <div class="img3"><img src="../assets/images/ljt.png" alt="" ></div>
              <div class="img4"><img src="../assets/images/tuoba.png" alt=""></div>
              </div>
            </li>
        </ul>
        <div class="kk">
            <!-- 左侧按钮箭头 -->
            <a href="#" class="left" id="goPre"> &lt; </a>
            <!-- 右侧按钮箭头 -->
            <a href="#" class="right" id="goNext"> &gt; </a>

        </div>
        <!-- 小k框 -->
        <ul class="promo-nav">
            <li class="selected active" data-index='0'>周一</li>
            <li class="selected" data-index='1'>周二 </li>
            <li class="selected" data-index='2'>周三</li>
            <li class="selected" data-index='3'>周四</li>
            <li class="selected" data-index='4'>周五</li>
            <li class="selected" data-index='5'>周六</li>
            <li class="selected" data-index='6'>周日</li>
        </ul>
    </div>

      </div>
      
</template>
<script>
export default {
  mounted() {
    var its = document.getElementsByClassName("it"); //图片
    var selecteds = document.getElementsByClassName("selected"); //选择框
    var goPre = document.getElementById("goPre");
    var goNext = document.getElementById("goNext");
    var index = 0;
    var clearActive = function () {
      for (var i = 0; i < its.length; i++) {
        its[i].className = "it";
      }
      for (var i = 0; i < selecteds.length; i++) {
        selecteds[i].className = "selected";
      }
    };
    var goIndex = function () {
      clearActive();
      selecteds[index].className = "selected active";
      its[index].className = "it active";
    };
    var goN = function () {
      if (index < 6) {
        index++;
      } else {
        index = 0;
      }
      goIndex();
    };
    var goP = function () {
      if (index == 0) {
        index = 6;
      } else {
        index--;
      }
      goIndex();
    };
    goNext.addEventListener("click", function () {
      goN();
    });
    goPre.addEventListener("click", function () {
      goP();
    });
    for (var i = 0; i < selecteds.length; i++) {
      selecteds[i].addEventListener("click", function () {
        var selectedIndex = this.getAttribute("data-index");
        index = selectedIndex;
        goIndex();
      });
    }
    promo.addEventListener("mouseenter", function () {
      goNext.style.display = "block";
      goPre.style.display = "block";
      //     goPre.style.transform = 'translate(20px)';
      //     goNext.style.transform = 'translate(-20px)';
    });
    promo.addEventListener("mouseleave", function () {
      goNext.style.display = "none";
      goPre.style.display = "none";
      //     goPre.style.transform = 'translate(20px)';
      //     goNext.style.transform = 'translate(-20px)';
    });

    // /    // goPre.style.transform = '';
    // goNext.style.transform = '';
    // goNext.style.display = 'none';
    //     goPre.style.display = 'none';
    // });

    //自动播放
    // var timer = setInterval(function() {
    //     goNext.click();
    // }, 1500);
    //鼠标碰到就停止
    // var promo = document.getElementById('promo');
    //     promo.addEventListener('mouseenter', function() {
    //         timer = setInterval(function() {
    //             goNext.style.display = 'block';
    //             goPre.style.display = 'block';
    //                 goPre.style.transform = 'translate(20px)';
    // goNext.style.transform = 'translate(-20px)';

    //     }, 1500);
    // });
    //鼠标离开又播放
    // promo.addEventListener('mouseleave', function() {
    //     timer = setInterval(function() {
    //         goNext.click();
    //     }, 3500);
    // });
  },
  setup() {},
};
</script>


<style scoped>
.el-breadcrumb >>> .el-breadcrumb__inner {
  color: #f5d897 !important;
  font-size: 15px;
}
.el-breadcrumb >>> .el-breadcrumb__inner:hover {
  color: #fff !important;
}
/* .el-breadcrumb >>> .el-breadcrumb__inner {
  color: #fff !important;
}
.el-breadcrumb >>> .el-breadcrumb__inner:hover {
  color: rgb(63, 87, 124) !important;
} */
/* 扫地 */
.jtzr {
  position: absolute;
  top: 20px;
  left: 225px;
  text-align: center;
  line-height: 60px;
  width: 250px;
  height: 60px;
  margin: 0 auto;
  font-size: 25px;
  font-weight: 700;
  border-top: 4px solid rgb(255, 255, 255, 0.8);
  border-left: 4px solid rgb(255, 255, 255, 0.8);
  border-bottom: 4px solid grey;
  border-right: 4px solid grey;
  border-radius: 10px;
}
.zrmd {
  position: absolute;
  width: 500px;
  height: 50px;
  top: 45%;
  left: 48%;
  transform: translate(-50%, -50%);
  /* background-color: #fff; */
}
.zrmd li {
  float: left;
  width: 100px;
  height: 50px;
  margin-right: 50px;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
  border-bottom: 2px solid grey;
  border-right: 2px solid grey;
  /* background-color: #7cad42; */
  border-radius: 10px;
}
.imgs {
  position: absolute;
  height: 100px;
  width: 800px;
  bottom: 70px;
  /* left: 50%;
    transform: translateX(-50%); */
  /* background-color: pink; */
}
.imgs div {
  position: absolute;
  /* bottom: 70px; */
  /* width: 150px;
    height: 100px; */
  /* background-color: #fff; */
}
.img2 {
  right: 53px;
  bottom: -10px;
}
.img1 {
  right: 120px;
}
.img3 {
  left: 80px;
}
li {
  list-style: none;
}

.promo {
  position: absolute;
  width: 800px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* margin: auto 200px; */
  border-radius: 10px;
  box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, 0.3);
  background-color: rgb(255, 255, 255, 0.6);
  /* z-index: 15; */
}
/* .promo :hover .it {
    z-index: 8;
} */
.content{
  position: absolute;
  width: 400px;
  height: 50px;
  /* line-height: 50px; */
  text-align: center;
  left: 220px;
  bottom: 90px;
  /* color: #000;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, 0.3);
  background-color: rgb(255, 255, 255, 0.9); */
}
/* .content:hover{
  color: red;
} */
.it {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: all 0.5s;
}

/* 并集选择器可以集体声明相同的样式 */

.left,
.right {
  display: none;
  position: absolute;
  top: 50%;
  margin-top: -55px;
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  color: #fff;
  text-decoration: none;
  z-index: 100;
  border-radius: 50%;
  /* z-index: 9; */
}

.promo .kk a:hover {
  background: #fdd45f;
}
/* .promo .right :hover {
    background: #fdd45f;
} */

.left {
  /* transition: .5s; */
  left: 10px;
}

.right {
  /* transition: .5s; */
  right: 10px;
}

.it.active {
  opacity: 1;
  z-index: 10;
}

.promo-nav {
  position: absolute;
  right: 150px;
  bottom: 15px;
  width: 500px;
  height: 25px;
  z-index: 100;
}

.selected {
  float: left;
  width: 60px;
  height: 25px;
  margin-left: 10px;
  background: rgba(55, 61, 65, 0.3);
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  cursor: pointer;
}

.selected.active {
  background-color: #fdd45f;
}
</style>
