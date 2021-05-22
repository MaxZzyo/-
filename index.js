setInterval(function(){
    // 打开菜单
    document.getElementsByClassName("Popover ContentItem-action")[1].children[0].click()

    //点击删除按钮
    document.getElementsByClassName("Button Menu-item AnswerItem-selectMenuItem Button--plain")[7].click()

    //确认删除
    setTimeout(function() {
        document.getElementsByClassName("Button Button--primary Button--blue")[1].click()
    },1000)

}, 2000)
