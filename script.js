$('#tab-contents .tab[id != "tab1"]').hide();
// 等しくない値を取得(tab2~4)して非表示にしている
$('#tab-menu a').on('click', function(event){
  $('#tab-contents .tab').hide();
  $('#tab-menu .active').removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});