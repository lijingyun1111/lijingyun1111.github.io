<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/imgs/favicon.ico");
         document.title = 'ヽ(●-`Д´-)ノ我生气了！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/imgs/favicon.ico");
         document.title = 'ヾ(Ő∀Ő3)ノ你回来了！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });